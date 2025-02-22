<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@holochain/client](./client.md)

## client package

## Classes

|  Class | Description |
|  --- | --- |
|  [AdminWebsocket](./client.adminwebsocket.md) | A class for interacting with a conductor's Admin API. |
|  [AppAgentWebsocket](./client.appagentwebsocket.md) | A class to establish a websocket connection to an App interface, for a specific agent and app. |
|  [AppWebsocket](./client.appwebsocket.md) | A class to establish a websocket connection to an App interface of a Holochain conductor. |
|  [CloneId](./client.cloneid.md) | <p>Identifier of a clone cell, composed of the DNA's role id and the index of the clone, starting at 0.</p><p>Example: <code>profiles.0</code></p> |
|  [WsClient](./client.wsclient.md) | <p>A Websocket client which can make requests and receive responses, as well as send and receive signals.</p><p>Uses Holochain's websocket WireMessage for communication.</p> |

## Enumerations

|  Enumeration | Description |
|  --- | --- |
|  [ActionType](./client.actiontype.md) |  |
|  [AppStatusFilter](./client.appstatusfilter.md) |  |
|  [CellProvisioningStrategy](./client.cellprovisioningstrategy.md) |  |
|  [CellType](./client.celltype.md) |  |
|  [DhtOpType](./client.dhtoptype.md) |  |
|  [GrantedFunctionsType](./client.grantedfunctionstype.md) |  |

## Functions

|  Function | Description |
|  --- | --- |
|  [decodeHashFromBase64(hash)](./client.decodehashfrombase64.md) | Decodes a Base64 encoded string to a byte array hash. |
|  [encodeHashToBase64(hash)](./client.encodehashtobase64.md) | Encode a byte array hash to a Base64 string. |
|  [fakeActionHash()](./client.fakeactionhash.md) | Generate a valid hash of a non-existing action. |
|  [fakeAgentPubKey()](./client.fakeagentpubkey.md) | Generate a valid agent key of a non-existing agent. |
|  [fakeEntryHash()](./client.fakeentryhash.md) | <p>Generate a valid hash of a non-existing entry.</p><p>From https://github.com/holochain/holochain/blob/develop/crates/holo\_hash/src/hash\_type/primitive.rs</p> |
|  [getDhtOpAction(op)](./client.getdhtopaction.md) |  |
|  [getDhtOpEntry(op)](./client.getdhtopentry.md) |  |
|  [getDhtOpSignature(op)](./client.getdhtopsignature.md) |  |
|  [getDhtOpType(op)](./client.getdhtoptype.md) |  |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [AdminApi](./client.adminapi.md) |  |
|  [AgentInfoDump](./client.agentinfodump.md) |  |
|  [AgentValidationPkg](./client.agentvalidationpkg.md) |  |
|  [AppAgentClient](./client.appagentclient.md) |  |
|  [AppAgentEvents](./client.appagentevents.md) |  |
|  [AppApi](./client.appapi.md) |  |
|  [CallZomeRequestSigned](./client.callzomerequestsigned.md) |  |
|  [CallZomeRequestUnsigned](./client.callzomerequestunsigned.md) |  |
|  [CapClaim](./client.capclaim.md) |  |
|  [CellProvisioning](./client.cellprovisioning.md) |  |
|  [ClonedCell](./client.clonedcell.md) |  |
|  [CloseChain](./client.closechain.md) |  |
|  [CountersigningAgentState](./client.countersigningagentstate.md) |  |
|  [CounterSigningSessionData](./client.countersigningsessiondata.md) |  |
|  [CounterSigningSessionTimes](./client.countersigningsessiontimes.md) |  |
|  [Create](./client.create.md) |  |
|  [CreateBase](./client.createbase.md) |  |
|  [CreateCloneCellRequest](./client.createclonecellrequest.md) |  |
|  [CreateLink](./client.createlink.md) |  |
|  [Delete](./client.delete.md) |  |
|  [DeleteLink](./client.deletelink.md) |  |
|  [DisableCloneCellRequest](./client.disableclonecellrequest.md) |  |
|  [Dna](./client.dna.md) |  |
|  [Duration](./client.duration.md) |  |
|  [EntryContent](./client.entrycontent.md) |  |
|  [FetchQueueInfo](./client.fetchqueueinfo.md) |  |
|  [FullIntegrationStateDump](./client.fullintegrationstatedump.md) |  |
|  [FullStateDump](./client.fullstatedump.md) |  |
|  [GrantZomeCallCapabilityRequest](./client.grantzomecallcapabilityrequest.md) |  |
|  [HoloHashed](./client.holohashed.md) |  |
|  [InitZomesComplete](./client.initzomescomplete.md) |  |
|  [NetworkInfo](./client.networkinfo.md) |  |
|  [NetworkInfoRequest](./client.networkinforequest.md) |  |
|  [OpenChain](./client.openchain.md) |  |
|  [P2pAgentsDump](./client.p2pagentsdump.md) |  |
|  [PreflightRequest](./client.preflightrequest.md) |  |
|  [ProvisionedCell](./client.provisionedcell.md) |  |
|  [SignedActionHashed](./client.signedactionhashed.md) |  |
|  [SigningCredentials](./client.signingcredentials.md) |  |
|  [SourceChainJsonDump](./client.sourcechainjsondump.md) |  |
|  [SourceChainJsonRecord](./client.sourcechainjsonrecord.md) |  |
|  [StemCell](./client.stemcell.md) |  |
|  [Update](./client.update.md) |  |
|  [UpdateBase](./client.updatebase.md) |  |
|  [ZomeCallCapGrant](./client.zomecallcapgrant.md) |  |

