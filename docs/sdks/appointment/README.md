# Appointment

## Overview

### Available Operations

* [createDmsAppointment](#createdmsappointment) - Create an appointment
* [createHealthcareAppointment](#createhealthcareappointment) - Create an appointment
* [getDmsAppointment](#getdmsappointment) - Retrieve an appointment
* [getHealthcareAppointment](#gethealthcareappointment) - Retrieve an appointment
* [listDmsAppointments](#listdmsappointments) - List all appointments
* [listHealthcareAppointments](#listhealthcareappointments) - List all appointments
* [patchDmsAppointment](#patchdmsappointment) - Update an appointment
* [patchHealthcareAppointment](#patchhealthcareappointment) - Update an appointment
* [removeDmsAppointment](#removedmsappointment) - Remove an appointment
* [removeHealthcareAppointment](#removehealthcareappointment) - Remove an appointment
* [updateDmsAppointment](#updatedmsappointment) - Update an appointment
* [updateHealthcareAppointment](#updatehealthcareappointment) - Update an appointment

## createDmsAppointment

Creates a DmsAppointment. Provide the unified DmsAppointment fields in the request body; they are mapped to the provider's API. Returns the created DmsAppointment.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDmsAppointment" method="post" path="/dms/{connection_id}/appointment" example="dms_appointment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.appointment.createDmsAppointment({
    dmsAppointment: {
      createdAt: new Date("2023-10-16T02:56:45.127Z"),
      endAt: new Date("2026-05-07T06:55:41.387Z"),
      id: "436423e6-a365-4aed-8ab3-f878193fe4f8",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "4111ef6b-0497-43c2-9165-e7093517581a",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "2f331f79-4a2d-45c5-9af9-6f123ec18318",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "11e408c0-db0f-4598-81c8-ca5cc147e5c9",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-06T23:55:41.387Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T05:08:01.966Z"),
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
import { dmsCreateDmsAppointment } from "@unified-api/typescript-sdk/funcs/dmsCreateDmsAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsCreateDmsAppointment(unifiedTo, {
    dmsAppointment: {
      createdAt: new Date("2023-10-16T02:56:45.127Z"),
      endAt: new Date("2026-05-07T06:55:41.387Z"),
      id: "436423e6-a365-4aed-8ab3-f878193fe4f8",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "4111ef6b-0497-43c2-9165-e7093517581a",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "2f331f79-4a2d-45c5-9af9-6f123ec18318",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "11e408c0-db0f-4598-81c8-ca5cc147e5c9",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-06T23:55:41.387Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T05:08:01.966Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsCreateDmsAppointment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDmsAppointmentRequest](../../sdk/models/operations/createdmsappointmentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsAppointment](../../sdk/models/shared/dmsappointment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createHealthcareAppointment

Creates a HealthcareAppointment. Provide the unified HealthcareAppointment fields in the request body; they are mapped to the provider's API. Returns the created HealthcareAppointment.

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
      description: "cubicularis caput viriliter",
      endAt: new Date("2023-12-12T13:04:41.451Z"),
      id: "d3dd5a49-2e07-4c4d-927e-808d30689a3f",
      isVirtual: true,
      meetingUrl: "https://cautious-cannon.com/",
      metadata: [],
      notes: "Casus anser ver alo beatus.",
      practitionerIds: [],
      serviceTypes: [
        {
          code: "12762740",
          display: "New patient visit",
          system: "http://snomed.info/sct",
        },
      ],
      slotIds: [],
      startAt: new Date("2023-12-12T12:34:41.451Z"),
      status: "BOOKED",
      updatedAt: new Date("2026-10-27T10:36:52.592Z"),
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
import { appointmentCreateHealthcareAppointment } from "@unified-api/typescript-sdk/funcs/appointmentCreateHealthcareAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await appointmentCreateHealthcareAppointment(unifiedTo, {
    healthcareAppointment: {
      createdAt: new Date("2023-04-11T08:16:20.874Z"),
      description: "cubicularis caput viriliter",
      endAt: new Date("2023-12-12T13:04:41.451Z"),
      id: "d3dd5a49-2e07-4c4d-927e-808d30689a3f",
      isVirtual: true,
      meetingUrl: "https://cautious-cannon.com/",
      metadata: [],
      notes: "Casus anser ver alo beatus.",
      practitionerIds: [],
      serviceTypes: [
        {
          code: "12762740",
          display: "New patient visit",
          system: "http://snomed.info/sct",
        },
      ],
      slotIds: [],
      startAt: new Date("2023-12-12T12:34:41.451Z"),
      status: "BOOKED",
      updatedAt: new Date("2026-10-27T10:36:52.592Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appointmentCreateHealthcareAppointment failed:", res.error);
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

## getDmsAppointment

Retrieves a single DmsAppointment by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDmsAppointment" method="get" path="/dms/{connection_id}/appointment/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.appointment.getDmsAppointment({
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
import { dmsGetDmsAppointment } from "@unified-api/typescript-sdk/funcs/dmsGetDmsAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsGetDmsAppointment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsGetDmsAppointment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDmsAppointmentRequest](../../sdk/models/operations/getdmsappointmentrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsAppointment](../../sdk/models/shared/dmsappointment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHealthcareAppointment

Retrieves a single HealthcareAppointment by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

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
import { appointmentGetHealthcareAppointment } from "@unified-api/typescript-sdk/funcs/appointmentGetHealthcareAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await appointmentGetHealthcareAppointment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appointmentGetHealthcareAppointment failed:", res.error);
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

## listDmsAppointments

Returns a list of DmsAppointments. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listDmsAppointments" method="get" path="/dms/{connection_id}/appointment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.appointment.listDmsAppointments({
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
import { dmsListDmsAppointments } from "@unified-api/typescript-sdk/funcs/dmsListDmsAppointments.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsListDmsAppointments(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsListDmsAppointments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDmsAppointmentsRequest](../../sdk/models/operations/listdmsappointmentsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsAppointment[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHealthcareAppointments

Returns a list of HealthcareAppointments. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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
import { appointmentListHealthcareAppointments } from "@unified-api/typescript-sdk/funcs/appointmentListHealthcareAppointments.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await appointmentListHealthcareAppointments(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appointmentListHealthcareAppointments failed:", res.error);
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

## patchDmsAppointment

Updates the DmsAppointment identified by `id`. Provide the unified DmsAppointment fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchDmsAppointment" method="patch" path="/dms/{connection_id}/appointment/{id}" example="dms_appointment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.appointment.patchDmsAppointment({
    dmsAppointment: {
      createdAt: new Date("2023-10-16T02:56:45.127Z"),
      endAt: new Date("2026-05-07T06:55:41.411Z"),
      id: "1cfce952-83ed-4e23-8b27-ca6fc8bcbc6f",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "ccd14e94-f4b8-428a-9a58-d472b98edcf8",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "6ac9e263-f85a-4d37-9b50-952a7f7cd7f1",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "e1493f7e-fcb1-47e5-a4e5-e5d93d7c7675",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-06T23:55:41.411Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T05:08:01.980Z"),
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
import { dmsPatchDmsAppointment } from "@unified-api/typescript-sdk/funcs/dmsPatchDmsAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsPatchDmsAppointment(unifiedTo, {
    dmsAppointment: {
      createdAt: new Date("2023-10-16T02:56:45.127Z"),
      endAt: new Date("2026-05-07T06:55:41.411Z"),
      id: "1cfce952-83ed-4e23-8b27-ca6fc8bcbc6f",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "ccd14e94-f4b8-428a-9a58-d472b98edcf8",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "6ac9e263-f85a-4d37-9b50-952a7f7cd7f1",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "e1493f7e-fcb1-47e5-a4e5-e5d93d7c7675",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-06T23:55:41.411Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T05:08:01.980Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsPatchDmsAppointment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchDmsAppointmentRequest](../../sdk/models/operations/patchdmsappointmentrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsAppointment](../../sdk/models/shared/dmsappointment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHealthcareAppointment

Updates the HealthcareAppointment identified by `id`. Provide the unified HealthcareAppointment fields to change in the request body.

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
      description: "cubicularis caput viriliter",
      endAt: new Date("2023-12-12T13:04:41.451Z"),
      id: "f5e85ae2-9271-40b9-b758-6b647d7b4312",
      isVirtual: true,
      meetingUrl: "https://cautious-cannon.com/",
      metadata: [],
      notes: "Casus anser ver alo beatus.",
      practitionerIds: [],
      serviceTypes: [
        {
          code: "12762740",
          display: "New patient visit",
          system: "http://snomed.info/sct",
        },
      ],
      slotIds: [],
      startAt: new Date("2023-12-12T12:34:41.451Z"),
      status: "BOOKED",
      updatedAt: new Date("2026-10-27T10:36:52.618Z"),
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
import { appointmentPatchHealthcareAppointment } from "@unified-api/typescript-sdk/funcs/appointmentPatchHealthcareAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await appointmentPatchHealthcareAppointment(unifiedTo, {
    healthcareAppointment: {
      createdAt: new Date("2023-04-11T08:16:20.874Z"),
      description: "cubicularis caput viriliter",
      endAt: new Date("2023-12-12T13:04:41.451Z"),
      id: "f5e85ae2-9271-40b9-b758-6b647d7b4312",
      isVirtual: true,
      meetingUrl: "https://cautious-cannon.com/",
      metadata: [],
      notes: "Casus anser ver alo beatus.",
      practitionerIds: [],
      serviceTypes: [
        {
          code: "12762740",
          display: "New patient visit",
          system: "http://snomed.info/sct",
        },
      ],
      slotIds: [],
      startAt: new Date("2023-12-12T12:34:41.451Z"),
      status: "BOOKED",
      updatedAt: new Date("2026-10-27T10:36:52.618Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appointmentPatchHealthcareAppointment failed:", res.error);
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

## removeDmsAppointment

Deletes the DmsAppointment identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeDmsAppointment" method="delete" path="/dms/{connection_id}/appointment/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.appointment.removeDmsAppointment({
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
import { dmsRemoveDmsAppointment } from "@unified-api/typescript-sdk/funcs/dmsRemoveDmsAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsRemoveDmsAppointment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsRemoveDmsAppointment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveDmsAppointmentRequest](../../sdk/models/operations/removedmsappointmentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveDmsAppointmentResponse](../../sdk/models/operations/removedmsappointmentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeHealthcareAppointment

Deletes the HealthcareAppointment identified by `id`.

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
import { appointmentRemoveHealthcareAppointment } from "@unified-api/typescript-sdk/funcs/appointmentRemoveHealthcareAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await appointmentRemoveHealthcareAppointment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appointmentRemoveHealthcareAppointment failed:", res.error);
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

## updateDmsAppointment

Updates the DmsAppointment identified by `id`. Provide the unified DmsAppointment fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDmsAppointment" method="put" path="/dms/{connection_id}/appointment/{id}" example="dms_appointment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.appointment.updateDmsAppointment({
    dmsAppointment: {
      createdAt: new Date("2023-10-16T02:56:45.127Z"),
      endAt: new Date("2026-05-07T06:55:41.411Z"),
      id: "1cfce952-83ed-4e23-8b27-ca6fc8bcbc6f",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "ccd14e94-f4b8-428a-9a58-d472b98edcf8",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "6ac9e263-f85a-4d37-9b50-952a7f7cd7f1",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "e1493f7e-fcb1-47e5-a4e5-e5d93d7c7675",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-06T23:55:41.411Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T05:08:01.980Z"),
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
import { dmsUpdateDmsAppointment } from "@unified-api/typescript-sdk/funcs/dmsUpdateDmsAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsUpdateDmsAppointment(unifiedTo, {
    dmsAppointment: {
      createdAt: new Date("2023-10-16T02:56:45.127Z"),
      endAt: new Date("2026-05-07T06:55:41.411Z"),
      id: "1cfce952-83ed-4e23-8b27-ca6fc8bcbc6f",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "ccd14e94-f4b8-428a-9a58-d472b98edcf8",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "6ac9e263-f85a-4d37-9b50-952a7f7cd7f1",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "e1493f7e-fcb1-47e5-a4e5-e5d93d7c7675",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-06T23:55:41.411Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T05:08:01.980Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsUpdateDmsAppointment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDmsAppointmentRequest](../../sdk/models/operations/updatedmsappointmentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsAppointment](../../sdk/models/shared/dmsappointment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHealthcareAppointment

Updates the HealthcareAppointment identified by `id`. Provide the unified HealthcareAppointment fields to change in the request body.

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
      description: "cubicularis caput viriliter",
      endAt: new Date("2023-12-12T13:04:41.451Z"),
      id: "f5e85ae2-9271-40b9-b758-6b647d7b4312",
      isVirtual: true,
      meetingUrl: "https://cautious-cannon.com/",
      metadata: [],
      notes: "Casus anser ver alo beatus.",
      practitionerIds: [],
      serviceTypes: [
        {
          code: "12762740",
          display: "New patient visit",
          system: "http://snomed.info/sct",
        },
      ],
      slotIds: [],
      startAt: new Date("2023-12-12T12:34:41.451Z"),
      status: "BOOKED",
      updatedAt: new Date("2026-10-27T10:36:52.618Z"),
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
import { appointmentUpdateHealthcareAppointment } from "@unified-api/typescript-sdk/funcs/appointmentUpdateHealthcareAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await appointmentUpdateHealthcareAppointment(unifiedTo, {
    healthcareAppointment: {
      createdAt: new Date("2023-04-11T08:16:20.874Z"),
      description: "cubicularis caput viriliter",
      endAt: new Date("2023-12-12T13:04:41.451Z"),
      id: "f5e85ae2-9271-40b9-b758-6b647d7b4312",
      isVirtual: true,
      meetingUrl: "https://cautious-cannon.com/",
      metadata: [],
      notes: "Casus anser ver alo beatus.",
      practitionerIds: [],
      serviceTypes: [
        {
          code: "12762740",
          display: "New patient visit",
          system: "http://snomed.info/sct",
        },
      ],
      slotIds: [],
      startAt: new Date("2023-12-12T12:34:41.451Z"),
      status: "BOOKED",
      updatedAt: new Date("2026-10-27T10:36:52.618Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appointmentUpdateHealthcareAppointment failed:", res.error);
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