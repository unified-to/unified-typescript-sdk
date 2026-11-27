# Link

## Overview

### Available Operations

* [createCalendarLink](#createcalendarlink) - Create a link
* [createPaymentLink](#createpaymentlink) - Create a link
* [getCalendarLink](#getcalendarlink) - Retrieve a link
* [getPaymentLink](#getpaymentlink) - Retrieve a link
* [listCalendarLinks](#listcalendarlinks) - List all links
* [listPaymentLinks](#listpaymentlinks) - List all links
* [patchCalendarLink](#patchcalendarlink) - Update a link
* [patchPaymentLink](#patchpaymentlink) - Update a link
* [removeCalendarLink](#removecalendarlink) - Remove a link
* [removePaymentLink](#removepaymentlink) - Remove a link
* [updateCalendarLink](#updatecalendarlink) - Update a link
* [updatePaymentLink](#updatepaymentlink) - Update a link

## createCalendarLink

Creates a CalendarLink. Provide the unified CalendarLink fields in the request body; they are mapped to the provider's API. Returns the created CalendarLink.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCalendarLink" method="post" path="/calendar/{connection_id}/link" example="calendar_link" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.link.createCalendarLink({
    calendarLink: {
      createdAt: "2023-03-07T13:34:11.959Z",
      description: "Vito confero utilis.",
      duration: 74,
      id: "4810f926-c88a-42e8-b169-e56baaab6936",
      isActive: true,
      metadata: [],
      name: "Animus anser.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-25T23:56:59.321Z",
      url: "https://whirlwind-entry.name",
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
import { calendarCreateCalendarLink } from "@unified-api/typescript-sdk/funcs/calendarCreateCalendarLink.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarCreateCalendarLink(unifiedTo, {
    calendarLink: {
      createdAt: "2023-03-07T13:34:11.959Z",
      description: "Vito confero utilis.",
      duration: 74,
      id: "4810f926-c88a-42e8-b169-e56baaab6936",
      isActive: true,
      metadata: [],
      name: "Animus anser.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-25T23:56:59.321Z",
      url: "https://whirlwind-entry.name",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarCreateCalendarLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCalendarLinkRequest](../../sdk/models/operations/createcalendarlinkrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarLink](../../sdk/models/shared/calendarlink.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createPaymentLink

Creates a PaymentLink. Provide the unified PaymentLink fields in the request body; they are mapped to the provider's API. Returns the created PaymentLink.

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
  const result = await unifiedTo.link.createPaymentLink({
    paymentLink: {
      amount: 17001.68,
      contactEmail: "Clovis8@yahoo.com",
      contactName: "Lilliana Dibbert",
      contactPhone: "963-764-0961",
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "CAD",
      description: "The Daron Sausages is the latest in a series of informal products from Dach, Beatty and Moen",
      id: "b56347cf-7fa2-4be3-9565-bc976d989ac9",
      isActive: true,
      isChargeableNow: true,
      lineitems: [
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "3c17c18e-5a9e-4448-95f6-90951c70640a",
          itemDescription: "Introducing the Syrian Arab Republic-inspired Chips, blending neat style with local craftsmanship",
          itemName: "Electronic Metal Tuna",
          taxAmount: 0,
          totalAmount: 9342,
          unitAmount: 519,
          unitQuantity: 18,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          discountAmount: 424.32,
          id: "90e03e01-c56d-4487-9185-d05541a201a3",
          itemDescription: "Soft Computer designed with Bronze for junior performance",
          itemName: "Rustic Concrete Shoes",
          notes: "Doloremque appositus cito cursim bellicus rerum ubi voluptatibus.",
          taxAmount: 0,
          totalAmount: 6647.68,
          unitAmount: 884,
          unitQuantity: 8,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "0422f073-ac65-4d91-9064-ea47e0b4066b",
          itemDescription: "The Donnie Shirt is the latest in a series of tinted products from Nitzsche and Sons",
          itemName: "Intelligent Marble Keyboard",
          notes: "Damnatio aut bene.",
          taxAmount: 0,
          totalAmount: 1012,
          unitAmount: 506,
          unitQuantity: 2,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
      ],
      metadata: [],
      successUrl: "https://finished-retention.com",
      updatedAt: new Date("2024-04-22T19:12:33.196Z"),
      url: "https://pay.example.com/b56347cf-7fa2-4be3-9565-bc976d989ac9",
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
      contactEmail: "Clovis8@yahoo.com",
      contactName: "Lilliana Dibbert",
      contactPhone: "963-764-0961",
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "CAD",
      description: "The Daron Sausages is the latest in a series of informal products from Dach, Beatty and Moen",
      id: "b56347cf-7fa2-4be3-9565-bc976d989ac9",
      isActive: true,
      isChargeableNow: true,
      lineitems: [
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "3c17c18e-5a9e-4448-95f6-90951c70640a",
          itemDescription: "Introducing the Syrian Arab Republic-inspired Chips, blending neat style with local craftsmanship",
          itemName: "Electronic Metal Tuna",
          taxAmount: 0,
          totalAmount: 9342,
          unitAmount: 519,
          unitQuantity: 18,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          discountAmount: 424.32,
          id: "90e03e01-c56d-4487-9185-d05541a201a3",
          itemDescription: "Soft Computer designed with Bronze for junior performance",
          itemName: "Rustic Concrete Shoes",
          notes: "Doloremque appositus cito cursim bellicus rerum ubi voluptatibus.",
          taxAmount: 0,
          totalAmount: 6647.68,
          unitAmount: 884,
          unitQuantity: 8,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "0422f073-ac65-4d91-9064-ea47e0b4066b",
          itemDescription: "The Donnie Shirt is the latest in a series of tinted products from Nitzsche and Sons",
          itemName: "Intelligent Marble Keyboard",
          notes: "Damnatio aut bene.",
          taxAmount: 0,
          totalAmount: 1012,
          unitAmount: 506,
          unitQuantity: 2,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
      ],
      metadata: [],
      successUrl: "https://finished-retention.com",
      updatedAt: new Date("2024-04-22T19:12:33.196Z"),
      url: "https://pay.example.com/b56347cf-7fa2-4be3-9565-bc976d989ac9",
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

## getCalendarLink

Retrieves a single CalendarLink by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCalendarLink" method="get" path="/calendar/{connection_id}/link/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.link.getCalendarLink({
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
import { calendarGetCalendarLink } from "@unified-api/typescript-sdk/funcs/calendarGetCalendarLink.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarGetCalendarLink(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarGetCalendarLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCalendarLinkRequest](../../sdk/models/operations/getcalendarlinkrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarLink](../../sdk/models/shared/calendarlink.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPaymentLink

Retrieves a single PaymentLink by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

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
  const result = await unifiedTo.link.getPaymentLink({
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

## listCalendarLinks

Returns a list of CalendarLinks. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCalendarLinks" method="get" path="/calendar/{connection_id}/link" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.link.listCalendarLinks({
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
import { calendarListCalendarLinks } from "@unified-api/typescript-sdk/funcs/calendarListCalendarLinks.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarListCalendarLinks(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarListCalendarLinks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCalendarLinksRequest](../../sdk/models/operations/listcalendarlinksrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarLink[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPaymentLinks

Returns a list of PaymentLinks. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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
  const result = await unifiedTo.link.listPaymentLinks({
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

## patchCalendarLink

Updates the CalendarLink identified by `id`. Provide the unified CalendarLink fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCalendarLink" method="patch" path="/calendar/{connection_id}/link/{id}" example="calendar_link" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.link.patchCalendarLink({
    calendarLink: {
      createdAt: "2023-03-07T13:34:11.959Z",
      description: "Vito confero utilis.",
      duration: 74,
      id: "3180a810-8821-4589-8bba-98ccce586908",
      isActive: true,
      metadata: [],
      name: "Animus anser.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-25T23:56:59.324Z",
      url: "https://whirlwind-entry.name",
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
import { calendarPatchCalendarLink } from "@unified-api/typescript-sdk/funcs/calendarPatchCalendarLink.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarPatchCalendarLink(unifiedTo, {
    calendarLink: {
      createdAt: "2023-03-07T13:34:11.959Z",
      description: "Vito confero utilis.",
      duration: 74,
      id: "3180a810-8821-4589-8bba-98ccce586908",
      isActive: true,
      metadata: [],
      name: "Animus anser.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-25T23:56:59.324Z",
      url: "https://whirlwind-entry.name",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarPatchCalendarLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCalendarLinkRequest](../../sdk/models/operations/patchcalendarlinkrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarLink](../../sdk/models/shared/calendarlink.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchPaymentLink

Updates the PaymentLink identified by `id`. Provide the unified PaymentLink fields to change in the request body.

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
  const result = await unifiedTo.link.patchPaymentLink({
    paymentLink: {
      amount: 17001.68,
      contactEmail: "Clovis8@yahoo.com",
      contactName: "Lilliana Dibbert",
      contactPhone: "963-764-0961",
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "CAD",
      description: "The Daron Sausages is the latest in a series of informal products from Dach, Beatty and Moen",
      id: "045ba34d-0c68-4862-9607-b1d44f7971bf",
      isActive: true,
      isChargeableNow: true,
      lineitems: [
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "400a9ad9-73d5-4353-97a5-e081e8d81de8",
          itemDescription: "Introducing the Syrian Arab Republic-inspired Chips, blending neat style with local craftsmanship",
          itemName: "Electronic Metal Tuna",
          taxAmount: 0,
          totalAmount: 9342,
          unitAmount: 519,
          unitQuantity: 18,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          discountAmount: 424.32,
          id: "49d6c2cb-c3b5-4d6e-8365-822f0c91ddb8",
          itemDescription: "Soft Computer designed with Bronze for junior performance",
          itemName: "Rustic Concrete Shoes",
          notes: "Doloremque appositus cito cursim bellicus rerum ubi voluptatibus.",
          taxAmount: 0,
          totalAmount: 6647.68,
          unitAmount: 884,
          unitQuantity: 8,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "dac7799b-6778-46ec-af00-dfa78262a386",
          itemDescription: "The Donnie Shirt is the latest in a series of tinted products from Nitzsche and Sons",
          itemName: "Intelligent Marble Keyboard",
          notes: "Damnatio aut bene.",
          taxAmount: 0,
          totalAmount: 1012,
          unitAmount: 506,
          unitQuantity: 2,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
      ],
      metadata: [],
      successUrl: "https://finished-retention.com",
      updatedAt: new Date("2024-04-22T19:12:33.200Z"),
      url: "https://pay.example.com/045ba34d-0c68-4862-9607-b1d44f7971bf",
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
      contactEmail: "Clovis8@yahoo.com",
      contactName: "Lilliana Dibbert",
      contactPhone: "963-764-0961",
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "CAD",
      description: "The Daron Sausages is the latest in a series of informal products from Dach, Beatty and Moen",
      id: "045ba34d-0c68-4862-9607-b1d44f7971bf",
      isActive: true,
      isChargeableNow: true,
      lineitems: [
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "400a9ad9-73d5-4353-97a5-e081e8d81de8",
          itemDescription: "Introducing the Syrian Arab Republic-inspired Chips, blending neat style with local craftsmanship",
          itemName: "Electronic Metal Tuna",
          taxAmount: 0,
          totalAmount: 9342,
          unitAmount: 519,
          unitQuantity: 18,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          discountAmount: 424.32,
          id: "49d6c2cb-c3b5-4d6e-8365-822f0c91ddb8",
          itemDescription: "Soft Computer designed with Bronze for junior performance",
          itemName: "Rustic Concrete Shoes",
          notes: "Doloremque appositus cito cursim bellicus rerum ubi voluptatibus.",
          taxAmount: 0,
          totalAmount: 6647.68,
          unitAmount: 884,
          unitQuantity: 8,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "dac7799b-6778-46ec-af00-dfa78262a386",
          itemDescription: "The Donnie Shirt is the latest in a series of tinted products from Nitzsche and Sons",
          itemName: "Intelligent Marble Keyboard",
          notes: "Damnatio aut bene.",
          taxAmount: 0,
          totalAmount: 1012,
          unitAmount: 506,
          unitQuantity: 2,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
      ],
      metadata: [],
      successUrl: "https://finished-retention.com",
      updatedAt: new Date("2024-04-22T19:12:33.200Z"),
      url: "https://pay.example.com/045ba34d-0c68-4862-9607-b1d44f7971bf",
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

## removeCalendarLink

Deletes the CalendarLink identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCalendarLink" method="delete" path="/calendar/{connection_id}/link/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.link.removeCalendarLink({
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
import { calendarRemoveCalendarLink } from "@unified-api/typescript-sdk/funcs/calendarRemoveCalendarLink.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarRemoveCalendarLink(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarRemoveCalendarLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCalendarLinkRequest](../../sdk/models/operations/removecalendarlinkrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCalendarLinkResponse](../../sdk/models/operations/removecalendarlinkresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removePaymentLink

Deletes the PaymentLink identified by `id`.

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
  const result = await unifiedTo.link.removePaymentLink({
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

## updateCalendarLink

Updates the CalendarLink identified by `id`. Provide the unified CalendarLink fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCalendarLink" method="put" path="/calendar/{connection_id}/link/{id}" example="calendar_link" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.link.updateCalendarLink({
    calendarLink: {
      createdAt: "2023-03-07T13:34:11.959Z",
      description: "Vito confero utilis.",
      duration: 74,
      id: "3180a810-8821-4589-8bba-98ccce586908",
      isActive: true,
      metadata: [],
      name: "Animus anser.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-25T23:56:59.324Z",
      url: "https://whirlwind-entry.name",
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
import { calendarUpdateCalendarLink } from "@unified-api/typescript-sdk/funcs/calendarUpdateCalendarLink.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarUpdateCalendarLink(unifiedTo, {
    calendarLink: {
      createdAt: "2023-03-07T13:34:11.959Z",
      description: "Vito confero utilis.",
      duration: 74,
      id: "3180a810-8821-4589-8bba-98ccce586908",
      isActive: true,
      metadata: [],
      name: "Animus anser.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-25T23:56:59.324Z",
      url: "https://whirlwind-entry.name",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarUpdateCalendarLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCalendarLinkRequest](../../sdk/models/operations/updatecalendarlinkrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarLink](../../sdk/models/shared/calendarlink.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updatePaymentLink

Updates the PaymentLink identified by `id`. Provide the unified PaymentLink fields to change in the request body.

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
  const result = await unifiedTo.link.updatePaymentLink({
    paymentLink: {
      amount: 17001.68,
      contactEmail: "Clovis8@yahoo.com",
      contactName: "Lilliana Dibbert",
      contactPhone: "963-764-0961",
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "CAD",
      description: "The Daron Sausages is the latest in a series of informal products from Dach, Beatty and Moen",
      id: "045ba34d-0c68-4862-9607-b1d44f7971bf",
      isActive: true,
      isChargeableNow: true,
      lineitems: [
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "400a9ad9-73d5-4353-97a5-e081e8d81de8",
          itemDescription: "Introducing the Syrian Arab Republic-inspired Chips, blending neat style with local craftsmanship",
          itemName: "Electronic Metal Tuna",
          taxAmount: 0,
          totalAmount: 9342,
          unitAmount: 519,
          unitQuantity: 18,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          discountAmount: 424.32,
          id: "49d6c2cb-c3b5-4d6e-8365-822f0c91ddb8",
          itemDescription: "Soft Computer designed with Bronze for junior performance",
          itemName: "Rustic Concrete Shoes",
          notes: "Doloremque appositus cito cursim bellicus rerum ubi voluptatibus.",
          taxAmount: 0,
          totalAmount: 6647.68,
          unitAmount: 884,
          unitQuantity: 8,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "dac7799b-6778-46ec-af00-dfa78262a386",
          itemDescription: "The Donnie Shirt is the latest in a series of tinted products from Nitzsche and Sons",
          itemName: "Intelligent Marble Keyboard",
          notes: "Damnatio aut bene.",
          taxAmount: 0,
          totalAmount: 1012,
          unitAmount: 506,
          unitQuantity: 2,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
      ],
      metadata: [],
      successUrl: "https://finished-retention.com",
      updatedAt: new Date("2024-04-22T19:12:33.200Z"),
      url: "https://pay.example.com/045ba34d-0c68-4862-9607-b1d44f7971bf",
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
      contactEmail: "Clovis8@yahoo.com",
      contactName: "Lilliana Dibbert",
      contactPhone: "963-764-0961",
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "CAD",
      description: "The Daron Sausages is the latest in a series of informal products from Dach, Beatty and Moen",
      id: "045ba34d-0c68-4862-9607-b1d44f7971bf",
      isActive: true,
      isChargeableNow: true,
      lineitems: [
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "400a9ad9-73d5-4353-97a5-e081e8d81de8",
          itemDescription: "Introducing the Syrian Arab Republic-inspired Chips, blending neat style with local craftsmanship",
          itemName: "Electronic Metal Tuna",
          taxAmount: 0,
          totalAmount: 9342,
          unitAmount: 519,
          unitQuantity: 18,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          discountAmount: 424.32,
          id: "49d6c2cb-c3b5-4d6e-8365-822f0c91ddb8",
          itemDescription: "Soft Computer designed with Bronze for junior performance",
          itemName: "Rustic Concrete Shoes",
          notes: "Doloremque appositus cito cursim bellicus rerum ubi voluptatibus.",
          taxAmount: 0,
          totalAmount: 6647.68,
          unitAmount: 884,
          unitQuantity: 8,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
        {
          createdAt: new Date("2023-06-04T16:11:45.685Z"),
          id: "dac7799b-6778-46ec-af00-dfa78262a386",
          itemDescription: "The Donnie Shirt is the latest in a series of tinted products from Nitzsche and Sons",
          itemName: "Intelligent Marble Keyboard",
          notes: "Damnatio aut bene.",
          taxAmount: 0,
          totalAmount: 1012,
          unitAmount: 506,
          unitQuantity: 2,
          updatedAt: new Date("2023-06-04T16:11:45.685Z"),
        },
      ],
      metadata: [],
      successUrl: "https://finished-retention.com",
      updatedAt: new Date("2024-04-22T19:12:33.200Z"),
      url: "https://pay.example.com/045ba34d-0c68-4862-9607-b1d44f7971bf",
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