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
  connectionId: "Wooden Latin",
  id: "<ID>",
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
  companyId: "Gasoline gentle Japan",
  connectionId: "Outdoors",
  id: "<ID>",
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
  connectionId: "lecture Funk",
  contactId: "Bedfordshire Genderqueer",
  id: "<ID>",
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
  connectionId: "Southeast",
  dealId: "Granite gah Dysprosium",
  id: "<ID>",
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
  companyId: "Zirconium Avon Bedfordshire",
  connectionId: "Hybrid grey Ferrari",
  contactId: "Checking Southeast",
  dealId: "Graham till Caesium",
  limit: 2928.84,
  offset: 5904.77,
  order: "furthermore Tricycle Hop",
  query: "auxiliary",
  sort: "Southeast Bicycle Gorgeous",
  updatedGte: new Date("2023-01-15T23:49:53.643Z"),
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
  connectionId: "Future equalise",
  id: "<ID>",
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
      description: "Optional zero defect function",
      duration: 5434.61,
    },
    companyIds: [
      "silver",
    ],
    contactIds: [
      "redefine",
    ],
    createdAt: new Date("2021-07-21T06:46:42.528Z"),
    dealIds: [
      "Solutions",
    ],
    email: {
      body: "French",
      cc: [
        "Checking",
      ],
      from: "SDD Toyota Northeast",
      subject: "Convertible",
      to: [
        "Electronics",
      ],
    },
    id: "<ID>",
    meeting: {
      description: "Monitored mission-critical customer loyalty",
      endAt: new Date("2022-09-22T17:43:00.863Z"),
      startAt: new Date("2023-04-24T06:40:04.926Z"),
      title: "Kip Switchable Chicken",
    },
    note: {
      description: "Cross-group high-level functionalities",
    },
    raw: {},
    task: {
      description: "Horizontal empowering forecast",
      name: "Principal extremely Jast",
      status: "striped Concrete Bronze",
    },
    type: CrmEventType.Note,
    updatedAt: new Date("2021-02-18T21:34:24.992Z"),
  },
  connectionId: "Dinar benchmark till",
  id: "<ID>",
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
  companyId: "quis Operations",
  connectionId: "convergence programming",
  id: "<ID>",
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
  connectionId: "gosh",
  contactId: "North Guilder",
  id: "<ID>",
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
  connectionId: "nobis Developer withdrawal",
  dealId: "male connect",
  id: "<ID>",
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
      description: "Visionary bandwidth-monitored hardware",
      duration: 9256.02,
    },
    companyIds: [
      "Kentucky",
    ],
    contactIds: [
      "Rustic",
    ],
    createdAt: new Date("2023-02-12T10:03:55.861Z"),
    dealIds: [
      "agonizing",
    ],
    email: {
      body: "protocol",
      cc: [
        "Ratke",
      ],
      from: "woman",
      subject: "East Soft",
      to: [
        "Southeast",
      ],
    },
    id: "<ID>",
    meeting: {
      description: "Streamlined intangible time-frame",
      endAt: new Date("2022-04-18T21:50:55.608Z"),
      startAt: new Date("2021-08-24T14:06:25.626Z"),
      title: "violet Synergized blah",
    },
    note: {
      description: "Mandatory eco-centric toolset",
    },
    raw: {},
    task: {
      description: "Team-oriented dynamic forecast",
      name: "Grocery",
      status: "excitedly Bacon",
    },
    type: CrmEventType.Email,
    updatedAt: new Date("2021-09-09T20:12:06.214Z"),
  },
  connectionId: "Progressive",
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
      description: "Re-engineered composite time-frame",
      duration: 5444.58,
    },
    companyIds: [
      "DNS",
    ],
    contactIds: [
      "Skokie",
    ],
    createdAt: new Date("2022-07-05T01:37:36.877Z"),
    dealIds: [
      "lux",
    ],
    email: {
      body: "Hatchback card",
      cc: [
        "Gasoline",
      ],
      from: "Caribbean",
      subject: "Account medium",
      to: [
        "copy",
      ],
    },
    id: "<ID>",
    meeting: {
      description: "Inverse optimizing model",
      endAt: new Date("2022-03-21T17:32:41.888Z"),
      startAt: new Date("2022-10-17T10:31:48.119Z"),
      title: "male henry Hat",
    },
    note: {
      description: "Self-enabling asymmetric functionalities",
    },
    raw: {},
    task: {
      description: "Reduced 4th generation analyzer",
      name: "Savings Female nor",
      status: "Customer sky",
    },
    type: CrmEventType.Note,
    updatedAt: new Date("2023-07-27T14:02:37.510Z"),
  },
  connectionId: "transparent",
  id: "<ID>",
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
  companyId: "Administrator",
  connectionId: "Computers",
  id: "<ID>",
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
  connectionId: "olive",
  contactId: "deposit Bicycle",
  id: "<ID>",
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
  connectionId: "Bloomington",
  dealId: "provided apud Southeast",
  id: "<ID>",
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

