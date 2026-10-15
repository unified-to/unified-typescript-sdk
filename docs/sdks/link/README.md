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

Create a link

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
      description: "Vitium clibanus laboriosam uxor denuncio.",
      duration: 74,
      id: "e0d691c2-856f-4c94-a487-ac95d62e5d1a",
      isActive: true,
      name: "Sopor sopor ancilla animus anser dignissimos vito confero utilis.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-13T19:08:59.051Z",
      url: "https://annual-apricot.info/",
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
      description: "Vitium clibanus laboriosam uxor denuncio.",
      duration: 74,
      id: "e0d691c2-856f-4c94-a487-ac95d62e5d1a",
      isActive: true,
      name: "Sopor sopor ancilla animus anser dignissimos vito confero utilis.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-13T19:08:59.051Z",
      url: "https://annual-apricot.info/",
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
  const result = await unifiedTo.link.createPaymentLink({
    paymentLink: {
      amount: 81211,
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "GYD",
      description: "Adfero ipsa terreo benevolentia utrum.",
      id: "8ec10a66-a26a-45f9-937f-5037b4baa940",
      isActive: true,
      isChargeableNow: false,
      lineitems: [
        {
          createdAt: new Date("2023-08-21T00:45:53.202Z"),
          id: "474960bd-8bc1-4813-9f18-26d15c7107b7",
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
          id: "d9c4d656-5e66-4244-b49e-2c1f389991ca",
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
          id: "89a2ab86-cc2a-499b-a33d-ee1bdccd17b3",
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
          id: "6adfe3c3-b169-495a-b1b8-97611e7f6aca",
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
          id: "0c0c4afe-ba4e-4707-8126-ea28069d2486",
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
      updatedAt: new Date("2025-12-31T08:10:53.476Z"),
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
      id: "8ec10a66-a26a-45f9-937f-5037b4baa940",
      isActive: true,
      isChargeableNow: false,
      lineitems: [
        {
          createdAt: new Date("2023-08-21T00:45:53.202Z"),
          id: "474960bd-8bc1-4813-9f18-26d15c7107b7",
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
          id: "d9c4d656-5e66-4244-b49e-2c1f389991ca",
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
          id: "89a2ab86-cc2a-499b-a33d-ee1bdccd17b3",
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
          id: "6adfe3c3-b169-495a-b1b8-97611e7f6aca",
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
          id: "0c0c4afe-ba4e-4707-8126-ea28069d2486",
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
      updatedAt: new Date("2025-12-31T08:10:53.476Z"),
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

## getCalendarLink

Retrieve a link

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

List all links

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

Update a link

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
      description: "Vitium clibanus laboriosam uxor denuncio.",
      duration: 74,
      id: "7e914137-b86b-46ce-9046-0d4925d25e9d",
      isActive: true,
      name: "Sopor sopor ancilla animus anser dignissimos vito confero utilis.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-13T19:08:59.052Z",
      url: "https://annual-apricot.info/",
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
      description: "Vitium clibanus laboriosam uxor denuncio.",
      duration: 74,
      id: "7e914137-b86b-46ce-9046-0d4925d25e9d",
      isActive: true,
      name: "Sopor sopor ancilla animus anser dignissimos vito confero utilis.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-13T19:08:59.052Z",
      url: "https://annual-apricot.info/",
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
  const result = await unifiedTo.link.patchPaymentLink({
    paymentLink: {
      amount: 81211,
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "GYD",
      description: "Adfero ipsa terreo benevolentia utrum.",
      id: "8e547fdf-53e9-435f-bed8-4b51118b2e47",
      isActive: true,
      isChargeableNow: false,
      lineitems: [
        {
          createdAt: new Date("2023-08-21T00:45:53.202Z"),
          id: "b5c978e9-ffc4-4580-adf0-4936f58205a7",
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
          id: "9e35ab34-85f8-492b-a0db-398acc4f0eae",
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
          id: "628ed03b-c6dc-4387-b3ad-acb2ef3c8e39",
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
          id: "6cd672f0-f57c-4484-b602-262d8edcbb8b",
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
          id: "f18b7183-0876-4dae-add3-1a148a8d2886",
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
      updatedAt: new Date("2025-12-31T08:10:53.489Z"),
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
      id: "8e547fdf-53e9-435f-bed8-4b51118b2e47",
      isActive: true,
      isChargeableNow: false,
      lineitems: [
        {
          createdAt: new Date("2023-08-21T00:45:53.202Z"),
          id: "b5c978e9-ffc4-4580-adf0-4936f58205a7",
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
          id: "9e35ab34-85f8-492b-a0db-398acc4f0eae",
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
          id: "628ed03b-c6dc-4387-b3ad-acb2ef3c8e39",
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
          id: "6cd672f0-f57c-4484-b602-262d8edcbb8b",
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
          id: "f18b7183-0876-4dae-add3-1a148a8d2886",
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
      updatedAt: new Date("2025-12-31T08:10:53.489Z"),
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

## removeCalendarLink

Remove a link

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

Update a link

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
      description: "Vitium clibanus laboriosam uxor denuncio.",
      duration: 74,
      id: "7e914137-b86b-46ce-9046-0d4925d25e9d",
      isActive: true,
      name: "Sopor sopor ancilla animus anser dignissimos vito confero utilis.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-13T19:08:59.052Z",
      url: "https://annual-apricot.info/",
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
      description: "Vitium clibanus laboriosam uxor denuncio.",
      duration: 74,
      id: "7e914137-b86b-46ce-9046-0d4925d25e9d",
      isActive: true,
      name: "Sopor sopor ancilla animus anser dignissimos vito confero utilis.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-13T19:08:59.052Z",
      url: "https://annual-apricot.info/",
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
  const result = await unifiedTo.link.updatePaymentLink({
    paymentLink: {
      amount: 81211,
      createdAt: new Date("2023-06-04T16:11:45.685Z"),
      currency: "GYD",
      description: "Adfero ipsa terreo benevolentia utrum.",
      id: "8e547fdf-53e9-435f-bed8-4b51118b2e47",
      isActive: true,
      isChargeableNow: false,
      lineitems: [
        {
          createdAt: new Date("2023-08-21T00:45:53.202Z"),
          id: "b5c978e9-ffc4-4580-adf0-4936f58205a7",
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
          id: "9e35ab34-85f8-492b-a0db-398acc4f0eae",
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
          id: "628ed03b-c6dc-4387-b3ad-acb2ef3c8e39",
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
          id: "6cd672f0-f57c-4484-b602-262d8edcbb8b",
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
          id: "f18b7183-0876-4dae-add3-1a148a8d2886",
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
      updatedAt: new Date("2025-12-31T08:10:53.489Z"),
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
      id: "8e547fdf-53e9-435f-bed8-4b51118b2e47",
      isActive: true,
      isChargeableNow: false,
      lineitems: [
        {
          createdAt: new Date("2023-08-21T00:45:53.202Z"),
          id: "b5c978e9-ffc4-4580-adf0-4936f58205a7",
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
          id: "9e35ab34-85f8-492b-a0db-398acc4f0eae",
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
          id: "628ed03b-c6dc-4387-b3ad-acb2ef3c8e39",
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
          id: "6cd672f0-f57c-4484-b602-262d8edcbb8b",
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
          id: "f18b7183-0876-4dae-add3-1a148a8d2886",
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
      updatedAt: new Date("2025-12-31T08:10:53.489Z"),
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