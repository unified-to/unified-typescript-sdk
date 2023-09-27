# Ticketing
(*ticketing*)

### Available Operations

* [deleteTicketingConnectionIdAgentId](#deleteticketingconnectionidagentid) - Remove a agent
* [deleteTicketingConnectionIdCustomerId](#deleteticketingconnectionidcustomerid) - Remove a customer
* [deleteTicketingConnectionIdNoteTicketIdId](#deleteticketingconnectionidnoteticketidid) - Remove a note
* [deleteTicketingConnectionIdTicketId](#deleteticketingconnectionidticketid) - Remove a ticket
* [getTicketingConnectionIdAgent](#getticketingconnectionidagent) - List all agents
* [getTicketingConnectionIdAgentId](#getticketingconnectionidagentid) - Retrieve a agent
* [getTicketingConnectionIdCustomer](#getticketingconnectionidcustomer) - List all customers
* [getTicketingConnectionIdCustomerId](#getticketingconnectionidcustomerid) - Retrieve a customer
* [getTicketingConnectionIdNoteTicketId](#getticketingconnectionidnoteticketid) - List all notes
* [getTicketingConnectionIdNoteTicketIdId](#getticketingconnectionidnoteticketidid) - Retrieve a note
* [getTicketingConnectionIdTicket](#getticketingconnectionidticket) - List all tickets
* [getTicketingConnectionIdTicketId](#getticketingconnectionidticketid) - Retrieve a ticket
* [patchTicketingConnectionIdAgentId](#patchticketingconnectionidagentid) - Update a agent
* [patchTicketingConnectionIdCustomerId](#patchticketingconnectionidcustomerid) - Update a customer
* [patchTicketingConnectionIdNoteTicketIdId](#patchticketingconnectionidnoteticketidid) - Update a note
* [patchTicketingConnectionIdTicketId](#patchticketingconnectionidticketid) - Update a ticket
* [postTicketingConnectionIdAgent](#postticketingconnectionidagent) - Create a agent
* [postTicketingConnectionIdCustomer](#postticketingconnectionidcustomer) - Create a customer
* [postTicketingConnectionIdNoteTicketId](#postticketingconnectionidnoteticketid) - Create a note
* [postTicketingConnectionIdTicket](#postticketingconnectionidticket) - Create a ticket
* [putTicketingConnectionIdAgentId](#putticketingconnectionidagentid) - Update a agent
* [putTicketingConnectionIdCustomerId](#putticketingconnectionidcustomerid) - Update a customer
* [putTicketingConnectionIdNoteTicketIdId](#putticketingconnectionidnoteticketidid) - Update a note
* [putTicketingConnectionIdTicketId](#putticketingconnectionidticketid) - Update a ticket

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

sdk.ticketing.deleteTicketingConnectionIdAgentId({
  connectionId: "fuga",
  id: "3fc73a5a-034b-4114-9924-3afa6987a472",
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


## deleteTicketingConnectionIdCustomerId

Remove a customer

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteTicketingConnectionIdCustomerIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticketing.deleteTicketingConnectionIdCustomerId({
  connectionId: "libero",
  id: "709a153e-2230-4106-8539-ce0932d10acd",
}).then((res: DeleteTicketingConnectionIdCustomerIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.DeleteTicketingConnectionIdCustomerIdRequest](../../models/operations/deleteticketingconnectionidcustomeridrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.DeleteTicketingConnectionIdCustomerIdResponse](../../models/operations/deleteticketingconnectionidcustomeridresponse.md)>**


## deleteTicketingConnectionIdNoteTicketIdId

Remove a note

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteTicketingConnectionIdNoteTicketIdIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticketing.deleteTicketingConnectionIdNoteTicketIdId({
  connectionId: "vitae",
  id: "5d8cc306-b786-4b3d-b7bd-204a1f340bb3",
  ticketId: "ex",
}).then((res: DeleteTicketingConnectionIdNoteTicketIdIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.DeleteTicketingConnectionIdNoteTicketIdIdRequest](../../models/operations/deleteticketingconnectionidnoteticketididrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.DeleteTicketingConnectionIdNoteTicketIdIdResponse](../../models/operations/deleteticketingconnectionidnoteticketididresponse.md)>**


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

sdk.ticketing.deleteTicketingConnectionIdTicketId({
  connectionId: "voluptatibus",
  id: "677a4851-9c33-4749-8284-8826bb03c7fd",
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

sdk.ticketing.getTicketingConnectionIdAgent({
  connectionId: "consequuntur",
  limit: 1427.69,
  offset: 3147.32,
  order: "debitis",
  query: "dolore",
  sort: "in",
  updatedGte: new Date("2022-01-15T17:11:52.134Z"),
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

sdk.ticketing.getTicketingConnectionIdAgentId({
  connectionId: "architecto",
  id: "a88ed72a-2d4a-4f41-98ac-2d0f0f58c3b8",
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


## getTicketingConnectionIdCustomer

List all customers

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetTicketingConnectionIdCustomerResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticketing.getTicketingConnectionIdCustomer({
  connectionId: "in",
  limit: 7360.32,
  offset: 2850.04,
  order: "molestiae",
  query: "eaque",
  sort: "tempora",
  updatedGte: new Date("2022-03-06T22:27:54.190Z"),
}).then((res: GetTicketingConnectionIdCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetTicketingConnectionIdCustomerRequest](../../models/operations/getticketingconnectionidcustomerrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetTicketingConnectionIdCustomerResponse](../../models/operations/getticketingconnectionidcustomerresponse.md)>**


## getTicketingConnectionIdCustomerId

Retrieve a customer

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetTicketingConnectionIdCustomerIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticketing.getTicketingConnectionIdCustomerId({
  connectionId: "aut",
  id: "d98e9d82-c5e3-406f-9576-f5cdeb0286d0",
}).then((res: GetTicketingConnectionIdCustomerIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetTicketingConnectionIdCustomerIdRequest](../../models/operations/getticketingconnectionidcustomeridrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetTicketingConnectionIdCustomerIdResponse](../../models/operations/getticketingconnectionidcustomeridresponse.md)>**


## getTicketingConnectionIdNoteTicketId

List all notes

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetTicketingConnectionIdNoteTicketIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticketing.getTicketingConnectionIdNoteTicketId({
  connectionId: "distinctio",
  limit: 8031.14,
  offset: 3028.92,
  order: "adipisci",
  query: "harum",
  sort: "veritatis",
  ticketId: "quas",
  updatedGte: new Date("2021-07-31T21:20:45.941Z"),
}).then((res: GetTicketingConnectionIdNoteTicketIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetTicketingConnectionIdNoteTicketIdRequest](../../models/operations/getticketingconnectionidnoteticketidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetTicketingConnectionIdNoteTicketIdResponse](../../models/operations/getticketingconnectionidnoteticketidresponse.md)>**


## getTicketingConnectionIdNoteTicketIdId

Retrieve a note

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetTicketingConnectionIdNoteTicketIdIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticketing.getTicketingConnectionIdNoteTicketIdId({
  connectionId: "ipsum",
  id: "78f2fcff-81dd-4f7e-888f-74ef54c9216e",
  ticketId: "atque",
}).then((res: GetTicketingConnectionIdNoteTicketIdIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.GetTicketingConnectionIdNoteTicketIdIdRequest](../../models/operations/getticketingconnectionidnoteticketididrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.GetTicketingConnectionIdNoteTicketIdIdResponse](../../models/operations/getticketingconnectionidnoteticketididresponse.md)>**


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

sdk.ticketing.getTicketingConnectionIdTicket({
  agentId: "unde",
  connectionId: "qui",
  customerId: "aliquid",
  limit: 1977.7,
  offset: 641.35,
  order: "velit",
  query: "libero",
  sort: "soluta",
  updatedGte: new Date("2022-01-21T15:01:10.881Z"),
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

sdk.ticketing.getTicketingConnectionIdTicketId({
  connectionId: "quo",
  id: "2c8d2701-096b-466a-96e3-e1d9d3b66033",
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

sdk.ticketing.patchTicketingConnectionIdAgentId({
  ticketingAgent: {
    createdAt: new Date("2022-05-08T09:12:54.892Z"),
    emails: [
      {
        email: "Brad.Olson@gmail.com",
        type: TicketingEmailType.Other,
      },
    ],
    id: "5d2247de-9b3d-4461-b0e7-68a96bb39878",
    name: "Jimmy Metz",
    raw: {},
    telephones: [
      {
        telephone: "tempore",
        type: TicketingTelephoneType.Fax,
      },
    ],
    updatedAt: new Date("2022-04-15T11:30:38.762Z"),
  },
  connectionId: "cum",
  id: "f7143356-f634-49a1-a424-9b211ce46b95",
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


## patchTicketingConnectionIdCustomerId

Update a customer

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchTicketingConnectionIdCustomerIdResponse } from "Unified-to/dist/sdk/models/operations";
import { TicketingEmailType, TicketingTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticketing.patchTicketingConnectionIdCustomerId({
  ticketingCustomer: {
    createdAt: new Date("2022-07-29T08:43:35.611Z"),
    emails: [
      {
        email: "Brandi35@gmail.com",
        type: TicketingEmailType.Home,
      },
    ],
    id: "ca9142f0-5263-42b3-9cad-692ffc874500",
    name: "Lorena Moore",
    raw: {},
    tags: [
      "temporibus",
    ],
    telephones: [
      {
        telephone: "excepturi",
        type: TicketingTelephoneType.Home,
      },
    ],
    updatedAt: new Date("2022-02-14T22:17:14.340Z"),
  },
  connectionId: "aperiam",
  id: "36f5c388-664f-4698-9530-a2e2aed6aaf8",
}).then((res: PatchTicketingConnectionIdCustomerIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PatchTicketingConnectionIdCustomerIdRequest](../../models/operations/patchticketingconnectionidcustomeridrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PatchTicketingConnectionIdCustomerIdResponse](../../models/operations/patchticketingconnectionidcustomeridresponse.md)>**


## patchTicketingConnectionIdNoteTicketIdId

Update a note

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchTicketingConnectionIdNoteTicketIdIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticketing.patchTicketingConnectionIdNoteTicketIdId({
  ticketingNote: {
    agentId: "ea",
    createdAt: new Date("2022-03-24T22:55:36.292Z"),
    customerId: "eos",
    description: "praesentium",
    id: "d040c69a-3d90-46f6-abd5-ad7ec7394f25",
    raw: {},
    updatedAt: "repellat",
  },
  connectionId: "ex",
  id: "34b37307-14e6-4be8-83e0-9c64d342ac29",
  ticketId: "provident",
}).then((res: PatchTicketingConnectionIdNoteTicketIdIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.PatchTicketingConnectionIdNoteTicketIdIdRequest](../../models/operations/patchticketingconnectionidnoteticketididrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.PatchTicketingConnectionIdNoteTicketIdIdResponse](../../models/operations/patchticketingconnectionidnoteticketididresponse.md)>**


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

sdk.ticketing.patchTicketingConnectionIdTicketId({
  ticketingTicket: {
    category: "officia",
    closedAt: new Date("2022-01-28T05:10:10.473Z"),
    createdAt: new Date("2022-02-09T11:50:25.266Z"),
    customerId: "quam",
    description: "dolorum",
    id: "ef13402e-945f-4537-83ef-de1198221f9b",
    priority: "inventore",
    raw: {},
    source: "tenetur",
    sourceRef: "nihil",
    status: TicketingTicketStatus.Closed,
    subject: "iste",
    tags: [
      "deserunt",
    ],
    updatedAt: new Date("2020-02-21T15:04:19.759Z"),
  },
  connectionId: "repudiandae",
  id: "69682ace-efb0-44f8-8512-caabea708ed5",
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

sdk.ticketing.postTicketingConnectionIdAgent({
  ticketingAgent: {
    createdAt: new Date("2022-05-21T16:53:45.567Z"),
    emails: [
      {
        email: "Raven.Frami@yahoo.com",
        type: TicketingEmailType.Other,
      },
    ],
    id: "460599d5-c334-4957-ad55-209e9a2253b6",
    name: "Clinton Huel",
    raw: {},
    telephones: [
      {
        telephone: "laudantium",
        type: TicketingTelephoneType.Home,
      },
    ],
    updatedAt: new Date("2020-03-13T17:02:39.583Z"),
  },
  connectionId: "similique",
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


## postTicketingConnectionIdCustomer

Create a customer

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostTicketingConnectionIdCustomerResponse } from "Unified-to/dist/sdk/models/operations";
import { TicketingEmailType, TicketingTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticketing.postTicketingConnectionIdCustomer({
  ticketingCustomer: {
    createdAt: new Date("2021-11-22T08:46:26.211Z"),
    emails: [
      {
        email: "Sabina.Gulgowski59@hotmail.com",
        type: TicketingEmailType.Other,
      },
    ],
    id: "8a149067-8f13-4c68-ad83-9fc9e175ffa9",
    name: "Ella Murazik",
    raw: {},
    tags: [
      "corporis",
    ],
    telephones: [
      {
        telephone: "error",
        type: TicketingTelephoneType.Fax,
      },
    ],
    updatedAt: new Date("2022-11-08T14:43:03.666Z"),
  },
  connectionId: "debitis",
}).then((res: PostTicketingConnectionIdCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.PostTicketingConnectionIdCustomerRequest](../../models/operations/postticketingconnectionidcustomerrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PostTicketingConnectionIdCustomerResponse](../../models/operations/postticketingconnectionidcustomerresponse.md)>**


## postTicketingConnectionIdNoteTicketId

Create a note

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostTicketingConnectionIdNoteTicketIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticketing.postTicketingConnectionIdNoteTicketId({
  ticketingNote: {
    agentId: "quidem",
    createdAt: new Date("2022-07-05T14:59:15.588Z"),
    customerId: "magnam",
    description: "vel",
    id: "030fe183-76c2-4bed-ae76-790ed0c16a7b",
    raw: {},
    updatedAt: "id",
  },
  connectionId: "dolore",
  ticketId: "quam",
}).then((res: PostTicketingConnectionIdNoteTicketIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PostTicketingConnectionIdNoteTicketIdRequest](../../models/operations/postticketingconnectionidnoteticketidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PostTicketingConnectionIdNoteTicketIdResponse](../../models/operations/postticketingconnectionidnoteticketidresponse.md)>**


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

sdk.ticketing.postTicketingConnectionIdTicket({
  ticketingTicket: {
    category: "rem",
    closedAt: new Date("2022-12-31T16:32:53.167Z"),
    createdAt: new Date("2022-09-20T04:19:27.059Z"),
    customerId: "totam",
    description: "unde",
    id: "f6770ef0-4809-41a2-ba25-ee6c75af8a60",
    priority: "laborum",
    raw: {},
    source: "quam",
    sourceRef: "laborum",
    status: TicketingTicketStatus.Closed,
    subject: "dolor",
    tags: [
      "dolore",
    ],
    updatedAt: new Date("2022-01-27T16:39:01.281Z"),
  },
  connectionId: "perferendis",
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

sdk.ticketing.putTicketingConnectionIdAgentId({
  ticketingAgent: {
    createdAt: new Date("2022-02-01T01:30:25.348Z"),
    emails: [
      {
        email: "Sigrid_Hilll@yahoo.com",
        type: TicketingEmailType.Other,
      },
    ],
    id: "60acaca6-45de-4986-b551-a9cce61ec2c7",
    name: "Gerard Feest",
    raw: {},
    telephones: [
      {
        telephone: "officiis",
        type: TicketingTelephoneType.Home,
      },
    ],
    updatedAt: new Date("2022-05-28T17:33:55.487Z"),
  },
  connectionId: "assumenda",
  id: "5a65b4d5-562d-49b7-99e2-d6fcf557629d",
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


## putTicketingConnectionIdCustomerId

Update a customer

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutTicketingConnectionIdCustomerIdResponse } from "Unified-to/dist/sdk/models/operations";
import { TicketingEmailType, TicketingTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticketing.putTicketingConnectionIdCustomerId({
  ticketingCustomer: {
    createdAt: new Date("2021-11-27T14:28:08.554Z"),
    emails: [
      {
        email: "Enola63@yahoo.com",
        type: TicketingEmailType.Home,
      },
    ],
    id: "90282a51-f41c-4f67-96ed-3d724c18f581",
    name: "Terrence Langworth",
    raw: {},
    tags: [
      "officiis",
    ],
    telephones: [
      {
        telephone: "consectetur",
        type: TicketingTelephoneType.Mobile,
      },
    ],
    updatedAt: new Date("2022-11-17T00:52:06.013Z"),
  },
  connectionId: "autem",
  id: "600da0e3-aa61-4c6f-a09d-852b53b32c8c",
}).then((res: PutTicketingConnectionIdCustomerIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.PutTicketingConnectionIdCustomerIdRequest](../../models/operations/putticketingconnectionidcustomeridrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PutTicketingConnectionIdCustomerIdResponse](../../models/operations/putticketingconnectionidcustomeridresponse.md)>**


## putTicketingConnectionIdNoteTicketIdId

Update a note

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutTicketingConnectionIdNoteTicketIdIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ticketing.putTicketingConnectionIdNoteTicketIdId({
  ticketingNote: {
    agentId: "dignissimos",
    createdAt: new Date("2022-06-05T09:20:14.169Z"),
    customerId: "eligendi",
    description: "esse",
    id: "10e1673d-905c-4b4b-adef-3c127c390995",
    raw: {},
    updatedAt: "veniam",
  },
  connectionId: "consequuntur",
  id: "8250dcbb-cd3b-4121-b88c-1ee5e7a06139",
  ticketId: "quasi",
}).then((res: PutTicketingConnectionIdNoteTicketIdIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PutTicketingConnectionIdNoteTicketIdIdRequest](../../models/operations/putticketingconnectionidnoteticketididrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PutTicketingConnectionIdNoteTicketIdIdResponse](../../models/operations/putticketingconnectionidnoteticketididresponse.md)>**


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

sdk.ticketing.putTicketingConnectionIdTicketId({
  ticketingTicket: {
    category: "placeat",
    closedAt: new Date("2021-06-17T09:59:15.139Z"),
    createdAt: new Date("2021-01-22T11:03:32.954Z"),
    customerId: "aut",
    description: "soluta",
    id: "7d176492-6b0c-4f5e-acb6-ebabe5e0b99f",
    priority: "velit",
    raw: {},
    source: "nobis",
    sourceRef: "illo",
    status: TicketingTicketStatus.Active,
    subject: "enim",
    tags: [
      "quas",
    ],
    updatedAt: new Date("2021-10-30T17:09:24.055Z"),
  },
  connectionId: "deserunt",
  id: "87bb7aec-be56-49d7-8cb0-69907f989441",
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

