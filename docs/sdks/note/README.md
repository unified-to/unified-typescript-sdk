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
  connectionId: "recusandae",
  id: "9085075b-c253-4825-b343-fb0a4e66ea47",
  ticketId: "exercitationem",
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
  connectionId: "molestiae",
  limit: 5096.38,
  offset: 8540.88,
  order: "ab",
  query: "voluptate",
  sort: "et",
  ticketId: "recusandae",
  updatedGte: new Date("2022-05-19T12:21:22.703Z"),
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
  connectionId: "eius",
  id: "1818fc67-9b6b-42f2-9359-b855d015b62c",
  ticketId: "quos",
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
    agentId: "cum",
    createdAt: new Date("2022-07-23T08:55:47.914Z"),
    customerId: "dolorum",
    description: "amet",
    id: "8a8a88c1-4420-40c2-8aeb-1ae1ecf8c349",
    raw: {},
    updatedAt: "modi",
  },
  connectionId: "commodi",
  id: "bba7a05a-8b4a-49ec-9b36-88cca3632727",
  ticketId: "iure",
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
    agentId: "sit",
    createdAt: new Date("2021-04-03T18:27:00.342Z"),
    customerId: "vel",
    description: "autem",
    id: "e97e0541-0334-47d7-8ff2-491145fab9e5",
    raw: {},
    updatedAt: "perspiciatis",
  },
  connectionId: "laborum",
  ticketId: "incidunt",
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
    agentId: "fuga",
    createdAt: new Date("2022-05-09T22:54:29.590Z"),
    customerId: "amet",
    description: "nisi",
    id: "664eaa6b-f2ff-414e-8c1b-352accedacc5",
    raw: {},
    updatedAt: "consequuntur",
  },
  connectionId: "qui",
  id: "7814eca0-16bc-441e-a134-2d4104a25ef7",
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

