# Company
(*company*)

### Available Operations

* [deleteCrmConnectionIdCompanyId](#deletecrmconnectionidcompanyid) - Remove a company
* [deleteCrmConnectionIdCompanyIdDealDealId](#deletecrmconnectionidcompanyiddealdealid) - Remove deal association from a company
* [getCrmConnectionIdCompany](#getcrmconnectionidcompany) - List all companies
* [getCrmConnectionIdCompanyId](#getcrmconnectionidcompanyid) - Retrieve a company
* [getEnrichConnectionIdCompany](#getenrichconnectionidcompany) - Retrieve enrichment information for a company
* [patchCrmConnectionIdCompanyId](#patchcrmconnectionidcompanyid) - Update a company
* [patchCrmConnectionIdCompanyIdDealDealId](#patchcrmconnectionidcompanyiddealdealid) - Associate a deal with a company
* [postCrmConnectionIdCompany](#postcrmconnectionidcompany) - Create a company
* [putCrmConnectionIdCompanyId](#putcrmconnectionidcompanyid) - Update a company
* [putCrmConnectionIdCompanyIdDealDealId](#putcrmconnectionidcompanyiddealdealid) - Associate a deal with a company

## deleteCrmConnectionIdCompanyId

Remove a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.company.deleteCrmConnectionIdCompanyId({
  connectionId: "hertz morph",
  id: "<ID>",
}).then((res: DeleteCrmConnectionIdCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeleteCrmConnectionIdCompanyIdRequest](../../models/operations/deletecrmconnectionidcompanyidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeleteCrmConnectionIdCompanyIdResponse](../../models/operations/deletecrmconnectionidcompanyidresponse.md)>**


## deleteCrmConnectionIdCompanyIdDealDealId

Remove deal association from a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdCompanyIdDealDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.company.deleteCrmConnectionIdCompanyIdDealDealId({
  connectionId: "Carolina",
  dealId: "Technician",
  id: "<ID>",
}).then((res: DeleteCrmConnectionIdCompanyIdDealDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.DeleteCrmConnectionIdCompanyIdDealDealIdRequest](../../models/operations/deletecrmconnectionidcompanyiddealdealidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.DeleteCrmConnectionIdCompanyIdDealDealIdResponse](../../models/operations/deletecrmconnectionidcompanyiddealdealidresponse.md)>**


## getCrmConnectionIdCompany

List all companies

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdCompanyResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.company.getCrmConnectionIdCompany({
  connectionId: "indexing",
  contactId: "Porsche firewall",
  dealId: "Hafnium Computers",
  limit: 902.85,
  offset: 2893.88,
  order: "Interactions relationships juxtapose",
  query: "newton Luxembourg",
  sort: "Dakota quantifying Actinium",
  updatedGte: new Date("2022-09-27T07:42:48.074Z"),
}).then((res: GetCrmConnectionIdCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetCrmConnectionIdCompanyRequest](../../models/operations/getcrmconnectionidcompanyrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetCrmConnectionIdCompanyResponse](../../models/operations/getcrmconnectionidcompanyresponse.md)>**


## getCrmConnectionIdCompanyId

Retrieve a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.company.getCrmConnectionIdCompanyId({
  connectionId: "Netherlands",
  id: "<ID>",
}).then((res: GetCrmConnectionIdCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetCrmConnectionIdCompanyIdRequest](../../models/operations/getcrmconnectionidcompanyidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetCrmConnectionIdCompanyIdResponse](../../models/operations/getcrmconnectionidcompanyidresponse.md)>**


## getEnrichConnectionIdCompany

Retrieve enrichment information for a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetEnrichConnectionIdCompanyResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.company.getEnrichConnectionIdCompany({
  connectionId: "female Computers Central",
  domain: "scientific-facet.biz",
  name: "Outdoors embrace interface",
}).then((res: GetEnrichConnectionIdCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetEnrichConnectionIdCompanyRequest](../../models/operations/getenrichconnectionidcompanyrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetEnrichConnectionIdCompanyResponse](../../models/operations/getenrichconnectionidcompanyresponse.md)>**


## patchCrmConnectionIdCompanyId

Update a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.company.patchCrmConnectionIdCompanyId({
  crmCompany: {
    active: false,
    address: {
      address1: "invoice",
      address2: "indexing Ford",
      city: "McAllen",
      country: "Netherlands",
      countryCode: "PF",
      postalCode: "93486",
      region: "Steel impactful",
      regionCode: "Dong",
    },
    createdAt: new Date("2023-07-25T08:43:38.995Z"),
    dealIds: [
      "usefully",
    ],
    emails: [
      {
        email: "Annabel31@gmail.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "<ID>",
    name: "Toys Vermont Astatine",
    raw: {},
    tags: [
      "Trigender",
    ],
    telephones: [
      {
        telephone: "female",
        type: CrmTelephoneType.Home,
      },
    ],
    updatedAt: new Date("2021-12-22T11:39:56.432Z"),
    websites: [
      "Latin",
    ],
  },
  connectionId: "North kilogram connecting",
  id: "<ID>",
}).then((res: PatchCrmConnectionIdCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PatchCrmConnectionIdCompanyIdRequest](../../models/operations/patchcrmconnectionidcompanyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PatchCrmConnectionIdCompanyIdResponse](../../models/operations/patchcrmconnectionidcompanyidresponse.md)>**


## patchCrmConnectionIdCompanyIdDealDealId

Associate a deal with a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdCompanyIdDealDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.company.patchCrmConnectionIdCompanyIdDealDealId({
  connectionId: "virtual BMX Tuna",
  dealId: "frightened quia generating",
  id: "<ID>",
}).then((res: PatchCrmConnectionIdCompanyIdDealDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.PatchCrmConnectionIdCompanyIdDealDealIdRequest](../../models/operations/patchcrmconnectionidcompanyiddealdealidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.PatchCrmConnectionIdCompanyIdDealDealIdResponse](../../models/operations/patchcrmconnectionidcompanyiddealdealidresponse.md)>**


## postCrmConnectionIdCompany

Create a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdCompanyResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.company.postCrmConnectionIdCompany({
  crmCompany: {
    active: false,
    address: {
      address1: "consequently gosh",
      address2: "phooey",
      city: "Antonettaville",
      country: "Lebanon",
      countryCode: "SI",
      postalCode: "79462",
      region: "orchid Oxygen Kids",
      regionCode: "Electric utilisation",
    },
    createdAt: new Date("2021-10-01T08:46:18.197Z"),
    dealIds: [
      "Tennessee",
    ],
    emails: [
      {
        email: "Jaida.McDermott26@yahoo.com",
        type: CrmEmailType.Other,
      },
    ],
    id: "<ID>",
    name: "Hydrogen Wooden",
    raw: {},
    tags: [
      "CSS",
    ],
    telephones: [
      {
        telephone: "Account invoice",
        type: CrmTelephoneType.Mobile,
      },
    ],
    updatedAt: new Date("2021-09-12T17:31:24.634Z"),
    websites: [
      "Intuitive",
    ],
  },
  connectionId: "Gasoline",
}).then((res: PostCrmConnectionIdCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PostCrmConnectionIdCompanyRequest](../../models/operations/postcrmconnectionidcompanyrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PostCrmConnectionIdCompanyResponse](../../models/operations/postcrmconnectionidcompanyresponse.md)>**


## putCrmConnectionIdCompanyId

Update a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.company.putCrmConnectionIdCompanyId({
  crmCompany: {
    active: false,
    address: {
      address1: "Northwest Northwest",
      address2: "portals Diesel",
      city: "Azusa",
      country: "Qatar",
      countryCode: "CG",
      postalCode: "52396",
      region: "Tuna sticky lest",
      regionCode: "Soft boo Missoula",
    },
    createdAt: new Date("2022-05-14T19:17:30.970Z"),
    dealIds: [
      "Hybrid",
    ],
    emails: [
      {
        email: "Vance_Cruickshank93@gmail.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "<ID>",
    name: "lest Northwest",
    raw: {},
    tags: [
      "East",
    ],
    telephones: [
      {
        telephone: "Bronze round",
        type: CrmTelephoneType.Mobile,
      },
    ],
    updatedAt: new Date("2022-02-21T09:41:36.696Z"),
    websites: [
      "Keyboard",
    ],
  },
  connectionId: "orange Bespoke",
  id: "<ID>",
}).then((res: PutCrmConnectionIdCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PutCrmConnectionIdCompanyIdRequest](../../models/operations/putcrmconnectionidcompanyidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PutCrmConnectionIdCompanyIdResponse](../../models/operations/putcrmconnectionidcompanyidresponse.md)>**


## putCrmConnectionIdCompanyIdDealDealId

Associate a deal with a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdCompanyIdDealDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.company.putCrmConnectionIdCompanyIdDealDealId({
  connectionId: "Hybrid Mississippi Savings",
  dealId: "West Hill Woman",
  id: "<ID>",
}).then((res: PutCrmConnectionIdCompanyIdDealDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PutCrmConnectionIdCompanyIdDealDealIdRequest](../../models/operations/putcrmconnectionidcompanyiddealdealidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PutCrmConnectionIdCompanyIdDealDealIdResponse](../../models/operations/putcrmconnectionidcompanyiddealdealidresponse.md)>**

