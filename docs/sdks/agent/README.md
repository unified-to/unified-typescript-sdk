# Agent
(*agent*)

### Available Operations

* [deleteTicketingConnectionIdAgentId](#deleteticketingconnectionidagentid) - Remove a agent
* [getTicketingConnectionIdAgent](#getticketingconnectionidagent) - List all agents
* [getTicketingConnectionIdAgentId](#getticketingconnectionidagentid) - Retrieve a agent
* [getUcConnectionIdAgent](#getucconnectionidagent) - List all agents
* [patchTicketingConnectionIdAgentId](#patchticketingconnectionidagentid) - Update a agent
* [postTicketingConnectionIdAgent](#postticketingconnectionidagent) - Create a agent
* [putTicketingConnectionIdAgentId](#putticketingconnectionidagentid) - Update a agent

## deleteTicketingConnectionIdAgentId

Remove a agent

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteTicketingConnectionIdAgentIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.agent.deleteTicketingConnectionIdAgentId({
  connectionId: "navigate",
  id: "<ID>",
}).then((res: DeleteTicketingConnectionIdAgentIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.DeleteTicketingConnectionIdAgentIdRequest](../../models/operations/deleteticketingconnectionidagentidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.DeleteTicketingConnectionIdAgentIdResponse](../../models/operations/deleteticketingconnectionidagentidresponse.md)>**


## getTicketingConnectionIdAgent

List all agents

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetTicketingConnectionIdAgentResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.agent.getTicketingConnectionIdAgent({
  connectionId: "East Steel Frozen",
  limit: 8285.04,
  offset: 5507.07,
  order: "Korea West Ryan",
  query: "invoice coulomb soluta",
  sort: "adored",
  updatedGte: new Date("2023-11-15T19:25:12.859Z"),
}).then((res: GetTicketingConnectionIdAgentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetTicketingConnectionIdAgentRequest](../../models/operations/getticketingconnectionidagentrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetTicketingConnectionIdAgentResponse](../../models/operations/getticketingconnectionidagentresponse.md)>**


## getTicketingConnectionIdAgentId

Retrieve a agent

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetTicketingConnectionIdAgentIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.agent.getTicketingConnectionIdAgentId({
  connectionId: "Hat gas Cisgender",
  id: "<ID>",
}).then((res: GetTicketingConnectionIdAgentIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetTicketingConnectionIdAgentIdRequest](../../models/operations/getticketingconnectionidagentidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetTicketingConnectionIdAgentIdResponse](../../models/operations/getticketingconnectionidagentidresponse.md)>**


## getUcConnectionIdAgent

List all agents

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUcConnectionIdAgentResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.agent.getUcConnectionIdAgent({
  connectionId: "Regional East Sedan",
  contactId: "blue",
  limit: 7827.68,
  offset: 2116.69,
  order: "Bicycle",
  query: "Bacon officia iterate",
  sort: "sticky vote lumen",
  updatedGte: new Date("2021-07-05T19:53:29.041Z"),
}).then((res: GetUcConnectionIdAgentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetUcConnectionIdAgentRequest](../../models/operations/getucconnectionidagentrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetUcConnectionIdAgentResponse](../../models/operations/getucconnectionidagentresponse.md)>**


## patchTicketingConnectionIdAgentId

Update a agent

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchTicketingConnectionIdAgentIdResponse } from "Unified-to/dist/sdk/models/operations";
import { TicketingEmailType, TicketingTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.agent.patchTicketingConnectionIdAgentId({
  ticketingAgent: {
    createdAt: new Date("2022-06-01T22:24:40.372Z"),
    emails: [
      {
        email: "Antonette63@gmail.com",
        type: TicketingEmailType.Home,
      },
    ],
    id: "<ID>",
    name: "Hop",
    raw: {},
    telephones: [
      {
        telephone: "driver",
        type: TicketingTelephoneType.Work,
      },
    ],
    updatedAt: new Date("2022-07-09T08:35:36.354Z"),
  },
  connectionId: "Soft Diesel Springs",
  id: "<ID>",
}).then((res: PatchTicketingConnectionIdAgentIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.PatchTicketingConnectionIdAgentIdRequest](../../models/operations/patchticketingconnectionidagentidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PatchTicketingConnectionIdAgentIdResponse](../../models/operations/patchticketingconnectionidagentidresponse.md)>**


## postTicketingConnectionIdAgent

Create a agent

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostTicketingConnectionIdAgentResponse } from "Unified-to/dist/sdk/models/operations";
import { TicketingEmailType, TicketingTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.agent.postTicketingConnectionIdAgent({
  ticketingAgent: {
    createdAt: new Date("2022-12-14T10:20:29.412Z"),
    emails: [
      {
        email: "Eleazar_Beatty22@gmail.com",
        type: TicketingEmailType.Other,
      },
    ],
    id: "<ID>",
    name: "exploit our wireless",
    raw: {},
    telephones: [
      {
        telephone: "Korea wireless Ferrari",
        type: TicketingTelephoneType.Home,
      },
    ],
    updatedAt: new Date("2022-04-24T13:41:54.208Z"),
  },
  connectionId: "capacity copy Blues",
}).then((res: PostTicketingConnectionIdAgentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PostTicketingConnectionIdAgentRequest](../../models/operations/postticketingconnectionidagentrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PostTicketingConnectionIdAgentResponse](../../models/operations/postticketingconnectionidagentresponse.md)>**


## putTicketingConnectionIdAgentId

Update a agent

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutTicketingConnectionIdAgentIdResponse } from "Unified-to/dist/sdk/models/operations";
import { TicketingEmailType, TicketingTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.agent.putTicketingConnectionIdAgentId({
  ticketingAgent: {
    createdAt: new Date("2022-12-19T19:47:13.993Z"),
    emails: [
      {
        email: "Augustus_Kessler34@hotmail.com",
        type: TicketingEmailType.Other,
      },
    ],
    id: "<ID>",
    name: "reintermediate impression Refined",
    raw: {},
    telephones: [
      {
        telephone: "asynchronous",
        type: TicketingTelephoneType.Fax,
      },
    ],
    updatedAt: new Date("2021-04-29T18:13:42.824Z"),
  },
  connectionId: "synergistic Uzbekistan green",
  id: "<ID>",
}).then((res: PutTicketingConnectionIdAgentIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PutTicketingConnectionIdAgentIdRequest](../../models/operations/putticketingconnectionidagentidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PutTicketingConnectionIdAgentIdResponse](../../models/operations/putticketingconnectionidagentidresponse.md)>**

