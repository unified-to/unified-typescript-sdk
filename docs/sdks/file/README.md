# File
(*file*)

### Available Operations

* [deleteCrmConnectionIdFileId](#deletecrmconnectionidfileid) - Remove a file
* [getCrmConnectionIdFile](#getcrmconnectionidfile) - List all files
* [getCrmConnectionIdFileId](#getcrmconnectionidfileid) - Retrieve a file
* [patchCrmConnectionIdFileId](#patchcrmconnectionidfileid) - Update a file
* [postCrmConnectionIdFile](#postcrmconnectionidfile) - Create a file
* [putCrmConnectionIdFileId](#putcrmconnectionidfileid) - Update a file

## deleteCrmConnectionIdFileId

Remove a file

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdFileIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.file.deleteCrmConnectionIdFileId({
  connectionId: "adipisci",
  id: "febdf676-b720-46da-b750-052a5647edc4",
}).then((res: DeleteCrmConnectionIdFileIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteCrmConnectionIdFileIdRequest](../../models/operations/deletecrmconnectionidfileidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteCrmConnectionIdFileIdResponse](../../models/operations/deletecrmconnectionidfileidresponse.md)>**


## getCrmConnectionIdFile

List all files

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdFileResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.file.getCrmConnectionIdFile({
  companyId: "sequi",
  connectionId: "natus",
  contactId: "saepe",
  dealId: "quibusdam",
  limit: 5481.43,
  offset: 8071.51,
  order: "aliquam",
  query: "adipisci",
  sort: "explicabo",
  updatedGte: new Date("2022-01-22T06:38:09.253Z"),
}).then((res: GetCrmConnectionIdFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCrmConnectionIdFileRequest](../../models/operations/getcrmconnectionidfilerequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCrmConnectionIdFileResponse](../../models/operations/getcrmconnectionidfileresponse.md)>**


## getCrmConnectionIdFileId

Retrieve a file

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdFileIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.file.getCrmConnectionIdFileId({
  connectionId: "incidunt",
  id: "1240d448-7ac6-493b-94c3-b9d2488d795a",
}).then((res: GetCrmConnectionIdFileIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCrmConnectionIdFileIdRequest](../../models/operations/getcrmconnectionidfileidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCrmConnectionIdFileIdResponse](../../models/operations/getcrmconnectionidfileidresponse.md)>**


## patchCrmConnectionIdFileId

Update a file

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdFileIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.file.patchCrmConnectionIdFileId({
  crmFile: {
    active: false,
    activityId: "fuga",
    companyId: "incidunt",
    contactId: "aspernatur",
    createdAt: new Date("2020-08-02T08:40:50.776Z"),
    dealId: "dolore",
    description: "accusantium",
    fileName: "corporis",
    fileSize: 3881.8,
    fileType: "laboriosam",
    fileUrl: "omnis",
    id: "f69a006d-2124-4945-8819-d7c3b1b41844",
    leadId: "consequatur",
    raw: {},
    updatedAt: new Date("2022-12-09T21:50:08.252Z"),
    userId: "saepe",
  },
  connectionId: "accusantium",
  id: "0310d023-dc90-41f5-afd2-a6c44846ae9d",
}).then((res: PatchCrmConnectionIdFileIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchCrmConnectionIdFileIdRequest](../../models/operations/patchcrmconnectionidfileidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchCrmConnectionIdFileIdResponse](../../models/operations/patchcrmconnectionidfileidresponse.md)>**


## postCrmConnectionIdFile

Create a file

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdFileResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.file.postCrmConnectionIdFile({
  crmFile: {
    active: false,
    activityId: "praesentium",
    companyId: "occaecati",
    contactId: "eos",
    createdAt: new Date("2022-10-08T19:31:07.425Z"),
    dealId: "nobis",
    description: "quos",
    fileName: "provident",
    fileSize: 4099.18,
    fileType: "consequuntur",
    fileUrl: "delectus",
    id: "4896bf51-e465-42d3-8343-d61778af4912",
    leadId: "numquam",
    raw: {},
    updatedAt: new Date("2022-07-08T10:09:32.871Z"),
    userId: "magni",
  },
  connectionId: "enim",
}).then((res: PostCrmConnectionIdFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostCrmConnectionIdFileRequest](../../models/operations/postcrmconnectionidfilerequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostCrmConnectionIdFileResponse](../../models/operations/postcrmconnectionidfileresponse.md)>**


## putCrmConnectionIdFileId

Update a file

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdFileIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.file.putCrmConnectionIdFileId({
  crmFile: {
    active: false,
    activityId: "eveniet",
    companyId: "commodi",
    contactId: "magni",
    createdAt: new Date("2022-05-23T03:31:28.636Z"),
    dealId: "aut",
    description: "occaecati",
    fileName: "vero",
    fileSize: 6231.5,
    fileType: "inventore",
    fileUrl: "ipsa",
    id: "44a5de59-ac77-4066-b0cf-1cf593260525",
    leadId: "beatae",
    raw: {},
    updatedAt: new Date("2021-10-17T02:29:52.101Z"),
    userId: "ex",
  },
  connectionId: "harum",
  id: "b426897d-99a2-4d33-9670-e93ee6cf59f3",
}).then((res: PutCrmConnectionIdFileIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PutCrmConnectionIdFileIdRequest](../../models/operations/putcrmconnectionidfileidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PutCrmConnectionIdFileIdResponse](../../models/operations/putcrmconnectionidfileidresponse.md)>**

