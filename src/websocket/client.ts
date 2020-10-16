import Websocket from 'isomorphic-ws'
import * as msgpack from '@msgpack/msgpack';
import { nanoid } from 'nanoid'
import { SignalResponseGeneric } from '../api/app'

/**
 * A Websocket client which can make requests and receive responses,
 * as well as send and receive signals
 *
 * Uses Holochain's websocket WireMessage for communication.
 */
export class WsClient {
  socket: Websocket
  pendingRequests: Record<string, { fulfill: Function }>

  constructor(socket: any) {
    this.socket = socket
    this.pendingRequests = {}
    // TODO: allow adding signal handlers later
  }

  emitSignal(data: any) {
    const encoded = msgpack.encode({
      type: 'Signal',
      data: msgpack.encode(data),
    })
    this.socket.send(encoded)
  }

  request<Req, Res>(data: Req): Promise<Res> {
    const id = nanoid()
    const encodedMsg = msgpack.encode({
      id,
      type: 'Request',
      data: msgpack.encode(data),
    })
    const promise = new Promise((fulfill) => {
      this.pendingRequests[id] = { fulfill }
    })
    this.socket.send(encodedMsg)
    return promise as Promise<Res>
  }

  close(): Promise<void> {
    this.socket.close();
    return this.awaitClose()
  }

  awaitClose(): Promise<void> {
    return new Promise(resolve => this.socket.on('close', resolve))
  }

  static connect(url: string, signalCb?: Function): Promise<WsClient> {
    return new Promise((resolve, reject) => {
      const socket = new Websocket(url)
      socket.onopen = () => {
        const hw = new WsClient(socket)
        socket.onmessage = async (encodedMsg: any) => {
          let data = encodedMsg.data;

          // If data is not a buffer, it will be a blob
          if (!Buffer.isBuffer(data)) {
            data = await data.arrayBuffer();
          }

          const msg: any = msgpack.decode(data)
          if (signalCb && msg.type === 'Signal') {
            const decodedMessage: SignalResponseGeneric<any> = msgpack.decode(msg.data);

            // Note: holochain currently returns signals as an array of two values: cellId and the seralized signal payload
            // and this array is nested within the App key within the returned message.
            const decodedCellId = decodedMessage.App[0];
            // Note:In order to return readible content to the UI, the signal payload must also be decoded.
            const decodedPayload = signalTransform(decodedMessage.App[1]);

            // Return a uniform format to UI (ie: { type, data } - the same format as with callZome and appInfo...)
            const signal = { type: msg.type , data: { cellId: decodedCellId, payload: decodedPayload }};
            signalCb(signal);

          } else if (msg.type === 'Response') {
            const id = msg.id;
            if (hw.pendingRequests[id]) {
              // resolve response
              hw.pendingRequests[id].fulfill(msgpack.decode(msg.data));
            } else {
              console.error(`Got response with no matching request. id=${id}`);
            }
          } else {
            console.error(`Got unrecognized Websocket message type: ${msg.type}`);
          }
        }

        resolve(hw)
      }
    })
  }
}

const signalTransform = (res: SignalResponseGeneric<Buffer>): SignalResponseGeneric<any> => {
    return msgpack.decode(res)
}