<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@holochain/client](./client.md) &gt; [AppAgentWebsocket](./client.appagentwebsocket.md) &gt; [createCloneCell](./client.appagentwebsocket.createclonecell.md)

## AppAgentWebsocket.createCloneCell() method

Clone an existing provisioned cell.

<b>Signature:</b>

```typescript
createCloneCell(args: AppCreateCloneCellRequest): Promise<CreateCloneCellResponse>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  args | [AppCreateCloneCellRequest](./client.appcreateclonecellrequest.md) | Specify the cell to clone. |

<b>Returns:</b>

Promise&lt;[CreateCloneCellResponse](./client.createclonecellresponse.md)<!-- -->&gt;

The created clone cell.