## Variables

|  Variable | Description |
|  --- | --- |
|  [generateSigningKeyPair](./client.generatesigningkeypair.md) | Generates a key pair for signing zome calls. |
|  [getNonceExpiration](./client.getnonceexpiration.md) |  |
|  [getSigningCredentials](./client.getsigningcredentials.md) | Get credentials for signing zome calls. |
|  [randomByteArray](./client.randombytearray.md) |  |
|  [randomCapSecret](./client.randomcapsecret.md) |  |
|  [randomNonce](./client.randomnonce.md) |  |
|  [setSigningCredentials](./client.setsigningcredentials.md) | Set credentials for signing zome calls. |
|  [SignalType](./client.signaltype.md) |  |
|  [signZomeCall](./client.signzomecall.md) |  |

## Type Aliases

|  Type Alias | Description |
|  --- | --- |
|  [Action](./client.action.md) |  |
|  [ActionBase](./client.actionbase.md) |  |
|  [ActionHash](./client.actionhash.md) |  |
|  [ActionHashB64](./client.actionhashb64.md) |  |
|  [ActionHashed](./client.actionhashed.md) |  |
|  [AddAgentInfoRequest](./client.addagentinforequest.md) |  |
|  [AddAgentInfoResponse](./client.addagentinforesponse.md) |  |
|  [AgentInfoRequest](./client.agentinforequest.md) |  |
|  [AgentInfoResponse](./client.agentinforesponse.md) |  |
|  [AgentInfoSigned](./client.agentinfosigned.md) | This type is meant to be opaque |
|  [AgentPubKey](./client.agentpubkey.md) |  |
|  [AgentPubKeyB64](./client.agentpubkeyb64.md) |  |
|  [AnyDhtHash](./client.anydhthash.md) |  |
|  [AnyDhtHashB64](./client.anydhthashb64.md) |  |
|  [AppAgentCallZomeRequest](./client.appagentcallzomerequest.md) |  |
|  [AppBundle](./client.appbundle.md) |  |
|  [AppBundleSource](./client.appbundlesource.md) |  |
|  [AppCreateCloneCellRequest](./client.appcreateclonecellrequest.md) |  |
|  [AppDisableCloneCellRequest](./client.appdisableclonecellrequest.md) |  |
|  [AppEnableCloneCellRequest](./client.appenableclonecellrequest.md) |  |
|  [AppEntryDef](./client.appentrydef.md) |  |
|  [AppInfo](./client.appinfo.md) |  |
|  [AppInfoRequest](./client.appinforequest.md) |  |
|  [AppInfoResponse](./client.appinforesponse.md) |  |
|  [AppManifest](./client.appmanifest.md) |  |
|  [AppRoleDnaManifest](./client.approlednamanifest.md) |  |
|  [AppRoleManifest](./client.approlemanifest.md) |  |
|  [AppSignal](./client.appsignal.md) |  |
|  [AppSignalCb](./client.appsignalcb.md) |  |
|  [AttachAppInterfaceRequest](./client.attachappinterfacerequest.md) |  |
|  [AttachAppInterfaceResponse](./client.attachappinterfaceresponse.md) |  |
|  [CallZomeRequest](./client.callzomerequest.md) |  |
|  [CallZomeRequestGeneric](./client.callzomerequestgeneric.md) |  |
|  [CallZomeResponse](./client.callzomeresponse.md) |  |
|  [CallZomeResponseGeneric](./client.callzomeresponsegeneric.md) |  |
|  [CapAccess](./client.capaccess.md) |  |
|  [CapGrant](./client.capgrant.md) |  |
|  [CapSecret](./client.capsecret.md) |  |
|  [CellId](./client.cellid.md) |  |
|  [CellInfo](./client.cellinfo.md) |  |
|  [CoordinatorZome](./client.coordinatorzome.md) |  |
|  [CounterSigningAgents](./client.countersigningagents.md) |  |
|  [CreateCloneCellResponse](./client.createclonecellresponse.md) |  |
|  [DeactivationReason](./client.deactivationreason.md) |  |
|  [DeleteCloneCellRequest](./client.deleteclonecellrequest.md) |  |
|  [DeleteCloneCellResponse](./client.deleteclonecellresponse.md) |  |
|  [DhtOp](./client.dhtop.md) |  |
|  [DisableAppRequest](./client.disableapprequest.md) |  |
|  [DisableAppResponse](./client.disableappresponse.md) |  |
|  [DisableCloneCellResponse](./client.disableclonecellresponse.md) |  |
|  [DisabledAppReason](./client.disabledappreason.md) |  |
|  [DnaBundle](./client.dnabundle.md) |  |
|  [DnaDefinition](./client.dnadefinition.md) |  |
|  [DnaHash](./client.dnahash.md) |  |
|  [DnaHashB64](./client.dnahashb64.md) |  |
|  [DnaManifest](./client.dnamanifest.md) |  |
|  [DnaModifiers](./client.dnamodifiers.md) |  |
|  [DnaProperties](./client.dnaproperties.md) |  |
|  [DnaSource](./client.dnasource.md) |  |
|  [DnaVersionFlexible](./client.dnaversionflexible.md) |  |
|  [DnaVersionSpec](./client.dnaversionspec.md) |  |
|  [DumpFullStateRequest](./client.dumpfullstaterequest.md) |  |
|  [DumpFullStateResponse](./client.dumpfullstateresponse.md) |  |
|  [DumpStateRequest](./client.dumpstaterequest.md) |  |
|  [DumpStateResponse](./client.dumpstateresponse.md) |  |
|  [EnableAppRequest](./client.enableapprequest.md) |  |
|  [EnableAppResponse](./client.enableappresponse.md) |  |
|  [EnableCloneCellRequest](./client.enableclonecellrequest.md) |  |
|  [EnableCloneCellResponse](./client.enableclonecellresponse.md) |  |
|  [EncodedAppSignal](./client.encodedappsignal.md) |  |
|  [Entry](./client.entry.md) |  |
|  [EntryHash](./client.entryhash.md) |  |
|  [EntryHashB64](./client.entryhashb64.md) |  |
|  [EntryType](./client.entrytype.md) |  |
|  [EntryVisibility](./client.entryvisibility.md) |  |
|  [FunctionName](./client.functionname.md) |  |
|  [GenerateAgentPubKeyRequest](./client.generateagentpubkeyrequest.md) |  |
|  [GenerateAgentPubKeyResponse](./client.generateagentpubkeyresponse.md) |  |
|  [GetDnaDefinitionRequest](./client.getdnadefinitionrequest.md) |  |
|  [GetDnaDefinitionResponse](./client.getdnadefinitionresponse.md) |  |
|  [GrantedFunctions](./client.grantedfunctions.md) |  |
|  [GrantZomeCallCapabilityResponse](./client.grantzomecallcapabilityresponse.md) |  |
|  [HoloHash](./client.holohash.md) |  |
|  [HoloHashB64](./client.holohashb64.md) |  |
|  [InstallAppDnaPayload](./client.installappdnapayload.md) |  |
|  [InstallAppRequest](./client.installapprequest.md) |  |
|  [InstallAppResponse](./client.installappresponse.md) |  |
|  [InstalledAppId](./client.installedappid.md) |  |
|  [InstalledAppInfoStatus](./client.installedappinfostatus.md) |  |
|  [InstalledCell](./client.installedcell.md) |  |
|  [IntegrityZome](./client.integrityzome.md) |  |
|  [KitsuneAgent](./client.kitsuneagent.md) |  |
|  [KitsuneSpace](./client.kitsunespace.md) |  |
|  [ListActiveAppsRequest](./client.listactiveappsrequest.md) |  |
|  [ListActiveAppsResponse](./client.listactiveappsresponse.md) |  |
|  [ListAppInterfacesRequest](./client.listappinterfacesrequest.md) |  |
|  [ListAppInterfacesResponse](./client.listappinterfacesresponse.md) |  |
|  [ListAppsRequest](./client.listappsrequest.md) |  |
|  [ListAppsResponse](./client.listappsresponse.md) |  |
|  [ListCellIdsRequest](./client.listcellidsrequest.md) |  |
|  [ListCellIdsResponse](./client.listcellidsresponse.md) |  |
|  [ListDnasRequest](./client.listdnasrequest.md) |  |
|  [ListDnasResponse](./client.listdnasresponse.md) |  |
|  [Location\_2](./client.location_2.md) |  |
|  [MembraneProof](./client.membraneproof.md) |  |
|  [NetworkInfoResponse](./client.networkinforesponse.md) |  |
|  [NetworkSeed](./client.networkseed.md) |  |
|  [NewEntryAction](./client.newentryaction.md) |  |
|  [Nonce256Bit](./client.nonce256bit.md) |  |
|  [NonProvenanceCallZomeRequest](./client.nonprovenancecallzomerequest.md) |  |
|  [PausedAppReason](./client.pausedappreason.md) |  |
|  [PreflightBytes](./client.preflightbytes.md) |  |
|  [Record\_2](./client.record_2.md) |  |
|  [RecordEntry](./client.recordentry.md) |  |
|  [RegisterDnaRequest](./client.registerdnarequest.md) |  |
|  [RegisterDnaResponse](./client.registerdnaresponse.md) |  |
|  [Requester](./client.requester.md) |  |
|  [ResourceBytes](./client.resourcebytes.md) |  |
|  [ResourceMap](./client.resourcemap.md) |  |
|  [Role](./client.role.md) |  |
|  [RoleName](./client.rolename.md) |  |
|  [RoleNameCallZomeRequest](./client.rolenamecallzomerequest.md) |  |
|  [RoleNameCallZomeRequestSigned](./client.rolenamecallzomerequestsigned.md) |  |
|  [Signal](./client.signal.md) |  |
|  [Signature](./client.signature.md) |  |
|  [StartAppRequest](./client.startapprequest.md) |  |
|  [StartAppResponse](./client.startappresponse.md) |  |
|  [Timestamp](./client.timestamp.md) |  |
|  [Transformer\_2](./client.transformer_2.md) |  |
|  [UninstallAppRequest](./client.uninstallapprequest.md) |  |
|  [UninstallAppResponse](./client.uninstallappresponse.md) |  |
|  [WasmCode](./client.wasmcode.md) |  |
|  [WasmHash](./client.wasmhash.md) |  |
|  [WasmHashB64](./client.wasmhashb64.md) |  |
|  [ZomeDefinition](./client.zomedefinition.md) |  |
|  [ZomeLocation](./client.zomelocation.md) |  |
|  [ZomeManifest](./client.zomemanifest.md) |  |
|  [ZomeName](./client.zomename.md) |  |
|  [Zomes](./client.zomes.md) |  |

