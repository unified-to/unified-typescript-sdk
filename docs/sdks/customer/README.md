# Customer
(*customer*)

### Available Operations

* [createTicketingCustomer](#createticketingcustomer) - Create a customer
* [getTicketingCustomer](#getticketingcustomer) - Retrieve a customer
* [listTicketingCustomers](#listticketingcustomers) - List all customers
* [patchTicketingCustomer](#patchticketingcustomer) - Update a customer
* [removeTicketingCustomer](#removeticketingcustomer) - Remove a customer
* [updateTicketingCustomer](#updateticketingcustomer) - Update a customer

## createTicketingCustomer

Create a customer

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreateTicketingCustomerSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { TicketingEmailType, TicketingTelephoneType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateTicketingCustomerSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.customer.createTicketingCustomer({
    ticketingCustomer: {
      emails: [
        {
          email: "Guadalupe78@yahoo.com",
        },
      ],
      raw: {
        "key": "<value>",
      },
      tags: [
        "<value>",
      ],
      telephones: [
        {
          telephone: "<value>",
        },
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

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.CreateTicketingCustomerRequest](../../sdk/models/operations/createticketingcustomerrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.CreateTicketingCustomerSecurity](../../sdk/models/operations/createticketingcustomersecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateTicketingCustomerResponse](../../sdk/models/operations/createticketingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getTicketingCustomer

Retrieve a customer

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetTicketingCustomerSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetTicketingCustomerSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.customer.getTicketingCustomer({
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
| `request`                                                                                              | [operations.GetTicketingCustomerRequest](../../sdk/models/operations/getticketingcustomerrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.GetTicketingCustomerSecurity](../../sdk/models/operations/getticketingcustomersecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetTicketingCustomerResponse](../../sdk/models/operations/getticketingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listTicketingCustomers

List all customers

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListTicketingCustomersSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListTicketingCustomersSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.customer.listTicketingCustomers({
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
| `request`                                                                                                  | [operations.ListTicketingCustomersRequest](../../sdk/models/operations/listticketingcustomersrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.ListTicketingCustomersSecurity](../../sdk/models/operations/listticketingcustomerssecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListTicketingCustomersResponse](../../sdk/models/operations/listticketingcustomersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchTicketingCustomer

Update a customer

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchTicketingCustomerSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { TicketingEmailType, TicketingTelephoneType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchTicketingCustomerSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.customer.patchTicketingCustomer({
    ticketingCustomer: {
      emails: [
        {
          email: "Raymundo93@hotmail.com",
        },
      ],
      raw: {
        "key": "<value>",
      },
      tags: [
        "<value>",
      ],
      telephones: [
        {
          telephone: "<value>",
        },
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

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PatchTicketingCustomerRequest](../../sdk/models/operations/patchticketingcustomerrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.PatchTicketingCustomerSecurity](../../sdk/models/operations/patchticketingcustomersecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PatchTicketingCustomerResponse](../../sdk/models/operations/patchticketingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeTicketingCustomer

Remove a customer

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemoveTicketingCustomerSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveTicketingCustomerSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.customer.removeTicketingCustomer({
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
| `request`                                                                                                    | [operations.RemoveTicketingCustomerRequest](../../sdk/models/operations/removeticketingcustomerrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.RemoveTicketingCustomerSecurity](../../sdk/models/operations/removeticketingcustomersecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.RemoveTicketingCustomerResponse](../../sdk/models/operations/removeticketingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateTicketingCustomer

Update a customer

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdateTicketingCustomerSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { TicketingEmailType, TicketingTelephoneType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateTicketingCustomerSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.customer.updateTicketingCustomer({
    ticketingCustomer: {
      emails: [
        {
          email: "Mohamed.Friesen@hotmail.com",
        },
      ],
      raw: {
        "key": "<value>",
      },
      tags: [
        "<value>",
      ],
      telephones: [
        {
          telephone: "<value>",
        },
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

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateTicketingCustomerRequest](../../sdk/models/operations/updateticketingcustomerrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.UpdateTicketingCustomerSecurity](../../sdk/models/operations/updateticketingcustomersecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateTicketingCustomerResponse](../../sdk/models/operations/updateticketingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
