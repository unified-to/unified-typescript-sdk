# Candidate
(*candidate*)

### Available Operations

* [deleteAtsConnectionIdCandidateId](#deleteatsconnectionidcandidateid) - Remove a candidate
* [getAtsConnectionIdCandidate](#getatsconnectionidcandidate) - List all candidates
* [getAtsConnectionIdCandidateId](#getatsconnectionidcandidateid) - Retrieve a candidate
* [patchAtsConnectionIdCandidateId](#patchatsconnectionidcandidateid) - Update a candidate
* [postAtsConnectionIdCandidate](#postatsconnectionidcandidate) - Create a candidate
* [putAtsConnectionIdCandidateId](#putatsconnectionidcandidateid) - Update a candidate

## deleteAtsConnectionIdCandidateId

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

  const res = await sdk.candidate.deleteAtsConnectionIdCandidateId({
    connectionId: "multimedia",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeleteAtsConnectionIdCandidateIdRequest](../../models/operations/deleteatsconnectionidcandidateidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeleteAtsConnectionIdCandidateIdResponse](../../models/operations/deleteatsconnectionidcandidateidresponse.md)>**


## getAtsConnectionIdCandidate

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

  const res = await sdk.candidate.getAtsConnectionIdCandidate({
    connectionId: "Northwest forceful Moore",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetAtsConnectionIdCandidateRequest](../../models/operations/getatsconnectionidcandidaterequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetAtsConnectionIdCandidateResponse](../../models/operations/getatsconnectionidcandidateresponse.md)>**


## getAtsConnectionIdCandidateId

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

  const res = await sdk.candidate.getAtsConnectionIdCandidateId({
    connectionId: "ha Loan",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetAtsConnectionIdCandidateIdRequest](../../models/operations/getatsconnectionidcandidateidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetAtsConnectionIdCandidateIdResponse](../../models/operations/getatsconnectionidcandidateidresponse.md)>**


## patchAtsConnectionIdCandidateId

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

  const res = await sdk.candidate.patchAtsConnectionIdCandidateId({
    atsCandidate: {
      address: {},
      emails: [
        {
          email: "Stella57@hotmail.com",
        },
      ],
      raw: {},
      tags: [
        "Chips",
      ],
      telephones: [
        {
          telephone: "culpa",
        },
      ],
    },
    connectionId: "Unbranded Country",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PatchAtsConnectionIdCandidateIdRequest](../../models/operations/patchatsconnectionidcandidateidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PatchAtsConnectionIdCandidateIdResponse](../../models/operations/patchatsconnectionidcandidateidresponse.md)>**


## postAtsConnectionIdCandidate

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

  const res = await sdk.candidate.postAtsConnectionIdCandidate({
    atsCandidate: {
      address: {},
      emails: [
        {
          email: "Elmore.Mante@gmail.com",
        },
      ],
      raw: {},
      tags: [
        "than",
      ],
      telephones: [
        {
          telephone: "Wooden siemens Wooden",
        },
      ],
    },
    connectionId: "Jazz Ball",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PostAtsConnectionIdCandidateRequest](../../models/operations/postatsconnectionidcandidaterequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PostAtsConnectionIdCandidateResponse](../../models/operations/postatsconnectionidcandidateresponse.md)>**


## putAtsConnectionIdCandidateId

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

  const res = await sdk.candidate.putAtsConnectionIdCandidateId({
    atsCandidate: {
      address: {},
      emails: [
        {
          email: "Giovanny_Botsford@gmail.com",
        },
      ],
      raw: {},
      tags: [
        "deploy",
      ],
      telephones: [
        {
          telephone: "knowledge officiis",
        },
      ],
    },
    connectionId: "Personal Madagascar",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PutAtsConnectionIdCandidateIdRequest](../../models/operations/putatsconnectionidcandidateidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PutAtsConnectionIdCandidateIdResponse](../../models/operations/putatsconnectionidcandidateidresponse.md)>**

