# Patient

## Overview

### Available Operations

* [createHealthcarePatient](#createhealthcarepatient) - Create a patient
* [getHealthcarePatient](#gethealthcarepatient) - Retrieve a patient
* [listHealthcarePatients](#listhealthcarepatients) - List all patients
* [patchHealthcarePatient](#patchhealthcarepatient) - Update a patient
* [updateHealthcarePatient](#updatehealthcarepatient) - Update a patient

## createHealthcarePatient

Creates a HealthcarePatient. Provide the unified HealthcarePatient fields in the request body; they are mapped to the provider's API. Returns the created HealthcarePatient.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHealthcarePatient" method="post" path="/healthcare/{connection_id}/patient" example="healthcare_patient" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.patient.createHealthcarePatient({
    healthcarePatient: {
      address: {
        address1: "162 Kirlin Mall",
        city: "Dickinsonborough",
        country: "US",
        postalCode: "54031",
        region: "Nebraska",
      },
      birthdate: "2025-02-22",
      contacts: [
        {
          emails: [],
          name: "Antonia Lebsack",
          relationship: "Spouse",
          telephones: [
            {
              telephone: "(695) 328-7029 x4412",
              type: "MOBILE",
            },
          ],
        },
      ],
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "alejandrin.parker@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Alejandrin",
      gender: "FEMALE",
      id: "a5035905-02ca-4c66-97bd-b8bd40abd236",
      identifiers: [
        {
          type: "MRN",
          value: "57992636",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "zh",
      lastName: "Parker",
      metadata: [],
      name: "Alejandrin Parker",
      practitionerIds: [],
      telephones: [
        {
          telephone: "1-219-555-9023 x08295",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-07-02T03:19:50.393Z"),
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
import { healthcareCreateHealthcarePatient } from "@unified-api/typescript-sdk/funcs/healthcareCreateHealthcarePatient.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcareCreateHealthcarePatient(unifiedTo, {
    healthcarePatient: {
      address: {
        address1: "162 Kirlin Mall",
        city: "Dickinsonborough",
        country: "US",
        postalCode: "54031",
        region: "Nebraska",
      },
      birthdate: "2025-02-22",
      contacts: [
        {
          emails: [],
          name: "Antonia Lebsack",
          relationship: "Spouse",
          telephones: [
            {
              telephone: "(695) 328-7029 x4412",
              type: "MOBILE",
            },
          ],
        },
      ],
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "alejandrin.parker@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Alejandrin",
      gender: "FEMALE",
      id: "a5035905-02ca-4c66-97bd-b8bd40abd236",
      identifiers: [
        {
          type: "MRN",
          value: "57992636",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "zh",
      lastName: "Parker",
      metadata: [],
      name: "Alejandrin Parker",
      practitionerIds: [],
      telephones: [
        {
          telephone: "1-219-555-9023 x08295",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-07-02T03:19:50.393Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcareCreateHealthcarePatient failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHealthcarePatientRequest](../../sdk/models/operations/createhealthcarepatientrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HealthcarePatient](../../sdk/models/shared/healthcarepatient.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHealthcarePatient

Retrieves a single HealthcarePatient by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHealthcarePatient" method="get" path="/healthcare/{connection_id}/patient/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.patient.getHealthcarePatient({
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
import { healthcareGetHealthcarePatient } from "@unified-api/typescript-sdk/funcs/healthcareGetHealthcarePatient.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcareGetHealthcarePatient(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcareGetHealthcarePatient failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHealthcarePatientRequest](../../sdk/models/operations/gethealthcarepatientrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HealthcarePatient](../../sdk/models/shared/healthcarepatient.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHealthcarePatients

Returns a list of HealthcarePatients. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHealthcarePatients" method="get" path="/healthcare/{connection_id}/patient" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.patient.listHealthcarePatients({
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
import { healthcareListHealthcarePatients } from "@unified-api/typescript-sdk/funcs/healthcareListHealthcarePatients.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcareListHealthcarePatients(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcareListHealthcarePatients failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHealthcarePatientsRequest](../../sdk/models/operations/listhealthcarepatientsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HealthcarePatient[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHealthcarePatient

Updates the HealthcarePatient identified by `id`. Provide the unified HealthcarePatient fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHealthcarePatient" method="patch" path="/healthcare/{connection_id}/patient/{id}" example="healthcare_patient" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.patient.patchHealthcarePatient({
    healthcarePatient: {
      address: {
        address1: "162 Kirlin Mall",
        city: "Dickinsonborough",
        country: "US",
        postalCode: "54031",
        region: "Nebraska",
      },
      birthdate: "2025-02-22",
      contacts: [
        {
          emails: [],
          name: "Antonia Lebsack",
          relationship: "Spouse",
          telephones: [
            {
              telephone: "(695) 328-7029 x4412",
              type: "MOBILE",
            },
          ],
        },
      ],
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "alejandrin.parker@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Alejandrin",
      gender: "FEMALE",
      id: "34fb3fed-04d4-4943-adbd-ed3e8e414ce8",
      identifiers: [
        {
          type: "MRN",
          value: "57992636",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "zh",
      lastName: "Parker",
      metadata: [],
      name: "Alejandrin Parker",
      practitionerIds: [],
      telephones: [
        {
          telephone: "1-219-555-9023 x08295",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-07-02T03:19:50.437Z"),
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
import { healthcarePatchHealthcarePatient } from "@unified-api/typescript-sdk/funcs/healthcarePatchHealthcarePatient.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcarePatchHealthcarePatient(unifiedTo, {
    healthcarePatient: {
      address: {
        address1: "162 Kirlin Mall",
        city: "Dickinsonborough",
        country: "US",
        postalCode: "54031",
        region: "Nebraska",
      },
      birthdate: "2025-02-22",
      contacts: [
        {
          emails: [],
          name: "Antonia Lebsack",
          relationship: "Spouse",
          telephones: [
            {
              telephone: "(695) 328-7029 x4412",
              type: "MOBILE",
            },
          ],
        },
      ],
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "alejandrin.parker@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Alejandrin",
      gender: "FEMALE",
      id: "34fb3fed-04d4-4943-adbd-ed3e8e414ce8",
      identifiers: [
        {
          type: "MRN",
          value: "57992636",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "zh",
      lastName: "Parker",
      metadata: [],
      name: "Alejandrin Parker",
      practitionerIds: [],
      telephones: [
        {
          telephone: "1-219-555-9023 x08295",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-07-02T03:19:50.437Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcarePatchHealthcarePatient failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHealthcarePatientRequest](../../sdk/models/operations/patchhealthcarepatientrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HealthcarePatient](../../sdk/models/shared/healthcarepatient.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHealthcarePatient

Updates the HealthcarePatient identified by `id`. Provide the unified HealthcarePatient fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHealthcarePatient" method="put" path="/healthcare/{connection_id}/patient/{id}" example="healthcare_patient" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.patient.updateHealthcarePatient({
    healthcarePatient: {
      address: {
        address1: "162 Kirlin Mall",
        city: "Dickinsonborough",
        country: "US",
        postalCode: "54031",
        region: "Nebraska",
      },
      birthdate: "2025-02-22",
      contacts: [
        {
          emails: [],
          name: "Antonia Lebsack",
          relationship: "Spouse",
          telephones: [
            {
              telephone: "(695) 328-7029 x4412",
              type: "MOBILE",
            },
          ],
        },
      ],
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "alejandrin.parker@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Alejandrin",
      gender: "FEMALE",
      id: "34fb3fed-04d4-4943-adbd-ed3e8e414ce8",
      identifiers: [
        {
          type: "MRN",
          value: "57992636",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "zh",
      lastName: "Parker",
      metadata: [],
      name: "Alejandrin Parker",
      practitionerIds: [],
      telephones: [
        {
          telephone: "1-219-555-9023 x08295",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-07-02T03:19:50.437Z"),
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
import { healthcareUpdateHealthcarePatient } from "@unified-api/typescript-sdk/funcs/healthcareUpdateHealthcarePatient.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcareUpdateHealthcarePatient(unifiedTo, {
    healthcarePatient: {
      address: {
        address1: "162 Kirlin Mall",
        city: "Dickinsonborough",
        country: "US",
        postalCode: "54031",
        region: "Nebraska",
      },
      birthdate: "2025-02-22",
      contacts: [
        {
          emails: [],
          name: "Antonia Lebsack",
          relationship: "Spouse",
          telephones: [
            {
              telephone: "(695) 328-7029 x4412",
              type: "MOBILE",
            },
          ],
        },
      ],
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "alejandrin.parker@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Alejandrin",
      gender: "FEMALE",
      id: "34fb3fed-04d4-4943-adbd-ed3e8e414ce8",
      identifiers: [
        {
          type: "MRN",
          value: "57992636",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "zh",
      lastName: "Parker",
      metadata: [],
      name: "Alejandrin Parker",
      practitionerIds: [],
      telephones: [
        {
          telephone: "1-219-555-9023 x08295",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-07-02T03:19:50.437Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcareUpdateHealthcarePatient failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHealthcarePatientRequest](../../sdk/models/operations/updatehealthcarepatientrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HealthcarePatient](../../sdk/models/shared/healthcarepatient.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |