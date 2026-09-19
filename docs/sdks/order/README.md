# Order

## Overview

### Available Operations

* [createAccountingOrder](#createaccountingorder) - Create an order
* [createAssessmentOrder](#createassessmentorder) - Create an order
* [getAccountingOrder](#getaccountingorder) - Retrieve an order
* [getAssessmentOrder](#getassessmentorder) - Retrieve an order
* [listAccountingOrders](#listaccountingorders) - List all orders
* [patchAccountingOrder](#patchaccountingorder) - Update an order
* [patchAssessmentOrder](#patchassessmentorder) - Update an order
* [removeAccountingOrder](#removeaccountingorder) - Remove an order
* [updateAccountingOrder](#updateaccountingorder) - Update an order
* [updateAssessmentOrder](#updateassessmentorder) - Update an order

## createAccountingOrder

Create an order

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
        address1: "802 Bechtelar Park",
        address2: "Apt. 436",
        city: "Daniellaville",
        countryCode: "US",
        postalCode: "36947",
        region: "Wisconsin",
        regionCode: "NY",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "USD",
      id: "254b7646-a49c-488d-9361-79013cc54642",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2022-04-05T05:08:44.280Z"),
      shippingAddress: {
        address1: "9745 Betty Shore",
        city: "South Alainaland",
        countryCode: "US",
        postalCode: "25274-7654",
        region: "New Hampshire",
        regionCode: "LA",
      },
      status: "SUBMITTED",
      totalAmount: 0,
      type: "PURCHASE",
      updatedAt: new Date("2021-06-18T00:43:53.765Z"),
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
        address1: "802 Bechtelar Park",
        address2: "Apt. 436",
        city: "Daniellaville",
        countryCode: "US",
        postalCode: "36947",
        region: "Wisconsin",
        regionCode: "NY",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "USD",
      id: "254b7646-a49c-488d-9361-79013cc54642",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2022-04-05T05:08:44.280Z"),
      shippingAddress: {
        address1: "9745 Betty Shore",
        city: "South Alainaland",
        countryCode: "US",
        postalCode: "25274-7654",
        region: "New Hampshire",
        regionCode: "LA",
      },
      status: "SUBMITTED",
      totalAmount: 0,
      type: "PURCHASE",
      updatedAt: new Date("2021-06-18T00:43:53.765Z"),
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

Create an order

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
      id: "882e1268-9045-4cd5-ab9d-e9263cccff4d",
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "Cleta.Daugherty@gmail.com",
      ],
      profileFirstName: "Amy",
      profileGender: "NON_BINARY",
      profileLastName: "Kris-Windler",
      profileName: "Amy Kris-Windler",
      profileResumeUrl: "https://enchanted-cycle.biz/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "(828) 263-1594 x5248",
      ],
      reference: "ab",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 82,
      responseScore: 92,
      responseStatus: "FAILED",
      responseUrl: "https://irresponsible-trench.info/",
      status: "REJECTED",
      targetUrl: "https://cautious-turret.info",
      updatedAt: new Date("2023-01-17T07:24:47.772Z"),
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
      id: "882e1268-9045-4cd5-ab9d-e9263cccff4d",
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "Cleta.Daugherty@gmail.com",
      ],
      profileFirstName: "Amy",
      profileGender: "NON_BINARY",
      profileLastName: "Kris-Windler",
      profileName: "Amy Kris-Windler",
      profileResumeUrl: "https://enchanted-cycle.biz/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "(828) 263-1594 x5248",
      ],
      reference: "ab",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 82,
      responseScore: 92,
      responseStatus: "FAILED",
      responseUrl: "https://irresponsible-trench.info/",
      status: "REJECTED",
      targetUrl: "https://cautious-turret.info",
      updatedAt: new Date("2023-01-17T07:24:47.772Z"),
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

## getAccountingOrder

Retrieve an order

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

Retrieve an order

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

## listAccountingOrders

List all orders

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

## patchAccountingOrder

Update an order

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
        address1: "802 Bechtelar Park",
        address2: "Apt. 436",
        city: "Daniellaville",
        countryCode: "US",
        postalCode: "36947",
        region: "Wisconsin",
        regionCode: "NY",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "USD",
      id: "dbbc7363-0959-481a-b5c4-58036355031c",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2022-04-05T05:08:44.292Z"),
      shippingAddress: {
        address1: "9745 Betty Shore",
        city: "South Alainaland",
        countryCode: "US",
        postalCode: "25274-7654",
        region: "New Hampshire",
        regionCode: "LA",
      },
      status: "SUBMITTED",
      totalAmount: 0,
      type: "PURCHASE",
      updatedAt: new Date("2021-06-18T00:43:53.770Z"),
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
        address1: "802 Bechtelar Park",
        address2: "Apt. 436",
        city: "Daniellaville",
        countryCode: "US",
        postalCode: "36947",
        region: "Wisconsin",
        regionCode: "NY",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "USD",
      id: "dbbc7363-0959-481a-b5c4-58036355031c",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2022-04-05T05:08:44.292Z"),
      shippingAddress: {
        address1: "9745 Betty Shore",
        city: "South Alainaland",
        countryCode: "US",
        postalCode: "25274-7654",
        region: "New Hampshire",
        regionCode: "LA",
      },
      status: "SUBMITTED",
      totalAmount: 0,
      type: "PURCHASE",
      updatedAt: new Date("2021-06-18T00:43:53.770Z"),
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

Update an order

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
      id: "07bad765-a1f9-49ec-8fbe-acde3613b7eb",
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "Cleta.Daugherty@gmail.com",
      ],
      profileFirstName: "Amy",
      profileGender: "NON_BINARY",
      profileLastName: "Kris-Windler",
      profileName: "Amy Kris-Windler",
      profileResumeUrl: "https://enchanted-cycle.biz/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "(828) 263-1594 x5248",
      ],
      reference: "ab",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 82,
      responseScore: 92,
      responseStatus: "FAILED",
      responseUrl: "https://irresponsible-trench.info/",
      status: "REJECTED",
      targetUrl: "https://cautious-turret.info",
      updatedAt: new Date("2023-01-17T07:24:47.779Z"),
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
      id: "07bad765-a1f9-49ec-8fbe-acde3613b7eb",
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "Cleta.Daugherty@gmail.com",
      ],
      profileFirstName: "Amy",
      profileGender: "NON_BINARY",
      profileLastName: "Kris-Windler",
      profileName: "Amy Kris-Windler",
      profileResumeUrl: "https://enchanted-cycle.biz/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "(828) 263-1594 x5248",
      ],
      reference: "ab",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 82,
      responseScore: 92,
      responseStatus: "FAILED",
      responseUrl: "https://irresponsible-trench.info/",
      status: "REJECTED",
      targetUrl: "https://cautious-turret.info",
      updatedAt: new Date("2023-01-17T07:24:47.779Z"),
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

## removeAccountingOrder

Remove an order

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

## updateAccountingOrder

Update an order

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
        address1: "802 Bechtelar Park",
        address2: "Apt. 436",
        city: "Daniellaville",
        countryCode: "US",
        postalCode: "36947",
        region: "Wisconsin",
        regionCode: "NY",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "USD",
      id: "dbbc7363-0959-481a-b5c4-58036355031c",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2022-04-05T05:08:44.292Z"),
      shippingAddress: {
        address1: "9745 Betty Shore",
        city: "South Alainaland",
        countryCode: "US",
        postalCode: "25274-7654",
        region: "New Hampshire",
        regionCode: "LA",
      },
      status: "SUBMITTED",
      totalAmount: 0,
      type: "PURCHASE",
      updatedAt: new Date("2021-06-18T00:43:53.770Z"),
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
        address1: "802 Bechtelar Park",
        address2: "Apt. 436",
        city: "Daniellaville",
        countryCode: "US",
        postalCode: "36947",
        region: "Wisconsin",
        regionCode: "NY",
      },
      createdAt: new Date("2020-11-20T03:46:49.837Z"),
      currency: "USD",
      id: "dbbc7363-0959-481a-b5c4-58036355031c",
      lineitems: [],
      metadata: [],
      postedAt: new Date("2022-04-05T05:08:44.292Z"),
      shippingAddress: {
        address1: "9745 Betty Shore",
        city: "South Alainaland",
        countryCode: "US",
        postalCode: "25274-7654",
        region: "New Hampshire",
        regionCode: "LA",
      },
      status: "SUBMITTED",
      totalAmount: 0,
      type: "PURCHASE",
      updatedAt: new Date("2021-06-18T00:43:53.770Z"),
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

Update an order

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
      id: "07bad765-a1f9-49ec-8fbe-acde3613b7eb",
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "Cleta.Daugherty@gmail.com",
      ],
      profileFirstName: "Amy",
      profileGender: "NON_BINARY",
      profileLastName: "Kris-Windler",
      profileName: "Amy Kris-Windler",
      profileResumeUrl: "https://enchanted-cycle.biz/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "(828) 263-1594 x5248",
      ],
      reference: "ab",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 82,
      responseScore: 92,
      responseStatus: "FAILED",
      responseUrl: "https://irresponsible-trench.info/",
      status: "REJECTED",
      targetUrl: "https://cautious-turret.info",
      updatedAt: new Date("2023-01-17T07:24:47.779Z"),
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
      id: "07bad765-a1f9-49ec-8fbe-acde3613b7eb",
      parameters: [],
      profileAddresses: [],
      profileDateOfBirth: "1989-07-22T16:18:37.650Z",
      profileEmails: [
        "Cleta.Daugherty@gmail.com",
      ],
      profileFirstName: "Amy",
      profileGender: "NON_BINARY",
      profileLastName: "Kris-Windler",
      profileName: "Amy Kris-Windler",
      profileResumeUrl: "https://enchanted-cycle.biz/",
      profileSocialMediaUrls: [],
      profileTelephones: [
        "(828) 263-1594 x5248",
      ],
      reference: "ab",
      responseAttributes: [],
      responseDetails: [],
      responseDownloadUrls: [],
      responseMaxScore: 82,
      responseScore: 92,
      responseStatus: "FAILED",
      responseUrl: "https://irresponsible-trench.info/",
      status: "REJECTED",
      targetUrl: "https://cautious-turret.info",
      updatedAt: new Date("2023-01-17T07:24:47.779Z"),
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