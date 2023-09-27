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
  connectionId: "esse",
  id: "39205929-396f-4ea7-996e-b10faaa2352c",
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
  connectionId: "enim",
  limit: 6078.31,
  offset: 3637.11,
  order: "minima",
  query: "excepturi",
  sort: "accusantium",
  updatedGte: new Date("2022-05-14T11:45:33.094Z"),
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
  connectionId: "doloribus",
  id: "f1a3a2fa-9467-4739-a51a-a52c3f5ad019",
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
  connectionId: "temporibus",
  contactId: "laborum",
  limit: 960.98,
  offset: 9719.45,
  order: "voluptatibus",
  query: "vero",
  sort: "nihil",
  updatedGte: new Date("2021-01-17T23:08:44.457Z"),
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
    createdAt: new Date("2022-05-25T05:33:11.349Z"),
    emails: [
      {
        email: "Myrtis44@yahoo.com",
        type: TicketingEmailType.Work,
      },
    ],
    id: "f15471b5-e6e1-43b9-9d48-8e1e91e450ad",
    name: "Joanna Rau",
    raw: {},
    telephones: [
      {
        telephone: "modi",
        type: TicketingTelephoneType.Work,
      },
    ],
    updatedAt: new Date("2022-05-31T22:08:47.731Z"),
  },
  connectionId: "quos",
  id: "02d502a9-4bb4-4f63-8969-e9a3efa77dfb",
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
    createdAt: new Date("2022-09-14T10:27:07.590Z"),
    emails: [
      {
        email: "Raquel_Jenkins@hotmail.com",
        type: TicketingEmailType.Other,
      },
    ],
    id: "395efb9b-a88f-43a6-a997-074ba4469b6e",
    name: "Ms. Julie Gusikowski",
    raw: {},
    telephones: [
      {
        telephone: "provident",
        type: TicketingTelephoneType.Other,
      },
    ],
    updatedAt: new Date("2022-12-07T10:53:17.121Z"),
  },
  connectionId: "mollitia",
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
    createdAt: new Date("2021-01-16T22:43:33.071Z"),
    emails: [
      {
        email: "Holden.Ernser36@gmail.com",
        type: TicketingEmailType.Work,
      },
    ],
    id: "6fe4c8b7-11e5-4b7f-92ed-028921cddc69",
    name: "Dr. Rosemary Bartoletti",
    raw: {},
    telephones: [
      {
        telephone: "ipsam",
        type: TicketingTelephoneType.Other,
      },
    ],
    updatedAt: new Date("2022-04-12T10:47:34.158Z"),
  },
  connectionId: "eaque",
  id: "d5f0d30c-5fbb-4258-b053-202c73d5fe9b",
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

