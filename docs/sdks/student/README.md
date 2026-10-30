# Student

## Overview

### Available Operations

* [createLmsStudent](#createlmsstudent) - Create a student
* [getLmsStudent](#getlmsstudent) - Retrieve a student
* [listLmsStudents](#listlmsstudents) - List all students
* [patchLmsStudent](#patchlmsstudent) - Update a student
* [removeLmsStudent](#removelmsstudent) - Remove a student
* [updateLmsStudent](#updatelmsstudent) - Update a student

## createLmsStudent

Creates a LmsStudent. Provide the unified LmsStudent fields in the request body; they are mapped to the provider's API. Returns the created LmsStudent.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createLmsStudent" method="post" path="/lms/{connection_id}/student" example="lms_student" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.student.createLmsStudent({
    lmsStudent: {
      address: {
        address1: "15033 Corwin Circles",
        city: "New Craigside",
        countryCode: "US",
        postalCode: "73966",
        region: "New Jersey",
        regionCode: "TX",
      },
      createdAt: new Date("2020-03-23T06:59:29.777Z"),
      emails: [
        {},
      ],
      firstName: "Marcella",
      id: "51f817a6-4022-4ef7-96e6-17db7b038b8d",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/56.jpg",
      lastName: "Murazik",
      metadata: [],
      name: "Marcella Murazik",
      telephones: [
        {
          telephone: "(899) 827-6400",
          type: "WORK",
        },
        {
          telephone: "(487) 213-8236",
          type: "FAX",
        },
        {
          telephone: "(980) 775-2940",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2022-07-04T02:09:24.824Z"),
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
import { lmsCreateLmsStudent } from "@unified-api/typescript-sdk/funcs/lmsCreateLmsStudent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsCreateLmsStudent(unifiedTo, {
    lmsStudent: {
      address: {
        address1: "15033 Corwin Circles",
        city: "New Craigside",
        countryCode: "US",
        postalCode: "73966",
        region: "New Jersey",
        regionCode: "TX",
      },
      createdAt: new Date("2020-03-23T06:59:29.777Z"),
      emails: [
        {},
      ],
      firstName: "Marcella",
      id: "51f817a6-4022-4ef7-96e6-17db7b038b8d",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/56.jpg",
      lastName: "Murazik",
      metadata: [],
      name: "Marcella Murazik",
      telephones: [
        {
          telephone: "(899) 827-6400",
          type: "WORK",
        },
        {
          telephone: "(487) 213-8236",
          type: "FAX",
        },
        {
          telephone: "(980) 775-2940",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2022-07-04T02:09:24.824Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsCreateLmsStudent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLmsStudentRequest](../../sdk/models/operations/createlmsstudentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsStudent](../../sdk/models/shared/lmsstudent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLmsStudent

Retrieves a single LmsStudent by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLmsStudent" method="get" path="/lms/{connection_id}/student/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.student.getLmsStudent({
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
import { lmsGetLmsStudent } from "@unified-api/typescript-sdk/funcs/lmsGetLmsStudent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsGetLmsStudent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsGetLmsStudent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLmsStudentRequest](../../sdk/models/operations/getlmsstudentrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsStudent](../../sdk/models/shared/lmsstudent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listLmsStudents

Returns a list of LmsStudents. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listLmsStudents" method="get" path="/lms/{connection_id}/student" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.student.listLmsStudents({
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
import { lmsListLmsStudents } from "@unified-api/typescript-sdk/funcs/lmsListLmsStudents.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsListLmsStudents(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsListLmsStudents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLmsStudentsRequest](../../sdk/models/operations/listlmsstudentsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsStudent[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchLmsStudent

Updates the LmsStudent identified by `id`. Provide the unified LmsStudent fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchLmsStudent" method="patch" path="/lms/{connection_id}/student/{id}" example="lms_student" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.student.patchLmsStudent({
    lmsStudent: {
      address: {
        address1: "15033 Corwin Circles",
        city: "New Craigside",
        countryCode: "US",
        postalCode: "73966",
        region: "New Jersey",
        regionCode: "TX",
      },
      createdAt: new Date("2020-03-23T06:59:29.777Z"),
      emails: [
        {},
      ],
      firstName: "Marcella",
      id: "b3b9042b-5cb7-4737-956c-14329ece4060",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/56.jpg",
      lastName: "Murazik",
      metadata: [],
      name: "Marcella Murazik",
      telephones: [
        {
          telephone: "(899) 827-6400",
          type: "WORK",
        },
        {
          telephone: "(487) 213-8236",
          type: "FAX",
        },
        {
          telephone: "(980) 775-2940",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2022-07-04T02:09:24.832Z"),
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
import { lmsPatchLmsStudent } from "@unified-api/typescript-sdk/funcs/lmsPatchLmsStudent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsPatchLmsStudent(unifiedTo, {
    lmsStudent: {
      address: {
        address1: "15033 Corwin Circles",
        city: "New Craigside",
        countryCode: "US",
        postalCode: "73966",
        region: "New Jersey",
        regionCode: "TX",
      },
      createdAt: new Date("2020-03-23T06:59:29.777Z"),
      emails: [
        {},
      ],
      firstName: "Marcella",
      id: "b3b9042b-5cb7-4737-956c-14329ece4060",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/56.jpg",
      lastName: "Murazik",
      metadata: [],
      name: "Marcella Murazik",
      telephones: [
        {
          telephone: "(899) 827-6400",
          type: "WORK",
        },
        {
          telephone: "(487) 213-8236",
          type: "FAX",
        },
        {
          telephone: "(980) 775-2940",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2022-07-04T02:09:24.832Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsPatchLmsStudent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchLmsStudentRequest](../../sdk/models/operations/patchlmsstudentrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsStudent](../../sdk/models/shared/lmsstudent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeLmsStudent

Deletes the LmsStudent identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeLmsStudent" method="delete" path="/lms/{connection_id}/student/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.student.removeLmsStudent({
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
import { lmsRemoveLmsStudent } from "@unified-api/typescript-sdk/funcs/lmsRemoveLmsStudent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsRemoveLmsStudent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsRemoveLmsStudent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveLmsStudentRequest](../../sdk/models/operations/removelmsstudentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveLmsStudentResponse](../../sdk/models/operations/removelmsstudentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateLmsStudent

Updates the LmsStudent identified by `id`. Provide the unified LmsStudent fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateLmsStudent" method="put" path="/lms/{connection_id}/student/{id}" example="lms_student" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.student.updateLmsStudent({
    lmsStudent: {
      address: {
        address1: "15033 Corwin Circles",
        city: "New Craigside",
        countryCode: "US",
        postalCode: "73966",
        region: "New Jersey",
        regionCode: "TX",
      },
      createdAt: new Date("2020-03-23T06:59:29.777Z"),
      emails: [
        {},
      ],
      firstName: "Marcella",
      id: "b3b9042b-5cb7-4737-956c-14329ece4060",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/56.jpg",
      lastName: "Murazik",
      metadata: [],
      name: "Marcella Murazik",
      telephones: [
        {
          telephone: "(899) 827-6400",
          type: "WORK",
        },
        {
          telephone: "(487) 213-8236",
          type: "FAX",
        },
        {
          telephone: "(980) 775-2940",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2022-07-04T02:09:24.832Z"),
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
import { lmsUpdateLmsStudent } from "@unified-api/typescript-sdk/funcs/lmsUpdateLmsStudent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsUpdateLmsStudent(unifiedTo, {
    lmsStudent: {
      address: {
        address1: "15033 Corwin Circles",
        city: "New Craigside",
        countryCode: "US",
        postalCode: "73966",
        region: "New Jersey",
        regionCode: "TX",
      },
      createdAt: new Date("2020-03-23T06:59:29.777Z"),
      emails: [
        {},
      ],
      firstName: "Marcella",
      id: "b3b9042b-5cb7-4737-956c-14329ece4060",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/56.jpg",
      lastName: "Murazik",
      metadata: [],
      name: "Marcella Murazik",
      telephones: [
        {
          telephone: "(899) 827-6400",
          type: "WORK",
        },
        {
          telephone: "(487) 213-8236",
          type: "FAX",
        },
        {
          telephone: "(980) 775-2940",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2022-07-04T02:09:24.832Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsUpdateLmsStudent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLmsStudentRequest](../../sdk/models/operations/updatelmsstudentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsStudent](../../sdk/models/shared/lmsstudent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |