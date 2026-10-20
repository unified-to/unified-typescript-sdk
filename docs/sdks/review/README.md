# Review

## Overview

### Available Operations

* [createCommerceReview](#createcommercereview) - Create a review
* [getCommerceReview](#getcommercereview) - Retrieve a review
* [getPerformanceReview](#getperformancereview) - Retrieve a review
* [getSocialReview](#getsocialreview) - Retrieve a review
* [listCommerceReviews](#listcommercereviews) - List all reviews
* [listPerformanceReviews](#listperformancereviews) - List all reviews
* [listSocialReviews](#listsocialreviews) - List all reviews
* [patchCommerceReview](#patchcommercereview) - Update a review
* [patchSocialReview](#patchsocialreview) - Update a review
* [removeCommerceReview](#removecommercereview) - Remove a review
* [updateCommerceReview](#updatecommercereview) - Update a review
* [updateSocialReview](#updatesocialreview) - Update a review

## createCommerceReview

Create a review

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCommerceReview" method="post" path="/commerce/{connection_id}/review" example="commerce_review" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.review.createCommerceReview({
    commerceReview: {
      authorAvatarUrl: "https://loremflickr.com/7/2660?lock=4279109054086693",
      authorEmail: "nyasia.macgyver@hotmail.com",
      authorLocation: "denique",
      authorName: "Nyasia MacGyver",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "53d68e50-c7c5-4d56-9983-ffebd2ba11d2",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Desipio carpo sol laudantium colo.",
          height: 749,
          id: "c1085412-3093-4dcb-8588-f12a8d0a5d54",
          metadata: [
            {
              id: "f445ea1d-16b8-43bf-adcb-da74dd36851e",
              slug: "textor",
              value: "quos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://loremflickr.com/196/2041?lock=5845524773114807",
          width: 72,
        },
        {
          alt: "Adopto teneo numquam.",
          height: 957,
          id: "a8215f62-f952-49d9-b5b9-f66ff12ae9a6",
          metadata: [
            {
              id: "896c783f-1e1d-4ca0-b7d5-df522b76f6dc",
              slug: "bos",
              value: "casso",
            },
          ],
          position: 69,
          type: "image",
          url: "https://loremflickr.com/1178/2175?lock=5466640101053206",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-08-20T08:31:01.402Z"),
      url: "https://diligent-bandwidth.biz",
      verifiedPurchase: true,
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
import { commerceCreateCommerceReview } from "@unified-api/typescript-sdk/funcs/commerceCreateCommerceReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceCreateCommerceReview(unifiedTo, {
    commerceReview: {
      authorAvatarUrl: "https://loremflickr.com/7/2660?lock=4279109054086693",
      authorEmail: "nyasia.macgyver@hotmail.com",
      authorLocation: "denique",
      authorName: "Nyasia MacGyver",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "53d68e50-c7c5-4d56-9983-ffebd2ba11d2",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Desipio carpo sol laudantium colo.",
          height: 749,
          id: "c1085412-3093-4dcb-8588-f12a8d0a5d54",
          metadata: [
            {
              id: "f445ea1d-16b8-43bf-adcb-da74dd36851e",
              slug: "textor",
              value: "quos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://loremflickr.com/196/2041?lock=5845524773114807",
          width: 72,
        },
        {
          alt: "Adopto teneo numquam.",
          height: 957,
          id: "a8215f62-f952-49d9-b5b9-f66ff12ae9a6",
          metadata: [
            {
              id: "896c783f-1e1d-4ca0-b7d5-df522b76f6dc",
              slug: "bos",
              value: "casso",
            },
          ],
          position: 69,
          type: "image",
          url: "https://loremflickr.com/1178/2175?lock=5466640101053206",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-08-20T08:31:01.402Z"),
      url: "https://diligent-bandwidth.biz",
      verifiedPurchase: true,
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceCreateCommerceReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCommerceReviewRequest](../../sdk/models/operations/createcommercereviewrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReview](../../sdk/models/shared/commercereview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCommerceReview

Retrieve a review

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCommerceReview" method="get" path="/commerce/{connection_id}/review/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.review.getCommerceReview({
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
import { commerceGetCommerceReview } from "@unified-api/typescript-sdk/funcs/commerceGetCommerceReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceGetCommerceReview(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceGetCommerceReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommerceReviewRequest](../../sdk/models/operations/getcommercereviewrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReview](../../sdk/models/shared/commercereview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPerformanceReview

Retrieve a review

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPerformanceReview" method="get" path="/performance/{connection_id}/review/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.review.getPerformanceReview({
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
import { reviewGetPerformanceReview } from "@unified-api/typescript-sdk/funcs/reviewGetPerformanceReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await reviewGetPerformanceReview(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reviewGetPerformanceReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPerformanceReviewRequest](../../sdk/models/operations/getperformancereviewrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PerformanceReview](../../sdk/models/shared/performancereview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getSocialReview

Retrieve a review

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSocialReview" method="get" path="/social/{connection_id}/review/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.review.getSocialReview({
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
import { reviewGetSocialReview } from "@unified-api/typescript-sdk/funcs/reviewGetSocialReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await reviewGetSocialReview(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reviewGetSocialReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSocialReviewRequest](../../sdk/models/operations/getsocialreviewrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SocialReview](../../sdk/models/shared/socialreview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCommerceReviews

List all reviews

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCommerceReviews" method="get" path="/commerce/{connection_id}/review" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.review.listCommerceReviews({
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
import { commerceListCommerceReviews } from "@unified-api/typescript-sdk/funcs/commerceListCommerceReviews.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceListCommerceReviews(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceListCommerceReviews failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommerceReviewsRequest](../../sdk/models/operations/listcommercereviewsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReview[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPerformanceReviews

List all reviews

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPerformanceReviews" method="get" path="/performance/{connection_id}/review" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.review.listPerformanceReviews({
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
import { reviewListPerformanceReviews } from "@unified-api/typescript-sdk/funcs/reviewListPerformanceReviews.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await reviewListPerformanceReviews(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reviewListPerformanceReviews failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPerformanceReviewsRequest](../../sdk/models/operations/listperformancereviewsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PerformanceReview[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listSocialReviews

List all reviews

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listSocialReviews" method="get" path="/social/{connection_id}/review" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.review.listSocialReviews({
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
import { reviewListSocialReviews } from "@unified-api/typescript-sdk/funcs/reviewListSocialReviews.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await reviewListSocialReviews(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reviewListSocialReviews failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSocialReviewsRequest](../../sdk/models/operations/listsocialreviewsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SocialReview[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCommerceReview

Update a review

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCommerceReview" method="patch" path="/commerce/{connection_id}/review/{id}" example="commerce_review" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.review.patchCommerceReview({
    commerceReview: {
      authorAvatarUrl: "https://loremflickr.com/7/2660?lock=4279109054086693",
      authorEmail: "nyasia.macgyver@hotmail.com",
      authorLocation: "denique",
      authorName: "Nyasia MacGyver",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "3bf8b1ad-53da-433a-8606-8b42723947cb",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Desipio carpo sol laudantium colo.",
          height: 749,
          id: "db0b4e72-6dad-4ab2-bfc0-0b938e4fea26",
          metadata: [
            {
              id: "15d7c5af-489d-4e06-aae7-00e1fb47d619",
              slug: "textor",
              value: "quos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://loremflickr.com/196/2041?lock=5845524773114807",
          width: 72,
        },
        {
          alt: "Adopto teneo numquam.",
          height: 957,
          id: "54a0454e-7dce-4fdf-b178-2bd632f2f43f",
          metadata: [
            {
              id: "5ff87601-9c1e-4d39-bfa9-76b256bf099c",
              slug: "bos",
              value: "casso",
            },
          ],
          position: 69,
          type: "image",
          url: "https://loremflickr.com/1178/2175?lock=5466640101053206",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-08-20T08:31:01.445Z"),
      url: "https://diligent-bandwidth.biz",
      verifiedPurchase: true,
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
import { commercePatchCommerceReview } from "@unified-api/typescript-sdk/funcs/commercePatchCommerceReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commercePatchCommerceReview(unifiedTo, {
    commerceReview: {
      authorAvatarUrl: "https://loremflickr.com/7/2660?lock=4279109054086693",
      authorEmail: "nyasia.macgyver@hotmail.com",
      authorLocation: "denique",
      authorName: "Nyasia MacGyver",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "3bf8b1ad-53da-433a-8606-8b42723947cb",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Desipio carpo sol laudantium colo.",
          height: 749,
          id: "db0b4e72-6dad-4ab2-bfc0-0b938e4fea26",
          metadata: [
            {
              id: "15d7c5af-489d-4e06-aae7-00e1fb47d619",
              slug: "textor",
              value: "quos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://loremflickr.com/196/2041?lock=5845524773114807",
          width: 72,
        },
        {
          alt: "Adopto teneo numquam.",
          height: 957,
          id: "54a0454e-7dce-4fdf-b178-2bd632f2f43f",
          metadata: [
            {
              id: "5ff87601-9c1e-4d39-bfa9-76b256bf099c",
              slug: "bos",
              value: "casso",
            },
          ],
          position: 69,
          type: "image",
          url: "https://loremflickr.com/1178/2175?lock=5466640101053206",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-08-20T08:31:01.445Z"),
      url: "https://diligent-bandwidth.biz",
      verifiedPurchase: true,
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commercePatchCommerceReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCommerceReviewRequest](../../sdk/models/operations/patchcommercereviewrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReview](../../sdk/models/shared/commercereview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchSocialReview

Update a review

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchSocialReview" method="patch" path="/social/{connection_id}/review/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.review.patchSocialReview({
    socialReview: {},
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
import { reviewPatchSocialReview } from "@unified-api/typescript-sdk/funcs/reviewPatchSocialReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await reviewPatchSocialReview(unifiedTo, {
    socialReview: {},
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reviewPatchSocialReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchSocialReviewRequest](../../sdk/models/operations/patchsocialreviewrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SocialReview](../../sdk/models/shared/socialreview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCommerceReview

Remove a review

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCommerceReview" method="delete" path="/commerce/{connection_id}/review/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.review.removeCommerceReview({
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
import { commerceRemoveCommerceReview } from "@unified-api/typescript-sdk/funcs/commerceRemoveCommerceReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceRemoveCommerceReview(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceRemoveCommerceReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCommerceReviewRequest](../../sdk/models/operations/removecommercereviewrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCommerceReviewResponse](../../sdk/models/operations/removecommercereviewresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCommerceReview

Update a review

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCommerceReview" method="put" path="/commerce/{connection_id}/review/{id}" example="commerce_review" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.review.updateCommerceReview({
    commerceReview: {
      authorAvatarUrl: "https://loremflickr.com/7/2660?lock=4279109054086693",
      authorEmail: "nyasia.macgyver@hotmail.com",
      authorLocation: "denique",
      authorName: "Nyasia MacGyver",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "3bf8b1ad-53da-433a-8606-8b42723947cb",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Desipio carpo sol laudantium colo.",
          height: 749,
          id: "db0b4e72-6dad-4ab2-bfc0-0b938e4fea26",
          metadata: [
            {
              id: "15d7c5af-489d-4e06-aae7-00e1fb47d619",
              slug: "textor",
              value: "quos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://loremflickr.com/196/2041?lock=5845524773114807",
          width: 72,
        },
        {
          alt: "Adopto teneo numquam.",
          height: 957,
          id: "54a0454e-7dce-4fdf-b178-2bd632f2f43f",
          metadata: [
            {
              id: "5ff87601-9c1e-4d39-bfa9-76b256bf099c",
              slug: "bos",
              value: "casso",
            },
          ],
          position: 69,
          type: "image",
          url: "https://loremflickr.com/1178/2175?lock=5466640101053206",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-08-20T08:31:01.445Z"),
      url: "https://diligent-bandwidth.biz",
      verifiedPurchase: true,
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
import { commerceUpdateCommerceReview } from "@unified-api/typescript-sdk/funcs/commerceUpdateCommerceReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceUpdateCommerceReview(unifiedTo, {
    commerceReview: {
      authorAvatarUrl: "https://loremflickr.com/7/2660?lock=4279109054086693",
      authorEmail: "nyasia.macgyver@hotmail.com",
      authorLocation: "denique",
      authorName: "Nyasia MacGyver",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "3bf8b1ad-53da-433a-8606-8b42723947cb",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Desipio carpo sol laudantium colo.",
          height: 749,
          id: "db0b4e72-6dad-4ab2-bfc0-0b938e4fea26",
          metadata: [
            {
              id: "15d7c5af-489d-4e06-aae7-00e1fb47d619",
              slug: "textor",
              value: "quos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://loremflickr.com/196/2041?lock=5845524773114807",
          width: 72,
        },
        {
          alt: "Adopto teneo numquam.",
          height: 957,
          id: "54a0454e-7dce-4fdf-b178-2bd632f2f43f",
          metadata: [
            {
              id: "5ff87601-9c1e-4d39-bfa9-76b256bf099c",
              slug: "bos",
              value: "casso",
            },
          ],
          position: 69,
          type: "image",
          url: "https://loremflickr.com/1178/2175?lock=5466640101053206",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-08-20T08:31:01.445Z"),
      url: "https://diligent-bandwidth.biz",
      verifiedPurchase: true,
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceUpdateCommerceReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCommerceReviewRequest](../../sdk/models/operations/updatecommercereviewrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReview](../../sdk/models/shared/commercereview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateSocialReview

Update a review

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateSocialReview" method="put" path="/social/{connection_id}/review/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.review.updateSocialReview({
    socialReview: {},
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
import { reviewUpdateSocialReview } from "@unified-api/typescript-sdk/funcs/reviewUpdateSocialReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await reviewUpdateSocialReview(unifiedTo, {
    socialReview: {},
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reviewUpdateSocialReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSocialReviewRequest](../../sdk/models/operations/updatesocialreviewrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SocialReview](../../sdk/models/shared/socialreview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |