# Recording

## Overview

### Available Operations

* [createUcRecording](#createucrecording) - Create a recording
* [getCalendarRecording](#getcalendarrecording) - Retrieve a recording
* [getUcRecording](#getucrecording) - Retrieve a recording
* [listCalendarRecordings](#listcalendarrecordings) - List all recordings
* [listUcRecordings](#listucrecordings) - List all recordings
* [patchUcRecording](#patchucrecording) - Update a recording
* [removeUcRecording](#removeucrecording) - Remove a recording
* [updateUcRecording](#updateucrecording) - Update a recording

## createUcRecording

Creates a UcRecording. Provide the unified UcRecording fields in the request body; they are mapped to the provider's API. Returns the created UcRecording.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createUcRecording" method="post" path="/uc/{connection_id}/recording" example="uc_recording" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.recording.createUcRecording({
    ucRecording: {
      contacts: [],
      conversationIdentifier: "61f34343-c6f3-473a-b9e6-a93ec94f63bc",
      createdAt: new Date("2022-09-17T19:41:46.956Z"),
      endAt: new Date("2024-05-05T09:43:38.990Z"),
      expiresAt: new Date("2026-04-27T16:09:37.217Z"),
      id: "61f34343-c6f3-473a-b9e6-a93ec94f63bc",
      media: [
        {
          endAt: new Date("2024-04-02T04:50:58.448Z"),
          language: "en",
          recordingDownloadUrl: "https://parched-wasabi.com/",
          startAt: new Date("2026-05-16T08:31:57.883Z"),
          transcriptDownloadUrl: "https://colossal-cuckoo.name",
          transcripts: [
            {
              endAt: new Date("2026-02-25T08:58:27.233Z"),
              startAt: new Date("2024-06-02T16:20:06.772Z"),
              text: "Turpis maiores ducimus tero speculum.",
            },
            {
              endAt: new Date("2024-10-13T01:39:00.818Z"),
              startAt: new Date("2026-08-03T20:25:10.904Z"),
              text: "Magnam consuasor uxor tergiversatio subseco.",
            },
          ],
        },
      ],
      metadata: [],
      startAt: new Date("2023-04-27T21:43:30.611Z"),
      type: "OUTBOUND",
      updatedAt: new Date("2025-03-17T02:07:47.273Z"),
      userPhone: "1-915-327-0429 x509",
      webUrl: "https://spherical-comparison.org",
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
import { recordingCreateUcRecording } from "@unified-api/typescript-sdk/funcs/recordingCreateUcRecording.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await recordingCreateUcRecording(unifiedTo, {
    ucRecording: {
      contacts: [],
      conversationIdentifier: "61f34343-c6f3-473a-b9e6-a93ec94f63bc",
      createdAt: new Date("2022-09-17T19:41:46.956Z"),
      endAt: new Date("2024-05-05T09:43:38.990Z"),
      expiresAt: new Date("2026-04-27T16:09:37.217Z"),
      id: "61f34343-c6f3-473a-b9e6-a93ec94f63bc",
      media: [
        {
          endAt: new Date("2024-04-02T04:50:58.448Z"),
          language: "en",
          recordingDownloadUrl: "https://parched-wasabi.com/",
          startAt: new Date("2026-05-16T08:31:57.883Z"),
          transcriptDownloadUrl: "https://colossal-cuckoo.name",
          transcripts: [
            {
              endAt: new Date("2026-02-25T08:58:27.233Z"),
              startAt: new Date("2024-06-02T16:20:06.772Z"),
              text: "Turpis maiores ducimus tero speculum.",
            },
            {
              endAt: new Date("2024-10-13T01:39:00.818Z"),
              startAt: new Date("2026-08-03T20:25:10.904Z"),
              text: "Magnam consuasor uxor tergiversatio subseco.",
            },
          ],
        },
      ],
      metadata: [],
      startAt: new Date("2023-04-27T21:43:30.611Z"),
      type: "OUTBOUND",
      updatedAt: new Date("2025-03-17T02:07:47.273Z"),
      userPhone: "1-915-327-0429 x509",
      webUrl: "https://spherical-comparison.org",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordingCreateUcRecording failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateUcRecordingRequest](../../sdk/models/operations/createucrecordingrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcRecording](../../sdk/models/shared/ucrecording.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCalendarRecording

Retrieves a single CalendarRecording by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCalendarRecording" method="get" path="/calendar/{connection_id}/recording/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.recording.getCalendarRecording({
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
import { calendarGetCalendarRecording } from "@unified-api/typescript-sdk/funcs/calendarGetCalendarRecording.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarGetCalendarRecording(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarGetCalendarRecording failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCalendarRecordingRequest](../../sdk/models/operations/getcalendarrecordingrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarRecording](../../sdk/models/shared/calendarrecording.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getUcRecording

Retrieves a single UcRecording by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUcRecording" method="get" path="/uc/{connection_id}/recording/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.recording.getUcRecording({
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
import { recordingGetUcRecording } from "@unified-api/typescript-sdk/funcs/recordingGetUcRecording.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await recordingGetUcRecording(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordingGetUcRecording failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUcRecordingRequest](../../sdk/models/operations/getucrecordingrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcRecording](../../sdk/models/shared/ucrecording.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCalendarRecordings

Returns a list of CalendarRecordings. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCalendarRecordings" method="get" path="/calendar/{connection_id}/recording" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.recording.listCalendarRecordings({
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
import { calendarListCalendarRecordings } from "@unified-api/typescript-sdk/funcs/calendarListCalendarRecordings.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarListCalendarRecordings(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarListCalendarRecordings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCalendarRecordingsRequest](../../sdk/models/operations/listcalendarrecordingsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarRecording[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listUcRecordings

Returns a list of UcRecordings. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listUcRecordings" method="get" path="/uc/{connection_id}/recording" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.recording.listUcRecordings({
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
import { recordingListUcRecordings } from "@unified-api/typescript-sdk/funcs/recordingListUcRecordings.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await recordingListUcRecordings(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordingListUcRecordings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListUcRecordingsRequest](../../sdk/models/operations/listucrecordingsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcRecording[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchUcRecording

Updates the UcRecording identified by `id`. Provide the unified UcRecording fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchUcRecording" method="patch" path="/uc/{connection_id}/recording/{id}" example="uc_recording" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.recording.patchUcRecording({
    ucRecording: {
      contacts: [],
      conversationIdentifier: "e4c8bbc2-5646-4e98-983d-f8bd423bc012",
      createdAt: new Date("2022-09-17T19:41:46.956Z"),
      endAt: new Date("2024-05-05T09:43:39.003Z"),
      expiresAt: new Date("2026-04-27T16:09:37.246Z"),
      id: "e4c8bbc2-5646-4e98-983d-f8bd423bc012",
      media: [
        {
          endAt: new Date("2024-04-02T04:50:58.460Z"),
          language: "en",
          recordingDownloadUrl: "https://parched-wasabi.com/",
          startAt: new Date("2026-05-16T08:31:57.911Z"),
          transcriptDownloadUrl: "https://colossal-cuckoo.name",
          transcripts: [
            {
              endAt: new Date("2026-02-25T08:58:27.260Z"),
              startAt: new Date("2024-06-02T16:20:06.785Z"),
              text: "Turpis maiores ducimus tero speculum.",
            },
            {
              endAt: new Date("2024-10-13T01:39:00.834Z"),
              startAt: new Date("2026-08-03T20:25:10.935Z"),
              text: "Magnam consuasor uxor tergiversatio subseco.",
            },
          ],
        },
      ],
      metadata: [],
      startAt: new Date("2023-04-27T21:43:30.615Z"),
      type: "OUTBOUND",
      updatedAt: new Date("2025-03-17T02:07:47.292Z"),
      userPhone: "1-915-327-0429 x509",
      webUrl: "https://spherical-comparison.org",
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
import { recordingPatchUcRecording } from "@unified-api/typescript-sdk/funcs/recordingPatchUcRecording.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await recordingPatchUcRecording(unifiedTo, {
    ucRecording: {
      contacts: [],
      conversationIdentifier: "e4c8bbc2-5646-4e98-983d-f8bd423bc012",
      createdAt: new Date("2022-09-17T19:41:46.956Z"),
      endAt: new Date("2024-05-05T09:43:39.003Z"),
      expiresAt: new Date("2026-04-27T16:09:37.246Z"),
      id: "e4c8bbc2-5646-4e98-983d-f8bd423bc012",
      media: [
        {
          endAt: new Date("2024-04-02T04:50:58.460Z"),
          language: "en",
          recordingDownloadUrl: "https://parched-wasabi.com/",
          startAt: new Date("2026-05-16T08:31:57.911Z"),
          transcriptDownloadUrl: "https://colossal-cuckoo.name",
          transcripts: [
            {
              endAt: new Date("2026-02-25T08:58:27.260Z"),
              startAt: new Date("2024-06-02T16:20:06.785Z"),
              text: "Turpis maiores ducimus tero speculum.",
            },
            {
              endAt: new Date("2024-10-13T01:39:00.834Z"),
              startAt: new Date("2026-08-03T20:25:10.935Z"),
              text: "Magnam consuasor uxor tergiversatio subseco.",
            },
          ],
        },
      ],
      metadata: [],
      startAt: new Date("2023-04-27T21:43:30.615Z"),
      type: "OUTBOUND",
      updatedAt: new Date("2025-03-17T02:07:47.292Z"),
      userPhone: "1-915-327-0429 x509",
      webUrl: "https://spherical-comparison.org",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordingPatchUcRecording failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchUcRecordingRequest](../../sdk/models/operations/patchucrecordingrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcRecording](../../sdk/models/shared/ucrecording.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeUcRecording

Deletes the UcRecording identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeUcRecording" method="delete" path="/uc/{connection_id}/recording/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.recording.removeUcRecording({
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
import { recordingRemoveUcRecording } from "@unified-api/typescript-sdk/funcs/recordingRemoveUcRecording.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await recordingRemoveUcRecording(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordingRemoveUcRecording failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveUcRecordingRequest](../../sdk/models/operations/removeucrecordingrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveUcRecordingResponse](../../sdk/models/operations/removeucrecordingresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateUcRecording

Updates the UcRecording identified by `id`. Provide the unified UcRecording fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateUcRecording" method="put" path="/uc/{connection_id}/recording/{id}" example="uc_recording" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.recording.updateUcRecording({
    ucRecording: {
      contacts: [],
      conversationIdentifier: "e4c8bbc2-5646-4e98-983d-f8bd423bc012",
      createdAt: new Date("2022-09-17T19:41:46.956Z"),
      endAt: new Date("2024-05-05T09:43:39.003Z"),
      expiresAt: new Date("2026-04-27T16:09:37.246Z"),
      id: "e4c8bbc2-5646-4e98-983d-f8bd423bc012",
      media: [
        {
          endAt: new Date("2024-04-02T04:50:58.460Z"),
          language: "en",
          recordingDownloadUrl: "https://parched-wasabi.com/",
          startAt: new Date("2026-05-16T08:31:57.911Z"),
          transcriptDownloadUrl: "https://colossal-cuckoo.name",
          transcripts: [
            {
              endAt: new Date("2026-02-25T08:58:27.260Z"),
              startAt: new Date("2024-06-02T16:20:06.785Z"),
              text: "Turpis maiores ducimus tero speculum.",
            },
            {
              endAt: new Date("2024-10-13T01:39:00.834Z"),
              startAt: new Date("2026-08-03T20:25:10.935Z"),
              text: "Magnam consuasor uxor tergiversatio subseco.",
            },
          ],
        },
      ],
      metadata: [],
      startAt: new Date("2023-04-27T21:43:30.615Z"),
      type: "OUTBOUND",
      updatedAt: new Date("2025-03-17T02:07:47.292Z"),
      userPhone: "1-915-327-0429 x509",
      webUrl: "https://spherical-comparison.org",
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
import { recordingUpdateUcRecording } from "@unified-api/typescript-sdk/funcs/recordingUpdateUcRecording.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await recordingUpdateUcRecording(unifiedTo, {
    ucRecording: {
      contacts: [],
      conversationIdentifier: "e4c8bbc2-5646-4e98-983d-f8bd423bc012",
      createdAt: new Date("2022-09-17T19:41:46.956Z"),
      endAt: new Date("2024-05-05T09:43:39.003Z"),
      expiresAt: new Date("2026-04-27T16:09:37.246Z"),
      id: "e4c8bbc2-5646-4e98-983d-f8bd423bc012",
      media: [
        {
          endAt: new Date("2024-04-02T04:50:58.460Z"),
          language: "en",
          recordingDownloadUrl: "https://parched-wasabi.com/",
          startAt: new Date("2026-05-16T08:31:57.911Z"),
          transcriptDownloadUrl: "https://colossal-cuckoo.name",
          transcripts: [
            {
              endAt: new Date("2026-02-25T08:58:27.260Z"),
              startAt: new Date("2024-06-02T16:20:06.785Z"),
              text: "Turpis maiores ducimus tero speculum.",
            },
            {
              endAt: new Date("2024-10-13T01:39:00.834Z"),
              startAt: new Date("2026-08-03T20:25:10.935Z"),
              text: "Magnam consuasor uxor tergiversatio subseco.",
            },
          ],
        },
      ],
      metadata: [],
      startAt: new Date("2023-04-27T21:43:30.615Z"),
      type: "OUTBOUND",
      updatedAt: new Date("2025-03-17T02:07:47.292Z"),
      userPhone: "1-915-327-0429 x509",
      webUrl: "https://spherical-comparison.org",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordingUpdateUcRecording failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateUcRecordingRequest](../../sdk/models/operations/updateucrecordingrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcRecording](../../sdk/models/shared/ucrecording.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |