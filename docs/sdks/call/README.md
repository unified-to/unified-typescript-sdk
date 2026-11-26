# Call

## Overview

### Available Operations

* [createUcCall](#createuccall) - Create a call
* [getUcCall](#getuccall) - Retrieve a call
* [listUcCalls](#listuccalls) - List all calls
* [patchUcCall](#patchuccall) - Update a call
* [updateUcCall](#updateuccall) - Update a call

## createUcCall

Creates a UcCall. Provide the unified UcCall fields in the request body; they are mapped to the provider's API. Returns the created UcCall.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createUcCall" method="post" path="/uc/{connection_id}/call" example="uc_call" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.call.createUcCall({
    ucCall: {
      answerAt: new Date("2025-06-03T20:10:41.355Z"),
      contacts: [],
      conversationIdentifier: "c77c40f5-8a5c-436f-a39a-35857d2ffa3e",
      costAmount: 2.7016,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2132,
      endAt: new Date("2024-06-10T10:30:27.738Z"),
      id: "c77c40f5-8a5c-436f-a39a-35857d2ffa3e",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "PRICE",
          id: "9777489f-13d7-439f-a6be-482943b70563",
          namespace: "custom",
          slug: "custom_field",
          value: "voluptatem",
        },
      ],
      startAt: new Date("2023-12-24T03:31:12.899Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(507) 787-3877",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-06T05:59:21.365Z"),
      userPhone: "1-894-431-7163 x39343",
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { ucCreateUcCall } from "@unified-api/typescript-sdk/funcs/ucCreateUcCall.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ucCreateUcCall(unifiedTo, {
    ucCall: {
      answerAt: new Date("2025-06-03T20:10:41.355Z"),
      contacts: [],
      conversationIdentifier: "c77c40f5-8a5c-436f-a39a-35857d2ffa3e",
      costAmount: 2.7016,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2132,
      endAt: new Date("2024-06-10T10:30:27.738Z"),
      id: "c77c40f5-8a5c-436f-a39a-35857d2ffa3e",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "PRICE",
          id: "9777489f-13d7-439f-a6be-482943b70563",
          namespace: "custom",
          slug: "custom_field",
          value: "voluptatem",
        },
      ],
      startAt: new Date("2023-12-24T03:31:12.899Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(507) 787-3877",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-06T05:59:21.365Z"),
      userPhone: "1-894-431-7163 x39343",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ucCreateUcCall failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateUcCallRequest](../../sdk/models/operations/createuccallrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcCall](../../sdk/models/shared/uccall.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getUcCall

Retrieves a single UcCall by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUcCall" method="get" path="/uc/{connection_id}/call/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.call.getUcCall({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { ucGetUcCall } from "@unified-api/typescript-sdk/funcs/ucGetUcCall.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ucGetUcCall(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ucGetUcCall failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUcCallRequest](../../sdk/models/operations/getuccallrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcCall](../../sdk/models/shared/uccall.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listUcCalls

Returns a list of UcCalls. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listUcCalls" method="get" path="/uc/{connection_id}/call" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.call.listUcCalls({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { ucListUcCalls } from "@unified-api/typescript-sdk/funcs/ucListUcCalls.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ucListUcCalls(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ucListUcCalls failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListUcCallsRequest](../../sdk/models/operations/listuccallsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcCall[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchUcCall

Updates the UcCall identified by `id`. Provide the unified UcCall fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchUcCall" method="patch" path="/uc/{connection_id}/call/{id}" example="uc_call" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.call.patchUcCall({
    ucCall: {
      answerAt: new Date("2025-06-03T20:10:41.375Z"),
      contacts: [],
      conversationIdentifier: "0742d268-cf80-4bb1-975f-e96c82831f8d",
      costAmount: 2.7016,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2132,
      endAt: new Date("2024-06-10T10:30:27.749Z"),
      id: "0742d268-cf80-4bb1-975f-e96c82831f8d",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "PRICE",
          id: "74f846fa-b6bd-4a85-8279-715732d17c36",
          namespace: "custom",
          slug: "custom_field",
          value: "voluptatem",
        },
      ],
      startAt: new Date("2023-12-24T03:31:12.905Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(507) 787-3877",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-06T05:59:21.367Z"),
      userPhone: "1-894-431-7163 x39343",
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { ucPatchUcCall } from "@unified-api/typescript-sdk/funcs/ucPatchUcCall.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ucPatchUcCall(unifiedTo, {
    ucCall: {
      answerAt: new Date("2025-06-03T20:10:41.375Z"),
      contacts: [],
      conversationIdentifier: "0742d268-cf80-4bb1-975f-e96c82831f8d",
      costAmount: 2.7016,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2132,
      endAt: new Date("2024-06-10T10:30:27.749Z"),
      id: "0742d268-cf80-4bb1-975f-e96c82831f8d",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "PRICE",
          id: "74f846fa-b6bd-4a85-8279-715732d17c36",
          namespace: "custom",
          slug: "custom_field",
          value: "voluptatem",
        },
      ],
      startAt: new Date("2023-12-24T03:31:12.905Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(507) 787-3877",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-06T05:59:21.367Z"),
      userPhone: "1-894-431-7163 x39343",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ucPatchUcCall failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchUcCallRequest](../../sdk/models/operations/patchuccallrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcCall](../../sdk/models/shared/uccall.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateUcCall

Updates the UcCall identified by `id`. Provide the unified UcCall fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateUcCall" method="put" path="/uc/{connection_id}/call/{id}" example="uc_call" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.call.updateUcCall({
    ucCall: {
      answerAt: new Date("2025-06-03T20:10:41.375Z"),
      contacts: [],
      conversationIdentifier: "0742d268-cf80-4bb1-975f-e96c82831f8d",
      costAmount: 2.7016,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2132,
      endAt: new Date("2024-06-10T10:30:27.749Z"),
      id: "0742d268-cf80-4bb1-975f-e96c82831f8d",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "PRICE",
          id: "74f846fa-b6bd-4a85-8279-715732d17c36",
          namespace: "custom",
          slug: "custom_field",
          value: "voluptatem",
        },
      ],
      startAt: new Date("2023-12-24T03:31:12.905Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(507) 787-3877",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-06T05:59:21.367Z"),
      userPhone: "1-894-431-7163 x39343",
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { ucUpdateUcCall } from "@unified-api/typescript-sdk/funcs/ucUpdateUcCall.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ucUpdateUcCall(unifiedTo, {
    ucCall: {
      answerAt: new Date("2025-06-03T20:10:41.375Z"),
      contacts: [],
      conversationIdentifier: "0742d268-cf80-4bb1-975f-e96c82831f8d",
      costAmount: 2.7016,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2132,
      endAt: new Date("2024-06-10T10:30:27.749Z"),
      id: "0742d268-cf80-4bb1-975f-e96c82831f8d",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "PRICE",
          id: "74f846fa-b6bd-4a85-8279-715732d17c36",
          namespace: "custom",
          slug: "custom_field",
          value: "voluptatem",
        },
      ],
      startAt: new Date("2023-12-24T03:31:12.905Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(507) 787-3877",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-06T05:59:21.367Z"),
      userPhone: "1-894-431-7163 x39343",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ucUpdateUcCall failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateUcCallRequest](../../sdk/models/operations/updateuccallrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcCall](../../sdk/models/shared/uccall.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |