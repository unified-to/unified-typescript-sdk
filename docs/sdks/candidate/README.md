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
  connectionId: "multimedia",
  id: "<ID>",
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
  connectionId: "Northwest forceful Moore",
  limit: 2623.89,
  offset: 7811.91,
  order: "Mouse whether deploy",
  query: "pink",
  sort: "huzzah thistle",
  updatedGte: new Date("2022-03-13T15:14:03.645Z"),
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
  connectionId: "ha Loan",
  id: "<ID>",
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
      address1: "closely Goyette plus",
      address2: "culpa",
      city: "Darrinshire",
      country: "Mongolia",
      countryCode: "GW",
      postalCode: "05275",
      region: "TLS calculating",
      regionCode: "up Argon Internal",
    },
    companyName: "Fadel, Schulist and Koss",
    createdAt: new Date("2022-12-09T07:16:54.728Z"),
    emails: [
      {
        email: "Gregory63@gmail.com",
        type: AtsEmailType.Other,
      },
    ],
    externalId: "Elegant",
    id: "<ID>",
    imageUrl: "Tricycle Yttrium Hybrid",
    name: "ornery whether",
    raw: {},
    tags: [
      "Cadillac",
    ],
    telephones: [
      {
        telephone: "Marketing Cotton",
        type: AtsTelephoneType.Home,
      },
    ],
    title: "East",
    updatedAt: new Date("2023-10-31T11:53:36.953Z"),
  },
  connectionId: "redundant Tricycle unloose",
  id: "<ID>",
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
      address1: "incubate",
      address2: "azure Trans",
      city: "Port Rory",
      country: "El Salvador",
      countryCode: "CX",
      postalCode: "54222-0235",
      region: "modi fooey",
      regionCode: "Metal TCP incidunt",
    },
    companyName: "McCullough, Rosenbaum and Daugherty",
    createdAt: new Date("2023-02-07T05:55:59.357Z"),
    emails: [
      {
        email: "Eleanora.Rogahn44@hotmail.com",
        type: AtsEmailType.Home,
      },
    ],
    externalId: "South though",
    id: "<ID>",
    imageUrl: "Pants",
    name: "Raleigh",
    raw: {},
    tags: [
      "morph",
    ],
    telephones: [
      {
        telephone: "lavender Sedan Folk",
        type: AtsTelephoneType.Other,
      },
    ],
    title: "Savings panel",
    updatedAt: new Date("2022-02-09T15:32:35.578Z"),
  },
  connectionId: "Ngultrum red glean",
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
      address1: "archive",
      address2: "Specialist Kyat",
      city: "New Dennis",
      country: "Mauritius",
      countryCode: "TL",
      postalCode: "49105-9909",
      region: "copy olive",
      regionCode: "withdrawal cumque person",
    },
    companyName: "Kuhn and Sons",
    createdAt: new Date("2022-01-28T10:51:00.922Z"),
    emails: [
      {
        email: "Hester.Jenkins@gmail.com",
        type: AtsEmailType.Home,
      },
    ],
    externalId: "Loan EXE",
    id: "<ID>",
    imageUrl: "deliver executive RSS",
    name: "because aha black",
    raw: {},
    tags: [
      "program",
    ],
    telephones: [
      {
        telephone: "empower exit Pangender",
        type: AtsTelephoneType.Mobile,
      },
    ],
    title: "Corporate anenst Electronic",
    updatedAt: new Date("2022-03-30T08:00:53.284Z"),
  },
  connectionId: "Flerovium azure",
  id: "<ID>",
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

