# Scorecard
(*scorecard*)

### Available Operations

* [createAtsScorecard](#createatsscorecard) - Create a scorecard
* [getAtsScorecard](#getatsscorecard) - Retrieve a scorecard
* [listAtsScorecards](#listatsscorecards) - List all scorecards
* [patchAtsScorecard](#patchatsscorecard) - Update a scorecard
* [removeAtsScorecard](#removeatsscorecard) - Remove a scorecard
* [updateAtsScorecard](#updateatsscorecard) - Update a scorecard

## createAtsScorecard

Create a scorecard

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateAtsScorecardSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { Recommendation } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAtsScorecardSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.scorecard.createAtsScorecard({
    atsScorecard: {
      questions: [
        {
          text: "<value>",
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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateAtsScorecardRequest](../../sdk/models/operations/createatsscorecardrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.CreateAtsScorecardSecurity](../../sdk/models/operations/createatsscorecardsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateAtsScorecardResponse](../../sdk/models/operations/createatsscorecardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAtsScorecard

Retrieve a scorecard

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetAtsScorecardSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAtsScorecardSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.scorecard.getAtsScorecard({
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
| `request`                                                                                    | [operations.GetAtsScorecardRequest](../../sdk/models/operations/getatsscorecardrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.GetAtsScorecardSecurity](../../sdk/models/operations/getatsscorecardsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetAtsScorecardResponse](../../sdk/models/operations/getatsscorecardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAtsScorecards

List all scorecards

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAtsScorecardsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsScorecardsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.scorecard.listAtsScorecards({
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
| `request`                                                                                        | [operations.ListAtsScorecardsRequest](../../sdk/models/operations/listatsscorecardsrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.ListAtsScorecardsSecurity](../../sdk/models/operations/listatsscorecardssecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListAtsScorecardsResponse](../../sdk/models/operations/listatsscorecardsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAtsScorecard

Update a scorecard

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchAtsScorecardSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { Recommendation } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAtsScorecardSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.scorecard.patchAtsScorecard({
    atsScorecard: {
      questions: [
        {
          text: "<value>",
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
| `request`                                                                                        | [operations.PatchAtsScorecardRequest](../../sdk/models/operations/patchatsscorecardrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.PatchAtsScorecardSecurity](../../sdk/models/operations/patchatsscorecardsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PatchAtsScorecardResponse](../../sdk/models/operations/patchatsscorecardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAtsScorecard

Remove a scorecard

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveAtsScorecardSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAtsScorecardSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.scorecard.removeAtsScorecard({
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
| `request`                                                                                          | [operations.RemoveAtsScorecardRequest](../../sdk/models/operations/removeatsscorecardrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.RemoveAtsScorecardSecurity](../../sdk/models/operations/removeatsscorecardsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.RemoveAtsScorecardResponse](../../sdk/models/operations/removeatsscorecardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAtsScorecard

Update a scorecard

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateAtsScorecardSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { Recommendation } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAtsScorecardSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.scorecard.updateAtsScorecard({
    atsScorecard: {
      questions: [
        {
          text: "<value>",
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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateAtsScorecardRequest](../../sdk/models/operations/updateatsscorecardrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.UpdateAtsScorecardSecurity](../../sdk/models/operations/updateatsscorecardsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateAtsScorecardResponse](../../sdk/models/operations/updateatsscorecardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
