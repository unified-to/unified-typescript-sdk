# User
(*user*)

### Available Operations

* [deleteCrmConnectionIdUserId](#deletecrmconnectioniduserid) - Remove a user
* [deleteUnifiedUser](#deleteunifieduser) - Delete your user object
* [getCrmConnectionIdUser](#getcrmconnectioniduser) - List all users
* [getCrmConnectionIdUserId](#getcrmconnectioniduserid) - Retrieve a user
* [getUnifiedUser](#getunifieduser) - Retrieve your user object
* [getUnifiedUserToken](#getunifiedusertoken) - Retrieve your user token
* [patchCrmConnectionIdUserId](#patchcrmconnectioniduserid) - Update a user
* [patchUnifiedUser](#patchunifieduser) - Updates your user object
* [postCrmConnectionIdUser](#postcrmconnectioniduser) - Create a user
* [putCrmConnectionIdUserId](#putcrmconnectioniduserid) - Update a user
* [putUnifiedUser](#putunifieduser) - Updates your user object

## deleteCrmConnectionIdUserId

Remove a user

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdUserIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.user.deleteCrmConnectionIdUserId({
  connectionId: "Intranet Data",
  id: "<ID>",
}).then((res: DeleteCrmConnectionIdUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteCrmConnectionIdUserIdRequest](../../models/operations/deletecrmconnectioniduseridrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteCrmConnectionIdUserIdResponse](../../models/operations/deletecrmconnectioniduseridresponse.md)>**


## deleteUnifiedUser

Delete your user object

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteUnifiedUserResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.user.deleteUnifiedUser().then((res: DeleteUnifiedUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteUnifiedUserResponse](../../models/operations/deleteunifieduserresponse.md)>**


## getCrmConnectionIdUser

List all users

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdUserResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.user.getCrmConnectionIdUser({
  connectionId: "suit Electronic Tampa",
  limit: 2883.34,
  offset: 8886.55,
  order: "despite",
  query: "frightfully Fitness",
  sort: "success servant",
  updatedGte: new Date("2023-02-23T05:53:04.259Z"),
}).then((res: GetCrmConnectionIdUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCrmConnectionIdUserRequest](../../models/operations/getcrmconnectioniduserrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCrmConnectionIdUserResponse](../../models/operations/getcrmconnectioniduserresponse.md)>**


## getCrmConnectionIdUserId

Retrieve a user

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdUserIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.user.getCrmConnectionIdUserId({
  connectionId: "connecting Program",
  id: "<ID>",
}).then((res: GetCrmConnectionIdUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCrmConnectionIdUserIdRequest](../../models/operations/getcrmconnectioniduseridrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCrmConnectionIdUserIdResponse](../../models/operations/getcrmconnectioniduseridresponse.md)>**


## getUnifiedUser

Retrieve your user object

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUnifiedUserResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.user.getUnifiedUser().then((res: GetUnifiedUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetUnifiedUserResponse](../../models/operations/getunifieduserresponse.md)>**


## getUnifiedUserToken

Retrieve your user token

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUnifiedUserTokenResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.user.getUnifiedUserToken().then((res: GetUnifiedUserTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetUnifiedUserTokenResponse](../../models/operations/getunifiedusertokenresponse.md)>**


## patchCrmConnectionIdUserId

Update a user

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdUserIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.user.patchCrmConnectionIdUserId({
  crmUser: {
    active: false,
    address: {
      address1: "Customer",
      address2: "violet groupware blanditiis",
      city: "South Phoebeshire",
      country: "Thailand",
      countryCode: "NO",
      postalCode: "30801-4594",
      region: "portals Vanadium",
      regionCode: "Future",
    },
    createdAt: new Date("2023-01-04T02:42:28.788Z"),
    currency: "Guinea Franc",
    department: "Gloves global rosin",
    division: "Berkshire Europium",
    emails: [
      {
        email: "Wade.Dach@gmail.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "<ID>",
    imageUrl: "Checking",
    languageLocale: "Sedan Porsche matrix",
    name: "superstructure Nissan sedately",
    raw: {},
    telephones: [
      {
        telephone: "unto ubiquitous input",
        type: CrmTelephoneType.Mobile,
      },
    ],
    timezone: "America/Tijuana",
    title: "Computer Bicycle",
    updatedAt: new Date("2021-12-13T16:36:33.886Z"),
  },
  connectionId: "gold generating",
  id: "<ID>",
}).then((res: PatchCrmConnectionIdUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchCrmConnectionIdUserIdRequest](../../models/operations/patchcrmconnectioniduseridrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchCrmConnectionIdUserIdResponse](../../models/operations/patchcrmconnectioniduseridresponse.md)>**


## patchUnifiedUser

Only the name field is updated.

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchUnifiedUserResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.user.patchUnifiedUser({
  createdAt: new Date("2022-04-24T15:25:24.483Z"),
  email: "Emmalee.Quitzon@yahoo.com",
  environment: "Bicycle",
  id: "<ID>",
  meta: {},
  name: "vice compressing",
  updatedAt: new Date("2023-05-05T16:52:20.023Z"),
  workspaceId: "Hybrid methodologies",
  workspaceIds: [
    "Potassium",
  ],
}).then((res: PatchUnifiedUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User](../../models/shared/user.md)                   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PatchUnifiedUserResponse](../../models/operations/patchunifieduserresponse.md)>**


## postCrmConnectionIdUser

Create a user

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdUserResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.user.postCrmConnectionIdUser({
  crmUser: {
    active: false,
    address: {
      address1: "driver East",
      address2: "relationships Computer navigate",
      city: "Homestead",
      country: "Cayman Islands",
      countryCode: "BW",
      postalCode: "34958",
      region: "South",
      regionCode: "morph an colossal",
    },
    createdAt: new Date("2021-02-02T08:27:21.693Z"),
    currency: "Cayman Islands Dollar",
    department: "um",
    division: "West sievert generating",
    emails: [
      {
        email: "Jadon_Schumm45@gmail.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "<ID>",
    imageUrl: "radian Borders Southeast",
    languageLocale: "Silicon Awesome Industrial",
    name: "Mouse Accounts",
    raw: {},
    telephones: [
      {
        telephone: "ohm Southeast ROI",
        type: CrmTelephoneType.Mobile,
      },
    ],
    timezone: "Europe/Bratislava",
    title: "Money",
    updatedAt: new Date("2023-12-09T10:24:50.054Z"),
  },
  connectionId: "competent calculate",
}).then((res: PostCrmConnectionIdUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostCrmConnectionIdUserRequest](../../models/operations/postcrmconnectioniduserrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostCrmConnectionIdUserResponse](../../models/operations/postcrmconnectioniduserresponse.md)>**


## putCrmConnectionIdUserId

Update a user

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdUserIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.user.putCrmConnectionIdUserId({
  crmUser: {
    active: false,
    address: {
      address1: "Honduras",
      address2: "Oxygen Libyan Burundi",
      city: "North Gertrudefield",
      country: "Belgium",
      countryCode: "DK",
      postalCode: "00781",
      region: "Wagon",
      regionCode: "how overriding",
    },
    createdAt: new Date("2023-03-13T00:47:15.649Z"),
    currency: "Pakistan Rupee",
    department: "Tricycle vaguely",
    division: "Severn bluetooth Argon",
    emails: [
      {
        email: "Karl_Stehr4@hotmail.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "<ID>",
    imageUrl: "AGP romance didactic",
    languageLocale: "ROI Polarised",
    name: "olive synthesizing",
    raw: {},
    telephones: [
      {
        telephone: "Honda Indiana",
        type: CrmTelephoneType.Fax,
      },
    ],
    timezone: "Asia/Novosibirsk",
    title: "compelling red compressing",
    updatedAt: new Date("2022-09-03T15:59:05.095Z"),
  },
  connectionId: "relationships",
  id: "<ID>",
}).then((res: PutCrmConnectionIdUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PutCrmConnectionIdUserIdRequest](../../models/operations/putcrmconnectioniduseridrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PutCrmConnectionIdUserIdResponse](../../models/operations/putcrmconnectioniduseridresponse.md)>**


## putUnifiedUser

Only the name field is updated.

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutUnifiedUserResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.user.putUnifiedUser({
  createdAt: new Date("2023-07-31T04:46:29.769Z"),
  email: "Selena59@yahoo.com",
  environment: "Bedfordshire Lucia",
  id: "<ID>",
  meta: {},
  name: "Bicycle hacking South",
  updatedAt: new Date("2023-03-15T15:08:26.238Z"),
  workspaceId: "Card defect",
  workspaceIds: [
    "repudiandae",
  ],
}).then((res: PutUnifiedUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User](../../models/shared/user.md)                   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PutUnifiedUserResponse](../../models/operations/putunifieduserresponse.md)>**

