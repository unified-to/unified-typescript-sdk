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
      description: "Quasi adhuc paulatim ducimus carpo vomito magni tantum tubineus corona.",
      fields: [
        {
          description: "Antea soluta itaque clamo despecto basium accendo.",
          id: "a752deab-9f4a-4304-8fc7-9905d5a0e86c",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "960cecde-ae34-48ae-a052-49cb57460ad8",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "dd8c9410-798e-414f-b360-783a0cefda34",
          isIndexed: true,
          isNullable: true,
          isUnique: true,
          maxLength: 62,
          name: "Toy - Kiehn",
          originalType: "sursum",
          precision: 47,
          type: "NUMBER",
        },
        {
          description: "Audax articulus triumphus tametsi cura tenetur colligo arcesso bestia.",
          id: "e125ad0a-15dd-47ff-a11f-8c411c303bc3",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "277f38de-2ea7-4cb0-85c1-cbcfd06222a8",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "4e59e472-ea01-4ec0-b309-0b5f08b49771",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "4e59e472-ea01-4ec0-b309-0b5f08b49771",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T22:08:31.059Z"),
      webUrl: "https://nervous-deck.com",
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
      description: "Quasi adhuc paulatim ducimus carpo vomito magni tantum tubineus corona.",
      fields: [
        {
          description: "Antea soluta itaque clamo despecto basium accendo.",
          id: "a752deab-9f4a-4304-8fc7-9905d5a0e86c",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "960cecde-ae34-48ae-a052-49cb57460ad8",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "dd8c9410-798e-414f-b360-783a0cefda34",
          isIndexed: true,
          isNullable: true,
          isUnique: true,
          maxLength: 62,
          name: "Toy - Kiehn",
          originalType: "sursum",
          precision: 47,
          type: "NUMBER",
        },
        {
          description: "Audax articulus triumphus tametsi cura tenetur colligo arcesso bestia.",
          id: "e125ad0a-15dd-47ff-a11f-8c411c303bc3",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "277f38de-2ea7-4cb0-85c1-cbcfd06222a8",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "4e59e472-ea01-4ec0-b309-0b5f08b49771",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "4e59e472-ea01-4ec0-b309-0b5f08b49771",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T22:08:31.059Z"),
      webUrl: "https://nervous-deck.com",
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
      description: "Quasi adhuc paulatim ducimus carpo vomito magni tantum tubineus corona.",
      fields: [
        {
          description: "Antea soluta itaque clamo despecto basium accendo.",
          id: "5aed8fa1-ae3d-4ceb-8ad7-02a9f0d41a16",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "a902386c-c469-4923-b301-9e3bc090785f",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "86147934-b9e2-49e5-99b2-e931871e9351",
          isIndexed: true,
          isNullable: true,
          isUnique: true,
          maxLength: 62,
          name: "Toy - Kiehn",
          originalType: "sursum",
          precision: 47,
          type: "NUMBER",
        },
        {
          description: "Audax articulus triumphus tametsi cura tenetur colligo arcesso bestia.",
          id: "f713407c-8181-436f-8339-000235b1ed07",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "53f0cd46-1b04-42c4-9619-278a7819b5b1",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "c8ba605f-3b6f-409d-84fd-011067089376",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "c8ba605f-3b6f-409d-84fd-011067089376",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T22:08:31.061Z"),
      webUrl: "https://nervous-deck.com",
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
      description: "Quasi adhuc paulatim ducimus carpo vomito magni tantum tubineus corona.",
      fields: [
        {
          description: "Antea soluta itaque clamo despecto basium accendo.",
          id: "5aed8fa1-ae3d-4ceb-8ad7-02a9f0d41a16",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "a902386c-c469-4923-b301-9e3bc090785f",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "86147934-b9e2-49e5-99b2-e931871e9351",
          isIndexed: true,
          isNullable: true,
          isUnique: true,
          maxLength: 62,
          name: "Toy - Kiehn",
          originalType: "sursum",
          precision: 47,
          type: "NUMBER",
        },
        {
          description: "Audax articulus triumphus tametsi cura tenetur colligo arcesso bestia.",
          id: "f713407c-8181-436f-8339-000235b1ed07",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "53f0cd46-1b04-42c4-9619-278a7819b5b1",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "c8ba605f-3b6f-409d-84fd-011067089376",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "c8ba605f-3b6f-409d-84fd-011067089376",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T22:08:31.061Z"),
      webUrl: "https://nervous-deck.com",
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
      description: "Quasi adhuc paulatim ducimus carpo vomito magni tantum tubineus corona.",
      fields: [
        {
          description: "Antea soluta itaque clamo despecto basium accendo.",
          id: "5aed8fa1-ae3d-4ceb-8ad7-02a9f0d41a16",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "a902386c-c469-4923-b301-9e3bc090785f",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "86147934-b9e2-49e5-99b2-e931871e9351",
          isIndexed: true,
          isNullable: true,
          isUnique: true,
          maxLength: 62,
          name: "Toy - Kiehn",
          originalType: "sursum",
          precision: 47,
          type: "NUMBER",
        },
        {
          description: "Audax articulus triumphus tametsi cura tenetur colligo arcesso bestia.",
          id: "f713407c-8181-436f-8339-000235b1ed07",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "53f0cd46-1b04-42c4-9619-278a7819b5b1",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "c8ba605f-3b6f-409d-84fd-011067089376",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "c8ba605f-3b6f-409d-84fd-011067089376",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T22:08:31.061Z"),
      webUrl: "https://nervous-deck.com",
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
      description: "Quasi adhuc paulatim ducimus carpo vomito magni tantum tubineus corona.",
      fields: [
        {
          description: "Antea soluta itaque clamo despecto basium accendo.",
          id: "5aed8fa1-ae3d-4ceb-8ad7-02a9f0d41a16",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "a902386c-c469-4923-b301-9e3bc090785f",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "86147934-b9e2-49e5-99b2-e931871e9351",
          isIndexed: true,
          isNullable: true,
          isUnique: true,
          maxLength: 62,
          name: "Toy - Kiehn",
          originalType: "sursum",
          precision: 47,
          type: "NUMBER",
        },
        {
          description: "Audax articulus triumphus tametsi cura tenetur colligo arcesso bestia.",
          id: "f713407c-8181-436f-8339-000235b1ed07",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "53f0cd46-1b04-42c4-9619-278a7819b5b1",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "c8ba605f-3b6f-409d-84fd-011067089376",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "c8ba605f-3b6f-409d-84fd-011067089376",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T22:08:31.061Z"),
      webUrl: "https://nervous-deck.com",
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