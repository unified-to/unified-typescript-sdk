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

Create a form

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
          id: "1ac6d713-c16e-4baf-a5f8-cc176c578c02",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-04-28T01:12:24.126Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "4eef9393-2fe9-466f-bb29-8a8824b62ef5",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-01T19:19:06.115Z"),
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
          id: "e8a13256-971f-4526-91e1-a57f45622f29",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-26T04:44:38.039Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "15b9e580-3fb9-4d2f-9905-3e60b72419df",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-26T23:05:48.079Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "5346ff4c-6c8c-4ac7-8ce2-11c45f8d6e30",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-24T10:47:54.966Z"),
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
          id: "1ac6d713-c16e-4baf-a5f8-cc176c578c02",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-04-28T01:12:24.126Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "4eef9393-2fe9-466f-bb29-8a8824b62ef5",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-01T19:19:06.115Z"),
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
          id: "e8a13256-971f-4526-91e1-a57f45622f29",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-26T04:44:38.039Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "15b9e580-3fb9-4d2f-9905-3e60b72419df",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-26T23:05:48.079Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "5346ff4c-6c8c-4ac7-8ce2-11c45f8d6e30",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-24T10:47:54.966Z"),
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

Retrieve a form

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

List all forms

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

Update a form

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
          id: "a023bd75-a25b-4b6d-a556-3eb8da9d1944",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-04-28T01:12:24.140Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "c76d5828-8bb0-426d-af10-78df1f2ee08f",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-01T19:19:06.123Z"),
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
          id: "c8b6c9a9-52d2-4755-9fc9-ecbe8065d515",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-26T04:44:38.043Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "988e3ee1-4349-419b-9e9e-3c7c92fde9ba",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-26T23:05:48.088Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "17e930a5-adf1-43f5-b7f9-acd4d2753dc3",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-24T10:47:54.974Z"),
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
          id: "a023bd75-a25b-4b6d-a556-3eb8da9d1944",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-04-28T01:12:24.140Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "c76d5828-8bb0-426d-af10-78df1f2ee08f",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-01T19:19:06.123Z"),
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
          id: "c8b6c9a9-52d2-4755-9fc9-ecbe8065d515",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-26T04:44:38.043Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "988e3ee1-4349-419b-9e9e-3c7c92fde9ba",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-26T23:05:48.088Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "17e930a5-adf1-43f5-b7f9-acd4d2753dc3",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-24T10:47:54.974Z"),
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

Remove a form

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

Update a form

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
          id: "a023bd75-a25b-4b6d-a556-3eb8da9d1944",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-04-28T01:12:24.140Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "c76d5828-8bb0-426d-af10-78df1f2ee08f",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-01T19:19:06.123Z"),
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
          id: "c8b6c9a9-52d2-4755-9fc9-ecbe8065d515",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-26T04:44:38.043Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "988e3ee1-4349-419b-9e9e-3c7c92fde9ba",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-26T23:05:48.088Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "17e930a5-adf1-43f5-b7f9-acd4d2753dc3",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-24T10:47:54.974Z"),
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
          id: "a023bd75-a25b-4b6d-a556-3eb8da9d1944",
          isActive: true,
          isRequired: true,
          maxLength: 146,
          name: "cornu creta confugo",
          order: 0,
          type: "TEXTAREA",
          updatedAt: new Date("2025-04-28T01:12:24.140Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          id: "c76d5828-8bb0-426d-af10-78df1f2ee08f",
          isActive: true,
          isRequired: false,
          name: "tracto nostrum desidero",
          order: 1,
          type: "TEXTAREA",
          updatedAt: new Date("2024-09-01T19:19:06.123Z"),
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
          id: "c8b6c9a9-52d2-4755-9fc9-ecbe8065d515",
          isActive: true,
          isRequired: false,
          name: "officia supra consequatur",
          order: 2,
          type: "MULTIPLE_SELECT",
          updatedAt: new Date("2024-02-26T04:44:38.043Z"),
        },
        {
          createdAt: new Date("2023-10-05T21:34:29.094Z"),
          description: "Antepono cursim aurum voluptatum placeat audax tripudio amo.",
          id: "988e3ee1-4349-419b-9e9e-3c7c92fde9ba",
          isActive: true,
          isRequired: false,
          name: "curtus fugiat audentia",
          order: 3,
          type: "TEXTAREA",
          updatedAt: new Date("2024-11-26T23:05:48.088Z"),
        },
      ],
      hasMultipleSubmissions: false,
      hasProgressBar: false,
      hasShuffleQuestions: true,
      id: "17e930a5-adf1-43f5-b7f9-acd4d2753dc3",
      isActive: false,
      metadata: [],
      name: "tandem tracto vivo Form",
      publishedUrl: "https://massive-blowgun.info",
      responseCount: 423,
      updatedAt: new Date("2024-08-24T10:47:54.974Z"),
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