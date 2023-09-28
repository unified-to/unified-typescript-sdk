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
  connectionId: "Electric Gloves pish",
  id: "<ID>",
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
  connectionId: "DRAM Liaison",
  id: "<ID>",
  ticketId: "Tasty exploit",
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

sdk.ticketing.getTicketingConnectionIdAgentId({
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
  connectionId: "SDD because Salad",
  limit: 8049.62,
  offset: 4323.42,
  order: "override",
  query: "Rolls 1080p",
  sort: "quantifying Southeast Kansas",
  updatedGte: new Date("2023-12-20T19:18:39.254Z"),
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
  connectionId: "further Ebert",
  id: "<ID>",
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
  connectionId: "Account revolutionary",
  limit: 2310.88,
  offset: 6688.82,
  order: "AI",
  query: "stanch Investor attitude",
  sort: "Cotton",
  ticketId: "Handmade Kia",
  updatedGte: new Date("2022-05-26T17:12:11.333Z"),
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
  connectionId: "for",
  id: "<ID>",
  ticketId: "female",
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

sdk.ticketing.getTicketingConnectionIdTicketId({
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
    createdAt: new Date("2023-01-22T19:33:25.134Z"),
    emails: [
      {
        email: "Ora.Labadie94@yahoo.com",
        type: TicketingEmailType.Home,
      },
    ],
    id: "<ID>",
    name: "sensitise whiteboard Smyrna",
    raw: {},
    tags: [
      "Hialeah",
    ],
    telephones: [
      {
        telephone: "connect",
        type: TicketingTelephoneType.Work,
      },
    ],
    updatedAt: new Date("2023-12-28T17:48:45.929Z"),
  },
  connectionId: "Tennessine",
  id: "<ID>",
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
    agentId: "compress Oganesson",
    createdAt: new Date("2022-02-16T08:13:19.991Z"),
    customerId: "demystify",
    description: "Fundamental demand-driven workforce",
    id: "<ID>",
    raw: {},
    updatedAt: "Nissan",
  },
  connectionId: "Chicken",
  id: "<ID>",
  ticketId: "frictionless convergence officia",
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
    createdAt: new Date("2022-05-23T15:06:12.012Z"),
    emails: [
      {
        email: "Austin44@yahoo.com",
        type: TicketingEmailType.Work,
      },
    ],
    id: "<ID>",
    name: "Configuration neural",
    raw: {},
    tags: [
      "engineer",
    ],
    telephones: [
      {
        telephone: "Gasoline North gorgeous",
        type: TicketingTelephoneType.Fax,
      },
    ],
    updatedAt: new Date("2022-10-09T07:25:23.111Z"),
  },
  connectionId: "mole purple",
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
    agentId: "Plantation blue",
    createdAt: new Date("2021-06-11T06:54:31.529Z"),
    customerId: "asymmetric",
    description: "Expanded intermediate attitude",
    id: "<ID>",
    raw: {},
    updatedAt: "naturally",
  },
  connectionId: "Wagon Sulfur",
  ticketId: "digital",
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
    createdAt: new Date("2021-04-21T09:25:32.395Z"),
    emails: [
      {
        email: "Shawna42@hotmail.com",
        type: TicketingEmailType.Home,
      },
    ],
    id: "<ID>",
    name: "gray",
    raw: {},
    tags: [
      "Associate",
    ],
    telephones: [
      {
        telephone: "Sausages ivory Small",
        type: TicketingTelephoneType.Mobile,
      },
    ],
    updatedAt: new Date("2022-09-01T05:56:15.314Z"),
  },
  connectionId: "mobile Cotton",
  id: "<ID>",
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
    agentId: "SMTP Cis",
    createdAt: new Date("2022-07-27T18:14:06.584Z"),
    customerId: "Carolina",
    description: "Integrated asymmetric strategy",
    id: "<ID>",
    raw: {},
    updatedAt: "Northeast Morocco supposing",
  },
  connectionId: "DNS Fermium",
  id: "<ID>",
  ticketId: "Southwest round",
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

