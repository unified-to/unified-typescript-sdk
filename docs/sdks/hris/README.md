# Hris
(*hris*)

### Available Operations

* [createHrisEmployee](#createhrisemployee) - Create an employee
* [createHrisGroup](#createhrisgroup) - Create a group
* [getHrisEmployee](#gethrisemployee) - Retrieve an employee
* [getHrisGroup](#gethrisgroup) - Retrieve a group
* [listHrisEmployees](#listhrisemployees) - List all employees
* [listHrisGroups](#listhrisgroups) - List all groups
* [patchHrisEmployee](#patchhrisemployee) - Update an employee
* [patchHrisGroup](#patchhrisgroup) - Update a group
* [removeHrisEmployee](#removehrisemployee) - Remove an employee
* [removeHrisGroup](#removehrisgroup) - Remove a group
* [updateHrisEmployee](#updatehrisemployee) - Update an employee
* [updateHrisGroup](#updatehrisgroup) - Update a group

## createHrisEmployee

Create an employee

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateHrisEmployeeSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import {
  EmploymentStatus,
  HrisEmailType,
  HrisEmployeeEmploymentType,
  HrisEmployeeGender,
  HrisTelephoneType,
  MaritalStatus,
} from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateHrisEmployeeSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.hris.createHrisEmployee({
    hrisEmployee: {
      address: {},
      emails: [
        {
          email: "Adriel_Hansen@hotmail.com",
        },
      ],
      raw: {
        "key": "<value>",
      },
      telephones: [
        {
          telephone: "<value>",
        },
      ],
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateHrisEmployeeRequest](../../sdk/models/operations/createhrisemployeerequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.CreateHrisEmployeeSecurity](../../sdk/models/operations/createhrisemployeesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateHrisEmployeeResponse](../../sdk/models/operations/createhrisemployeeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createHrisGroup

Create a group

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateHrisGroupSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { HrisGroupType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateHrisGroupSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.hris.createHrisGroup({
    hrisGroup: {
      managerIds: [
        "<value>",
      ],
      raw: {
        "key": "<value>",
      },
      userIds: [
        "<value>",
      ],
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateHrisGroupRequest](../../sdk/models/operations/createhrisgrouprequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.CreateHrisGroupSecurity](../../sdk/models/operations/createhrisgroupsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateHrisGroupResponse](../../sdk/models/operations/createhrisgroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getHrisEmployee

Retrieve an employee

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetHrisEmployeeSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetHrisEmployeeSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.hris.getHrisEmployee({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetHrisEmployeeRequest](../../sdk/models/operations/gethrisemployeerequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.GetHrisEmployeeSecurity](../../sdk/models/operations/gethrisemployeesecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetHrisEmployeeResponse](../../sdk/models/operations/gethrisemployeeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getHrisGroup

Retrieve a group

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetHrisGroupSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetHrisGroupSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.hris.getHrisGroup({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetHrisGroupRequest](../../sdk/models/operations/gethrisgrouprequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GetHrisGroupSecurity](../../sdk/models/operations/gethrisgroupsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetHrisGroupResponse](../../sdk/models/operations/gethrisgroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listHrisEmployees

List all employees

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListHrisEmployeesSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListHrisEmployeesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.hris.listHrisEmployees({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListHrisEmployeesRequest](../../sdk/models/operations/listhrisemployeesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.ListHrisEmployeesSecurity](../../sdk/models/operations/listhrisemployeessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListHrisEmployeesResponse](../../sdk/models/operations/listhrisemployeesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listHrisGroups

List all groups

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListHrisGroupsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListHrisGroupsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.hris.listHrisGroups({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListHrisGroupsRequest](../../sdk/models/operations/listhrisgroupsrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.ListHrisGroupsSecurity](../../sdk/models/operations/listhrisgroupssecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListHrisGroupsResponse](../../sdk/models/operations/listhrisgroupsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchHrisEmployee

Update an employee

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchHrisEmployeeSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import {
  EmploymentStatus,
  HrisEmailType,
  HrisEmployeeEmploymentType,
  HrisEmployeeGender,
  HrisTelephoneType,
  MaritalStatus,
} from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchHrisEmployeeSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.hris.patchHrisEmployee({
    hrisEmployee: {
      address: {},
      emails: [
        {
          email: "Zetta.Cassin@yahoo.com",
        },
      ],
      raw: {
        "key": "<value>",
      },
      telephones: [
        {
          telephone: "<value>",
        },
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.PatchHrisEmployeeRequest](../../sdk/models/operations/patchhrisemployeerequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.PatchHrisEmployeeSecurity](../../sdk/models/operations/patchhrisemployeesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PatchHrisEmployeeResponse](../../sdk/models/operations/patchhrisemployeeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchHrisGroup

Update a group

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchHrisGroupSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { HrisGroupType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchHrisGroupSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.hris.patchHrisGroup({
    hrisGroup: {
      managerIds: [
        "<value>",
      ],
      raw: {
        "key": "<value>",
      },
      userIds: [
        "<value>",
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.PatchHrisGroupRequest](../../sdk/models/operations/patchhrisgrouprequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.PatchHrisGroupSecurity](../../sdk/models/operations/patchhrisgroupsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PatchHrisGroupResponse](../../sdk/models/operations/patchhrisgroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeHrisEmployee

Remove an employee

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveHrisEmployeeSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveHrisEmployeeSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.hris.removeHrisEmployee({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.RemoveHrisEmployeeRequest](../../sdk/models/operations/removehrisemployeerequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.RemoveHrisEmployeeSecurity](../../sdk/models/operations/removehrisemployeesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.RemoveHrisEmployeeResponse](../../sdk/models/operations/removehrisemployeeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeHrisGroup

Remove a group

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveHrisGroupSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveHrisGroupSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.hris.removeHrisGroup({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.RemoveHrisGroupRequest](../../sdk/models/operations/removehrisgrouprequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.RemoveHrisGroupSecurity](../../sdk/models/operations/removehrisgroupsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.RemoveHrisGroupResponse](../../sdk/models/operations/removehrisgroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateHrisEmployee

Update an employee

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateHrisEmployeeSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import {
  EmploymentStatus,
  HrisEmailType,
  HrisEmployeeEmploymentType,
  HrisEmployeeGender,
  HrisTelephoneType,
  MaritalStatus,
} from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateHrisEmployeeSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.hris.updateHrisEmployee({
    hrisEmployee: {
      address: {},
      emails: [
        {
          email: "Abbie_Aufderhar@gmail.com",
        },
      ],
      raw: {
        "key": "<value>",
      },
      telephones: [
        {
          telephone: "<value>",
        },
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateHrisEmployeeRequest](../../sdk/models/operations/updatehrisemployeerequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.UpdateHrisEmployeeSecurity](../../sdk/models/operations/updatehrisemployeesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateHrisEmployeeResponse](../../sdk/models/operations/updatehrisemployeeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateHrisGroup

Update a group

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateHrisGroupSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { HrisGroupType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateHrisGroupSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.hris.updateHrisGroup({
    hrisGroup: {
      managerIds: [
        "<value>",
      ],
      raw: {
        "key": "<value>",
      },
      userIds: [
        "<value>",
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateHrisGroupRequest](../../sdk/models/operations/updatehrisgrouprequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.UpdateHrisGroupSecurity](../../sdk/models/operations/updatehrisgroupsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateHrisGroupResponse](../../sdk/models/operations/updatehrisgroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
