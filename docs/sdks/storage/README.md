# Storage

## Overview

### Available Operations

* [createStorageFile](#createstoragefile) - Create a file
* [getStorageFile](#getstoragefile) - Retrieve a file
* [listStorageFiles](#liststoragefiles) - List all files
* [patchStorageFile](#patchstoragefile) - Update a file
* [removeStorageFile](#removestoragefile) - Remove a file
* [updateStorageFile](#updatestoragefile) - Update a file

## createStorageFile

Create a file

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createStorageFile" method="post" path="/storage/{connection_id}/file" example="storage_file" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.storage.createStorageFile({
    storageFile: {
      createdAt: new Date("2021-09-12T16:48:23.774Z"),
      data: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9ImZ1bGwiIHdpZHRoPSI4MzIiIGhlaWdodD0iMTg2MSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFmYzM1NSIvPjx0ZXh0IHg9IjQxNiIgeT0iOTMwLjUiIGZvbnQtc2l6ZT0iMjAiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+ODMyeDE4NjE8L3RleHQ+PC9zdmc+",
      description: "Crastinus cupiditate debilito cimentarius virgo.",
      downloadUrl: "https://stingy-casement.name/",
      hash: "fe6a659e-75cd-4079-9b76-351f9af2205a",
      id: "8c290817-3f09-46ce-a732-2584d43c6efb",
      mimeType: "FOLDER",
      name: "softly.tiff",
      references: [
        {
          id: "ab705f3b-e368-4a94-8b22-d5f693c14a76",
          name: "tamisium viduo odio cauda",
          type: "accounting_bill",
        },
        {
          id: "9f0f694e-b6f4-4c12-b5f6-ab08d4e81140",
          name: "quia",
          type: "accounting_expense",
        },
      ],
      size: 10276,
      tags: [
        "spoliatio",
      ],
      type: "FILE",
      updatedAt: new Date("2023-01-27T17:40:33.951Z"),
      version: "1",
      webUrl: "https://sandy-distinction.info/",
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
import { storageCreateStorageFile } from "@unified-api/typescript-sdk/funcs/storageCreateStorageFile.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await storageCreateStorageFile(unifiedTo, {
    storageFile: {
      createdAt: new Date("2021-09-12T16:48:23.774Z"),
      data: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9ImZ1bGwiIHdpZHRoPSI4MzIiIGhlaWdodD0iMTg2MSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFmYzM1NSIvPjx0ZXh0IHg9IjQxNiIgeT0iOTMwLjUiIGZvbnQtc2l6ZT0iMjAiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+ODMyeDE4NjE8L3RleHQ+PC9zdmc+",
      description: "Crastinus cupiditate debilito cimentarius virgo.",
      downloadUrl: "https://stingy-casement.name/",
      hash: "fe6a659e-75cd-4079-9b76-351f9af2205a",
      id: "8c290817-3f09-46ce-a732-2584d43c6efb",
      mimeType: "FOLDER",
      name: "softly.tiff",
      references: [
        {
          id: "ab705f3b-e368-4a94-8b22-d5f693c14a76",
          name: "tamisium viduo odio cauda",
          type: "accounting_bill",
        },
        {
          id: "9f0f694e-b6f4-4c12-b5f6-ab08d4e81140",
          name: "quia",
          type: "accounting_expense",
        },
      ],
      size: 10276,
      tags: [
        "spoliatio",
      ],
      type: "FILE",
      updatedAt: new Date("2023-01-27T17:40:33.951Z"),
      version: "1",
      webUrl: "https://sandy-distinction.info/",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("storageCreateStorageFile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateStorageFileRequest](../../sdk/models/operations/createstoragefilerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.StorageFile](../../sdk/models/shared/storagefile.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getStorageFile

Retrieve a file

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getStorageFile" method="get" path="/storage/{connection_id}/file/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.storage.getStorageFile({
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
import { storageGetStorageFile } from "@unified-api/typescript-sdk/funcs/storageGetStorageFile.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await storageGetStorageFile(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("storageGetStorageFile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStorageFileRequest](../../sdk/models/operations/getstoragefilerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.StorageFile](../../sdk/models/shared/storagefile.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listStorageFiles

List all files

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listStorageFiles" method="get" path="/storage/{connection_id}/file" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.storage.listStorageFiles({
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
import { storageListStorageFiles } from "@unified-api/typescript-sdk/funcs/storageListStorageFiles.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await storageListStorageFiles(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("storageListStorageFiles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListStorageFilesRequest](../../sdk/models/operations/liststoragefilesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.StorageFile[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchStorageFile

Update a file

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchStorageFile" method="patch" path="/storage/{connection_id}/file/{id}" example="storage_file" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.storage.patchStorageFile({
    storageFile: {
      createdAt: new Date("2021-09-12T16:48:23.774Z"),
      data: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9ImZ1bGwiIHdpZHRoPSI4MzIiIGhlaWdodD0iMTg2MSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFmYzM1NSIvPjx0ZXh0IHg9IjQxNiIgeT0iOTMwLjUiIGZvbnQtc2l6ZT0iMjAiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+ODMyeDE4NjE8L3RleHQ+PC9zdmc+",
      description: "Crastinus cupiditate debilito cimentarius virgo.",
      downloadUrl: "https://stingy-casement.name/",
      hash: "fe6a659e-75cd-4079-9b76-351f9af2205a",
      id: "72239a77-b192-4404-9865-fa292d0ae820",
      mimeType: "FOLDER",
      name: "softly.tiff",
      references: [
        {
          id: "ab705f3b-e368-4a94-8b22-d5f693c14a76",
          name: "tamisium viduo odio cauda",
          type: "accounting_bill",
        },
        {
          id: "9f0f694e-b6f4-4c12-b5f6-ab08d4e81140",
          name: "quia",
          type: "accounting_expense",
        },
      ],
      size: 10276,
      tags: [
        "spoliatio",
      ],
      type: "FILE",
      updatedAt: new Date("2023-01-27T17:40:33.957Z"),
      version: "1",
      webUrl: "https://sandy-distinction.info/",
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
import { storagePatchStorageFile } from "@unified-api/typescript-sdk/funcs/storagePatchStorageFile.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await storagePatchStorageFile(unifiedTo, {
    storageFile: {
      createdAt: new Date("2021-09-12T16:48:23.774Z"),
      data: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9ImZ1bGwiIHdpZHRoPSI4MzIiIGhlaWdodD0iMTg2MSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFmYzM1NSIvPjx0ZXh0IHg9IjQxNiIgeT0iOTMwLjUiIGZvbnQtc2l6ZT0iMjAiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+ODMyeDE4NjE8L3RleHQ+PC9zdmc+",
      description: "Crastinus cupiditate debilito cimentarius virgo.",
      downloadUrl: "https://stingy-casement.name/",
      hash: "fe6a659e-75cd-4079-9b76-351f9af2205a",
      id: "72239a77-b192-4404-9865-fa292d0ae820",
      mimeType: "FOLDER",
      name: "softly.tiff",
      references: [
        {
          id: "ab705f3b-e368-4a94-8b22-d5f693c14a76",
          name: "tamisium viduo odio cauda",
          type: "accounting_bill",
        },
        {
          id: "9f0f694e-b6f4-4c12-b5f6-ab08d4e81140",
          name: "quia",
          type: "accounting_expense",
        },
      ],
      size: 10276,
      tags: [
        "spoliatio",
      ],
      type: "FILE",
      updatedAt: new Date("2023-01-27T17:40:33.957Z"),
      version: "1",
      webUrl: "https://sandy-distinction.info/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("storagePatchStorageFile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchStorageFileRequest](../../sdk/models/operations/patchstoragefilerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.StorageFile](../../sdk/models/shared/storagefile.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeStorageFile

Remove a file

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeStorageFile" method="delete" path="/storage/{connection_id}/file/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.storage.removeStorageFile({
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
import { storageRemoveStorageFile } from "@unified-api/typescript-sdk/funcs/storageRemoveStorageFile.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await storageRemoveStorageFile(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("storageRemoveStorageFile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveStorageFileRequest](../../sdk/models/operations/removestoragefilerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveStorageFileResponse](../../sdk/models/operations/removestoragefileresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateStorageFile

Update a file

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateStorageFile" method="put" path="/storage/{connection_id}/file/{id}" example="storage_file" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.storage.updateStorageFile({
    storageFile: {
      createdAt: new Date("2021-09-12T16:48:23.774Z"),
      data: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9ImZ1bGwiIHdpZHRoPSI4MzIiIGhlaWdodD0iMTg2MSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFmYzM1NSIvPjx0ZXh0IHg9IjQxNiIgeT0iOTMwLjUiIGZvbnQtc2l6ZT0iMjAiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+ODMyeDE4NjE8L3RleHQ+PC9zdmc+",
      description: "Crastinus cupiditate debilito cimentarius virgo.",
      downloadUrl: "https://stingy-casement.name/",
      hash: "fe6a659e-75cd-4079-9b76-351f9af2205a",
      id: "72239a77-b192-4404-9865-fa292d0ae820",
      mimeType: "FOLDER",
      name: "softly.tiff",
      references: [
        {
          id: "ab705f3b-e368-4a94-8b22-d5f693c14a76",
          name: "tamisium viduo odio cauda",
          type: "accounting_bill",
        },
        {
          id: "9f0f694e-b6f4-4c12-b5f6-ab08d4e81140",
          name: "quia",
          type: "accounting_expense",
        },
      ],
      size: 10276,
      tags: [
        "spoliatio",
      ],
      type: "FILE",
      updatedAt: new Date("2023-01-27T17:40:33.957Z"),
      version: "1",
      webUrl: "https://sandy-distinction.info/",
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
import { storageUpdateStorageFile } from "@unified-api/typescript-sdk/funcs/storageUpdateStorageFile.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await storageUpdateStorageFile(unifiedTo, {
    storageFile: {
      createdAt: new Date("2021-09-12T16:48:23.774Z"),
      data: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9ImZ1bGwiIHdpZHRoPSI4MzIiIGhlaWdodD0iMTg2MSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFmYzM1NSIvPjx0ZXh0IHg9IjQxNiIgeT0iOTMwLjUiIGZvbnQtc2l6ZT0iMjAiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+ODMyeDE4NjE8L3RleHQ+PC9zdmc+",
      description: "Crastinus cupiditate debilito cimentarius virgo.",
      downloadUrl: "https://stingy-casement.name/",
      hash: "fe6a659e-75cd-4079-9b76-351f9af2205a",
      id: "72239a77-b192-4404-9865-fa292d0ae820",
      mimeType: "FOLDER",
      name: "softly.tiff",
      references: [
        {
          id: "ab705f3b-e368-4a94-8b22-d5f693c14a76",
          name: "tamisium viduo odio cauda",
          type: "accounting_bill",
        },
        {
          id: "9f0f694e-b6f4-4c12-b5f6-ab08d4e81140",
          name: "quia",
          type: "accounting_expense",
        },
      ],
      size: 10276,
      tags: [
        "spoliatio",
      ],
      type: "FILE",
      updatedAt: new Date("2023-01-27T17:40:33.957Z"),
      version: "1",
      webUrl: "https://sandy-distinction.info/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("storageUpdateStorageFile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateStorageFileRequest](../../sdk/models/operations/updatestoragefilerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.StorageFile](../../sdk/models/shared/storagefile.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |