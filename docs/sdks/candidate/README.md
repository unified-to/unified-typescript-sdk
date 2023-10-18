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
import { UnifiedTo } from "unified-to";
import { AtsEmailType, AtsTelephoneType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.candidate.createAtsCandidate({
    atsCandidate: {
      address: {},
      emails: [
        {
          email: "Robin_Feeney@hotmail.com",
        },
      ],
      raw: {},
      tags: [
        "radian",
      ],
      telephones: [
        {
          telephone: "who",
        },
      ],
    },
    connectionId: "New",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateAtsCandidateRequest](../../models/operations/createatscandidaterequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateAtsCandidateResponse](../../models/operations/createatscandidateresponse.md)>**


## getAtsCandidate

Retrieve a candidate

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.candidate.getAtsCandidate({
    connectionId: "Generic",
    fields: [
      "hub",
    ],
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetAtsCandidateRequest](../../models/operations/getatscandidaterequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetAtsCandidateResponse](../../models/operations/getatscandidateresponse.md)>**


## listAtsCandidates

List all candidates

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.candidate.listAtsCandidates({
    connectionId: "Mobility",
    fields: [
      "Cambridgeshire",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListAtsCandidatesRequest](../../models/operations/listatscandidatesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListAtsCandidatesResponse](../../models/operations/listatscandidatesresponse.md)>**


## patchAtsCandidate

Update a candidate

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { AtsEmailType, AtsTelephoneType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.candidate.patchAtsCandidate({
    atsCandidate: {
      address: {},
      emails: [
        {
          email: "Tracy.Collins13@gmail.com",
        },
      ],
      raw: {},
      tags: [
        "Credit",
      ],
      telephones: [
        {
          telephone: "esse",
        },
      ],
    },
    connectionId: "Dynamic",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.PatchAtsCandidateRequest](../../models/operations/patchatscandidaterequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PatchAtsCandidateResponse](../../models/operations/patchatscandidateresponse.md)>**


## removeAtsCandidate

Remove a candidate

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.candidate.removeAtsCandidate({
    connectionId: "male",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.RemoveAtsCandidateRequest](../../models/operations/removeatscandidaterequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.RemoveAtsCandidateResponse](../../models/operations/removeatscandidateresponse.md)>**


## updateAtsCandidate

Update a candidate

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { AtsEmailType, AtsTelephoneType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.candidate.updateAtsCandidate({
    atsCandidate: {
      address: {},
      emails: [
        {
          email: "Gaetano86@hotmail.com",
        },
      ],
      raw: {},
      tags: [
        "B2C",
      ],
      telephones: [
        {
          telephone: "now",
        },
      ],
    },
    connectionId: "Gloves",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateAtsCandidateRequest](../../models/operations/updateatscandidaterequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateAtsCandidateResponse](../../models/operations/updateatscandidateresponse.md)>**

