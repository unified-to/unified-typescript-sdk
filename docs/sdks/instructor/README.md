# Instructor

## Overview

### Available Operations

* [createLmsInstructor](#createlmsinstructor) - Create an instructor
* [getLmsInstructor](#getlmsinstructor) - Retrieve an instructor
* [listLmsInstructors](#listlmsinstructors) - List all instructors
* [patchLmsInstructor](#patchlmsinstructor) - Update an instructor
* [removeLmsInstructor](#removelmsinstructor) - Remove an instructor
* [updateLmsInstructor](#updatelmsinstructor) - Update an instructor

## createLmsInstructor

Create an instructor

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createLmsInstructor" method="post" path="/lms/{connection_id}/instructor" example="lms_instructor" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.instructor.createLmsInstructor({
    lmsInstructor: {
      createdAt: new Date("2021-10-12T16:38:54.979Z"),
      emails: [
        {},
      ],
      firstName: "Deangelo",
      id: "c78af8be-9fff-406f-a5fc-89849a57706a",
      imageUrl: "https://avatars.githubusercontent.com/u/95131132",
      lastName: "Ritchie",
      metadata: [],
      name: "Deangelo Ritchie",
      telephones: [
        {
          telephone: "(605) 752-8163",
          type: "WORK",
        },
        {
          telephone: "(430) 415-2451",
          type: "HOME",
        },
      ],
      title: "Regional Security Agent",
      updatedAt: new Date("2025-07-23T12:23:25.850Z"),
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
import { lmsCreateLmsInstructor } from "@unified-api/typescript-sdk/funcs/lmsCreateLmsInstructor.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsCreateLmsInstructor(unifiedTo, {
    lmsInstructor: {
      createdAt: new Date("2021-10-12T16:38:54.979Z"),
      emails: [
        {},
      ],
      firstName: "Deangelo",
      id: "c78af8be-9fff-406f-a5fc-89849a57706a",
      imageUrl: "https://avatars.githubusercontent.com/u/95131132",
      lastName: "Ritchie",
      metadata: [],
      name: "Deangelo Ritchie",
      telephones: [
        {
          telephone: "(605) 752-8163",
          type: "WORK",
        },
        {
          telephone: "(430) 415-2451",
          type: "HOME",
        },
      ],
      title: "Regional Security Agent",
      updatedAt: new Date("2025-07-23T12:23:25.850Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsCreateLmsInstructor failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLmsInstructorRequest](../../sdk/models/operations/createlmsinstructorrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsInstructor](../../sdk/models/shared/lmsinstructor.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLmsInstructor

Retrieve an instructor

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLmsInstructor" method="get" path="/lms/{connection_id}/instructor/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.instructor.getLmsInstructor({
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
import { lmsGetLmsInstructor } from "@unified-api/typescript-sdk/funcs/lmsGetLmsInstructor.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsGetLmsInstructor(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsGetLmsInstructor failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLmsInstructorRequest](../../sdk/models/operations/getlmsinstructorrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsInstructor](../../sdk/models/shared/lmsinstructor.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listLmsInstructors

List all instructors

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listLmsInstructors" method="get" path="/lms/{connection_id}/instructor" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.instructor.listLmsInstructors({
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
import { lmsListLmsInstructors } from "@unified-api/typescript-sdk/funcs/lmsListLmsInstructors.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsListLmsInstructors(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsListLmsInstructors failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLmsInstructorsRequest](../../sdk/models/operations/listlmsinstructorsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsInstructor[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchLmsInstructor

Update an instructor

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchLmsInstructor" method="patch" path="/lms/{connection_id}/instructor/{id}" example="lms_instructor" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.instructor.patchLmsInstructor({
    lmsInstructor: {
      createdAt: new Date("2021-10-12T16:38:54.979Z"),
      emails: [
        {},
      ],
      firstName: "Deangelo",
      id: "b3e39412-161c-425c-af6c-e9396c6063e6",
      imageUrl: "https://avatars.githubusercontent.com/u/95131132",
      lastName: "Ritchie",
      metadata: [],
      name: "Deangelo Ritchie",
      telephones: [
        {
          telephone: "(605) 752-8163",
          type: "WORK",
        },
        {
          telephone: "(430) 415-2451",
          type: "HOME",
        },
      ],
      title: "Regional Security Agent",
      updatedAt: new Date("2025-07-23T12:23:25.860Z"),
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
import { lmsPatchLmsInstructor } from "@unified-api/typescript-sdk/funcs/lmsPatchLmsInstructor.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsPatchLmsInstructor(unifiedTo, {
    lmsInstructor: {
      createdAt: new Date("2021-10-12T16:38:54.979Z"),
      emails: [
        {},
      ],
      firstName: "Deangelo",
      id: "b3e39412-161c-425c-af6c-e9396c6063e6",
      imageUrl: "https://avatars.githubusercontent.com/u/95131132",
      lastName: "Ritchie",
      metadata: [],
      name: "Deangelo Ritchie",
      telephones: [
        {
          telephone: "(605) 752-8163",
          type: "WORK",
        },
        {
          telephone: "(430) 415-2451",
          type: "HOME",
        },
      ],
      title: "Regional Security Agent",
      updatedAt: new Date("2025-07-23T12:23:25.860Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsPatchLmsInstructor failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchLmsInstructorRequest](../../sdk/models/operations/patchlmsinstructorrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsInstructor](../../sdk/models/shared/lmsinstructor.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeLmsInstructor

Remove an instructor

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeLmsInstructor" method="delete" path="/lms/{connection_id}/instructor/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.instructor.removeLmsInstructor({
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
import { lmsRemoveLmsInstructor } from "@unified-api/typescript-sdk/funcs/lmsRemoveLmsInstructor.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsRemoveLmsInstructor(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsRemoveLmsInstructor failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveLmsInstructorRequest](../../sdk/models/operations/removelmsinstructorrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveLmsInstructorResponse](../../sdk/models/operations/removelmsinstructorresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateLmsInstructor

Update an instructor

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateLmsInstructor" method="put" path="/lms/{connection_id}/instructor/{id}" example="lms_instructor" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.instructor.updateLmsInstructor({
    lmsInstructor: {
      createdAt: new Date("2021-10-12T16:38:54.979Z"),
      emails: [
        {},
      ],
      firstName: "Deangelo",
      id: "b3e39412-161c-425c-af6c-e9396c6063e6",
      imageUrl: "https://avatars.githubusercontent.com/u/95131132",
      lastName: "Ritchie",
      metadata: [],
      name: "Deangelo Ritchie",
      telephones: [
        {
          telephone: "(605) 752-8163",
          type: "WORK",
        },
        {
          telephone: "(430) 415-2451",
          type: "HOME",
        },
      ],
      title: "Regional Security Agent",
      updatedAt: new Date("2025-07-23T12:23:25.860Z"),
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
import { lmsUpdateLmsInstructor } from "@unified-api/typescript-sdk/funcs/lmsUpdateLmsInstructor.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsUpdateLmsInstructor(unifiedTo, {
    lmsInstructor: {
      createdAt: new Date("2021-10-12T16:38:54.979Z"),
      emails: [
        {},
      ],
      firstName: "Deangelo",
      id: "b3e39412-161c-425c-af6c-e9396c6063e6",
      imageUrl: "https://avatars.githubusercontent.com/u/95131132",
      lastName: "Ritchie",
      metadata: [],
      name: "Deangelo Ritchie",
      telephones: [
        {
          telephone: "(605) 752-8163",
          type: "WORK",
        },
        {
          telephone: "(430) 415-2451",
          type: "HOME",
        },
      ],
      title: "Regional Security Agent",
      updatedAt: new Date("2025-07-23T12:23:25.860Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsUpdateLmsInstructor failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLmsInstructorRequest](../../sdk/models/operations/updatelmsinstructorrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsInstructor](../../sdk/models/shared/lmsinstructor.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |