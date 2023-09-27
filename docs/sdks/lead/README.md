# Lead
(*lead*)

### Available Operations

* [deleteCrmConnectionIdLeadId](#deletecrmconnectionidleadid) - Remove a lead
* [getCrmConnectionIdLead](#getcrmconnectionidlead) - List all leads
* [getCrmConnectionIdLeadId](#getcrmconnectionidleadid) - Retrieve a lead
* [patchCrmConnectionIdLeadId](#patchcrmconnectionidleadid) - Update a lead
* [postCrmConnectionIdLead](#postcrmconnectionidlead) - Create a lead
* [putCrmConnectionIdLeadId](#putcrmconnectionidleadid) - Update a lead

## deleteCrmConnectionIdLeadId

Remove a lead

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdLeadIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.lead.deleteCrmConnectionIdLeadId({
  connectionId: "totam",
  id: "6c3ae7d7-b67f-4eef-9e14-2d95b1dbecef",
}).then((res: DeleteCrmConnectionIdLeadIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteCrmConnectionIdLeadIdRequest](../../models/operations/deletecrmconnectionidleadidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteCrmConnectionIdLeadIdResponse](../../models/operations/deletecrmconnectionidleadidresponse.md)>**


## getCrmConnectionIdLead

List all leads

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdLeadResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.lead.getCrmConnectionIdLead({
  connectionId: "voluptatibus",
  limit: 4809.57,
  offset: 7789.75,
  order: "non",
  query: "tempore",
  sort: "quae",
  updatedGte: new Date("2022-08-03T04:30:42.588Z"),
}).then((res: GetCrmConnectionIdLeadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCrmConnectionIdLeadRequest](../../models/operations/getcrmconnectionidleadrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCrmConnectionIdLeadResponse](../../models/operations/getcrmconnectionidleadresponse.md)>**


## getCrmConnectionIdLeadId

Retrieve a lead

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdLeadIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.lead.getCrmConnectionIdLeadId({
  connectionId: "itaque",
  id: "9278275e-ea76-4817-8680-63f799b7956c",
}).then((res: GetCrmConnectionIdLeadIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCrmConnectionIdLeadIdRequest](../../models/operations/getcrmconnectionidleadidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCrmConnectionIdLeadIdResponse](../../models/operations/getcrmconnectionidleadidresponse.md)>**


## patchCrmConnectionIdLeadId

Update a lead

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdLeadIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.lead.patchCrmConnectionIdLeadId({
  crmLead: {
    active: false,
    address: {
      address1: "quae",
      address2: "quidem",
      city: "Fort Maddisontown",
      country: "Paraguay",
      countryCode: "PY",
      postalCode: "06209",
      region: "reprehenderit",
      regionCode: "quo",
    },
    companyId: "incidunt",
    contactId: "id",
    createdAt: new Date("2021-10-20T07:58:35.149Z"),
    creatorUserId: "quaerat",
    emails: [
      {
        email: "Giovanni48@gmail.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "657b01a0-7c08-4fd3-921c-257930d6f093",
    name: "Earl Towne",
    raw: {},
    telephones: [
      {
        telephone: "aliquam",
        type: CrmTelephoneType.Home,
      },
    ],
    updatedAt: new Date("2022-04-13T09:05:51.677Z"),
    userId: "autem",
  },
  connectionId: "ea",
  id: "dfa1011a-091b-43ec-8b53-862de1a9d14f",
}).then((res: PatchCrmConnectionIdLeadIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchCrmConnectionIdLeadIdRequest](../../models/operations/patchcrmconnectionidleadidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchCrmConnectionIdLeadIdResponse](../../models/operations/patchcrmconnectionidleadidresponse.md)>**


## postCrmConnectionIdLead

Create a lead

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdLeadResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.lead.postCrmConnectionIdLead({
  crmLead: {
    active: false,
    address: {
      address1: "debitis",
      address2: "reprehenderit",
      city: "Fort Fritzville",
      country: "Bangladesh",
      countryCode: "ZA",
      postalCode: "02028-9722",
      region: "laudantium",
      regionCode: "velit",
    },
    companyId: "natus",
    contactId: "molestiae",
    createdAt: new Date("2020-03-03T18:07:31.494Z"),
    creatorUserId: "hic",
    emails: [
      {
        email: "Hanna86@yahoo.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "2090fc15-7ac9-4fe1-961c-e9be41c869dd",
    name: "Rosemarie Moen V",
    raw: {},
    telephones: [
      {
        telephone: "repellendus",
        type: CrmTelephoneType.Work,
      },
    ],
    updatedAt: new Date("2022-04-24T12:06:20.344Z"),
    userId: "odit",
  },
  connectionId: "aut",
}).then((res: PostCrmConnectionIdLeadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostCrmConnectionIdLeadRequest](../../models/operations/postcrmconnectionidleadrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostCrmConnectionIdLeadResponse](../../models/operations/postcrmconnectionidleadresponse.md)>**


## putCrmConnectionIdLeadId

Update a lead

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdLeadIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.lead.putCrmConnectionIdLeadId({
  crmLead: {
    active: false,
    address: {
      address1: "eaque",
      address2: "deserunt",
      city: "New Vito",
      country: "Uruguay",
      countryCode: "ST",
      postalCode: "63489",
      region: "laudantium",
      regionCode: "sapiente",
    },
    companyId: "facere",
    contactId: "laudantium",
    createdAt: new Date("2022-09-11T02:42:21.444Z"),
    creatorUserId: "fuga",
    emails: [
      {
        email: "Shannon73@yahoo.com",
        type: CrmEmailType.Other,
      },
    ],
    id: "620cd9c5-afdd-404c-b752-512beae1d87e",
    name: "Roosevelt Hessel",
    raw: {},
    telephones: [
      {
        telephone: "quod",
        type: CrmTelephoneType.Mobile,
      },
    ],
    updatedAt: new Date("2021-12-04T00:59:07.070Z"),
    userId: "eveniet",
  },
  connectionId: "molestiae",
  id: "a8831166-2cda-46d7-bc1d-86066237d422",
}).then((res: PutCrmConnectionIdLeadIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PutCrmConnectionIdLeadIdRequest](../../models/operations/putcrmconnectionidleadidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PutCrmConnectionIdLeadIdResponse](../../models/operations/putcrmconnectionidleadidresponse.md)>**

