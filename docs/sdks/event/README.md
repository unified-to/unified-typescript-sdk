# Event
(*event*)

### Available Operations

* [createCrmEvent](#createcrmevent) - Create a event
* [getCrmEvent](#getcrmevent) - Retrieve a event
* [listCrmEvents](#listcrmevents) - List all events
* [patchCrmEvent](#patchcrmevent) - Update a event
* [removeCrmEvent](#removecrmevent) - Remove a event
* [updateCrmEvent](#updatecrmevent) - Update a event

## createCrmEvent

Create a event

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreateCrmEventSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { CrmEventType, PropertyCrmEventTaskStatus } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCrmEventSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.event.createCrmEvent({
    crmEvent: {
      call: {},
      companyIds: [
        "<value>",
      ],
      contactIds: [
        "<value>",
      ],
      dealIds: [
        "<value>",
      ],
      email: {
        attachmentFileIds: [
          "<value>",
        ],
        cc: [
          "<value>",
        ],
        to: [
          "<value>",
        ],
      },
      leadIds: [
        "<value>",
      ],
      meeting: {},
      note: {},
      raw: {
        "key": "<value>",
      },
      task: {},
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateCrmEventRequest](../../sdk/models/operations/createcrmeventrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.CreateCrmEventSecurity](../../sdk/models/operations/createcrmeventsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateCrmEventResponse](../../sdk/models/operations/createcrmeventresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCrmEvent

Retrieve a event

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetCrmEventSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCrmEventSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.event.getCrmEvent({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetCrmEventRequest](../../sdk/models/operations/getcrmeventrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.GetCrmEventSecurity](../../sdk/models/operations/getcrmeventsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetCrmEventResponse](../../sdk/models/operations/getcrmeventresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCrmEvents

List all events

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListCrmEventsSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCrmEventsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.event.listCrmEvents({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListCrmEventsRequest](../../sdk/models/operations/listcrmeventsrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.ListCrmEventsSecurity](../../sdk/models/operations/listcrmeventssecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListCrmEventsResponse](../../sdk/models/operations/listcrmeventsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchCrmEvent

Update a event

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchCrmEventSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { CrmEventType, PropertyCrmEventTaskStatus } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCrmEventSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.event.patchCrmEvent({
    crmEvent: {
      call: {},
      companyIds: [
        "<value>",
      ],
      contactIds: [
        "<value>",
      ],
      dealIds: [
        "<value>",
      ],
      email: {
        attachmentFileIds: [
          "<value>",
        ],
        cc: [
          "<value>",
        ],
        to: [
          "<value>",
        ],
      },
      leadIds: [
        "<value>",
      ],
      meeting: {},
      note: {},
      raw: {
        "key": "<value>",
      },
      task: {},
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PatchCrmEventRequest](../../sdk/models/operations/patchcrmeventrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.PatchCrmEventSecurity](../../sdk/models/operations/patchcrmeventsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PatchCrmEventResponse](../../sdk/models/operations/patchcrmeventresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeCrmEvent

Remove a event

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemoveCrmEventSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCrmEventSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.event.removeCrmEvent({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.RemoveCrmEventRequest](../../sdk/models/operations/removecrmeventrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.RemoveCrmEventSecurity](../../sdk/models/operations/removecrmeventsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.RemoveCrmEventResponse](../../sdk/models/operations/removecrmeventresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateCrmEvent

Update a event

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdateCrmEventSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { CrmEventType, PropertyCrmEventTaskStatus } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCrmEventSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.event.updateCrmEvent({
    crmEvent: {
      call: {},
      companyIds: [
        "<value>",
      ],
      contactIds: [
        "<value>",
      ],
      dealIds: [
        "<value>",
      ],
      email: {
        attachmentFileIds: [
          "<value>",
        ],
        cc: [
          "<value>",
        ],
        to: [
          "<value>",
        ],
      },
      leadIds: [
        "<value>",
      ],
      meeting: {},
      note: {},
      raw: {
        "key": "<value>",
      },
      task: {},
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateCrmEventRequest](../../sdk/models/operations/updatecrmeventrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.UpdateCrmEventSecurity](../../sdk/models/operations/updatecrmeventsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateCrmEventResponse](../../sdk/models/operations/updatecrmeventresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
