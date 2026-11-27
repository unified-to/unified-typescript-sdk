# Patient

## Overview

### Available Operations

* [createHealthcarePatient](#createhealthcarepatient) - Create a patient
* [getFhirPatient](#getfhirpatient) - Read a Patient
* [getHealthcarePatient](#gethealthcarepatient) - Retrieve a patient
* [listFhirPatients](#listfhirpatients) - Search Patient resources
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
        address1: "3645 Leonardo Place",
        city: "Estelleland",
        country: "US",
        postalCode: "99263-6004",
        region: "New Jersey",
      },
      birthdate: "1941-12-26",
      contacts: [
        {
          emails: [],
          name: "Ambrose Welch",
          relationship: "Spouse",
          telephones: [
            {
              telephone: "323.524.3947 x89014",
              type: "MOBILE",
            },
          ],
        },
      ],
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "monroe.bauch@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Monroe",
      gender: "FEMALE",
      id: "5eeb982f-913d-43f4-b3c8-c7249440d53a",
      identifiers: [
        {
          type: "MRN",
          value: "51559512",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "zh",
      lastName: "Bauch",
      metadata: [],
      name: "Monroe Bauch",
      practitionerIds: [],
      telephones: [
        {
          telephone: "1-555-902-3082 x9590",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-07-27T13:54:22.606Z"),
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
import { patientCreateHealthcarePatient } from "@unified-api/typescript-sdk/funcs/patientCreateHealthcarePatient.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await patientCreateHealthcarePatient(unifiedTo, {
    healthcarePatient: {
      address: {
        address1: "3645 Leonardo Place",
        city: "Estelleland",
        country: "US",
        postalCode: "99263-6004",
        region: "New Jersey",
      },
      birthdate: "1941-12-26",
      contacts: [
        {
          emails: [],
          name: "Ambrose Welch",
          relationship: "Spouse",
          telephones: [
            {
              telephone: "323.524.3947 x89014",
              type: "MOBILE",
            },
          ],
        },
      ],
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "monroe.bauch@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Monroe",
      gender: "FEMALE",
      id: "5eeb982f-913d-43f4-b3c8-c7249440d53a",
      identifiers: [
        {
          type: "MRN",
          value: "51559512",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "zh",
      lastName: "Bauch",
      metadata: [],
      name: "Monroe Bauch",
      practitionerIds: [],
      telephones: [
        {
          telephone: "1-555-902-3082 x9590",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-07-27T13:54:22.606Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("patientCreateHealthcarePatient failed:", res.error);
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

## getFhirPatient

Responses use the application/fhir+json media type; errors are OperationOutcome resources. Read-only (FHIR R4 4.0.1).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFhirPatient" method="get" path="/fhir/{connection_id}/Patient/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.patient.getFhirPatient({
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
import { fhirGetFhirPatient } from "@unified-api/typescript-sdk/funcs/fhirGetFhirPatient.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await fhirGetFhirPatient(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fhirGetFhirPatient failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFhirPatientRequest](../../sdk/models/operations/getfhirpatientrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.FhirPatient](../../sdk/models/shared/fhirpatient.md)\>**

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
import { patientGetHealthcarePatient } from "@unified-api/typescript-sdk/funcs/patientGetHealthcarePatient.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await patientGetHealthcarePatient(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("patientGetHealthcarePatient failed:", res.error);
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

## listFhirPatients

Returns a searchset Bundle; follow its next link for more pages. Responses use the application/fhir+json media type; errors are OperationOutcome resources. Read-only (FHIR R4 4.0.1).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listFhirPatients" method="get" path="/fhir/{connection_id}/Patient" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.patient.listFhirPatients({
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
import { fhirListFhirPatients } from "@unified-api/typescript-sdk/funcs/fhirListFhirPatients.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await fhirListFhirPatients(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fhirListFhirPatients failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListFhirPatientsRequest](../../sdk/models/operations/listfhirpatientsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.FhirBundle](../../sdk/models/shared/fhirbundle.md)\>**

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
import { patientListHealthcarePatients } from "@unified-api/typescript-sdk/funcs/patientListHealthcarePatients.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await patientListHealthcarePatients(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("patientListHealthcarePatients failed:", res.error);
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
        address1: "3645 Leonardo Place",
        city: "Estelleland",
        country: "US",
        postalCode: "99263-6004",
        region: "New Jersey",
      },
      birthdate: "1941-12-26",
      contacts: [
        {
          emails: [],
          name: "Ambrose Welch",
          relationship: "Spouse",
          telephones: [
            {
              telephone: "323.524.3947 x89014",
              type: "MOBILE",
            },
          ],
        },
      ],
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "monroe.bauch@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Monroe",
      gender: "FEMALE",
      id: "389b7d23-6873-46d9-aa03-f49abfb48c80",
      identifiers: [
        {
          type: "MRN",
          value: "51559512",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "zh",
      lastName: "Bauch",
      metadata: [],
      name: "Monroe Bauch",
      practitionerIds: [],
      telephones: [
        {
          telephone: "1-555-902-3082 x9590",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-07-27T13:54:22.633Z"),
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
import { patientPatchHealthcarePatient } from "@unified-api/typescript-sdk/funcs/patientPatchHealthcarePatient.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await patientPatchHealthcarePatient(unifiedTo, {
    healthcarePatient: {
      address: {
        address1: "3645 Leonardo Place",
        city: "Estelleland",
        country: "US",
        postalCode: "99263-6004",
        region: "New Jersey",
      },
      birthdate: "1941-12-26",
      contacts: [
        {
          emails: [],
          name: "Ambrose Welch",
          relationship: "Spouse",
          telephones: [
            {
              telephone: "323.524.3947 x89014",
              type: "MOBILE",
            },
          ],
        },
      ],
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "monroe.bauch@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Monroe",
      gender: "FEMALE",
      id: "389b7d23-6873-46d9-aa03-f49abfb48c80",
      identifiers: [
        {
          type: "MRN",
          value: "51559512",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "zh",
      lastName: "Bauch",
      metadata: [],
      name: "Monroe Bauch",
      practitionerIds: [],
      telephones: [
        {
          telephone: "1-555-902-3082 x9590",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-07-27T13:54:22.633Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("patientPatchHealthcarePatient failed:", res.error);
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
        address1: "3645 Leonardo Place",
        city: "Estelleland",
        country: "US",
        postalCode: "99263-6004",
        region: "New Jersey",
      },
      birthdate: "1941-12-26",
      contacts: [
        {
          emails: [],
          name: "Ambrose Welch",
          relationship: "Spouse",
          telephones: [
            {
              telephone: "323.524.3947 x89014",
              type: "MOBILE",
            },
          ],
        },
      ],
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "monroe.bauch@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Monroe",
      gender: "FEMALE",
      id: "389b7d23-6873-46d9-aa03-f49abfb48c80",
      identifiers: [
        {
          type: "MRN",
          value: "51559512",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "zh",
      lastName: "Bauch",
      metadata: [],
      name: "Monroe Bauch",
      practitionerIds: [],
      telephones: [
        {
          telephone: "1-555-902-3082 x9590",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-07-27T13:54:22.633Z"),
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
import { patientUpdateHealthcarePatient } from "@unified-api/typescript-sdk/funcs/patientUpdateHealthcarePatient.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await patientUpdateHealthcarePatient(unifiedTo, {
    healthcarePatient: {
      address: {
        address1: "3645 Leonardo Place",
        city: "Estelleland",
        country: "US",
        postalCode: "99263-6004",
        region: "New Jersey",
      },
      birthdate: "1941-12-26",
      contacts: [
        {
          emails: [],
          name: "Ambrose Welch",
          relationship: "Spouse",
          telephones: [
            {
              telephone: "323.524.3947 x89014",
              type: "MOBILE",
            },
          ],
        },
      ],
      createdAt: new Date("2021-06-05T21:08:04.917Z"),
      emails: [
        {
          email: "monroe.bauch@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Monroe",
      gender: "FEMALE",
      id: "389b7d23-6873-46d9-aa03-f49abfb48c80",
      identifiers: [
        {
          type: "MRN",
          value: "51559512",
        },
      ],
      isActive: true,
      isDeceased: false,
      language: "zh",
      lastName: "Bauch",
      metadata: [],
      name: "Monroe Bauch",
      practitionerIds: [],
      telephones: [
        {
          telephone: "1-555-902-3082 x9590",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2026-07-27T13:54:22.633Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("patientUpdateHealthcarePatient failed:", res.error);
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