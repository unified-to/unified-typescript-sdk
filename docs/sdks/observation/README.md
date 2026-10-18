# Observation

## Overview

### Available Operations

* [createHealthcareObservation](#createhealthcareobservation) - Create an observation
* [getHealthcareObservation](#gethealthcareobservation) - Retrieve an observation
* [listHealthcareObservations](#listhealthcareobservations) - List all observations

## createHealthcareObservation

Create an observation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHealthcareObservation" method="post" path="/healthcare/{connection_id}/observation" example="healthcare_observation" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.observation.createHealthcareObservation({
    healthcareObservation: {
      codes: [
        {
          code: "85354-9",
          display: "Blood pressure panel",
          system: "http://loinc.org",
        },
      ],
      components: [
        {
          codes: [
            {
              code: "8480-6",
              system: "http://loinc.org",
            },
          ],
          name: "Systolic blood pressure",
          valueNumber: 103,
          valueUnit: "mm[Hg]",
        },
        {
          codes: [
            {
              code: "8462-4",
              system: "http://loinc.org",
            },
          ],
          name: "Diastolic blood pressure",
          valueNumber: 60,
          valueUnit: "mm[Hg]",
        },
      ],
      createdAt: new Date("2022-12-06T21:34:04.293Z"),
      id: "ffef0999-e410-4da9-bcd7-e0db42760523",
      interpretation: "CRITICAL_HIGH",
      issuedAt: new Date("2025-05-09T13:26:26.095Z"),
      metadata: [],
      name: "Blood pressure panel",
      observedAt: new Date("2025-01-18T12:36:29.892Z"),
      status: "CORRECTED",
      type: "VITAL_SIGNS",
      updatedAt: new Date("2026-03-21T17:15:35.002Z"),
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
import { healthcareCreateHealthcareObservation } from "@unified-api/typescript-sdk/funcs/healthcareCreateHealthcareObservation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcareCreateHealthcareObservation(unifiedTo, {
    healthcareObservation: {
      codes: [
        {
          code: "85354-9",
          display: "Blood pressure panel",
          system: "http://loinc.org",
        },
      ],
      components: [
        {
          codes: [
            {
              code: "8480-6",
              system: "http://loinc.org",
            },
          ],
          name: "Systolic blood pressure",
          valueNumber: 103,
          valueUnit: "mm[Hg]",
        },
        {
          codes: [
            {
              code: "8462-4",
              system: "http://loinc.org",
            },
          ],
          name: "Diastolic blood pressure",
          valueNumber: 60,
          valueUnit: "mm[Hg]",
        },
      ],
      createdAt: new Date("2022-12-06T21:34:04.293Z"),
      id: "ffef0999-e410-4da9-bcd7-e0db42760523",
      interpretation: "CRITICAL_HIGH",
      issuedAt: new Date("2025-05-09T13:26:26.095Z"),
      metadata: [],
      name: "Blood pressure panel",
      observedAt: new Date("2025-01-18T12:36:29.892Z"),
      status: "CORRECTED",
      type: "VITAL_SIGNS",
      updatedAt: new Date("2026-03-21T17:15:35.002Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcareCreateHealthcareObservation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHealthcareObservationRequest](../../sdk/models/operations/createhealthcareobservationrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HealthcareObservation](../../sdk/models/shared/healthcareobservation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHealthcareObservation

Retrieve an observation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHealthcareObservation" method="get" path="/healthcare/{connection_id}/observation/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.observation.getHealthcareObservation({
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
import { healthcareGetHealthcareObservation } from "@unified-api/typescript-sdk/funcs/healthcareGetHealthcareObservation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcareGetHealthcareObservation(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcareGetHealthcareObservation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHealthcareObservationRequest](../../sdk/models/operations/gethealthcareobservationrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HealthcareObservation](../../sdk/models/shared/healthcareobservation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHealthcareObservations

List all observations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHealthcareObservations" method="get" path="/healthcare/{connection_id}/observation" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.observation.listHealthcareObservations({
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
import { healthcareListHealthcareObservations } from "@unified-api/typescript-sdk/funcs/healthcareListHealthcareObservations.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcareListHealthcareObservations(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcareListHealthcareObservations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHealthcareObservationsRequest](../../sdk/models/operations/listhealthcareobservationsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HealthcareObservation[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |