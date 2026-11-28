# Order

## Overview

### Available Operations

* [~~createAccountingOrder~~](#createaccountingorder) - Create an order :warning: **Deprecated**
* [createAssessmentOrder](#createassessmentorder) - Create an order
* [createPrintingOrder](#createprintingorder) - Create an order
* [~~getAccountingOrder~~](#getaccountingorder) - Retrieve an order :warning: **Deprecated**
* [getAssessmentOrder](#getassessmentorder) - Retrieve an order
* [getPrintingOrder](#getprintingorder) - Retrieve an order
* [~~listAccountingOrders~~](#listaccountingorders) - List all orders :warning: **Deprecated**
* [listPrintingOrders](#listprintingorders) - List all orders
* [~~patchAccountingOrder~~](#patchaccountingorder) - Update an order :warning: **Deprecated**
* [patchAssessmentOrder](#patchassessmentorder) - Update an order
* [patchPrintingOrder](#patchprintingorder) - Update an order
* [~~removeAccountingOrder~~](#removeaccountingorder) - Remove an order :warning: **Deprecated**
* [removePrintingOrder](#removeprintingorder) - Remove an order
* [~~updateAccountingOrder~~](#updateaccountingorder) - Update an order :warning: **Deprecated**
* [updateAssessmentOrder](#updateassessmentorder) - Update an order
* [updatePrintingOrder](#updateprintingorder) - Update an order

## ~~createAccountingOrder~~

Creates a AccountingOrder. Provide the unified AccountingOrder fields in the request body; they are mapped to the provider's API. Returns the created AccountingOrder.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAccountingOrder" method="post" path="/accounting/{connection_id}/order" example="accounting_order" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.createAccountingOrder({
    accountingOrder: {
      billingAddress: {
        address1: "125 Hayden Highway",
        city: "Altoona",
        countryCode: "US",
        postalCode: "94706-7691",
        region: "Louisiana",
        regionCode: "VT",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "GBP",
      id: "14fda958-cbf5-4edb-9aa5-7c656bd18783",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2020-11-20T03:46:49.837Z"),
      shippingAddress: {
        address1: "450 Garett Mall",
        city: "New Kamronburgh",
        countryCode: "US",
        postalCode: "76546",
        region: "Oregon",
        regionCode: "VA",
      },
      status: "AUTHORIZED",
      totalAmount: 0,
      type: "SALES",
      updatedAt: new Date("2022-02-16T03:15:53.798Z"),
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
import { accountingCreateAccountingOrder } from "@unified-api/typescript-sdk/funcs/accountingCreateAccountingOrder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingCreateAccountingOrder(unifiedTo, {
    accountingOrder: {
      billingAddress: {
        address1: "125 Hayden Highway",
        city: "Altoona",
        countryCode: "US",
        postalCode: "94706-7691",
        region: "Louisiana",
        regionCode: "VT",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "GBP",
      id: "14fda958-cbf5-4edb-9aa5-7c656bd18783",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2020-11-20T03:46:49.837Z"),
      shippingAddress: {
        address1: "450 Garett Mall",
        city: "New Kamronburgh",
        countryCode: "US",
        postalCode: "76546",
        region: "Oregon",
        regionCode: "VA",
      },
      status: "AUTHORIZED",
      totalAmount: 0,
      type: "SALES",
      updatedAt: new Date("2022-02-16T03:15:53.798Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingCreateAccountingOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAccountingOrderRequest](../../sdk/models/operations/createaccountingorderrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingOrder](../../sdk/models/shared/accountingorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createAssessmentOrder

Creates a AssessmentOrder. Provide the unified AssessmentOrder fields in the request body; they are mapped to the provider's API. Returns the created AssessmentOrder.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAssessmentOrder" method="post" path="/assessment/{connection_id}/order" example="assessment_order" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.createAssessmentOrder({
    assessmentOrder: {
      connectionId: "",
      createdAt: new Date("2021-09-18T10:33:57.803Z"),
      id: "9fde342b-9cc8-4d7e-8eb4-c459be102aa4",
      metadata: [],
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "jordan.braun@icloud.com",
      ],
      profileFirstName: "Jordan",
      profileGender: "NON_BINARY",
      profileLastName: "Braun",
      profileName: "Jordan Braun",
      profileResumeUrl: "https://astonishing-bug.com/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "322.658.2806 x3159",
      ],
      reference: "calcar",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 84,
      responseScore: 82,
      responseStatus: "REJECTED",
      responseUrl: "https://nervous-daughter.info/",
      status: "REJECTED",
      targetUrl: "https://idolized-suv.info",
      updatedAt: new Date("2023-02-04T23:17:06.377Z"),
      workspaceId: "<id>",
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
import { orderCreateAssessmentOrder } from "@unified-api/typescript-sdk/funcs/orderCreateAssessmentOrder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await orderCreateAssessmentOrder(unifiedTo, {
    assessmentOrder: {
      connectionId: "",
      createdAt: new Date("2021-09-18T10:33:57.803Z"),
      id: "9fde342b-9cc8-4d7e-8eb4-c459be102aa4",
      metadata: [],
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "jordan.braun@icloud.com",
      ],
      profileFirstName: "Jordan",
      profileGender: "NON_BINARY",
      profileLastName: "Braun",
      profileName: "Jordan Braun",
      profileResumeUrl: "https://astonishing-bug.com/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "322.658.2806 x3159",
      ],
      reference: "calcar",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 84,
      responseScore: 82,
      responseStatus: "REJECTED",
      responseUrl: "https://nervous-daughter.info/",
      status: "REJECTED",
      targetUrl: "https://idolized-suv.info",
      updatedAt: new Date("2023-02-04T23:17:06.377Z"),
      workspaceId: "<id>",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("orderCreateAssessmentOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAssessmentOrderRequest](../../sdk/models/operations/createassessmentorderrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AssessmentOrder](../../sdk/models/shared/assessmentorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createPrintingOrder

Creates a PrintingOrder. Provide the unified PrintingOrder fields in the request body; they are mapped to the provider's API. Returns the created PrintingOrder.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPrintingOrder" method="post" path="/printing/{connection_id}/order" example="printing_order" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.createPrintingOrder({
    printingOrder: {
      createdAt: new Date("2022-03-14T11:16:15.147Z"),
      currency: "USD",
      discountAmount: 0,
      id: "f70addd7-cf9d-460e-854b-e977c1fcef8b",
      lineitems: [
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/y54e6o9hYi/191/3357",
            },
          ],
          id: "1",
          name: "Bespoke Marble Chair",
          quantity: 2,
          retailPriceAmount: 54.89,
          sku: "IBDIE3XR",
          unitPriceAmount: 26.37,
        },
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/T7S5xf/3521/1221",
            },
          ],
          id: "2",
          name: "Electronic Cotton Hat",
          quantity: 1,
          retailPriceAmount: 23.94,
          unitPriceAmount: 10.04,
        },
      ],
      metadata: [],
      shipments: [],
      shippingAddress: {
        address1: "651 Main Street",
        city: "Euclid",
        country: "United States",
        countryCode: "US",
        email: "gary_leffler28@gmail.com",
        name: "Angelita Denesik",
        postalCode: "80301",
        region: "Colorado",
        regionCode: "AR",
        telephone: "808-831-6489 x62979",
      },
      shippingAmount: 4.69,
      shippingMethod: "STANDARD",
      status: "OTHER",
      subtotalAmount: 62.78,
      taxAmount: 5.02,
      totalAmount: 72.49,
      updatedAt: new Date("2025-01-24T06:32:58.660Z"),
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
import { orderCreatePrintingOrder } from "@unified-api/typescript-sdk/funcs/orderCreatePrintingOrder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await orderCreatePrintingOrder(unifiedTo, {
    printingOrder: {
      createdAt: new Date("2022-03-14T11:16:15.147Z"),
      currency: "USD",
      discountAmount: 0,
      id: "f70addd7-cf9d-460e-854b-e977c1fcef8b",
      lineitems: [
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/y54e6o9hYi/191/3357",
            },
          ],
          id: "1",
          name: "Bespoke Marble Chair",
          quantity: 2,
          retailPriceAmount: 54.89,
          sku: "IBDIE3XR",
          unitPriceAmount: 26.37,
        },
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/T7S5xf/3521/1221",
            },
          ],
          id: "2",
          name: "Electronic Cotton Hat",
          quantity: 1,
          retailPriceAmount: 23.94,
          unitPriceAmount: 10.04,
        },
      ],
      metadata: [],
      shipments: [],
      shippingAddress: {
        address1: "651 Main Street",
        city: "Euclid",
        country: "United States",
        countryCode: "US",
        email: "gary_leffler28@gmail.com",
        name: "Angelita Denesik",
        postalCode: "80301",
        region: "Colorado",
        regionCode: "AR",
        telephone: "808-831-6489 x62979",
      },
      shippingAmount: 4.69,
      shippingMethod: "STANDARD",
      status: "OTHER",
      subtotalAmount: 62.78,
      taxAmount: 5.02,
      totalAmount: 72.49,
      updatedAt: new Date("2025-01-24T06:32:58.660Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("orderCreatePrintingOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePrintingOrderRequest](../../sdk/models/operations/createprintingorderrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PrintingOrder](../../sdk/models/shared/printingorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## ~~getAccountingOrder~~

Retrieves a single AccountingOrder by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccountingOrder" method="get" path="/accounting/{connection_id}/order/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.getAccountingOrder({
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
import { accountingGetAccountingOrder } from "@unified-api/typescript-sdk/funcs/accountingGetAccountingOrder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingGetAccountingOrder(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingGetAccountingOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountingOrderRequest](../../sdk/models/operations/getaccountingorderrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingOrder](../../sdk/models/shared/accountingorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAssessmentOrder

Retrieves a single AssessmentOrder by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAssessmentOrder" method="get" path="/assessment/{connection_id}/order/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.getAssessmentOrder({
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
import { orderGetAssessmentOrder } from "@unified-api/typescript-sdk/funcs/orderGetAssessmentOrder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await orderGetAssessmentOrder(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("orderGetAssessmentOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAssessmentOrderRequest](../../sdk/models/operations/getassessmentorderrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AssessmentOrder](../../sdk/models/shared/assessmentorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPrintingOrder

Retrieves a single PrintingOrder by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPrintingOrder" method="get" path="/printing/{connection_id}/order/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.getPrintingOrder({
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
import { orderGetPrintingOrder } from "@unified-api/typescript-sdk/funcs/orderGetPrintingOrder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await orderGetPrintingOrder(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("orderGetPrintingOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPrintingOrderRequest](../../sdk/models/operations/getprintingorderrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PrintingOrder](../../sdk/models/shared/printingorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## ~~listAccountingOrders~~

Returns a list of AccountingOrders. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAccountingOrders" method="get" path="/accounting/{connection_id}/order" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.listAccountingOrders({
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
import { accountingListAccountingOrders } from "@unified-api/typescript-sdk/funcs/accountingListAccountingOrders.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingListAccountingOrders(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingListAccountingOrders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAccountingOrdersRequest](../../sdk/models/operations/listaccountingordersrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingOrder[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPrintingOrders

Returns a list of PrintingOrders. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPrintingOrders" method="get" path="/printing/{connection_id}/order" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.listPrintingOrders({
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
import { orderListPrintingOrders } from "@unified-api/typescript-sdk/funcs/orderListPrintingOrders.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await orderListPrintingOrders(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("orderListPrintingOrders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPrintingOrdersRequest](../../sdk/models/operations/listprintingordersrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PrintingOrder[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## ~~patchAccountingOrder~~

Updates the AccountingOrder identified by `id`. Provide the unified AccountingOrder fields to change in the request body.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAccountingOrder" method="patch" path="/accounting/{connection_id}/order/{id}" example="accounting_order" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.patchAccountingOrder({
    accountingOrder: {
      billingAddress: {
        address1: "125 Hayden Highway",
        city: "Altoona",
        countryCode: "US",
        postalCode: "94706-7691",
        region: "Louisiana",
        regionCode: "VT",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "GBP",
      id: "571fc319-5488-48cd-a6ce-bf7b320783da",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2020-11-20T03:46:49.837Z"),
      shippingAddress: {
        address1: "450 Garett Mall",
        city: "New Kamronburgh",
        countryCode: "US",
        postalCode: "76546",
        region: "Oregon",
        regionCode: "VA",
      },
      status: "AUTHORIZED",
      totalAmount: 0,
      type: "SALES",
      updatedAt: new Date("2022-02-16T03:15:53.807Z"),
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
import { accountingPatchAccountingOrder } from "@unified-api/typescript-sdk/funcs/accountingPatchAccountingOrder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingPatchAccountingOrder(unifiedTo, {
    accountingOrder: {
      billingAddress: {
        address1: "125 Hayden Highway",
        city: "Altoona",
        countryCode: "US",
        postalCode: "94706-7691",
        region: "Louisiana",
        regionCode: "VT",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "GBP",
      id: "571fc319-5488-48cd-a6ce-bf7b320783da",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2020-11-20T03:46:49.837Z"),
      shippingAddress: {
        address1: "450 Garett Mall",
        city: "New Kamronburgh",
        countryCode: "US",
        postalCode: "76546",
        region: "Oregon",
        regionCode: "VA",
      },
      status: "AUTHORIZED",
      totalAmount: 0,
      type: "SALES",
      updatedAt: new Date("2022-02-16T03:15:53.807Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingPatchAccountingOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAccountingOrderRequest](../../sdk/models/operations/patchaccountingorderrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingOrder](../../sdk/models/shared/accountingorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAssessmentOrder

Updates the AssessmentOrder identified by `id`. Provide the unified AssessmentOrder fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAssessmentOrder" method="patch" path="/assessment/{connection_id}/order/{id}" example="assessment_order" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.patchAssessmentOrder({
    assessmentOrder: {
      connectionId: "",
      createdAt: new Date("2021-09-18T10:33:57.803Z"),
      id: "7b88d273-6b7a-48e5-b652-8f08d54f4c31",
      metadata: [],
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "jordan.braun@icloud.com",
      ],
      profileFirstName: "Jordan",
      profileGender: "NON_BINARY",
      profileLastName: "Braun",
      profileName: "Jordan Braun",
      profileResumeUrl: "https://astonishing-bug.com/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "322.658.2806 x3159",
      ],
      reference: "calcar",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 84,
      responseScore: 82,
      responseStatus: "REJECTED",
      responseUrl: "https://nervous-daughter.info/",
      status: "REJECTED",
      targetUrl: "https://idolized-suv.info",
      updatedAt: new Date("2023-02-04T23:17:06.391Z"),
      workspaceId: "<id>",
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
import { orderPatchAssessmentOrder } from "@unified-api/typescript-sdk/funcs/orderPatchAssessmentOrder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await orderPatchAssessmentOrder(unifiedTo, {
    assessmentOrder: {
      connectionId: "",
      createdAt: new Date("2021-09-18T10:33:57.803Z"),
      id: "7b88d273-6b7a-48e5-b652-8f08d54f4c31",
      metadata: [],
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "jordan.braun@icloud.com",
      ],
      profileFirstName: "Jordan",
      profileGender: "NON_BINARY",
      profileLastName: "Braun",
      profileName: "Jordan Braun",
      profileResumeUrl: "https://astonishing-bug.com/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "322.658.2806 x3159",
      ],
      reference: "calcar",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 84,
      responseScore: 82,
      responseStatus: "REJECTED",
      responseUrl: "https://nervous-daughter.info/",
      status: "REJECTED",
      targetUrl: "https://idolized-suv.info",
      updatedAt: new Date("2023-02-04T23:17:06.391Z"),
      workspaceId: "<id>",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("orderPatchAssessmentOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAssessmentOrderRequest](../../sdk/models/operations/patchassessmentorderrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AssessmentOrder](../../sdk/models/shared/assessmentorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchPrintingOrder

Updates the PrintingOrder identified by `id`. Provide the unified PrintingOrder fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchPrintingOrder" method="patch" path="/printing/{connection_id}/order/{id}" example="printing_order" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.patchPrintingOrder({
    printingOrder: {
      createdAt: new Date("2022-03-14T11:16:15.147Z"),
      currency: "USD",
      discountAmount: 0,
      id: "bc2c69b4-2270-47f6-b73a-4dc5a490fbec",
      lineitems: [
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/y54e6o9hYi/191/3357",
            },
          ],
          id: "1",
          name: "Bespoke Marble Chair",
          quantity: 2,
          retailPriceAmount: 54.89,
          sku: "IBDIE3XR",
          unitPriceAmount: 26.37,
        },
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/T7S5xf/3521/1221",
            },
          ],
          id: "2",
          name: "Electronic Cotton Hat",
          quantity: 1,
          retailPriceAmount: 23.94,
          unitPriceAmount: 10.04,
        },
      ],
      metadata: [],
      shipments: [],
      shippingAddress: {
        address1: "651 Main Street",
        city: "Euclid",
        country: "United States",
        countryCode: "US",
        email: "gary_leffler28@gmail.com",
        name: "Angelita Denesik",
        postalCode: "80301",
        region: "Colorado",
        regionCode: "AR",
        telephone: "808-831-6489 x62979",
      },
      shippingAmount: 4.69,
      shippingMethod: "STANDARD",
      status: "OTHER",
      subtotalAmount: 62.78,
      taxAmount: 5.02,
      totalAmount: 72.49,
      updatedAt: new Date("2025-01-24T06:32:58.683Z"),
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
import { orderPatchPrintingOrder } from "@unified-api/typescript-sdk/funcs/orderPatchPrintingOrder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await orderPatchPrintingOrder(unifiedTo, {
    printingOrder: {
      createdAt: new Date("2022-03-14T11:16:15.147Z"),
      currency: "USD",
      discountAmount: 0,
      id: "bc2c69b4-2270-47f6-b73a-4dc5a490fbec",
      lineitems: [
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/y54e6o9hYi/191/3357",
            },
          ],
          id: "1",
          name: "Bespoke Marble Chair",
          quantity: 2,
          retailPriceAmount: 54.89,
          sku: "IBDIE3XR",
          unitPriceAmount: 26.37,
        },
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/T7S5xf/3521/1221",
            },
          ],
          id: "2",
          name: "Electronic Cotton Hat",
          quantity: 1,
          retailPriceAmount: 23.94,
          unitPriceAmount: 10.04,
        },
      ],
      metadata: [],
      shipments: [],
      shippingAddress: {
        address1: "651 Main Street",
        city: "Euclid",
        country: "United States",
        countryCode: "US",
        email: "gary_leffler28@gmail.com",
        name: "Angelita Denesik",
        postalCode: "80301",
        region: "Colorado",
        regionCode: "AR",
        telephone: "808-831-6489 x62979",
      },
      shippingAmount: 4.69,
      shippingMethod: "STANDARD",
      status: "OTHER",
      subtotalAmount: 62.78,
      taxAmount: 5.02,
      totalAmount: 72.49,
      updatedAt: new Date("2025-01-24T06:32:58.683Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("orderPatchPrintingOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchPrintingOrderRequest](../../sdk/models/operations/patchprintingorderrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PrintingOrder](../../sdk/models/shared/printingorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## ~~removeAccountingOrder~~

Deletes the AccountingOrder identified by `id`.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAccountingOrder" method="delete" path="/accounting/{connection_id}/order/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.removeAccountingOrder({
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
import { accountingRemoveAccountingOrder } from "@unified-api/typescript-sdk/funcs/accountingRemoveAccountingOrder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingRemoveAccountingOrder(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingRemoveAccountingOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAccountingOrderRequest](../../sdk/models/operations/removeaccountingorderrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAccountingOrderResponse](../../sdk/models/operations/removeaccountingorderresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removePrintingOrder

Deletes the PrintingOrder identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removePrintingOrder" method="delete" path="/printing/{connection_id}/order/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.removePrintingOrder({
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
import { orderRemovePrintingOrder } from "@unified-api/typescript-sdk/funcs/orderRemovePrintingOrder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await orderRemovePrintingOrder(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("orderRemovePrintingOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemovePrintingOrderRequest](../../sdk/models/operations/removeprintingorderrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemovePrintingOrderResponse](../../sdk/models/operations/removeprintingorderresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## ~~updateAccountingOrder~~

Updates the AccountingOrder identified by `id`. Provide the unified AccountingOrder fields to change in the request body.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAccountingOrder" method="put" path="/accounting/{connection_id}/order/{id}" example="accounting_order" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.updateAccountingOrder({
    accountingOrder: {
      billingAddress: {
        address1: "125 Hayden Highway",
        city: "Altoona",
        countryCode: "US",
        postalCode: "94706-7691",
        region: "Louisiana",
        regionCode: "VT",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "GBP",
      id: "571fc319-5488-48cd-a6ce-bf7b320783da",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2020-11-20T03:46:49.837Z"),
      shippingAddress: {
        address1: "450 Garett Mall",
        city: "New Kamronburgh",
        countryCode: "US",
        postalCode: "76546",
        region: "Oregon",
        regionCode: "VA",
      },
      status: "AUTHORIZED",
      totalAmount: 0,
      type: "SALES",
      updatedAt: new Date("2022-02-16T03:15:53.807Z"),
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
import { accountingUpdateAccountingOrder } from "@unified-api/typescript-sdk/funcs/accountingUpdateAccountingOrder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingUpdateAccountingOrder(unifiedTo, {
    accountingOrder: {
      billingAddress: {
        address1: "125 Hayden Highway",
        city: "Altoona",
        countryCode: "US",
        postalCode: "94706-7691",
        region: "Louisiana",
        regionCode: "VT",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "GBP",
      id: "571fc319-5488-48cd-a6ce-bf7b320783da",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2020-11-20T03:46:49.837Z"),
      shippingAddress: {
        address1: "450 Garett Mall",
        city: "New Kamronburgh",
        countryCode: "US",
        postalCode: "76546",
        region: "Oregon",
        regionCode: "VA",
      },
      status: "AUTHORIZED",
      totalAmount: 0,
      type: "SALES",
      updatedAt: new Date("2022-02-16T03:15:53.807Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingUpdateAccountingOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAccountingOrderRequest](../../sdk/models/operations/updateaccountingorderrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingOrder](../../sdk/models/shared/accountingorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAssessmentOrder

Updates the AssessmentOrder identified by `id`. Provide the unified AssessmentOrder fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAssessmentOrder" method="put" path="/assessment/{connection_id}/order/{id}" example="assessment_order" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.updateAssessmentOrder({
    assessmentOrder: {
      connectionId: "",
      createdAt: new Date("2021-09-18T10:33:57.803Z"),
      id: "7b88d273-6b7a-48e5-b652-8f08d54f4c31",
      metadata: [],
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "jordan.braun@icloud.com",
      ],
      profileFirstName: "Jordan",
      profileGender: "NON_BINARY",
      profileLastName: "Braun",
      profileName: "Jordan Braun",
      profileResumeUrl: "https://astonishing-bug.com/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "322.658.2806 x3159",
      ],
      reference: "calcar",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 84,
      responseScore: 82,
      responseStatus: "REJECTED",
      responseUrl: "https://nervous-daughter.info/",
      status: "REJECTED",
      targetUrl: "https://idolized-suv.info",
      updatedAt: new Date("2023-02-04T23:17:06.391Z"),
      workspaceId: "<id>",
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
import { orderUpdateAssessmentOrder } from "@unified-api/typescript-sdk/funcs/orderUpdateAssessmentOrder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await orderUpdateAssessmentOrder(unifiedTo, {
    assessmentOrder: {
      connectionId: "",
      createdAt: new Date("2021-09-18T10:33:57.803Z"),
      id: "7b88d273-6b7a-48e5-b652-8f08d54f4c31",
      metadata: [],
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "jordan.braun@icloud.com",
      ],
      profileFirstName: "Jordan",
      profileGender: "NON_BINARY",
      profileLastName: "Braun",
      profileName: "Jordan Braun",
      profileResumeUrl: "https://astonishing-bug.com/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "322.658.2806 x3159",
      ],
      reference: "calcar",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 84,
      responseScore: 82,
      responseStatus: "REJECTED",
      responseUrl: "https://nervous-daughter.info/",
      status: "REJECTED",
      targetUrl: "https://idolized-suv.info",
      updatedAt: new Date("2023-02-04T23:17:06.391Z"),
      workspaceId: "<id>",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("orderUpdateAssessmentOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAssessmentOrderRequest](../../sdk/models/operations/updateassessmentorderrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AssessmentOrder](../../sdk/models/shared/assessmentorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updatePrintingOrder

Updates the PrintingOrder identified by `id`. Provide the unified PrintingOrder fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updatePrintingOrder" method="put" path="/printing/{connection_id}/order/{id}" example="printing_order" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.order.updatePrintingOrder({
    printingOrder: {
      createdAt: new Date("2022-03-14T11:16:15.147Z"),
      currency: "USD",
      discountAmount: 0,
      id: "bc2c69b4-2270-47f6-b73a-4dc5a490fbec",
      lineitems: [
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/y54e6o9hYi/191/3357",
            },
          ],
          id: "1",
          name: "Bespoke Marble Chair",
          quantity: 2,
          retailPriceAmount: 54.89,
          sku: "IBDIE3XR",
          unitPriceAmount: 26.37,
        },
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/T7S5xf/3521/1221",
            },
          ],
          id: "2",
          name: "Electronic Cotton Hat",
          quantity: 1,
          retailPriceAmount: 23.94,
          unitPriceAmount: 10.04,
        },
      ],
      metadata: [],
      shipments: [],
      shippingAddress: {
        address1: "651 Main Street",
        city: "Euclid",
        country: "United States",
        countryCode: "US",
        email: "gary_leffler28@gmail.com",
        name: "Angelita Denesik",
        postalCode: "80301",
        region: "Colorado",
        regionCode: "AR",
        telephone: "808-831-6489 x62979",
      },
      shippingAmount: 4.69,
      shippingMethod: "STANDARD",
      status: "OTHER",
      subtotalAmount: 62.78,
      taxAmount: 5.02,
      totalAmount: 72.49,
      updatedAt: new Date("2025-01-24T06:32:58.683Z"),
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
import { orderUpdatePrintingOrder } from "@unified-api/typescript-sdk/funcs/orderUpdatePrintingOrder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await orderUpdatePrintingOrder(unifiedTo, {
    printingOrder: {
      createdAt: new Date("2022-03-14T11:16:15.147Z"),
      currency: "USD",
      discountAmount: 0,
      id: "bc2c69b4-2270-47f6-b73a-4dc5a490fbec",
      lineitems: [
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/y54e6o9hYi/191/3357",
            },
          ],
          id: "1",
          name: "Bespoke Marble Chair",
          quantity: 2,
          retailPriceAmount: 54.89,
          sku: "IBDIE3XR",
          unitPriceAmount: 26.37,
        },
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/T7S5xf/3521/1221",
            },
          ],
          id: "2",
          name: "Electronic Cotton Hat",
          quantity: 1,
          retailPriceAmount: 23.94,
          unitPriceAmount: 10.04,
        },
      ],
      metadata: [],
      shipments: [],
      shippingAddress: {
        address1: "651 Main Street",
        city: "Euclid",
        country: "United States",
        countryCode: "US",
        email: "gary_leffler28@gmail.com",
        name: "Angelita Denesik",
        postalCode: "80301",
        region: "Colorado",
        regionCode: "AR",
        telephone: "808-831-6489 x62979",
      },
      shippingAmount: 4.69,
      shippingMethod: "STANDARD",
      status: "OTHER",
      subtotalAmount: 62.78,
      taxAmount: 5.02,
      totalAmount: 72.49,
      updatedAt: new Date("2025-01-24T06:32:58.683Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("orderUpdatePrintingOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePrintingOrderRequest](../../sdk/models/operations/updateprintingorderrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PrintingOrder](../../sdk/models/shared/printingorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |