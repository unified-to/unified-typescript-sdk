# Part

## Overview

### Available Operations

* [createDmsPart](#createdmspart) - Create a part
* [createPlmPart](#createplmpart) - Create a part
* [getDmsPart](#getdmspart) - Retrieve a part
* [getPlmPart](#getplmpart) - Retrieve a part
* [listDmsParts](#listdmsparts) - List all parts
* [listPlmParts](#listplmparts) - List all parts
* [patchDmsPart](#patchdmspart) - Update a part
* [patchPlmPart](#patchplmpart) - Update a part
* [removePlmPart](#removeplmpart) - Remove a part
* [updateDmsPart](#updatedmspart) - Update a part
* [updatePlmPart](#updateplmpart) - Update a part

## createDmsPart

Creates a DmsPart. Provide the unified DmsPart fields in the request body; they are mapped to the provider's API. Returns the created DmsPart.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDmsPart" method="post" path="/dms/{connection_id}/part" example="dms_part" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.part.createDmsPart({
    dmsPart: {
      binLocations: [
        "S18-6",
      ],
      category: "Ignition",
      costAmount: 25.26,
      createdAt: new Date("2020-07-02T08:18:03.858Z"),
      currency: "USD",
      description: "Cabin filter",
      id: "14862038-0383-437f-9ecb-91ede4ac9c5d",
      lastSoldAt: new Date("2020-11-23T04:31:30.749Z"),
      listPriceAmount: 39.61,
      manufacturerCode: "TOY",
      maxStockQuantity: 21,
      metadata: [],
      minStockQuantity: 3,
      packQuantity: 1,
      partNumber: "73992-IM3FI",
      quantityAvailable: 13,
      quantityOnHand: 15,
      quantityOnOrder: 14,
      sourceCode: "30",
      tradePriceAmount: 29.05,
      updatedAt: new Date("2023-11-23T06:51:11.713Z"),
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
import { dmsCreateDmsPart } from "@unified-api/typescript-sdk/funcs/dmsCreateDmsPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsCreateDmsPart(unifiedTo, {
    dmsPart: {
      binLocations: [
        "S18-6",
      ],
      category: "Ignition",
      costAmount: 25.26,
      createdAt: new Date("2020-07-02T08:18:03.858Z"),
      currency: "USD",
      description: "Cabin filter",
      id: "14862038-0383-437f-9ecb-91ede4ac9c5d",
      lastSoldAt: new Date("2020-11-23T04:31:30.749Z"),
      listPriceAmount: 39.61,
      manufacturerCode: "TOY",
      maxStockQuantity: 21,
      metadata: [],
      minStockQuantity: 3,
      packQuantity: 1,
      partNumber: "73992-IM3FI",
      quantityAvailable: 13,
      quantityOnHand: 15,
      quantityOnOrder: 14,
      sourceCode: "30",
      tradePriceAmount: 29.05,
      updatedAt: new Date("2023-11-23T06:51:11.713Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsCreateDmsPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDmsPartRequest](../../sdk/models/operations/createdmspartrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsPart](../../sdk/models/shared/dmspart.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

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
      description: "Aestivus talis tero ullam cruciamentum voluptatibus cumque degusto cui.",
      documentIds: [],
      fileIds: [],
      id: "627bfffa-a2fb-437d-963a-da2a1e0e391f",
      isAssembly: false,
      lifecycleState: "Design",
      masterIdentifier: "57f12ff4-6323-4e30-a508-78a970a5434d",
      metadata: [],
      name: "speedy PCB",
      number: "PRT-009154",
      originalType: "Software",
      revision: "B",
      source: "MAKE",
      status: "IN_WORK",
      type: "SOFTWARE",
      unitOfMeasure: "EA",
      updatedAt: new Date("2021-04-15T20:25:21.689Z"),
      url: "https://digital-pop.com",
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
import { partCreatePlmPart } from "@unified-api/typescript-sdk/funcs/partCreatePlmPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await partCreatePlmPart(unifiedTo, {
    plmPart: {
      createdAt: new Date("2019-04-13T06:25:34.770Z"),
      description: "Aestivus talis tero ullam cruciamentum voluptatibus cumque degusto cui.",
      documentIds: [],
      fileIds: [],
      id: "627bfffa-a2fb-437d-963a-da2a1e0e391f",
      isAssembly: false,
      lifecycleState: "Design",
      masterIdentifier: "57f12ff4-6323-4e30-a508-78a970a5434d",
      metadata: [],
      name: "speedy PCB",
      number: "PRT-009154",
      originalType: "Software",
      revision: "B",
      source: "MAKE",
      status: "IN_WORK",
      type: "SOFTWARE",
      unitOfMeasure: "EA",
      updatedAt: new Date("2021-04-15T20:25:21.689Z"),
      url: "https://digital-pop.com",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("partCreatePlmPart failed:", res.error);
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

## getDmsPart

Retrieves a single DmsPart by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDmsPart" method="get" path="/dms/{connection_id}/part/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.part.getDmsPart({
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
import { dmsGetDmsPart } from "@unified-api/typescript-sdk/funcs/dmsGetDmsPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsGetDmsPart(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsGetDmsPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDmsPartRequest](../../sdk/models/operations/getdmspartrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsPart](../../sdk/models/shared/dmspart.md)\>**

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
import { partGetPlmPart } from "@unified-api/typescript-sdk/funcs/partGetPlmPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await partGetPlmPart(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("partGetPlmPart failed:", res.error);
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

## listDmsParts

Returns a list of DmsParts. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listDmsParts" method="get" path="/dms/{connection_id}/part" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.part.listDmsParts({
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
import { dmsListDmsParts } from "@unified-api/typescript-sdk/funcs/dmsListDmsParts.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsListDmsParts(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsListDmsParts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDmsPartsRequest](../../sdk/models/operations/listdmspartsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsPart[]](../../models/.md)\>**

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
import { partListPlmParts } from "@unified-api/typescript-sdk/funcs/partListPlmParts.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await partListPlmParts(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("partListPlmParts failed:", res.error);
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

## patchDmsPart

Updates the DmsPart identified by `id`. Provide the unified DmsPart fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchDmsPart" method="patch" path="/dms/{connection_id}/part/{id}" example="dms_part" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.part.patchDmsPart({
    dmsPart: {
      binLocations: [
        "S18-6",
      ],
      category: "Ignition",
      costAmount: 25.26,
      createdAt: new Date("2020-07-02T08:18:03.858Z"),
      currency: "USD",
      description: "Cabin filter",
      id: "4e019493-0539-46dd-8d07-aa1269dda984",
      lastSoldAt: new Date("2020-11-23T04:31:30.750Z"),
      listPriceAmount: 39.61,
      manufacturerCode: "TOY",
      maxStockQuantity: 21,
      metadata: [],
      minStockQuantity: 3,
      packQuantity: 1,
      partNumber: "73992-IM3FI",
      quantityAvailable: 13,
      quantityOnHand: 15,
      quantityOnOrder: 14,
      sourceCode: "30",
      tradePriceAmount: 29.05,
      updatedAt: new Date("2023-11-23T06:51:11.720Z"),
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
import { dmsPatchDmsPart } from "@unified-api/typescript-sdk/funcs/dmsPatchDmsPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsPatchDmsPart(unifiedTo, {
    dmsPart: {
      binLocations: [
        "S18-6",
      ],
      category: "Ignition",
      costAmount: 25.26,
      createdAt: new Date("2020-07-02T08:18:03.858Z"),
      currency: "USD",
      description: "Cabin filter",
      id: "4e019493-0539-46dd-8d07-aa1269dda984",
      lastSoldAt: new Date("2020-11-23T04:31:30.750Z"),
      listPriceAmount: 39.61,
      manufacturerCode: "TOY",
      maxStockQuantity: 21,
      metadata: [],
      minStockQuantity: 3,
      packQuantity: 1,
      partNumber: "73992-IM3FI",
      quantityAvailable: 13,
      quantityOnHand: 15,
      quantityOnOrder: 14,
      sourceCode: "30",
      tradePriceAmount: 29.05,
      updatedAt: new Date("2023-11-23T06:51:11.720Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsPatchDmsPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchDmsPartRequest](../../sdk/models/operations/patchdmspartrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsPart](../../sdk/models/shared/dmspart.md)\>**

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
      description: "Aestivus talis tero ullam cruciamentum voluptatibus cumque degusto cui.",
      documentIds: [],
      fileIds: [],
      id: "6b683cd5-2daa-4837-bd78-6e2b8c7af70b",
      isAssembly: false,
      lifecycleState: "Design",
      masterIdentifier: "d7230999-c36d-4a82-99d1-144131c899cc",
      metadata: [],
      name: "speedy PCB",
      number: "PRT-009154",
      originalType: "Software",
      revision: "B",
      source: "MAKE",
      status: "IN_WORK",
      type: "SOFTWARE",
      unitOfMeasure: "EA",
      updatedAt: new Date("2021-04-15T20:25:21.694Z"),
      url: "https://digital-pop.com",
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
import { partPatchPlmPart } from "@unified-api/typescript-sdk/funcs/partPatchPlmPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await partPatchPlmPart(unifiedTo, {
    plmPart: {
      createdAt: new Date("2019-04-13T06:25:34.770Z"),
      description: "Aestivus talis tero ullam cruciamentum voluptatibus cumque degusto cui.",
      documentIds: [],
      fileIds: [],
      id: "6b683cd5-2daa-4837-bd78-6e2b8c7af70b",
      isAssembly: false,
      lifecycleState: "Design",
      masterIdentifier: "d7230999-c36d-4a82-99d1-144131c899cc",
      metadata: [],
      name: "speedy PCB",
      number: "PRT-009154",
      originalType: "Software",
      revision: "B",
      source: "MAKE",
      status: "IN_WORK",
      type: "SOFTWARE",
      unitOfMeasure: "EA",
      updatedAt: new Date("2021-04-15T20:25:21.694Z"),
      url: "https://digital-pop.com",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("partPatchPlmPart failed:", res.error);
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

## removePlmPart

Deletes the PlmPart identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removePlmPart" method="delete" path="/plm/{connection_id}/part/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.part.removePlmPart({
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
import { partRemovePlmPart } from "@unified-api/typescript-sdk/funcs/partRemovePlmPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await partRemovePlmPart(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("partRemovePlmPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemovePlmPartRequest](../../sdk/models/operations/removeplmpartrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemovePlmPartResponse](../../sdk/models/operations/removeplmpartresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateDmsPart

Updates the DmsPart identified by `id`. Provide the unified DmsPart fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDmsPart" method="put" path="/dms/{connection_id}/part/{id}" example="dms_part" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.part.updateDmsPart({
    dmsPart: {
      binLocations: [
        "S18-6",
      ],
      category: "Ignition",
      costAmount: 25.26,
      createdAt: new Date("2020-07-02T08:18:03.858Z"),
      currency: "USD",
      description: "Cabin filter",
      id: "4e019493-0539-46dd-8d07-aa1269dda984",
      lastSoldAt: new Date("2020-11-23T04:31:30.750Z"),
      listPriceAmount: 39.61,
      manufacturerCode: "TOY",
      maxStockQuantity: 21,
      metadata: [],
      minStockQuantity: 3,
      packQuantity: 1,
      partNumber: "73992-IM3FI",
      quantityAvailable: 13,
      quantityOnHand: 15,
      quantityOnOrder: 14,
      sourceCode: "30",
      tradePriceAmount: 29.05,
      updatedAt: new Date("2023-11-23T06:51:11.720Z"),
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
import { dmsUpdateDmsPart } from "@unified-api/typescript-sdk/funcs/dmsUpdateDmsPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsUpdateDmsPart(unifiedTo, {
    dmsPart: {
      binLocations: [
        "S18-6",
      ],
      category: "Ignition",
      costAmount: 25.26,
      createdAt: new Date("2020-07-02T08:18:03.858Z"),
      currency: "USD",
      description: "Cabin filter",
      id: "4e019493-0539-46dd-8d07-aa1269dda984",
      lastSoldAt: new Date("2020-11-23T04:31:30.750Z"),
      listPriceAmount: 39.61,
      manufacturerCode: "TOY",
      maxStockQuantity: 21,
      metadata: [],
      minStockQuantity: 3,
      packQuantity: 1,
      partNumber: "73992-IM3FI",
      quantityAvailable: 13,
      quantityOnHand: 15,
      quantityOnOrder: 14,
      sourceCode: "30",
      tradePriceAmount: 29.05,
      updatedAt: new Date("2023-11-23T06:51:11.720Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsUpdateDmsPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDmsPartRequest](../../sdk/models/operations/updatedmspartrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsPart](../../sdk/models/shared/dmspart.md)\>**

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
      description: "Aestivus talis tero ullam cruciamentum voluptatibus cumque degusto cui.",
      documentIds: [],
      fileIds: [],
      id: "6b683cd5-2daa-4837-bd78-6e2b8c7af70b",
      isAssembly: false,
      lifecycleState: "Design",
      masterIdentifier: "d7230999-c36d-4a82-99d1-144131c899cc",
      metadata: [],
      name: "speedy PCB",
      number: "PRT-009154",
      originalType: "Software",
      revision: "B",
      source: "MAKE",
      status: "IN_WORK",
      type: "SOFTWARE",
      unitOfMeasure: "EA",
      updatedAt: new Date("2021-04-15T20:25:21.694Z"),
      url: "https://digital-pop.com",
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
import { partUpdatePlmPart } from "@unified-api/typescript-sdk/funcs/partUpdatePlmPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await partUpdatePlmPart(unifiedTo, {
    plmPart: {
      createdAt: new Date("2019-04-13T06:25:34.770Z"),
      description: "Aestivus talis tero ullam cruciamentum voluptatibus cumque degusto cui.",
      documentIds: [],
      fileIds: [],
      id: "6b683cd5-2daa-4837-bd78-6e2b8c7af70b",
      isAssembly: false,
      lifecycleState: "Design",
      masterIdentifier: "d7230999-c36d-4a82-99d1-144131c899cc",
      metadata: [],
      name: "speedy PCB",
      number: "PRT-009154",
      originalType: "Software",
      revision: "B",
      source: "MAKE",
      status: "IN_WORK",
      type: "SOFTWARE",
      unitOfMeasure: "EA",
      updatedAt: new Date("2021-04-15T20:25:21.694Z"),
      url: "https://digital-pop.com",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("partUpdatePlmPart failed:", res.error);
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