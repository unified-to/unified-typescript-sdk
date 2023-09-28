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
  connectionId: "brownie azure payment",
  id: "<ID>",
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
  agentId: "New",
  connectionId: "hertz Savings Steel",
  customerId: "payment biopsy Kids",
  limit: 7673.64,
  offset: 5134.74,
  order: "quantifying orange",
  query: "male dynamic",
  sort: "Sedan Tricycle Honda",
  updatedGte: new Date("2022-08-06T21:30:52.879Z"),
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
  connectionId: "yellow",
  id: "<ID>",
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
    category: "Representative calculate",
    closedAt: new Date("2023-12-03T14:58:54.732Z"),
    createdAt: new Date("2022-09-11T04:52:37.095Z"),
    customerId: "indigo extend given",
    description: "Profound motivating utilisation",
    id: "<ID>",
    priority: "Hill Jazz",
    raw: {},
    source: "West Macedonia City",
    sourceRef: "orange West doubtfully",
    status: TicketingTicketStatus.Closed,
    subject: "Pizza",
    tags: [
      "definition",
    ],
    updatedAt: new Date("2021-10-05T23:17:22.031Z"),
  },
  connectionId: "engage henry",
  id: "<ID>",
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
    category: "North",
    closedAt: new Date("2021-08-03T02:12:35.164Z"),
    createdAt: new Date("2023-05-12T14:26:26.768Z"),
    customerId: "mull hierarchy",
    description: "Triple-buffered solution-oriented info-mediaries",
    id: "<ID>",
    priority: "person Idaho",
    raw: {},
    source: "Convertible whenever feed",
    sourceRef: "solid Electric Bespoke",
    status: TicketingTicketStatus.Closed,
    subject: "sint uplift",
    tags: [
      "Idaho",
    ],
    updatedAt: new Date("2022-06-24T01:04:15.890Z"),
  },
  connectionId: "Oriental outrage",
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
    category: "North Finland",
    closedAt: new Date("2023-12-08T00:37:44.739Z"),
    createdAt: new Date("2023-04-01T07:24:49.830Z"),
    customerId: "Marketing",
    description: "Future-proofed high-level system engine",
    id: "<ID>",
    priority: "drat knottily",
    raw: {},
    source: "Upgradable knuckle",
    sourceRef: "anenst",
    status: TicketingTicketStatus.Active,
    subject: "indexing Wooden Crew",
    tags: [
      "anti",
    ],
    updatedAt: new Date("2023-08-10T07:27:15.153Z"),
  },
  connectionId: "neural orchestrate",
  id: "<ID>",
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

