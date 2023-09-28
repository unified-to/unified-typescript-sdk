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
  connectionId: "Fresh",
  id: "<ID>",
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
  companyId: "Tools Card copying",
  connectionId: "Renminbi",
  contactId: "till payment World",
  limit: 8656.16,
  offset: 4455.8,
  order: "global",
  query: "Program Bespoke Wisconsin",
  sort: "Netherlands under",
  updatedGte: new Date("2022-12-23T01:47:21.816Z"),
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
  connectionId: "Concrete Director",
  id: "<ID>",
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
    amount: 7725.78,
    closedAt: new Date("2021-10-28T08:42:49.591Z"),
    createdAt: new Date("2023-04-23T15:03:53.999Z"),
    currency: "Afghani",
    id: "<ID>",
    lostReason: "North",
    name: "midnight",
    pipeline: "envisioneer Functionality Loan",
    probability: 7051.73,
    raw: {},
    source: "Krone",
    stage: "pascal aliquam gripping",
    tags: [
      "where",
    ],
    updatedAt: new Date("2022-04-05T10:21:22.505Z"),
    wonReason: "Savings kilogram",
  },
  connectionId: "Chair weber silver",
  id: "<ID>",
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
    amount: 6144.41,
    closedAt: new Date("2022-07-10T09:55:59.977Z"),
    createdAt: new Date("2022-01-20T07:28:03.436Z"),
    currency: "Convertible Marks",
    id: "<ID>",
    lostReason: "pfft female",
    name: "Expressway",
    pipeline: "withdrawal Extended busily",
    probability: 7998.22,
    raw: {},
    source: "spiffy sometimes",
    stage: "transmitter",
    tags: [
      "intermediate",
    ],
    updatedAt: new Date("2022-10-06T18:34:11.762Z"),
    wonReason: "Cisgender input HTTP",
  },
  connectionId: "accusantium Checking",
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
    amount: 4050.98,
    closedAt: new Date("2022-01-15T04:05:31.641Z"),
    createdAt: new Date("2023-06-04T01:28:32.466Z"),
    currency: "Bermudian Dollar (customarily known as Bermuda Dollar)",
    id: "<ID>",
    lostReason: "laudantium Southwest",
    name: "wail Developer",
    pipeline: "male Samarium Gourde",
    probability: 6728.74,
    raw: {},
    source: "Stage Gasoline Metal",
    stage: "Corporate withdrawal Tasty",
    tags: [
      "extranet",
    ],
    updatedAt: new Date("2021-10-16T22:38:02.052Z"),
    wonReason: "phooey",
  },
  connectionId: "Jazz",
  id: "<ID>",
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

