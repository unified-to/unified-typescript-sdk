# Member
(*member*)

### Available Operations

* [createMartechMember](#createmartechmember) - Create a member
* [getMartechMember](#getmartechmember) - Retrieve a member
* [listMartechMembers](#listmartechmembers) - List all members
* [patchMartechMember](#patchmartechmember) - Update a member
* [removeMartechMember](#removemartechmember) - Remove member
* [updateMartechMember](#updatemartechmember) - Update a member

## createMartechMember

Create a member

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateMartechMemberSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { MarketingEmailType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateMartechMemberSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.member.createMartechMember({
    marketingMember: {
      emails: [
        {
          email: "Eldridge.Marvin@gmail.com",
        },
      ],
      listIds: [
        "<value>",
      ],
      raw: {
        "key": "<value>",
      },
      tags: [
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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.CreateMartechMemberRequest](../../sdk/models/operations/createmartechmemberrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.CreateMartechMemberSecurity](../../sdk/models/operations/createmartechmembersecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.CreateMartechMemberResponse](../../sdk/models/operations/createmartechmemberresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getMartechMember

Retrieve a member

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetMartechMemberSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetMartechMemberSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.member.getMartechMember({
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetMartechMemberRequest](../../sdk/models/operations/getmartechmemberrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.GetMartechMemberSecurity](../../sdk/models/operations/getmartechmembersecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetMartechMemberResponse](../../sdk/models/operations/getmartechmemberresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listMartechMembers

List all members

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListMartechMembersSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListMartechMembersSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.member.listMartechMembers({
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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.ListMartechMembersRequest](../../sdk/models/operations/listmartechmembersrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.ListMartechMembersSecurity](../../sdk/models/operations/listmartechmemberssecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ListMartechMembersResponse](../../sdk/models/operations/listmartechmembersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchMartechMember

Update a member

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchMartechMemberSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { MarketingEmailType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchMartechMemberSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.member.patchMartechMember({
    marketingMember: {
      emails: [
        {
          email: "Shana_Boyle@yahoo.com",
        },
      ],
      listIds: [
        "<value>",
      ],
      raw: {
        "key": "<value>",
      },
      tags: [
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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.PatchMartechMemberRequest](../../sdk/models/operations/patchmartechmemberrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.PatchMartechMemberSecurity](../../sdk/models/operations/patchmartechmembersecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PatchMartechMemberResponse](../../sdk/models/operations/patchmartechmemberresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeMartechMember

Remove member

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveMartechMemberSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveMartechMemberSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.member.removeMartechMember({
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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.RemoveMartechMemberRequest](../../sdk/models/operations/removemartechmemberrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.RemoveMartechMemberSecurity](../../sdk/models/operations/removemartechmembersecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.RemoveMartechMemberResponse](../../sdk/models/operations/removemartechmemberresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateMartechMember

Update a member

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateMartechMemberSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { MarketingEmailType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateMartechMemberSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.member.updateMartechMember({
    marketingMember: {
      emails: [
        {
          email: "Antonette.Kerluke@hotmail.com",
        },
      ],
      listIds: [
        "<value>",
      ],
      raw: {
        "key": "<value>",
      },
      tags: [
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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateMartechMemberRequest](../../sdk/models/operations/updatemartechmemberrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.UpdateMartechMemberSecurity](../../sdk/models/operations/updatemartechmembersecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateMartechMemberResponse](../../sdk/models/operations/updatemartechmemberresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
