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
  connectionId: "Senior azure",
  id: "<ID>",
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
  connectionId: "Computer Hop",
  limit: 7411.81,
  offset: 9004.32,
  order: "Operations candela Integration",
  query: "impactful transform",
  sort: "Tala defense Southwest",
  updatedGte: new Date("2021-09-29T00:37:32.184Z"),
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
  connectionId: "users Minnesota Bypass",
  id: "<ID>",
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
      address1: "Cambridgeshire",
      address2: "Oriental farad male",
      city: "D'Amorebury",
      country: "Reunion",
      countryCode: "UY",
      postalCode: "87017-9001",
      region: "Buckinghamshire Electric",
      regionCode: "South gee",
    },
    companyId: "Gasoline conglomeration Tennessine",
    contactId: "grow hub",
    createdAt: new Date("2023-06-09T15:23:12.644Z"),
    creatorUserId: "voluptates",
    emails: [
      {
        email: "Jeffrey.Denesik52@yahoo.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "<ID>",
    name: "whiteboard lumen",
    raw: {},
    telephones: [
      {
        telephone: "Cheese before against",
        type: CrmTelephoneType.Fax,
      },
    ],
    updatedAt: new Date("2022-07-12T14:19:50.007Z"),
    userId: "Games yellow Towels",
  },
  connectionId: "brr misuse",
  id: "<ID>",
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
      address1: "XSS Country knowledge",
      address2: "structure",
      city: "Giovaniton",
      country: "Ghana",
      countryCode: "CO",
      postalCode: "34495-0585",
      region: "Modern",
      regionCode: "Diesel",
    },
    companyId: "yuppify",
    contactId: "demanding scratch male",
    createdAt: new Date("2023-03-07T11:22:05.657Z"),
    creatorUserId: "masticate South",
    emails: [
      {
        email: "Gregorio37@gmail.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "<ID>",
    name: "Granite Tools",
    raw: {},
    telephones: [
      {
        telephone: "Hassium Balanced male",
        type: CrmTelephoneType.Work,
      },
    ],
    updatedAt: new Date("2021-06-26T11:56:58.926Z"),
    userId: "Consultant",
  },
  connectionId: "solutions gosh",
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
      address1: "Extension",
      address2: "supposing Dorado Assistant",
      city: "South Gate",
      country: "Reunion",
      countryCode: "IS",
      postalCode: "73732-2192",
      region: "JBOD phew",
      regionCode: "Southeast Framingham female",
    },
    companyId: "deposit male",
    contactId: "bunch edge",
    createdAt: new Date("2021-04-03T18:08:02.798Z"),
    creatorUserId: "East Panama",
    emails: [
      {
        email: "Jamal20@yahoo.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "<ID>",
    name: "pianist",
    raw: {},
    telephones: [
      {
        telephone: "caricature female",
        type: CrmTelephoneType.Home,
      },
    ],
    updatedAt: new Date("2022-08-09T07:11:50.077Z"),
    userId: "Designer Folding",
  },
  connectionId: "Lanthanum wink Regional",
  id: "<ID>",
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

