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
  connectionId: "eos",
  id: "b9c247c8-8373-4a40-a194-2f32e5505575",
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
  connectionId: "nisi",
  dealId: "tenetur",
  id: "5d56d0bd-0af2-4dfe-93db-4f62cba3f894",
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
  connectionId: "quasi",
  contactId: "mollitia",
  dealId: "accusamus",
  limit: 6875.89,
  offset: 7691.56,
  order: "doloremque",
  query: "expedita",
  sort: "corrupti",
  updatedGte: new Date("2022-05-11T05:34:43.056Z"),
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
  connectionId: "aliquid",
  id: "924d3b2e-cfcc-48f8-9501-0f5dd3d6fa18",
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
  connectionId: "aperiam",
  domain: "non",
  name: "Derek Haag",
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
      address1: "consequuntur",
      address2: "maiores",
      city: "South Jonathanchester",
      country: "Cyprus",
      countryCode: "HU",
      postalCode: "75542",
      region: "recusandae",
      regionCode: "tempora",
    },
    createdAt: new Date("2022-06-26T14:48:08.360Z"),
    dealIds: [
      "sequi",
    ],
    emails: [
      {
        email: "Alejandrin94@yahoo.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "b8ca275a-60a0-44c4-95cc-699171b51c1b",
    name: "Johnathan Braun",
    raw: {},
    tags: [
      "labore",
    ],
    telephones: [
      {
        telephone: "expedita",
        type: CrmTelephoneType.Other,
      },
    ],
    updatedAt: new Date("2021-11-30T08:27:41.789Z"),
    websites: [
      "officiis",
    ],
  },
  connectionId: "cum",
  id: "dfc4ccca-99bc-47fc-8b2d-ce10873e42b0",
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
  connectionId: "voluptatem",
  dealId: "eum",
  id: "d678878b-a858-41a5-8208-c54fefa9c95f",
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
      address1: "quia",
      address2: "officiis",
      city: "Runolfsdottirborough",
      country: "Gambia",
      countryCode: "IR",
      postalCode: "82047",
      region: "asperiores",
      regionCode: "recusandae",
    },
    createdAt: new Date("2021-06-25T15:44:39.144Z"),
    dealIds: [
      "dicta",
    ],
    emails: [
      {
        email: "Albina.Hyatt53@gmail.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "3fa4a41c-480d-43f2-932a-f03102d514f4",
    name: "Loren Jakubowski IV",
    raw: {},
    tags: [
      "expedita",
    ],
    telephones: [
      {
        telephone: "hic",
        type: CrmTelephoneType.Other,
      },
    ],
    updatedAt: new Date("2022-11-06T17:51:41.197Z"),
    websites: [
      "beatae",
    ],
  },
  connectionId: "similique",
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
      address1: "ea",
      address2: "animi",
      city: "Fort Jeremie",
      country: "Kenya",
      countryCode: "NG",
      postalCode: "49928-2794",
      region: "ipsam",
      regionCode: "explicabo",
    },
    createdAt: new Date("2021-10-23T06:28:50.254Z"),
    dealIds: [
      "quis",
    ],
    emails: [
      {
        email: "Cyril10@hotmail.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "e3bb91c8-d975-4e0e-8419-d8f84f144f3e",
    name: "Joy Toy",
    raw: {},
    tags: [
      "cumque",
    ],
    telephones: [
      {
        telephone: "aliquam",
        type: CrmTelephoneType.Fax,
      },
    ],
    updatedAt: new Date("2022-05-12T12:30:36.705Z"),
    websites: [
      "reiciendis",
    ],
  },
  connectionId: "sequi",
  id: "cabd905a-972e-4056-b282-27b2d309470b",
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
  connectionId: "sapiente",
  dealId: "quam",
  id: "a4fa87cf-535a-46fa-a54e-bf60c321f023",
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

