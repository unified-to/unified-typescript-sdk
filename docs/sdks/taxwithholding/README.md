# Taxwithholding

## Overview

### Available Operations

* [createHrisTaxwithholding](#createhristaxwithholding) - Create a taxwithholding
* [getHrisTaxwithholding](#gethristaxwithholding) - Retrieve a taxwithholding
* [listHrisTaxwithholdings](#listhristaxwithholdings) - List all taxwithholdings
* [patchHrisTaxwithholding](#patchhristaxwithholding) - Update a taxwithholding
* [removeHrisTaxwithholding](#removehristaxwithholding) - Remove a taxwithholding
* [updateHrisTaxwithholding](#updatehristaxwithholding) - Update a taxwithholding

## createHrisTaxwithholding

Creates a HrisTaxwithholding. Provide the unified HrisTaxwithholding fields in the request body; they are mapped to the provider's API. Returns the created HrisTaxwithholding.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisTaxwithholding" method="post" path="/hris/{connection_id}/taxwithholding" example="hris_taxwithholding" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.taxwithholding.createHrisTaxwithholding({
    hrisTaxwithholding: {
      allowances: 1,
      country: "US",
      createdAt: new Date("2022-08-14T05:49:35.141Z"),
      effectiveAt: new Date("2022-08-14T05:49:35.141Z"),
      extraWithholdingAmount: 10,
      filingStatus: "QUALIFYING_SURVIVOR",
      form: "STATE_FORM",
      id: "cad5227c-86e7-46fb-a81d-a695e8a538b4",
      isExempt: false,
      isResident: true,
      jurisdiction: "OH",
      jurisdictionType: "STATE",
      metadata: [],
      overrideAmount: 19,
      overrideType: "FIXED_AMOUNT",
      updatedAt: new Date("2026-09-29T03:05:11.351Z"),
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
import { hrisCreateHrisTaxwithholding } from "@unified-api/typescript-sdk/funcs/hrisCreateHrisTaxwithholding.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisCreateHrisTaxwithholding(unifiedTo, {
    hrisTaxwithholding: {
      allowances: 1,
      country: "US",
      createdAt: new Date("2022-08-14T05:49:35.141Z"),
      effectiveAt: new Date("2022-08-14T05:49:35.141Z"),
      extraWithholdingAmount: 10,
      filingStatus: "QUALIFYING_SURVIVOR",
      form: "STATE_FORM",
      id: "cad5227c-86e7-46fb-a81d-a695e8a538b4",
      isExempt: false,
      isResident: true,
      jurisdiction: "OH",
      jurisdictionType: "STATE",
      metadata: [],
      overrideAmount: 19,
      overrideType: "FIXED_AMOUNT",
      updatedAt: new Date("2026-09-29T03:05:11.351Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateHrisTaxwithholding failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisTaxwithholdingRequest](../../sdk/models/operations/createhristaxwithholdingrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTaxwithholding](../../sdk/models/shared/hristaxwithholding.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHrisTaxwithholding

Retrieves a single HrisTaxwithholding by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisTaxwithholding" method="get" path="/hris/{connection_id}/taxwithholding/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.taxwithholding.getHrisTaxwithholding({
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
import { hrisGetHrisTaxwithholding } from "@unified-api/typescript-sdk/funcs/hrisGetHrisTaxwithholding.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisGetHrisTaxwithholding(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetHrisTaxwithholding failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisTaxwithholdingRequest](../../sdk/models/operations/gethristaxwithholdingrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTaxwithholding](../../sdk/models/shared/hristaxwithholding.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHrisTaxwithholdings

Returns a list of HrisTaxwithholdings. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisTaxwithholdings" method="get" path="/hris/{connection_id}/taxwithholding" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.taxwithholding.listHrisTaxwithholdings({
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
import { hrisListHrisTaxwithholdings } from "@unified-api/typescript-sdk/funcs/hrisListHrisTaxwithholdings.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisListHrisTaxwithholdings(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisListHrisTaxwithholdings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisTaxwithholdingsRequest](../../sdk/models/operations/listhristaxwithholdingsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTaxwithholding[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHrisTaxwithholding

Updates the HrisTaxwithholding identified by `id`. Provide the unified HrisTaxwithholding fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHrisTaxwithholding" method="patch" path="/hris/{connection_id}/taxwithholding/{id}" example="hris_taxwithholding" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.taxwithholding.patchHrisTaxwithholding({
    hrisTaxwithholding: {
      allowances: 1,
      country: "US",
      createdAt: new Date("2022-08-14T05:49:35.141Z"),
      effectiveAt: new Date("2022-08-14T05:49:35.141Z"),
      extraWithholdingAmount: 10,
      filingStatus: "QUALIFYING_SURVIVOR",
      form: "STATE_FORM",
      id: "dc2b9f6e-3102-491e-84ed-2e2d17a365f5",
      isExempt: false,
      isResident: true,
      jurisdiction: "OH",
      jurisdictionType: "STATE",
      metadata: [],
      overrideAmount: 19,
      overrideType: "FIXED_AMOUNT",
      updatedAt: new Date("2026-09-29T03:05:11.369Z"),
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
import { hrisPatchHrisTaxwithholding } from "@unified-api/typescript-sdk/funcs/hrisPatchHrisTaxwithholding.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisPatchHrisTaxwithholding(unifiedTo, {
    hrisTaxwithholding: {
      allowances: 1,
      country: "US",
      createdAt: new Date("2022-08-14T05:49:35.141Z"),
      effectiveAt: new Date("2022-08-14T05:49:35.141Z"),
      extraWithholdingAmount: 10,
      filingStatus: "QUALIFYING_SURVIVOR",
      form: "STATE_FORM",
      id: "dc2b9f6e-3102-491e-84ed-2e2d17a365f5",
      isExempt: false,
      isResident: true,
      jurisdiction: "OH",
      jurisdictionType: "STATE",
      metadata: [],
      overrideAmount: 19,
      overrideType: "FIXED_AMOUNT",
      updatedAt: new Date("2026-09-29T03:05:11.369Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisPatchHrisTaxwithholding failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHrisTaxwithholdingRequest](../../sdk/models/operations/patchhristaxwithholdingrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTaxwithholding](../../sdk/models/shared/hristaxwithholding.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeHrisTaxwithholding

Deletes the HrisTaxwithholding identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHrisTaxwithholding" method="delete" path="/hris/{connection_id}/taxwithholding/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.taxwithholding.removeHrisTaxwithholding({
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
import { hrisRemoveHrisTaxwithholding } from "@unified-api/typescript-sdk/funcs/hrisRemoveHrisTaxwithholding.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisRemoveHrisTaxwithholding(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisRemoveHrisTaxwithholding failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHrisTaxwithholdingRequest](../../sdk/models/operations/removehristaxwithholdingrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHrisTaxwithholdingResponse](../../sdk/models/operations/removehristaxwithholdingresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHrisTaxwithholding

Updates the HrisTaxwithholding identified by `id`. Provide the unified HrisTaxwithholding fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHrisTaxwithholding" method="put" path="/hris/{connection_id}/taxwithholding/{id}" example="hris_taxwithholding" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.taxwithholding.updateHrisTaxwithholding({
    hrisTaxwithholding: {
      allowances: 1,
      country: "US",
      createdAt: new Date("2022-08-14T05:49:35.141Z"),
      effectiveAt: new Date("2022-08-14T05:49:35.141Z"),
      extraWithholdingAmount: 10,
      filingStatus: "QUALIFYING_SURVIVOR",
      form: "STATE_FORM",
      id: "dc2b9f6e-3102-491e-84ed-2e2d17a365f5",
      isExempt: false,
      isResident: true,
      jurisdiction: "OH",
      jurisdictionType: "STATE",
      metadata: [],
      overrideAmount: 19,
      overrideType: "FIXED_AMOUNT",
      updatedAt: new Date("2026-09-29T03:05:11.369Z"),
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
import { hrisUpdateHrisTaxwithholding } from "@unified-api/typescript-sdk/funcs/hrisUpdateHrisTaxwithholding.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisUpdateHrisTaxwithholding(unifiedTo, {
    hrisTaxwithholding: {
      allowances: 1,
      country: "US",
      createdAt: new Date("2022-08-14T05:49:35.141Z"),
      effectiveAt: new Date("2022-08-14T05:49:35.141Z"),
      extraWithholdingAmount: 10,
      filingStatus: "QUALIFYING_SURVIVOR",
      form: "STATE_FORM",
      id: "dc2b9f6e-3102-491e-84ed-2e2d17a365f5",
      isExempt: false,
      isResident: true,
      jurisdiction: "OH",
      jurisdictionType: "STATE",
      metadata: [],
      overrideAmount: 19,
      overrideType: "FIXED_AMOUNT",
      updatedAt: new Date("2026-09-29T03:05:11.369Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisUpdateHrisTaxwithholding failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHrisTaxwithholdingRequest](../../sdk/models/operations/updatehristaxwithholdingrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTaxwithholding](../../sdk/models/shared/hristaxwithholding.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |