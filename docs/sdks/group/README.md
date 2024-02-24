# Group
(*group*)

### Available Operations

* [createHrisGroup](#createhrisgroup) - Create a group
* [getHrisGroup](#gethrisgroup) - Retrieve a group
* [listHrisGroups](#listhrisgroups) - List all groups
* [patchHrisGroup](#patchhrisgroup) - Update a group
* [removeHrisGroup](#removehrisgroup) - Remove a group
* [updateHrisGroup](#updatehrisgroup) - Update a group

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

  const res = await sdk.group.createHrisGroup({
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

  const res = await sdk.group.getHrisGroup({
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

  const res = await sdk.group.listHrisGroups({
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

  const res = await sdk.group.patchHrisGroup({
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

  const res = await sdk.group.removeHrisGroup({
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

  const res = await sdk.group.updateHrisGroup({
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
