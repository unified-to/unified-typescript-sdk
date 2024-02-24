# Storage
(*storage*)

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

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateStorageFileSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { PropertyStoragePermissionRoles, StorageFileType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateStorageFileSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.storage.createStorageFile({
    storageFile: {
      permissions: [
        {
          roles: [
            PropertyStoragePermissionRoles.Write,
          ],
        },
      ],
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateStorageFileRequest](../../sdk/models/operations/createstoragefilerequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.CreateStorageFileSecurity](../../sdk/models/operations/createstoragefilesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateStorageFileResponse](../../sdk/models/operations/createstoragefileresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getStorageFile

Retrieve a file

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetStorageFileSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetStorageFileSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.storage.getStorageFile({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetStorageFileRequest](../../sdk/models/operations/getstoragefilerequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetStorageFileSecurity](../../sdk/models/operations/getstoragefilesecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetStorageFileResponse](../../sdk/models/operations/getstoragefileresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listStorageFiles

List all files

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListStorageFilesSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListStorageFilesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.storage.listStorageFiles({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListStorageFilesRequest](../../sdk/models/operations/liststoragefilesrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ListStorageFilesSecurity](../../sdk/models/operations/liststoragefilessecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListStorageFilesResponse](../../sdk/models/operations/liststoragefilesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchStorageFile

Update a file

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchStorageFileSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { PropertyStoragePermissionRoles, StorageFileType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchStorageFileSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.storage.patchStorageFile({
    storageFile: {
      permissions: [
        {
          roles: [
            PropertyStoragePermissionRoles.Owner,
          ],
        },
      ],
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PatchStorageFileRequest](../../sdk/models/operations/patchstoragefilerequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.PatchStorageFileSecurity](../../sdk/models/operations/patchstoragefilesecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PatchStorageFileResponse](../../sdk/models/operations/patchstoragefileresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeStorageFile

Remove a file

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveStorageFileSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveStorageFileSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.storage.removeStorageFile({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.RemoveStorageFileRequest](../../sdk/models/operations/removestoragefilerequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.RemoveStorageFileSecurity](../../sdk/models/operations/removestoragefilesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.RemoveStorageFileResponse](../../sdk/models/operations/removestoragefileresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateStorageFile

Update a file

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateStorageFileSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { PropertyStoragePermissionRoles, StorageFileType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateStorageFileSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.storage.updateStorageFile({
    storageFile: {
      permissions: [
        {
          roles: [
            PropertyStoragePermissionRoles.Write,
          ],
        },
      ],
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateStorageFileRequest](../../sdk/models/operations/updatestoragefilerequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.UpdateStorageFileSecurity](../../sdk/models/operations/updatestoragefilesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateStorageFileResponse](../../sdk/models/operations/updatestoragefileresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
