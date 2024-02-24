# Application
(*application*)

### Available Operations

* [createAtsApplication](#createatsapplication) - Create an application
* [getAtsApplication](#getatsapplication) - Retrieve an application
* [listAtsApplications](#listatsapplications) - List all applications
* [patchAtsApplication](#patchatsapplication) - Update an application
* [removeAtsApplication](#removeatsapplication) - Remove an application
* [updateAtsApplication](#updateatsapplication) - Update an application

## createAtsApplication

Create an application

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateAtsApplicationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsApplicationStatus } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAtsApplicationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.application.createAtsApplication({
    atsApplication: {
      answers: [
        {
          answers: [
            "<value>",
          ],
          questionId: "<value>",
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

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.CreateAtsApplicationRequest](../../sdk/models/operations/createatsapplicationrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.CreateAtsApplicationSecurity](../../sdk/models/operations/createatsapplicationsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateAtsApplicationResponse](../../sdk/models/operations/createatsapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAtsApplication

Retrieve an application

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetAtsApplicationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAtsApplicationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.application.getAtsApplication({
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

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetAtsApplicationRequest](../../sdk/models/operations/getatsapplicationrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetAtsApplicationSecurity](../../sdk/models/operations/getatsapplicationsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetAtsApplicationResponse](../../sdk/models/operations/getatsapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAtsApplications

List all applications

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAtsApplicationsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsApplicationsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.application.listAtsApplications({
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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListAtsApplicationsRequest](../../sdk/models/operations/listatsapplicationsrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.ListAtsApplicationsSecurity](../../sdk/models/operations/listatsapplicationssecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListAtsApplicationsResponse](../../sdk/models/operations/listatsapplicationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAtsApplication

Update an application

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchAtsApplicationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsApplicationStatus } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAtsApplicationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.application.patchAtsApplication({
    atsApplication: {
      answers: [
        {
          answers: [
            "<value>",
          ],
          questionId: "<value>",
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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PatchAtsApplicationRequest](../../sdk/models/operations/patchatsapplicationrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.PatchAtsApplicationSecurity](../../sdk/models/operations/patchatsapplicationsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PatchAtsApplicationResponse](../../sdk/models/operations/patchatsapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAtsApplication

Remove an application

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveAtsApplicationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAtsApplicationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.application.removeAtsApplication({
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

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.RemoveAtsApplicationRequest](../../sdk/models/operations/removeatsapplicationrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.RemoveAtsApplicationSecurity](../../sdk/models/operations/removeatsapplicationsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.RemoveAtsApplicationResponse](../../sdk/models/operations/removeatsapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAtsApplication

Update an application

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateAtsApplicationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsApplicationStatus } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAtsApplicationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.application.updateAtsApplication({
    atsApplication: {
      answers: [
        {
          answers: [
            "<value>",
          ],
          questionId: "<value>",
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

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UpdateAtsApplicationRequest](../../sdk/models/operations/updateatsapplicationrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.UpdateAtsApplicationSecurity](../../sdk/models/operations/updateatsapplicationsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateAtsApplicationResponse](../../sdk/models/operations/updateatsapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
