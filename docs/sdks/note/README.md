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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.note.deleteTicketingConnectionIdNoteTicketIdId({
    connectionId: "DRAM Liaison",
    id: "<ID>",
    ticketId: "Tasty exploit",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.note.getTicketingConnectionIdNoteTicketId({
    connectionId: "Account revolutionary",
    ticketId: "Associate",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.note.getTicketingConnectionIdNoteTicketIdId({
    connectionId: "for",
    id: "<ID>",
    ticketId: "female",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.note.patchTicketingConnectionIdNoteTicketIdId({
    ticketingNote: {
      raw: {},
    },
    connectionId: "compress Oganesson",
    id: "<ID>",
    ticketId: "York Fantastic",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.note.postTicketingConnectionIdNoteTicketId({
    ticketingNote: {
      raw: {},
    },
    connectionId: "Plantation blue",
    ticketId: "Ford",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.note.putTicketingConnectionIdNoteTicketIdId({
    ticketingNote: {
      raw: {},
    },
    connectionId: "SMTP Cis",
    id: "<ID>",
    ticketId: "East benchmark",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PutTicketingConnectionIdNoteTicketIdIdRequest](../../models/operations/putticketingconnectionidnoteticketididrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PutTicketingConnectionIdNoteTicketIdIdResponse](../../models/operations/putticketingconnectionidnoteticketididresponse.md)>**

