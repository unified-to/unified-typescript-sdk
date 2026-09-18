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
      amount: 81211,
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "GYD",
      description: "Adfero ipsa terreo benevolentia utrum.",
      id: "b6f6ca2e-e1cc-4005-8fd1-bbbf3e301533",
      isActive: true,
      isChargeableNow: false,
      lineitems: [
        {
          createdAt: new Date("2023-08-21T00:45:53.202Z"),
          id: "542a1868-424f-4d59-8020-678870334cdc",
          itemDescription: "Experience the white brilliance of our Hat, perfect for aggravating environments",
          itemName: "Licensed Marble Mouse",
          itemSku: "TAD4EYLVRI",
          notes: "Charisma theca video verus conduco attollo cervus decretum viridis.",
          taxAmount: 221,
          totalAmount: 1841,
          unitAmount: 270,
          unitQuantity: 6,
          updatedAt: new Date("2023-02-12T17:31:25.507Z"),
        },
        {
          createdAt: new Date("2023-09-30T05:29:29.258Z"),
          discountAmount: 15,
          id: "8d826834-e2c6-40fa-a93f-46269b34c77b",
          itemDescription: "New Chicken model with 79 GB RAM, 846 GB storage, and lovely features",
          itemName: "Intelligent Steel Table",
          itemSku: "V8HQCDQYUZ",
          taxAmount: 150,
          totalAmount: 2037,
          unitAmount: 317,
          unitQuantity: 6,
          updatedAt: new Date("2023-05-31T11:10:09.190Z"),
        },
        {
          createdAt: new Date("2023-12-16T13:52:52.341Z"),
          id: "828a583d-f269-4125-ac29-cc3ac667cffd",
          itemDescription: "Dach - Wolff's most advanced Car technology increases dense capabilities",
          itemName: "Modern Gold Soap",
          itemSku: "DYGKCTCLDJ",
          taxAmount: 41,
          totalAmount: 281,
          unitAmount: 30,
          unitQuantity: 8,
          updatedAt: new Date("2023-05-22T16:35:07.583Z"),
        },
        {
          createdAt: new Date("2023-08-12T19:45:39.705Z"),
          id: "8dfb021c-78fb-420d-ba19-22fdc69f2aea",
          itemDescription: "The sleek and unimportant Salad comes with salmon LED lighting for smart functionality",
          itemName: "Generic Aluminum Ball",
          itemSku: "BSBAXWAAFF",
          notes: "Cubo adversus victus subito asperiores vereor cibo tabgo.",
          taxAmount: 6,
          totalAmount: 78,
          unitAmount: 24,
          unitQuantity: 3,
          updatedAt: new Date("2023-11-13T12:39:15.951Z"),
        },
        {
          createdAt: new Date("2023-02-14T06:21:13.641Z"),
          discountAmount: 171,
          id: "fff39870-54ae-4af2-91aa-005bc9e727fd",
          itemDescription: "New Bike model with 29 GB RAM, 271 GB storage, and minty features",
          itemName: "Incredible Aluminum Chicken",
          itemSku: "6ERMJK20HE",
          taxAmount: 263,
          totalAmount: 3708,
          unitAmount: 452,
          unitQuantity: 8,
          updatedAt: new Date("2023-01-31T21:39:30.894Z"),
        },
      ],
      successUrl: "https://parched-kettledrum.com/",
      updatedAt: new Date("2025-12-10T19:02:34.966Z"),
      url: "https://forceful-laughter.biz/",
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
      amount: 81211,
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "GYD",
      description: "Adfero ipsa terreo benevolentia utrum.",
      id: "b6f6ca2e-e1cc-4005-8fd1-bbbf3e301533",
      isActive: true,
      isChargeableNow: false,
      lineitems: [
        {
          createdAt: new Date("2023-08-21T00:45:53.202Z"),
          id: "542a1868-424f-4d59-8020-678870334cdc",
          itemDescription: "Experience the white brilliance of our Hat, perfect for aggravating environments",
          itemName: "Licensed Marble Mouse",
          itemSku: "TAD4EYLVRI",
          notes: "Charisma theca video verus conduco attollo cervus decretum viridis.",
          taxAmount: 221,
          totalAmount: 1841,
          unitAmount: 270,
          unitQuantity: 6,
          updatedAt: new Date("2023-02-12T17:31:25.507Z"),
        },
        {
          createdAt: new Date("2023-09-30T05:29:29.258Z"),
          discountAmount: 15,
          id: "8d826834-e2c6-40fa-a93f-46269b34c77b",
          itemDescription: "New Chicken model with 79 GB RAM, 846 GB storage, and lovely features",
          itemName: "Intelligent Steel Table",
          itemSku: "V8HQCDQYUZ",
          taxAmount: 150,
          totalAmount: 2037,
          unitAmount: 317,
          unitQuantity: 6,
          updatedAt: new Date("2023-05-31T11:10:09.190Z"),
        },
        {
          createdAt: new Date("2023-12-16T13:52:52.341Z"),
          id: "828a583d-f269-4125-ac29-cc3ac667cffd",
          itemDescription: "Dach - Wolff's most advanced Car technology increases dense capabilities",
          itemName: "Modern Gold Soap",
          itemSku: "DYGKCTCLDJ",
          taxAmount: 41,
          totalAmount: 281,
          unitAmount: 30,
          unitQuantity: 8,
          updatedAt: new Date("2023-05-22T16:35:07.583Z"),
        },
        {
          createdAt: new Date("2023-08-12T19:45:39.705Z"),
          id: "8dfb021c-78fb-420d-ba19-22fdc69f2aea",
          itemDescription: "The sleek and unimportant Salad comes with salmon LED lighting for smart functionality",
          itemName: "Generic Aluminum Ball",
          itemSku: "BSBAXWAAFF",
          notes: "Cubo adversus victus subito asperiores vereor cibo tabgo.",
          taxAmount: 6,
          totalAmount: 78,
          unitAmount: 24,
          unitQuantity: 3,
          updatedAt: new Date("2023-11-13T12:39:15.951Z"),
        },
        {
          createdAt: new Date("2023-02-14T06:21:13.641Z"),
          discountAmount: 171,
          id: "fff39870-54ae-4af2-91aa-005bc9e727fd",
          itemDescription: "New Bike model with 29 GB RAM, 271 GB storage, and minty features",
          itemName: "Incredible Aluminum Chicken",
          itemSku: "6ERMJK20HE",
          taxAmount: 263,
          totalAmount: 3708,
          unitAmount: 452,
          unitQuantity: 8,
          updatedAt: new Date("2023-01-31T21:39:30.894Z"),
        },
      ],
      successUrl: "https://parched-kettledrum.com/",
      updatedAt: new Date("2025-12-10T19:02:34.966Z"),
      url: "https://forceful-laughter.biz/",
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
      cardBrand: "AMEX",
      cardLast4: "0819",
      createdAt: new Date("2022-03-10T00:19:42.086Z"),
      currency: "BIF",
      feeAmount: 3,
      id: "cb697617-f4a2-4c61-8f37-8585acb1a595",
      locationId: "94f7c68e-07de-40d1-9d6f-a0896363913f",
      notes: "Tactus vilicus.",
      paymentMethod: "BANK_TRANSFER",
      reference: "auctus",
      status: "SUCCEEDED",
      tenderType: "CHECK",
      tipAmount: 2,
      totalAmount: 44219,
      type: "INVOICE",
      updatedAt: new Date("2025-05-24T15:11:03.135Z"),
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
      cardBrand: "AMEX",
      cardLast4: "0819",
      createdAt: new Date("2022-03-10T00:19:42.086Z"),
      currency: "BIF",
      feeAmount: 3,
      id: "cb697617-f4a2-4c61-8f37-8585acb1a595",
      locationId: "94f7c68e-07de-40d1-9d6f-a0896363913f",
      notes: "Tactus vilicus.",
      paymentMethod: "BANK_TRANSFER",
      reference: "auctus",
      status: "SUCCEEDED",
      tenderType: "CHECK",
      tipAmount: 2,
      totalAmount: 44219,
      type: "INVOICE",
      updatedAt: new Date("2025-05-24T15:11:03.135Z"),
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
      currency: "WST",
      currentPeriodEndAt: new Date("2023-06-03T04:20:29.157Z"),
      currentPeriodStartAt: new Date("2023-05-21T03:55:58.846Z"),
      dayOfMonth: 1,
      description: "Innovative Mouse featuring important technology and Bamboo construction",
      endAt: new Date("2023-05-21T12:36:09.234Z"),
      id: "f7519009-e6cd-4e12-b266-7782c6582fdd",
      interval: 1,
      intervalUnit: "MONTH",
      lineitems: [],
      startAt: new Date("2023-05-29T06:04:51.030Z"),
      status: "ACTIVE",
      totalAmount: 75616,
      updatedAt: new Date("2023-12-15T22:33:27.051Z"),
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
      currency: "WST",
      currentPeriodEndAt: new Date("2023-06-03T04:20:29.157Z"),
      currentPeriodStartAt: new Date("2023-05-21T03:55:58.846Z"),
      dayOfMonth: 1,
      description: "Innovative Mouse featuring important technology and Bamboo construction",
      endAt: new Date("2023-05-21T12:36:09.234Z"),
      id: "f7519009-e6cd-4e12-b266-7782c6582fdd",
      interval: 1,
      intervalUnit: "MONTH",
      lineitems: [],
      startAt: new Date("2023-05-29T06:04:51.030Z"),
      status: "ACTIVE",
      totalAmount: 75616,
      updatedAt: new Date("2023-12-15T22:33:27.051Z"),
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
      amount: 81211,
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "GYD",
      description: "Adfero ipsa terreo benevolentia utrum.",
      id: "d7f2e50e-895a-49d4-8e39-aee0226e9880",
      isActive: true,
      isChargeableNow: false,
      lineitems: [
        {
          createdAt: new Date("2023-08-21T00:45:53.202Z"),
          id: "1dffc4c2-3475-40ea-ae51-9d51c42fe337",
          itemDescription: "Experience the white brilliance of our Hat, perfect for aggravating environments",
          itemName: "Licensed Marble Mouse",
          itemSku: "TAD4EYLVRI",
          notes: "Charisma theca video verus conduco attollo cervus decretum viridis.",
          taxAmount: 221,
          totalAmount: 1841,
          unitAmount: 270,
          unitQuantity: 6,
          updatedAt: new Date("2023-02-12T17:31:25.507Z"),
        },
        {
          createdAt: new Date("2023-09-30T05:29:29.258Z"),
          discountAmount: 15,
          id: "2adb9164-4288-4862-91c5-ce845917c5fe",
          itemDescription: "New Chicken model with 79 GB RAM, 846 GB storage, and lovely features",
          itemName: "Intelligent Steel Table",
          itemSku: "V8HQCDQYUZ",
          taxAmount: 150,
          totalAmount: 2037,
          unitAmount: 317,
          unitQuantity: 6,
          updatedAt: new Date("2023-05-31T11:10:09.190Z"),
        },
        {
          createdAt: new Date("2023-12-16T13:52:52.341Z"),
          id: "fb966ffe-87ee-41ee-bc6b-15cab2ff65f3",
          itemDescription: "Dach - Wolff's most advanced Car technology increases dense capabilities",
          itemName: "Modern Gold Soap",
          itemSku: "DYGKCTCLDJ",
          taxAmount: 41,
          totalAmount: 281,
          unitAmount: 30,
          unitQuantity: 8,
          updatedAt: new Date("2023-05-22T16:35:07.583Z"),
        },
        {
          createdAt: new Date("2023-08-12T19:45:39.705Z"),
          id: "b7fff63f-7cf2-4186-8893-214575cfac8a",
          itemDescription: "The sleek and unimportant Salad comes with salmon LED lighting for smart functionality",
          itemName: "Generic Aluminum Ball",
          itemSku: "BSBAXWAAFF",
          notes: "Cubo adversus victus subito asperiores vereor cibo tabgo.",
          taxAmount: 6,
          totalAmount: 78,
          unitAmount: 24,
          unitQuantity: 3,
          updatedAt: new Date("2023-11-13T12:39:15.951Z"),
        },
        {
          createdAt: new Date("2023-02-14T06:21:13.641Z"),
          discountAmount: 171,
          id: "f0122b45-bd2e-48ce-81c7-8bee91460edd",
          itemDescription: "New Bike model with 29 GB RAM, 271 GB storage, and minty features",
          itemName: "Incredible Aluminum Chicken",
          itemSku: "6ERMJK20HE",
          taxAmount: 263,
          totalAmount: 3708,
          unitAmount: 452,
          unitQuantity: 8,
          updatedAt: new Date("2023-01-31T21:39:30.894Z"),
        },
      ],
      successUrl: "https://parched-kettledrum.com/",
      updatedAt: new Date("2025-12-10T19:02:34.976Z"),
      url: "https://forceful-laughter.biz/",
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
      amount: 81211,
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "GYD",
      description: "Adfero ipsa terreo benevolentia utrum.",
      id: "d7f2e50e-895a-49d4-8e39-aee0226e9880",
      isActive: true,
      isChargeableNow: false,
      lineitems: [
        {
          createdAt: new Date("2023-08-21T00:45:53.202Z"),
          id: "1dffc4c2-3475-40ea-ae51-9d51c42fe337",
          itemDescription: "Experience the white brilliance of our Hat, perfect for aggravating environments",
          itemName: "Licensed Marble Mouse",
          itemSku: "TAD4EYLVRI",
          notes: "Charisma theca video verus conduco attollo cervus decretum viridis.",
          taxAmount: 221,
          totalAmount: 1841,
          unitAmount: 270,
          unitQuantity: 6,
          updatedAt: new Date("2023-02-12T17:31:25.507Z"),
        },
        {
          createdAt: new Date("2023-09-30T05:29:29.258Z"),
          discountAmount: 15,
          id: "2adb9164-4288-4862-91c5-ce845917c5fe",
          itemDescription: "New Chicken model with 79 GB RAM, 846 GB storage, and lovely features",
          itemName: "Intelligent Steel Table",
          itemSku: "V8HQCDQYUZ",
          taxAmount: 150,
          totalAmount: 2037,
          unitAmount: 317,
          unitQuantity: 6,
          updatedAt: new Date("2023-05-31T11:10:09.190Z"),
        },
        {
          createdAt: new Date("2023-12-16T13:52:52.341Z"),
          id: "fb966ffe-87ee-41ee-bc6b-15cab2ff65f3",
          itemDescription: "Dach - Wolff's most advanced Car technology increases dense capabilities",
          itemName: "Modern Gold Soap",
          itemSku: "DYGKCTCLDJ",
          taxAmount: 41,
          totalAmount: 281,
          unitAmount: 30,
          unitQuantity: 8,
          updatedAt: new Date("2023-05-22T16:35:07.583Z"),
        },
        {
          createdAt: new Date("2023-08-12T19:45:39.705Z"),
          id: "b7fff63f-7cf2-4186-8893-214575cfac8a",
          itemDescription: "The sleek and unimportant Salad comes with salmon LED lighting for smart functionality",
          itemName: "Generic Aluminum Ball",
          itemSku: "BSBAXWAAFF",
          notes: "Cubo adversus victus subito asperiores vereor cibo tabgo.",
          taxAmount: 6,
          totalAmount: 78,
          unitAmount: 24,
          unitQuantity: 3,
          updatedAt: new Date("2023-11-13T12:39:15.951Z"),
        },
        {
          createdAt: new Date("2023-02-14T06:21:13.641Z"),
          discountAmount: 171,
          id: "f0122b45-bd2e-48ce-81c7-8bee91460edd",
          itemDescription: "New Bike model with 29 GB RAM, 271 GB storage, and minty features",
          itemName: "Incredible Aluminum Chicken",
          itemSku: "6ERMJK20HE",
          taxAmount: 263,
          totalAmount: 3708,
          unitAmount: 452,
          unitQuantity: 8,
          updatedAt: new Date("2023-01-31T21:39:30.894Z"),
        },
      ],
      successUrl: "https://parched-kettledrum.com/",
      updatedAt: new Date("2025-12-10T19:02:34.976Z"),
      url: "https://forceful-laughter.biz/",
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
      cardBrand: "AMEX",
      cardLast4: "0819",
      createdAt: new Date("2022-03-10T00:19:42.086Z"),
      currency: "BIF",
      feeAmount: 3,
      id: "88f67501-63d9-4d34-9f8b-4ae8b27c5ae5",
      locationId: "94f7c68e-07de-40d1-9d6f-a0896363913f",
      notes: "Tactus vilicus.",
      paymentMethod: "BANK_TRANSFER",
      reference: "auctus",
      status: "SUCCEEDED",
      tenderType: "CHECK",
      tipAmount: 2,
      totalAmount: 44219,
      type: "INVOICE",
      updatedAt: new Date("2025-05-24T15:11:03.152Z"),
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
      cardBrand: "AMEX",
      cardLast4: "0819",
      createdAt: new Date("2022-03-10T00:19:42.086Z"),
      currency: "BIF",
      feeAmount: 3,
      id: "88f67501-63d9-4d34-9f8b-4ae8b27c5ae5",
      locationId: "94f7c68e-07de-40d1-9d6f-a0896363913f",
      notes: "Tactus vilicus.",
      paymentMethod: "BANK_TRANSFER",
      reference: "auctus",
      status: "SUCCEEDED",
      tenderType: "CHECK",
      tipAmount: 2,
      totalAmount: 44219,
      type: "INVOICE",
      updatedAt: new Date("2025-05-24T15:11:03.152Z"),
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
      currency: "WST",
      currentPeriodEndAt: new Date("2023-06-03T04:20:29.157Z"),
      currentPeriodStartAt: new Date("2023-05-21T03:55:58.846Z"),
      dayOfMonth: 1,
      description: "Innovative Mouse featuring important technology and Bamboo construction",
      endAt: new Date("2023-05-21T12:36:09.234Z"),
      id: "c599db6f-2bd5-4178-ab21-33a523666043",
      interval: 1,
      intervalUnit: "MONTH",
      lineitems: [],
      startAt: new Date("2023-05-29T06:04:51.030Z"),
      status: "ACTIVE",
      totalAmount: 75616,
      updatedAt: new Date("2023-12-15T22:33:27.054Z"),
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
      currency: "WST",
      currentPeriodEndAt: new Date("2023-06-03T04:20:29.157Z"),
      currentPeriodStartAt: new Date("2023-05-21T03:55:58.846Z"),
      dayOfMonth: 1,
      description: "Innovative Mouse featuring important technology and Bamboo construction",
      endAt: new Date("2023-05-21T12:36:09.234Z"),
      id: "c599db6f-2bd5-4178-ab21-33a523666043",
      interval: 1,
      intervalUnit: "MONTH",
      lineitems: [],
      startAt: new Date("2023-05-29T06:04:51.030Z"),
      status: "ACTIVE",
      totalAmount: 75616,
      updatedAt: new Date("2023-12-15T22:33:27.054Z"),
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
      amount: 81211,
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "GYD",
      description: "Adfero ipsa terreo benevolentia utrum.",
      id: "d7f2e50e-895a-49d4-8e39-aee0226e9880",
      isActive: true,
      isChargeableNow: false,
      lineitems: [
        {
          createdAt: new Date("2023-08-21T00:45:53.202Z"),
          id: "1dffc4c2-3475-40ea-ae51-9d51c42fe337",
          itemDescription: "Experience the white brilliance of our Hat, perfect for aggravating environments",
          itemName: "Licensed Marble Mouse",
          itemSku: "TAD4EYLVRI",
          notes: "Charisma theca video verus conduco attollo cervus decretum viridis.",
          taxAmount: 221,
          totalAmount: 1841,
          unitAmount: 270,
          unitQuantity: 6,
          updatedAt: new Date("2023-02-12T17:31:25.507Z"),
        },
        {
          createdAt: new Date("2023-09-30T05:29:29.258Z"),
          discountAmount: 15,
          id: "2adb9164-4288-4862-91c5-ce845917c5fe",
          itemDescription: "New Chicken model with 79 GB RAM, 846 GB storage, and lovely features",
          itemName: "Intelligent Steel Table",
          itemSku: "V8HQCDQYUZ",
          taxAmount: 150,
          totalAmount: 2037,
          unitAmount: 317,
          unitQuantity: 6,
          updatedAt: new Date("2023-05-31T11:10:09.190Z"),
        },
        {
          createdAt: new Date("2023-12-16T13:52:52.341Z"),
          id: "fb966ffe-87ee-41ee-bc6b-15cab2ff65f3",
          itemDescription: "Dach - Wolff's most advanced Car technology increases dense capabilities",
          itemName: "Modern Gold Soap",
          itemSku: "DYGKCTCLDJ",
          taxAmount: 41,
          totalAmount: 281,
          unitAmount: 30,
          unitQuantity: 8,
          updatedAt: new Date("2023-05-22T16:35:07.583Z"),
        },
        {
          createdAt: new Date("2023-08-12T19:45:39.705Z"),
          id: "b7fff63f-7cf2-4186-8893-214575cfac8a",
          itemDescription: "The sleek and unimportant Salad comes with salmon LED lighting for smart functionality",
          itemName: "Generic Aluminum Ball",
          itemSku: "BSBAXWAAFF",
          notes: "Cubo adversus victus subito asperiores vereor cibo tabgo.",
          taxAmount: 6,
          totalAmount: 78,
          unitAmount: 24,
          unitQuantity: 3,
          updatedAt: new Date("2023-11-13T12:39:15.951Z"),
        },
        {
          createdAt: new Date("2023-02-14T06:21:13.641Z"),
          discountAmount: 171,
          id: "f0122b45-bd2e-48ce-81c7-8bee91460edd",
          itemDescription: "New Bike model with 29 GB RAM, 271 GB storage, and minty features",
          itemName: "Incredible Aluminum Chicken",
          itemSku: "6ERMJK20HE",
          taxAmount: 263,
          totalAmount: 3708,
          unitAmount: 452,
          unitQuantity: 8,
          updatedAt: new Date("2023-01-31T21:39:30.894Z"),
        },
      ],
      successUrl: "https://parched-kettledrum.com/",
      updatedAt: new Date("2025-12-10T19:02:34.976Z"),
      url: "https://forceful-laughter.biz/",
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
      amount: 81211,
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "GYD",
      description: "Adfero ipsa terreo benevolentia utrum.",
      id: "d7f2e50e-895a-49d4-8e39-aee0226e9880",
      isActive: true,
      isChargeableNow: false,
      lineitems: [
        {
          createdAt: new Date("2023-08-21T00:45:53.202Z"),
          id: "1dffc4c2-3475-40ea-ae51-9d51c42fe337",
          itemDescription: "Experience the white brilliance of our Hat, perfect for aggravating environments",
          itemName: "Licensed Marble Mouse",
          itemSku: "TAD4EYLVRI",
          notes: "Charisma theca video verus conduco attollo cervus decretum viridis.",
          taxAmount: 221,
          totalAmount: 1841,
          unitAmount: 270,
          unitQuantity: 6,
          updatedAt: new Date("2023-02-12T17:31:25.507Z"),
        },
        {
          createdAt: new Date("2023-09-30T05:29:29.258Z"),
          discountAmount: 15,
          id: "2adb9164-4288-4862-91c5-ce845917c5fe",
          itemDescription: "New Chicken model with 79 GB RAM, 846 GB storage, and lovely features",
          itemName: "Intelligent Steel Table",
          itemSku: "V8HQCDQYUZ",
          taxAmount: 150,
          totalAmount: 2037,
          unitAmount: 317,
          unitQuantity: 6,
          updatedAt: new Date("2023-05-31T11:10:09.190Z"),
        },
        {
          createdAt: new Date("2023-12-16T13:52:52.341Z"),
          id: "fb966ffe-87ee-41ee-bc6b-15cab2ff65f3",
          itemDescription: "Dach - Wolff's most advanced Car technology increases dense capabilities",
          itemName: "Modern Gold Soap",
          itemSku: "DYGKCTCLDJ",
          taxAmount: 41,
          totalAmount: 281,
          unitAmount: 30,
          unitQuantity: 8,
          updatedAt: new Date("2023-05-22T16:35:07.583Z"),
        },
        {
          createdAt: new Date("2023-08-12T19:45:39.705Z"),
          id: "b7fff63f-7cf2-4186-8893-214575cfac8a",
          itemDescription: "The sleek and unimportant Salad comes with salmon LED lighting for smart functionality",
          itemName: "Generic Aluminum Ball",
          itemSku: "BSBAXWAAFF",
          notes: "Cubo adversus victus subito asperiores vereor cibo tabgo.",
          taxAmount: 6,
          totalAmount: 78,
          unitAmount: 24,
          unitQuantity: 3,
          updatedAt: new Date("2023-11-13T12:39:15.951Z"),
        },
        {
          createdAt: new Date("2023-02-14T06:21:13.641Z"),
          discountAmount: 171,
          id: "f0122b45-bd2e-48ce-81c7-8bee91460edd",
          itemDescription: "New Bike model with 29 GB RAM, 271 GB storage, and minty features",
          itemName: "Incredible Aluminum Chicken",
          itemSku: "6ERMJK20HE",
          taxAmount: 263,
          totalAmount: 3708,
          unitAmount: 452,
          unitQuantity: 8,
          updatedAt: new Date("2023-01-31T21:39:30.894Z"),
        },
      ],
      successUrl: "https://parched-kettledrum.com/",
      updatedAt: new Date("2025-12-10T19:02:34.976Z"),
      url: "https://forceful-laughter.biz/",
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
      cardBrand: "AMEX",
      cardLast4: "0819",
      createdAt: new Date("2022-03-10T00:19:42.086Z"),
      currency: "BIF",
      feeAmount: 3,
      id: "88f67501-63d9-4d34-9f8b-4ae8b27c5ae5",
      locationId: "94f7c68e-07de-40d1-9d6f-a0896363913f",
      notes: "Tactus vilicus.",
      paymentMethod: "BANK_TRANSFER",
      reference: "auctus",
      status: "SUCCEEDED",
      tenderType: "CHECK",
      tipAmount: 2,
      totalAmount: 44219,
      type: "INVOICE",
      updatedAt: new Date("2025-05-24T15:11:03.152Z"),
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
      cardBrand: "AMEX",
      cardLast4: "0819",
      createdAt: new Date("2022-03-10T00:19:42.086Z"),
      currency: "BIF",
      feeAmount: 3,
      id: "88f67501-63d9-4d34-9f8b-4ae8b27c5ae5",
      locationId: "94f7c68e-07de-40d1-9d6f-a0896363913f",
      notes: "Tactus vilicus.",
      paymentMethod: "BANK_TRANSFER",
      reference: "auctus",
      status: "SUCCEEDED",
      tenderType: "CHECK",
      tipAmount: 2,
      totalAmount: 44219,
      type: "INVOICE",
      updatedAt: new Date("2025-05-24T15:11:03.152Z"),
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
      currency: "WST",
      currentPeriodEndAt: new Date("2023-06-03T04:20:29.157Z"),
      currentPeriodStartAt: new Date("2023-05-21T03:55:58.846Z"),
      dayOfMonth: 1,
      description: "Innovative Mouse featuring important technology and Bamboo construction",
      endAt: new Date("2023-05-21T12:36:09.234Z"),
      id: "c599db6f-2bd5-4178-ab21-33a523666043",
      interval: 1,
      intervalUnit: "MONTH",
      lineitems: [],
      startAt: new Date("2023-05-29T06:04:51.030Z"),
      status: "ACTIVE",
      totalAmount: 75616,
      updatedAt: new Date("2023-12-15T22:33:27.054Z"),
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
      currency: "WST",
      currentPeriodEndAt: new Date("2023-06-03T04:20:29.157Z"),
      currentPeriodStartAt: new Date("2023-05-21T03:55:58.846Z"),
      dayOfMonth: 1,
      description: "Innovative Mouse featuring important technology and Bamboo construction",
      endAt: new Date("2023-05-21T12:36:09.234Z"),
      id: "c599db6f-2bd5-4178-ab21-33a523666043",
      interval: 1,
      intervalUnit: "MONTH",
      lineitems: [],
      startAt: new Date("2023-05-29T06:04:51.030Z"),
      status: "ACTIVE",
      totalAmount: 75616,
      updatedAt: new Date("2023-12-15T22:33:27.054Z"),
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