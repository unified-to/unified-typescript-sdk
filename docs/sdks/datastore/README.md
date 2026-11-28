# Datastore

## Overview

### Available Operations

* [createDatastoreDatabase](#createdatastoredatabase) - Create a database
* [createDatastoreQuery](#createdatastorequery) - Create a query
* [createDatastoreRecord](#createdatastorerecord) - Create a record
* [createDatastoreTable](#createdatastoretable) - Create a table
* [getDatastoreDatabase](#getdatastoredatabase) - Retrieve a database
* [getDatastoreRecord](#getdatastorerecord) - Retrieve a record
* [getDatastoreTable](#getdatastoretable) - Retrieve a table
* [listDatastoreDatabases](#listdatastoredatabases) - List all databases
* [listDatastoreRecords](#listdatastorerecords) - List all records
* [listDatastoreTables](#listdatastoretables) - List all tables
* [patchDatastoreDatabase](#patchdatastoredatabase) - Update a database
* [patchDatastoreRecord](#patchdatastorerecord) - Update a record
* [patchDatastoreTable](#patchdatastoretable) - Update a table
* [removeDatastoreDatabase](#removedatastoredatabase) - Remove a database
* [removeDatastoreRecord](#removedatastorerecord) - Remove a record
* [removeDatastoreTable](#removedatastoretable) - Remove a table
* [updateDatastoreDatabase](#updatedatastoredatabase) - Update a database
* [updateDatastoreRecord](#updatedatastorerecord) - Update a record
* [updateDatastoreTable](#updatedatastoretable) - Update a table

## createDatastoreDatabase

Creates a DatastoreDatabase. Provide the unified DatastoreDatabase fields in the request body; they are mapped to the provider's API. Returns the created DatastoreDatabase.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDatastoreDatabase" method="post" path="/datastore/{connection_id}/database" example="datastore_database" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.datastore.createDatastoreDatabase({
    datastoreDatabase: {
      createdAt: new Date("2019-03-05T14:31:00.223Z"),
      description: "Coerceo amet vito vorago subseco natus tonsor eius.",
      id: "f4decbdb-a297-4cab-8745-8511ac7143bf",
      isActive: true,
      metadata: [],
      name: "Aufderhar - Wiza",
      password: "hYwOHm0NLDvI_ch",
      region: "Greece",
      updatedAt: new Date("2023-07-22T08:34:12.160Z"),
      webUrl: "https://dependable-government.org/",
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
import { datastoreCreateDatastoreDatabase } from "@unified-api/typescript-sdk/funcs/datastoreCreateDatastoreDatabase.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreCreateDatastoreDatabase(unifiedTo, {
    datastoreDatabase: {
      createdAt: new Date("2019-03-05T14:31:00.223Z"),
      description: "Coerceo amet vito vorago subseco natus tonsor eius.",
      id: "f4decbdb-a297-4cab-8745-8511ac7143bf",
      isActive: true,
      metadata: [],
      name: "Aufderhar - Wiza",
      password: "hYwOHm0NLDvI_ch",
      region: "Greece",
      updatedAt: new Date("2023-07-22T08:34:12.160Z"),
      webUrl: "https://dependable-government.org/",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreCreateDatastoreDatabase failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDatastoreDatabaseRequest](../../sdk/models/operations/createdatastoredatabaserequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreDatabase](../../sdk/models/shared/datastoredatabase.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createDatastoreQuery

Creates a DatastoreQuery. Provide the unified DatastoreQuery fields in the request body; they are mapped to the provider's API. Returns the created DatastoreQuery.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDatastoreQuery" method="post" path="/datastore/{connection_id}/query" example="datastore_query" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.datastore.createDatastoreQuery({
    datastoreQuery: {
      metadata: [],
      query: {
        filter: {
          type: "OR",
        },
        select: [
          "*",
        ],
        sql: "",
      },
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
import { datastoreCreateDatastoreQuery } from "@unified-api/typescript-sdk/funcs/datastoreCreateDatastoreQuery.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreCreateDatastoreQuery(unifiedTo, {
    datastoreQuery: {
      metadata: [],
      query: {
        filter: {
          type: "OR",
        },
        select: [
          "*",
        ],
        sql: "",
      },
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreCreateDatastoreQuery failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDatastoreQueryRequest](../../sdk/models/operations/createdatastorequeryrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreQuery](../../sdk/models/shared/datastorequery.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createDatastoreRecord

Creates a DatastoreRecord. Provide the unified DatastoreRecord fields in the request body; they are mapped to the provider's API. Returns the created DatastoreRecord.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDatastoreRecord" method="post" path="/datastore/{connection_id}/record" example="datastore_record" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.datastore.createDatastoreRecord({
    datastoreRecord: {
      createdAt: new Date("2022-07-10T04:42:03.076Z"),
      fields: {

      },
      id: "171a215e-8e4d-4e29-892d-74a089af5029",
      metadata: [],
      rowNumber: 33,
      updatedAt: new Date("2025-03-28T16:28:14.347Z"),
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
import { datastoreCreateDatastoreRecord } from "@unified-api/typescript-sdk/funcs/datastoreCreateDatastoreRecord.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreCreateDatastoreRecord(unifiedTo, {
    datastoreRecord: {
      createdAt: new Date("2022-07-10T04:42:03.076Z"),
      fields: {
  
      },
      id: "171a215e-8e4d-4e29-892d-74a089af5029",
      metadata: [],
      rowNumber: 33,
      updatedAt: new Date("2025-03-28T16:28:14.347Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreCreateDatastoreRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDatastoreRecordRequest](../../sdk/models/operations/createdatastorerecordrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreRecord](../../sdk/models/shared/datastorerecord.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

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
  const result = await unifiedTo.datastore.createDatastoreTable({
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

## getDatastoreDatabase

Retrieves a single DatastoreDatabase by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDatastoreDatabase" method="get" path="/datastore/{connection_id}/database/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.datastore.getDatastoreDatabase({
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
import { datastoreGetDatastoreDatabase } from "@unified-api/typescript-sdk/funcs/datastoreGetDatastoreDatabase.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreGetDatastoreDatabase(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreGetDatastoreDatabase failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDatastoreDatabaseRequest](../../sdk/models/operations/getdatastoredatabaserequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreDatabase](../../sdk/models/shared/datastoredatabase.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getDatastoreRecord

Retrieves a single DatastoreRecord by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDatastoreRecord" method="get" path="/datastore/{connection_id}/record/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.datastore.getDatastoreRecord({
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
import { datastoreGetDatastoreRecord } from "@unified-api/typescript-sdk/funcs/datastoreGetDatastoreRecord.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreGetDatastoreRecord(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreGetDatastoreRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDatastoreRecordRequest](../../sdk/models/operations/getdatastorerecordrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreRecord](../../sdk/models/shared/datastorerecord.md)\>**

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
  const result = await unifiedTo.datastore.getDatastoreTable({
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

## listDatastoreDatabases

Returns a list of DatastoreDatabases. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listDatastoreDatabases" method="get" path="/datastore/{connection_id}/database" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.datastore.listDatastoreDatabases({
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
import { datastoreListDatastoreDatabases } from "@unified-api/typescript-sdk/funcs/datastoreListDatastoreDatabases.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreListDatastoreDatabases(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreListDatastoreDatabases failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDatastoreDatabasesRequest](../../sdk/models/operations/listdatastoredatabasesrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreDatabase[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listDatastoreRecords

Returns a list of DatastoreRecords. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listDatastoreRecords" method="get" path="/datastore/{connection_id}/record" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.datastore.listDatastoreRecords({
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
import { datastoreListDatastoreRecords } from "@unified-api/typescript-sdk/funcs/datastoreListDatastoreRecords.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreListDatastoreRecords(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreListDatastoreRecords failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDatastoreRecordsRequest](../../sdk/models/operations/listdatastorerecordsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreRecord[]](../../models/.md)\>**

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
  const result = await unifiedTo.datastore.listDatastoreTables({
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

## patchDatastoreDatabase

Updates the DatastoreDatabase identified by `id`. Provide the unified DatastoreDatabase fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchDatastoreDatabase" method="patch" path="/datastore/{connection_id}/database/{id}" example="datastore_database" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.datastore.patchDatastoreDatabase({
    datastoreDatabase: {
      createdAt: new Date("2019-03-05T14:31:00.223Z"),
      description: "Coerceo amet vito vorago subseco natus tonsor eius.",
      id: "dc3161e6-945e-4afc-b771-47733ca2ec13",
      isActive: true,
      metadata: [],
      name: "Aufderhar - Wiza",
      password: "hYwOHm0NLDvI_ch",
      region: "Greece",
      updatedAt: new Date("2023-07-22T08:34:12.167Z"),
      webUrl: "https://dependable-government.org/",
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
import { datastorePatchDatastoreDatabase } from "@unified-api/typescript-sdk/funcs/datastorePatchDatastoreDatabase.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastorePatchDatastoreDatabase(unifiedTo, {
    datastoreDatabase: {
      createdAt: new Date("2019-03-05T14:31:00.223Z"),
      description: "Coerceo amet vito vorago subseco natus tonsor eius.",
      id: "dc3161e6-945e-4afc-b771-47733ca2ec13",
      isActive: true,
      metadata: [],
      name: "Aufderhar - Wiza",
      password: "hYwOHm0NLDvI_ch",
      region: "Greece",
      updatedAt: new Date("2023-07-22T08:34:12.167Z"),
      webUrl: "https://dependable-government.org/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastorePatchDatastoreDatabase failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchDatastoreDatabaseRequest](../../sdk/models/operations/patchdatastoredatabaserequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreDatabase](../../sdk/models/shared/datastoredatabase.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchDatastoreRecord

Updates the DatastoreRecord identified by `id`. Provide the unified DatastoreRecord fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchDatastoreRecord" method="patch" path="/datastore/{connection_id}/record/{id}" example="datastore_record" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.datastore.patchDatastoreRecord({
    datastoreRecord: {
      createdAt: new Date("2022-07-10T04:42:03.076Z"),
      fields: {

      },
      id: "999c262a-dc02-461c-8efa-f2c0c407f944",
      metadata: [],
      rowNumber: 33,
      updatedAt: new Date("2025-03-28T16:28:14.356Z"),
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
import { datastorePatchDatastoreRecord } from "@unified-api/typescript-sdk/funcs/datastorePatchDatastoreRecord.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastorePatchDatastoreRecord(unifiedTo, {
    datastoreRecord: {
      createdAt: new Date("2022-07-10T04:42:03.076Z"),
      fields: {
  
      },
      id: "999c262a-dc02-461c-8efa-f2c0c407f944",
      metadata: [],
      rowNumber: 33,
      updatedAt: new Date("2025-03-28T16:28:14.356Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastorePatchDatastoreRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchDatastoreRecordRequest](../../sdk/models/operations/patchdatastorerecordrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreRecord](../../sdk/models/shared/datastorerecord.md)\>**

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
  const result = await unifiedTo.datastore.patchDatastoreTable({
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

## removeDatastoreDatabase

Deletes the DatastoreDatabase identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeDatastoreDatabase" method="delete" path="/datastore/{connection_id}/database/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.datastore.removeDatastoreDatabase({
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
import { datastoreRemoveDatastoreDatabase } from "@unified-api/typescript-sdk/funcs/datastoreRemoveDatastoreDatabase.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreRemoveDatastoreDatabase(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreRemoveDatastoreDatabase failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveDatastoreDatabaseRequest](../../sdk/models/operations/removedatastoredatabaserequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveDatastoreDatabaseResponse](../../sdk/models/operations/removedatastoredatabaseresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeDatastoreRecord

Deletes the DatastoreRecord identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeDatastoreRecord" method="delete" path="/datastore/{connection_id}/record/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.datastore.removeDatastoreRecord({
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
import { datastoreRemoveDatastoreRecord } from "@unified-api/typescript-sdk/funcs/datastoreRemoveDatastoreRecord.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreRemoveDatastoreRecord(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreRemoveDatastoreRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveDatastoreRecordRequest](../../sdk/models/operations/removedatastorerecordrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveDatastoreRecordResponse](../../sdk/models/operations/removedatastorerecordresponse.md)\>**

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
  const result = await unifiedTo.datastore.removeDatastoreTable({
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

## updateDatastoreDatabase

Updates the DatastoreDatabase identified by `id`. Provide the unified DatastoreDatabase fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDatastoreDatabase" method="put" path="/datastore/{connection_id}/database/{id}" example="datastore_database" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.datastore.updateDatastoreDatabase({
    datastoreDatabase: {
      createdAt: new Date("2019-03-05T14:31:00.223Z"),
      description: "Coerceo amet vito vorago subseco natus tonsor eius.",
      id: "dc3161e6-945e-4afc-b771-47733ca2ec13",
      isActive: true,
      metadata: [],
      name: "Aufderhar - Wiza",
      password: "hYwOHm0NLDvI_ch",
      region: "Greece",
      updatedAt: new Date("2023-07-22T08:34:12.167Z"),
      webUrl: "https://dependable-government.org/",
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
import { datastoreUpdateDatastoreDatabase } from "@unified-api/typescript-sdk/funcs/datastoreUpdateDatastoreDatabase.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreUpdateDatastoreDatabase(unifiedTo, {
    datastoreDatabase: {
      createdAt: new Date("2019-03-05T14:31:00.223Z"),
      description: "Coerceo amet vito vorago subseco natus tonsor eius.",
      id: "dc3161e6-945e-4afc-b771-47733ca2ec13",
      isActive: true,
      metadata: [],
      name: "Aufderhar - Wiza",
      password: "hYwOHm0NLDvI_ch",
      region: "Greece",
      updatedAt: new Date("2023-07-22T08:34:12.167Z"),
      webUrl: "https://dependable-government.org/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreUpdateDatastoreDatabase failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDatastoreDatabaseRequest](../../sdk/models/operations/updatedatastoredatabaserequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreDatabase](../../sdk/models/shared/datastoredatabase.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateDatastoreRecord

Updates the DatastoreRecord identified by `id`. Provide the unified DatastoreRecord fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDatastoreRecord" method="put" path="/datastore/{connection_id}/record/{id}" example="datastore_record" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.datastore.updateDatastoreRecord({
    datastoreRecord: {
      createdAt: new Date("2022-07-10T04:42:03.076Z"),
      fields: {

      },
      id: "999c262a-dc02-461c-8efa-f2c0c407f944",
      metadata: [],
      rowNumber: 33,
      updatedAt: new Date("2025-03-28T16:28:14.356Z"),
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
import { datastoreUpdateDatastoreRecord } from "@unified-api/typescript-sdk/funcs/datastoreUpdateDatastoreRecord.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await datastoreUpdateDatastoreRecord(unifiedTo, {
    datastoreRecord: {
      createdAt: new Date("2022-07-10T04:42:03.076Z"),
      fields: {
  
      },
      id: "999c262a-dc02-461c-8efa-f2c0c407f944",
      metadata: [],
      rowNumber: 33,
      updatedAt: new Date("2025-03-28T16:28:14.356Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datastoreUpdateDatastoreRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDatastoreRecordRequest](../../sdk/models/operations/updatedatastorerecordrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DatastoreRecord](../../sdk/models/shared/datastorerecord.md)\>**

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
  const result = await unifiedTo.datastore.updateDatastoreTable({
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