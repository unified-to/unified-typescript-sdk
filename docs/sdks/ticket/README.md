# Ticket
(*ticket*)

### Available Operations

* [deleteTicketingConnectionIdTicketId](#deleteticketingconnectionidticketid) - Remove a ticket
* [getTicketingConnectionIdTicket](#getticketingconnectionidticket) - List all tickets
* [getTicketingConnectionIdTicketId](#getticketingconnectionidticketid) - Retrieve a ticket
* [patchTicketingConnectionIdTicketId](#patchticketingconnectionidticketid) - Update a ticket
* [postTicketingConnectionIdTicket](#postticketingconnectionidticket) - Create a ticket
* [putTicketingConnectionIdTicketId](#putticketingconnectionidticketid) - Update a ticket

## deleteTicketingConnectionIdTicketId

Remove a ticket

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteTicketingConnectionIdTicketIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticket.deleteTicketingConnectionIdTicketId({
  connectionId: "vel",
  id: "e8dbf812-f83b-41ca-aa9f-fc561929cca9",
}).then((res: DeleteTicketingConnectionIdTicketIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.DeleteTicketingConnectionIdTicketIdRequest](../../models/operations/deleteticketingconnectionidticketidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.DeleteTicketingConnectionIdTicketIdResponse](../../models/operations/deleteticketingconnectionidticketidresponse.md)>**


## getTicketingConnectionIdTicket

List all tickets

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetTicketingConnectionIdTicketResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticket.getTicketingConnectionIdTicket({
  agentId: "nemo",
  connectionId: "laboriosam",
  customerId: "eaque",
  limit: 6814.58,
  offset: 977.35,
  order: "adipisci",
  query: "occaecati",
  sort: "exercitationem",
  updatedGte: new Date("2022-11-09T17:01:20.907Z"),
}).then((res: GetTicketingConnectionIdTicketResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetTicketingConnectionIdTicketRequest](../../models/operations/getticketingconnectionidticketrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetTicketingConnectionIdTicketResponse](../../models/operations/getticketingconnectionidticketresponse.md)>**


## getTicketingConnectionIdTicketId

Retrieve a ticket

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetTicketingConnectionIdTicketIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticket.getTicketingConnectionIdTicketId({
  connectionId: "quas",
  id: "da1d48e7-8e3c-4f8e-9143-da9308b27a08",
}).then((res: GetTicketingConnectionIdTicketIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetTicketingConnectionIdTicketIdRequest](../../models/operations/getticketingconnectionidticketidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetTicketingConnectionIdTicketIdResponse](../../models/operations/getticketingconnectionidticketidresponse.md)>**


## patchTicketingConnectionIdTicketId

Update a ticket

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchTicketingConnectionIdTicketIdResponse } from "Unified-to/dist/sdk/models/operations";
import { TicketingTicketStatus } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticket.patchTicketingConnectionIdTicketId({
  ticketingTicket: {
    category: "animi",
    closedAt: new Date("2022-06-11T08:56:14.494Z"),
    createdAt: new Date("2022-11-29T12:43:22.264Z"),
    customerId: "voluptatum",
    description: "eius",
    id: "439b3de8-756c-4cce-870c-d2147b6e6152",
    priority: "placeat",
    raw: {},
    source: "voluptatibus",
    sourceRef: "ipsa",
    status: TicketingTicketStatus.Active,
    subject: "quibusdam",
    tags: [
      "doloremque",
    ],
    updatedAt: new Date("2021-05-28T17:29:45.347Z"),
  },
  connectionId: "eligendi",
  id: "3a4b9a5b-f935-4dfe-974f-a4b1e9c097ed",
}).then((res: PatchTicketingConnectionIdTicketIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.PatchTicketingConnectionIdTicketIdRequest](../../models/operations/patchticketingconnectionidticketidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PatchTicketingConnectionIdTicketIdResponse](../../models/operations/patchticketingconnectionidticketidresponse.md)>**


## postTicketingConnectionIdTicket

Create a ticket

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostTicketingConnectionIdTicketResponse } from "Unified-to/dist/sdk/models/operations";
import { TicketingTicketStatus } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticket.postTicketingConnectionIdTicket({
  ticketingTicket: {
    category: "animi",
    closedAt: new Date("2022-11-09T20:11:20.304Z"),
    createdAt: new Date("2022-09-13T02:47:18.896Z"),
    customerId: "numquam",
    description: "fugit",
    id: "e1a9237e-9984-4c80-b479-e891923c18ca",
    priority: "rem",
    raw: {},
    source: "facere",
    sourceRef: "vel",
    status: TicketingTicketStatus.Closed,
    subject: "porro",
    tags: [
      "enim",
    ],
    updatedAt: new Date("2022-06-24T00:19:38.232Z"),
  },
  connectionId: "cupiditate",
}).then((res: PostTicketingConnectionIdTicketResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PostTicketingConnectionIdTicketRequest](../../models/operations/postticketingconnectionidticketrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PostTicketingConnectionIdTicketResponse](../../models/operations/postticketingconnectionidticketresponse.md)>**


## putTicketingConnectionIdTicketId

Update a ticket

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutTicketingConnectionIdTicketIdResponse } from "Unified-to/dist/sdk/models/operations";
import { TicketingTicketStatus } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticket.putTicketingConnectionIdTicketId({
  ticketingTicket: {
    category: "explicabo",
    closedAt: new Date("2022-09-23T16:36:11.812Z"),
    createdAt: new Date("2021-01-13T15:10:22.653Z"),
    customerId: "consequuntur",
    description: "doloremque",
    id: "207e4fae-038c-4d7f-9bc2-cabaf7fc2ccb",
    priority: "id",
    raw: {},
    source: "numquam",
    sourceRef: "libero",
    status: TicketingTicketStatus.Closed,
    subject: "asperiores",
    tags: [
      "aperiam",
    ],
    updatedAt: new Date("2020-02-02T17:11:25.452Z"),
  },
  connectionId: "nisi",
  id: "8eaedb2e-e70b-4e06-9fb3-6add704080e0",
}).then((res: PutTicketingConnectionIdTicketIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PutTicketingConnectionIdTicketIdRequest](../../models/operations/putticketingconnectionidticketidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PutTicketingConnectionIdTicketIdResponse](../../models/operations/putticketingconnectionidticketidresponse.md)>**

