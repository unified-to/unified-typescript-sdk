# Employee
(*employee*)

### Available Operations

* [deleteHrisConnectionIdEmployeeId](#deletehrisconnectionidemployeeid) - Remove a Employee
* [getHrisConnectionIdEmployee](#gethrisconnectionidemployee) - List all Employees
* [getHrisConnectionIdEmployeeId](#gethrisconnectionidemployeeid) - Retrieve a Employee
* [patchHrisConnectionIdEmployeeId](#patchhrisconnectionidemployeeid) - Update a Employee
* [postHrisConnectionIdEmployee](#posthrisconnectionidemployee) - Create a Employee
* [putHrisConnectionIdEmployeeId](#puthrisconnectionidemployeeid) - Update a Employee

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

sdk.employee.deleteHrisConnectionIdEmployeeId({
  connectionId: "delectus",
  id: "4844225e-75b7-4960-a5c0-efa6f93b90a1",
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

sdk.employee.getHrisConnectionIdEmployee({
  connectionId: "distinctio",
  limit: 5362.02,
  offset: 7558.48,
  order: "unde",
  query: "veniam",
  sort: "nam",
  updatedGte: new Date("2022-08-28T08:17:40.334Z"),
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

sdk.employee.getHrisConnectionIdEmployeeId({
  connectionId: "explicabo",
  id: "54b739f4-fe77-4210-91f6-558c99c722d2",
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

sdk.employee.patchHrisConnectionIdEmployeeId({
  hrisEmployee: {
    address: {
      address1: "nam",
      address2: "optio",
      city: "Fort Kentonburgh",
      country: "Anguilla",
      countryCode: "LS",
      postalCode: "85866",
      region: "recusandae",
      regionCode: "doloremque",
    },
    createdAt: new Date("2022-11-04T08:22:44.750Z"),
    dateOfBirth: new Date("2020-06-24T16:30:44.804Z"),
    department: "voluptate",
    division: "placeat",
    emails: [
      {
        email: "Manuela_Schowalter@hotmail.com",
        type: HrisEmailType.Work,
      },
    ],
    employeeNumber: "minus",
    employmentStatus: HrisEmployeeEmploymentStatus.Inactive,
    employmentType: HrisEmployeeEmploymentType.Casual,
    gender: HrisEmployeeGender.Male,
    hiredAt: new Date("2020-02-21T17:23:34.909Z"),
    id: "e9e15df9-0390-47f3-b831-983d42e54a85",
    location: "dolore",
    managerId: "commodi",
    maritalStatus: HrisEmployeeMaritalStatus.Married,
    name: "Ramona Kub",
    raw: {},
    telephones: [
      {
        telephone: "consequatur",
        type: HrisTelephoneType.Work,
      },
    ],
    terminatedAt: new Date("2022-10-20T10:23:58.834Z"),
    title: "Dr.",
    updatedAt: new Date("2022-09-26T09:29:33.100Z"),
  },
  connectionId: "nihil",
  id: "1d51aaa6-ddf5-4abd-a487-c5fc2b862a00",
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

sdk.employee.postHrisConnectionIdEmployee({
  hrisEmployee: {
    address: {
      address1: "nobis",
      address2: "saepe",
      city: "Irvine",
      country: "Montserrat",
      countryCode: "TT",
      postalCode: "00034",
      region: "suscipit",
      regionCode: "dolor",
    },
    createdAt: new Date("2022-04-09T11:38:39.555Z"),
    dateOfBirth: new Date("2020-12-14T05:42:01.818Z"),
    department: "nihil",
    division: "similique",
    emails: [
      {
        email: "Roman_Torp27@hotmail.com",
        type: HrisEmailType.Home,
      },
    ],
    employeeNumber: "dolor",
    employmentStatus: HrisEmployeeEmploymentStatus.Active,
    employmentType: HrisEmployeeEmploymentType.Casual,
    gender: HrisEmployeeGender.Female,
    hiredAt: new Date("2022-11-14T11:24:15.321Z"),
    id: "38e1a735-ac26-4ae3-bbef-971a8f46bca1",
    location: "quae",
    managerId: "aut",
    maritalStatus: HrisEmployeeMaritalStatus.Married,
    name: "Frankie Mohr",
    raw: {},
    telephones: [
      {
        telephone: "soluta",
        type: HrisTelephoneType.Other,
      },
    ],
    terminatedAt: new Date("2022-11-23T11:50:41.638Z"),
    title: "Dr.",
    updatedAt: new Date("2022-07-01T14:41:51.539Z"),
  },
  connectionId: "eligendi",
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

sdk.employee.putHrisConnectionIdEmployeeId({
  hrisEmployee: {
    address: {
      address1: "tenetur",
      address2: "deleniti",
      city: "Stantonfort",
      country: "Namibia",
      countryCode: "WF",
      postalCode: "75563",
      region: "quis",
      regionCode: "doloremque",
    },
    createdAt: new Date("2022-02-19T05:47:56.169Z"),
    dateOfBirth: new Date("2022-08-03T10:40:15.780Z"),
    department: "eveniet",
    division: "possimus",
    emails: [
      {
        email: "Claire_Frami3@gmail.com",
        type: HrisEmailType.Other,
      },
    ],
    employeeNumber: "officiis",
    employmentStatus: HrisEmployeeEmploymentStatus.Inactive,
    employmentType: HrisEmployeeEmploymentType.Casual,
    gender: HrisEmployeeGender.Trans,
    hiredAt: new Date("2022-08-31T15:51:12.518Z"),
    id: "432a986e-b7e1-44ca-9640-89150097019a",
    location: "eius",
    managerId: "rem",
    maritalStatus: HrisEmployeeMaritalStatus.Single,
    name: "Armando Wehner",
    raw: {},
    telephones: [
      {
        telephone: "reprehenderit",
        type: HrisTelephoneType.Fax,
      },
    ],
    terminatedAt: new Date("2021-04-08T14:13:47.569Z"),
    title: "Mr.",
    updatedAt: new Date("2022-02-05T17:52:52.343Z"),
  },
  connectionId: "consequatur",
  id: "1105d389-0816-42c6-beb6-8a0f657b7d03",
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

