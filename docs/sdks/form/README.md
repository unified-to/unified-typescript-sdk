# Form

## Overview

### Available Operations

* [createFormsForm](#createformsform) - Create a form
* [getFormsForm](#getformsform) - Retrieve a form
* [listFormsForms](#listformsforms) - List all forms
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
  const result = await unifiedTo.form.createFormsForm({
    formsForm: {
      confirmationMessage: "Alo crebro vado utique.",
      createdAt: new Date("2023-10-05T21:34:29.094Z"),
      description: "Qui pauper triumphus adipisci comitatus tamen stabilis clementia culpo tolero.",
      fields: [
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "3161efa8-f480-4116-87aa-faa28c5de1d9",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-04-29T04:48:54.963Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "05f0de0d-72a3-4392-a72a-02820b50d563",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-02T11:23:25.163Z"),
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
          id: "c7dd86fb-d1ec-4dd8-88eb-4d50381964f7",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-26T11:40:58.388Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "9862f124-1883-4618-a783-ffd188a66d1e",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-27T19:20:26.401Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "077ca80a-39ee-4fec-8aa8-2bb53e9f11cf",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-25T02:27:57.542Z"),
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
          id: "3161efa8-f480-4116-87aa-faa28c5de1d9",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-04-29T04:48:54.963Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "05f0de0d-72a3-4392-a72a-02820b50d563",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-02T11:23:25.163Z"),
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
          id: "c7dd86fb-d1ec-4dd8-88eb-4d50381964f7",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-26T11:40:58.388Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "9862f124-1883-4618-a783-ffd188a66d1e",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-27T19:20:26.401Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "077ca80a-39ee-4fec-8aa8-2bb53e9f11cf",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-25T02:27:57.542Z"),
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
  const result = await unifiedTo.form.getFormsForm({
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
  const result = await unifiedTo.form.listFormsForms({
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
  const result = await unifiedTo.form.patchFormsForm({
    formsForm: {
      confirmationMessage: "Alo crebro vado utique.",
      createdAt: new Date("2023-10-05T21:34:29.094Z"),
      description: "Qui pauper triumphus adipisci comitatus tamen stabilis clementia culpo tolero.",
      fields: [
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "449f1453-4bbf-4c51-9254-37858ef92249",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-04-29T04:48:54.973Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "3c11fe4f-869e-409d-a23a-b3fc87d50ad1",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-02T11:23:25.169Z"),
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
          id: "a9913aa4-67c8-433e-9e1a-f9b3389ea5c2",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-26T11:40:58.391Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "95a7d630-6436-4fae-87f5-b9ae7b5bd36a",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-27T19:20:26.408Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "76e855f6-1f9d-4b55-9483-2692ca8cb004",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-25T02:27:57.548Z"),
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
          id: "449f1453-4bbf-4c51-9254-37858ef92249",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-04-29T04:48:54.973Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "3c11fe4f-869e-409d-a23a-b3fc87d50ad1",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-02T11:23:25.169Z"),
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
          id: "a9913aa4-67c8-433e-9e1a-f9b3389ea5c2",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-26T11:40:58.391Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "95a7d630-6436-4fae-87f5-b9ae7b5bd36a",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-27T19:20:26.408Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "76e855f6-1f9d-4b55-9483-2692ca8cb004",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-25T02:27:57.548Z"),
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
  const result = await unifiedTo.form.removeFormsForm({
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
  const result = await unifiedTo.form.updateFormsForm({
    formsForm: {
      confirmationMessage: "Alo crebro vado utique.",
      createdAt: new Date("2023-10-05T21:34:29.094Z"),
      description: "Qui pauper triumphus adipisci comitatus tamen stabilis clementia culpo tolero.",
      fields: [
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "449f1453-4bbf-4c51-9254-37858ef92249",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-04-29T04:48:54.973Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "3c11fe4f-869e-409d-a23a-b3fc87d50ad1",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-02T11:23:25.169Z"),
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
          id: "a9913aa4-67c8-433e-9e1a-f9b3389ea5c2",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-26T11:40:58.391Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "95a7d630-6436-4fae-87f5-b9ae7b5bd36a",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-27T19:20:26.408Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "76e855f6-1f9d-4b55-9483-2692ca8cb004",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-25T02:27:57.548Z"),
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
          id: "449f1453-4bbf-4c51-9254-37858ef92249",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-04-29T04:48:54.973Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "3c11fe4f-869e-409d-a23a-b3fc87d50ad1",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-02T11:23:25.169Z"),
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
          id: "a9913aa4-67c8-433e-9e1a-f9b3389ea5c2",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-26T11:40:58.391Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "95a7d630-6436-4fae-87f5-b9ae7b5bd36a",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-27T19:20:26.408Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "76e855f6-1f9d-4b55-9483-2692ca8cb004",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-25T02:27:57.548Z"),
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