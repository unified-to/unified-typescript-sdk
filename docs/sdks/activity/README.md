# Activity
(*activity*)

### Available Operations

* [createAtsActivity](#createatsactivity) - Create an activity
* [getAtsActivity](#getatsactivity) - Retrieve an activity
* [listAtsActivities](#listatsactivities) - List all activities
* [patchAtsActivity](#patchatsactivity) - Update an activity
* [removeAtsActivity](#removeatsactivity) - Remove an activity
* [updateAtsActivity](#updateatsactivity) - Update an activity

## createAtsActivity

Create an activity

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreateAtsActivitySecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { AtsActivityType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAtsActivitySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.activity.createAtsActivity({
    atsActivity: {
      raw: {
        "key": "<value>",
      },
      title: "<value>",
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

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateAtsActivityRequest](../../sdk/models/operations/createatsactivityrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.CreateAtsActivitySecurity](../../sdk/models/operations/createatsactivitysecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateAtsActivityResponse](../../sdk/models/operations/createatsactivityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAtsActivity

Retrieve an activity

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetAtsActivitySecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAtsActivitySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.activity.getAtsActivity({
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
| `request`                                                                                  | [operations.GetAtsActivityRequest](../../sdk/models/operations/getatsactivityrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetAtsActivitySecurity](../../sdk/models/operations/getatsactivitysecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetAtsActivityResponse](../../sdk/models/operations/getatsactivityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAtsActivities

List all activities

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListAtsActivitiesSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsActivitiesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.activity.listAtsActivities({
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
| `request`                                                                                        | [operations.ListAtsActivitiesRequest](../../sdk/models/operations/listatsactivitiesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.ListAtsActivitiesSecurity](../../sdk/models/operations/listatsactivitiessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListAtsActivitiesResponse](../../sdk/models/operations/listatsactivitiesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAtsActivity

Update an activity

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchAtsActivitySecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { AtsActivityType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAtsActivitySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.activity.patchAtsActivity({
    atsActivity: {
      raw: {
        "key": "<value>",
      },
      title: "<value>",
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PatchAtsActivityRequest](../../sdk/models/operations/patchatsactivityrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.PatchAtsActivitySecurity](../../sdk/models/operations/patchatsactivitysecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PatchAtsActivityResponse](../../sdk/models/operations/patchatsactivityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAtsActivity

Remove an activity

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemoveAtsActivitySecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAtsActivitySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.activity.removeAtsActivity({
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
| `request`                                                                                        | [operations.RemoveAtsActivityRequest](../../sdk/models/operations/removeatsactivityrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.RemoveAtsActivitySecurity](../../sdk/models/operations/removeatsactivitysecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.RemoveAtsActivityResponse](../../sdk/models/operations/removeatsactivityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAtsActivity

Update an activity

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdateAtsActivitySecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { AtsActivityType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAtsActivitySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.activity.updateAtsActivity({
    atsActivity: {
      raw: {
        "key": "<value>",
      },
      title: "<value>",
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
| `request`                                                                                        | [operations.UpdateAtsActivityRequest](../../sdk/models/operations/updateatsactivityrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.UpdateAtsActivitySecurity](../../sdk/models/operations/updateatsactivitysecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateAtsActivityResponse](../../sdk/models/operations/updateatsactivityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
