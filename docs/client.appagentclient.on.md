<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@holochain/client](./client.md) &gt; [AppAgentClient](./client.appagentclient.md) &gt; [on](./client.appagentclient.on.md)

## AppAgentClient.on() method

<b>Signature:</b>

```typescript
on<Name extends keyof AppAgentEvents>(eventName: Name | readonly Name[], listener: AppSignalCb): UnsubscribeFunction;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  eventName | Name \| readonly Name\[\] |  |
|  listener | [AppSignalCb](./client.appsignalcb.md) |  |

<b>Returns:</b>

UnsubscribeFunction

