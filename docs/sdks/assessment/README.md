# Assessment

## Overview

### Available Operations

* [createAssessmentOrder](#createassessmentorder) - Create an order
* [createAssessmentPackage](#createassessmentpackage) - Create an assessment package
* [getAssessmentOrder](#getassessmentorder) - Retrieve an order
* [getAssessmentPackage](#getassessmentpackage) - Get an assessment package
* [listAssessmentPackages](#listassessmentpackages) - List assessment packages
* [patchAssessmentOrder](#patchassessmentorder) - Update an order
* [patchAssessmentPackage](#patchassessmentpackage) - Update an assessment package
* [removeAssessmentPackage](#removeassessmentpackage) - Delete an assessment package
* [updateAssessmentOrder](#updateassessmentorder) - Update an order
* [updateAssessmentPackage](#updateassessmentpackage) - Update an assessment package

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
  const result = await unifiedTo.assessment.createAssessmentOrder({
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

## createAssessmentPackage

Create an assessment package

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAssessmentPackage" method="post" path="/assessment/{connection_id}/package" example="assessment_package" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.assessment.createAssessmentPackage({
    assessmentPackage: {
      aliases: [
        "quia",
      ],
      createdAt: new Date("2022-11-18T19:48:39.433Z"),
      description: "Eos aedificium consectetur urbs. Admitto summa accusator tabesco distinctio vapulus culpo templum ancilla.",
      hasRedirectUrl: true,
      hasTargetUrl: false,
      id: "fe725e25-5371-42b6-83a2-85030f033584",
      infoUrl: "https://ugly-instance.biz/",
      integrationTypes: [
        "viridis",
      ],
      maxScore: 22,
      name: "Carus sed vox doloremque vigor surgo tabella cupiditas abduco clarus.",
      needsIpAddress: true,
      parameters: [],
      regions: [],
      tags: [
        "clamo",
      ],
      type: "VIDEO_INTERVIEW",
      updatedAt: new Date("2023-09-18T10:00:11.761Z"),
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
import { assessmentCreateAssessmentPackage } from "@unified-api/typescript-sdk/funcs/assessmentCreateAssessmentPackage.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await assessmentCreateAssessmentPackage(unifiedTo, {
    assessmentPackage: {
      aliases: [
        "quia",
      ],
      createdAt: new Date("2022-11-18T19:48:39.433Z"),
      description: "Eos aedificium consectetur urbs. Admitto summa accusator tabesco distinctio vapulus culpo templum ancilla.",
      hasRedirectUrl: true,
      hasTargetUrl: false,
      id: "fe725e25-5371-42b6-83a2-85030f033584",
      infoUrl: "https://ugly-instance.biz/",
      integrationTypes: [
        "viridis",
      ],
      maxScore: 22,
      name: "Carus sed vox doloremque vigor surgo tabella cupiditas abduco clarus.",
      needsIpAddress: true,
      parameters: [],
      regions: [],
      tags: [
        "clamo",
      ],
      type: "VIDEO_INTERVIEW",
      updatedAt: new Date("2023-09-18T10:00:11.761Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentCreateAssessmentPackage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAssessmentPackageRequest](../../sdk/models/operations/createassessmentpackagerequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AssessmentPackage](../../sdk/models/shared/assessmentpackage.md)\>**

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
  const result = await unifiedTo.assessment.getAssessmentOrder({
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

## getAssessmentPackage

Get an assessment package

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAssessmentPackage" method="get" path="/assessment/{connection_id}/package/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.assessment.getAssessmentPackage({
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
import { assessmentGetAssessmentPackage } from "@unified-api/typescript-sdk/funcs/assessmentGetAssessmentPackage.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await assessmentGetAssessmentPackage(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentGetAssessmentPackage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAssessmentPackageRequest](../../sdk/models/operations/getassessmentpackagerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AssessmentPackage](../../sdk/models/shared/assessmentpackage.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAssessmentPackages

List assessment packages

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAssessmentPackages" method="get" path="/assessment/{connection_id}/package" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.assessment.listAssessmentPackages({
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
import { assessmentListAssessmentPackages } from "@unified-api/typescript-sdk/funcs/assessmentListAssessmentPackages.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await assessmentListAssessmentPackages(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentListAssessmentPackages failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAssessmentPackagesRequest](../../sdk/models/operations/listassessmentpackagesrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AssessmentPackage[]](../../models/.md)\>**

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
  const result = await unifiedTo.assessment.patchAssessmentOrder({
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

## patchAssessmentPackage

Update an assessment package

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAssessmentPackage" method="patch" path="/assessment/{connection_id}/package/{id}" example="assessment_package" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.assessment.patchAssessmentPackage({
    assessmentPackage: {
      aliases: [
        "quia",
      ],
      createdAt: new Date("2022-11-18T19:48:39.433Z"),
      description: "Eos aedificium consectetur urbs. Admitto summa accusator tabesco distinctio vapulus culpo templum ancilla.",
      hasRedirectUrl: true,
      hasTargetUrl: false,
      id: "f43b85bf-69c3-4f16-b9f5-75b3b4e5b084",
      infoUrl: "https://ugly-instance.biz/",
      integrationTypes: [
        "viridis",
      ],
      maxScore: 22,
      name: "Carus sed vox doloremque vigor surgo tabella cupiditas abduco clarus.",
      needsIpAddress: true,
      parameters: [],
      regions: [],
      tags: [
        "clamo",
      ],
      type: "VIDEO_INTERVIEW",
      updatedAt: new Date("2023-09-18T10:00:11.764Z"),
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
import { assessmentPatchAssessmentPackage } from "@unified-api/typescript-sdk/funcs/assessmentPatchAssessmentPackage.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await assessmentPatchAssessmentPackage(unifiedTo, {
    assessmentPackage: {
      aliases: [
        "quia",
      ],
      createdAt: new Date("2022-11-18T19:48:39.433Z"),
      description: "Eos aedificium consectetur urbs. Admitto summa accusator tabesco distinctio vapulus culpo templum ancilla.",
      hasRedirectUrl: true,
      hasTargetUrl: false,
      id: "f43b85bf-69c3-4f16-b9f5-75b3b4e5b084",
      infoUrl: "https://ugly-instance.biz/",
      integrationTypes: [
        "viridis",
      ],
      maxScore: 22,
      name: "Carus sed vox doloremque vigor surgo tabella cupiditas abduco clarus.",
      needsIpAddress: true,
      parameters: [],
      regions: [],
      tags: [
        "clamo",
      ],
      type: "VIDEO_INTERVIEW",
      updatedAt: new Date("2023-09-18T10:00:11.764Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentPatchAssessmentPackage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAssessmentPackageRequest](../../sdk/models/operations/patchassessmentpackagerequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AssessmentPackage](../../sdk/models/shared/assessmentpackage.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAssessmentPackage

Delete an assessment package

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAssessmentPackage" method="delete" path="/assessment/{connection_id}/package/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.assessment.removeAssessmentPackage({
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
import { assessmentRemoveAssessmentPackage } from "@unified-api/typescript-sdk/funcs/assessmentRemoveAssessmentPackage.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await assessmentRemoveAssessmentPackage(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentRemoveAssessmentPackage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAssessmentPackageRequest](../../sdk/models/operations/removeassessmentpackagerequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAssessmentPackageResponse](../../sdk/models/operations/removeassessmentpackageresponse.md)\>**

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
  const result = await unifiedTo.assessment.updateAssessmentOrder({
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

## updateAssessmentPackage

Update an assessment package

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAssessmentPackage" method="put" path="/assessment/{connection_id}/package/{id}" example="assessment_package" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.assessment.updateAssessmentPackage({
    assessmentPackage: {
      aliases: [
        "quia",
      ],
      createdAt: new Date("2022-11-18T19:48:39.433Z"),
      description: "Eos aedificium consectetur urbs. Admitto summa accusator tabesco distinctio vapulus culpo templum ancilla.",
      hasRedirectUrl: true,
      hasTargetUrl: false,
      id: "f43b85bf-69c3-4f16-b9f5-75b3b4e5b084",
      infoUrl: "https://ugly-instance.biz/",
      integrationTypes: [
        "viridis",
      ],
      maxScore: 22,
      name: "Carus sed vox doloremque vigor surgo tabella cupiditas abduco clarus.",
      needsIpAddress: true,
      parameters: [],
      regions: [],
      tags: [
        "clamo",
      ],
      type: "VIDEO_INTERVIEW",
      updatedAt: new Date("2023-09-18T10:00:11.764Z"),
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
import { assessmentUpdateAssessmentPackage } from "@unified-api/typescript-sdk/funcs/assessmentUpdateAssessmentPackage.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await assessmentUpdateAssessmentPackage(unifiedTo, {
    assessmentPackage: {
      aliases: [
        "quia",
      ],
      createdAt: new Date("2022-11-18T19:48:39.433Z"),
      description: "Eos aedificium consectetur urbs. Admitto summa accusator tabesco distinctio vapulus culpo templum ancilla.",
      hasRedirectUrl: true,
      hasTargetUrl: false,
      id: "f43b85bf-69c3-4f16-b9f5-75b3b4e5b084",
      infoUrl: "https://ugly-instance.biz/",
      integrationTypes: [
        "viridis",
      ],
      maxScore: 22,
      name: "Carus sed vox doloremque vigor surgo tabella cupiditas abduco clarus.",
      needsIpAddress: true,
      parameters: [],
      regions: [],
      tags: [
        "clamo",
      ],
      type: "VIDEO_INTERVIEW",
      updatedAt: new Date("2023-09-18T10:00:11.764Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentUpdateAssessmentPackage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAssessmentPackageRequest](../../sdk/models/operations/updateassessmentpackagerequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AssessmentPackage](../../sdk/models/shared/assessmentpackage.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |