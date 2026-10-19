# Appointment

## Overview

### Available Operations

* [createHealthcareAppointment](#createhealthcareappointment) - Create an appointment
* [getHealthcareAppointment](#gethealthcareappointment) - Retrieve an appointment
* [listHealthcareAppointments](#listhealthcareappointments) - List all appointments
* [patchHealthcareAppointment](#patchhealthcareappointment) - Update an appointment
* [removeHealthcareAppointment](#removehealthcareappointment) - Remove an appointment
* [updateHealthcareAppointment](#updatehealthcareappointment) - Update an appointment

## createHealthcareAppointment

Create an appointment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHealthcareAppointment" method="post" path="/healthcare/{connection_id}/appointment" example="healthcare_appointment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.appointment.createHealthcareAppointment({
    healthcareAppointment: {
      createdAt: new Date("2023-04-11T08:16:20.874Z"),
      description: "clarus aptus cetera",
      endAt: new Date("2023-12-12T13:04:41.451Z"),
      id: "351bcf60-cff8-4081-bac6-7ba6f4dcca2b",
      metadata: [],
      practitionerIds: [],
      reasons: [
        {
          code: "12762740",
          display: "cubicularis caput",
          system: "http://snomed.info/sct",
        },
      ],
      serviceTypes: [
        {
          code: "61128108",
          display: "Annual physical",
          system: "http://snomed.info/sct",
        },
      ],
      slotIds: [],
      startAt: new Date("2023-12-12T12:34:41.451Z"),
      status: "BOOKED",
      updatedAt: new Date("2025-11-17T20:59:23.229Z"),
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
import { healthcareCreateHealthcareAppointment } from "@unified-api/typescript-sdk/funcs/healthcareCreateHealthcareAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcareCreateHealthcareAppointment(unifiedTo, {
    healthcareAppointment: {
      createdAt: new Date("2023-04-11T08:16:20.874Z"),
      description: "clarus aptus cetera",
      endAt: new Date("2023-12-12T13:04:41.451Z"),
      id: "351bcf60-cff8-4081-bac6-7ba6f4dcca2b",
      metadata: [],
      practitionerIds: [],
      reasons: [
        {
          code: "12762740",
          display: "cubicularis caput",
          system: "http://snomed.info/sct",
        },
      ],
      serviceTypes: [
        {
          code: "61128108",
          display: "Annual physical",
          system: "http://snomed.info/sct",
        },
      ],
      slotIds: [],
      startAt: new Date("2023-12-12T12:34:41.451Z"),
      status: "BOOKED",
      updatedAt: new Date("2025-11-17T20:59:23.229Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcareCreateHealthcareAppointment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHealthcareAppointmentRequest](../../sdk/models/operations/createhealthcareappointmentrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HealthcareAppointment](../../sdk/models/shared/healthcareappointment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHealthcareAppointment

Retrieve an appointment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHealthcareAppointment" method="get" path="/healthcare/{connection_id}/appointment/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.appointment.getHealthcareAppointment({
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
import { healthcareGetHealthcareAppointment } from "@unified-api/typescript-sdk/funcs/healthcareGetHealthcareAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcareGetHealthcareAppointment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcareGetHealthcareAppointment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHealthcareAppointmentRequest](../../sdk/models/operations/gethealthcareappointmentrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HealthcareAppointment](../../sdk/models/shared/healthcareappointment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHealthcareAppointments

List all appointments

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHealthcareAppointments" method="get" path="/healthcare/{connection_id}/appointment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.appointment.listHealthcareAppointments({
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
import { healthcareListHealthcareAppointments } from "@unified-api/typescript-sdk/funcs/healthcareListHealthcareAppointments.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcareListHealthcareAppointments(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcareListHealthcareAppointments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHealthcareAppointmentsRequest](../../sdk/models/operations/listhealthcareappointmentsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HealthcareAppointment[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHealthcareAppointment

Update an appointment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHealthcareAppointment" method="patch" path="/healthcare/{connection_id}/appointment/{id}" example="healthcare_appointment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.appointment.patchHealthcareAppointment({
    healthcareAppointment: {
      createdAt: new Date("2023-04-11T08:16:20.874Z"),
      description: "clarus aptus cetera",
      endAt: new Date("2023-12-12T13:04:41.451Z"),
      id: "0802e0cb-4d18-4644-9298-27996e0056ee",
      metadata: [],
      practitionerIds: [],
      reasons: [
        {
          code: "12762740",
          display: "cubicularis caput",
          system: "http://snomed.info/sct",
        },
      ],
      serviceTypes: [
        {
          code: "61128108",
          display: "Annual physical",
          system: "http://snomed.info/sct",
        },
      ],
      slotIds: [],
      startAt: new Date("2023-12-12T12:34:41.451Z"),
      status: "BOOKED",
      updatedAt: new Date("2025-11-17T20:59:23.239Z"),
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
import { healthcarePatchHealthcareAppointment } from "@unified-api/typescript-sdk/funcs/healthcarePatchHealthcareAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcarePatchHealthcareAppointment(unifiedTo, {
    healthcareAppointment: {
      createdAt: new Date("2023-04-11T08:16:20.874Z"),
      description: "clarus aptus cetera",
      endAt: new Date("2023-12-12T13:04:41.451Z"),
      id: "0802e0cb-4d18-4644-9298-27996e0056ee",
      metadata: [],
      practitionerIds: [],
      reasons: [
        {
          code: "12762740",
          display: "cubicularis caput",
          system: "http://snomed.info/sct",
        },
      ],
      serviceTypes: [
        {
          code: "61128108",
          display: "Annual physical",
          system: "http://snomed.info/sct",
        },
      ],
      slotIds: [],
      startAt: new Date("2023-12-12T12:34:41.451Z"),
      status: "BOOKED",
      updatedAt: new Date("2025-11-17T20:59:23.239Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcarePatchHealthcareAppointment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHealthcareAppointmentRequest](../../sdk/models/operations/patchhealthcareappointmentrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HealthcareAppointment](../../sdk/models/shared/healthcareappointment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeHealthcareAppointment

Remove an appointment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHealthcareAppointment" method="delete" path="/healthcare/{connection_id}/appointment/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.appointment.removeHealthcareAppointment({
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
import { healthcareRemoveHealthcareAppointment } from "@unified-api/typescript-sdk/funcs/healthcareRemoveHealthcareAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcareRemoveHealthcareAppointment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcareRemoveHealthcareAppointment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHealthcareAppointmentRequest](../../sdk/models/operations/removehealthcareappointmentrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHealthcareAppointmentResponse](../../sdk/models/operations/removehealthcareappointmentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHealthcareAppointment

Update an appointment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHealthcareAppointment" method="put" path="/healthcare/{connection_id}/appointment/{id}" example="healthcare_appointment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.appointment.updateHealthcareAppointment({
    healthcareAppointment: {
      createdAt: new Date("2023-04-11T08:16:20.874Z"),
      description: "clarus aptus cetera",
      endAt: new Date("2023-12-12T13:04:41.451Z"),
      id: "0802e0cb-4d18-4644-9298-27996e0056ee",
      metadata: [],
      practitionerIds: [],
      reasons: [
        {
          code: "12762740",
          display: "cubicularis caput",
          system: "http://snomed.info/sct",
        },
      ],
      serviceTypes: [
        {
          code: "61128108",
          display: "Annual physical",
          system: "http://snomed.info/sct",
        },
      ],
      slotIds: [],
      startAt: new Date("2023-12-12T12:34:41.451Z"),
      status: "BOOKED",
      updatedAt: new Date("2025-11-17T20:59:23.239Z"),
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
import { healthcareUpdateHealthcareAppointment } from "@unified-api/typescript-sdk/funcs/healthcareUpdateHealthcareAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcareUpdateHealthcareAppointment(unifiedTo, {
    healthcareAppointment: {
      createdAt: new Date("2023-04-11T08:16:20.874Z"),
      description: "clarus aptus cetera",
      endAt: new Date("2023-12-12T13:04:41.451Z"),
      id: "0802e0cb-4d18-4644-9298-27996e0056ee",
      metadata: [],
      practitionerIds: [],
      reasons: [
        {
          code: "12762740",
          display: "cubicularis caput",
          system: "http://snomed.info/sct",
        },
      ],
      serviceTypes: [
        {
          code: "61128108",
          display: "Annual physical",
          system: "http://snomed.info/sct",
        },
      ],
      slotIds: [],
      startAt: new Date("2023-12-12T12:34:41.451Z"),
      status: "BOOKED",
      updatedAt: new Date("2025-11-17T20:59:23.239Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcareUpdateHealthcareAppointment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHealthcareAppointmentRequest](../../sdk/models/operations/updatehealthcareappointmentrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HealthcareAppointment](../../sdk/models/shared/healthcareappointment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |