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
  connectionId: "laboriosam",
  id: "73d522b8-28a9-4030-a60f-024c79b4cc64",
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
  connectionId: "eligendi",
  limit: 1687.36,
  offset: 7276.04,
  order: "sequi",
  query: "culpa",
  sort: "ratione",
  updatedGte: new Date("2022-03-30T02:59:59.063Z"),
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
  connectionId: "labore",
  id: "88ade62f-6aa5-458a-a5e2-083016ca34bb",
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
    createdAt: new Date("2022-01-06T01:33:11.339Z"),
    dealProbability: false,
    displayOrder: 8302.16,
    id: "4f62127a-607d-4160-a294-514c3db9ca9f",
    name: "Brandy Powlowski",
    raw: {},
    updatedAt: new Date("2021-03-30T20:29:28.566Z"),
  },
  connectionId: "quos",
  id: "78703493-f49a-4a84-a5a3-283279b719d1",
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
    createdAt: new Date("2020-05-07T22:58:48.615Z"),
    dealProbability: false,
    displayOrder: 6422.68,
    id: "673d86e3-b35e-449a-b135-778ce54cacb0",
    name: "Chris Terry",
    raw: {},
    updatedAt: new Date("2022-09-03T20:01:11.409Z"),
  },
  connectionId: "voluptatem",
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
    createdAt: new Date("2022-08-22T17:28:32.263Z"),
    dealProbability: false,
    displayOrder: 6880.36,
    id: "acf63b21-5186-4ab5-a3a0-22614315d156",
    name: "Victor Mayer",
    raw: {},
    updatedAt: new Date("2022-11-25T09:18:50.894Z"),
  },
  connectionId: "officia",
  id: "fc7186ff-20b7-4a73-9f40-ca0d7657c164",
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

