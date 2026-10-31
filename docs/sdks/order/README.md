# Order

## Overview

### Available Operations

* [~~createAccountingOrder~~](#createaccountingorder) - Create an order :warning: **Deprecated**
* [createAssessmentOrder](#createassessmentorder) - Create an order
* [~~getAccountingOrder~~](#getaccountingorder) - Retrieve an order :warning: **Deprecated**
* [getAssessmentOrder](#getassessmentorder) - Retrieve an order
* [~~listAccountingOrders~~](#listaccountingorders) - List all orders :warning: **Deprecated**
* [~~patchAccountingOrder~~](#patchaccountingorder) - Update an order :warning: **Deprecated**
* [patchAssessmentOrder](#patchassessmentorder) - Update an order
* [~~removeAccountingOrder~~](#removeaccountingorder) - Remove an order :warning: **Deprecated**
* [~~updateAccountingOrder~~](#updateaccountingorder) - Update an order :warning: **Deprecated**
* [updateAssessmentOrder](#updateassessmentorder) - Update an order

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
        address1: "7654 Treutel Square",
        city: "Forrestport",
        countryCode: "US",
        postalCode: "42190-3694",
        region: "Maine",
        regionCode: "OR",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "GBP",
      id: "998ec313-7b85-4282-afce-ed14b39199a6",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2020-11-20T03:46:49.837Z"),
      shippingAddress: {
        address1: "4974 Beatty Corners",
        city: "Alizeport",
        countryCode: "US",
        postalCode: "56252",
        region: "Alaska",
        regionCode: "VT",
      },
      status: "AUTHORIZED",
      totalAmount: 0,
      type: "SALES",
      updatedAt: new Date("2022-02-10T08:15:13.637Z"),
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
        address1: "7654 Treutel Square",
        city: "Forrestport",
        countryCode: "US",
        postalCode: "42190-3694",
        region: "Maine",
        regionCode: "OR",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "GBP",
      id: "998ec313-7b85-4282-afce-ed14b39199a6",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2020-11-20T03:46:49.837Z"),
      shippingAddress: {
        address1: "4974 Beatty Corners",
        city: "Alizeport",
        countryCode: "US",
        postalCode: "56252",
        region: "Alaska",
        regionCode: "VT",
      },
      status: "AUTHORIZED",
      totalAmount: 0,
      type: "SALES",
      updatedAt: new Date("2022-02-10T08:15:13.637Z"),
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
      connectionId: "<id>",
      createdAt: new Date("2021-09-18T10:33:57.803Z"),
      id: "f33bfb13-b1f6-4e68-8e8d-086d072b105e",
      metadata: [],
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "amy.kris.windler@icloud.com",
      ],
      profileFirstName: "Amy",
      profileGender: "NON_BINARY",
      profileLastName: "Kris-Windler",
      profileName: "Amy Kris-Windler",
      profileResumeUrl: "https://enchanted-cycle.biz/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "(341) 425-5828",
      ],
      reference: "ab",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 84,
      responseScore: 82,
      responseStatus: "REJECTED",
      responseUrl: "https://rowdy-fisherman.biz/",
      status: "REJECTED",
      targetUrl: "https://cautious-turret.info",
      updatedAt: new Date("2023-01-28T11:46:33.607Z"),
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
      connectionId: "<id>",
      createdAt: new Date("2021-09-18T10:33:57.803Z"),
      id: "f33bfb13-b1f6-4e68-8e8d-086d072b105e",
      metadata: [],
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "amy.kris.windler@icloud.com",
      ],
      profileFirstName: "Amy",
      profileGender: "NON_BINARY",
      profileLastName: "Kris-Windler",
      profileName: "Amy Kris-Windler",
      profileResumeUrl: "https://enchanted-cycle.biz/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "(341) 425-5828",
      ],
      reference: "ab",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 84,
      responseScore: 82,
      responseStatus: "REJECTED",
      responseUrl: "https://rowdy-fisherman.biz/",
      status: "REJECTED",
      targetUrl: "https://cautious-turret.info",
      updatedAt: new Date("2023-01-28T11:46:33.607Z"),
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
        address1: "7654 Treutel Square",
        city: "Forrestport",
        countryCode: "US",
        postalCode: "42190-3694",
        region: "Maine",
        regionCode: "OR",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "GBP",
      id: "8aeaf6a7-00d3-4ed6-90e6-e86b468e4016",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2020-11-20T03:46:49.837Z"),
      shippingAddress: {
        address1: "4974 Beatty Corners",
        city: "Alizeport",
        countryCode: "US",
        postalCode: "56252",
        region: "Alaska",
        regionCode: "VT",
      },
      status: "AUTHORIZED",
      totalAmount: 0,
      type: "SALES",
      updatedAt: new Date("2022-02-10T08:15:13.645Z"),
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
        address1: "7654 Treutel Square",
        city: "Forrestport",
        countryCode: "US",
        postalCode: "42190-3694",
        region: "Maine",
        regionCode: "OR",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "GBP",
      id: "8aeaf6a7-00d3-4ed6-90e6-e86b468e4016",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2020-11-20T03:46:49.837Z"),
      shippingAddress: {
        address1: "4974 Beatty Corners",
        city: "Alizeport",
        countryCode: "US",
        postalCode: "56252",
        region: "Alaska",
        regionCode: "VT",
      },
      status: "AUTHORIZED",
      totalAmount: 0,
      type: "SALES",
      updatedAt: new Date("2022-02-10T08:15:13.645Z"),
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
      connectionId: "<id>",
      createdAt: new Date("2021-09-18T10:33:57.803Z"),
      id: "7ad704b6-d34b-4d75-a637-4e67871e1d2a",
      metadata: [],
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "amy.kris.windler@icloud.com",
      ],
      profileFirstName: "Amy",
      profileGender: "NON_BINARY",
      profileLastName: "Kris-Windler",
      profileName: "Amy Kris-Windler",
      profileResumeUrl: "https://enchanted-cycle.biz/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "(341) 425-5828",
      ],
      reference: "ab",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 84,
      responseScore: 82,
      responseStatus: "REJECTED",
      responseUrl: "https://rowdy-fisherman.biz/",
      status: "REJECTED",
      targetUrl: "https://cautious-turret.info",
      updatedAt: new Date("2023-01-28T11:46:33.617Z"),
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
      connectionId: "<id>",
      createdAt: new Date("2021-09-18T10:33:57.803Z"),
      id: "7ad704b6-d34b-4d75-a637-4e67871e1d2a",
      metadata: [],
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "amy.kris.windler@icloud.com",
      ],
      profileFirstName: "Amy",
      profileGender: "NON_BINARY",
      profileLastName: "Kris-Windler",
      profileName: "Amy Kris-Windler",
      profileResumeUrl: "https://enchanted-cycle.biz/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "(341) 425-5828",
      ],
      reference: "ab",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 84,
      responseScore: 82,
      responseStatus: "REJECTED",
      responseUrl: "https://rowdy-fisherman.biz/",
      status: "REJECTED",
      targetUrl: "https://cautious-turret.info",
      updatedAt: new Date("2023-01-28T11:46:33.617Z"),
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
        address1: "7654 Treutel Square",
        city: "Forrestport",
        countryCode: "US",
        postalCode: "42190-3694",
        region: "Maine",
        regionCode: "OR",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "GBP",
      id: "8aeaf6a7-00d3-4ed6-90e6-e86b468e4016",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2020-11-20T03:46:49.837Z"),
      shippingAddress: {
        address1: "4974 Beatty Corners",
        city: "Alizeport",
        countryCode: "US",
        postalCode: "56252",
        region: "Alaska",
        regionCode: "VT",
      },
      status: "AUTHORIZED",
      totalAmount: 0,
      type: "SALES",
      updatedAt: new Date("2022-02-10T08:15:13.645Z"),
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
        address1: "7654 Treutel Square",
        city: "Forrestport",
        countryCode: "US",
        postalCode: "42190-3694",
        region: "Maine",
        regionCode: "OR",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "GBP",
      id: "8aeaf6a7-00d3-4ed6-90e6-e86b468e4016",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2020-11-20T03:46:49.837Z"),
      shippingAddress: {
        address1: "4974 Beatty Corners",
        city: "Alizeport",
        countryCode: "US",
        postalCode: "56252",
        region: "Alaska",
        regionCode: "VT",
      },
      status: "AUTHORIZED",
      totalAmount: 0,
      type: "SALES",
      updatedAt: new Date("2022-02-10T08:15:13.645Z"),
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
      connectionId: "<id>",
      createdAt: new Date("2021-09-18T10:33:57.803Z"),
      id: "7ad704b6-d34b-4d75-a637-4e67871e1d2a",
      metadata: [],
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "amy.kris.windler@icloud.com",
      ],
      profileFirstName: "Amy",
      profileGender: "NON_BINARY",
      profileLastName: "Kris-Windler",
      profileName: "Amy Kris-Windler",
      profileResumeUrl: "https://enchanted-cycle.biz/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "(341) 425-5828",
      ],
      reference: "ab",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 84,
      responseScore: 82,
      responseStatus: "REJECTED",
      responseUrl: "https://rowdy-fisherman.biz/",
      status: "REJECTED",
      targetUrl: "https://cautious-turret.info",
      updatedAt: new Date("2023-01-28T11:46:33.617Z"),
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
      connectionId: "<id>",
      createdAt: new Date("2021-09-18T10:33:57.803Z"),
      id: "7ad704b6-d34b-4d75-a637-4e67871e1d2a",
      metadata: [],
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "amy.kris.windler@icloud.com",
      ],
      profileFirstName: "Amy",
      profileGender: "NON_BINARY",
      profileLastName: "Kris-Windler",
      profileName: "Amy Kris-Windler",
      profileResumeUrl: "https://enchanted-cycle.biz/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "(341) 425-5828",
      ],
      reference: "ab",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 84,
      responseScore: 82,
      responseStatus: "REJECTED",
      responseUrl: "https://rowdy-fisherman.biz/",
      status: "REJECTED",
      targetUrl: "https://cautious-turret.info",
      updatedAt: new Date("2023-01-28T11:46:33.617Z"),
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