# Printing

## Overview

### Available Operations

* [createPrintingFile](#createprintingfile) - Create a file
* [createPrintingOrder](#createprintingorder) - Create an order
* [createPrintingQuote](#createprintingquote) - Create a quote
* [getPrintingFile](#getprintingfile) - Retrieve a file
* [getPrintingOrder](#getprintingorder) - Retrieve an order
* [getPrintingProduct](#getprintingproduct) - Retrieve a product
* [getPrintingTemplate](#getprintingtemplate) - Retrieve a template
* [listPrintingFiles](#listprintingfiles) - List all files
* [listPrintingOrders](#listprintingorders) - List all orders
* [listPrintingProducts](#listprintingproducts) - List all products
* [listPrintingTemplates](#listprintingtemplates) - List all templates
* [patchPrintingOrder](#patchprintingorder) - Update an order
* [removePrintingOrder](#removeprintingorder) - Remove an order
* [updatePrintingOrder](#updateprintingorder) - Update an order

## createPrintingFile

Creates a PrintingFile. Provide the unified PrintingFile fields in the request body; they are mapped to the provider's API. Returns the created PrintingFile.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPrintingFile" method="post" path="/printing/{connection_id}/file" example="printing_file" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.printing.createPrintingFile({
    printingFile: {
      createdAt: new Date("2020-10-22T04:25:39.825Z"),
      dpi: 300,
      height: 5400,
      id: "5f03fbd1-3c23-4de5-8d6d-69e250180672",
      metadata: [],
      mimeType: "image/jpeg",
      name: "blond-ecliptic.jpg",
      previewUrl: "https://picsum.photos/seed/aATvhmNA/400/400",
      size: 1956654,
      status: "READY",
      updatedAt: new Date("2020-10-22T04:25:39.825Z"),
      url: "https://picsum.photos/seed/XBj97B/2783/172",
      width: 4500,
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
import { printingCreatePrintingFile } from "@unified-api/typescript-sdk/funcs/printingCreatePrintingFile.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await printingCreatePrintingFile(unifiedTo, {
    printingFile: {
      createdAt: new Date("2020-10-22T04:25:39.825Z"),
      dpi: 300,
      height: 5400,
      id: "5f03fbd1-3c23-4de5-8d6d-69e250180672",
      metadata: [],
      mimeType: "image/jpeg",
      name: "blond-ecliptic.jpg",
      previewUrl: "https://picsum.photos/seed/aATvhmNA/400/400",
      size: 1956654,
      status: "READY",
      updatedAt: new Date("2020-10-22T04:25:39.825Z"),
      url: "https://picsum.photos/seed/XBj97B/2783/172",
      width: 4500,
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("printingCreatePrintingFile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePrintingFileRequest](../../sdk/models/operations/createprintingfilerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PrintingFile](../../sdk/models/shared/printingfile.md)\>**

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
  const result = await unifiedTo.printing.createPrintingOrder({
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

## createPrintingQuote

Creates a PrintingQuote. Provide the unified PrintingQuote fields in the request body; they are mapped to the provider's API. Returns the created PrintingQuote.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPrintingQuote" method="post" path="/printing/{connection_id}/quote" example="printing_quote" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.printing.createPrintingQuote({
    printingQuote: {
      createdAt: new Date("2019-01-02T03:42:06.944Z"),
      currency: "USD",
      discountAmount: 0,
      id: "158ddbb7-a154-496f-90e7-a3232983f47c",
      lineitems: [
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/0Y5Bjnoiwx/3057/3113",
            },
          ],
          id: "1",
          name: "Practical Wooden Salad",
          quantity: 2,
          retailPriceAmount: 50.83,
          unitPriceAmount: 21.72,
        },
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/rcPUF/2295/1801",
            },
          ],
          id: "2",
          name: "Handmade Gold Car",
          quantity: 4,
          retailPriceAmount: 35.47,
          sku: "I79GIBCK",
          unitPriceAmount: 17.64,
        },
      ],
      metadata: [],
      shippingAddress: {
        address1: "4290 Garden Street",
        address2: "Suite 874",
        city: "Cartwrightshire",
        companyName: "Kris and Sons",
        country: "United States",
        countryCode: "US",
        email: "jada73@hotmail.com",
        name: "Heaven Crist",
        postalCode: "92871",
        region: "North Carolina",
        regionCode: "KY",
        telephone: "653.412.8900 x9387",
      },
      shippingAmount: 4.69,
      shippingMethod: "STANDARD",
      shippingOptions: [
        {
          amount: 4.69,
          code: "STANDARD",
          currency: "USD",
          maxDeliveryDays: 5,
          minDeliveryDays: 3,
          name: "Flat Rate (3-5 business days after fulfillment)",
        },
        {
          amount: 12.99,
          code: "EXPRESS",
          currency: "USD",
          maxDeliveryDays: 3,
          minDeliveryDays: 1,
          name: "Express (1-3 business days after fulfillment)",
        },
      ],
      subtotalAmount: 114,
      taxAmount: 9.12,
      totalAmount: 127.81,
      updatedAt: new Date("2019-01-02T03:42:06.944Z"),
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
import { quoteCreatePrintingQuote } from "@unified-api/typescript-sdk/funcs/quoteCreatePrintingQuote.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await quoteCreatePrintingQuote(unifiedTo, {
    printingQuote: {
      createdAt: new Date("2019-01-02T03:42:06.944Z"),
      currency: "USD",
      discountAmount: 0,
      id: "158ddbb7-a154-496f-90e7-a3232983f47c",
      lineitems: [
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/0Y5Bjnoiwx/3057/3113",
            },
          ],
          id: "1",
          name: "Practical Wooden Salad",
          quantity: 2,
          retailPriceAmount: 50.83,
          unitPriceAmount: 21.72,
        },
        {
          files: [
            {
              placement: "default",
              url: "https://picsum.photos/seed/rcPUF/2295/1801",
            },
          ],
          id: "2",
          name: "Handmade Gold Car",
          quantity: 4,
          retailPriceAmount: 35.47,
          sku: "I79GIBCK",
          unitPriceAmount: 17.64,
        },
      ],
      metadata: [],
      shippingAddress: {
        address1: "4290 Garden Street",
        address2: "Suite 874",
        city: "Cartwrightshire",
        companyName: "Kris and Sons",
        country: "United States",
        countryCode: "US",
        email: "jada73@hotmail.com",
        name: "Heaven Crist",
        postalCode: "92871",
        region: "North Carolina",
        regionCode: "KY",
        telephone: "653.412.8900 x9387",
      },
      shippingAmount: 4.69,
      shippingMethod: "STANDARD",
      shippingOptions: [
        {
          amount: 4.69,
          code: "STANDARD",
          currency: "USD",
          maxDeliveryDays: 5,
          minDeliveryDays: 3,
          name: "Flat Rate (3-5 business days after fulfillment)",
        },
        {
          amount: 12.99,
          code: "EXPRESS",
          currency: "USD",
          maxDeliveryDays: 3,
          minDeliveryDays: 1,
          name: "Express (1-3 business days after fulfillment)",
        },
      ],
      subtotalAmount: 114,
      taxAmount: 9.12,
      totalAmount: 127.81,
      updatedAt: new Date("2019-01-02T03:42:06.944Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("quoteCreatePrintingQuote failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePrintingQuoteRequest](../../sdk/models/operations/createprintingquoterequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PrintingQuote](../../sdk/models/shared/printingquote.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPrintingFile

Retrieves a single PrintingFile by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPrintingFile" method="get" path="/printing/{connection_id}/file/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.printing.getPrintingFile({
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
import { printingGetPrintingFile } from "@unified-api/typescript-sdk/funcs/printingGetPrintingFile.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await printingGetPrintingFile(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("printingGetPrintingFile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPrintingFileRequest](../../sdk/models/operations/getprintingfilerequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PrintingFile](../../sdk/models/shared/printingfile.md)\>**

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
  const result = await unifiedTo.printing.getPrintingOrder({
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

## getPrintingProduct

Retrieves a single PrintingProduct by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPrintingProduct" method="get" path="/printing/{connection_id}/product/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.printing.getPrintingProduct({
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
import { printingGetPrintingProduct } from "@unified-api/typescript-sdk/funcs/printingGetPrintingProduct.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await printingGetPrintingProduct(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("printingGetPrintingProduct failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPrintingProductRequest](../../sdk/models/operations/getprintingproductrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PrintingProduct](../../sdk/models/shared/printingproduct.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPrintingTemplate

Retrieves a single PrintingTemplate by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPrintingTemplate" method="get" path="/printing/{connection_id}/template/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.printing.getPrintingTemplate({
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
import { templateGetPrintingTemplate } from "@unified-api/typescript-sdk/funcs/templateGetPrintingTemplate.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await templateGetPrintingTemplate(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("templateGetPrintingTemplate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPrintingTemplateRequest](../../sdk/models/operations/getprintingtemplaterequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PrintingTemplate](../../sdk/models/shared/printingtemplate.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPrintingFiles

Returns a list of PrintingFiles. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPrintingFiles" method="get" path="/printing/{connection_id}/file" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.printing.listPrintingFiles({
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
import { printingListPrintingFiles } from "@unified-api/typescript-sdk/funcs/printingListPrintingFiles.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await printingListPrintingFiles(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("printingListPrintingFiles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPrintingFilesRequest](../../sdk/models/operations/listprintingfilesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PrintingFile[]](../../models/.md)\>**

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
  const result = await unifiedTo.printing.listPrintingOrders({
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

## listPrintingProducts

Returns a list of PrintingProducts. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPrintingProducts" method="get" path="/printing/{connection_id}/product" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.printing.listPrintingProducts({
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
import { printingListPrintingProducts } from "@unified-api/typescript-sdk/funcs/printingListPrintingProducts.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await printingListPrintingProducts(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("printingListPrintingProducts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPrintingProductsRequest](../../sdk/models/operations/listprintingproductsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PrintingProduct[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPrintingTemplates

Returns a list of PrintingTemplates. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPrintingTemplates" method="get" path="/printing/{connection_id}/template" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.printing.listPrintingTemplates({
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
import { templateListPrintingTemplates } from "@unified-api/typescript-sdk/funcs/templateListPrintingTemplates.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await templateListPrintingTemplates(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("templateListPrintingTemplates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPrintingTemplatesRequest](../../sdk/models/operations/listprintingtemplatesrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PrintingTemplate[]](../../models/.md)\>**

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
  const result = await unifiedTo.printing.patchPrintingOrder({
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
  const result = await unifiedTo.printing.removePrintingOrder({
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
  const result = await unifiedTo.printing.updatePrintingOrder({
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