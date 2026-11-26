# Table

## Overview

### Available Operations

* [createDatastoreTable](#createdatastoretable) - Create a table
* [getCommerceTable](#getcommercetable) - Retrieve a table
* [getDatastoreTable](#getdatastoretable) - Retrieve a table
* [listCommerceTables](#listcommercetables) - List all tables
* [listDatastoreTables](#listdatastoretables) - List all tables
* [patchDatastoreTable](#patchdatastoretable) - Update a table
* [removeDatastoreTable](#removedatastoretable) - Remove a table
* [updateDatastoreTable](#updatedatastoretable) - Update a table

## createDatastoreTable

Creates a DatastoreTable. Provide the unified DatastoreTable fields in the request body; they are mapped to the provider's API. Returns the created DatastoreTable.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDatastoreTable" method="post" path="/datastore/{connection_id}/table" example="datastore_table" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.table.createDatastoreTable({
    datastoreTable: {
      createdAt: new Date("2022-05-22T04:49:00.762Z"),
      description: "Carpo vomito magni tantum tubineus corona deputo.",
      fields: [
        {
          description: "Basium accendo conservo curto thesis amet supellex.",
          id: "abfcd57c-25d2-4350-b54b-1bbbaed30516",
          isIndexed: true,
          isUnique: true,
          name: "Cassin - Greenfelder",
          originalType: "tenus",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Alo admiratio vallum decet tamquam utilis callide adhuc verumtamen.",
          id: "933dc648-2928-489e-bc5a-e879b3720155",
          isNullable: true,
          isUnique: true,
          name: "Gerhold, Hermiston and Schmidt",
          originalType: "doloremque",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Celer charisma coniuratio usus audax articulus triumphus tametsi cura.",
          id: "1179c3d8-13c4-448d-9322-645094a246c0",
          isIndexed: true,
          isNullable: true,
          isUnique: true,
          maxLength: 62,
          name: "McDermott LLC",
          originalType: "tenetur",
          precision: 47,
          type: "NUMBER",
        },
        {
          description: "Adficio voluptatibus ciminatio.",
          id: "b60d5c54-780e-4c34-b46f-da5da6fe968c",
          name: "Koch - Krajcik",
          originalType: "umbra",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Demitto ullam solium bellicus urbs concedo.",
          id: "2f42c714-8906-4492-ab5f-fff892b84917",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Kling - Bosco",
          originalType: "venustas",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "20085605-5e52-4427-980d-1a6262171ebf",
      metadata: [],
      name: "Bauch LLC",
      relationships: [
        {
          field: "Nikolaus - Kub",
          name: "Brakus and Sons",
          tableId: "20085605-5e52-4427-980d-1a6262171ebf",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T16:43:38.660Z"),
      webUrl: "https://torn-bench.biz/",
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
import { tableCreateDatastoreTable } from "@unified-api/typescript-sdk/funcs/tableCreateDatastoreTable.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await tableCreateDatastoreTable(unifiedTo, {
    datastoreTable: {
      createdAt: new Date("2022-05-22T04:49:00.762Z"),
      description: "Carpo vomito magni tantum tubineus corona deputo.",
      fields: [
        {
          description: "Basium accendo conservo curto thesis amet supellex.",
          id: "abfcd57c-25d2-4350-b54b-1bbbaed30516",
          isIndexed: true,
          isUnique: true,
          name: "Cassin - Greenfelder",
          originalType: "tenus",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Alo admiratio vallum decet tamquam utilis callide adhuc verumtamen.",
          id: "933dc648-2928-489e-bc5a-e879b3720155",
          isNullable: true,
          isUnique: true,
          name: "Gerhold, Hermiston and Schmidt",
          originalType: "doloremque",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Celer charisma coniuratio usus audax articulus triumphus tametsi cura.",
          id: "1179c3d8-13c4-448d-9322-645094a246c0",
          isIndexed: true,
          isNullable: true,
          isUnique: true,
          maxLength: 62,
          name: "McDermott LLC",
          originalType: "tenetur",
          precision: 47,
          type: "NUMBER",
        },
        {
          description: "Adficio voluptatibus ciminatio.",
          id: "b60d5c54-780e-4c34-b46f-da5da6fe968c",
          name: "Koch - Krajcik",
          originalType: "umbra",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Demitto ullam solium bellicus urbs concedo.",
          id: "2f42c714-8906-4492-ab5f-fff892b84917",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Kling - Bosco",
          originalType: "venustas",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "20085605-5e52-4427-980d-1a6262171ebf",
      metadata: [],
      name: "Bauch LLC",
      relationships: [
        {
          field: "Nikolaus - Kub",
          name: "Brakus and Sons",
          tableId: "20085605-5e52-4427-980d-1a6262171ebf",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T16:43:38.660Z"),
      webUrl: "https://torn-bench.biz/",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tableCreateDatastoreTable failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDatastoreTableRequest](../../sdk/models/operations/createdatastoretablerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreTable](../../sdk/models/shared/datastoretable.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCommerceTable

Retrieves a single CommerceTable by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCommerceTable" method="get" path="/commerce/{connection_id}/table/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.table.getCommerceTable({
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
import { commerceGetCommerceTable } from "@unified-api/typescript-sdk/funcs/commerceGetCommerceTable.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceGetCommerceTable(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceGetCommerceTable failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommerceTableRequest](../../sdk/models/operations/getcommercetablerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceTable](../../sdk/models/shared/commercetable.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getDatastoreTable

Retrieves a single DatastoreTable by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDatastoreTable" method="get" path="/datastore/{connection_id}/table/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.table.getDatastoreTable({
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
import { tableGetDatastoreTable } from "@unified-api/typescript-sdk/funcs/tableGetDatastoreTable.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await tableGetDatastoreTable(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tableGetDatastoreTable failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDatastoreTableRequest](../../sdk/models/operations/getdatastoretablerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreTable](../../sdk/models/shared/datastoretable.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCommerceTables

Returns a list of CommerceTables. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCommerceTables" method="get" path="/commerce/{connection_id}/table" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.table.listCommerceTables({
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
import { commerceListCommerceTables } from "@unified-api/typescript-sdk/funcs/commerceListCommerceTables.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceListCommerceTables(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceListCommerceTables failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommerceTablesRequest](../../sdk/models/operations/listcommercetablesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceTable[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listDatastoreTables

Returns a list of DatastoreTables. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listDatastoreTables" method="get" path="/datastore/{connection_id}/table" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.table.listDatastoreTables({
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
import { tableListDatastoreTables } from "@unified-api/typescript-sdk/funcs/tableListDatastoreTables.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await tableListDatastoreTables(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tableListDatastoreTables failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDatastoreTablesRequest](../../sdk/models/operations/listdatastoretablesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreTable[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchDatastoreTable

Updates the DatastoreTable identified by `id`. Provide the unified DatastoreTable fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchDatastoreTable" method="patch" path="/datastore/{connection_id}/table/{id}" example="datastore_table" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.table.patchDatastoreTable({
    datastoreTable: {
      createdAt: new Date("2022-05-22T04:49:00.762Z"),
      description: "Carpo vomito magni tantum tubineus corona deputo.",
      fields: [
        {
          description: "Basium accendo conservo curto thesis amet supellex.",
          id: "7f459bed-050e-4c62-87d9-8acfa7964e6d",
          isIndexed: true,
          isUnique: true,
          name: "Cassin - Greenfelder",
          originalType: "tenus",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Alo admiratio vallum decet tamquam utilis callide adhuc verumtamen.",
          id: "47b98daf-dd31-4243-9154-7e21397b843c",
          isNullable: true,
          isUnique: true,
          name: "Gerhold, Hermiston and Schmidt",
          originalType: "doloremque",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Celer charisma coniuratio usus audax articulus triumphus tametsi cura.",
          id: "9a821996-71f0-4f1a-8dd6-c75d3f13f463",
          isIndexed: true,
          isNullable: true,
          isUnique: true,
          maxLength: 62,
          name: "McDermott LLC",
          originalType: "tenetur",
          precision: 47,
          type: "NUMBER",
        },
        {
          description: "Adficio voluptatibus ciminatio.",
          id: "49fab2dc-7c08-41d0-b3ad-a95c61fa79dd",
          name: "Koch - Krajcik",
          originalType: "umbra",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Demitto ullam solium bellicus urbs concedo.",
          id: "471c275e-900e-43b0-9cde-4369988a2b01",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Kling - Bosco",
          originalType: "venustas",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "4677c876-9d32-4c68-989c-07cb327a1f87",
      metadata: [],
      name: "Bauch LLC",
      relationships: [
        {
          field: "Nikolaus - Kub",
          name: "Brakus and Sons",
          tableId: "4677c876-9d32-4c68-989c-07cb327a1f87",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T16:43:38.661Z"),
      webUrl: "https://torn-bench.biz/",
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
import { tablePatchDatastoreTable } from "@unified-api/typescript-sdk/funcs/tablePatchDatastoreTable.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await tablePatchDatastoreTable(unifiedTo, {
    datastoreTable: {
      createdAt: new Date("2022-05-22T04:49:00.762Z"),
      description: "Carpo vomito magni tantum tubineus corona deputo.",
      fields: [
        {
          description: "Basium accendo conservo curto thesis amet supellex.",
          id: "7f459bed-050e-4c62-87d9-8acfa7964e6d",
          isIndexed: true,
          isUnique: true,
          name: "Cassin - Greenfelder",
          originalType: "tenus",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Alo admiratio vallum decet tamquam utilis callide adhuc verumtamen.",
          id: "47b98daf-dd31-4243-9154-7e21397b843c",
          isNullable: true,
          isUnique: true,
          name: "Gerhold, Hermiston and Schmidt",
          originalType: "doloremque",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Celer charisma coniuratio usus audax articulus triumphus tametsi cura.",
          id: "9a821996-71f0-4f1a-8dd6-c75d3f13f463",
          isIndexed: true,
          isNullable: true,
          isUnique: true,
          maxLength: 62,
          name: "McDermott LLC",
          originalType: "tenetur",
          precision: 47,
          type: "NUMBER",
        },
        {
          description: "Adficio voluptatibus ciminatio.",
          id: "49fab2dc-7c08-41d0-b3ad-a95c61fa79dd",
          name: "Koch - Krajcik",
          originalType: "umbra",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Demitto ullam solium bellicus urbs concedo.",
          id: "471c275e-900e-43b0-9cde-4369988a2b01",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Kling - Bosco",
          originalType: "venustas",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "4677c876-9d32-4c68-989c-07cb327a1f87",
      metadata: [],
      name: "Bauch LLC",
      relationships: [
        {
          field: "Nikolaus - Kub",
          name: "Brakus and Sons",
          tableId: "4677c876-9d32-4c68-989c-07cb327a1f87",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T16:43:38.661Z"),
      webUrl: "https://torn-bench.biz/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tablePatchDatastoreTable failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchDatastoreTableRequest](../../sdk/models/operations/patchdatastoretablerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreTable](../../sdk/models/shared/datastoretable.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeDatastoreTable

Deletes the DatastoreTable identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeDatastoreTable" method="delete" path="/datastore/{connection_id}/table/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.table.removeDatastoreTable({
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
import { tableRemoveDatastoreTable } from "@unified-api/typescript-sdk/funcs/tableRemoveDatastoreTable.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await tableRemoveDatastoreTable(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tableRemoveDatastoreTable failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveDatastoreTableRequest](../../sdk/models/operations/removedatastoretablerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveDatastoreTableResponse](../../sdk/models/operations/removedatastoretableresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateDatastoreTable

Updates the DatastoreTable identified by `id`. Provide the unified DatastoreTable fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDatastoreTable" method="put" path="/datastore/{connection_id}/table/{id}" example="datastore_table" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.table.updateDatastoreTable({
    datastoreTable: {
      createdAt: new Date("2022-05-22T04:49:00.762Z"),
      description: "Carpo vomito magni tantum tubineus corona deputo.",
      fields: [
        {
          description: "Basium accendo conservo curto thesis amet supellex.",
          id: "7f459bed-050e-4c62-87d9-8acfa7964e6d",
          isIndexed: true,
          isUnique: true,
          name: "Cassin - Greenfelder",
          originalType: "tenus",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Alo admiratio vallum decet tamquam utilis callide adhuc verumtamen.",
          id: "47b98daf-dd31-4243-9154-7e21397b843c",
          isNullable: true,
          isUnique: true,
          name: "Gerhold, Hermiston and Schmidt",
          originalType: "doloremque",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Celer charisma coniuratio usus audax articulus triumphus tametsi cura.",
          id: "9a821996-71f0-4f1a-8dd6-c75d3f13f463",
          isIndexed: true,
          isNullable: true,
          isUnique: true,
          maxLength: 62,
          name: "McDermott LLC",
          originalType: "tenetur",
          precision: 47,
          type: "NUMBER",
        },
        {
          description: "Adficio voluptatibus ciminatio.",
          id: "49fab2dc-7c08-41d0-b3ad-a95c61fa79dd",
          name: "Koch - Krajcik",
          originalType: "umbra",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Demitto ullam solium bellicus urbs concedo.",
          id: "471c275e-900e-43b0-9cde-4369988a2b01",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Kling - Bosco",
          originalType: "venustas",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "4677c876-9d32-4c68-989c-07cb327a1f87",
      metadata: [],
      name: "Bauch LLC",
      relationships: [
        {
          field: "Nikolaus - Kub",
          name: "Brakus and Sons",
          tableId: "4677c876-9d32-4c68-989c-07cb327a1f87",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T16:43:38.661Z"),
      webUrl: "https://torn-bench.biz/",
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
import { tableUpdateDatastoreTable } from "@unified-api/typescript-sdk/funcs/tableUpdateDatastoreTable.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await tableUpdateDatastoreTable(unifiedTo, {
    datastoreTable: {
      createdAt: new Date("2022-05-22T04:49:00.762Z"),
      description: "Carpo vomito magni tantum tubineus corona deputo.",
      fields: [
        {
          description: "Basium accendo conservo curto thesis amet supellex.",
          id: "7f459bed-050e-4c62-87d9-8acfa7964e6d",
          isIndexed: true,
          isUnique: true,
          name: "Cassin - Greenfelder",
          originalType: "tenus",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Alo admiratio vallum decet tamquam utilis callide adhuc verumtamen.",
          id: "47b98daf-dd31-4243-9154-7e21397b843c",
          isNullable: true,
          isUnique: true,
          name: "Gerhold, Hermiston and Schmidt",
          originalType: "doloremque",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Celer charisma coniuratio usus audax articulus triumphus tametsi cura.",
          id: "9a821996-71f0-4f1a-8dd6-c75d3f13f463",
          isIndexed: true,
          isNullable: true,
          isUnique: true,
          maxLength: 62,
          name: "McDermott LLC",
          originalType: "tenetur",
          precision: 47,
          type: "NUMBER",
        },
        {
          description: "Adficio voluptatibus ciminatio.",
          id: "49fab2dc-7c08-41d0-b3ad-a95c61fa79dd",
          name: "Koch - Krajcik",
          originalType: "umbra",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Demitto ullam solium bellicus urbs concedo.",
          id: "471c275e-900e-43b0-9cde-4369988a2b01",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Kling - Bosco",
          originalType: "venustas",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "4677c876-9d32-4c68-989c-07cb327a1f87",
      metadata: [],
      name: "Bauch LLC",
      relationships: [
        {
          field: "Nikolaus - Kub",
          name: "Brakus and Sons",
          tableId: "4677c876-9d32-4c68-989c-07cb327a1f87",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T16:43:38.661Z"),
      webUrl: "https://torn-bench.biz/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tableUpdateDatastoreTable failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDatastoreTableRequest](../../sdk/models/operations/updatedatastoretablerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreTable](../../sdk/models/shared/datastoretable.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |