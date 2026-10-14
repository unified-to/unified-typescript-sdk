# Patient

## Overview

### Available Operations

* [createHealthcarePatient](#createhealthcarepatient) - Create a patient
* [getHealthcarePatient](#gethealthcarepatient) - Retrieve a patient
* [listHealthcarePatients](#listhealthcarepatients) - List all patients
* [patchHealthcarePatient](#patchhealthcarepatient) - Update a patient
* [updateHealthcarePatient](#updatehealthcarepatient) - Update a patient

## createHealthcarePatient

Create a patient

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
        address1: "3645 Zoila Isle",
        address2: "Suite 613",
        city: "Jacintostead",
        country: "US",
        postalCode: "31579",
        region: "Minnesota",
      },
      birthdate: "2025-02-05",
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "alejandrin.parker@yahoo.com",
          type: "HOME",
        },
      ],
      firstName: "Alejandrin",
      gender: "FEMALE",
      id: "352476b0-2fdf-4d7c-9424-15ddfd8b723c",
      identifiers: [
        {
          type: "MRN",
          value: "92636004",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "en",
      lastName: "Parker",
      metadata: [],
      name: "Alejandrin Parker",
      practitionerIds: [],
      telephones: [
        {
          telephone: "659.223.0829 x590",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-06-16T04:00:13.571Z"),
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
        address1: "3645 Zoila Isle",
        address2: "Suite 613",
        city: "Jacintostead",
        country: "US",
        postalCode: "31579",
        region: "Minnesota",
      },
      birthdate: "2025-02-05",
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "alejandrin.parker@yahoo.com",
          type: "HOME",
        },
      ],
      firstName: "Alejandrin",
      gender: "FEMALE",
      id: "352476b0-2fdf-4d7c-9424-15ddfd8b723c",
      identifiers: [
        {
          type: "MRN",
          value: "92636004",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "en",
      lastName: "Parker",
      metadata: [],
      name: "Alejandrin Parker",
      practitionerIds: [],
      telephones: [
        {
          telephone: "659.223.0829 x590",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-06-16T04:00:13.571Z"),
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

Retrieve a patient

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

List all patients

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

Update a patient

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
        address1: "3645 Zoila Isle",
        address2: "Suite 613",
        city: "Jacintostead",
        country: "US",
        postalCode: "31579",
        region: "Minnesota",
      },
      birthdate: "2025-02-05",
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "alejandrin.parker@yahoo.com",
          type: "HOME",
        },
      ],
      firstName: "Alejandrin",
      gender: "FEMALE",
      id: "d7208fcb-11ed-4bb0-a910-0fbe19ebb003",
      identifiers: [
        {
          type: "MRN",
          value: "92636004",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "en",
      lastName: "Parker",
      metadata: [],
      name: "Alejandrin Parker",
      practitionerIds: [],
      telephones: [
        {
          telephone: "659.223.0829 x590",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-06-16T04:00:13.591Z"),
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
        address1: "3645 Zoila Isle",
        address2: "Suite 613",
        city: "Jacintostead",
        country: "US",
        postalCode: "31579",
        region: "Minnesota",
      },
      birthdate: "2025-02-05",
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "alejandrin.parker@yahoo.com",
          type: "HOME",
        },
      ],
      firstName: "Alejandrin",
      gender: "FEMALE",
      id: "d7208fcb-11ed-4bb0-a910-0fbe19ebb003",
      identifiers: [
        {
          type: "MRN",
          value: "92636004",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "en",
      lastName: "Parker",
      metadata: [],
      name: "Alejandrin Parker",
      practitionerIds: [],
      telephones: [
        {
          telephone: "659.223.0829 x590",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-06-16T04:00:13.591Z"),
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

Update a patient

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
        address1: "3645 Zoila Isle",
        address2: "Suite 613",
        city: "Jacintostead",
        country: "US",
        postalCode: "31579",
        region: "Minnesota",
      },
      birthdate: "2025-02-05",
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "alejandrin.parker@yahoo.com",
          type: "HOME",
        },
      ],
      firstName: "Alejandrin",
      gender: "FEMALE",
      id: "d7208fcb-11ed-4bb0-a910-0fbe19ebb003",
      identifiers: [
        {
          type: "MRN",
          value: "92636004",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "en",
      lastName: "Parker",
      metadata: [],
      name: "Alejandrin Parker",
      practitionerIds: [],
      telephones: [
        {
          telephone: "659.223.0829 x590",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-06-16T04:00:13.591Z"),
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
        address1: "3645 Zoila Isle",
        address2: "Suite 613",
        city: "Jacintostead",
        country: "US",
        postalCode: "31579",
        region: "Minnesota",
      },
      birthdate: "2025-02-05",
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "alejandrin.parker@yahoo.com",
          type: "HOME",
        },
      ],
      firstName: "Alejandrin",
      gender: "FEMALE",
      id: "d7208fcb-11ed-4bb0-a910-0fbe19ebb003",
      identifiers: [
        {
          type: "MRN",
          value: "92636004",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "en",
      lastName: "Parker",
      metadata: [],
      name: "Alejandrin Parker",
      practitionerIds: [],
      telephones: [
        {
          telephone: "659.223.0829 x590",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-06-16T04:00:13.591Z"),
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