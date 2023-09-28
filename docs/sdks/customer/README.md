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
import { UnifiedTo } from "Unified-to";
import { DeleteTicketingConnectionIdCustomerIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.customer.deleteTicketingConnectionIdCustomerId({
  connectionId: "Electric Gloves pish",
  id: "<ID>",
}).then((res: DeleteTicketingConnectionIdCustomerIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UnifiedTo } from "Unified-to";
import { GetTicketingConnectionIdCustomerResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.customer.getTicketingConnectionIdCustomer({
  connectionId: "SDD because Salad",
  limit: 8049.62,
  offset: 4323.42,
  order: "override",
  query: "Rolls 1080p",
  sort: "quantifying Southeast Kansas",
  updatedGte: new Date("2023-12-20T19:18:39.254Z"),
}).then((res: GetTicketingConnectionIdCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UnifiedTo } from "Unified-to";
import { GetTicketingConnectionIdCustomerIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.customer.getTicketingConnectionIdCustomerId({
  connectionId: "further Ebert",
  id: "<ID>",
}).then((res: GetTicketingConnectionIdCustomerIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UnifiedTo } from "Unified-to";
import { PatchTicketingConnectionIdCustomerIdResponse } from "Unified-to/dist/sdk/models/operations";
import { TicketingEmailType, TicketingTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.customer.patchTicketingConnectionIdCustomerId({
  ticketingCustomer: {
    createdAt: new Date("2023-01-22T19:33:25.134Z"),
    emails: [
      {
        email: "Ora.Labadie94@yahoo.com",
        type: TicketingEmailType.Home,
      },
    ],
    id: "<ID>",
    name: "sensitise whiteboard Smyrna",
    raw: {},
    tags: [
      "Hialeah",
    ],
    telephones: [
      {
        telephone: "connect",
        type: TicketingTelephoneType.Work,
      },
    ],
    updatedAt: new Date("2023-12-28T17:48:45.929Z"),
  },
  connectionId: "Tennessine",
  id: "<ID>",
}).then((res: PatchTicketingConnectionIdCustomerIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UnifiedTo } from "Unified-to";
import { PostTicketingConnectionIdCustomerResponse } from "Unified-to/dist/sdk/models/operations";
import { TicketingEmailType, TicketingTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.customer.postTicketingConnectionIdCustomer({
  ticketingCustomer: {
    createdAt: new Date("2022-05-23T15:06:12.012Z"),
    emails: [
      {
        email: "Austin44@yahoo.com",
        type: TicketingEmailType.Work,
      },
    ],
    id: "<ID>",
    name: "Configuration neural",
    raw: {},
    tags: [
      "engineer",
    ],
    telephones: [
      {
        telephone: "Gasoline North gorgeous",
        type: TicketingTelephoneType.Fax,
      },
    ],
    updatedAt: new Date("2022-10-09T07:25:23.111Z"),
  },
  connectionId: "mole purple",
}).then((res: PostTicketingConnectionIdCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UnifiedTo } from "Unified-to";
import { PutTicketingConnectionIdCustomerIdResponse } from "Unified-to/dist/sdk/models/operations";
import { TicketingEmailType, TicketingTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.customer.putTicketingConnectionIdCustomerId({
  ticketingCustomer: {
    createdAt: new Date("2021-04-21T09:25:32.395Z"),
    emails: [
      {
        email: "Shawna42@hotmail.com",
        type: TicketingEmailType.Home,
      },
    ],
    id: "<ID>",
    name: "gray",
    raw: {},
    tags: [
      "Associate",
    ],
    telephones: [
      {
        telephone: "Sausages ivory Small",
        type: TicketingTelephoneType.Mobile,
      },
    ],
    updatedAt: new Date("2022-09-01T05:56:15.314Z"),
  },
  connectionId: "mobile Cotton",
  id: "<ID>",
}).then((res: PutTicketingConnectionIdCustomerIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.PutTicketingConnectionIdCustomerIdRequest](../../models/operations/putticketingconnectionidcustomeridrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PutTicketingConnectionIdCustomerIdResponse](../../models/operations/putticketingconnectionidcustomeridresponse.md)>**

