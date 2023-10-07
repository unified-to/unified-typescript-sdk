# Event
(*event*)

### Available Operations

* [deleteCrmConnectionIdEventId](#deletecrmconnectionideventid) - Remove a event
* [getCrmConnectionIdEvent](#getcrmconnectionidevent) - List all events
* [getCrmConnectionIdEventId](#getcrmconnectionideventid) - Retrieve a event
* [patchCrmConnectionIdEventId](#patchcrmconnectionideventid) - Update a event
* [postCrmConnectionIdEvent](#postcrmconnectionidevent) - Create a event
* [putCrmConnectionIdEventId](#putcrmconnectionideventid) - Update a event

## deleteCrmConnectionIdEventId

Remove a event

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.event.deleteCrmConnectionIdEventId({
    connectionId: "Wooden Latin",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeleteCrmConnectionIdEventIdRequest](../../models/operations/deletecrmconnectionideventidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeleteCrmConnectionIdEventIdResponse](../../models/operations/deletecrmconnectionideventidresponse.md)>**


## getCrmConnectionIdEvent

List all events

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.event.getCrmConnectionIdEvent({
    connectionId: "Zirconium Avon Bedfordshire",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.event.getCrmConnectionIdEventId({
    connectionId: "Future equalise",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";
import { CrmEventType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.event.patchCrmConnectionIdEventId({
    crmEvent: {
      call: {},
      companyIds: [
        "parse",
      ],
      contactIds: [
        "intranet",
      ],
      dealIds: [
        "silver",
      ],
      email: {
        cc: [
          "redefine",
        ],
        to: [
          "Baby",
        ],
      },
      meeting: {},
      note: {},
      raw: {},
      task: {},
    },
    connectionId: "Steel",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PatchCrmConnectionIdEventIdRequest](../../models/operations/patchcrmconnectionideventidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PatchCrmConnectionIdEventIdResponse](../../models/operations/patchcrmconnectionideventidresponse.md)>**


## postCrmConnectionIdEvent

Create a event

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { CrmEventType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.event.postCrmConnectionIdEvent({
    crmEvent: {
      call: {},
      companyIds: [
        "carburize",
      ],
      contactIds: [
        "SDR",
      ],
      dealIds: [
        "Kentucky",
      ],
      email: {
        cc: [
          "Rustic",
        ],
        to: [
          "male",
        ],
      },
      meeting: {},
      note: {},
      raw: {},
      task: {},
    },
    connectionId: "Hat",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";
import { CrmEventType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.event.putCrmConnectionIdEventId({
    crmEvent: {
      call: {},
      companyIds: [
        "Iron",
      ],
      contactIds: [
        "marshmallow",
      ],
      dealIds: [
        "DNS",
      ],
      email: {
        cc: [
          "Skokie",
        ],
        to: [
          "calculating",
        ],
      },
      meeting: {},
      note: {},
      raw: {},
      task: {},
    },
    connectionId: "Blues firewall engineer",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PutCrmConnectionIdEventIdRequest](../../models/operations/putcrmconnectionideventidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PutCrmConnectionIdEventIdResponse](../../models/operations/putcrmconnectionideventidresponse.md)>**

