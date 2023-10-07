# Customer
(*customer*)

### Available Operations

* [deleteTicketingConnectionIdCustomerId](#deleteticketingconnectionidcustomerid) - Remove a customer
* [getTicketingConnectionIdCustomer](#getticketingconnectionidcustomer) - List all customers
* [getTicketingConnectionIdCustomerId](#getticketingconnectionidcustomerid) - Retrieve a customer
* [patchTicketingConnectionIdCustomerId](#patchticketingconnectionidcustomerid) - Update a customer
* [postTicketingConnectionIdCustomer](#postticketingconnectionidcustomer) - Create a customer
* [putTicketingConnectionIdCustomerId](#putticketingconnectionidcustomerid) - Update a customer

## deleteTicketingConnectionIdCustomerId

Remove a customer

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.customer.deleteTicketingConnectionIdCustomerId({
    connectionId: "Electric Gloves pish",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.DeleteTicketingConnectionIdCustomerIdRequest](../../models/operations/deleteticketingconnectionidcustomeridrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.DeleteTicketingConnectionIdCustomerIdResponse](../../models/operations/deleteticketingconnectionidcustomeridresponse.md)>**


## getTicketingConnectionIdCustomer

List all customers

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.customer.getTicketingConnectionIdCustomer({
    connectionId: "SDD because Salad",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetTicketingConnectionIdCustomerRequest](../../models/operations/getticketingconnectionidcustomerrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetTicketingConnectionIdCustomerResponse](../../models/operations/getticketingconnectionidcustomerresponse.md)>**


## getTicketingConnectionIdCustomerId

Retrieve a customer

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.customer.getTicketingConnectionIdCustomerId({
    connectionId: "further Ebert",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetTicketingConnectionIdCustomerIdRequest](../../models/operations/getticketingconnectionidcustomeridrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetTicketingConnectionIdCustomerIdResponse](../../models/operations/getticketingconnectionidcustomeridresponse.md)>**


## patchTicketingConnectionIdCustomerId

Update a customer

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { TicketingEmailType, TicketingTelephoneType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.customer.patchTicketingConnectionIdCustomerId({
    ticketingCustomer: {
      emails: [
        {
          email: "Jaren_Ryan@hotmail.com",
        },
      ],
      raw: {},
      tags: [
        "Waco",
      ],
      telephones: [
        {
          telephone: "youthfully orange",
        },
      ],
    },
    connectionId: "Smyrna Hialeah auxiliary",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PatchTicketingConnectionIdCustomerIdRequest](../../models/operations/patchticketingconnectionidcustomeridrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PatchTicketingConnectionIdCustomerIdResponse](../../models/operations/patchticketingconnectionidcustomeridresponse.md)>**


## postTicketingConnectionIdCustomer

Create a customer

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { TicketingEmailType, TicketingTelephoneType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.customer.postTicketingConnectionIdCustomer({
    ticketingCustomer: {
      emails: [
        {
          email: "Jaquelin.Boyer@yahoo.com",
        },
      ],
      raw: {},
      tags: [
        "withdrawal",
      ],
      telephones: [
        {
          telephone: "Configuration neural",
        },
      ],
    },
    connectionId: "Product Hybrid",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.PostTicketingConnectionIdCustomerRequest](../../models/operations/postticketingconnectionidcustomerrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PostTicketingConnectionIdCustomerResponse](../../models/operations/postticketingconnectionidcustomerresponse.md)>**


## putTicketingConnectionIdCustomerId

Update a customer

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { TicketingEmailType, TicketingTelephoneType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.customer.putTicketingConnectionIdCustomerId({
    ticketingCustomer: {
      emails: [
        {
          email: "Raleigh.Torp42@gmail.com",
        },
      ],
      raw: {},
      tags: [
        "copy",
      ],
      telephones: [
        {
          telephone: "Developer Buckinghamshire Sausages",
        },
      ],
    },
    connectionId: "kilogram",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.PutTicketingConnectionIdCustomerIdRequest](../../models/operations/putticketingconnectionidcustomeridrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PutTicketingConnectionIdCustomerIdResponse](../../models/operations/putticketingconnectionidcustomeridresponse.md)>**

