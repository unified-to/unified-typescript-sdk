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
  connectionId: "excepturi",
  id: "3e34316c-f55b-4431-b553-ccf1c204c4ad",
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
  connectionId: "quod",
  id: "c9904c51-95b8-4648-8efa-78f1e2d3b901",
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
  connectionId: "saepe",
  limit: 289.94,
  offset: 5725.89,
  order: "corporis",
  query: "explicabo",
  sort: "distinctio",
  updatedGte: new Date("2021-08-12T22:16:16.253Z"),
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
  connectionId: "tempora",
  id: "cbb19f71-3d95-4a41-a9c1-387271e18ea9",
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
  connectionId: "debitis",
  limit: 2501.58,
  offset: 3333.54,
  order: "illo",
  query: "illo",
  sort: "deleniti",
  updatedGte: new Date("2022-07-26T10:34:40.123Z"),
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
  connectionId: "optio",
  id: "c57fbd60-b1a7-48ed-a9a9-d4eea85658c2",
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
      address1: "at",
      address2: "modi",
      city: "Findlay",
      country: "Saint Martin",
      countryCode: "LI",
      postalCode: "69291-4598",
      region: "unde",
      regionCode: "autem",
    },
    createdAt: new Date("2022-07-11T08:13:45.102Z"),
    dateOfBirth: new Date("2022-02-18T07:36:00.073Z"),
    department: "autem",
    division: "placeat",
    emails: [
      {
        email: "Blaze97@yahoo.com",
        type: HrisEmailType.Other,
      },
    ],
    employeeNumber: "id",
    employmentStatus: HrisEmployeeEmploymentStatus.Inactive,
    employmentType: HrisEmployeeEmploymentType.Intern,
    gender: HrisEmployeeGender.Intersex,
    hiredAt: new Date("2020-08-13T08:33:47.369Z"),
    id: "ef234c95-5b9b-4df2-990a-bd9bbcc2725e",
    location: "impedit",
    managerId: "magni",
    maritalStatus: HrisEmployeeMaritalStatus.Married,
    name: "Sabrina Schamberger Sr.",
    raw: {},
    telephones: [
      {
        telephone: "totam",
        type: HrisTelephoneType.Work,
      },
    ],
    terminatedAt: new Date("2022-06-27T13:37:26.116Z"),
    title: "Mr.",
    updatedAt: new Date("2021-10-27T12:07:56.119Z"),
  },
  connectionId: "excepturi",
  id: "ef68e45c-8add-4fac-b545-00430c6632b4",
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
    createdAt: new Date("2022-05-31T02:06:03.542Z"),
    description: "inventore",
    employeeIds: [
      "sapiente",
    ],
    id: "df01c3e9-1e8f-47bc-a9d4-60a77eceb26d",
    isActive: false,
    managerIds: [
      "architecto",
    ],
    name: "Lorene Bosco",
    parentId: "qui",
    raw: {},
    type: HrisGroupType.Department,
    updatedAt: new Date("2022-12-06T03:55:58.108Z"),
  },
  connectionId: "quisquam",
  id: "7c0f0f87-3f9d-45c2-9fd3-e0b4a4a4253c",
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
      address1: "amet",
      address2: "ipsa",
      city: "West Jaunitaland",
      country: "Bahrain",
      countryCode: "YE",
      postalCode: "18494",
      region: "pariatur",
      regionCode: "porro",
    },
    createdAt: new Date("2022-09-23T16:00:07.090Z"),
    dateOfBirth: new Date("2021-07-11T10:12:07.009Z"),
    department: "itaque",
    division: "sit",
    emails: [
      {
        email: "Timmothy68@yahoo.com",
        type: HrisEmailType.Home,
      },
    ],
    employeeNumber: "culpa",
    employmentStatus: HrisEmployeeEmploymentStatus.Active,
    employmentType: HrisEmployeeEmploymentType.FullTime,
    gender: HrisEmployeeGender.Female,
    hiredAt: new Date("2021-01-27T23:42:02.589Z"),
    id: "12a4ba9d-5998-4819-acfd-0c77c53e7e7d",
    location: "eius",
    managerId: "accusamus",
    maritalStatus: HrisEmployeeMaritalStatus.Single,
    name: "Sophie Lesch",
    raw: {},
    telephones: [
      {
        telephone: "consequatur",
        type: HrisTelephoneType.Fax,
      },
    ],
    terminatedAt: new Date("2021-06-09T00:38:41.199Z"),
    title: "Mrs.",
    updatedAt: new Date("2022-06-19T22:55:28.813Z"),
  },
  connectionId: "saepe",
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
    createdAt: new Date("2022-10-11T00:06:05.180Z"),
    description: "sint",
    employeeIds: [
      "ea",
    ],
    id: "703fec31-c508-424d-989a-36a6b2d27eb7",
    isActive: false,
    managerIds: [
      "accusantium",
    ],
    name: "Harriet Orn DDS",
    parentId: "voluptatum",
    raw: {},
    type: HrisGroupType.SubDepartment,
    updatedAt: new Date("2022-02-14T18:55:03.442Z"),
  },
  connectionId: "commodi",
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
      address1: "debitis",
      address2: "commodi",
      city: "South Izaiahhaven",
      country: "Paraguay",
      countryCode: "MS",
      postalCode: "72740-9977",
      region: "nisi",
      regionCode: "occaecati",
    },
    createdAt: new Date("2022-12-15T12:15:10.431Z"),
    dateOfBirth: new Date("2020-03-31T16:49:34.939Z"),
    department: "odio",
    division: "nihil",
    emails: [
      {
        email: "Tamia.Doyle@gmail.com",
        type: HrisEmailType.Home,
      },
    ],
    employeeNumber: "iusto",
    employmentStatus: HrisEmployeeEmploymentStatus.Inactive,
    employmentType: HrisEmployeeEmploymentType.Other,
    gender: HrisEmployeeGender.Intersex,
    hiredAt: new Date("2022-06-18T09:54:51.929Z"),
    id: "06e61b0d-3087-414c-a0a3-d98637ca85c3",
    location: "delectus",
    managerId: "repudiandae",
    maritalStatus: HrisEmployeeMaritalStatus.Married,
    name: "Erin Kris",
    raw: {},
    telephones: [
      {
        telephone: "harum",
        type: HrisTelephoneType.Fax,
      },
    ],
    terminatedAt: new Date("2021-02-20T15:13:08.610Z"),
    title: "Mrs.",
    updatedAt: new Date("2022-01-28T12:53:07.770Z"),
  },
  connectionId: "placeat",
  id: "98f13af2-8db2-4cf2-bf4f-3ded356d7e14",
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
    createdAt: new Date("2022-08-29T10:06:09.751Z"),
    description: "beatae",
    employeeIds: [
      "eligendi",
    ],
    id: "d98196d5-5af6-49a1-84b7-9ae33681c23c",
    isActive: false,
    managerIds: [
      "dolorem",
    ],
    name: "Grant Klein PhD",
    parentId: "ab",
    raw: {},
    type: HrisGroupType.Division,
    updatedAt: new Date("2020-11-07T15:44:18.546Z"),
  },
  connectionId: "quasi",
  id: "2c5ba825-fe22-4cd5-8ba6-fbfec932af68",
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

