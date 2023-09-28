# Note
(*note*)

### Available Operations

* [deleteTicketingConnectionIdNoteTicketIdId](#deleteticketingconnectionidnoteticketidid) - Remove a note
* [getTicketingConnectionIdNoteTicketId](#getticketingconnectionidnoteticketid) - List all notes
* [getTicketingConnectionIdNoteTicketIdId](#getticketingconnectionidnoteticketidid) - Retrieve a note
* [patchTicketingConnectionIdNoteTicketIdId](#patchticketingconnectionidnoteticketidid) - Update a note
* [postTicketingConnectionIdNoteTicketId](#postticketingconnectionidnoteticketid) - Create a note
* [putTicketingConnectionIdNoteTicketIdId](#putticketingconnectionidnoteticketidid) - Update a note

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

sdk.note.deleteTicketingConnectionIdNoteTicketIdId({
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

sdk.note.getTicketingConnectionIdNoteTicketId({
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

sdk.note.getTicketingConnectionIdNoteTicketIdId({
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

sdk.note.patchTicketingConnectionIdNoteTicketIdId({
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

sdk.note.postTicketingConnectionIdNoteTicketId({
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

sdk.note.putTicketingConnectionIdNoteTicketIdId({
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

