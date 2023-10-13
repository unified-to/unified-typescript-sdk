# Member
(*member*)

### Available Operations

* [createMartechMember](#createmartechmember) - Create a member in a list
* [getMartechMember](#getmartechmember) - Retrieve a member from a list
* [listMartechMembers](#listmartechmembers) - List all members in a list
* [patchMartechMember](#patchmartechmember) - Update a member in a list
* [removeMartechMember](#removemartechmember) - Remove member from a list
* [updateMartechMember](#updatemartechmember) - Update a member in a list

## createMartechMember

Create a member in a list

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { MarketingEmailType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.member.createMartechMember({
    marketingMember: {
      emails: [
        {
          email: "Eldridge.Marvin@gmail.com",
        },
      ],
      listIds: [
        "input",
      ],
      raw: {},
      tags: [
        "SAS",
      ],
    },
    connectionId: "South Electronic calculate",
    listId: "ew scalable Hassium",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateMartechMemberRequest](../../models/operations/createmartechmemberrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateMartechMemberResponse](../../models/operations/createmartechmemberresponse.md)>**


## getMartechMember

Retrieve a member from a list

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.member.getMartechMember({
    connectionId: "Yuan",
    id: "<ID>",
    listId: "vertical Northeast",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetMartechMemberRequest](../../models/operations/getmartechmemberrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetMartechMemberResponse](../../models/operations/getmartechmemberresponse.md)>**


## listMartechMembers

List all members in a list

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.member.listMartechMembers({
    connectionId: "Money",
    listId: "structure",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListMartechMembersRequest](../../models/operations/listmartechmembersrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListMartechMembersResponse](../../models/operations/listmartechmembersresponse.md)>**


## patchMartechMember

Update a member in a list

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { MarketingEmailType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.member.patchMartechMember({
    marketingMember: {
      emails: [
        {
          email: "Shana_Boyle@yahoo.com",
        },
      ],
      listIds: [
        "Handcrafted",
      ],
      raw: {},
      tags: [
        "Synchronised",
      ],
    },
    connectionId: "Unbranded overriding Money",
    id: "<ID>",
    listId: "as variant West",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.PatchMartechMemberRequest](../../models/operations/patchmartechmemberrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.PatchMartechMemberResponse](../../models/operations/patchmartechmemberresponse.md)>**


## removeMartechMember

Remove member from a list

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.member.removeMartechMember({
    connectionId: "Fitness",
    id: "<ID>",
    listId: "HTTP solid",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.RemoveMartechMemberRequest](../../models/operations/removemartechmemberrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.RemoveMartechMemberResponse](../../models/operations/removemartechmemberresponse.md)>**


## updateMartechMember

Update a member in a list

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { MarketingEmailType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.member.updateMartechMember({
    marketingMember: {
      emails: [
        {
          email: "Antonette.Kerluke@hotmail.com",
        },
      ],
      listIds: [
        "connect",
      ],
      raw: {},
      tags: [
        "Bike",
      ],
    },
    connectionId: "Checking deploy Hermaphrodite",
    id: "<ID>",
    listId: "Bespoke below",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateMartechMemberRequest](../../models/operations/updatemartechmemberrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateMartechMemberResponse](../../models/operations/updatemartechmemberresponse.md)>**

