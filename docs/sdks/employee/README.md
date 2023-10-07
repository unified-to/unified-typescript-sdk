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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.employee.deleteHrisConnectionIdEmployeeId({
    connectionId: "Laredo turquoise port",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.employee.getHrisConnectionIdEmployee({
    connectionId: "initiatives greedily project",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.employee.getHrisConnectionIdEmployeeId({
    connectionId: "Keyboard cleverly Rubber",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";
import {
  HrisEmailType,
  HrisEmployeeEmploymentStatus,
  HrisEmployeeEmploymentType,
  HrisEmployeeGender,
  HrisEmployeeMaritalStatus,
  HrisTelephoneType,
} from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.employee.patchHrisConnectionIdEmployeeId({
    hrisEmployee: {
      address: {},
      emails: [
        {
          email: "Brennan.Senger@yahoo.com",
        },
      ],
      raw: {},
      telephones: [
        {
          telephone: "Assurance forecast",
        },
      ],
    },
    connectionId: "Bahamas if fictionalise",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";
import {
  HrisEmailType,
  HrisEmployeeEmploymentStatus,
  HrisEmployeeEmploymentType,
  HrisEmployeeGender,
  HrisEmployeeMaritalStatus,
  HrisTelephoneType,
} from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.employee.postHrisConnectionIdEmployee({
    hrisEmployee: {
      address: {},
      emails: [
        {
          email: "Berry.Reinger@hotmail.com",
        },
      ],
      raw: {},
      telephones: [
        {
          telephone: "Chicken Southwest",
        },
      ],
    },
    connectionId: "generate Forward Diesel",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";
import {
  HrisEmailType,
  HrisEmployeeEmploymentStatus,
  HrisEmployeeEmploymentType,
  HrisEmployeeGender,
  HrisEmployeeMaritalStatus,
  HrisTelephoneType,
} from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.employee.putHrisConnectionIdEmployeeId({
    hrisEmployee: {
      address: {},
      emails: [
        {
          email: "Bert90@gmail.com",
        },
      ],
      raw: {},
      telephones: [
        {
          telephone: "mobile",
        },
      ],
    },
    connectionId: "a online olive",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PutHrisConnectionIdEmployeeIdRequest](../../models/operations/puthrisconnectionidemployeeidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PutHrisConnectionIdEmployeeIdResponse](../../models/operations/puthrisconnectionidemployeeidresponse.md)>**

