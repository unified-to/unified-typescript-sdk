# Rate

## Overview

### Available Operations

* [createShippingRate](#createshippingrate) - Create a rate

## createShippingRate

Creates a ShippingRate. Provide the unified ShippingRate fields in the request body; they are mapped to the provider's API. Returns the created ShippingRate.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createShippingRate" method="post" path="/shipping/{connection_id}/rate" example="shipping_rate" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.rate.createShippingRate({
    shippingRate: {
      currency: "USD",
      id: "c45b3dcf-1c8d-4d11-8dab-4ed25aa99a24",
      metadata: [],
      rates: [
        {
          amount: 44.72,
          baseAmount: 46.01,
          currency: "USD",
          deliveryDays: 2,
          description: "Veniam denego vulgo bos turpis pax.",
          discountAmount: 4.6,
          estimatedDays: 2,
          estimatedDeliveryEndAt: new Date("2021-09-03T01:03:36.021Z"),
          isNegotiatedRate: true,
          taxAmount: 3.31,
          title: "Express",
        },
      ],
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
import { shippingCreateShippingRate } from "@unified-api/typescript-sdk/funcs/shippingCreateShippingRate.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await shippingCreateShippingRate(unifiedTo, {
    shippingRate: {
      currency: "USD",
      id: "c45b3dcf-1c8d-4d11-8dab-4ed25aa99a24",
      metadata: [],
      rates: [
        {
          amount: 44.72,
          baseAmount: 46.01,
          currency: "USD",
          deliveryDays: 2,
          description: "Veniam denego vulgo bos turpis pax.",
          discountAmount: 4.6,
          estimatedDays: 2,
          estimatedDeliveryEndAt: new Date("2021-09-03T01:03:36.021Z"),
          isNegotiatedRate: true,
          taxAmount: 3.31,
          title: "Express",
        },
      ],
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("shippingCreateShippingRate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateShippingRateRequest](../../sdk/models/operations/createshippingraterequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ShippingRate](../../sdk/models/shared/shippingrate.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |