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
          id: "89299113-7074-4c83-95e7-92d2223213f9",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "voluntarius argumentum decumbo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-05-18T04:51:36.067Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "5b96097c-f653-4e61-8b39-70c6fa4fb1d1",
          isActive: true,
          isRequired: false,
          name: "desidero clibanus calcar",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-13T12:52:14.467Z"),
        },
        {
          choices: [
            "crur",
            "vinculum",
            "tredecim",
            "somniculosus",
            "curtus",
          ],
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          defaultValue: "fugiat",
          id: "ec7cce1b-69b9-4aaa-98e1-ac36772a189e",
          isActive: true,
          isRequired: false,
          name: "consequatur error cena",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-03-02T06:18:09.637Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Aurum voluptatum placeat audax tripudio amo.",
          id: "627135ee-4741-4673-863e-1b38dd131020",
          isActive: true,
          isRequired: false,
          name: "audentia subseco antepono",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-12-11T17:44:07.588Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "557b4c61-2921-48f1-b52e-5331d2d8e639",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-09-04T21:15:48.500Z"),
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
          id: "89299113-7074-4c83-95e7-92d2223213f9",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "voluntarius argumentum decumbo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-05-18T04:51:36.067Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "5b96097c-f653-4e61-8b39-70c6fa4fb1d1",
          isActive: true,
          isRequired: false,
          name: "desidero clibanus calcar",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-13T12:52:14.467Z"),
        },
        {
          choices: [
            "crur",
            "vinculum",
            "tredecim",
            "somniculosus",
            "curtus",
          ],
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          defaultValue: "fugiat",
          id: "ec7cce1b-69b9-4aaa-98e1-ac36772a189e",
          isActive: true,
          isRequired: false,
          name: "consequatur error cena",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-03-02T06:18:09.637Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Aurum voluptatum placeat audax tripudio amo.",
          id: "627135ee-4741-4673-863e-1b38dd131020",
          isActive: true,
          isRequired: false,
          name: "audentia subseco antepono",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-12-11T17:44:07.588Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "557b4c61-2921-48f1-b52e-5331d2d8e639",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-09-04T21:15:48.500Z"),
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
          id: "1b3d0bc5-bdb0-4b8d-9490-ad18aa7f3c00",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "voluntarius argumentum decumbo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-05-18T04:51:36.079Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "e87894c9-3002-45fd-be21-8f325652ab8e",
          isActive: true,
          isRequired: false,
          name: "desidero clibanus calcar",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-13T12:52:14.474Z"),
        },
        {
          choices: [
            "crur",
            "vinculum",
            "tredecim",
            "somniculosus",
            "curtus",
          ],
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          defaultValue: "fugiat",
          id: "ba04a1a0-badc-4e56-b87a-4218d06996a3",
          isActive: true,
          isRequired: false,
          name: "consequatur error cena",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-03-02T06:18:09.640Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Aurum voluptatum placeat audax tripudio amo.",
          id: "44cb6040-c891-45f1-b866-65a00f72199a",
          isActive: true,
          isRequired: false,
          name: "audentia subseco antepono",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-12-11T17:44:07.597Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "8c9923c4-058b-4b5c-b80e-b41c47fb0cd6",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-09-04T21:15:48.507Z"),
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
          id: "1b3d0bc5-bdb0-4b8d-9490-ad18aa7f3c00",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "voluntarius argumentum decumbo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-05-18T04:51:36.079Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "e87894c9-3002-45fd-be21-8f325652ab8e",
          isActive: true,
          isRequired: false,
          name: "desidero clibanus calcar",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-13T12:52:14.474Z"),
        },
        {
          choices: [
            "crur",
            "vinculum",
            "tredecim",
            "somniculosus",
            "curtus",
          ],
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          defaultValue: "fugiat",
          id: "ba04a1a0-badc-4e56-b87a-4218d06996a3",
          isActive: true,
          isRequired: false,
          name: "consequatur error cena",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-03-02T06:18:09.640Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Aurum voluptatum placeat audax tripudio amo.",
          id: "44cb6040-c891-45f1-b866-65a00f72199a",
          isActive: true,
          isRequired: false,
          name: "audentia subseco antepono",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-12-11T17:44:07.597Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "8c9923c4-058b-4b5c-b80e-b41c47fb0cd6",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-09-04T21:15:48.507Z"),
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
          id: "1b3d0bc5-bdb0-4b8d-9490-ad18aa7f3c00",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "voluntarius argumentum decumbo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-05-18T04:51:36.079Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "e87894c9-3002-45fd-be21-8f325652ab8e",
          isActive: true,
          isRequired: false,
          name: "desidero clibanus calcar",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-13T12:52:14.474Z"),
        },
        {
          choices: [
            "crur",
            "vinculum",
            "tredecim",
            "somniculosus",
            "curtus",
          ],
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          defaultValue: "fugiat",
          id: "ba04a1a0-badc-4e56-b87a-4218d06996a3",
          isActive: true,
          isRequired: false,
          name: "consequatur error cena",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-03-02T06:18:09.640Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Aurum voluptatum placeat audax tripudio amo.",
          id: "44cb6040-c891-45f1-b866-65a00f72199a",
          isActive: true,
          isRequired: false,
          name: "audentia subseco antepono",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-12-11T17:44:07.597Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "8c9923c4-058b-4b5c-b80e-b41c47fb0cd6",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-09-04T21:15:48.507Z"),
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
          id: "1b3d0bc5-bdb0-4b8d-9490-ad18aa7f3c00",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "voluntarius argumentum decumbo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-05-18T04:51:36.079Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "e87894c9-3002-45fd-be21-8f325652ab8e",
          isActive: true,
          isRequired: false,
          name: "desidero clibanus calcar",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-13T12:52:14.474Z"),
        },
        {
          choices: [
            "crur",
            "vinculum",
            "tredecim",
            "somniculosus",
            "curtus",
          ],
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          defaultValue: "fugiat",
          id: "ba04a1a0-badc-4e56-b87a-4218d06996a3",
          isActive: true,
          isRequired: false,
          name: "consequatur error cena",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-03-02T06:18:09.640Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Aurum voluptatum placeat audax tripudio amo.",
          id: "44cb6040-c891-45f1-b866-65a00f72199a",
          isActive: true,
          isRequired: false,
          name: "audentia subseco antepono",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-12-11T17:44:07.597Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "8c9923c4-058b-4b5c-b80e-b41c47fb0cd6",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-09-04T21:15:48.507Z"),
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