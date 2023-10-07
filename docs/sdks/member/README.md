# Member
(*member*)

### Available Operations

* [deleteMartechConnectionIdListIdMemberId](#deletemartechconnectionidlistidmemberid) - Remove member from a list
* [getMartechConnectionIdListIdMember](#getmartechconnectionidlistidmember) - List all members in a list
* [getMartechConnectionIdListIdMemberId](#getmartechconnectionidlistidmemberid) - Retrieve a member from a list
* [patchMartechConnectionIdListIdMemberId](#patchmartechconnectionidlistidmemberid) - Update a member in a list
* [postMartechConnectionIdListIdMember](#postmartechconnectionidlistidmember) - Create a member in a list
* [putMartechConnectionIdListIdMemberId](#putmartechconnectionidlistidmemberid) - Update a member in a list

## deleteMartechConnectionIdListIdMemberId

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

  const res = await sdk.member.deleteMartechConnectionIdListIdMemberId({
    connectionId: "Southwest fib",
    id: "<ID>",
    listId: "pascal",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.DeleteMartechConnectionIdListIdMemberIdRequest](../../models/operations/deletemartechconnectionidlistidmemberidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.DeleteMartechConnectionIdListIdMemberIdResponse](../../models/operations/deletemartechconnectionidlistidmemberidresponse.md)>**


## getMartechConnectionIdListIdMember

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

  const res = await sdk.member.getMartechConnectionIdListIdMember({
    connectionId: "fuchsia economics",
    listId: "Bronze cackle",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetMartechConnectionIdListIdMemberRequest](../../models/operations/getmartechconnectionidlistidmemberrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetMartechConnectionIdListIdMemberResponse](../../models/operations/getmartechconnectionidlistidmemberresponse.md)>**


## getMartechConnectionIdListIdMemberId

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

  const res = await sdk.member.getMartechConnectionIdListIdMemberId({
    connectionId: "male",
    id: "<ID>",
    listId: "Gasoline Home allot",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetMartechConnectionIdListIdMemberIdRequest](../../models/operations/getmartechconnectionidlistidmemberidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetMartechConnectionIdListIdMemberIdResponse](../../models/operations/getmartechconnectionidlistidmemberidresponse.md)>**


## patchMartechConnectionIdListIdMemberId

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

  const res = await sdk.member.patchMartechConnectionIdListIdMemberId({
    marketingMember: {
      emails: [
        {
          email: "Otto93@yahoo.com",
        },
      ],
      listIds: [
        "Accounts",
      ],
      raw: {},
      tags: [
        "capacitor",
      ],
    },
    connectionId: "yowza online",
    id: "<ID>",
    listId: "to XSS",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PatchMartechConnectionIdListIdMemberIdRequest](../../models/operations/patchmartechconnectionidlistidmemberidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PatchMartechConnectionIdListIdMemberIdResponse](../../models/operations/patchmartechconnectionidlistidmemberidresponse.md)>**


## postMartechConnectionIdListIdMember

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

  const res = await sdk.member.postMartechConnectionIdListIdMember({
    marketingMember: {
      emails: [
        {
          email: "Tomas37@yahoo.com",
        },
      ],
      listIds: [
        "drive",
      ],
      raw: {},
      tags: [
        "virtual",
      ],
    },
    connectionId: "dolorum Wooden Granite",
    listId: "Green Convertible newton",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PostMartechConnectionIdListIdMemberRequest](../../models/operations/postmartechconnectionidlistidmemberrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PostMartechConnectionIdListIdMemberResponse](../../models/operations/postmartechconnectionidlistidmemberresponse.md)>**


## putMartechConnectionIdListIdMemberId

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

  const res = await sdk.member.putMartechConnectionIdListIdMemberId({
    marketingMember: {
      emails: [
        {
          email: "Mikayla_Nader@hotmail.com",
        },
      ],
      listIds: [
        "octave",
      ],
      raw: {},
      tags: [
        "SMS",
      ],
    },
    connectionId: "East platforms",
    id: "<ID>",
    listId: "Frozen",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PutMartechConnectionIdListIdMemberIdRequest](../../models/operations/putmartechconnectionidlistidmemberidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PutMartechConnectionIdListIdMemberIdResponse](../../models/operations/putmartechconnectionidlistidmemberidresponse.md)>**

