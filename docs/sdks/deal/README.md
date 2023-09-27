# Deal
(*deal*)

### Available Operations

* [deleteCrmConnectionIdDealId](#deletecrmconnectioniddealid) - Remove a deal
* [getCrmConnectionIdDeal](#getcrmconnectioniddeal) - List all deals
* [getCrmConnectionIdDealId](#getcrmconnectioniddealid) - Retrieve a deal
* [patchCrmConnectionIdDealId](#patchcrmconnectioniddealid) - Update a deal
* [postCrmConnectionIdDeal](#postcrmconnectioniddeal) - Create a deal
* [putCrmConnectionIdDealId](#putcrmconnectioniddealid) - Update a deal

## deleteCrmConnectionIdDealId

Remove a deal

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.deal.deleteCrmConnectionIdDealId({
  connectionId: "ducimus",
  id: "ed565076-21c5-48f4-9739-6564c20a0711",
}).then((res: DeleteCrmConnectionIdDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteCrmConnectionIdDealIdRequest](../../models/operations/deletecrmconnectioniddealidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteCrmConnectionIdDealIdResponse](../../models/operations/deletecrmconnectioniddealidresponse.md)>**


## getCrmConnectionIdDeal

List all deals

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdDealResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.deal.getCrmConnectionIdDeal({
  companyId: "similique",
  connectionId: "omnis",
  contactId: "commodi",
  limit: 1166.35,
  offset: 8489.26,
  order: "aspernatur",
  query: "ut",
  sort: "deserunt",
  updatedGte: new Date("2022-02-20T22:48:15.284Z"),
}).then((res: GetCrmConnectionIdDealResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCrmConnectionIdDealRequest](../../models/operations/getcrmconnectioniddealrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCrmConnectionIdDealResponse](../../models/operations/getcrmconnectioniddealresponse.md)>**


## getCrmConnectionIdDealId

Retrieve a deal

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.deal.getCrmConnectionIdDealId({
  connectionId: "facilis",
  id: "b8f532d8-92cf-4781-acb5-12c878240bf5",
}).then((res: GetCrmConnectionIdDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCrmConnectionIdDealIdRequest](../../models/operations/getcrmconnectioniddealidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCrmConnectionIdDealIdResponse](../../models/operations/getcrmconnectioniddealidresponse.md)>**


## patchCrmConnectionIdDealId

Update a deal

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.deal.patchCrmConnectionIdDealId({
  crmDeal: {
    amount: 2743.68,
    closedAt: new Date("2021-02-04T20:36:14.764Z"),
    createdAt: new Date("2021-12-30T15:49:38.515Z"),
    currency: "hic",
    id: "8f1bf0bc-8e1f-4206-95d8-31d0081090f6",
    lostReason: "nihil",
    name: "Loretta Howe",
    pipeline: "doloribus",
    probability: 1877.7,
    raw: {},
    source: "id",
    stage: "ex",
    tags: [
      "quos",
    ],
    updatedAt: new Date("2022-03-17T20:43:59.276Z"),
    wonReason: "exercitationem",
  },
  connectionId: "molestiae",
  id: "68dce742-409a-4215-a086-01489a5f63e3",
}).then((res: PatchCrmConnectionIdDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchCrmConnectionIdDealIdRequest](../../models/operations/patchcrmconnectioniddealidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchCrmConnectionIdDealIdResponse](../../models/operations/patchcrmconnectioniddealidresponse.md)>**


## postCrmConnectionIdDeal

Create a deal

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdDealResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.deal.postCrmConnectionIdDeal({
  crmDeal: {
    amount: 6489.85,
    closedAt: new Date("2022-04-04T11:17:39.742Z"),
    createdAt: new Date("2020-05-19T07:26:52.477Z"),
    currency: "natus",
    id: "dda33dcd-6348-43e4-a7a9-8e4df37e45b8",
    lostReason: "omnis",
    name: "Bernice Schultz I",
    pipeline: "recusandae",
    probability: 784.86,
    raw: {},
    source: "ipsum",
    stage: "error",
    tags: [
      "numquam",
    ],
    updatedAt: new Date("2022-08-25T17:34:42.796Z"),
    wonReason: "consectetur",
  },
  connectionId: "dicta",
}).then((res: PostCrmConnectionIdDealResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostCrmConnectionIdDealRequest](../../models/operations/postcrmconnectioniddealrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostCrmConnectionIdDealResponse](../../models/operations/postcrmconnectioniddealresponse.md)>**


## putCrmConnectionIdDealId

Update a deal

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.deal.putCrmConnectionIdDealId({
  crmDeal: {
    amount: 551.24,
    closedAt: new Date("2022-12-18T04:51:10.637Z"),
    createdAt: new Date("2022-04-06T10:46:32.109Z"),
    currency: "facere",
    id: "354c092b-d734-4f02-849d-86f4bb20fe5d",
    lostReason: "provident",
    name: "Ashley Schmeler",
    pipeline: "itaque",
    probability: 4920.7,
    raw: {},
    source: "magnam",
    stage: "excepturi",
    tags: [
      "placeat",
    ],
    updatedAt: new Date("2021-01-19T07:13:22.442Z"),
    wonReason: "modi",
  },
  connectionId: "enim",
  id: "a27f69e2-c9e6-4d10-a9db-3ad4c6b03108",
}).then((res: PutCrmConnectionIdDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PutCrmConnectionIdDealIdRequest](../../models/operations/putcrmconnectioniddealidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PutCrmConnectionIdDealIdResponse](../../models/operations/putcrmconnectioniddealidresponse.md)>**

