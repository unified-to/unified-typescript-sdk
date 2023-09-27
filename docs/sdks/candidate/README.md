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
import { UnifiedTo } from "Unified-to";
import { DeleteAtsConnectionIdCandidateIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.candidate.deleteAtsConnectionIdCandidateId({
  connectionId: "consequuntur",
  id: "defcce8f-1977-4773-a635-62a7b408f05e",
}).then((res: DeleteAtsConnectionIdCandidateIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UnifiedTo } from "Unified-to";
import { GetAtsConnectionIdCandidateResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.candidate.getAtsConnectionIdCandidate({
  connectionId: "neque",
  limit: 8163.65,
  offset: 3071.73,
  order: "quos",
  query: "doloribus",
  sort: "fugiat",
  updatedGte: new Date("2021-01-28T10:50:17.967Z"),
}).then((res: GetAtsConnectionIdCandidateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UnifiedTo } from "Unified-to";
import { GetAtsConnectionIdCandidateIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.candidate.getAtsConnectionIdCandidateId({
  connectionId: "velit",
  id: "13a1f5fd-9425-49c0-b36f-25ea944f3b75",
}).then((res: GetAtsConnectionIdCandidateIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UnifiedTo } from "Unified-to";
import { PatchAtsConnectionIdCandidateIdResponse } from "Unified-to/dist/sdk/models/operations";
import { AtsEmailType, AtsTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.candidate.patchAtsConnectionIdCandidateId({
  atsCandidate: {
    address: {
      address1: "ex",
      address2: "minus",
      city: "North Tylerview",
      country: "Senegal",
      countryCode: "CZ",
      postalCode: "63113",
      region: "magni",
      regionCode: "incidunt",
    },
    companyName: "adipisci",
    createdAt: new Date("2022-07-24T00:20:38.347Z"),
    emails: [
      {
        email: "Melyna.Quigley36@yahoo.com",
        type: AtsEmailType.Home,
      },
    ],
    externalId: "consequuntur",
    id: "3a45cefc-5fde-410a-8ce2-169e510019c6",
    imageUrl: "quibusdam",
    name: "Corey Walker",
    raw: {},
    tags: [
      "dignissimos",
    ],
    telephones: [
      {
        telephone: "laboriosam",
        type: AtsTelephoneType.Work,
      },
    ],
    title: "Ms.",
    updatedAt: new Date("2021-10-28T15:35:10.950Z"),
  },
  connectionId: "cum",
  id: "fbbe6949-fb2b-4b4e-8ae6-c3d5db3adebd",
}).then((res: PatchAtsConnectionIdCandidateIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UnifiedTo } from "Unified-to";
import { PostAtsConnectionIdCandidateResponse } from "Unified-to/dist/sdk/models/operations";
import { AtsEmailType, AtsTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.candidate.postAtsConnectionIdCandidate({
  atsCandidate: {
    address: {
      address1: "ad",
      address2: "facere",
      city: "Veumchester",
      country: "Faroe Islands",
      countryCode: "SI",
      postalCode: "03656",
      region: "est",
      regionCode: "occaecati",
    },
    companyName: "labore",
    createdAt: new Date("2022-12-10T16:31:33.706Z"),
    emails: [
      {
        email: "Green75@gmail.com",
        type: AtsEmailType.Other,
      },
    ],
    externalId: "nostrum",
    id: "e9d9a457-8adc-41ac-a00d-ec001ac802e2",
    imageUrl: "necessitatibus",
    name: "Jose Mante",
    raw: {},
    tags: [
      "laudantium",
    ],
    telephones: [
      {
        telephone: "maiores",
        type: AtsTelephoneType.Work,
      },
    ],
    title: "Dr.",
    updatedAt: new Date("2022-10-06T09:51:21.294Z"),
  },
  connectionId: "suscipit",
}).then((res: PostAtsConnectionIdCandidateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UnifiedTo } from "Unified-to";
import { PutAtsConnectionIdCandidateIdResponse } from "Unified-to/dist/sdk/models/operations";
import { AtsEmailType, AtsTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.candidate.putAtsConnectionIdCandidateId({
  atsCandidate: {
    address: {
      address1: "earum",
      address2: "doloribus",
      city: "West Jade",
      country: "Jersey",
      countryCode: "RO",
      postalCode: "28501",
      region: "impedit",
      regionCode: "beatae",
    },
    companyName: "incidunt",
    createdAt: new Date("2022-11-11T05:11:31.731Z"),
    emails: [
      {
        email: "Maybell.Abshire@yahoo.com",
        type: AtsEmailType.Work,
      },
    ],
    externalId: "id",
    id: "668151a4-72af-4923-8594-9f83f350cf87",
    imageUrl: "aliquid",
    name: "Tommie Rohan Sr.",
    raw: {},
    tags: [
      "minus",
    ],
    telephones: [
      {
        telephone: "commodi",
        type: AtsTelephoneType.Mobile,
      },
    ],
    title: "Miss",
    updatedAt: new Date("2021-08-12T13:33:07.290Z"),
  },
  connectionId: "modi",
  id: "e243cf78-9ffa-4fed-a53e-5ae6e0ac184c",
}).then((res: PutAtsConnectionIdCandidateIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PutAtsConnectionIdCandidateIdRequest](../../models/operations/putatsconnectionidcandidateidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PutAtsConnectionIdCandidateIdResponse](../../models/operations/putatsconnectionidcandidateidresponse.md)>**

