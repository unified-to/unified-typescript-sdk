# Employee
(*employee*)

### Available Operations

* [deleteHrisConnectionIdEmployeeId](#deletehrisconnectionidemployeeid) - Remove an employee
* [getHrisConnectionIdEmployee](#gethrisconnectionidemployee) - List all employees
* [getHrisConnectionIdEmployeeId](#gethrisconnectionidemployeeid) - Retrieve an employee
* [patchHrisConnectionIdEmployeeId](#patchhrisconnectionidemployeeid) - Update an employee
* [postHrisConnectionIdEmployee](#posthrisconnectionidemployee) - Create an employee
* [putHrisConnectionIdEmployeeId](#puthrisconnectionidemployeeid) - Update an employee

## deleteHrisConnectionIdEmployeeId

Remove an employee

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


## getHrisConnectionIdEmployee

List all employees

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

Retrieve an employee

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


## patchHrisConnectionIdEmployeeId

Update an employee

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


## postHrisConnectionIdEmployee

Create an employee

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


## putHrisConnectionIdEmployeeId

Update an employee

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

