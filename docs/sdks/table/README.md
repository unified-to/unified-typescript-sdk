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
          id: "43967c22-990b-436a-af56-46fa5c08cd78",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "237699a2-1648-461d-9704-e4cf8eec64f4",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "6598b03f-60d2-47a4-a115-28513d6108c6",
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
          id: "213793a0-5f30-40cc-9171-514ac0968b71",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "16a6dbc8-ab19-4b82-b47d-01a43869f397",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "b412f7f2-916f-413d-b429-97903ba76c31",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "b412f7f2-916f-413d-b429-97903ba76c31",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T00:08:45.206Z"),
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
          id: "43967c22-990b-436a-af56-46fa5c08cd78",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "237699a2-1648-461d-9704-e4cf8eec64f4",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "6598b03f-60d2-47a4-a115-28513d6108c6",
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
          id: "213793a0-5f30-40cc-9171-514ac0968b71",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "16a6dbc8-ab19-4b82-b47d-01a43869f397",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "b412f7f2-916f-413d-b429-97903ba76c31",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "b412f7f2-916f-413d-b429-97903ba76c31",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T00:08:45.206Z"),
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
          id: "0ecec699-5260-4c27-b966-e8d954f2e555",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "1b456cfa-f5a4-4231-b900-2182e1613934",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "0aecb0f8-8ae1-43e9-a44a-5bd213636845",
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
          id: "01e2952d-4b03-45e3-8e54-5a3084341fbd",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "2a5d7a3a-ee09-4717-b5f7-be56b81eff8b",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "7d613d31-cbf1-49b2-ab3a-9587b05bd816",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "7d613d31-cbf1-49b2-ab3a-9587b05bd816",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T00:08:45.208Z"),
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
          id: "0ecec699-5260-4c27-b966-e8d954f2e555",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "1b456cfa-f5a4-4231-b900-2182e1613934",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "0aecb0f8-8ae1-43e9-a44a-5bd213636845",
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
          id: "01e2952d-4b03-45e3-8e54-5a3084341fbd",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "2a5d7a3a-ee09-4717-b5f7-be56b81eff8b",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "7d613d31-cbf1-49b2-ab3a-9587b05bd816",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "7d613d31-cbf1-49b2-ab3a-9587b05bd816",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T00:08:45.208Z"),
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
          id: "0ecec699-5260-4c27-b966-e8d954f2e555",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "1b456cfa-f5a4-4231-b900-2182e1613934",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "0aecb0f8-8ae1-43e9-a44a-5bd213636845",
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
          id: "01e2952d-4b03-45e3-8e54-5a3084341fbd",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "2a5d7a3a-ee09-4717-b5f7-be56b81eff8b",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "7d613d31-cbf1-49b2-ab3a-9587b05bd816",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "7d613d31-cbf1-49b2-ab3a-9587b05bd816",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T00:08:45.208Z"),
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
          id: "0ecec699-5260-4c27-b966-e8d954f2e555",
          isIndexed: true,
          isUnique: true,
          name: "Ferry LLC",
          originalType: "conservo",
          scale: 64,
          type: "SINGLE_SELECT",
        },
        {
          description: "Nulla cattus aequus sumo neque alter cauda subseco.",
          id: "1b456cfa-f5a4-4231-b900-2182e1613934",
          isNullable: true,
          isUnique: true,
          name: "Hand - Nader",
          originalType: "conservo",
          precision: 57,
          type: "SINGLE_SELECT",
        },
        {
          description: "Utilis callide adhuc verumtamen doloremque ceno sui sint.",
          id: "0aecb0f8-8ae1-43e9-a44a-5bd213636845",
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
          id: "01e2952d-4b03-45e3-8e54-5a3084341fbd",
          name: "Gislason, Gorczany and Hegmann",
          originalType: "tego",
          precision: 94,
          scale: 24,
          type: "RELATION",
        },
        {
          description: "Communis coma cura audio aduro acer canis expedita.",
          id: "2a5d7a3a-ee09-4717-b5f7-be56b81eff8b",
          isIndexed: true,
          isPrimaryKey: true,
          isRequired: true,
          name: "Graham, Steuber and Kshlerin",
          originalType: "defessus",
          scale: 68,
          type: "EMAIL",
        },
      ],
      id: "7d613d31-cbf1-49b2-ab3a-9587b05bd816",
      metadata: [],
      name: "Rogahn, Lowe and Heller",
      relationships: [
        {
          field: "Macejkovic - Shields",
          name: "Hyatt, Ryan and Nienow",
          tableId: "7d613d31-cbf1-49b2-ab3a-9587b05bd816",
          type: "MANY",
        },
      ],
      updatedAt: new Date("2022-08-13T00:08:45.208Z"),
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