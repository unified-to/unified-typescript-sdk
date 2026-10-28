# Forms

## Overview

### Available Operations

* [createFormsForm](#createformsform) - Create a form
* [getFormsForm](#getformsform) - Retrieve a form
* [getFormsSubmission](#getformssubmission) - Retrieve a submission
* [listFormsForms](#listformsforms) - List all forms
* [listFormsSubmissions](#listformssubmissions) - List all submissions
* [patchFormsForm](#patchformsform) - Update a form
* [removeFormsForm](#removeformsform) - Remove a form
* [updateFormsForm](#updateformsform) - Update a form

## createFormsForm

Creates a FormsForm. Provide the unified FormsForm fields in the request body; they are mapped to the provider's API. Returns the created FormsForm.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createFormsForm" method="post" path="/forms/{connection_id}/form" example="forms_form" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.forms.createFormsForm({
    formsForm: {
      confirmationMessage: "Alo crebro vado utique.",
      createdAt: new Date("2023-10-05T21:34:29.094Z"),
      description: "Qui pauper triumphus adipisci comitatus tamen stabilis clementia culpo tolero.",
      fields: [
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "c238abcc-f32d-47fa-959e-3d3440b2c750",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-05-02T05:58:26.666Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "b6199f46-62bb-4b2f-a578-c6c98e7cec08",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-04T05:58:43.483Z"),
        },
        {
          choices: [
            "conor",
            "patior",
            "crur",
            "vinculum",
            "tredecim",
          ],
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          defaultValue: "somniculosus",
          id: "a8d6a26c-31f5-4262-9706-1d43a558a3af",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-27T06:04:12.790Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "78e8ceb4-0cb6-45db-a0b2-d8697eba03a4",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-30T00:59:03.679Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "9fc96336-0e07-4125-8a7f-eee2fe2523d9",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-26T19:58:56.417Z"),
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
import { formsCreateFormsForm } from "@unified-api/typescript-sdk/funcs/formsCreateFormsForm.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await formsCreateFormsForm(unifiedTo, {
    formsForm: {
      confirmationMessage: "Alo crebro vado utique.",
      createdAt: new Date("2023-10-05T21:34:29.094Z"),
      description: "Qui pauper triumphus adipisci comitatus tamen stabilis clementia culpo tolero.",
      fields: [
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "c238abcc-f32d-47fa-959e-3d3440b2c750",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-05-02T05:58:26.666Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "b6199f46-62bb-4b2f-a578-c6c98e7cec08",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-04T05:58:43.483Z"),
        },
        {
          choices: [
            "conor",
            "patior",
            "crur",
            "vinculum",
            "tredecim",
          ],
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          defaultValue: "somniculosus",
          id: "a8d6a26c-31f5-4262-9706-1d43a558a3af",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-27T06:04:12.790Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "78e8ceb4-0cb6-45db-a0b2-d8697eba03a4",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-30T00:59:03.679Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "9fc96336-0e07-4125-8a7f-eee2fe2523d9",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-26T19:58:56.417Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("formsCreateFormsForm failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateFormsFormRequest](../../sdk/models/operations/createformsformrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.FormsForm](../../sdk/models/shared/formsform.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getFormsForm

Retrieves a single FormsForm by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFormsForm" method="get" path="/forms/{connection_id}/form/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.forms.getFormsForm({
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
import { formsGetFormsForm } from "@unified-api/typescript-sdk/funcs/formsGetFormsForm.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await formsGetFormsForm(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("formsGetFormsForm failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFormsFormRequest](../../sdk/models/operations/getformsformrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.FormsForm](../../sdk/models/shared/formsform.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getFormsSubmission

Retrieves a single FormsSubmission by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFormsSubmission" method="get" path="/forms/{connection_id}/submission/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.forms.getFormsSubmission({
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
import { formsGetFormsSubmission } from "@unified-api/typescript-sdk/funcs/formsGetFormsSubmission.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await formsGetFormsSubmission(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("formsGetFormsSubmission failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFormsSubmissionRequest](../../sdk/models/operations/getformssubmissionrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.FormsSubmission](../../sdk/models/shared/formssubmission.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listFormsForms

Returns a list of FormsForms. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listFormsForms" method="get" path="/forms/{connection_id}/form" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.forms.listFormsForms({
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
import { formsListFormsForms } from "@unified-api/typescript-sdk/funcs/formsListFormsForms.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await formsListFormsForms(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("formsListFormsForms failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListFormsFormsRequest](../../sdk/models/operations/listformsformsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.FormsForm[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listFormsSubmissions

Returns a list of FormsSubmissions. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listFormsSubmissions" method="get" path="/forms/{connection_id}/submission" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.forms.listFormsSubmissions({
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
import { formsListFormsSubmissions } from "@unified-api/typescript-sdk/funcs/formsListFormsSubmissions.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await formsListFormsSubmissions(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("formsListFormsSubmissions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListFormsSubmissionsRequest](../../sdk/models/operations/listformssubmissionsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.FormsSubmission[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchFormsForm

Updates the FormsForm identified by `id`. Provide the unified FormsForm fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchFormsForm" method="patch" path="/forms/{connection_id}/form/{id}" example="forms_form" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.forms.patchFormsForm({
    formsForm: {
      confirmationMessage: "Alo crebro vado utique.",
      createdAt: new Date("2023-10-05T21:34:29.094Z"),
      description: "Qui pauper triumphus adipisci comitatus tamen stabilis clementia culpo tolero.",
      fields: [
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "6e1aaa18-44de-4eb5-a23e-0c4a10c3cb32",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-05-02T05:58:26.674Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "f6710525-53a3-4e12-82df-c0e9af81de37",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-04T05:58:43.488Z"),
        },
        {
          choices: [
            "conor",
            "patior",
            "crur",
            "vinculum",
            "tredecim",
          ],
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          defaultValue: "somniculosus",
          id: "c97ee03a-b33b-4869-8f3d-7af572e0a939",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-27T06:04:12.792Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "a27f2817-ea2e-48f0-99ac-3836c86173c7",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-30T00:59:03.685Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "9893e416-097b-4248-9e6c-bc57a35e06cc",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-26T19:58:56.422Z"),
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
import { formsPatchFormsForm } from "@unified-api/typescript-sdk/funcs/formsPatchFormsForm.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await formsPatchFormsForm(unifiedTo, {
    formsForm: {
      confirmationMessage: "Alo crebro vado utique.",
      createdAt: new Date("2023-10-05T21:34:29.094Z"),
      description: "Qui pauper triumphus adipisci comitatus tamen stabilis clementia culpo tolero.",
      fields: [
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "6e1aaa18-44de-4eb5-a23e-0c4a10c3cb32",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-05-02T05:58:26.674Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "f6710525-53a3-4e12-82df-c0e9af81de37",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-04T05:58:43.488Z"),
        },
        {
          choices: [
            "conor",
            "patior",
            "crur",
            "vinculum",
            "tredecim",
          ],
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          defaultValue: "somniculosus",
          id: "c97ee03a-b33b-4869-8f3d-7af572e0a939",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-27T06:04:12.792Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "a27f2817-ea2e-48f0-99ac-3836c86173c7",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-30T00:59:03.685Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "9893e416-097b-4248-9e6c-bc57a35e06cc",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-26T19:58:56.422Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("formsPatchFormsForm failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchFormsFormRequest](../../sdk/models/operations/patchformsformrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.FormsForm](../../sdk/models/shared/formsform.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeFormsForm

Deletes the FormsForm identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeFormsForm" method="delete" path="/forms/{connection_id}/form/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.forms.removeFormsForm({
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
import { formsRemoveFormsForm } from "@unified-api/typescript-sdk/funcs/formsRemoveFormsForm.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await formsRemoveFormsForm(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("formsRemoveFormsForm failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveFormsFormRequest](../../sdk/models/operations/removeformsformrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveFormsFormResponse](../../sdk/models/operations/removeformsformresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateFormsForm

Updates the FormsForm identified by `id`. Provide the unified FormsForm fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateFormsForm" method="put" path="/forms/{connection_id}/form/{id}" example="forms_form" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.forms.updateFormsForm({
    formsForm: {
      confirmationMessage: "Alo crebro vado utique.",
      createdAt: new Date("2023-10-05T21:34:29.094Z"),
      description: "Qui pauper triumphus adipisci comitatus tamen stabilis clementia culpo tolero.",
      fields: [
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "6e1aaa18-44de-4eb5-a23e-0c4a10c3cb32",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-05-02T05:58:26.674Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "f6710525-53a3-4e12-82df-c0e9af81de37",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-04T05:58:43.488Z"),
        },
        {
          choices: [
            "conor",
            "patior",
            "crur",
            "vinculum",
            "tredecim",
          ],
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          defaultValue: "somniculosus",
          id: "c97ee03a-b33b-4869-8f3d-7af572e0a939",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-27T06:04:12.792Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "a27f2817-ea2e-48f0-99ac-3836c86173c7",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-30T00:59:03.685Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "9893e416-097b-4248-9e6c-bc57a35e06cc",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-26T19:58:56.422Z"),
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
import { formsUpdateFormsForm } from "@unified-api/typescript-sdk/funcs/formsUpdateFormsForm.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await formsUpdateFormsForm(unifiedTo, {
    formsForm: {
      confirmationMessage: "Alo crebro vado utique.",
      createdAt: new Date("2023-10-05T21:34:29.094Z"),
      description: "Qui pauper triumphus adipisci comitatus tamen stabilis clementia culpo tolero.",
      fields: [
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "6e1aaa18-44de-4eb5-a23e-0c4a10c3cb32",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-05-02T05:58:26.674Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "f6710525-53a3-4e12-82df-c0e9af81de37",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-04T05:58:43.488Z"),
        },
        {
          choices: [
            "conor",
            "patior",
            "crur",
            "vinculum",
            "tredecim",
          ],
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          defaultValue: "somniculosus",
          id: "c97ee03a-b33b-4869-8f3d-7af572e0a939",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-27T06:04:12.792Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "a27f2817-ea2e-48f0-99ac-3836c86173c7",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-30T00:59:03.685Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "9893e416-097b-4248-9e6c-bc57a35e06cc",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-26T19:58:56.422Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("formsUpdateFormsForm failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateFormsFormRequest](../../sdk/models/operations/updateformsformrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.FormsForm](../../sdk/models/shared/formsform.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |