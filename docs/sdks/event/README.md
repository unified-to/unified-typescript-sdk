# Event
(*event*)

### Available Operations

* [deleteCrmConnectionIdEventId](#deletecrmconnectionideventid) - Remove a event
* [deleteCrmConnectionIdEventIdCompanyCompanyId](#deletecrmconnectionideventidcompanycompanyid) - Remove company association from an event
* [deleteCrmConnectionIdEventIdContactContactId](#deletecrmconnectionideventidcontactcontactid) - Remove contact association from an event
* [deleteCrmConnectionIdEventIdDealDealId](#deletecrmconnectionideventiddealdealid) - Remove deal association from an event
* [getCrmConnectionIdEvent](#getcrmconnectionidevent) - List all events
* [getCrmConnectionIdEventId](#getcrmconnectionideventid) - Retrieve a event
* [patchCrmConnectionIdEventId](#patchcrmconnectionideventid) - Update a event
* [patchCrmConnectionIdEventIdCompanyCompanyId](#patchcrmconnectionideventidcompanycompanyid) - Associate a company with an event
* [patchCrmConnectionIdEventIdContactContactId](#patchcrmconnectionideventidcontactcontactid) - Associate a contact with an event
* [patchCrmConnectionIdEventIdDealDealId](#patchcrmconnectionideventiddealdealid) - Associate a deal with an event
* [postCrmConnectionIdEvent](#postcrmconnectionidevent) - Create a event
* [putCrmConnectionIdEventId](#putcrmconnectionideventid) - Update a event
* [putCrmConnectionIdEventIdCompanyCompanyId](#putcrmconnectionideventidcompanycompanyid) - Associate a company with an event
* [putCrmConnectionIdEventIdContactContactId](#putcrmconnectionideventidcontactcontactid) - Associate a contact with an event
* [putCrmConnectionIdEventIdDealDealId](#putcrmconnectionideventiddealdealid) - Associate a deal with an event

## deleteCrmConnectionIdEventId

Remove a event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdEventIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.event.deleteCrmConnectionIdEventId({
  connectionId: "unde",
  id: "7e152297-510d-4a80-b122-92cc61c2a702",
}).then((res: DeleteCrmConnectionIdEventIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeleteCrmConnectionIdEventIdRequest](../../models/operations/deletecrmconnectionideventidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeleteCrmConnectionIdEventIdResponse](../../models/operations/deletecrmconnectionideventidresponse.md)>**


## deleteCrmConnectionIdEventIdCompanyCompanyId

Remove company association from an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdEventIdCompanyCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.event.deleteCrmConnectionIdEventIdCompanyCompanyId({
  companyId: "distinctio",
  connectionId: "soluta",
  id: "97ee102d-a2de-435f-8e01-bf33eaab4540",
}).then((res: DeleteCrmConnectionIdEventIdCompanyCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.DeleteCrmConnectionIdEventIdCompanyCompanyIdRequest](../../models/operations/deletecrmconnectionideventidcompanycompanyidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeleteCrmConnectionIdEventIdCompanyCompanyIdResponse](../../models/operations/deletecrmconnectionideventidcompanycompanyidresponse.md)>**


## deleteCrmConnectionIdEventIdContactContactId

Remove contact association from an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdEventIdContactContactIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.event.deleteCrmConnectionIdEventIdContactContactId({
  connectionId: "dolores",
  contactId: "dolorum",
  id: "c1704bf1-cc9f-4c61-aae5-eb5f0c492b57",
}).then((res: DeleteCrmConnectionIdEventIdContactContactIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.DeleteCrmConnectionIdEventIdContactContactIdRequest](../../models/operations/deletecrmconnectionideventidcontactcontactidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeleteCrmConnectionIdEventIdContactContactIdResponse](../../models/operations/deletecrmconnectionideventidcontactcontactidresponse.md)>**


## deleteCrmConnectionIdEventIdDealDealId

Remove deal association from an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdEventIdDealDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.event.deleteCrmConnectionIdEventIdDealDealId({
  connectionId: "ut",
  dealId: "incidunt",
  id: "d08a2267-aaee-479e-bc71-ad31becb83d2",
}).then((res: DeleteCrmConnectionIdEventIdDealDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.DeleteCrmConnectionIdEventIdDealDealIdRequest](../../models/operations/deletecrmconnectionideventiddealdealidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.DeleteCrmConnectionIdEventIdDealDealIdResponse](../../models/operations/deletecrmconnectionideventiddealdealidresponse.md)>**


## getCrmConnectionIdEvent

List all events

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdEventResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.event.getCrmConnectionIdEvent({
  companyId: "dolor",
  connectionId: "esse",
  contactId: "deleniti",
  dealId: "mollitia",
  limit: 8941.65,
  offset: 2035.85,
  order: "facilis",
  query: "sapiente",
  sort: "maxime",
  updatedGte: new Date("2022-10-11T22:27:53.755Z"),
}).then((res: GetCrmConnectionIdEventResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetCrmConnectionIdEventRequest](../../models/operations/getcrmconnectionideventrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetCrmConnectionIdEventResponse](../../models/operations/getcrmconnectionideventresponse.md)>**


## getCrmConnectionIdEventId

Retrieve a event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdEventIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.event.getCrmConnectionIdEventId({
  connectionId: "nulla",
  id: "9450a986-a495-4bac-b07f-06b28ecc8649",
}).then((res: GetCrmConnectionIdEventIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetCrmConnectionIdEventIdRequest](../../models/operations/getcrmconnectionideventidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetCrmConnectionIdEventIdResponse](../../models/operations/getcrmconnectionideventidresponse.md)>**


## patchCrmConnectionIdEventId

Update a event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdEventIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEventType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.event.patchCrmConnectionIdEventId({
  crmEvent: {
    call: {
      description: "sunt",
      duration: 2261.97,
    },
    companyIds: [
      "laudantium",
    ],
    contactIds: [
      "commodi",
    ],
    createdAt: new Date("2021-10-18T23:17:50.935Z"),
    dealIds: [
      "qui",
    ],
    email: {
      body: "eligendi",
      cc: [
        "perspiciatis",
      ],
      from: "eum",
      subject: "sint",
      to: [
        "eligendi",
      ],
    },
    id: "4cc6b788-90a3-4fd3-881d-a10f8c23df93",
    meeting: {
      description: "quae",
      endAt: new Date("2021-01-28T19:50:54.435Z"),
      startAt: new Date("2022-02-09T08:20:37.262Z"),
      title: "Dr.",
    },
    note: {
      description: "tempore",
    },
    raw: {},
    task: {
      description: "minima",
      name: "Winifred O'Reilly",
      status: "numquam",
    },
    type: CrmEventType.Meeting,
    updatedAt: new Date("2020-08-13T07:08:20.678Z"),
  },
  connectionId: "sint",
  id: "43513772-6d15-4321-b832-a56d69180ff6",
}).then((res: PatchCrmConnectionIdEventIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PatchCrmConnectionIdEventIdRequest](../../models/operations/patchcrmconnectionideventidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PatchCrmConnectionIdEventIdResponse](../../models/operations/patchcrmconnectionideventidresponse.md)>**


## patchCrmConnectionIdEventIdCompanyCompanyId

Associate a company with an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdEventIdCompanyCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.event.patchCrmConnectionIdEventIdCompanyCompanyId({
  companyId: "consequatur",
  connectionId: "accusamus",
  id: "b9a6658e-69a4-4b84-bd38-2dbec75c68c6",
}).then((res: PatchCrmConnectionIdEventIdCompanyCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.PatchCrmConnectionIdEventIdCompanyCompanyIdRequest](../../models/operations/patchcrmconnectionideventidcompanycompanyidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PatchCrmConnectionIdEventIdCompanyCompanyIdResponse](../../models/operations/patchcrmconnectionideventidcompanycompanyidresponse.md)>**


## patchCrmConnectionIdEventIdContactContactId

Associate a contact with an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdEventIdContactContactIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.event.patchCrmConnectionIdEventIdContactContactId({
  connectionId: "aut",
  contactId: "nisi",
  id: "59468ce3-04d8-4849-bf82-14c337f96bb0",
}).then((res: PatchCrmConnectionIdEventIdContactContactIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.PatchCrmConnectionIdEventIdContactContactIdRequest](../../models/operations/patchcrmconnectionideventidcontactcontactidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PatchCrmConnectionIdEventIdContactContactIdResponse](../../models/operations/patchcrmconnectionideventidcontactcontactidresponse.md)>**


## patchCrmConnectionIdEventIdDealDealId

Associate a deal with an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdEventIdDealDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.event.patchCrmConnectionIdEventIdDealDealId({
  connectionId: "porro",
  dealId: "vel",
  id: "9e372db1-344b-4a9f-b8a5-c0ed7aab62e9",
}).then((res: PatchCrmConnectionIdEventIdDealDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PatchCrmConnectionIdEventIdDealDealIdRequest](../../models/operations/patchcrmconnectionideventiddealdealidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PatchCrmConnectionIdEventIdDealDealIdResponse](../../models/operations/patchcrmconnectionideventiddealdealidresponse.md)>**


## postCrmConnectionIdEvent

Create a event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdEventResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEventType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.event.postCrmConnectionIdEvent({
  crmEvent: {
    call: {
      description: "iusto",
      duration: 1323.66,
    },
    companyIds: [
      "ea",
    ],
    contactIds: [
      "architecto",
    ],
    createdAt: new Date("2020-10-13T11:08:25.283Z"),
    dealIds: [
      "alias",
    ],
    email: {
      body: "quod",
      cc: [
        "veniam",
      ],
      from: "corrupti",
      subject: "temporibus",
      to: [
        "odit",
      ],
    },
    id: "7b51996b-5b4b-450e-af71-2b7a7ab0344b",
    meeting: {
      description: "inventore",
      endAt: new Date("2022-11-20T13:22:34.695Z"),
      startAt: new Date("2022-08-01T07:59:36.823Z"),
      title: "Ms.",
    },
    note: {
      description: "deleniti",
    },
    raw: {},
    task: {
      description: "illum",
      name: "Caleb Purdy",
      status: "rem",
    },
    type: CrmEventType.Task,
    updatedAt: new Date("2022-01-23T07:05:36.436Z"),
  },
  connectionId: "velit",
}).then((res: PostCrmConnectionIdEventResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PostCrmConnectionIdEventRequest](../../models/operations/postcrmconnectionideventrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PostCrmConnectionIdEventResponse](../../models/operations/postcrmconnectionideventresponse.md)>**


## putCrmConnectionIdEventId

Update a event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdEventIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEventType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.event.putCrmConnectionIdEventId({
  crmEvent: {
    call: {
      description: "fugiat",
      duration: 8660.78,
    },
    companyIds: [
      "voluptatem",
    ],
    contactIds: [
      "quod",
    ],
    createdAt: new Date("2020-05-30T09:15:09.119Z"),
    dealIds: [
      "dolor",
    ],
    email: {
      body: "amet",
      cc: [
        "tenetur",
      ],
      from: "quasi",
      subject: "dicta",
      to: [
        "rerum",
      ],
    },
    id: "3e4e080a-a104-4186-ac75-9e02f3702c5c",
    meeting: {
      description: "laudantium",
      endAt: new Date("2022-08-02T07:50:37.926Z"),
      startAt: new Date("2022-05-30T16:07:16.405Z"),
      title: "Mr.",
    },
    note: {
      description: "voluptates",
    },
    raw: {},
    task: {
      description: "culpa",
      name: "Mrs. Leonard Cartwright",
      status: "culpa",
    },
    type: CrmEventType.Email,
    updatedAt: new Date("2022-07-25T01:13:49.601Z"),
  },
  connectionId: "alias",
  id: "7bf375b4-4282-4821-bdb2-f69e59267c71",
}).then((res: PutCrmConnectionIdEventIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PutCrmConnectionIdEventIdRequest](../../models/operations/putcrmconnectionideventidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PutCrmConnectionIdEventIdResponse](../../models/operations/putcrmconnectionideventidresponse.md)>**


## putCrmConnectionIdEventIdCompanyCompanyId

Associate a company with an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdEventIdCompanyCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.event.putCrmConnectionIdEventIdCompanyCompanyId({
  companyId: "quo",
  connectionId: "optio",
  id: "8d3cd425-8d03-458a-82c8-08fe2751a204",
}).then((res: PutCrmConnectionIdEventIdCompanyCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.PutCrmConnectionIdEventIdCompanyCompanyIdRequest](../../models/operations/putcrmconnectionideventidcompanycompanyidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PutCrmConnectionIdEventIdCompanyCompanyIdResponse](../../models/operations/putcrmconnectionideventidcompanycompanyidresponse.md)>**


## putCrmConnectionIdEventIdContactContactId

Associate a contact with an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdEventIdContactContactIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.event.putCrmConnectionIdEventIdContactContactId({
  connectionId: "ducimus",
  contactId: "quod",
  id: "0449e143-f961-49bb-bd40-d5a11fa436e6",
}).then((res: PutCrmConnectionIdEventIdContactContactIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.PutCrmConnectionIdEventIdContactContactIdRequest](../../models/operations/putcrmconnectionideventidcontactcontactidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PutCrmConnectionIdEventIdContactContactIdResponse](../../models/operations/putcrmconnectionideventidcontactcontactidresponse.md)>**


## putCrmConnectionIdEventIdDealDealId

Associate a deal with an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdEventIdDealDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.event.putCrmConnectionIdEventIdDealDealId({
  connectionId: "sed",
  dealId: "exercitationem",
  id: "9233f95c-9d23-4739-bc78-5b5db4f50018",
}).then((res: PutCrmConnectionIdEventIdDealDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PutCrmConnectionIdEventIdDealDealIdRequest](../../models/operations/putcrmconnectionideventiddealdealidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PutCrmConnectionIdEventIdDealDealIdResponse](../../models/operations/putcrmconnectionideventiddealdealidresponse.md)>**

