# Pipeline
(*pipeline*)

### Available Operations

* [deleteCrmConnectionIdPipelineId](#deletecrmconnectionidpipelineid) - Remove a pipeline
* [getCrmConnectionIdPipeline](#getcrmconnectionidpipeline) - List all pipelines
* [getCrmConnectionIdPipelineId](#getcrmconnectionidpipelineid) - Retrieve a pipeline
* [patchCrmConnectionIdPipelineId](#patchcrmconnectionidpipelineid) - Update a pipeline
* [postCrmConnectionIdPipeline](#postcrmconnectionidpipeline) - Create a pipeline
* [putCrmConnectionIdPipelineId](#putcrmconnectionidpipelineid) - Update a pipeline

## deleteCrmConnectionIdPipelineId

Remove a pipeline

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdPipelineIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.pipeline.deleteCrmConnectionIdPipelineId({
  connectionId: "Customer",
  id: "<ID>",
}).then((res: DeleteCrmConnectionIdPipelineIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.DeleteCrmConnectionIdPipelineIdRequest](../../models/operations/deletecrmconnectionidpipelineidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.DeleteCrmConnectionIdPipelineIdResponse](../../models/operations/deletecrmconnectionidpipelineidresponse.md)>**


## getCrmConnectionIdPipeline

List all pipelines

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdPipelineResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.pipeline.getCrmConnectionIdPipeline({
  connectionId: "dirty Awesome Checking",
  limit: 9055.88,
  offset: 3443.76,
  order: "glom",
  query: "panel",
  sort: "Latin tightly",
  updatedGte: new Date("2022-03-01T15:47:43.244Z"),
}).then((res: GetCrmConnectionIdPipelineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetCrmConnectionIdPipelineRequest](../../models/operations/getcrmconnectionidpipelinerequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetCrmConnectionIdPipelineResponse](../../models/operations/getcrmconnectionidpipelineresponse.md)>**


## getCrmConnectionIdPipelineId

Retrieve a pipeline

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdPipelineIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.pipeline.getCrmConnectionIdPipelineId({
  connectionId: "Tricycle roughly markets",
  id: "<ID>",
}).then((res: GetCrmConnectionIdPipelineIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetCrmConnectionIdPipelineIdRequest](../../models/operations/getcrmconnectionidpipelineidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetCrmConnectionIdPipelineIdResponse](../../models/operations/getcrmconnectionidpipelineidresponse.md)>**


## patchCrmConnectionIdPipelineId

Update a pipeline

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdPipelineIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.pipeline.patchCrmConnectionIdPipelineId({
  crmPipeline: {
    active: false,
    createdAt: new Date("2023-08-24T17:39:51.183Z"),
    dealProbability: false,
    displayOrder: 664.58,
    id: "<ID>",
    name: "bandwidth",
    raw: {},
    updatedAt: new Date("2023-11-27T01:55:15.440Z"),
  },
  connectionId: "Chips",
  id: "<ID>",
}).then((res: PatchCrmConnectionIdPipelineIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PatchCrmConnectionIdPipelineIdRequest](../../models/operations/patchcrmconnectionidpipelineidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PatchCrmConnectionIdPipelineIdResponse](../../models/operations/patchcrmconnectionidpipelineidresponse.md)>**


## postCrmConnectionIdPipeline

Create a pipeline

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdPipelineResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.pipeline.postCrmConnectionIdPipeline({
  crmPipeline: {
    active: false,
    createdAt: new Date("2023-12-10T23:55:22.206Z"),
    dealProbability: false,
    displayOrder: 3879.73,
    id: "<ID>",
    name: "upward Mayaguez",
    raw: {},
    updatedAt: new Date("2021-09-25T10:43:23.679Z"),
  },
  connectionId: "Lead Health",
}).then((res: PostCrmConnectionIdPipelineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PostCrmConnectionIdPipelineRequest](../../models/operations/postcrmconnectionidpipelinerequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PostCrmConnectionIdPipelineResponse](../../models/operations/postcrmconnectionidpipelineresponse.md)>**


## putCrmConnectionIdPipelineId

Update a pipeline

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdPipelineIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.pipeline.putCrmConnectionIdPipelineId({
  crmPipeline: {
    active: false,
    createdAt: new Date("2021-05-16T17:24:47.805Z"),
    dealProbability: false,
    displayOrder: 5470.76,
    id: "<ID>",
    name: "West",
    raw: {},
    updatedAt: new Date("2022-02-28T07:49:31.151Z"),
  },
  connectionId: "optimizing",
  id: "<ID>",
}).then((res: PutCrmConnectionIdPipelineIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PutCrmConnectionIdPipelineIdRequest](../../models/operations/putcrmconnectionidpipelineidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PutCrmConnectionIdPipelineIdResponse](../../models/operations/putcrmconnectionidpipelineidresponse.md)>**

