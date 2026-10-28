# Event

## Overview

### Available Operations

* [createAnalyticsEvent](#createanalyticsevent) - Create an event
* [createCalendarEvent](#createcalendarevent) - Create an event
* [createCdpEvent](#createcdpevent) - Create an event
* [createCrmEvent](#createcrmevent) - Create an event
* [getAnalyticsEvent](#getanalyticsevent) - Retrieve an event
* [getCalendarEvent](#getcalendarevent) - Retrieve an event
* [getCdpEvent](#getcdpevent) - Retrieve an event
* [getClubsEvent](#getclubsevent) - Retrieve an event
* [getCrmEvent](#getcrmevent) - Retrieve an event
* [listAnalyticsEvents](#listanalyticsevents) - List all events
* [listCalendarEvents](#listcalendarevents) - List all events
* [listCdpEvents](#listcdpevents) - List all events
* [listClubsEvents](#listclubsevents) - List all events
* [listCrmEvents](#listcrmevents) - List all events
* [patchCalendarEvent](#patchcalendarevent) - Update an event
* [patchCdpEvent](#patchcdpevent) - Update an event
* [patchCrmEvent](#patchcrmevent) - Update an event
* [patchMessagingEvent](#patchmessagingevent) - Update an event
* [removeCalendarEvent](#removecalendarevent) - Remove an event
* [removeCdpEvent](#removecdpevent) - Remove an event
* [removeCrmEvent](#removecrmevent) - Remove an event
* [updateCalendarEvent](#updatecalendarevent) - Update an event
* [updateCdpEvent](#updatecdpevent) - Update an event
* [updateCrmEvent](#updatecrmevent) - Update an event
* [updateMessagingEvent](#updatemessagingevent) - Update an event

## createAnalyticsEvent

Creates a AnalyticsEvent. Provide the unified AnalyticsEvent fields in the request body; they are mapped to the provider's API. Returns the created AnalyticsEvent.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAnalyticsEvent" method="post" path="/analytics/{connection_id}/event" example="analytics_event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.createAnalyticsEvent({
    analyticsEvent: {
      createdAt: new Date("2023-06-21T03:13:22.954Z"),
      eventType: "SCREEN_VIEW",
      id: "b26cb698-134a-4350-ab0e-98b3298b4c7d",
      metadata: {
        "key": {},
      },
      name: "page_view",
      pageUrl: "https://golden-carboxyl.biz",
      updatedAt: new Date("2023-09-25T05:29:14.476Z"),
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
import { analyticsCreateAnalyticsEvent } from "@unified-api/typescript-sdk/funcs/analyticsCreateAnalyticsEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await analyticsCreateAnalyticsEvent(unifiedTo, {
    analyticsEvent: {
      createdAt: new Date("2023-06-21T03:13:22.954Z"),
      eventType: "SCREEN_VIEW",
      id: "b26cb698-134a-4350-ab0e-98b3298b4c7d",
      metadata: {
        "key": {},
      },
      name: "page_view",
      pageUrl: "https://golden-carboxyl.biz",
      updatedAt: new Date("2023-09-25T05:29:14.476Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsCreateAnalyticsEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAnalyticsEventRequest](../../sdk/models/operations/createanalyticseventrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AnalyticsEvent](../../sdk/models/shared/analyticsevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createCalendarEvent

Creates a CalendarEvent. Provide the unified CalendarEvent fields in the request body; they are mapped to the provider's API. Returns the created CalendarEvent.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCalendarEvent" method="post" path="/calendar/{connection_id}/event" example="calendar_event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.createCalendarEvent({
    calendarEvent: {
      attachments: [],
      conference: [],
      createdAt: "2019-08-04T14:33:51.814Z",
      endAt: "2020-05-25T01:38:16.012Z",
      hasConference: false,
      id: "e0902b96-2c39-4013-b643-24c85aff0539",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      metadata: [],
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 4,
          endAt: new Date("2025-03-30T02:13:13.650Z"),
          excludedDates: [
            "2024-02-07T02:55:52.933Z",
          ],
          frequency: "YEARLY",
          includedDates: [
            "2023-07-10T20:16:53.644Z",
            "2025-01-29T04:25:17.759Z",
            "2024-04-06T11:36:40.935Z",
          ],
          interval: 7,
          onDays: [
            "TU",
            "TH",
            "MO",
            "TH",
            "SA",
            "SA",
            "SA",
          ],
          onMonthDays: [
            -3,
          ],
          onMonths: [
            0,
            1,
            6,
            -10,
            9,
            0,
          ],
          onWeeks: [
            -8,
            3,
            -7,
            51,
            -3,
            -41,
            15,
            46,
            -1,
            46,
            42,
            11,
            12,
            -35,
            -15,
            -3,
            -42,
            50,
            3,
            -15,
            -10,
            6,
            -53,
            5,
            -32,
            -22,
            43,
            -44,
            -23,
            -21,
            -18,
            13,
            -5,
            2,
            -49,
          ],
          onYearDays: [
            -87,
            339,
            341,
            287,
            -17,
            319,
            -3,
            238,
            -115,
            -116,
            283,
            -61,
            -254,
            86,
            -163,
            5,
            -171,
            -99,
            279,
            19,
            303,
            -106,
            90,
            109,
            -185,
            -285,
            -83,
            -236,
            66,
            -215,
            178,
            64,
            78,
            5,
            -251,
            -79,
            -271,
            33,
            320,
            67,
            -84,
            -355,
            -364,
            348,
            271,
            -304,
            -199,
            106,
            -345,
            24,
            -89,
            -109,
            -314,
            365,
            38,
            -42,
            123,
            56,
            -3,
            31,
            101,
            326,
            -160,
            -101,
            -267,
            -309,
            -363,
            125,
            -182,
            363,
            324,
            36,
            -269,
            -79,
            -60,
            272,
            -254,
            -160,
            -82,
            19,
            42,
            69,
            -104,
            333,
            236,
            -287,
            296,
            261,
            241,
            348,
            -72,
            159,
            -127,
            229,
            -158,
            190,
            -173,
            -84,
            -96,
            176,
            339,
            -48,
            287,
            -46,
            -101,
            246,
            -8,
            -74,
            338,
            -51,
            -42,
            -128,
            -169,
            -174,
            168,
            -85,
            37,
            169,
            -105,
            231,
            -250,
            -286,
            -7,
            -121,
            321,
            278,
            -120,
            -96,
            360,
            337,
            -258,
            -179,
            324,
            -204,
            327,
            15,
            365,
            191,
            -345,
            -345,
            56,
            217,
            60,
            -264,
            -248,
            -316,
            191,
            -189,
            -152,
            -296,
            194,
            -42,
            -21,
            -218,
            171,
            -15,
            301,
            37,
            -167,
            18,
            248,
            -263,
            27,
            14,
            59,
            219,
            -284,
            221,
            -76,
            277,
            183,
            200,
            -12,
            -28,
            -79,
            150,
            320,
            -152,
            -15,
            -42,
            -125,
            -4,
            269,
            290,
            52,
            320,
            344,
            13,
            -69,
            255,
            -154,
            -281,
            158,
            25,
            240,
            -339,
            96,
            204,
            324,
            221,
            37,
            -333,
            87,
            354,
            -365,
            -203,
            -341,
            -79,
            -208,
            135,
            132,
            -351,
            39,
            -87,
            -297,
            -66,
            346,
            69,
            -177,
            235,
            295,
            -366,
            -55,
            -297,
            -308,
            -294,
            -208,
            141,
            267,
            64,
            100,
            -355,
            -335,
            280,
            224,
            259,
            1,
            -146,
            48,
            335,
            363,
            308,
            -224,
            109,
            -10,
            -89,
            -211,
            -47,
            -130,
            341,
            -250,
            295,
            -329,
            -205,
            231,
            247,
            -228,
            166,
            -28,
            36,
            277,
            -115,
            100,
            2,
            81,
            -66,
            31,
            -39,
            -319,
            -251,
            -254,
          ],
          timezone: "Asia/Ho_Chi_Minh",
          weekStart: "TU",
        },
      ],
      startAt: "2020-05-24T16:23:11.041Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-07-01T02:21:21.453Z",
      webUrl: "https://another-pinstripe.com",
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
import { eventCreateCalendarEvent } from "@unified-api/typescript-sdk/funcs/eventCreateCalendarEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventCreateCalendarEvent(unifiedTo, {
    calendarEvent: {
      attachments: [],
      conference: [],
      createdAt: "2019-08-04T14:33:51.814Z",
      endAt: "2020-05-25T01:38:16.012Z",
      hasConference: false,
      id: "e0902b96-2c39-4013-b643-24c85aff0539",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      metadata: [],
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 4,
          endAt: new Date("2025-03-30T02:13:13.650Z"),
          excludedDates: [
            "2024-02-07T02:55:52.933Z",
          ],
          frequency: "YEARLY",
          includedDates: [
            "2023-07-10T20:16:53.644Z",
            "2025-01-29T04:25:17.759Z",
            "2024-04-06T11:36:40.935Z",
          ],
          interval: 7,
          onDays: [
            "TU",
            "TH",
            "MO",
            "TH",
            "SA",
            "SA",
            "SA",
          ],
          onMonthDays: [
            -3,
          ],
          onMonths: [
            0,
            1,
            6,
            -10,
            9,
            0,
          ],
          onWeeks: [
            -8,
            3,
            -7,
            51,
            -3,
            -41,
            15,
            46,
            -1,
            46,
            42,
            11,
            12,
            -35,
            -15,
            -3,
            -42,
            50,
            3,
            -15,
            -10,
            6,
            -53,
            5,
            -32,
            -22,
            43,
            -44,
            -23,
            -21,
            -18,
            13,
            -5,
            2,
            -49,
          ],
          onYearDays: [
            -87,
            339,
            341,
            287,
            -17,
            319,
            -3,
            238,
            -115,
            -116,
            283,
            -61,
            -254,
            86,
            -163,
            5,
            -171,
            -99,
            279,
            19,
            303,
            -106,
            90,
            109,
            -185,
            -285,
            -83,
            -236,
            66,
            -215,
            178,
            64,
            78,
            5,
            -251,
            -79,
            -271,
            33,
            320,
            67,
            -84,
            -355,
            -364,
            348,
            271,
            -304,
            -199,
            106,
            -345,
            24,
            -89,
            -109,
            -314,
            365,
            38,
            -42,
            123,
            56,
            -3,
            31,
            101,
            326,
            -160,
            -101,
            -267,
            -309,
            -363,
            125,
            -182,
            363,
            324,
            36,
            -269,
            -79,
            -60,
            272,
            -254,
            -160,
            -82,
            19,
            42,
            69,
            -104,
            333,
            236,
            -287,
            296,
            261,
            241,
            348,
            -72,
            159,
            -127,
            229,
            -158,
            190,
            -173,
            -84,
            -96,
            176,
            339,
            -48,
            287,
            -46,
            -101,
            246,
            -8,
            -74,
            338,
            -51,
            -42,
            -128,
            -169,
            -174,
            168,
            -85,
            37,
            169,
            -105,
            231,
            -250,
            -286,
            -7,
            -121,
            321,
            278,
            -120,
            -96,
            360,
            337,
            -258,
            -179,
            324,
            -204,
            327,
            15,
            365,
            191,
            -345,
            -345,
            56,
            217,
            60,
            -264,
            -248,
            -316,
            191,
            -189,
            -152,
            -296,
            194,
            -42,
            -21,
            -218,
            171,
            -15,
            301,
            37,
            -167,
            18,
            248,
            -263,
            27,
            14,
            59,
            219,
            -284,
            221,
            -76,
            277,
            183,
            200,
            -12,
            -28,
            -79,
            150,
            320,
            -152,
            -15,
            -42,
            -125,
            -4,
            269,
            290,
            52,
            320,
            344,
            13,
            -69,
            255,
            -154,
            -281,
            158,
            25,
            240,
            -339,
            96,
            204,
            324,
            221,
            37,
            -333,
            87,
            354,
            -365,
            -203,
            -341,
            -79,
            -208,
            135,
            132,
            -351,
            39,
            -87,
            -297,
            -66,
            346,
            69,
            -177,
            235,
            295,
            -366,
            -55,
            -297,
            -308,
            -294,
            -208,
            141,
            267,
            64,
            100,
            -355,
            -335,
            280,
            224,
            259,
            1,
            -146,
            48,
            335,
            363,
            308,
            -224,
            109,
            -10,
            -89,
            -211,
            -47,
            -130,
            341,
            -250,
            295,
            -329,
            -205,
            231,
            247,
            -228,
            166,
            -28,
            36,
            277,
            -115,
            100,
            2,
            81,
            -66,
            31,
            -39,
            -319,
            -251,
            -254,
          ],
          timezone: "Asia/Ho_Chi_Minh",
          weekStart: "TU",
        },
      ],
      startAt: "2020-05-24T16:23:11.041Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-07-01T02:21:21.453Z",
      webUrl: "https://another-pinstripe.com",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventCreateCalendarEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCalendarEventRequest](../../sdk/models/operations/createcalendareventrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarEvent](../../sdk/models/shared/calendarevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createCdpEvent

Creates a CdpEvent. Provide the unified CdpEvent fields in the request body; they are mapped to the provider's API. Returns the created CdpEvent.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCdpEvent" method="post" path="/cdp/{connection_id}/event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.createCdpEvent({
    cdpEvent: {},
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
import { eventCreateCdpEvent } from "@unified-api/typescript-sdk/funcs/eventCreateCdpEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventCreateCdpEvent(unifiedTo, {
    cdpEvent: {},
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventCreateCdpEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCdpEventRequest](../../sdk/models/operations/createcdpeventrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CdpEvent](../../sdk/models/shared/cdpevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createCrmEvent

Creates a CrmEvent. Provide the unified CrmEvent fields in the request body; they are mapped to the provider's API. Returns the created CrmEvent.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCrmEvent" method="post" path="/crm/{connection_id}/event" example="crm_event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.createCrmEvent({
    crmEvent: {
      call: {
        description: "Arbitro aptus.",
        duration: 64,
        startAt: new Date("2024-12-15T22:17:41.781Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "789f7dc9-d332-4564-b48c-667f24898cca",
      metadata: [],
      type: "CALL",
      updatedAt: new Date("2026-10-18T11:15:00.194Z"),
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
import { eventCreateCrmEvent } from "@unified-api/typescript-sdk/funcs/eventCreateCrmEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventCreateCrmEvent(unifiedTo, {
    crmEvent: {
      call: {
        description: "Arbitro aptus.",
        duration: 64,
        startAt: new Date("2024-12-15T22:17:41.781Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "789f7dc9-d332-4564-b48c-667f24898cca",
      metadata: [],
      type: "CALL",
      updatedAt: new Date("2026-10-18T11:15:00.194Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventCreateCrmEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCrmEventRequest](../../sdk/models/operations/createcrmeventrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmEvent](../../sdk/models/shared/crmevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAnalyticsEvent

Retrieves a single AnalyticsEvent by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAnalyticsEvent" method="get" path="/analytics/{connection_id}/event/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.getAnalyticsEvent({
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
import { analyticsGetAnalyticsEvent } from "@unified-api/typescript-sdk/funcs/analyticsGetAnalyticsEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await analyticsGetAnalyticsEvent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsGetAnalyticsEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsEventRequest](../../sdk/models/operations/getanalyticseventrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AnalyticsEvent](../../sdk/models/shared/analyticsevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCalendarEvent

Retrieves a single CalendarEvent by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCalendarEvent" method="get" path="/calendar/{connection_id}/event/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.getCalendarEvent({
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
import { eventGetCalendarEvent } from "@unified-api/typescript-sdk/funcs/eventGetCalendarEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventGetCalendarEvent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventGetCalendarEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCalendarEventRequest](../../sdk/models/operations/getcalendareventrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarEvent](../../sdk/models/shared/calendarevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCdpEvent

Retrieves a single CdpEvent by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCdpEvent" method="get" path="/cdp/{connection_id}/event/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.getCdpEvent({
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
import { eventGetCdpEvent } from "@unified-api/typescript-sdk/funcs/eventGetCdpEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventGetCdpEvent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventGetCdpEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCdpEventRequest](../../sdk/models/operations/getcdpeventrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CdpEvent](../../sdk/models/shared/cdpevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getClubsEvent

Retrieves a single ClubsEvent by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getClubsEvent" method="get" path="/clubs/{connection_id}/event/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.getClubsEvent({
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
import { eventGetClubsEvent } from "@unified-api/typescript-sdk/funcs/eventGetClubsEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventGetClubsEvent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventGetClubsEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetClubsEventRequest](../../sdk/models/operations/getclubseventrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ClubsEvent](../../sdk/models/shared/clubsevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCrmEvent

Retrieves a single CrmEvent by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCrmEvent" method="get" path="/crm/{connection_id}/event/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.getCrmEvent({
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
import { eventGetCrmEvent } from "@unified-api/typescript-sdk/funcs/eventGetCrmEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventGetCrmEvent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventGetCrmEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCrmEventRequest](../../sdk/models/operations/getcrmeventrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmEvent](../../sdk/models/shared/crmevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAnalyticsEvents

Returns a list of AnalyticsEvents. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAnalyticsEvents" method="get" path="/analytics/{connection_id}/event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.listAnalyticsEvents({
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
import { analyticsListAnalyticsEvents } from "@unified-api/typescript-sdk/funcs/analyticsListAnalyticsEvents.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await analyticsListAnalyticsEvents(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsListAnalyticsEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAnalyticsEventsRequest](../../sdk/models/operations/listanalyticseventsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AnalyticsEvent[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCalendarEvents

Returns a list of CalendarEvents. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCalendarEvents" method="get" path="/calendar/{connection_id}/event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.listCalendarEvents({
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
import { eventListCalendarEvents } from "@unified-api/typescript-sdk/funcs/eventListCalendarEvents.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventListCalendarEvents(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventListCalendarEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCalendarEventsRequest](../../sdk/models/operations/listcalendareventsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarEvent[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCdpEvents

Returns a list of CdpEvents. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCdpEvents" method="get" path="/cdp/{connection_id}/event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.listCdpEvents({
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
import { eventListCdpEvents } from "@unified-api/typescript-sdk/funcs/eventListCdpEvents.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventListCdpEvents(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventListCdpEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCdpEventsRequest](../../sdk/models/operations/listcdpeventsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CdpEvent[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listClubsEvents

Returns a list of ClubsEvents. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listClubsEvents" method="get" path="/clubs/{connection_id}/event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.listClubsEvents({
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
import { eventListClubsEvents } from "@unified-api/typescript-sdk/funcs/eventListClubsEvents.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventListClubsEvents(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventListClubsEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListClubsEventsRequest](../../sdk/models/operations/listclubseventsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ClubsEvent[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCrmEvents

Returns a list of CrmEvents. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCrmEvents" method="get" path="/crm/{connection_id}/event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.listCrmEvents({
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
import { eventListCrmEvents } from "@unified-api/typescript-sdk/funcs/eventListCrmEvents.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventListCrmEvents(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventListCrmEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCrmEventsRequest](../../sdk/models/operations/listcrmeventsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmEvent[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCalendarEvent

Updates the CalendarEvent identified by `id`. Provide the unified CalendarEvent fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCalendarEvent" method="patch" path="/calendar/{connection_id}/event/{id}" example="calendar_event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.patchCalendarEvent({
    calendarEvent: {
      attachments: [],
      conference: [],
      createdAt: "2019-08-04T14:33:51.814Z",
      endAt: "2020-05-25T01:38:16.016Z",
      hasConference: false,
      id: "419d62c3-9ba4-4147-894b-715ccaa91de1",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      metadata: [],
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 4,
          endAt: new Date("2025-03-30T02:13:13.676Z"),
          excludedDates: [
            "2024-02-07T02:55:52.954Z",
          ],
          frequency: "YEARLY",
          includedDates: [
            "2023-07-10T20:16:53.662Z",
            "2025-01-29T04:25:17.785Z",
            "2024-04-06T11:36:40.957Z",
          ],
          interval: 7,
          onDays: [
            "TU",
            "TH",
            "MO",
            "TH",
            "SA",
            "SA",
            "SA",
          ],
          onMonthDays: [
            -3,
          ],
          onMonths: [
            0,
            1,
            6,
            -10,
            9,
            0,
          ],
          onWeeks: [
            -8,
            3,
            -7,
            51,
            -3,
            -41,
            15,
            46,
            -1,
            46,
            42,
            11,
            12,
            -35,
            -15,
            -3,
            -42,
            50,
            3,
            -15,
            -10,
            6,
            -53,
            5,
            -32,
            -22,
            43,
            -44,
            -23,
            -21,
            -18,
            13,
            -5,
            2,
            -49,
          ],
          onYearDays: [
            -87,
            339,
            341,
            287,
            -17,
            319,
            -3,
            238,
            -115,
            -116,
            283,
            -61,
            -254,
            86,
            -163,
            5,
            -171,
            -99,
            279,
            19,
            303,
            -106,
            90,
            109,
            -185,
            -285,
            -83,
            -236,
            66,
            -215,
            178,
            64,
            78,
            5,
            -251,
            -79,
            -271,
            33,
            320,
            67,
            -84,
            -355,
            -364,
            348,
            271,
            -304,
            -199,
            106,
            -345,
            24,
            -89,
            -109,
            -314,
            365,
            38,
            -42,
            123,
            56,
            -3,
            31,
            101,
            326,
            -160,
            -101,
            -267,
            -309,
            -363,
            125,
            -182,
            363,
            324,
            36,
            -269,
            -79,
            -60,
            272,
            -254,
            -160,
            -82,
            19,
            42,
            69,
            -104,
            333,
            236,
            -287,
            296,
            261,
            241,
            348,
            -72,
            159,
            -127,
            229,
            -158,
            190,
            -173,
            -84,
            -96,
            176,
            339,
            -48,
            287,
            -46,
            -101,
            246,
            -8,
            -74,
            338,
            -51,
            -42,
            -128,
            -169,
            -174,
            168,
            -85,
            37,
            169,
            -105,
            231,
            -250,
            -286,
            -7,
            -121,
            321,
            278,
            -120,
            -96,
            360,
            337,
            -258,
            -179,
            324,
            -204,
            327,
            15,
            365,
            191,
            -345,
            -345,
            56,
            217,
            60,
            -264,
            -248,
            -316,
            191,
            -189,
            -152,
            -296,
            194,
            -42,
            -21,
            -218,
            171,
            -15,
            301,
            37,
            -167,
            18,
            248,
            -263,
            27,
            14,
            59,
            219,
            -284,
            221,
            -76,
            277,
            183,
            200,
            -12,
            -28,
            -79,
            150,
            320,
            -152,
            -15,
            -42,
            -125,
            -4,
            269,
            290,
            52,
            320,
            344,
            13,
            -69,
            255,
            -154,
            -281,
            158,
            25,
            240,
            -339,
            96,
            204,
            324,
            221,
            37,
            -333,
            87,
            354,
            -365,
            -203,
            -341,
            -79,
            -208,
            135,
            132,
            -351,
            39,
            -87,
            -297,
            -66,
            346,
            69,
            -177,
            235,
            295,
            -366,
            -55,
            -297,
            -308,
            -294,
            -208,
            141,
            267,
            64,
            100,
            -355,
            -335,
            280,
            224,
            259,
            1,
            -146,
            48,
            335,
            363,
            308,
            -224,
            109,
            -10,
            -89,
            -211,
            -47,
            -130,
            341,
            -250,
            295,
            -329,
            -205,
            231,
            247,
            -228,
            166,
            -28,
            36,
            277,
            -115,
            100,
            2,
            81,
            -66,
            31,
            -39,
            -319,
            -251,
            -254,
          ],
          timezone: "Asia/Ho_Chi_Minh",
          weekStart: "TU",
        },
      ],
      startAt: "2020-05-24T16:23:11.045Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-07-01T02:21:21.457Z",
      webUrl: "https://another-pinstripe.com",
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
import { eventPatchCalendarEvent } from "@unified-api/typescript-sdk/funcs/eventPatchCalendarEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventPatchCalendarEvent(unifiedTo, {
    calendarEvent: {
      attachments: [],
      conference: [],
      createdAt: "2019-08-04T14:33:51.814Z",
      endAt: "2020-05-25T01:38:16.016Z",
      hasConference: false,
      id: "419d62c3-9ba4-4147-894b-715ccaa91de1",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      metadata: [],
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 4,
          endAt: new Date("2025-03-30T02:13:13.676Z"),
          excludedDates: [
            "2024-02-07T02:55:52.954Z",
          ],
          frequency: "YEARLY",
          includedDates: [
            "2023-07-10T20:16:53.662Z",
            "2025-01-29T04:25:17.785Z",
            "2024-04-06T11:36:40.957Z",
          ],
          interval: 7,
          onDays: [
            "TU",
            "TH",
            "MO",
            "TH",
            "SA",
            "SA",
            "SA",
          ],
          onMonthDays: [
            -3,
          ],
          onMonths: [
            0,
            1,
            6,
            -10,
            9,
            0,
          ],
          onWeeks: [
            -8,
            3,
            -7,
            51,
            -3,
            -41,
            15,
            46,
            -1,
            46,
            42,
            11,
            12,
            -35,
            -15,
            -3,
            -42,
            50,
            3,
            -15,
            -10,
            6,
            -53,
            5,
            -32,
            -22,
            43,
            -44,
            -23,
            -21,
            -18,
            13,
            -5,
            2,
            -49,
          ],
          onYearDays: [
            -87,
            339,
            341,
            287,
            -17,
            319,
            -3,
            238,
            -115,
            -116,
            283,
            -61,
            -254,
            86,
            -163,
            5,
            -171,
            -99,
            279,
            19,
            303,
            -106,
            90,
            109,
            -185,
            -285,
            -83,
            -236,
            66,
            -215,
            178,
            64,
            78,
            5,
            -251,
            -79,
            -271,
            33,
            320,
            67,
            -84,
            -355,
            -364,
            348,
            271,
            -304,
            -199,
            106,
            -345,
            24,
            -89,
            -109,
            -314,
            365,
            38,
            -42,
            123,
            56,
            -3,
            31,
            101,
            326,
            -160,
            -101,
            -267,
            -309,
            -363,
            125,
            -182,
            363,
            324,
            36,
            -269,
            -79,
            -60,
            272,
            -254,
            -160,
            -82,
            19,
            42,
            69,
            -104,
            333,
            236,
            -287,
            296,
            261,
            241,
            348,
            -72,
            159,
            -127,
            229,
            -158,
            190,
            -173,
            -84,
            -96,
            176,
            339,
            -48,
            287,
            -46,
            -101,
            246,
            -8,
            -74,
            338,
            -51,
            -42,
            -128,
            -169,
            -174,
            168,
            -85,
            37,
            169,
            -105,
            231,
            -250,
            -286,
            -7,
            -121,
            321,
            278,
            -120,
            -96,
            360,
            337,
            -258,
            -179,
            324,
            -204,
            327,
            15,
            365,
            191,
            -345,
            -345,
            56,
            217,
            60,
            -264,
            -248,
            -316,
            191,
            -189,
            -152,
            -296,
            194,
            -42,
            -21,
            -218,
            171,
            -15,
            301,
            37,
            -167,
            18,
            248,
            -263,
            27,
            14,
            59,
            219,
            -284,
            221,
            -76,
            277,
            183,
            200,
            -12,
            -28,
            -79,
            150,
            320,
            -152,
            -15,
            -42,
            -125,
            -4,
            269,
            290,
            52,
            320,
            344,
            13,
            -69,
            255,
            -154,
            -281,
            158,
            25,
            240,
            -339,
            96,
            204,
            324,
            221,
            37,
            -333,
            87,
            354,
            -365,
            -203,
            -341,
            -79,
            -208,
            135,
            132,
            -351,
            39,
            -87,
            -297,
            -66,
            346,
            69,
            -177,
            235,
            295,
            -366,
            -55,
            -297,
            -308,
            -294,
            -208,
            141,
            267,
            64,
            100,
            -355,
            -335,
            280,
            224,
            259,
            1,
            -146,
            48,
            335,
            363,
            308,
            -224,
            109,
            -10,
            -89,
            -211,
            -47,
            -130,
            341,
            -250,
            295,
            -329,
            -205,
            231,
            247,
            -228,
            166,
            -28,
            36,
            277,
            -115,
            100,
            2,
            81,
            -66,
            31,
            -39,
            -319,
            -251,
            -254,
          ],
          timezone: "Asia/Ho_Chi_Minh",
          weekStart: "TU",
        },
      ],
      startAt: "2020-05-24T16:23:11.045Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-07-01T02:21:21.457Z",
      webUrl: "https://another-pinstripe.com",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventPatchCalendarEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCalendarEventRequest](../../sdk/models/operations/patchcalendareventrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarEvent](../../sdk/models/shared/calendarevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCdpEvent

Updates the CdpEvent identified by `id`. Provide the unified CdpEvent fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCdpEvent" method="patch" path="/cdp/{connection_id}/event/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.patchCdpEvent({
    cdpEvent: {},
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
import { eventPatchCdpEvent } from "@unified-api/typescript-sdk/funcs/eventPatchCdpEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventPatchCdpEvent(unifiedTo, {
    cdpEvent: {},
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventPatchCdpEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCdpEventRequest](../../sdk/models/operations/patchcdpeventrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CdpEvent](../../sdk/models/shared/cdpevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCrmEvent

Updates the CrmEvent identified by `id`. Provide the unified CrmEvent fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCrmEvent" method="patch" path="/crm/{connection_id}/event/{id}" example="crm_event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.patchCrmEvent({
    crmEvent: {
      call: {
        description: "Arbitro aptus.",
        duration: 64,
        startAt: new Date("2024-12-15T22:17:41.807Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "200a9900-af13-45f0-8d21-dbf40e348dd8",
      metadata: [],
      type: "CALL",
      updatedAt: new Date("2026-10-18T11:15:00.232Z"),
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
import { eventPatchCrmEvent } from "@unified-api/typescript-sdk/funcs/eventPatchCrmEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventPatchCrmEvent(unifiedTo, {
    crmEvent: {
      call: {
        description: "Arbitro aptus.",
        duration: 64,
        startAt: new Date("2024-12-15T22:17:41.807Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "200a9900-af13-45f0-8d21-dbf40e348dd8",
      metadata: [],
      type: "CALL",
      updatedAt: new Date("2026-10-18T11:15:00.232Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventPatchCrmEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCrmEventRequest](../../sdk/models/operations/patchcrmeventrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmEvent](../../sdk/models/shared/crmevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchMessagingEvent

Updates the MessagingEvent identified by `id`. Provide the unified MessagingEvent fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchMessagingEvent" method="patch" path="/messaging/{connection_id}/event/{id}" example="messaging_event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.patchMessagingEvent({
    messagingEvent: {
      channel: {
        id: "",
        name: "",
      },
      createdAt: new Date("2019-05-30T19:44:46.461Z"),
      id: "b5b7bf6f-77cd-462d-a5b2-a0fd2fdb2a7d",
      isReplacingOriginal: false,
      metadata: [],
      type: "BUTTON_CLICK",
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
import { eventPatchMessagingEvent } from "@unified-api/typescript-sdk/funcs/eventPatchMessagingEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventPatchMessagingEvent(unifiedTo, {
    messagingEvent: {
      channel: {
        id: "",
        name: "",
      },
      createdAt: new Date("2019-05-30T19:44:46.461Z"),
      id: "b5b7bf6f-77cd-462d-a5b2-a0fd2fdb2a7d",
      isReplacingOriginal: false,
      metadata: [],
      type: "BUTTON_CLICK",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventPatchMessagingEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchMessagingEventRequest](../../sdk/models/operations/patchmessagingeventrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MessagingEvent](../../sdk/models/shared/messagingevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCalendarEvent

Deletes the CalendarEvent identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCalendarEvent" method="delete" path="/calendar/{connection_id}/event/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.removeCalendarEvent({
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
import { eventRemoveCalendarEvent } from "@unified-api/typescript-sdk/funcs/eventRemoveCalendarEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventRemoveCalendarEvent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventRemoveCalendarEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCalendarEventRequest](../../sdk/models/operations/removecalendareventrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCalendarEventResponse](../../sdk/models/operations/removecalendareventresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCdpEvent

Deletes the CdpEvent identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCdpEvent" method="delete" path="/cdp/{connection_id}/event/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.removeCdpEvent({
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
import { eventRemoveCdpEvent } from "@unified-api/typescript-sdk/funcs/eventRemoveCdpEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventRemoveCdpEvent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventRemoveCdpEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCdpEventRequest](../../sdk/models/operations/removecdpeventrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCdpEventResponse](../../sdk/models/operations/removecdpeventresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCrmEvent

Deletes the CrmEvent identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCrmEvent" method="delete" path="/crm/{connection_id}/event/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.removeCrmEvent({
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
import { eventRemoveCrmEvent } from "@unified-api/typescript-sdk/funcs/eventRemoveCrmEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventRemoveCrmEvent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventRemoveCrmEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCrmEventRequest](../../sdk/models/operations/removecrmeventrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCrmEventResponse](../../sdk/models/operations/removecrmeventresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCalendarEvent

Updates the CalendarEvent identified by `id`. Provide the unified CalendarEvent fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCalendarEvent" method="put" path="/calendar/{connection_id}/event/{id}" example="calendar_event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.updateCalendarEvent({
    calendarEvent: {
      attachments: [],
      conference: [],
      createdAt: "2019-08-04T14:33:51.814Z",
      endAt: "2020-05-25T01:38:16.016Z",
      hasConference: false,
      id: "419d62c3-9ba4-4147-894b-715ccaa91de1",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      metadata: [],
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 4,
          endAt: new Date("2025-03-30T02:13:13.676Z"),
          excludedDates: [
            "2024-02-07T02:55:52.954Z",
          ],
          frequency: "YEARLY",
          includedDates: [
            "2023-07-10T20:16:53.662Z",
            "2025-01-29T04:25:17.785Z",
            "2024-04-06T11:36:40.957Z",
          ],
          interval: 7,
          onDays: [
            "TU",
            "TH",
            "MO",
            "TH",
            "SA",
            "SA",
            "SA",
          ],
          onMonthDays: [
            -3,
          ],
          onMonths: [
            0,
            1,
            6,
            -10,
            9,
            0,
          ],
          onWeeks: [
            -8,
            3,
            -7,
            51,
            -3,
            -41,
            15,
            46,
            -1,
            46,
            42,
            11,
            12,
            -35,
            -15,
            -3,
            -42,
            50,
            3,
            -15,
            -10,
            6,
            -53,
            5,
            -32,
            -22,
            43,
            -44,
            -23,
            -21,
            -18,
            13,
            -5,
            2,
            -49,
          ],
          onYearDays: [
            -87,
            339,
            341,
            287,
            -17,
            319,
            -3,
            238,
            -115,
            -116,
            283,
            -61,
            -254,
            86,
            -163,
            5,
            -171,
            -99,
            279,
            19,
            303,
            -106,
            90,
            109,
            -185,
            -285,
            -83,
            -236,
            66,
            -215,
            178,
            64,
            78,
            5,
            -251,
            -79,
            -271,
            33,
            320,
            67,
            -84,
            -355,
            -364,
            348,
            271,
            -304,
            -199,
            106,
            -345,
            24,
            -89,
            -109,
            -314,
            365,
            38,
            -42,
            123,
            56,
            -3,
            31,
            101,
            326,
            -160,
            -101,
            -267,
            -309,
            -363,
            125,
            -182,
            363,
            324,
            36,
            -269,
            -79,
            -60,
            272,
            -254,
            -160,
            -82,
            19,
            42,
            69,
            -104,
            333,
            236,
            -287,
            296,
            261,
            241,
            348,
            -72,
            159,
            -127,
            229,
            -158,
            190,
            -173,
            -84,
            -96,
            176,
            339,
            -48,
            287,
            -46,
            -101,
            246,
            -8,
            -74,
            338,
            -51,
            -42,
            -128,
            -169,
            -174,
            168,
            -85,
            37,
            169,
            -105,
            231,
            -250,
            -286,
            -7,
            -121,
            321,
            278,
            -120,
            -96,
            360,
            337,
            -258,
            -179,
            324,
            -204,
            327,
            15,
            365,
            191,
            -345,
            -345,
            56,
            217,
            60,
            -264,
            -248,
            -316,
            191,
            -189,
            -152,
            -296,
            194,
            -42,
            -21,
            -218,
            171,
            -15,
            301,
            37,
            -167,
            18,
            248,
            -263,
            27,
            14,
            59,
            219,
            -284,
            221,
            -76,
            277,
            183,
            200,
            -12,
            -28,
            -79,
            150,
            320,
            -152,
            -15,
            -42,
            -125,
            -4,
            269,
            290,
            52,
            320,
            344,
            13,
            -69,
            255,
            -154,
            -281,
            158,
            25,
            240,
            -339,
            96,
            204,
            324,
            221,
            37,
            -333,
            87,
            354,
            -365,
            -203,
            -341,
            -79,
            -208,
            135,
            132,
            -351,
            39,
            -87,
            -297,
            -66,
            346,
            69,
            -177,
            235,
            295,
            -366,
            -55,
            -297,
            -308,
            -294,
            -208,
            141,
            267,
            64,
            100,
            -355,
            -335,
            280,
            224,
            259,
            1,
            -146,
            48,
            335,
            363,
            308,
            -224,
            109,
            -10,
            -89,
            -211,
            -47,
            -130,
            341,
            -250,
            295,
            -329,
            -205,
            231,
            247,
            -228,
            166,
            -28,
            36,
            277,
            -115,
            100,
            2,
            81,
            -66,
            31,
            -39,
            -319,
            -251,
            -254,
          ],
          timezone: "Asia/Ho_Chi_Minh",
          weekStart: "TU",
        },
      ],
      startAt: "2020-05-24T16:23:11.045Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-07-01T02:21:21.457Z",
      webUrl: "https://another-pinstripe.com",
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
import { eventUpdateCalendarEvent } from "@unified-api/typescript-sdk/funcs/eventUpdateCalendarEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventUpdateCalendarEvent(unifiedTo, {
    calendarEvent: {
      attachments: [],
      conference: [],
      createdAt: "2019-08-04T14:33:51.814Z",
      endAt: "2020-05-25T01:38:16.016Z",
      hasConference: false,
      id: "419d62c3-9ba4-4147-894b-715ccaa91de1",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      metadata: [],
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 4,
          endAt: new Date("2025-03-30T02:13:13.676Z"),
          excludedDates: [
            "2024-02-07T02:55:52.954Z",
          ],
          frequency: "YEARLY",
          includedDates: [
            "2023-07-10T20:16:53.662Z",
            "2025-01-29T04:25:17.785Z",
            "2024-04-06T11:36:40.957Z",
          ],
          interval: 7,
          onDays: [
            "TU",
            "TH",
            "MO",
            "TH",
            "SA",
            "SA",
            "SA",
          ],
          onMonthDays: [
            -3,
          ],
          onMonths: [
            0,
            1,
            6,
            -10,
            9,
            0,
          ],
          onWeeks: [
            -8,
            3,
            -7,
            51,
            -3,
            -41,
            15,
            46,
            -1,
            46,
            42,
            11,
            12,
            -35,
            -15,
            -3,
            -42,
            50,
            3,
            -15,
            -10,
            6,
            -53,
            5,
            -32,
            -22,
            43,
            -44,
            -23,
            -21,
            -18,
            13,
            -5,
            2,
            -49,
          ],
          onYearDays: [
            -87,
            339,
            341,
            287,
            -17,
            319,
            -3,
            238,
            -115,
            -116,
            283,
            -61,
            -254,
            86,
            -163,
            5,
            -171,
            -99,
            279,
            19,
            303,
            -106,
            90,
            109,
            -185,
            -285,
            -83,
            -236,
            66,
            -215,
            178,
            64,
            78,
            5,
            -251,
            -79,
            -271,
            33,
            320,
            67,
            -84,
            -355,
            -364,
            348,
            271,
            -304,
            -199,
            106,
            -345,
            24,
            -89,
            -109,
            -314,
            365,
            38,
            -42,
            123,
            56,
            -3,
            31,
            101,
            326,
            -160,
            -101,
            -267,
            -309,
            -363,
            125,
            -182,
            363,
            324,
            36,
            -269,
            -79,
            -60,
            272,
            -254,
            -160,
            -82,
            19,
            42,
            69,
            -104,
            333,
            236,
            -287,
            296,
            261,
            241,
            348,
            -72,
            159,
            -127,
            229,
            -158,
            190,
            -173,
            -84,
            -96,
            176,
            339,
            -48,
            287,
            -46,
            -101,
            246,
            -8,
            -74,
            338,
            -51,
            -42,
            -128,
            -169,
            -174,
            168,
            -85,
            37,
            169,
            -105,
            231,
            -250,
            -286,
            -7,
            -121,
            321,
            278,
            -120,
            -96,
            360,
            337,
            -258,
            -179,
            324,
            -204,
            327,
            15,
            365,
            191,
            -345,
            -345,
            56,
            217,
            60,
            -264,
            -248,
            -316,
            191,
            -189,
            -152,
            -296,
            194,
            -42,
            -21,
            -218,
            171,
            -15,
            301,
            37,
            -167,
            18,
            248,
            -263,
            27,
            14,
            59,
            219,
            -284,
            221,
            -76,
            277,
            183,
            200,
            -12,
            -28,
            -79,
            150,
            320,
            -152,
            -15,
            -42,
            -125,
            -4,
            269,
            290,
            52,
            320,
            344,
            13,
            -69,
            255,
            -154,
            -281,
            158,
            25,
            240,
            -339,
            96,
            204,
            324,
            221,
            37,
            -333,
            87,
            354,
            -365,
            -203,
            -341,
            -79,
            -208,
            135,
            132,
            -351,
            39,
            -87,
            -297,
            -66,
            346,
            69,
            -177,
            235,
            295,
            -366,
            -55,
            -297,
            -308,
            -294,
            -208,
            141,
            267,
            64,
            100,
            -355,
            -335,
            280,
            224,
            259,
            1,
            -146,
            48,
            335,
            363,
            308,
            -224,
            109,
            -10,
            -89,
            -211,
            -47,
            -130,
            341,
            -250,
            295,
            -329,
            -205,
            231,
            247,
            -228,
            166,
            -28,
            36,
            277,
            -115,
            100,
            2,
            81,
            -66,
            31,
            -39,
            -319,
            -251,
            -254,
          ],
          timezone: "Asia/Ho_Chi_Minh",
          weekStart: "TU",
        },
      ],
      startAt: "2020-05-24T16:23:11.045Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-07-01T02:21:21.457Z",
      webUrl: "https://another-pinstripe.com",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventUpdateCalendarEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCalendarEventRequest](../../sdk/models/operations/updatecalendareventrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarEvent](../../sdk/models/shared/calendarevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCdpEvent

Updates the CdpEvent identified by `id`. Provide the unified CdpEvent fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCdpEvent" method="put" path="/cdp/{connection_id}/event/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.updateCdpEvent({
    cdpEvent: {},
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
import { eventUpdateCdpEvent } from "@unified-api/typescript-sdk/funcs/eventUpdateCdpEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventUpdateCdpEvent(unifiedTo, {
    cdpEvent: {},
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventUpdateCdpEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCdpEventRequest](../../sdk/models/operations/updatecdpeventrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CdpEvent](../../sdk/models/shared/cdpevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCrmEvent

Updates the CrmEvent identified by `id`. Provide the unified CrmEvent fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCrmEvent" method="put" path="/crm/{connection_id}/event/{id}" example="crm_event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.updateCrmEvent({
    crmEvent: {
      call: {
        description: "Arbitro aptus.",
        duration: 64,
        startAt: new Date("2024-12-15T22:17:41.807Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "200a9900-af13-45f0-8d21-dbf40e348dd8",
      metadata: [],
      type: "CALL",
      updatedAt: new Date("2026-10-18T11:15:00.232Z"),
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
import { eventUpdateCrmEvent } from "@unified-api/typescript-sdk/funcs/eventUpdateCrmEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventUpdateCrmEvent(unifiedTo, {
    crmEvent: {
      call: {
        description: "Arbitro aptus.",
        duration: 64,
        startAt: new Date("2024-12-15T22:17:41.807Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "200a9900-af13-45f0-8d21-dbf40e348dd8",
      metadata: [],
      type: "CALL",
      updatedAt: new Date("2026-10-18T11:15:00.232Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventUpdateCrmEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCrmEventRequest](../../sdk/models/operations/updatecrmeventrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmEvent](../../sdk/models/shared/crmevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateMessagingEvent

Updates the MessagingEvent identified by `id`. Provide the unified MessagingEvent fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateMessagingEvent" method="put" path="/messaging/{connection_id}/event/{id}" example="messaging_event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.event.updateMessagingEvent({
    messagingEvent: {
      channel: {
        id: "",
        name: "",
      },
      createdAt: new Date("2019-05-30T19:44:46.461Z"),
      id: "b5b7bf6f-77cd-462d-a5b2-a0fd2fdb2a7d",
      isReplacingOriginal: false,
      metadata: [],
      type: "BUTTON_CLICK",
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
import { eventUpdateMessagingEvent } from "@unified-api/typescript-sdk/funcs/eventUpdateMessagingEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventUpdateMessagingEvent(unifiedTo, {
    messagingEvent: {
      channel: {
        id: "",
        name: "",
      },
      createdAt: new Date("2019-05-30T19:44:46.461Z"),
      id: "b5b7bf6f-77cd-462d-a5b2-a0fd2fdb2a7d",
      isReplacingOriginal: false,
      metadata: [],
      type: "BUTTON_CLICK",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventUpdateMessagingEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateMessagingEventRequest](../../sdk/models/operations/updatemessagingeventrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MessagingEvent](../../sdk/models/shared/messagingevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |