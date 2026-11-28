# Attendance

## Overview

### Available Operations

* [createHrisAttendance](#createhrisattendance) - Create an attendance
* [getHrisAttendance](#gethrisattendance) - Retrieve an attendance
* [listHrisAttendances](#listhrisattendances) - List all attendances
* [patchHrisAttendance](#patchhrisattendance) - Update an attendance
* [removeHrisAttendance](#removehrisattendance) - Remove an attendance
* [updateHrisAttendance](#updatehrisattendance) - Update an attendance

## createHrisAttendance

Creates a HrisAttendance. Provide the unified HrisAttendance fields in the request body; they are mapped to the provider's API. Returns the created HrisAttendance.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisAttendance" method="post" path="/hris/{connection_id}/attendance" example="hris_attendance" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.attendance.createHrisAttendance({
    hrisAttendance: {
      address: {
        address1: "18002 Elm Street",
        city: "Port Gaetano",
        countryCode: "US",
        postalCode: "42344",
        region: "Vermont",
        regionCode: "MI",
      },
      approvedAt: new Date("2021-09-20T09:13:55.287Z"),
      breaks: [
        {
          durationMinutes: 51,
          endAt: new Date("2024-03-03T22:36:12.717Z"),
          id: "beabe61e-8d44-4584-a5da-2df1fd7e60c0",
          isPaid: false,
          name: "Lunch",
          startAt: new Date("2023-11-15T04:38:44.443Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "EUR",
      declaredTipsAmount: 54,
      employeeUserId: "<id>",
      endAt: new Date("2024-05-13T02:12:45.435Z"),
      hourlyRate: 16,
      hours: 10,
      id: "76664e05-36ad-4920-8f34-18432010ff75",
      jobName: "Human Accountability Administrator",
      metadata: [],
      nonCashTipsAmount: 167,
      startAt: new Date("2021-11-12T21:16:51.834Z"),
      status: "OPEN",
      timezone: "Africa/Ouagadougou",
      updatedAt: new Date("2022-01-23T03:00:33.309Z"),
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
import { hrisCreateHrisAttendance } from "@unified-api/typescript-sdk/funcs/hrisCreateHrisAttendance.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisCreateHrisAttendance(unifiedTo, {
    hrisAttendance: {
      address: {
        address1: "18002 Elm Street",
        city: "Port Gaetano",
        countryCode: "US",
        postalCode: "42344",
        region: "Vermont",
        regionCode: "MI",
      },
      approvedAt: new Date("2021-09-20T09:13:55.287Z"),
      breaks: [
        {
          durationMinutes: 51,
          endAt: new Date("2024-03-03T22:36:12.717Z"),
          id: "beabe61e-8d44-4584-a5da-2df1fd7e60c0",
          isPaid: false,
          name: "Lunch",
          startAt: new Date("2023-11-15T04:38:44.443Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "EUR",
      declaredTipsAmount: 54,
      employeeUserId: "<id>",
      endAt: new Date("2024-05-13T02:12:45.435Z"),
      hourlyRate: 16,
      hours: 10,
      id: "76664e05-36ad-4920-8f34-18432010ff75",
      jobName: "Human Accountability Administrator",
      metadata: [],
      nonCashTipsAmount: 167,
      startAt: new Date("2021-11-12T21:16:51.834Z"),
      status: "OPEN",
      timezone: "Africa/Ouagadougou",
      updatedAt: new Date("2022-01-23T03:00:33.309Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateHrisAttendance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisAttendanceRequest](../../sdk/models/operations/createhrisattendancerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisAttendance](../../sdk/models/shared/hrisattendance.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHrisAttendance

Retrieves a single HrisAttendance by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisAttendance" method="get" path="/hris/{connection_id}/attendance/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.attendance.getHrisAttendance({
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
import { hrisGetHrisAttendance } from "@unified-api/typescript-sdk/funcs/hrisGetHrisAttendance.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisGetHrisAttendance(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetHrisAttendance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisAttendanceRequest](../../sdk/models/operations/gethrisattendancerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisAttendance](../../sdk/models/shared/hrisattendance.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHrisAttendances

Returns a list of HrisAttendances. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisAttendances" method="get" path="/hris/{connection_id}/attendance" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.attendance.listHrisAttendances({
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
import { hrisListHrisAttendances } from "@unified-api/typescript-sdk/funcs/hrisListHrisAttendances.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisListHrisAttendances(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisListHrisAttendances failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisAttendancesRequest](../../sdk/models/operations/listhrisattendancesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisAttendance[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHrisAttendance

Updates the HrisAttendance identified by `id`. Provide the unified HrisAttendance fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHrisAttendance" method="patch" path="/hris/{connection_id}/attendance/{id}" example="hris_attendance" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.attendance.patchHrisAttendance({
    hrisAttendance: {
      address: {
        address1: "18002 Elm Street",
        city: "Port Gaetano",
        countryCode: "US",
        postalCode: "42344",
        region: "Vermont",
        regionCode: "MI",
      },
      approvedAt: new Date("2021-09-20T09:13:55.288Z"),
      breaks: [
        {
          durationMinutes: 51,
          endAt: new Date("2024-03-03T22:36:12.727Z"),
          id: "323f51bb-9713-4b67-b8a4-b07f47ef336e",
          isPaid: false,
          name: "Lunch",
          startAt: new Date("2023-11-15T04:38:44.452Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "EUR",
      declaredTipsAmount: 54,
      employeeUserId: "<id>",
      endAt: new Date("2024-05-13T02:12:45.446Z"),
      hourlyRate: 16,
      hours: 10,
      id: "22d86359-cf1d-452f-9164-d004f875a149",
      jobName: "Human Accountability Administrator",
      metadata: [],
      nonCashTipsAmount: 167,
      startAt: new Date("2021-11-12T21:16:51.835Z"),
      status: "OPEN",
      timezone: "Africa/Ouagadougou",
      updatedAt: new Date("2022-01-23T03:00:33.311Z"),
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
import { hrisPatchHrisAttendance } from "@unified-api/typescript-sdk/funcs/hrisPatchHrisAttendance.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisPatchHrisAttendance(unifiedTo, {
    hrisAttendance: {
      address: {
        address1: "18002 Elm Street",
        city: "Port Gaetano",
        countryCode: "US",
        postalCode: "42344",
        region: "Vermont",
        regionCode: "MI",
      },
      approvedAt: new Date("2021-09-20T09:13:55.288Z"),
      breaks: [
        {
          durationMinutes: 51,
          endAt: new Date("2024-03-03T22:36:12.727Z"),
          id: "323f51bb-9713-4b67-b8a4-b07f47ef336e",
          isPaid: false,
          name: "Lunch",
          startAt: new Date("2023-11-15T04:38:44.452Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "EUR",
      declaredTipsAmount: 54,
      employeeUserId: "<id>",
      endAt: new Date("2024-05-13T02:12:45.446Z"),
      hourlyRate: 16,
      hours: 10,
      id: "22d86359-cf1d-452f-9164-d004f875a149",
      jobName: "Human Accountability Administrator",
      metadata: [],
      nonCashTipsAmount: 167,
      startAt: new Date("2021-11-12T21:16:51.835Z"),
      status: "OPEN",
      timezone: "Africa/Ouagadougou",
      updatedAt: new Date("2022-01-23T03:00:33.311Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisPatchHrisAttendance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHrisAttendanceRequest](../../sdk/models/operations/patchhrisattendancerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisAttendance](../../sdk/models/shared/hrisattendance.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeHrisAttendance

Deletes the HrisAttendance identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHrisAttendance" method="delete" path="/hris/{connection_id}/attendance/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.attendance.removeHrisAttendance({
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
import { hrisRemoveHrisAttendance } from "@unified-api/typescript-sdk/funcs/hrisRemoveHrisAttendance.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisRemoveHrisAttendance(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisRemoveHrisAttendance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHrisAttendanceRequest](../../sdk/models/operations/removehrisattendancerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHrisAttendanceResponse](../../sdk/models/operations/removehrisattendanceresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHrisAttendance

Updates the HrisAttendance identified by `id`. Provide the unified HrisAttendance fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHrisAttendance" method="put" path="/hris/{connection_id}/attendance/{id}" example="hris_attendance" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.attendance.updateHrisAttendance({
    hrisAttendance: {
      address: {
        address1: "18002 Elm Street",
        city: "Port Gaetano",
        countryCode: "US",
        postalCode: "42344",
        region: "Vermont",
        regionCode: "MI",
      },
      approvedAt: new Date("2021-09-20T09:13:55.288Z"),
      breaks: [
        {
          durationMinutes: 51,
          endAt: new Date("2024-03-03T22:36:12.727Z"),
          id: "323f51bb-9713-4b67-b8a4-b07f47ef336e",
          isPaid: false,
          name: "Lunch",
          startAt: new Date("2023-11-15T04:38:44.452Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "EUR",
      declaredTipsAmount: 54,
      employeeUserId: "<id>",
      endAt: new Date("2024-05-13T02:12:45.446Z"),
      hourlyRate: 16,
      hours: 10,
      id: "22d86359-cf1d-452f-9164-d004f875a149",
      jobName: "Human Accountability Administrator",
      metadata: [],
      nonCashTipsAmount: 167,
      startAt: new Date("2021-11-12T21:16:51.835Z"),
      status: "OPEN",
      timezone: "Africa/Ouagadougou",
      updatedAt: new Date("2022-01-23T03:00:33.311Z"),
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
import { hrisUpdateHrisAttendance } from "@unified-api/typescript-sdk/funcs/hrisUpdateHrisAttendance.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisUpdateHrisAttendance(unifiedTo, {
    hrisAttendance: {
      address: {
        address1: "18002 Elm Street",
        city: "Port Gaetano",
        countryCode: "US",
        postalCode: "42344",
        region: "Vermont",
        regionCode: "MI",
      },
      approvedAt: new Date("2021-09-20T09:13:55.288Z"),
      breaks: [
        {
          durationMinutes: 51,
          endAt: new Date("2024-03-03T22:36:12.727Z"),
          id: "323f51bb-9713-4b67-b8a4-b07f47ef336e",
          isPaid: false,
          name: "Lunch",
          startAt: new Date("2023-11-15T04:38:44.452Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "EUR",
      declaredTipsAmount: 54,
      employeeUserId: "<id>",
      endAt: new Date("2024-05-13T02:12:45.446Z"),
      hourlyRate: 16,
      hours: 10,
      id: "22d86359-cf1d-452f-9164-d004f875a149",
      jobName: "Human Accountability Administrator",
      metadata: [],
      nonCashTipsAmount: 167,
      startAt: new Date("2021-11-12T21:16:51.835Z"),
      status: "OPEN",
      timezone: "Africa/Ouagadougou",
      updatedAt: new Date("2022-01-23T03:00:33.311Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisUpdateHrisAttendance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHrisAttendanceRequest](../../sdk/models/operations/updatehrisattendancerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisAttendance](../../sdk/models/shared/hrisattendance.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |