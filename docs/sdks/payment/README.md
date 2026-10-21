# Payment

## Overview

### Available Operations

* [createPaymentLink](#createpaymentlink) - Create a link
* [createPaymentPayment](#createpaymentpayment) - Create a payment
* [createPaymentSubscription](#createpaymentsubscription) - Create a subscription
* [getPaymentLink](#getpaymentlink) - Retrieve a link
* [getPaymentPayment](#getpaymentpayment) - Retrieve a payment
* [getPaymentPayout](#getpaymentpayout) - Retrieve a payout
* [getPaymentRefund](#getpaymentrefund) - Retrieve a refund
* [getPaymentSubscription](#getpaymentsubscription) - Retrieve a subscription
* [listPaymentLinks](#listpaymentlinks) - List all links
* [listPaymentPayments](#listpaymentpayments) - List all payments
* [listPaymentPayouts](#listpaymentpayouts) - List all payouts
* [listPaymentRefunds](#listpaymentrefunds) - List all refunds
* [listPaymentSubscriptions](#listpaymentsubscriptions) - List all subscriptions
* [patchPaymentLink](#patchpaymentlink) - Update a link
* [patchPaymentPayment](#patchpaymentpayment) - Update a payment
* [patchPaymentSubscription](#patchpaymentsubscription) - Update a subscription
* [removePaymentLink](#removepaymentlink) - Remove a link
* [removePaymentPayment](#removepaymentpayment) - Remove a payment
* [removePaymentSubscription](#removepaymentsubscription) - Remove a subscription
* [updatePaymentLink](#updatepaymentlink) - Update a link
* [updatePaymentPayment](#updatepaymentpayment) - Update a payment
* [updatePaymentSubscription](#updatepaymentsubscription) - Update a subscription

## createPaymentLink

Create a link

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPaymentLink" method="post" path="/payment/{connection_id}/link" example="payment_link" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.createPaymentLink({
    paymentLink: {
      amount: 17001.68,
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "CAD",
      description: "Savor the tender essence in our Ball, designed for dim culinary adventures",
      id: "f7747124-c35a-4178-b9fc-8a387c3866f4",
      isActive: true,
      isChargeableNow: true,
      lineitems: [
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "a26c7135-bd71-4684-8df5-7025cf155ab4",
          itemDescription: "Discover the worst new Computer with an exciting mix of Steel ingredients",
          itemName: "Soft Marble Cheese",
          taxAmount: 0,
          totalAmount: 9342,
          unitAmount: 519,
          unitQuantity: 18,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          discountAmount: 424.32,
          id: "e14947be-31ad-4055-8e2a-1582804f8985",
          itemDescription: "Innovative Shoes featuring utilized technology and Cotton construction",
          itemName: "Sleek Aluminum Shoes",
          notes: "Cervus decretum viridis doloremque.",
          taxAmount: 0,
          totalAmount: 6647.68,
          unitAmount: 884,
          unitQuantity: 8,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "df426264-bd88-4786-8683-fdd6772c6a62",
          itemDescription: "Featuring Osmium-enhanced technology, our Soap offers unparalleled major performance",
          itemName: "Elegant Concrete Gloves",
          notes: "Desipio usque vacuus currus cetera testimonium.",
          taxAmount: 0,
          totalAmount: 1012,
          unitAmount: 506,
          unitQuantity: 2,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
      ],
      metadata: [],
      successUrl: "https://tinted-jet.info",
      updatedAt: new Date("2024-04-13T09:39:58.796Z"),
      url: "https://pay.example.com/f7747124-c35a-4178-b9fc-8a387c3866f4",
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { linkCreatePaymentLink } from "@unified-api/typescript-sdk/funcs/linkCreatePaymentLink.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await linkCreatePaymentLink(unifiedTo, {
    paymentLink: {
      amount: 17001.68,
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "CAD",
      description: "Savor the tender essence in our Ball, designed for dim culinary adventures",
      id: "f7747124-c35a-4178-b9fc-8a387c3866f4",
      isActive: true,
      isChargeableNow: true,
      lineitems: [
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "a26c7135-bd71-4684-8df5-7025cf155ab4",
          itemDescription: "Discover the worst new Computer with an exciting mix of Steel ingredients",
          itemName: "Soft Marble Cheese",
          taxAmount: 0,
          totalAmount: 9342,
          unitAmount: 519,
          unitQuantity: 18,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          discountAmount: 424.32,
          id: "e14947be-31ad-4055-8e2a-1582804f8985",
          itemDescription: "Innovative Shoes featuring utilized technology and Cotton construction",
          itemName: "Sleek Aluminum Shoes",
          notes: "Cervus decretum viridis doloremque.",
          taxAmount: 0,
          totalAmount: 6647.68,
          unitAmount: 884,
          unitQuantity: 8,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "df426264-bd88-4786-8683-fdd6772c6a62",
          itemDescription: "Featuring Osmium-enhanced technology, our Soap offers unparalleled major performance",
          itemName: "Elegant Concrete Gloves",
          notes: "Desipio usque vacuus currus cetera testimonium.",
          taxAmount: 0,
          totalAmount: 1012,
          unitAmount: 506,
          unitQuantity: 2,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
      ],
      metadata: [],
      successUrl: "https://tinted-jet.info",
      updatedAt: new Date("2024-04-13T09:39:58.796Z"),
      url: "https://pay.example.com/f7747124-c35a-4178-b9fc-8a387c3866f4",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linkCreatePaymentLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePaymentLinkRequest](../../sdk/models/operations/createpaymentlinkrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentLink](../../sdk/models/shared/paymentlink.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createPaymentPayment

Create a payment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPaymentPayment" method="post" path="/payment/{connection_id}/payment" example="payment_payment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.createPaymentPayment({
    paymentPayment: {
      allocations: [],
      cardBrand: "MASTERCARD",
      cardLast4: "1529",
      categoryIds: [],
      createdAt: new Date("2022-03-10T00:19:42.086Z"),
      currency: "EUR",
      feeAmount: 2055.82,
      id: "45f4bf45-be4f-465b-8680-91b594514040",
      metadata: [],
      netAmount: 68824.18,
      notes: "Bibo tactus vilicus.",
      paidAt: new Date("2022-03-10T00:19:42.086Z"),
      paymentMethod: "CASH",
      reference: "PMT-119080",
      status: "SUCCEEDED",
      tenderType: "CASH",
      tipAmount: 0,
      totalAmount: 70880,
      type: "INVOICE",
      updatedAt: new Date("2025-10-08T01:01:47.409Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentCreatePaymentPayment } from "@unified-api/typescript-sdk/funcs/paymentCreatePaymentPayment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentCreatePaymentPayment(unifiedTo, {
    paymentPayment: {
      allocations: [],
      cardBrand: "MASTERCARD",
      cardLast4: "1529",
      categoryIds: [],
      createdAt: new Date("2022-03-10T00:19:42.086Z"),
      currency: "EUR",
      feeAmount: 2055.82,
      id: "45f4bf45-be4f-465b-8680-91b594514040",
      metadata: [],
      netAmount: 68824.18,
      notes: "Bibo tactus vilicus.",
      paidAt: new Date("2022-03-10T00:19:42.086Z"),
      paymentMethod: "CASH",
      reference: "PMT-119080",
      status: "SUCCEEDED",
      tenderType: "CASH",
      tipAmount: 0,
      totalAmount: 70880,
      type: "INVOICE",
      updatedAt: new Date("2025-10-08T01:01:47.409Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentCreatePaymentPayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePaymentPaymentRequest](../../sdk/models/operations/createpaymentpaymentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentPayment](../../sdk/models/shared/paymentpayment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createPaymentSubscription

Create a subscription

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPaymentSubscription" method="post" path="/payment/{connection_id}/subscription" example="payment_subscription" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.createPaymentSubscription({
    paymentSubscription: {
      createdAt: new Date("2023-05-08T10:11:03.414Z"),
      currency: "USD",
      currentPeriodEndAt: new Date("2024-02-08T10:05:22.912Z"),
      currentPeriodStartAt: new Date("2023-05-08T10:11:03.414Z"),
      dayOfMonth: 8,
      description: "Innovative Mouse featuring important technology and Bamboo construction",
      id: "09978b35-93ba-4d78-9e1a-a8dafd8e00b2",
      interval: 1,
      intervalUnit: "YEAR",
      lineitems: [],
      metadata: [],
      month: 5,
      startAt: new Date("2023-05-08T10:11:03.414Z"),
      status: "ACTIVE",
      totalAmount: 0,
      updatedAt: new Date("2023-10-04T12:56:51.479Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentCreatePaymentSubscription } from "@unified-api/typescript-sdk/funcs/paymentCreatePaymentSubscription.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentCreatePaymentSubscription(unifiedTo, {
    paymentSubscription: {
      createdAt: new Date("2023-05-08T10:11:03.414Z"),
      currency: "USD",
      currentPeriodEndAt: new Date("2024-02-08T10:05:22.912Z"),
      currentPeriodStartAt: new Date("2023-05-08T10:11:03.414Z"),
      dayOfMonth: 8,
      description: "Innovative Mouse featuring important technology and Bamboo construction",
      id: "09978b35-93ba-4d78-9e1a-a8dafd8e00b2",
      interval: 1,
      intervalUnit: "YEAR",
      lineitems: [],
      metadata: [],
      month: 5,
      startAt: new Date("2023-05-08T10:11:03.414Z"),
      status: "ACTIVE",
      totalAmount: 0,
      updatedAt: new Date("2023-10-04T12:56:51.479Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentCreatePaymentSubscription failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePaymentSubscriptionRequest](../../sdk/models/operations/createpaymentsubscriptionrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentSubscription](../../sdk/models/shared/paymentsubscription.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPaymentLink

Retrieve a link

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPaymentLink" method="get" path="/payment/{connection_id}/link/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.getPaymentLink({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { linkGetPaymentLink } from "@unified-api/typescript-sdk/funcs/linkGetPaymentLink.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await linkGetPaymentLink(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linkGetPaymentLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPaymentLinkRequest](../../sdk/models/operations/getpaymentlinkrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentLink](../../sdk/models/shared/paymentlink.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPaymentPayment

Retrieve a payment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPaymentPayment" method="get" path="/payment/{connection_id}/payment/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.getPaymentPayment({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentGetPaymentPayment } from "@unified-api/typescript-sdk/funcs/paymentGetPaymentPayment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentGetPaymentPayment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentGetPaymentPayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPaymentPaymentRequest](../../sdk/models/operations/getpaymentpaymentrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentPayment](../../sdk/models/shared/paymentpayment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPaymentPayout

Retrieve a payout

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPaymentPayout" method="get" path="/payment/{connection_id}/payout/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.getPaymentPayout({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentGetPaymentPayout } from "@unified-api/typescript-sdk/funcs/paymentGetPaymentPayout.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentGetPaymentPayout(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentGetPaymentPayout failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPaymentPayoutRequest](../../sdk/models/operations/getpaymentpayoutrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentPayout](../../sdk/models/shared/paymentpayout.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPaymentRefund

Retrieve a refund

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPaymentRefund" method="get" path="/payment/{connection_id}/refund/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.getPaymentRefund({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentGetPaymentRefund } from "@unified-api/typescript-sdk/funcs/paymentGetPaymentRefund.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentGetPaymentRefund(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentGetPaymentRefund failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPaymentRefundRequest](../../sdk/models/operations/getpaymentrefundrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentRefund](../../sdk/models/shared/paymentrefund.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPaymentSubscription

Retrieve a subscription

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPaymentSubscription" method="get" path="/payment/{connection_id}/subscription/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.getPaymentSubscription({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentGetPaymentSubscription } from "@unified-api/typescript-sdk/funcs/paymentGetPaymentSubscription.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentGetPaymentSubscription(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentGetPaymentSubscription failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPaymentSubscriptionRequest](../../sdk/models/operations/getpaymentsubscriptionrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentSubscription](../../sdk/models/shared/paymentsubscription.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPaymentLinks

List all links

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPaymentLinks" method="get" path="/payment/{connection_id}/link" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.listPaymentLinks({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { linkListPaymentLinks } from "@unified-api/typescript-sdk/funcs/linkListPaymentLinks.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await linkListPaymentLinks(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linkListPaymentLinks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPaymentLinksRequest](../../sdk/models/operations/listpaymentlinksrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentLink[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPaymentPayments

List all payments

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPaymentPayments" method="get" path="/payment/{connection_id}/payment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.listPaymentPayments({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentListPaymentPayments } from "@unified-api/typescript-sdk/funcs/paymentListPaymentPayments.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentListPaymentPayments(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentListPaymentPayments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPaymentPaymentsRequest](../../sdk/models/operations/listpaymentpaymentsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentPayment[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPaymentPayouts

List all payouts

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPaymentPayouts" method="get" path="/payment/{connection_id}/payout" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.listPaymentPayouts({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentListPaymentPayouts } from "@unified-api/typescript-sdk/funcs/paymentListPaymentPayouts.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentListPaymentPayouts(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentListPaymentPayouts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPaymentPayoutsRequest](../../sdk/models/operations/listpaymentpayoutsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentPayout[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPaymentRefunds

List all refunds

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPaymentRefunds" method="get" path="/payment/{connection_id}/refund" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.listPaymentRefunds({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentListPaymentRefunds } from "@unified-api/typescript-sdk/funcs/paymentListPaymentRefunds.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentListPaymentRefunds(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentListPaymentRefunds failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPaymentRefundsRequest](../../sdk/models/operations/listpaymentrefundsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentRefund[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPaymentSubscriptions

List all subscriptions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPaymentSubscriptions" method="get" path="/payment/{connection_id}/subscription" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.listPaymentSubscriptions({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentListPaymentSubscriptions } from "@unified-api/typescript-sdk/funcs/paymentListPaymentSubscriptions.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentListPaymentSubscriptions(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentListPaymentSubscriptions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPaymentSubscriptionsRequest](../../sdk/models/operations/listpaymentsubscriptionsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentSubscription[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchPaymentLink

Update a link

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchPaymentLink" method="patch" path="/payment/{connection_id}/link/{id}" example="payment_link" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.patchPaymentLink({
    paymentLink: {
      amount: 17001.68,
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "CAD",
      description: "Savor the tender essence in our Ball, designed for dim culinary adventures",
      id: "65a90286-182d-45a3-b05d-4986106e09f5",
      isActive: true,
      isChargeableNow: true,
      lineitems: [
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "07257c3e-22d8-4b84-b853-e9f1cfc9d723",
          itemDescription: "Discover the worst new Computer with an exciting mix of Steel ingredients",
          itemName: "Soft Marble Cheese",
          taxAmount: 0,
          totalAmount: 9342,
          unitAmount: 519,
          unitQuantity: 18,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          discountAmount: 424.32,
          id: "d20e53cd-2106-4ba5-a497-a41bed32d525",
          itemDescription: "Innovative Shoes featuring utilized technology and Cotton construction",
          itemName: "Sleek Aluminum Shoes",
          notes: "Cervus decretum viridis doloremque.",
          taxAmount: 0,
          totalAmount: 6647.68,
          unitAmount: 884,
          unitQuantity: 8,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "5852382b-ee0e-4071-a1cc-1dec1ba67df8",
          itemDescription: "Featuring Osmium-enhanced technology, our Soap offers unparalleled major performance",
          itemName: "Elegant Concrete Gloves",
          notes: "Desipio usque vacuus currus cetera testimonium.",
          taxAmount: 0,
          totalAmount: 1012,
          unitAmount: 506,
          unitQuantity: 2,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
      ],
      metadata: [],
      successUrl: "https://tinted-jet.info",
      updatedAt: new Date("2024-04-13T09:39:58.803Z"),
      url: "https://pay.example.com/65a90286-182d-45a3-b05d-4986106e09f5",
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { linkPatchPaymentLink } from "@unified-api/typescript-sdk/funcs/linkPatchPaymentLink.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await linkPatchPaymentLink(unifiedTo, {
    paymentLink: {
      amount: 17001.68,
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "CAD",
      description: "Savor the tender essence in our Ball, designed for dim culinary adventures",
      id: "65a90286-182d-45a3-b05d-4986106e09f5",
      isActive: true,
      isChargeableNow: true,
      lineitems: [
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "07257c3e-22d8-4b84-b853-e9f1cfc9d723",
          itemDescription: "Discover the worst new Computer with an exciting mix of Steel ingredients",
          itemName: "Soft Marble Cheese",
          taxAmount: 0,
          totalAmount: 9342,
          unitAmount: 519,
          unitQuantity: 18,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          discountAmount: 424.32,
          id: "d20e53cd-2106-4ba5-a497-a41bed32d525",
          itemDescription: "Innovative Shoes featuring utilized technology and Cotton construction",
          itemName: "Sleek Aluminum Shoes",
          notes: "Cervus decretum viridis doloremque.",
          taxAmount: 0,
          totalAmount: 6647.68,
          unitAmount: 884,
          unitQuantity: 8,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "5852382b-ee0e-4071-a1cc-1dec1ba67df8",
          itemDescription: "Featuring Osmium-enhanced technology, our Soap offers unparalleled major performance",
          itemName: "Elegant Concrete Gloves",
          notes: "Desipio usque vacuus currus cetera testimonium.",
          taxAmount: 0,
          totalAmount: 1012,
          unitAmount: 506,
          unitQuantity: 2,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
      ],
      metadata: [],
      successUrl: "https://tinted-jet.info",
      updatedAt: new Date("2024-04-13T09:39:58.803Z"),
      url: "https://pay.example.com/65a90286-182d-45a3-b05d-4986106e09f5",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linkPatchPaymentLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchPaymentLinkRequest](../../sdk/models/operations/patchpaymentlinkrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentLink](../../sdk/models/shared/paymentlink.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchPaymentPayment

Update a payment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchPaymentPayment" method="patch" path="/payment/{connection_id}/payment/{id}" example="payment_payment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.patchPaymentPayment({
    paymentPayment: {
      allocations: [],
      cardBrand: "MASTERCARD",
      cardLast4: "1529",
      categoryIds: [],
      createdAt: new Date("2022-03-10T00:19:42.086Z"),
      currency: "EUR",
      feeAmount: 2055.82,
      id: "570214f1-6f01-43b5-95a7-6d1ba812a64c",
      metadata: [],
      netAmount: 68824.18,
      notes: "Bibo tactus vilicus.",
      paidAt: new Date("2022-03-10T00:19:42.086Z"),
      paymentMethod: "CASH",
      reference: "PMT-119080",
      status: "SUCCEEDED",
      tenderType: "CASH",
      tipAmount: 0,
      totalAmount: 70880,
      type: "INVOICE",
      updatedAt: new Date("2025-10-08T01:01:47.437Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentPatchPaymentPayment } from "@unified-api/typescript-sdk/funcs/paymentPatchPaymentPayment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentPatchPaymentPayment(unifiedTo, {
    paymentPayment: {
      allocations: [],
      cardBrand: "MASTERCARD",
      cardLast4: "1529",
      categoryIds: [],
      createdAt: new Date("2022-03-10T00:19:42.086Z"),
      currency: "EUR",
      feeAmount: 2055.82,
      id: "570214f1-6f01-43b5-95a7-6d1ba812a64c",
      metadata: [],
      netAmount: 68824.18,
      notes: "Bibo tactus vilicus.",
      paidAt: new Date("2022-03-10T00:19:42.086Z"),
      paymentMethod: "CASH",
      reference: "PMT-119080",
      status: "SUCCEEDED",
      tenderType: "CASH",
      tipAmount: 0,
      totalAmount: 70880,
      type: "INVOICE",
      updatedAt: new Date("2025-10-08T01:01:47.437Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentPatchPaymentPayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchPaymentPaymentRequest](../../sdk/models/operations/patchpaymentpaymentrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentPayment](../../sdk/models/shared/paymentpayment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchPaymentSubscription

Update a subscription

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchPaymentSubscription" method="patch" path="/payment/{connection_id}/subscription/{id}" example="payment_subscription" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.patchPaymentSubscription({
    paymentSubscription: {
      createdAt: new Date("2023-05-08T10:11:03.414Z"),
      currency: "USD",
      currentPeriodEndAt: new Date("2024-02-08T10:05:22.912Z"),
      currentPeriodStartAt: new Date("2023-05-08T10:11:03.414Z"),
      dayOfMonth: 8,
      description: "Innovative Mouse featuring important technology and Bamboo construction",
      id: "6fdc396e-6c49-46ec-96c0-84a737c2ba93",
      interval: 1,
      intervalUnit: "YEAR",
      lineitems: [],
      metadata: [],
      month: 5,
      startAt: new Date("2023-05-08T10:11:03.414Z"),
      status: "ACTIVE",
      totalAmount: 0,
      updatedAt: new Date("2023-10-04T12:56:51.483Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentPatchPaymentSubscription } from "@unified-api/typescript-sdk/funcs/paymentPatchPaymentSubscription.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentPatchPaymentSubscription(unifiedTo, {
    paymentSubscription: {
      createdAt: new Date("2023-05-08T10:11:03.414Z"),
      currency: "USD",
      currentPeriodEndAt: new Date("2024-02-08T10:05:22.912Z"),
      currentPeriodStartAt: new Date("2023-05-08T10:11:03.414Z"),
      dayOfMonth: 8,
      description: "Innovative Mouse featuring important technology and Bamboo construction",
      id: "6fdc396e-6c49-46ec-96c0-84a737c2ba93",
      interval: 1,
      intervalUnit: "YEAR",
      lineitems: [],
      metadata: [],
      month: 5,
      startAt: new Date("2023-05-08T10:11:03.414Z"),
      status: "ACTIVE",
      totalAmount: 0,
      updatedAt: new Date("2023-10-04T12:56:51.483Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentPatchPaymentSubscription failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchPaymentSubscriptionRequest](../../sdk/models/operations/patchpaymentsubscriptionrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentSubscription](../../sdk/models/shared/paymentsubscription.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removePaymentLink

Remove a link

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removePaymentLink" method="delete" path="/payment/{connection_id}/link/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.removePaymentLink({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { linkRemovePaymentLink } from "@unified-api/typescript-sdk/funcs/linkRemovePaymentLink.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await linkRemovePaymentLink(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linkRemovePaymentLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemovePaymentLinkRequest](../../sdk/models/operations/removepaymentlinkrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemovePaymentLinkResponse](../../sdk/models/operations/removepaymentlinkresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removePaymentPayment

Remove a payment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removePaymentPayment" method="delete" path="/payment/{connection_id}/payment/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.removePaymentPayment({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentRemovePaymentPayment } from "@unified-api/typescript-sdk/funcs/paymentRemovePaymentPayment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentRemovePaymentPayment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentRemovePaymentPayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemovePaymentPaymentRequest](../../sdk/models/operations/removepaymentpaymentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemovePaymentPaymentResponse](../../sdk/models/operations/removepaymentpaymentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removePaymentSubscription

Remove a subscription

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removePaymentSubscription" method="delete" path="/payment/{connection_id}/subscription/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.removePaymentSubscription({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentRemovePaymentSubscription } from "@unified-api/typescript-sdk/funcs/paymentRemovePaymentSubscription.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentRemovePaymentSubscription(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentRemovePaymentSubscription failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemovePaymentSubscriptionRequest](../../sdk/models/operations/removepaymentsubscriptionrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemovePaymentSubscriptionResponse](../../sdk/models/operations/removepaymentsubscriptionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updatePaymentLink

Update a link

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updatePaymentLink" method="put" path="/payment/{connection_id}/link/{id}" example="payment_link" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.updatePaymentLink({
    paymentLink: {
      amount: 17001.68,
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "CAD",
      description: "Savor the tender essence in our Ball, designed for dim culinary adventures",
      id: "65a90286-182d-45a3-b05d-4986106e09f5",
      isActive: true,
      isChargeableNow: true,
      lineitems: [
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "07257c3e-22d8-4b84-b853-e9f1cfc9d723",
          itemDescription: "Discover the worst new Computer with an exciting mix of Steel ingredients",
          itemName: "Soft Marble Cheese",
          taxAmount: 0,
          totalAmount: 9342,
          unitAmount: 519,
          unitQuantity: 18,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          discountAmount: 424.32,
          id: "d20e53cd-2106-4ba5-a497-a41bed32d525",
          itemDescription: "Innovative Shoes featuring utilized technology and Cotton construction",
          itemName: "Sleek Aluminum Shoes",
          notes: "Cervus decretum viridis doloremque.",
          taxAmount: 0,
          totalAmount: 6647.68,
          unitAmount: 884,
          unitQuantity: 8,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "5852382b-ee0e-4071-a1cc-1dec1ba67df8",
          itemDescription: "Featuring Osmium-enhanced technology, our Soap offers unparalleled major performance",
          itemName: "Elegant Concrete Gloves",
          notes: "Desipio usque vacuus currus cetera testimonium.",
          taxAmount: 0,
          totalAmount: 1012,
          unitAmount: 506,
          unitQuantity: 2,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
      ],
      metadata: [],
      successUrl: "https://tinted-jet.info",
      updatedAt: new Date("2024-04-13T09:39:58.803Z"),
      url: "https://pay.example.com/65a90286-182d-45a3-b05d-4986106e09f5",
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { linkUpdatePaymentLink } from "@unified-api/typescript-sdk/funcs/linkUpdatePaymentLink.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await linkUpdatePaymentLink(unifiedTo, {
    paymentLink: {
      amount: 17001.68,
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "CAD",
      description: "Savor the tender essence in our Ball, designed for dim culinary adventures",
      id: "65a90286-182d-45a3-b05d-4986106e09f5",
      isActive: true,
      isChargeableNow: true,
      lineitems: [
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "07257c3e-22d8-4b84-b853-e9f1cfc9d723",
          itemDescription: "Discover the worst new Computer with an exciting mix of Steel ingredients",
          itemName: "Soft Marble Cheese",
          taxAmount: 0,
          totalAmount: 9342,
          unitAmount: 519,
          unitQuantity: 18,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          discountAmount: 424.32,
          id: "d20e53cd-2106-4ba5-a497-a41bed32d525",
          itemDescription: "Innovative Shoes featuring utilized technology and Cotton construction",
          itemName: "Sleek Aluminum Shoes",
          notes: "Cervus decretum viridis doloremque.",
          taxAmount: 0,
          totalAmount: 6647.68,
          unitAmount: 884,
          unitQuantity: 8,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "5852382b-ee0e-4071-a1cc-1dec1ba67df8",
          itemDescription: "Featuring Osmium-enhanced technology, our Soap offers unparalleled major performance",
          itemName: "Elegant Concrete Gloves",
          notes: "Desipio usque vacuus currus cetera testimonium.",
          taxAmount: 0,
          totalAmount: 1012,
          unitAmount: 506,
          unitQuantity: 2,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
      ],
      metadata: [],
      successUrl: "https://tinted-jet.info",
      updatedAt: new Date("2024-04-13T09:39:58.803Z"),
      url: "https://pay.example.com/65a90286-182d-45a3-b05d-4986106e09f5",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linkUpdatePaymentLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePaymentLinkRequest](../../sdk/models/operations/updatepaymentlinkrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentLink](../../sdk/models/shared/paymentlink.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updatePaymentPayment

Update a payment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updatePaymentPayment" method="put" path="/payment/{connection_id}/payment/{id}" example="payment_payment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.updatePaymentPayment({
    paymentPayment: {
      allocations: [],
      cardBrand: "MASTERCARD",
      cardLast4: "1529",
      categoryIds: [],
      createdAt: new Date("2022-03-10T00:19:42.086Z"),
      currency: "EUR",
      feeAmount: 2055.82,
      id: "570214f1-6f01-43b5-95a7-6d1ba812a64c",
      metadata: [],
      netAmount: 68824.18,
      notes: "Bibo tactus vilicus.",
      paidAt: new Date("2022-03-10T00:19:42.086Z"),
      paymentMethod: "CASH",
      reference: "PMT-119080",
      status: "SUCCEEDED",
      tenderType: "CASH",
      tipAmount: 0,
      totalAmount: 70880,
      type: "INVOICE",
      updatedAt: new Date("2025-10-08T01:01:47.437Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentUpdatePaymentPayment } from "@unified-api/typescript-sdk/funcs/paymentUpdatePaymentPayment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentUpdatePaymentPayment(unifiedTo, {
    paymentPayment: {
      allocations: [],
      cardBrand: "MASTERCARD",
      cardLast4: "1529",
      categoryIds: [],
      createdAt: new Date("2022-03-10T00:19:42.086Z"),
      currency: "EUR",
      feeAmount: 2055.82,
      id: "570214f1-6f01-43b5-95a7-6d1ba812a64c",
      metadata: [],
      netAmount: 68824.18,
      notes: "Bibo tactus vilicus.",
      paidAt: new Date("2022-03-10T00:19:42.086Z"),
      paymentMethod: "CASH",
      reference: "PMT-119080",
      status: "SUCCEEDED",
      tenderType: "CASH",
      tipAmount: 0,
      totalAmount: 70880,
      type: "INVOICE",
      updatedAt: new Date("2025-10-08T01:01:47.437Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentUpdatePaymentPayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePaymentPaymentRequest](../../sdk/models/operations/updatepaymentpaymentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentPayment](../../sdk/models/shared/paymentpayment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updatePaymentSubscription

Update a subscription

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updatePaymentSubscription" method="put" path="/payment/{connection_id}/subscription/{id}" example="payment_subscription" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.payment.updatePaymentSubscription({
    paymentSubscription: {
      createdAt: new Date("2023-05-08T10:11:03.414Z"),
      currency: "USD",
      currentPeriodEndAt: new Date("2024-02-08T10:05:22.912Z"),
      currentPeriodStartAt: new Date("2023-05-08T10:11:03.414Z"),
      dayOfMonth: 8,
      description: "Innovative Mouse featuring important technology and Bamboo construction",
      id: "6fdc396e-6c49-46ec-96c0-84a737c2ba93",
      interval: 1,
      intervalUnit: "YEAR",
      lineitems: [],
      metadata: [],
      month: 5,
      startAt: new Date("2023-05-08T10:11:03.414Z"),
      status: "ACTIVE",
      totalAmount: 0,
      updatedAt: new Date("2023-10-04T12:56:51.483Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { paymentUpdatePaymentSubscription } from "@unified-api/typescript-sdk/funcs/paymentUpdatePaymentSubscription.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await paymentUpdatePaymentSubscription(unifiedTo, {
    paymentSubscription: {
      createdAt: new Date("2023-05-08T10:11:03.414Z"),
      currency: "USD",
      currentPeriodEndAt: new Date("2024-02-08T10:05:22.912Z"),
      currentPeriodStartAt: new Date("2023-05-08T10:11:03.414Z"),
      dayOfMonth: 8,
      description: "Innovative Mouse featuring important technology and Bamboo construction",
      id: "6fdc396e-6c49-46ec-96c0-84a737c2ba93",
      interval: 1,
      intervalUnit: "YEAR",
      lineitems: [],
      metadata: [],
      month: 5,
      startAt: new Date("2023-05-08T10:11:03.414Z"),
      status: "ACTIVE",
      totalAmount: 0,
      updatedAt: new Date("2023-10-04T12:56:51.483Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentUpdatePaymentSubscription failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePaymentSubscriptionRequest](../../sdk/models/operations/updatepaymentsubscriptionrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PaymentSubscription](../../sdk/models/shared/paymentsubscription.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |