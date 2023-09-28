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
  connectionId: "Bicycle",
  id: "<ID>",
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
  companyId: "reboot",
  connectionId: "customise far",
  contactId: "Electronic proactive",
  dealId: "withdrawal deposit Gloves",
  limit: 1588.79,
  offset: 3754.81,
  order: "Implemented fairly meh",
  query: "FTP Producer",
  sort: "soprano deliverables",
  updatedGte: new Date("2022-03-02T03:00:09.711Z"),
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
  connectionId: "Bicycle",
  id: "<ID>",
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
    activityId: "duh Handmade harness",
    companyId: "CFP",
    contactId: "unaware yellow generating",
    createdAt: new Date("2021-05-04T04:54:33.785Z"),
    dealId: "channels SUV",
    description: "De-engineered didactic hardware",
    fileName: "metical_silver_yellow.html",
    fileSize: 6861.53,
    fileType: "video",
    fileUrl: "navigate Funk",
    id: "<ID>",
    leadId: "internal",
    raw: {},
    updatedAt: new Date("2023-02-21T13:46:42.012Z"),
    userId: "Interactions",
  },
  connectionId: "Handcrafted",
  id: "<ID>",
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
    activityId: "tan impedit Pickup",
    companyId: "Manager",
    contactId: "Florida Shoes East",
    createdAt: new Date("2023-01-08T11:37:24.708Z"),
    dealId: "Agent",
    description: "Multi-lateral well-modulated portal",
    fileName: "panel_city.wav",
    fileSize: 1401.73,
    fileType: "application",
    fileUrl: "for Chips under",
    id: "<ID>",
    leadId: "abaft Checking",
    raw: {},
    updatedAt: new Date("2023-02-25T09:46:59.608Z"),
    userId: "Mexico withdrawal",
  },
  connectionId: "national Lead",
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
    activityId: "Cotton",
    companyId: "Northeast",
    contactId: "Computer",
    createdAt: new Date("2021-04-09T13:10:01.367Z"),
    dealId: "toward confiscate East",
    description: "Devolved upward-trending matrices",
    fileName: "generation_tactics.wav",
    fileSize: 4770.09,
    fileType: "audio",
    fileUrl: "framework azure Metal",
    id: "<ID>",
    leadId: "ampere costume",
    raw: {},
    updatedAt: new Date("2023-05-15T05:04:24.130Z"),
    userId: "Research payment",
  },
  connectionId: "East Associate Mazda",
  id: "<ID>",
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

