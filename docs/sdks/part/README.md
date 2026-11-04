# Part

## Overview

### Available Operations

* [createPlmPart](#createplmpart) - Create a part
* [getPlmPart](#getplmpart) - Retrieve a part
* [listPlmParts](#listplmparts) - List all parts
* [patchPlmPart](#patchplmpart) - Update a part
* [updatePlmPart](#updateplmpart) - Update a part

## createPlmPart

Creates a PlmPart. Provide the unified PlmPart fields in the request body; they are mapped to the provider's API. Returns the created PlmPart.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPlmPart" method="post" path="/plm/{connection_id}/part" example="plm_part" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.part.createPlmPart({
    plmPart: {
      createdAt: new Date("2019-04-13T06:25:34.770Z"),
      description: "Pectus tero ulterius aestivus talis tero ullam cruciamentum.",
      documentIds: [],
      fileIds: [],
      id: "b232d5e7-e0eb-495f-abec-1aed7b05f187",
      isAssembly: false,
      lifecycleState: "Design",
      masterIdentifier: "b5938ba2-6e70-4d66-ac19-49cfbdd8b2b7",
      metadata: [],
      name: "grumpy PCB",
      number: "PRT-009154",
      originalType: "Software",
      revision: "B",
      source: "MAKE",
      status: "IN_WORK",
      type: "SOFTWARE",
      unitOfMeasure: "EA",
      updatedAt: new Date("2021-04-09T18:26:52.875Z"),
      url: "https://inborn-independence.info",
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
import { plmCreatePlmPart } from "@unified-api/typescript-sdk/funcs/plmCreatePlmPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await plmCreatePlmPart(unifiedTo, {
    plmPart: {
      createdAt: new Date("2019-04-13T06:25:34.770Z"),
      description: "Pectus tero ulterius aestivus talis tero ullam cruciamentum.",
      documentIds: [],
      fileIds: [],
      id: "b232d5e7-e0eb-495f-abec-1aed7b05f187",
      isAssembly: false,
      lifecycleState: "Design",
      masterIdentifier: "b5938ba2-6e70-4d66-ac19-49cfbdd8b2b7",
      metadata: [],
      name: "grumpy PCB",
      number: "PRT-009154",
      originalType: "Software",
      revision: "B",
      source: "MAKE",
      status: "IN_WORK",
      type: "SOFTWARE",
      unitOfMeasure: "EA",
      updatedAt: new Date("2021-04-09T18:26:52.875Z"),
      url: "https://inborn-independence.info",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("plmCreatePlmPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePlmPartRequest](../../sdk/models/operations/createplmpartrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PlmPart](../../sdk/models/shared/plmpart.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPlmPart

Retrieves a single PlmPart by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPlmPart" method="get" path="/plm/{connection_id}/part/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.part.getPlmPart({
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
import { plmGetPlmPart } from "@unified-api/typescript-sdk/funcs/plmGetPlmPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await plmGetPlmPart(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("plmGetPlmPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPlmPartRequest](../../sdk/models/operations/getplmpartrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PlmPart](../../sdk/models/shared/plmpart.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPlmParts

Returns a list of PlmParts. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPlmParts" method="get" path="/plm/{connection_id}/part" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.part.listPlmParts({
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
import { plmListPlmParts } from "@unified-api/typescript-sdk/funcs/plmListPlmParts.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await plmListPlmParts(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("plmListPlmParts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPlmPartsRequest](../../sdk/models/operations/listplmpartsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PlmPart[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchPlmPart

Updates the PlmPart identified by `id`. Provide the unified PlmPart fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchPlmPart" method="patch" path="/plm/{connection_id}/part/{id}" example="plm_part" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.part.patchPlmPart({
    plmPart: {
      createdAt: new Date("2019-04-13T06:25:34.770Z"),
      description: "Pectus tero ulterius aestivus talis tero ullam cruciamentum.",
      documentIds: [],
      fileIds: [],
      id: "72f379c8-755d-454b-a583-4bf2dfcfd24b",
      isAssembly: false,
      lifecycleState: "Design",
      masterIdentifier: "feb8ca97-f374-4ae8-a67a-b88136ed2ec4",
      metadata: [],
      name: "grumpy PCB",
      number: "PRT-009154",
      originalType: "Software",
      revision: "B",
      source: "MAKE",
      status: "IN_WORK",
      type: "SOFTWARE",
      unitOfMeasure: "EA",
      updatedAt: new Date("2021-04-09T18:26:52.879Z"),
      url: "https://inborn-independence.info",
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
import { plmPatchPlmPart } from "@unified-api/typescript-sdk/funcs/plmPatchPlmPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await plmPatchPlmPart(unifiedTo, {
    plmPart: {
      createdAt: new Date("2019-04-13T06:25:34.770Z"),
      description: "Pectus tero ulterius aestivus talis tero ullam cruciamentum.",
      documentIds: [],
      fileIds: [],
      id: "72f379c8-755d-454b-a583-4bf2dfcfd24b",
      isAssembly: false,
      lifecycleState: "Design",
      masterIdentifier: "feb8ca97-f374-4ae8-a67a-b88136ed2ec4",
      metadata: [],
      name: "grumpy PCB",
      number: "PRT-009154",
      originalType: "Software",
      revision: "B",
      source: "MAKE",
      status: "IN_WORK",
      type: "SOFTWARE",
      unitOfMeasure: "EA",
      updatedAt: new Date("2021-04-09T18:26:52.879Z"),
      url: "https://inborn-independence.info",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("plmPatchPlmPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchPlmPartRequest](../../sdk/models/operations/patchplmpartrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PlmPart](../../sdk/models/shared/plmpart.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updatePlmPart

Updates the PlmPart identified by `id`. Provide the unified PlmPart fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updatePlmPart" method="put" path="/plm/{connection_id}/part/{id}" example="plm_part" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.part.updatePlmPart({
    plmPart: {
      createdAt: new Date("2019-04-13T06:25:34.770Z"),
      description: "Pectus tero ulterius aestivus talis tero ullam cruciamentum.",
      documentIds: [],
      fileIds: [],
      id: "72f379c8-755d-454b-a583-4bf2dfcfd24b",
      isAssembly: false,
      lifecycleState: "Design",
      masterIdentifier: "feb8ca97-f374-4ae8-a67a-b88136ed2ec4",
      metadata: [],
      name: "grumpy PCB",
      number: "PRT-009154",
      originalType: "Software",
      revision: "B",
      source: "MAKE",
      status: "IN_WORK",
      type: "SOFTWARE",
      unitOfMeasure: "EA",
      updatedAt: new Date("2021-04-09T18:26:52.879Z"),
      url: "https://inborn-independence.info",
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
import { plmUpdatePlmPart } from "@unified-api/typescript-sdk/funcs/plmUpdatePlmPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await plmUpdatePlmPart(unifiedTo, {
    plmPart: {
      createdAt: new Date("2019-04-13T06:25:34.770Z"),
      description: "Pectus tero ulterius aestivus talis tero ullam cruciamentum.",
      documentIds: [],
      fileIds: [],
      id: "72f379c8-755d-454b-a583-4bf2dfcfd24b",
      isAssembly: false,
      lifecycleState: "Design",
      masterIdentifier: "feb8ca97-f374-4ae8-a67a-b88136ed2ec4",
      metadata: [],
      name: "grumpy PCB",
      number: "PRT-009154",
      originalType: "Software",
      revision: "B",
      source: "MAKE",
      status: "IN_WORK",
      type: "SOFTWARE",
      unitOfMeasure: "EA",
      updatedAt: new Date("2021-04-09T18:26:52.879Z"),
      url: "https://inborn-independence.info",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("plmUpdatePlmPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePlmPartRequest](../../sdk/models/operations/updateplmpartrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PlmPart](../../sdk/models/shared/plmpart.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |