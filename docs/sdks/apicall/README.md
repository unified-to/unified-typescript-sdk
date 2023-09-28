# Apicall
(*apicall*)

### Available Operations

* [getUnifiedApicall](#getunifiedapicall) - Returns API Calls
* [getUnifiedApicallId](#getunifiedapicallid) - Retrieve specific API Call by its ID

## getUnifiedApicall

Returns API Calls

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUnifiedApicallResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.apicall.getUnifiedApicall({
  connectionId: "delectus green Hybrid",
  createdLte: new Date("2021-04-02T21:36:49.952Z"),
  env: "Fantastic Iodine indexing",
  error: false,
  externalXref: "Music",
  integrationType: "Soft",
  limit: 2390.64,
  offset: 3757.34,
  order: "mobile envisioneer",
  sort: "North payment opposite",
  updatedGte: new Date("2021-08-11T16:18:13.644Z"),
}).then((res: GetUnifiedApicallResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetUnifiedApicallRequest](../../models/operations/getunifiedapicallrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetUnifiedApicallResponse](../../models/operations/getunifiedapicallresponse.md)>**


## getUnifiedApicallId

Retrieve specific API Call by its ID

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUnifiedApicallIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.apicall.getUnifiedApicallId({
  id: "<ID>",
}).then((res: GetUnifiedApicallIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetUnifiedApicallIdRequest](../../models/operations/getunifiedapicallidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetUnifiedApicallIdResponse](../../models/operations/getunifiedapicallidresponse.md)>**

