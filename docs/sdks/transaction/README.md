# Transaction
(*transaction*)

### Available Operations

* [createAccountingTransaction](#createaccountingtransaction) - Create a transaction
* [getAccountingTransaction](#getaccountingtransaction) - Retrieve a transaction
* [listAccountingTransactions](#listaccountingtransactions) - List all transactions
* [patchAccountingTransaction](#patchaccountingtransaction) - Update a transaction
* [removeAccountingTransaction](#removeaccountingtransaction) - Remove a transaction
* [updateAccountingTransaction](#updateaccountingtransaction) - Update a transaction

## createAccountingTransaction

Create a transaction

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreateAccountingTransactionSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAccountingTransactionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.transaction.createAccountingTransaction({
    accountingTransaction: {
      id: "<id>",
      lineitems: [
        {
          accountId: "<value>",
          totalAmount: 4969.62,
        },
      ],
      raw: {
        "key": "<value>",
      },
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

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.CreateAccountingTransactionRequest](../../sdk/models/operations/createaccountingtransactionrequest.md)   | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `security`                                                                                                           | [operations.CreateAccountingTransactionSecurity](../../sdk/models/operations/createaccountingtransactionsecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.CreateAccountingTransactionResponse](../../sdk/models/operations/createaccountingtransactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAccountingTransaction

Retrieve a transaction

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetAccountingTransactionSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAccountingTransactionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.transaction.getAccountingTransaction({
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

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetAccountingTransactionRequest](../../sdk/models/operations/getaccountingtransactionrequest.md)   | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `security`                                                                                                     | [operations.GetAccountingTransactionSecurity](../../sdk/models/operations/getaccountingtransactionsecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetAccountingTransactionResponse](../../sdk/models/operations/getaccountingtransactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAccountingTransactions

List all transactions

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListAccountingTransactionsSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAccountingTransactionsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.transaction.listAccountingTransactions({
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

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.ListAccountingTransactionsRequest](../../sdk/models/operations/listaccountingtransactionsrequest.md)   | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `security`                                                                                                         | [operations.ListAccountingTransactionsSecurity](../../sdk/models/operations/listaccountingtransactionssecurity.md) | :heavy_check_mark:                                                                                                 | The security requirements to use for the request.                                                                  |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.ListAccountingTransactionsResponse](../../sdk/models/operations/listaccountingtransactionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAccountingTransaction

Update a transaction

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchAccountingTransactionSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAccountingTransactionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.transaction.patchAccountingTransaction({
    accountingTransaction: {
      id: "<id>",
      lineitems: [
        {
          accountId: "<value>",
          totalAmount: 5633.69,
        },
      ],
      raw: {
        "key": "<value>",
      },
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

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PatchAccountingTransactionRequest](../../sdk/models/operations/patchaccountingtransactionrequest.md)   | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `security`                                                                                                         | [operations.PatchAccountingTransactionSecurity](../../sdk/models/operations/patchaccountingtransactionsecurity.md) | :heavy_check_mark:                                                                                                 | The security requirements to use for the request.                                                                  |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PatchAccountingTransactionResponse](../../sdk/models/operations/patchaccountingtransactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAccountingTransaction

Remove a transaction

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemoveAccountingTransactionSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAccountingTransactionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.transaction.removeAccountingTransaction({
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

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.RemoveAccountingTransactionRequest](../../sdk/models/operations/removeaccountingtransactionrequest.md)   | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `security`                                                                                                           | [operations.RemoveAccountingTransactionSecurity](../../sdk/models/operations/removeaccountingtransactionsecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.RemoveAccountingTransactionResponse](../../sdk/models/operations/removeaccountingtransactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAccountingTransaction

Update a transaction

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdateAccountingTransactionSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAccountingTransactionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.transaction.updateAccountingTransaction({
    accountingTransaction: {
      id: "<id>",
      lineitems: [
        {
          accountId: "<value>",
          totalAmount: 6498.37,
        },
      ],
      raw: {
        "key": "<value>",
      },
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

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.UpdateAccountingTransactionRequest](../../sdk/models/operations/updateaccountingtransactionrequest.md)   | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `security`                                                                                                           | [operations.UpdateAccountingTransactionSecurity](../../sdk/models/operations/updateaccountingtransactionsecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.UpdateAccountingTransactionResponse](../../sdk/models/operations/updateaccountingtransactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
