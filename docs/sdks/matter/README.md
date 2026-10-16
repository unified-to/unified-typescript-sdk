# Matter

## Overview

### Available Operations

* [createLegalMatter](#createlegalmatter) - Create a matter
* [getLegalMatter](#getlegalmatter) - Retrieve a matter
* [listLegalMatters](#listlegalmatters) - List all matters
* [patchLegalMatter](#patchlegalmatter) - Update a matter
* [removeLegalMatter](#removelegalmatter) - Remove a matter
* [updateLegalMatter](#updatelegalmatter) - Update a matter

## createLegalMatter

Create a matter

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createLegalMatter" method="post" path="/legal/{connection_id}/matter" example="legal_matter" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.matter.createLegalMatter({
    legalMatter: {
      billingMethod: "OTHER",
      clientReference: "qSrjIBAD",
      companyIds: [],
      contactIds: [],
      createdAt: new Date("2023-05-28T04:10:42.375Z"),
      currency: "BOB",
      description: "Speciosus cresco aut cotidie temeritas arma.",
      id: "bfdcb48c-8857-4ad9-b6cf-a6848415b02d",
      metadata: [],
      name: "Walter v. Franecki - Spinka",
      number: "2023-3062",
      openedAt: new Date("2023-07-05T02:38:52.288Z"),
      parties: [
        {
          description: "Urban Walter",
          role: "EXPERT",
        },
      ],
      stage: "currus",
      status: "OPEN",
      statuteOfLimitationsAt: new Date("2027-06-23T21:44:09.564Z"),
      updatedAt: new Date("2023-07-17T05:15:22.476Z"),
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
import { legalCreateLegalMatter } from "@unified-api/typescript-sdk/funcs/legalCreateLegalMatter.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await legalCreateLegalMatter(unifiedTo, {
    legalMatter: {
      billingMethod: "OTHER",
      clientReference: "qSrjIBAD",
      companyIds: [],
      contactIds: [],
      createdAt: new Date("2023-05-28T04:10:42.375Z"),
      currency: "BOB",
      description: "Speciosus cresco aut cotidie temeritas arma.",
      id: "bfdcb48c-8857-4ad9-b6cf-a6848415b02d",
      metadata: [],
      name: "Walter v. Franecki - Spinka",
      number: "2023-3062",
      openedAt: new Date("2023-07-05T02:38:52.288Z"),
      parties: [
        {
          description: "Urban Walter",
          role: "EXPERT",
        },
      ],
      stage: "currus",
      status: "OPEN",
      statuteOfLimitationsAt: new Date("2027-06-23T21:44:09.564Z"),
      updatedAt: new Date("2023-07-17T05:15:22.476Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("legalCreateLegalMatter failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLegalMatterRequest](../../sdk/models/operations/createlegalmatterrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LegalMatter](../../sdk/models/shared/legalmatter.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLegalMatter

Retrieve a matter

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLegalMatter" method="get" path="/legal/{connection_id}/matter/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.matter.getLegalMatter({
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
import { legalGetLegalMatter } from "@unified-api/typescript-sdk/funcs/legalGetLegalMatter.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await legalGetLegalMatter(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("legalGetLegalMatter failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLegalMatterRequest](../../sdk/models/operations/getlegalmatterrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LegalMatter](../../sdk/models/shared/legalmatter.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listLegalMatters

List all matters

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listLegalMatters" method="get" path="/legal/{connection_id}/matter" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.matter.listLegalMatters({
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
import { legalListLegalMatters } from "@unified-api/typescript-sdk/funcs/legalListLegalMatters.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await legalListLegalMatters(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("legalListLegalMatters failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLegalMattersRequest](../../sdk/models/operations/listlegalmattersrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LegalMatter[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchLegalMatter

Update a matter

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchLegalMatter" method="patch" path="/legal/{connection_id}/matter/{id}" example="legal_matter" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.matter.patchLegalMatter({
    legalMatter: {
      billingMethod: "OTHER",
      clientReference: "qSrjIBAD",
      companyIds: [],
      contactIds: [],
      createdAt: new Date("2023-05-28T04:10:42.375Z"),
      currency: "BOB",
      description: "Speciosus cresco aut cotidie temeritas arma.",
      id: "c4f45d8a-6e24-4806-ad6e-166ad9c7043c",
      metadata: [],
      name: "Walter v. Franecki - Spinka",
      number: "2023-3062",
      openedAt: new Date("2023-07-05T02:38:52.289Z"),
      parties: [
        {
          description: "Urban Walter",
          role: "EXPERT",
        },
      ],
      stage: "currus",
      status: "OPEN",
      statuteOfLimitationsAt: new Date("2027-06-23T21:44:09.592Z"),
      updatedAt: new Date("2023-07-17T05:15:22.477Z"),
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
import { legalPatchLegalMatter } from "@unified-api/typescript-sdk/funcs/legalPatchLegalMatter.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await legalPatchLegalMatter(unifiedTo, {
    legalMatter: {
      billingMethod: "OTHER",
      clientReference: "qSrjIBAD",
      companyIds: [],
      contactIds: [],
      createdAt: new Date("2023-05-28T04:10:42.375Z"),
      currency: "BOB",
      description: "Speciosus cresco aut cotidie temeritas arma.",
      id: "c4f45d8a-6e24-4806-ad6e-166ad9c7043c",
      metadata: [],
      name: "Walter v. Franecki - Spinka",
      number: "2023-3062",
      openedAt: new Date("2023-07-05T02:38:52.289Z"),
      parties: [
        {
          description: "Urban Walter",
          role: "EXPERT",
        },
      ],
      stage: "currus",
      status: "OPEN",
      statuteOfLimitationsAt: new Date("2027-06-23T21:44:09.592Z"),
      updatedAt: new Date("2023-07-17T05:15:22.477Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("legalPatchLegalMatter failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchLegalMatterRequest](../../sdk/models/operations/patchlegalmatterrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LegalMatter](../../sdk/models/shared/legalmatter.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeLegalMatter

Remove a matter

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeLegalMatter" method="delete" path="/legal/{connection_id}/matter/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.matter.removeLegalMatter({
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
import { legalRemoveLegalMatter } from "@unified-api/typescript-sdk/funcs/legalRemoveLegalMatter.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await legalRemoveLegalMatter(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("legalRemoveLegalMatter failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveLegalMatterRequest](../../sdk/models/operations/removelegalmatterrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveLegalMatterResponse](../../sdk/models/operations/removelegalmatterresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateLegalMatter

Update a matter

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateLegalMatter" method="put" path="/legal/{connection_id}/matter/{id}" example="legal_matter" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.matter.updateLegalMatter({
    legalMatter: {
      billingMethod: "OTHER",
      clientReference: "qSrjIBAD",
      companyIds: [],
      contactIds: [],
      createdAt: new Date("2023-05-28T04:10:42.375Z"),
      currency: "BOB",
      description: "Speciosus cresco aut cotidie temeritas arma.",
      id: "c4f45d8a-6e24-4806-ad6e-166ad9c7043c",
      metadata: [],
      name: "Walter v. Franecki - Spinka",
      number: "2023-3062",
      openedAt: new Date("2023-07-05T02:38:52.289Z"),
      parties: [
        {
          description: "Urban Walter",
          role: "EXPERT",
        },
      ],
      stage: "currus",
      status: "OPEN",
      statuteOfLimitationsAt: new Date("2027-06-23T21:44:09.592Z"),
      updatedAt: new Date("2023-07-17T05:15:22.477Z"),
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
import { legalUpdateLegalMatter } from "@unified-api/typescript-sdk/funcs/legalUpdateLegalMatter.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await legalUpdateLegalMatter(unifiedTo, {
    legalMatter: {
      billingMethod: "OTHER",
      clientReference: "qSrjIBAD",
      companyIds: [],
      contactIds: [],
      createdAt: new Date("2023-05-28T04:10:42.375Z"),
      currency: "BOB",
      description: "Speciosus cresco aut cotidie temeritas arma.",
      id: "c4f45d8a-6e24-4806-ad6e-166ad9c7043c",
      metadata: [],
      name: "Walter v. Franecki - Spinka",
      number: "2023-3062",
      openedAt: new Date("2023-07-05T02:38:52.289Z"),
      parties: [
        {
          description: "Urban Walter",
          role: "EXPERT",
        },
      ],
      stage: "currus",
      status: "OPEN",
      statuteOfLimitationsAt: new Date("2027-06-23T21:44:09.592Z"),
      updatedAt: new Date("2023-07-17T05:15:22.477Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("legalUpdateLegalMatter failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLegalMatterRequest](../../sdk/models/operations/updatelegalmatterrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LegalMatter](../../sdk/models/shared/legalmatter.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |