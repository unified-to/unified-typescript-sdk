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
  connectionId: "deleniti",
  id: "b1d187b5-1eb5-4fd3-8bfe-03490cf20254",
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
  connectionId: "id",
  limit: 6080.08,
  offset: 3220.16,
  order: "unde",
  query: "consequatur",
  sort: "quaerat",
  updatedGte: new Date("2022-03-13T04:13:10.861Z"),
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
  connectionId: "distinctio",
  id: "462d6bc9-917f-498e-8792-b979a413d6a8",
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
      address1: "impedit",
      address2: "perspiciatis",
      city: "South Josianeberg",
      country: "Papua New Guinea",
      countryCode: "TG",
      postalCode: "40808-6577",
      region: "repellat",
      regionCode: "voluptatum",
    },
    createdAt: new Date("2021-04-22T20:59:04.118Z"),
    currency: "amet",
    department: "totam",
    division: "ex",
    emails: [
      {
        email: "Bennie_Langosh@gmail.com",
        type: CrmEmailType.Other,
      },
    ],
    id: "76c002fa-cb13-4ac2-8c81-43b866c575a1",
    imageUrl: "recusandae",
    languageLocale: "quia",
    name: "Carla Lubowitz",
    raw: {},
    telephones: [
      {
        telephone: "accusantium",
        type: CrmTelephoneType.Fax,
      },
    ],
    timezone: "accusamus",
    title: "Mrs.",
    updatedAt: new Date("2022-04-24T03:57:57.473Z"),
  },
  connectionId: "sit",
  id: "e8fbc48d-dc7e-469b-9351-0505014dca10",
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
  createdAt: new Date("2022-06-17T20:12:07.816Z"),
  email: "Candido.Hahn@yahoo.com",
  environment: "impedit",
  id: "36e94889-2782-4d34-a0b8-fc0d59f57b9f",
  meta: {},
  name: "Miss Ian Connelly",
  updatedAt: new Date("2022-07-09T07:24:05.365Z"),
  workspaceId: "deleniti",
  workspaceIds: [
    "aperiam",
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
      address1: "quos",
      address2: "maxime",
      city: "South Nestor",
      country: "Mongolia",
      countryCode: "TO",
      postalCode: "94023",
      region: "magnam",
      regionCode: "recusandae",
    },
    createdAt: new Date("2022-12-13T13:34:20.729Z"),
    currency: "maiores",
    department: "tempora",
    division: "reprehenderit",
    emails: [
      {
        email: "Stuart22@yahoo.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "483f748e-efcc-4b69-9541-b4b393f35666",
    imageUrl: "consequuntur",
    languageLocale: "quis",
    name: "Tomas Pacocha",
    raw: {},
    telephones: [
      {
        telephone: "consequuntur",
        type: CrmTelephoneType.Work,
      },
    ],
    timezone: "illo",
    title: "Dr.",
    updatedAt: new Date("2020-08-23T15:43:14.003Z"),
  },
  connectionId: "sequi",
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
      address1: "reprehenderit",
      address2: "sint",
      city: "Hintzfurt",
      country: "Martinique",
      countryCode: "TR",
      postalCode: "08257-3819",
      region: "omnis",
      regionCode: "itaque",
    },
    createdAt: new Date("2022-11-29T02:49:06.048Z"),
    currency: "fugiat",
    department: "provident",
    division: "voluptatem",
    emails: [
      {
        email: "Rosanna45@hotmail.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "6bfc7677-f0f5-404a-ae48-28fb6daee19c",
    imageUrl: "explicabo",
    languageLocale: "nisi",
    name: "Frank Ryan",
    raw: {},
    telephones: [
      {
        telephone: "quasi",
        type: CrmTelephoneType.Other,
      },
    ],
    timezone: "maxime",
    title: "Ms.",
    updatedAt: new Date("2022-10-11T03:37:06.147Z"),
  },
  connectionId: "vitae",
  id: "cabdab76-7a44-44dd-8da0-abe58eb3d54b",
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
  createdAt: new Date("2022-11-07T21:46:44.444Z"),
  email: "Melissa_Dooley30@hotmail.com",
  environment: "sint",
  id: "b8e5c18b-25e8-47f6-8823-255be95c0cbc",
  meta: {},
  name: "Billy Schmeler",
  updatedAt: new Date("2022-06-05T12:45:52.497Z"),
  workspaceId: "quae",
  workspaceIds: [
    "quos",
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

