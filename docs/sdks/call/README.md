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
      answerAt: new Date("2025-05-17T04:22:13.904Z"),
      contacts: [],
      conversationIdentifier: "0bf7e6b4-fcac-4647-ae46-e90805a2ab7d",
      costAmount: 1.564,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2556,
      endAt: new Date("2024-05-31T23:11:16.104Z"),
      id: "0bf7e6b4-fcac-4647-ae46-e90805a2ab7d",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "PRICE",
          id: "afb2b301-16b2-48e1-bba1-12041afe39d7",
          namespace: "custom",
          slug: "custom_field",
          value: "tui",
        },
      ],
      startAt: new Date("2023-12-18T13:00:39.833Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(493) 534-0768",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-03T20:10:33.863Z"),
      userPhone: "819-894-3317 x163",
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
      answerAt: new Date("2025-05-17T04:22:13.904Z"),
      contacts: [],
      conversationIdentifier: "0bf7e6b4-fcac-4647-ae46-e90805a2ab7d",
      costAmount: 1.564,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2556,
      endAt: new Date("2024-05-31T23:11:16.104Z"),
      id: "0bf7e6b4-fcac-4647-ae46-e90805a2ab7d",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "PRICE",
          id: "afb2b301-16b2-48e1-bba1-12041afe39d7",
          namespace: "custom",
          slug: "custom_field",
          value: "tui",
        },
      ],
      startAt: new Date("2023-12-18T13:00:39.833Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(493) 534-0768",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-03T20:10:33.863Z"),
      userPhone: "819-894-3317 x163",
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
      answerAt: new Date("2025-05-17T04:22:13.925Z"),
      contacts: [],
      conversationIdentifier: "c93419d2-56a7-4c34-b141-3a0c1300a9a1",
      costAmount: 1.564,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2556,
      endAt: new Date("2024-05-31T23:11:16.115Z"),
      id: "c93419d2-56a7-4c34-b141-3a0c1300a9a1",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "PRICE",
          id: "895484e1-f032-4e12-af74-24c1d9b0b4e8",
          namespace: "custom",
          slug: "custom_field",
          value: "tui",
        },
      ],
      startAt: new Date("2023-12-18T13:00:39.840Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(493) 534-0768",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-03T20:10:33.866Z"),
      userPhone: "819-894-3317 x163",
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
      answerAt: new Date("2025-05-17T04:22:13.925Z"),
      contacts: [],
      conversationIdentifier: "c93419d2-56a7-4c34-b141-3a0c1300a9a1",
      costAmount: 1.564,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2556,
      endAt: new Date("2024-05-31T23:11:16.115Z"),
      id: "c93419d2-56a7-4c34-b141-3a0c1300a9a1",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "PRICE",
          id: "895484e1-f032-4e12-af74-24c1d9b0b4e8",
          namespace: "custom",
          slug: "custom_field",
          value: "tui",
        },
      ],
      startAt: new Date("2023-12-18T13:00:39.840Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(493) 534-0768",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-03T20:10:33.866Z"),
      userPhone: "819-894-3317 x163",
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
      answerAt: new Date("2025-05-17T04:22:13.925Z"),
      contacts: [],
      conversationIdentifier: "c93419d2-56a7-4c34-b141-3a0c1300a9a1",
      costAmount: 1.564,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2556,
      endAt: new Date("2024-05-31T23:11:16.115Z"),
      id: "c93419d2-56a7-4c34-b141-3a0c1300a9a1",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "PRICE",
          id: "895484e1-f032-4e12-af74-24c1d9b0b4e8",
          namespace: "custom",
          slug: "custom_field",
          value: "tui",
        },
      ],
      startAt: new Date("2023-12-18T13:00:39.840Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(493) 534-0768",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-03T20:10:33.866Z"),
      userPhone: "819-894-3317 x163",
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
      answerAt: new Date("2025-05-17T04:22:13.925Z"),
      contacts: [],
      conversationIdentifier: "c93419d2-56a7-4c34-b141-3a0c1300a9a1",
      costAmount: 1.564,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2556,
      endAt: new Date("2024-05-31T23:11:16.115Z"),
      id: "c93419d2-56a7-4c34-b141-3a0c1300a9a1",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "PRICE",
          id: "895484e1-f032-4e12-af74-24c1d9b0b4e8",
          namespace: "custom",
          slug: "custom_field",
          value: "tui",
        },
      ],
      startAt: new Date("2023-12-18T13:00:39.840Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(493) 534-0768",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-03T20:10:33.866Z"),
      userPhone: "819-894-3317 x163",
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