# Interview
(*interview*)

### Available Operations

* [createAtsInterview](#createatsinterview) - Create a interview
* [getAtsInterview](#getatsinterview) - Retrieve a interview
* [listAtsInterviews](#listatsinterviews) - List all interviews
* [patchAtsInterview](#patchatsinterview) - Update a interview
* [removeAtsInterview](#removeatsinterview) - Remove a interview
* [updateAtsInterview](#updateatsinterview) - Update a interview

## createAtsInterview

Create a interview

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreateAtsInterviewSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { AtsInterviewStatus } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAtsInterviewSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.interview.createAtsInterview({
    atsInterview: {
      raw: {
        "key": "<value>",
      },
      userIds: [
        "<value>",
      ],
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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateAtsInterviewRequest](../../sdk/models/operations/createatsinterviewrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.CreateAtsInterviewSecurity](../../sdk/models/operations/createatsinterviewsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateAtsInterviewResponse](../../sdk/models/operations/createatsinterviewresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAtsInterview

Retrieve a interview

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetAtsInterviewSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAtsInterviewSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.interview.getAtsInterview({
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

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetAtsInterviewRequest](../../sdk/models/operations/getatsinterviewrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.GetAtsInterviewSecurity](../../sdk/models/operations/getatsinterviewsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetAtsInterviewResponse](../../sdk/models/operations/getatsinterviewresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAtsInterviews

List all interviews

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListAtsInterviewsSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsInterviewsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.interview.listAtsInterviews({
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

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListAtsInterviewsRequest](../../sdk/models/operations/listatsinterviewsrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.ListAtsInterviewsSecurity](../../sdk/models/operations/listatsinterviewssecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListAtsInterviewsResponse](../../sdk/models/operations/listatsinterviewsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAtsInterview

Update a interview

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchAtsInterviewSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { AtsInterviewStatus } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAtsInterviewSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.interview.patchAtsInterview({
    atsInterview: {
      raw: {
        "key": "<value>",
      },
      userIds: [
        "<value>",
      ],
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
| `request`                                                                                        | [operations.PatchAtsInterviewRequest](../../sdk/models/operations/patchatsinterviewrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.PatchAtsInterviewSecurity](../../sdk/models/operations/patchatsinterviewsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PatchAtsInterviewResponse](../../sdk/models/operations/patchatsinterviewresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAtsInterview

Remove a interview

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemoveAtsInterviewSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAtsInterviewSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.interview.removeAtsInterview({
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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.RemoveAtsInterviewRequest](../../sdk/models/operations/removeatsinterviewrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.RemoveAtsInterviewSecurity](../../sdk/models/operations/removeatsinterviewsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.RemoveAtsInterviewResponse](../../sdk/models/operations/removeatsinterviewresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAtsInterview

Update a interview

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdateAtsInterviewSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { AtsInterviewStatus } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAtsInterviewSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.interview.updateAtsInterview({
    atsInterview: {
      raw: {
        "key": "<value>",
      },
      userIds: [
        "<value>",
      ],
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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateAtsInterviewRequest](../../sdk/models/operations/updateatsinterviewrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.UpdateAtsInterviewSecurity](../../sdk/models/operations/updateatsinterviewsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateAtsInterviewResponse](../../sdk/models/operations/updateatsinterviewresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
