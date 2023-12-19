# Customer
(*customer*)

### Available Operations

* [createAccountingCustomer](#createaccountingcustomer) - Create a customer
* [createTicketingCustomer](#createticketingcustomer) - Create a customer
* [getAccountingCustomer](#getaccountingcustomer) - Retrieve a customer
* [getTicketingCustomer](#getticketingcustomer) - Retrieve a customer
* [listAccountingCustomers](#listaccountingcustomers) - List all customers
* [listTicketingCustomers](#listticketingcustomers) - List all customers
* [patchAccountingCustomer](#patchaccountingcustomer) - Update a customer
* [patchTicketingCustomer](#patchticketingcustomer) - Update a customer
* [removeAccountingCustomer](#removeaccountingcustomer) - Remove a customer
* [removeTicketingCustomer](#removeticketingcustomer) - Remove a customer
* [updateAccountingCustomer](#updateaccountingcustomer) - Update a customer
* [updateTicketingCustomer](#updateticketingcustomer) - Update a customer

## createAccountingCustomer

Create a customer

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { AccountingEmailType, AccountingTelephoneType, TaxExemption } from "unified-to/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customer.createAccountingCustomer({
    accountingCustomer: {
      billingAddress: {},
      emails: [
        {
          email: "Kevon_Schultz42@gmail.com",
        },
      ],
      raw: {},
      shippingAddress: {},
      telephones: [
        {
          telephone: "string",
        },
      ],
    },
    connectionId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.CreateAccountingCustomerRequest](../../sdk/models/operations/createaccountingcustomerrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateAccountingCustomerResponse](../../sdk/models/operations/createaccountingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createTicketingCustomer

Create a customer

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { TicketingEmailType, TicketingTelephoneType } from "unified-to/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customer.createTicketingCustomer({
    ticketingCustomer: {
      emails: [
        {
          email: "Guadalupe78@yahoo.com",
        },
      ],
      raw: {},
      tags: [
        "string",
      ],
      telephones: [
        {
          telephone: "string",
        },
      ],
    },
    connectionId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.CreateTicketingCustomerRequest](../../sdk/models/operations/createticketingcustomerrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.CreateTicketingCustomerResponse](../../sdk/models/operations/createticketingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAccountingCustomer

Retrieve a customer

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customer.getAccountingCustomer({
    connectionId: "string",
    fields: [
      "string",
    ],
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetAccountingCustomerRequest](../../sdk/models/operations/getaccountingcustomerrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetAccountingCustomerResponse](../../sdk/models/operations/getaccountingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getTicketingCustomer

Retrieve a customer

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customer.getTicketingCustomer({
    connectionId: "string",
    fields: [
      "string",
    ],
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetTicketingCustomerRequest](../../sdk/models/operations/getticketingcustomerrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetTicketingCustomerResponse](../../sdk/models/operations/getticketingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAccountingCustomers

List all customers

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customer.listAccountingCustomers({
    connectionId: "string",
    fields: [
      "string",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ListAccountingCustomersRequest](../../sdk/models/operations/listaccountingcustomersrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListAccountingCustomersResponse](../../sdk/models/operations/listaccountingcustomersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listTicketingCustomers

List all customers

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customer.listTicketingCustomers({
    connectionId: "string",
    fields: [
      "string",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.ListTicketingCustomersRequest](../../sdk/models/operations/listticketingcustomersrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.ListTicketingCustomersResponse](../../sdk/models/operations/listticketingcustomersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAccountingCustomer

Update a customer

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { AccountingEmailType, AccountingTelephoneType, TaxExemption } from "unified-to/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customer.patchAccountingCustomer({
    accountingCustomer: {
      billingAddress: {},
      emails: [
        {
          email: "Trever_Orn@hotmail.com",
        },
      ],
      raw: {},
      shippingAddress: {},
      telephones: [
        {
          telephone: "string",
        },
      ],
    },
    connectionId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PatchAccountingCustomerRequest](../../sdk/models/operations/patchaccountingcustomerrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PatchAccountingCustomerResponse](../../sdk/models/operations/patchaccountingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchTicketingCustomer

Update a customer

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { TicketingEmailType, TicketingTelephoneType } from "unified-to/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customer.patchTicketingCustomer({
    ticketingCustomer: {
      emails: [
        {
          email: "Raymundo93@hotmail.com",
        },
      ],
      raw: {},
      tags: [
        "string",
      ],
      telephones: [
        {
          telephone: "string",
        },
      ],
    },
    connectionId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PatchTicketingCustomerRequest](../../sdk/models/operations/patchticketingcustomerrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PatchTicketingCustomerResponse](../../sdk/models/operations/patchticketingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAccountingCustomer

Remove a customer

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customer.removeAccountingCustomer({
    connectionId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.RemoveAccountingCustomerRequest](../../sdk/models/operations/removeaccountingcustomerrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.RemoveAccountingCustomerResponse](../../sdk/models/operations/removeaccountingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeTicketingCustomer

Remove a customer

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customer.removeTicketingCustomer({
    connectionId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.RemoveTicketingCustomerRequest](../../sdk/models/operations/removeticketingcustomerrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.RemoveTicketingCustomerResponse](../../sdk/models/operations/removeticketingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAccountingCustomer

Update a customer

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { AccountingEmailType, AccountingTelephoneType, TaxExemption } from "unified-to/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customer.updateAccountingCustomer({
    accountingCustomer: {
      billingAddress: {},
      emails: [
        {
          email: "Myrtice_Jacobi77@hotmail.com",
        },
      ],
      raw: {},
      shippingAddress: {},
      telephones: [
        {
          telephone: "string",
        },
      ],
    },
    connectionId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateAccountingCustomerRequest](../../sdk/models/operations/updateaccountingcustomerrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateAccountingCustomerResponse](../../sdk/models/operations/updateaccountingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateTicketingCustomer

Update a customer

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { TicketingEmailType, TicketingTelephoneType } from "unified-to/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customer.updateTicketingCustomer({
    ticketingCustomer: {
      emails: [
        {
          email: "Mohamed.Friesen@hotmail.com",
        },
      ],
      raw: {},
      tags: [
        "string",
      ],
      telephones: [
        {
          telephone: "string",
        },
      ],
    },
    connectionId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.UpdateTicketingCustomerRequest](../../sdk/models/operations/updateticketingcustomerrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.UpdateTicketingCustomerResponse](../../sdk/models/operations/updateticketingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
