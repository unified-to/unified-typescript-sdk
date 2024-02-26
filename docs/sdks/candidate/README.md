# Candidate
(*candidate*)

### Available Operations

* [createAtsCandidate](#createatscandidate) - Create a candidate
* [getAtsCandidate](#getatscandidate) - Retrieve a candidate
* [listAtsCandidates](#listatscandidates) - List all candidates
* [patchAtsCandidate](#patchatscandidate) - Update a candidate
* [removeAtsCandidate](#removeatscandidate) - Remove a candidate
* [updateAtsCandidate](#updateatscandidate) - Update a candidate

## createAtsCandidate

Create a candidate

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreateAtsCandidateSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { AtsEmailType, AtsTelephoneType, Origin } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAtsCandidateSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.candidate.createAtsCandidate({
    atsCandidate: {
      address: {},
      emails: [
        {
          email: "Robin_Feeney@hotmail.com",
        },
      ],
      linkUrls: [
        "<value>",
      ],
      raw: {
        "key": "<value>",
      },
      sources: [
        "<value>",
      ],
      tags: [
        "<value>",
      ],
      telephones: [
        {
          telephone: "<value>",
        },
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
| `request`                                                                                          | [operations.CreateAtsCandidateRequest](../../sdk/models/operations/createatscandidaterequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.CreateAtsCandidateSecurity](../../sdk/models/operations/createatscandidatesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateAtsCandidateResponse](../../sdk/models/operations/createatscandidateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAtsCandidate

Retrieve a candidate

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetAtsCandidateSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAtsCandidateSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.candidate.getAtsCandidate({
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
| `request`                                                                                    | [operations.GetAtsCandidateRequest](../../sdk/models/operations/getatscandidaterequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.GetAtsCandidateSecurity](../../sdk/models/operations/getatscandidatesecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetAtsCandidateResponse](../../sdk/models/operations/getatscandidateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAtsCandidates

List all candidates

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListAtsCandidatesSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsCandidatesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.candidate.listAtsCandidates({
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
| `request`                                                                                        | [operations.ListAtsCandidatesRequest](../../sdk/models/operations/listatscandidatesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.ListAtsCandidatesSecurity](../../sdk/models/operations/listatscandidatessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListAtsCandidatesResponse](../../sdk/models/operations/listatscandidatesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAtsCandidate

Update a candidate

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchAtsCandidateSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { AtsEmailType, AtsTelephoneType, Origin } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAtsCandidateSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.candidate.patchAtsCandidate({
    atsCandidate: {
      address: {},
      emails: [
        {
          email: "Tracy.Collins13@gmail.com",
        },
      ],
      linkUrls: [
        "<value>",
      ],
      raw: {
        "key": "<value>",
      },
      sources: [
        "<value>",
      ],
      tags: [
        "<value>",
      ],
      telephones: [
        {
          telephone: "<value>",
        },
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
| `request`                                                                                        | [operations.PatchAtsCandidateRequest](../../sdk/models/operations/patchatscandidaterequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.PatchAtsCandidateSecurity](../../sdk/models/operations/patchatscandidatesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PatchAtsCandidateResponse](../../sdk/models/operations/patchatscandidateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAtsCandidate

Remove a candidate

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemoveAtsCandidateSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAtsCandidateSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.candidate.removeAtsCandidate({
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
| `request`                                                                                          | [operations.RemoveAtsCandidateRequest](../../sdk/models/operations/removeatscandidaterequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.RemoveAtsCandidateSecurity](../../sdk/models/operations/removeatscandidatesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.RemoveAtsCandidateResponse](../../sdk/models/operations/removeatscandidateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAtsCandidate

Update a candidate

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdateAtsCandidateSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { AtsEmailType, AtsTelephoneType, Origin } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAtsCandidateSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.candidate.updateAtsCandidate({
    atsCandidate: {
      address: {},
      emails: [
        {
          email: "Gaetano86@hotmail.com",
        },
      ],
      linkUrls: [
        "<value>",
      ],
      raw: {
        "key": "<value>",
      },
      sources: [
        "<value>",
      ],
      tags: [
        "<value>",
      ],
      telephones: [
        {
          telephone: "<value>",
        },
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
| `request`                                                                                          | [operations.UpdateAtsCandidateRequest](../../sdk/models/operations/updateatscandidaterequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.UpdateAtsCandidateSecurity](../../sdk/models/operations/updateatscandidatesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateAtsCandidateResponse](../../sdk/models/operations/updateatscandidateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
