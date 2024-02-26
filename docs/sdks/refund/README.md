# Refund
(*refund*)

### Available Operations

* [getAccountingRefund](#getaccountingrefund) - Retrieve a refund
* [listAccountingRefunds](#listaccountingrefunds) - List all refunds

## getAccountingRefund

Retrieve a refund

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetAccountingRefundSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAccountingRefundSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.refund.getAccountingRefund({
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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetAccountingRefundRequest](../../sdk/models/operations/getaccountingrefundrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.GetAccountingRefundSecurity](../../sdk/models/operations/getaccountingrefundsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetAccountingRefundResponse](../../sdk/models/operations/getaccountingrefundresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAccountingRefunds

List all refunds

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListAccountingRefundsSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAccountingRefundsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.refund.listAccountingRefunds({
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

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.ListAccountingRefundsRequest](../../sdk/models/operations/listaccountingrefundsrequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.ListAccountingRefundsSecurity](../../sdk/models/operations/listaccountingrefundssecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.ListAccountingRefundsResponse](../../sdk/models/operations/listaccountingrefundsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
