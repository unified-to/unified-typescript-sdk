# Table

## Overview

### Available Operations

* [createDatastoreTable](#createdatastoretable) - Create a table
* [getDatastoreTable](#getdatastoretable) - Retrieve a table
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
          id: "db5d817f-f3d5-4def-af45-85f34a96c2c1",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "681b2138-85c6-4d31-8e28-d8364adc35a5",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "2b48fff1-2a38-4faa-bcf4-0774e9c61f72",
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
          id: "bcc98187-2ffe-4378-a3b5-2227c297f0b3",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "bfecbd6b-6707-4383-b211-b86518bd0b75",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "8ddb8bb4-ef6f-4c2e-b40f-b5a60f6bf86a",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "8ddb8bb4-ef6f-4c2e-b40f-b5a60f6bf86a",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T04:59:21.425Z"),
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
import { datastoreCreateDatastoreTable } from "@unified-api/typescript-sdk/funcs/datastoreCreateDatastoreTable.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreCreateDatastoreTable(unifiedTo, {
    datastoreTable: {
      createdAt: new Date("2022-05-22T04:49:00.762Z"),
      description: "Quasi adhuc paulatim ducimus carpo vomito magni tantum tubineus corona.",
      fields: [
        {
          description: "Antea soluta itaque clamo despecto basium accendo.",
          id: "db5d817f-f3d5-4def-af45-85f34a96c2c1",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "681b2138-85c6-4d31-8e28-d8364adc35a5",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "2b48fff1-2a38-4faa-bcf4-0774e9c61f72",
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
          id: "bcc98187-2ffe-4378-a3b5-2227c297f0b3",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "bfecbd6b-6707-4383-b211-b86518bd0b75",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "8ddb8bb4-ef6f-4c2e-b40f-b5a60f6bf86a",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "8ddb8bb4-ef6f-4c2e-b40f-b5a60f6bf86a",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T04:59:21.425Z"),
      webUrl: "https://nervous-deck.com",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreCreateDatastoreTable failed:", res.error);
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
import { datastoreGetDatastoreTable } from "@unified-api/typescript-sdk/funcs/datastoreGetDatastoreTable.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreGetDatastoreTable(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreGetDatastoreTable failed:", res.error);
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
import { datastoreListDatastoreTables } from "@unified-api/typescript-sdk/funcs/datastoreListDatastoreTables.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreListDatastoreTables(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreListDatastoreTables failed:", res.error);
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
          id: "4097fd03-9d56-4ad7-a175-71ed0bee0095",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "59ae809d-45cd-4d98-9897-60e2e22fe58a",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "137957bf-e009-42da-8f0a-ab2c78509b35",
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
          id: "fb9a82ab-2d88-4c16-ade0-a80b5faea1b3",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "89a8ee33-6ce2-409f-9606-2ce8708b323c",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "6f973232-d457-4427-bec2-621bf6aa4259",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "6f973232-d457-4427-bec2-621bf6aa4259",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T04:59:21.426Z"),
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
import { datastorePatchDatastoreTable } from "@unified-api/typescript-sdk/funcs/datastorePatchDatastoreTable.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastorePatchDatastoreTable(unifiedTo, {
    datastoreTable: {
      createdAt: new Date("2022-05-22T04:49:00.762Z"),
      description: "Quasi adhuc paulatim ducimus carpo vomito magni tantum tubineus corona.",
      fields: [
        {
          description: "Antea soluta itaque clamo despecto basium accendo.",
          id: "4097fd03-9d56-4ad7-a175-71ed0bee0095",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "59ae809d-45cd-4d98-9897-60e2e22fe58a",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "137957bf-e009-42da-8f0a-ab2c78509b35",
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
          id: "fb9a82ab-2d88-4c16-ade0-a80b5faea1b3",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "89a8ee33-6ce2-409f-9606-2ce8708b323c",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "6f973232-d457-4427-bec2-621bf6aa4259",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "6f973232-d457-4427-bec2-621bf6aa4259",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T04:59:21.426Z"),
      webUrl: "https://nervous-deck.com",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastorePatchDatastoreTable failed:", res.error);
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
import { datastoreRemoveDatastoreTable } from "@unified-api/typescript-sdk/funcs/datastoreRemoveDatastoreTable.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreRemoveDatastoreTable(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreRemoveDatastoreTable failed:", res.error);
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
          id: "4097fd03-9d56-4ad7-a175-71ed0bee0095",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "59ae809d-45cd-4d98-9897-60e2e22fe58a",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "137957bf-e009-42da-8f0a-ab2c78509b35",
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
          id: "fb9a82ab-2d88-4c16-ade0-a80b5faea1b3",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "89a8ee33-6ce2-409f-9606-2ce8708b323c",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "6f973232-d457-4427-bec2-621bf6aa4259",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "6f973232-d457-4427-bec2-621bf6aa4259",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T04:59:21.426Z"),
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
import { datastoreUpdateDatastoreTable } from "@unified-api/typescript-sdk/funcs/datastoreUpdateDatastoreTable.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreUpdateDatastoreTable(unifiedTo, {
    datastoreTable: {
      createdAt: new Date("2022-05-22T04:49:00.762Z"),
      description: "Quasi adhuc paulatim ducimus carpo vomito magni tantum tubineus corona.",
      fields: [
        {
          description: "Antea soluta itaque clamo despecto basium accendo.",
          id: "4097fd03-9d56-4ad7-a175-71ed0bee0095",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "59ae809d-45cd-4d98-9897-60e2e22fe58a",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "137957bf-e009-42da-8f0a-ab2c78509b35",
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
          id: "fb9a82ab-2d88-4c16-ade0-a80b5faea1b3",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "89a8ee33-6ce2-409f-9606-2ce8708b323c",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "6f973232-d457-4427-bec2-621bf6aa4259",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "6f973232-d457-4427-bec2-621bf6aa4259",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T04:59:21.426Z"),
      webUrl: "https://nervous-deck.com",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreUpdateDatastoreTable failed:", res.error);
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