# Taxrate
(*taxrate*)

### Available Operations

* [createAccountingTaxrate](#createaccountingtaxrate) - Create a taxrate
* [getAccountingTaxrate](#getaccountingtaxrate) - Retrieve a taxrate
* [listAccountingTaxrates](#listaccountingtaxrates) - List all taxrates
* [patchAccountingTaxrate](#patchaccountingtaxrate) - Update a taxrate
* [removeAccountingTaxrate](#removeaccountingtaxrate) - Remove a taxrate
* [updateAccountingTaxrate](#updateaccountingtaxrate) - Update a taxrate

## createAccountingTaxrate

Create a taxrate

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreateAccountingTaxrateSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAccountingTaxrateSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.taxrate.createAccountingTaxrate({
    accountingTaxrate: {
      name: "<value>",
      rate: 1719.1,
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

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.CreateAccountingTaxrateRequest](../../sdk/models/operations/createaccountingtaxraterequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.CreateAccountingTaxrateSecurity](../../sdk/models/operations/createaccountingtaxratesecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateAccountingTaxrateResponse](../../sdk/models/operations/createaccountingtaxrateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAccountingTaxrate

Retrieve a taxrate

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetAccountingTaxrateSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAccountingTaxrateSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.taxrate.getAccountingTaxrate({
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

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetAccountingTaxrateRequest](../../sdk/models/operations/getaccountingtaxraterequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.GetAccountingTaxrateSecurity](../../sdk/models/operations/getaccountingtaxratesecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetAccountingTaxrateResponse](../../sdk/models/operations/getaccountingtaxrateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAccountingTaxrates

List all taxrates

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListAccountingTaxratesSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAccountingTaxratesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.taxrate.listAccountingTaxrates({
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

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ListAccountingTaxratesRequest](../../sdk/models/operations/listaccountingtaxratesrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.ListAccountingTaxratesSecurity](../../sdk/models/operations/listaccountingtaxratessecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListAccountingTaxratesResponse](../../sdk/models/operations/listaccountingtaxratesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAccountingTaxrate

Update a taxrate

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchAccountingTaxrateSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAccountingTaxrateSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.taxrate.patchAccountingTaxrate({
    accountingTaxrate: {
      name: "<value>",
      rate: 5991.47,
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

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PatchAccountingTaxrateRequest](../../sdk/models/operations/patchaccountingtaxraterequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.PatchAccountingTaxrateSecurity](../../sdk/models/operations/patchaccountingtaxratesecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PatchAccountingTaxrateResponse](../../sdk/models/operations/patchaccountingtaxrateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAccountingTaxrate

Remove a taxrate

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemoveAccountingTaxrateSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAccountingTaxrateSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.taxrate.removeAccountingTaxrate({
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

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.RemoveAccountingTaxrateRequest](../../sdk/models/operations/removeaccountingtaxraterequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.RemoveAccountingTaxrateSecurity](../../sdk/models/operations/removeaccountingtaxratesecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.RemoveAccountingTaxrateResponse](../../sdk/models/operations/removeaccountingtaxrateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAccountingTaxrate

Update a taxrate

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdateAccountingTaxrateSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAccountingTaxrateSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.taxrate.updateAccountingTaxrate({
    accountingTaxrate: {
      name: "<value>",
      rate: 3382.78,
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

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateAccountingTaxrateRequest](../../sdk/models/operations/updateaccountingtaxraterequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.UpdateAccountingTaxrateSecurity](../../sdk/models/operations/updateaccountingtaxratesecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateAccountingTaxrateResponse](../../sdk/models/operations/updateaccountingtaxrateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
