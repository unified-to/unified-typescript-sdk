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
        address1: "14108 Allie Flats",
        city: "Kearaborough",
        countryCode: "US",
        postalCode: "23844-2344",
        region: "Tennessee",
        regionCode: "CA",
      },
      approvedAt: new Date("2021-09-19T19:05:16.633Z"),
      breaks: [
        {
          durationMinutes: 51,
          endAt: new Date("2024-02-19T08:11:00.890Z"),
          id: "50eeed1b-3368-4c74-8687-64a5e2118a91",
          isPaid: false,
          name: "Lunch",
          startAt: new Date("2023-11-03T04:29:39.621Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "EUR",
      declaredTipsAmount: 54,
      employeeUserId: "<id>",
      endAt: new Date("2024-04-28T11:19:53.815Z"),
      hourlyRate: 16,
      hours: 10,
      id: "f0e87307-10c5-46b9-97df-d8d22f26dc73",
      jobName: "Human Accountability Administrator",
      metadata: [],
      nonCashTipsAmount: 167,
      startAt: new Date("2021-11-11T12:28:52.048Z"),
      status: "OPEN",
      timezone: "America/Atikokan",
      updatedAt: new Date("2022-01-20T17:22:07.592Z"),
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
        address1: "14108 Allie Flats",
        city: "Kearaborough",
        countryCode: "US",
        postalCode: "23844-2344",
        region: "Tennessee",
        regionCode: "CA",
      },
      approvedAt: new Date("2021-09-19T19:05:16.633Z"),
      breaks: [
        {
          durationMinutes: 51,
          endAt: new Date("2024-02-19T08:11:00.890Z"),
          id: "50eeed1b-3368-4c74-8687-64a5e2118a91",
          isPaid: false,
          name: "Lunch",
          startAt: new Date("2023-11-03T04:29:39.621Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "EUR",
      declaredTipsAmount: 54,
      employeeUserId: "<id>",
      endAt: new Date("2024-04-28T11:19:53.815Z"),
      hourlyRate: 16,
      hours: 10,
      id: "f0e87307-10c5-46b9-97df-d8d22f26dc73",
      jobName: "Human Accountability Administrator",
      metadata: [],
      nonCashTipsAmount: 167,
      startAt: new Date("2021-11-11T12:28:52.048Z"),
      status: "OPEN",
      timezone: "America/Atikokan",
      updatedAt: new Date("2022-01-20T17:22:07.592Z"),
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
        address1: "14108 Allie Flats",
        city: "Kearaborough",
        countryCode: "US",
        postalCode: "23844-2344",
        region: "Tennessee",
        regionCode: "CA",
      },
      approvedAt: new Date("2021-09-19T19:05:16.634Z"),
      breaks: [
        {
          durationMinutes: 51,
          endAt: new Date("2024-02-19T08:11:00.902Z"),
          id: "41b86a0f-727c-4cb8-88cd-24b668d3c86b",
          isPaid: false,
          name: "Lunch",
          startAt: new Date("2023-11-03T04:29:39.632Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "EUR",
      declaredTipsAmount: 54,
      employeeUserId: "<id>",
      endAt: new Date("2024-04-28T11:19:53.828Z"),
      hourlyRate: 16,
      hours: 10,
      id: "5038b295-f03e-4178-8d29-e44fb179251a",
      jobName: "Human Accountability Administrator",
      metadata: [],
      nonCashTipsAmount: 167,
      startAt: new Date("2021-11-11T12:28:52.049Z"),
      status: "OPEN",
      timezone: "America/Atikokan",
      updatedAt: new Date("2022-01-20T17:22:07.594Z"),
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
        address1: "14108 Allie Flats",
        city: "Kearaborough",
        countryCode: "US",
        postalCode: "23844-2344",
        region: "Tennessee",
        regionCode: "CA",
      },
      approvedAt: new Date("2021-09-19T19:05:16.634Z"),
      breaks: [
        {
          durationMinutes: 51,
          endAt: new Date("2024-02-19T08:11:00.902Z"),
          id: "41b86a0f-727c-4cb8-88cd-24b668d3c86b",
          isPaid: false,
          name: "Lunch",
          startAt: new Date("2023-11-03T04:29:39.632Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "EUR",
      declaredTipsAmount: 54,
      employeeUserId: "<id>",
      endAt: new Date("2024-04-28T11:19:53.828Z"),
      hourlyRate: 16,
      hours: 10,
      id: "5038b295-f03e-4178-8d29-e44fb179251a",
      jobName: "Human Accountability Administrator",
      metadata: [],
      nonCashTipsAmount: 167,
      startAt: new Date("2021-11-11T12:28:52.049Z"),
      status: "OPEN",
      timezone: "America/Atikokan",
      updatedAt: new Date("2022-01-20T17:22:07.594Z"),
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
        address1: "14108 Allie Flats",
        city: "Kearaborough",
        countryCode: "US",
        postalCode: "23844-2344",
        region: "Tennessee",
        regionCode: "CA",
      },
      approvedAt: new Date("2021-09-19T19:05:16.634Z"),
      breaks: [
        {
          durationMinutes: 51,
          endAt: new Date("2024-02-19T08:11:00.902Z"),
          id: "41b86a0f-727c-4cb8-88cd-24b668d3c86b",
          isPaid: false,
          name: "Lunch",
          startAt: new Date("2023-11-03T04:29:39.632Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "EUR",
      declaredTipsAmount: 54,
      employeeUserId: "<id>",
      endAt: new Date("2024-04-28T11:19:53.828Z"),
      hourlyRate: 16,
      hours: 10,
      id: "5038b295-f03e-4178-8d29-e44fb179251a",
      jobName: "Human Accountability Administrator",
      metadata: [],
      nonCashTipsAmount: 167,
      startAt: new Date("2021-11-11T12:28:52.049Z"),
      status: "OPEN",
      timezone: "America/Atikokan",
      updatedAt: new Date("2022-01-20T17:22:07.594Z"),
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
        address1: "14108 Allie Flats",
        city: "Kearaborough",
        countryCode: "US",
        postalCode: "23844-2344",
        region: "Tennessee",
        regionCode: "CA",
      },
      approvedAt: new Date("2021-09-19T19:05:16.634Z"),
      breaks: [
        {
          durationMinutes: 51,
          endAt: new Date("2024-02-19T08:11:00.902Z"),
          id: "41b86a0f-727c-4cb8-88cd-24b668d3c86b",
          isPaid: false,
          name: "Lunch",
          startAt: new Date("2023-11-03T04:29:39.632Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "EUR",
      declaredTipsAmount: 54,
      employeeUserId: "<id>",
      endAt: new Date("2024-04-28T11:19:53.828Z"),
      hourlyRate: 16,
      hours: 10,
      id: "5038b295-f03e-4178-8d29-e44fb179251a",
      jobName: "Human Accountability Administrator",
      metadata: [],
      nonCashTipsAmount: 167,
      startAt: new Date("2021-11-11T12:28:52.049Z"),
      status: "OPEN",
      timezone: "America/Atikokan",
      updatedAt: new Date("2022-01-20T17:22:07.594Z"),
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