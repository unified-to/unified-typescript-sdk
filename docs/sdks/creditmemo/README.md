# Creditmemo

## Overview

### Available Operations

* [createAccountingCreditmemo](#createaccountingcreditmemo) - Create a creditmemo
* [getAccountingCreditmemo](#getaccountingcreditmemo) - Retrieve a creditmemo
* [listAccountingCreditmemoes](#listaccountingcreditmemoes) - List all creditmemoes
* [patchAccountingCreditmemo](#patchaccountingcreditmemo) - Update a creditmemo
* [removeAccountingCreditmemo](#removeaccountingcreditmemo) - Remove a creditmemo
* [updateAccountingCreditmemo](#updateaccountingcreditmemo) - Update a creditmemo

## createAccountingCreditmemo

Create a creditmemo

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAccountingCreditmemo" method="post" path="/accounting/{connection_id}/creditmemo" example="accounting_creditmemo" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.creditmemo.createAccountingCreditmemo({
    accountingCreditmemo: {
      applications: [],
      attachments: [
        {
          downloadUrl: "https://enlightened-chairperson.com/",
          id: "6a30e5de-7e71-45e1-96b8-d3dac010b6c9",
          mimeType: "complectus",
          name: "thesis",
        },
      ],
      createdAt: new Date("2023-09-20T01:47:01.571Z"),
      creditmemoNumber: "ulterius",
      currency: "MKD",
      discountAmount: 0,
      dueAt: new Date("2023-10-18T04:35:00.543Z"),
      id: "dd31b124-7437-4cc5-bc5d-fec2359ed4dc",
      lineitems: [],
      metadata: [],
      notes: "Dedecor amo adfero torqueo quas.",
      paymentCollectionMethod: "charge_automatically",
      postedAt: new Date("2025-12-07T16:28:55.442Z"),
      refundAmount: 0,
      refundReason: "Virgo inflammatio quibusdam aestivus magnam.",
      refundedAt: new Date("2023-10-23T00:35:36.814Z"),
      send: false,
      status: "PAID",
      taxAmount: 0,
      totalAmount: 0,
      updatedAt: new Date("2024-11-27T11:46:12.363Z"),
      url: "https://lighthearted-bandwidth.net/",
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
import { accountingCreateAccountingCreditmemo } from "@unified-api/typescript-sdk/funcs/accountingCreateAccountingCreditmemo.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingCreateAccountingCreditmemo(unifiedTo, {
    accountingCreditmemo: {
      applications: [],
      attachments: [
        {
          downloadUrl: "https://enlightened-chairperson.com/",
          id: "6a30e5de-7e71-45e1-96b8-d3dac010b6c9",
          mimeType: "complectus",
          name: "thesis",
        },
      ],
      createdAt: new Date("2023-09-20T01:47:01.571Z"),
      creditmemoNumber: "ulterius",
      currency: "MKD",
      discountAmount: 0,
      dueAt: new Date("2023-10-18T04:35:00.543Z"),
      id: "dd31b124-7437-4cc5-bc5d-fec2359ed4dc",
      lineitems: [],
      metadata: [],
      notes: "Dedecor amo adfero torqueo quas.",
      paymentCollectionMethod: "charge_automatically",
      postedAt: new Date("2025-12-07T16:28:55.442Z"),
      refundAmount: 0,
      refundReason: "Virgo inflammatio quibusdam aestivus magnam.",
      refundedAt: new Date("2023-10-23T00:35:36.814Z"),
      send: false,
      status: "PAID",
      taxAmount: 0,
      totalAmount: 0,
      updatedAt: new Date("2024-11-27T11:46:12.363Z"),
      url: "https://lighthearted-bandwidth.net/",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingCreateAccountingCreditmemo failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAccountingCreditmemoRequest](../../sdk/models/operations/createaccountingcreditmemorequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingCreditmemo](../../sdk/models/shared/accountingcreditmemo.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAccountingCreditmemo

Retrieve a creditmemo

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccountingCreditmemo" method="get" path="/accounting/{connection_id}/creditmemo/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.creditmemo.getAccountingCreditmemo({
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
import { accountingGetAccountingCreditmemo } from "@unified-api/typescript-sdk/funcs/accountingGetAccountingCreditmemo.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingGetAccountingCreditmemo(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingGetAccountingCreditmemo failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountingCreditmemoRequest](../../sdk/models/operations/getaccountingcreditmemorequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingCreditmemo](../../sdk/models/shared/accountingcreditmemo.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAccountingCreditmemoes

List all creditmemoes

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAccountingCreditmemoes" method="get" path="/accounting/{connection_id}/creditmemo" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.creditmemo.listAccountingCreditmemoes({
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
import { accountingListAccountingCreditmemoes } from "@unified-api/typescript-sdk/funcs/accountingListAccountingCreditmemoes.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingListAccountingCreditmemoes(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingListAccountingCreditmemoes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAccountingCreditmemoesRequest](../../sdk/models/operations/listaccountingcreditmemoesrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingCreditmemo[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAccountingCreditmemo

Update a creditmemo

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAccountingCreditmemo" method="patch" path="/accounting/{connection_id}/creditmemo/{id}" example="accounting_creditmemo" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.creditmemo.patchAccountingCreditmemo({
    accountingCreditmemo: {
      applications: [],
      attachments: [
        {
          downloadUrl: "https://enlightened-chairperson.com/",
          id: "238df5a1-b8c6-40c8-b817-03b09b60f6e8",
          mimeType: "complectus",
          name: "thesis",
        },
      ],
      createdAt: new Date("2023-09-20T01:47:01.571Z"),
      creditmemoNumber: "ulterius",
      currency: "MKD",
      discountAmount: 0,
      dueAt: new Date("2023-10-18T04:35:00.543Z"),
      id: "b2d2b258-3293-46ba-b777-c206af28ce33",
      lineitems: [],
      metadata: [],
      notes: "Dedecor amo adfero torqueo quas.",
      paymentCollectionMethod: "charge_automatically",
      postedAt: new Date("2025-12-07T16:28:55.462Z"),
      refundAmount: 0,
      refundReason: "Virgo inflammatio quibusdam aestivus magnam.",
      refundedAt: new Date("2023-10-23T00:35:36.814Z"),
      send: false,
      status: "PAID",
      taxAmount: 0,
      totalAmount: 0,
      updatedAt: new Date("2024-11-27T11:46:12.374Z"),
      url: "https://lighthearted-bandwidth.net/",
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
import { accountingPatchAccountingCreditmemo } from "@unified-api/typescript-sdk/funcs/accountingPatchAccountingCreditmemo.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingPatchAccountingCreditmemo(unifiedTo, {
    accountingCreditmemo: {
      applications: [],
      attachments: [
        {
          downloadUrl: "https://enlightened-chairperson.com/",
          id: "238df5a1-b8c6-40c8-b817-03b09b60f6e8",
          mimeType: "complectus",
          name: "thesis",
        },
      ],
      createdAt: new Date("2023-09-20T01:47:01.571Z"),
      creditmemoNumber: "ulterius",
      currency: "MKD",
      discountAmount: 0,
      dueAt: new Date("2023-10-18T04:35:00.543Z"),
      id: "b2d2b258-3293-46ba-b777-c206af28ce33",
      lineitems: [],
      metadata: [],
      notes: "Dedecor amo adfero torqueo quas.",
      paymentCollectionMethod: "charge_automatically",
      postedAt: new Date("2025-12-07T16:28:55.462Z"),
      refundAmount: 0,
      refundReason: "Virgo inflammatio quibusdam aestivus magnam.",
      refundedAt: new Date("2023-10-23T00:35:36.814Z"),
      send: false,
      status: "PAID",
      taxAmount: 0,
      totalAmount: 0,
      updatedAt: new Date("2024-11-27T11:46:12.374Z"),
      url: "https://lighthearted-bandwidth.net/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingPatchAccountingCreditmemo failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAccountingCreditmemoRequest](../../sdk/models/operations/patchaccountingcreditmemorequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingCreditmemo](../../sdk/models/shared/accountingcreditmemo.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAccountingCreditmemo

Remove a creditmemo

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAccountingCreditmemo" method="delete" path="/accounting/{connection_id}/creditmemo/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.creditmemo.removeAccountingCreditmemo({
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
import { accountingRemoveAccountingCreditmemo } from "@unified-api/typescript-sdk/funcs/accountingRemoveAccountingCreditmemo.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingRemoveAccountingCreditmemo(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingRemoveAccountingCreditmemo failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAccountingCreditmemoRequest](../../sdk/models/operations/removeaccountingcreditmemorequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAccountingCreditmemoResponse](../../sdk/models/operations/removeaccountingcreditmemoresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAccountingCreditmemo

Update a creditmemo

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAccountingCreditmemo" method="put" path="/accounting/{connection_id}/creditmemo/{id}" example="accounting_creditmemo" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.creditmemo.updateAccountingCreditmemo({
    accountingCreditmemo: {
      applications: [],
      attachments: [
        {
          downloadUrl: "https://enlightened-chairperson.com/",
          id: "238df5a1-b8c6-40c8-b817-03b09b60f6e8",
          mimeType: "complectus",
          name: "thesis",
        },
      ],
      createdAt: new Date("2023-09-20T01:47:01.571Z"),
      creditmemoNumber: "ulterius",
      currency: "MKD",
      discountAmount: 0,
      dueAt: new Date("2023-10-18T04:35:00.543Z"),
      id: "b2d2b258-3293-46ba-b777-c206af28ce33",
      lineitems: [],
      metadata: [],
      notes: "Dedecor amo adfero torqueo quas.",
      paymentCollectionMethod: "charge_automatically",
      postedAt: new Date("2025-12-07T16:28:55.462Z"),
      refundAmount: 0,
      refundReason: "Virgo inflammatio quibusdam aestivus magnam.",
      refundedAt: new Date("2023-10-23T00:35:36.814Z"),
      send: false,
      status: "PAID",
      taxAmount: 0,
      totalAmount: 0,
      updatedAt: new Date("2024-11-27T11:46:12.374Z"),
      url: "https://lighthearted-bandwidth.net/",
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
import { accountingUpdateAccountingCreditmemo } from "@unified-api/typescript-sdk/funcs/accountingUpdateAccountingCreditmemo.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingUpdateAccountingCreditmemo(unifiedTo, {
    accountingCreditmemo: {
      applications: [],
      attachments: [
        {
          downloadUrl: "https://enlightened-chairperson.com/",
          id: "238df5a1-b8c6-40c8-b817-03b09b60f6e8",
          mimeType: "complectus",
          name: "thesis",
        },
      ],
      createdAt: new Date("2023-09-20T01:47:01.571Z"),
      creditmemoNumber: "ulterius",
      currency: "MKD",
      discountAmount: 0,
      dueAt: new Date("2023-10-18T04:35:00.543Z"),
      id: "b2d2b258-3293-46ba-b777-c206af28ce33",
      lineitems: [],
      metadata: [],
      notes: "Dedecor amo adfero torqueo quas.",
      paymentCollectionMethod: "charge_automatically",
      postedAt: new Date("2025-12-07T16:28:55.462Z"),
      refundAmount: 0,
      refundReason: "Virgo inflammatio quibusdam aestivus magnam.",
      refundedAt: new Date("2023-10-23T00:35:36.814Z"),
      send: false,
      status: "PAID",
      taxAmount: 0,
      totalAmount: 0,
      updatedAt: new Date("2024-11-27T11:46:12.374Z"),
      url: "https://lighthearted-bandwidth.net/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingUpdateAccountingCreditmemo failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAccountingCreditmemoRequest](../../sdk/models/operations/updateaccountingcreditmemorequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingCreditmemo](../../sdk/models/shared/accountingcreditmemo.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |