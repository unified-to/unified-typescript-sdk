# Hris
(*hris*)

### Available Operations

* [deleteHrisConnectionIdEmployeeId](#deletehrisconnectionidemployeeid) - Remove a Employee
* [deleteHrisConnectionIdGroupId](#deletehrisconnectionidgroupid) - Remove a Group
* [getHrisConnectionIdEmployee](#gethrisconnectionidemployee) - List all Employees
* [getHrisConnectionIdEmployeeId](#gethrisconnectionidemployeeid) - Retrieve a Employee
* [getHrisConnectionIdGroup](#gethrisconnectionidgroup) - List all Groups
* [getHrisConnectionIdGroupId](#gethrisconnectionidgroupid) - Retrieve a Group
* [patchHrisConnectionIdEmployeeId](#patchhrisconnectionidemployeeid) - Update a Employee
* [patchHrisConnectionIdGroupId](#patchhrisconnectionidgroupid) - Update a Group
* [postHrisConnectionIdEmployee](#posthrisconnectionidemployee) - Create a Employee
* [postHrisConnectionIdGroup](#posthrisconnectionidgroup) - Create a Group
* [putHrisConnectionIdEmployeeId](#puthrisconnectionidemployeeid) - Update a Employee
* [putHrisConnectionIdGroupId](#puthrisconnectionidgroupid) - Update a Group

## deleteHrisConnectionIdEmployeeId

Remove a Employee

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteHrisConnectionIdEmployeeIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.hris.deleteHrisConnectionIdEmployeeId({
  connectionId: "Laredo turquoise port",
  id: "<ID>",
}).then((res: DeleteHrisConnectionIdEmployeeIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeleteHrisConnectionIdEmployeeIdRequest](../../models/operations/deletehrisconnectionidemployeeidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeleteHrisConnectionIdEmployeeIdResponse](../../models/operations/deletehrisconnectionidemployeeidresponse.md)>**


## deleteHrisConnectionIdGroupId

Remove a Group

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteHrisConnectionIdGroupIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.hris.deleteHrisConnectionIdGroupId({
  connectionId: "consequently platforms Metal",
  id: "<ID>",
}).then((res: DeleteHrisConnectionIdGroupIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.DeleteHrisConnectionIdGroupIdRequest](../../models/operations/deletehrisconnectionidgroupidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.DeleteHrisConnectionIdGroupIdResponse](../../models/operations/deletehrisconnectionidgroupidresponse.md)>**


## getHrisConnectionIdEmployee

List all Employees

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetHrisConnectionIdEmployeeResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.hris.getHrisConnectionIdEmployee({
  connectionId: "initiatives greedily project",
  limit: 1798.52,
  offset: 6683.19,
  order: "Sports",
  query: "TLS",
  sort: "Jazz Trans",
  updatedGte: new Date("2021-04-09T17:32:06.988Z"),
}).then((res: GetHrisConnectionIdEmployeeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetHrisConnectionIdEmployeeRequest](../../models/operations/gethrisconnectionidemployeerequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetHrisConnectionIdEmployeeResponse](../../models/operations/gethrisconnectionidemployeeresponse.md)>**


## getHrisConnectionIdEmployeeId

Retrieve a Employee

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetHrisConnectionIdEmployeeIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.hris.getHrisConnectionIdEmployeeId({
  connectionId: "Keyboard cleverly Rubber",
  id: "<ID>",
}).then((res: GetHrisConnectionIdEmployeeIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetHrisConnectionIdEmployeeIdRequest](../../models/operations/gethrisconnectionidemployeeidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetHrisConnectionIdEmployeeIdResponse](../../models/operations/gethrisconnectionidemployeeidresponse.md)>**


## getHrisConnectionIdGroup

List all Groups

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetHrisConnectionIdGroupResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.hris.getHrisConnectionIdGroup({
  connectionId: "Loan",
  limit: 3486.96,
  offset: 9705.73,
  order: "Coordinator",
  query: "World",
  sort: "Dollar",
  updatedGte: new Date("2021-01-15T16:06:13.340Z"),
}).then((res: GetHrisConnectionIdGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetHrisConnectionIdGroupRequest](../../models/operations/gethrisconnectionidgrouprequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetHrisConnectionIdGroupResponse](../../models/operations/gethrisconnectionidgroupresponse.md)>**


## getHrisConnectionIdGroupId

Retrieve a Group

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetHrisConnectionIdGroupIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.hris.getHrisConnectionIdGroupId({
  connectionId: "behind",
  id: "<ID>",
}).then((res: GetHrisConnectionIdGroupIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetHrisConnectionIdGroupIdRequest](../../models/operations/gethrisconnectionidgroupidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetHrisConnectionIdGroupIdResponse](../../models/operations/gethrisconnectionidgroupidresponse.md)>**


## patchHrisConnectionIdEmployeeId

Update a Employee

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchHrisConnectionIdEmployeeIdResponse } from "Unified-to/dist/sdk/models/operations";
import {
  HrisEmailType,
  HrisEmployeeEmploymentStatus,
  HrisEmployeeEmploymentType,
  HrisEmployeeGender,
  HrisEmployeeMaritalStatus,
  HrisTelephoneType,
} from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.hris.patchHrisConnectionIdEmployeeId({
  hrisEmployee: {
    address: {
      address1: "Tennessee virtual",
      address2: "Assurance forecast",
      city: "Baton Rouge",
      country: "Bahamas",
      countryCode: "TW",
      postalCode: "93632",
      region: "Bailey",
      regionCode: "navigating Oregon",
    },
    createdAt: new Date("2023-01-31T08:11:49.561Z"),
    dateOfBirth: new Date("2021-10-08T23:14:10.860Z"),
    department: "soupy web Robust",
    division: "Corporate loudly quantify",
    emails: [
      {
        email: "Wendy_Kovacek@hotmail.com",
        type: HrisEmailType.Other,
      },
    ],
    employeeNumber: "hydrate indigo transmit",
    employmentStatus: HrisEmployeeEmploymentStatus.Inactive,
    employmentType: HrisEmployeeEmploymentType.FullTime,
    gender: HrisEmployeeGender.Intersex,
    hiredAt: new Date("2021-07-20T11:37:42.486Z"),
    id: "<ID>",
    location: "withdrawal wonderfully",
    managerId: "molestias white Gainesville",
    maritalStatus: HrisEmployeeMaritalStatus.Married,
    name: "tensely technologies",
    raw: {},
    telephones: [
      {
        telephone: "Northeast Music Hassium",
        type: HrisTelephoneType.Mobile,
      },
    ],
    terminatedAt: new Date("2023-08-07T01:58:28.622Z"),
    title: "failing Southwest Kuhn",
    updatedAt: new Date("2023-05-18T01:32:56.083Z"),
  },
  connectionId: "South Money past",
  id: "<ID>",
}).then((res: PatchHrisConnectionIdEmployeeIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PatchHrisConnectionIdEmployeeIdRequest](../../models/operations/patchhrisconnectionidemployeeidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PatchHrisConnectionIdEmployeeIdResponse](../../models/operations/patchhrisconnectionidemployeeidresponse.md)>**


## patchHrisConnectionIdGroupId

Update a Group

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchHrisConnectionIdGroupIdResponse } from "Unified-to/dist/sdk/models/operations";
import { HrisGroupType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.hris.patchHrisConnectionIdGroupId({
  hrisGroup: {
    createdAt: new Date("2023-10-19T05:30:26.390Z"),
    description: "Stand-alone asymmetric orchestration",
    employeeIds: [
      "shootdown",
    ],
    id: "<ID>",
    isActive: false,
    managerIds: [
      "24/7",
    ],
    name: "Agender trainer",
    parentId: "Configuration Kids Sedan",
    raw: {},
    type: HrisGroupType.Division,
    updatedAt: new Date("2021-08-18T16:48:12.885Z"),
  },
  connectionId: "Intersex",
  id: "<ID>",
}).then((res: PatchHrisConnectionIdGroupIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PatchHrisConnectionIdGroupIdRequest](../../models/operations/patchhrisconnectionidgroupidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PatchHrisConnectionIdGroupIdResponse](../../models/operations/patchhrisconnectionidgroupidresponse.md)>**


## postHrisConnectionIdEmployee

Create a Employee

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostHrisConnectionIdEmployeeResponse } from "Unified-to/dist/sdk/models/operations";
import {
  HrisEmailType,
  HrisEmployeeEmploymentStatus,
  HrisEmployeeEmploymentType,
  HrisEmployeeGender,
  HrisEmployeeMaritalStatus,
  HrisTelephoneType,
} from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.hris.postHrisConnectionIdEmployee({
  hrisEmployee: {
    address: {
      address1: "Southeast ea withdrawal",
      address2: "Developer",
      city: "Grand Forks",
      country: "Cayman Islands",
      countryCode: "BM",
      postalCode: "63867-8134",
      region: "teal Northwest firewall",
      regionCode: "doubt Diesel COM",
    },
    createdAt: new Date("2022-09-25T20:39:21.870Z"),
    dateOfBirth: new Date("2022-04-06T20:53:56.362Z"),
    department: "payment mull",
    division: "Blues red",
    emails: [
      {
        email: "Jacquelyn8@hotmail.com",
        type: HrisEmailType.Work,
      },
    ],
    employeeNumber: "North Southeast",
    employmentStatus: HrisEmployeeEmploymentStatus.Inactive,
    employmentType: HrisEmployeeEmploymentType.Volunteer,
    gender: HrisEmployeeGender.Intersex,
    hiredAt: new Date("2021-03-26T14:20:42.258Z"),
    id: "<ID>",
    location: "East",
    managerId: "Maserati",
    maritalStatus: HrisEmployeeMaritalStatus.Single,
    name: "Xenogender copy",
    raw: {},
    telephones: [
      {
        telephone: "hmph",
        type: HrisTelephoneType.Work,
      },
    ],
    terminatedAt: new Date("2022-08-16T03:13:22.861Z"),
    title: "Regional synthesize",
    updatedAt: new Date("2022-06-15T02:35:02.446Z"),
  },
  connectionId: "past",
}).then((res: PostHrisConnectionIdEmployeeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PostHrisConnectionIdEmployeeRequest](../../models/operations/posthrisconnectionidemployeerequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PostHrisConnectionIdEmployeeResponse](../../models/operations/posthrisconnectionidemployeeresponse.md)>**


## postHrisConnectionIdGroup

Create a Group

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostHrisConnectionIdGroupResponse } from "Unified-to/dist/sdk/models/operations";
import { HrisGroupType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.hris.postHrisConnectionIdGroup({
  hrisGroup: {
    createdAt: new Date("2021-02-23T15:35:38.483Z"),
    description: "Configurable stable product",
    employeeIds: [
      "Auto",
    ],
    id: "<ID>",
    isActive: false,
    managerIds: [
      "JSON",
    ],
    name: "whereas Usability transmitting",
    parentId: "invoice Cyclocross Electric",
    raw: {},
    type: HrisGroupType.Group,
    updatedAt: new Date("2021-04-30T12:40:50.129Z"),
  },
  connectionId: "Hybrid Schenectady",
}).then((res: PostHrisConnectionIdGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PostHrisConnectionIdGroupRequest](../../models/operations/posthrisconnectionidgrouprequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PostHrisConnectionIdGroupResponse](../../models/operations/posthrisconnectionidgroupresponse.md)>**


## putHrisConnectionIdEmployeeId

Update a Employee

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutHrisConnectionIdEmployeeIdResponse } from "Unified-to/dist/sdk/models/operations";
import {
  HrisEmailType,
  HrisEmployeeEmploymentStatus,
  HrisEmployeeEmploymentType,
  HrisEmployeeGender,
  HrisEmployeeMaritalStatus,
  HrisTelephoneType,
} from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.hris.putHrisConnectionIdEmployeeId({
  hrisEmployee: {
    address: {
      address1: "Northwest",
      address2: "and",
      city: "Uniquefield",
      country: "Virgin Islands, British",
      countryCode: "AE",
      postalCode: "41682",
      region: "Adventure Avon",
      regionCode: "bah South",
    },
    createdAt: new Date("2023-07-18T13:59:47.040Z"),
    dateOfBirth: new Date("2022-04-19T17:38:57.783Z"),
    department: "West auxiliary",
    division: "volt",
    emails: [
      {
        email: "Kenton_Turcotte@gmail.com",
        type: HrisEmailType.Home,
      },
    ],
    employeeNumber: "DNS coulomb Berkshire",
    employmentStatus: HrisEmployeeEmploymentStatus.Active,
    employmentType: HrisEmployeeEmploymentType.Casual,
    gender: HrisEmployeeGender.Female,
    hiredAt: new Date("2022-10-08T23:22:26.211Z"),
    id: "<ID>",
    location: "East primary",
    managerId: "Tokelau",
    maritalStatus: HrisEmployeeMaritalStatus.Married,
    name: "Bespoke Investment",
    raw: {},
    telephones: [
      {
        telephone: "East Investment",
        type: HrisTelephoneType.Other,
      },
    ],
    terminatedAt: new Date("2022-03-28T08:29:30.386Z"),
    title: "unless",
    updatedAt: new Date("2022-06-29T10:38:14.570Z"),
  },
  connectionId: "Designer Tennessine",
  id: "<ID>",
}).then((res: PutHrisConnectionIdEmployeeIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PutHrisConnectionIdEmployeeIdRequest](../../models/operations/puthrisconnectionidemployeeidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PutHrisConnectionIdEmployeeIdResponse](../../models/operations/puthrisconnectionidemployeeidresponse.md)>**


## putHrisConnectionIdGroupId

Update a Group

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutHrisConnectionIdGroupIdResponse } from "Unified-to/dist/sdk/models/operations";
import { HrisGroupType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.hris.putHrisConnectionIdGroupId({
  hrisGroup: {
    createdAt: new Date("2022-08-10T12:11:42.375Z"),
    description: "Decentralized methodical projection",
    employeeIds: [
      "Credit",
    ],
    id: "<ID>",
    isActive: false,
    managerIds: [
      "South",
    ],
    name: "Jeep brr Northwest",
    parentId: "quickly Licensed",
    raw: {},
    type: HrisGroupType.BusinessUnit,
    updatedAt: new Date("2021-11-08T00:11:45.458Z"),
  },
  connectionId: "vortals interface Gasoline",
  id: "<ID>",
}).then((res: PutHrisConnectionIdGroupIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PutHrisConnectionIdGroupIdRequest](../../models/operations/puthrisconnectionidgroupidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PutHrisConnectionIdGroupIdResponse](../../models/operations/puthrisconnectionidgroupidresponse.md)>**

