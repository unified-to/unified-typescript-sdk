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
          id: "ad5b1b77-4869-4426-b47c-c2036f6cfd7f",
          isIndexed: true,
          isUnique: true,
          name: "Cassin - Greenfelder",
          originalType: "tenus",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Alo admiratio vallum decet tamquam utilis callide adhuc verumtamen.",
          id: "72b9effe-8a9b-4fd3-a566-b073ed52b5ea",
          isNullable: true,
          isUnique: true,
          name: "Gerhold, Hermiston and Schmidt",
          originalType: "doloremque",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Celer charisma coniuratio usus audax articulus triumphus tametsi cura.",
          id: "8c16edec-ef61-4c47-8c1d-790242b06d2c",
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
          id: "77a83984-0cf7-44c5-909b-dffeb1a225fa",
          name: "Koch - Krajcik",
          originalType: "umbra",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Demitto ullam solium bellicus urbs concedo.",
          id: "9049996d-37f4-4942-8fdf-a65ca422ca1d",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Kling - Bosco",
          originalType: "venustas",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "98f55f18-6e9b-4110-ba9a-3e4434727f43",
      metadata: [],
      name: "Bauch LLC",
      relationships: [
        {
          field: "Nikolaus - Kub",
          name: "Brakus and Sons",
          tableId: "98f55f18-6e9b-4110-ba9a-3e4434727f43",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T19:11:08.242Z"),
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
          id: "ad5b1b77-4869-4426-b47c-c2036f6cfd7f",
          isIndexed: true,
          isUnique: true,
          name: "Cassin - Greenfelder",
          originalType: "tenus",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Alo admiratio vallum decet tamquam utilis callide adhuc verumtamen.",
          id: "72b9effe-8a9b-4fd3-a566-b073ed52b5ea",
          isNullable: true,
          isUnique: true,
          name: "Gerhold, Hermiston and Schmidt",
          originalType: "doloremque",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Celer charisma coniuratio usus audax articulus triumphus tametsi cura.",
          id: "8c16edec-ef61-4c47-8c1d-790242b06d2c",
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
          id: "77a83984-0cf7-44c5-909b-dffeb1a225fa",
          name: "Koch - Krajcik",
          originalType: "umbra",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Demitto ullam solium bellicus urbs concedo.",
          id: "9049996d-37f4-4942-8fdf-a65ca422ca1d",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Kling - Bosco",
          originalType: "venustas",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "98f55f18-6e9b-4110-ba9a-3e4434727f43",
      metadata: [],
      name: "Bauch LLC",
      relationships: [
        {
          field: "Nikolaus - Kub",
          name: "Brakus and Sons",
          tableId: "98f55f18-6e9b-4110-ba9a-3e4434727f43",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T19:11:08.242Z"),
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
          id: "65b581b3-1680-4c80-adbb-d76df35adacd",
          isIndexed: true,
          isUnique: true,
          name: "Cassin - Greenfelder",
          originalType: "tenus",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Alo admiratio vallum decet tamquam utilis callide adhuc verumtamen.",
          id: "46cb3813-e1b3-4d64-a9cb-7b284ea27031",
          isNullable: true,
          isUnique: true,
          name: "Gerhold, Hermiston and Schmidt",
          originalType: "doloremque",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Celer charisma coniuratio usus audax articulus triumphus tametsi cura.",
          id: "2ad0cd00-07e8-4fff-af6e-4858a318bc25",
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
          id: "f3950a5c-962e-4e0e-97c9-685227e779f1",
          name: "Koch - Krajcik",
          originalType: "umbra",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Demitto ullam solium bellicus urbs concedo.",
          id: "cfc3d5d0-4c16-4ca1-b129-011d663a9e03",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Kling - Bosco",
          originalType: "venustas",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "3b2e41f8-7fe5-4c04-bd78-c78c24bc3455",
      metadata: [],
      name: "Bauch LLC",
      relationships: [
        {
          field: "Nikolaus - Kub",
          name: "Brakus and Sons",
          tableId: "3b2e41f8-7fe5-4c04-bd78-c78c24bc3455",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T19:11:08.243Z"),
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
          id: "65b581b3-1680-4c80-adbb-d76df35adacd",
          isIndexed: true,
          isUnique: true,
          name: "Cassin - Greenfelder",
          originalType: "tenus",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Alo admiratio vallum decet tamquam utilis callide adhuc verumtamen.",
          id: "46cb3813-e1b3-4d64-a9cb-7b284ea27031",
          isNullable: true,
          isUnique: true,
          name: "Gerhold, Hermiston and Schmidt",
          originalType: "doloremque",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Celer charisma coniuratio usus audax articulus triumphus tametsi cura.",
          id: "2ad0cd00-07e8-4fff-af6e-4858a318bc25",
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
          id: "f3950a5c-962e-4e0e-97c9-685227e779f1",
          name: "Koch - Krajcik",
          originalType: "umbra",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Demitto ullam solium bellicus urbs concedo.",
          id: "cfc3d5d0-4c16-4ca1-b129-011d663a9e03",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Kling - Bosco",
          originalType: "venustas",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "3b2e41f8-7fe5-4c04-bd78-c78c24bc3455",
      metadata: [],
      name: "Bauch LLC",
      relationships: [
        {
          field: "Nikolaus - Kub",
          name: "Brakus and Sons",
          tableId: "3b2e41f8-7fe5-4c04-bd78-c78c24bc3455",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T19:11:08.243Z"),
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
          id: "65b581b3-1680-4c80-adbb-d76df35adacd",
          isIndexed: true,
          isUnique: true,
          name: "Cassin - Greenfelder",
          originalType: "tenus",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Alo admiratio vallum decet tamquam utilis callide adhuc verumtamen.",
          id: "46cb3813-e1b3-4d64-a9cb-7b284ea27031",
          isNullable: true,
          isUnique: true,
          name: "Gerhold, Hermiston and Schmidt",
          originalType: "doloremque",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Celer charisma coniuratio usus audax articulus triumphus tametsi cura.",
          id: "2ad0cd00-07e8-4fff-af6e-4858a318bc25",
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
          id: "f3950a5c-962e-4e0e-97c9-685227e779f1",
          name: "Koch - Krajcik",
          originalType: "umbra",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Demitto ullam solium bellicus urbs concedo.",
          id: "cfc3d5d0-4c16-4ca1-b129-011d663a9e03",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Kling - Bosco",
          originalType: "venustas",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "3b2e41f8-7fe5-4c04-bd78-c78c24bc3455",
      metadata: [],
      name: "Bauch LLC",
      relationships: [
        {
          field: "Nikolaus - Kub",
          name: "Brakus and Sons",
          tableId: "3b2e41f8-7fe5-4c04-bd78-c78c24bc3455",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T19:11:08.243Z"),
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
          id: "65b581b3-1680-4c80-adbb-d76df35adacd",
          isIndexed: true,
          isUnique: true,
          name: "Cassin - Greenfelder",
          originalType: "tenus",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Alo admiratio vallum decet tamquam utilis callide adhuc verumtamen.",
          id: "46cb3813-e1b3-4d64-a9cb-7b284ea27031",
          isNullable: true,
          isUnique: true,
          name: "Gerhold, Hermiston and Schmidt",
          originalType: "doloremque",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Celer charisma coniuratio usus audax articulus triumphus tametsi cura.",
          id: "2ad0cd00-07e8-4fff-af6e-4858a318bc25",
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
          id: "f3950a5c-962e-4e0e-97c9-685227e779f1",
          name: "Koch - Krajcik",
          originalType: "umbra",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Demitto ullam solium bellicus urbs concedo.",
          id: "cfc3d5d0-4c16-4ca1-b129-011d663a9e03",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Kling - Bosco",
          originalType: "venustas",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "3b2e41f8-7fe5-4c04-bd78-c78c24bc3455",
      metadata: [],
      name: "Bauch LLC",
      relationships: [
        {
          field: "Nikolaus - Kub",
          name: "Brakus and Sons",
          tableId: "3b2e41f8-7fe5-4c04-bd78-c78c24bc3455",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T19:11:08.243Z"),
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