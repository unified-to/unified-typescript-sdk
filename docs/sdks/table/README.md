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
          id: "86587831-1f20-46f7-9dd5-3d215930b21b",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "4a22d662-fcf4-4d53-84ea-0c9211d0ec7c",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "8a3e06fe-ef59-4bb7-a98d-8989de7d670c",
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
          id: "e4dd8aa9-7089-4270-a737-e62b5789c7e8",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "03e5b8d2-8456-48bb-b7d5-8b8d20194de3",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "fe4714cd-263f-43de-84a1-a464bd8294a6",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "fe4714cd-263f-43de-84a1-a464bd8294a6",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T09:20:39.787Z"),
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
          id: "86587831-1f20-46f7-9dd5-3d215930b21b",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "4a22d662-fcf4-4d53-84ea-0c9211d0ec7c",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "8a3e06fe-ef59-4bb7-a98d-8989de7d670c",
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
          id: "e4dd8aa9-7089-4270-a737-e62b5789c7e8",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "03e5b8d2-8456-48bb-b7d5-8b8d20194de3",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "fe4714cd-263f-43de-84a1-a464bd8294a6",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "fe4714cd-263f-43de-84a1-a464bd8294a6",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T09:20:39.787Z"),
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
          id: "3243ae8f-e5fa-41e7-9536-b9ace516ca7d",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "6f1dbd45-f933-4b43-b3d1-62a782288b65",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "11a55177-b8b1-43d3-9dd1-29531e0a1b94",
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
          id: "514f374a-26dc-4748-a0fc-9b1a0f8aebf8",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "7a46cdb5-b05d-4962-8a3e-ec06fde75fe0",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "a31bd99c-a885-41b7-97d5-331ed18fcb3c",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "a31bd99c-a885-41b7-97d5-331ed18fcb3c",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T09:20:39.788Z"),
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
          id: "3243ae8f-e5fa-41e7-9536-b9ace516ca7d",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "6f1dbd45-f933-4b43-b3d1-62a782288b65",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "11a55177-b8b1-43d3-9dd1-29531e0a1b94",
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
          id: "514f374a-26dc-4748-a0fc-9b1a0f8aebf8",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "7a46cdb5-b05d-4962-8a3e-ec06fde75fe0",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "a31bd99c-a885-41b7-97d5-331ed18fcb3c",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "a31bd99c-a885-41b7-97d5-331ed18fcb3c",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T09:20:39.788Z"),
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
          id: "3243ae8f-e5fa-41e7-9536-b9ace516ca7d",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "6f1dbd45-f933-4b43-b3d1-62a782288b65",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "11a55177-b8b1-43d3-9dd1-29531e0a1b94",
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
          id: "514f374a-26dc-4748-a0fc-9b1a0f8aebf8",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "7a46cdb5-b05d-4962-8a3e-ec06fde75fe0",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "a31bd99c-a885-41b7-97d5-331ed18fcb3c",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "a31bd99c-a885-41b7-97d5-331ed18fcb3c",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T09:20:39.788Z"),
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
          id: "3243ae8f-e5fa-41e7-9536-b9ace516ca7d",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "6f1dbd45-f933-4b43-b3d1-62a782288b65",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "11a55177-b8b1-43d3-9dd1-29531e0a1b94",
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
          id: "514f374a-26dc-4748-a0fc-9b1a0f8aebf8",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "7a46cdb5-b05d-4962-8a3e-ec06fde75fe0",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "a31bd99c-a885-41b7-97d5-331ed18fcb3c",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "a31bd99c-a885-41b7-97d5-331ed18fcb3c",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-14T09:20:39.788Z"),
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