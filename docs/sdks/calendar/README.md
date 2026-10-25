# Calendar

## Overview

### Available Operations

* [createCalendarCalendar](#createcalendarcalendar) - Create a calendar
* [createCalendarEvent](#createcalendarevent) - Create an event
* [createCalendarLink](#createcalendarlink) - Create a link
* [createCalendarWebinar](#createcalendarwebinar) - Create a webinar
* [getCalendarCalendar](#getcalendarcalendar) - Retrieve a calendar
* [getCalendarEvent](#getcalendarevent) - Retrieve an event
* [getCalendarLink](#getcalendarlink) - Retrieve a link
* [getCalendarRecording](#getcalendarrecording) - Retrieve a recording
* [getCalendarWebinar](#getcalendarwebinar) - Retrieve a webinar
* [listCalendarBusies](#listcalendarbusies) - List all busies
* [listCalendarCalendars](#listcalendarcalendars) - List all calendars
* [listCalendarEvents](#listcalendarevents) - List all events
* [listCalendarLinks](#listcalendarlinks) - List all links
* [listCalendarRecordings](#listcalendarrecordings) - List all recordings
* [listCalendarWebinars](#listcalendarwebinars) - List all webinars
* [patchCalendarCalendar](#patchcalendarcalendar) - Update a calendar
* [patchCalendarEvent](#patchcalendarevent) - Update an event
* [patchCalendarLink](#patchcalendarlink) - Update a link
* [patchCalendarWebinar](#patchcalendarwebinar) - Update a webinar
* [removeCalendarCalendar](#removecalendarcalendar) - Remove a calendar
* [removeCalendarEvent](#removecalendarevent) - Remove an event
* [removeCalendarLink](#removecalendarlink) - Remove a link
* [removeCalendarWebinar](#removecalendarwebinar) - Remove a webinar
* [updateCalendarCalendar](#updatecalendarcalendar) - Update a calendar
* [updateCalendarEvent](#updatecalendarevent) - Update an event
* [updateCalendarLink](#updatecalendarlink) - Update a link
* [updateCalendarWebinar](#updatecalendarwebinar) - Update a webinar

## createCalendarCalendar

Creates a CalendarCalendar. Provide the unified CalendarCalendar fields in the request body; they are mapped to the provider's API. Returns the created CalendarCalendar.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCalendarCalendar" method="post" path="/calendar/{connection_id}/calendar" example="calendar_calendar" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.createCalendarCalendar({
    calendarCalendar: {
      createdAt: new Date("2020-01-09T23:11:34.147Z"),
      description: "Acer supra vallum suasoria thesaurus.",
      id: "5c8dbfc9-5029-4e51-9295-c6b705590d30",
      isPrimary: false,
      metadata: [],
      name: "Interviews",
      timezone: "Asia/Kolkata",
      updatedAt: new Date("2023-03-29T23:20:52.706Z"),
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
import { calendarCreateCalendarCalendar } from "@unified-api/typescript-sdk/funcs/calendarCreateCalendarCalendar.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarCreateCalendarCalendar(unifiedTo, {
    calendarCalendar: {
      createdAt: new Date("2020-01-09T23:11:34.147Z"),
      description: "Acer supra vallum suasoria thesaurus.",
      id: "5c8dbfc9-5029-4e51-9295-c6b705590d30",
      isPrimary: false,
      metadata: [],
      name: "Interviews",
      timezone: "Asia/Kolkata",
      updatedAt: new Date("2023-03-29T23:20:52.706Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarCreateCalendarCalendar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCalendarCalendarRequest](../../sdk/models/operations/createcalendarcalendarrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarCalendar](../../sdk/models/shared/calendarcalendar.md)\>**

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
  const result = await unifiedTo.calendar.createCalendarEvent({
    calendarEvent: {
      attachments: [],
      conference: [],
      createdAt: "2019-08-04T14:33:51.814Z",
      endAt: "2020-05-24T17:20:55.109Z",
      hasConference: false,
      id: "44f33fbe-333c-432b-828a-e5b2a3c61f9d",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      metadata: [],
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 4,
          endAt: new Date("2025-03-27T16:06:17.367Z"),
          excludedDates: [
            "2024-02-05T04:33:12.692Z",
          ],
          frequency: "YEARLY",
          includedDates: [
            "2023-07-09T03:51:04.355Z",
            "2025-01-26T19:59:32.619Z",
            "2024-04-04T11:33:44.945Z",
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
      startAt: "2020-05-24T08:06:29.202Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-06-30T17:01:27.914Z",
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
      endAt: "2020-05-24T17:20:55.109Z",
      hasConference: false,
      id: "44f33fbe-333c-432b-828a-e5b2a3c61f9d",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      metadata: [],
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 4,
          endAt: new Date("2025-03-27T16:06:17.367Z"),
          excludedDates: [
            "2024-02-05T04:33:12.692Z",
          ],
          frequency: "YEARLY",
          includedDates: [
            "2023-07-09T03:51:04.355Z",
            "2025-01-26T19:59:32.619Z",
            "2024-04-04T11:33:44.945Z",
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
      startAt: "2020-05-24T08:06:29.202Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-06-30T17:01:27.914Z",
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

## createCalendarLink

Creates a CalendarLink. Provide the unified CalendarLink fields in the request body; they are mapped to the provider's API. Returns the created CalendarLink.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCalendarLink" method="post" path="/calendar/{connection_id}/link" example="calendar_link" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.createCalendarLink({
    calendarLink: {
      createdAt: "2023-03-07T13:34:11.959Z",
      description: "Vitium clibanus laboriosam uxor denuncio.",
      duration: 74,
      id: "16b1076f-1118-40a6-b545-158b503be9ab",
      isActive: true,
      metadata: [],
      name: "Sopor sopor ancilla animus anser dignissimos vito confero utilis.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-16T15:12:56.333Z",
      url: "https://annual-apricot.info/",
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
import { calendarCreateCalendarLink } from "@unified-api/typescript-sdk/funcs/calendarCreateCalendarLink.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarCreateCalendarLink(unifiedTo, {
    calendarLink: {
      createdAt: "2023-03-07T13:34:11.959Z",
      description: "Vitium clibanus laboriosam uxor denuncio.",
      duration: 74,
      id: "16b1076f-1118-40a6-b545-158b503be9ab",
      isActive: true,
      metadata: [],
      name: "Sopor sopor ancilla animus anser dignissimos vito confero utilis.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-16T15:12:56.333Z",
      url: "https://annual-apricot.info/",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarCreateCalendarLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCalendarLinkRequest](../../sdk/models/operations/createcalendarlinkrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarLink](../../sdk/models/shared/calendarlink.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createCalendarWebinar

Creates a CalendarWebinar. Provide the unified CalendarWebinar fields in the request body; they are mapped to the provider's API. Returns the created CalendarWebinar.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCalendarWebinar" method="post" path="/calendar/{connection_id}/webinar" example="calendar_webinar" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.createCalendarWebinar({
    calendarWebinar: {
      conference: [],
      createdAt: new Date("2022-07-06T11:45:14.631Z"),
      endAt: new Date("2025-10-31T16:54:01.010Z"),
      hasPolls: false,
      hasRecording: false,
      id: "3efb655c-d6ef-4576-9597-4790efce4ec3",
      isAutoApprove: false,
      isEnabled: true,
      isWebcast: false,
      joinUrl: "https://nutritious-crocodile.com",
      metadata: [],
      notes: "Curriculum ducimus assentator aspernatur ait.",
      recurrence: [
        {
          count: 10,
          endAt: new Date("2023-09-01T15:42:03.817Z"),
          excludedDates: [
            "2025-02-15T08:54:19.473Z",
          ],
          frequency: "MONTHLY",
          includedDates: [
            "2024-04-29T21:54:32.049Z",
          ],
          interval: 8,
          onDays: [
            "SU",
            "FR",
            "SA",
            "WE",
            "MO",
          ],
          onMonthDays: [
            -10,
          ],
          onMonths: [
            -9,
          ],
          onWeeks: [
            10,
            30,
            -38,
            30,
            -22,
            37,
            -12,
            27,
            2,
            15,
            26,
            18,
            -43,
            -33,
            -27,
            38,
            28,
            47,
            -8,
            24,
            35,
            -2,
            7,
            49,
            38,
            -41,
            46,
            -11,
            -45,
            0,
            48,
            34,
          ],
          onYearDays: [
            345,
            -207,
            230,
            -10,
            364,
            -256,
            -218,
            -295,
            290,
            -250,
            -315,
            60,
            205,
            -247,
            -318,
            -211,
            -13,
            256,
            -200,
            -313,
            336,
            -332,
            -90,
            287,
            -273,
            156,
            241,
            -138,
            -363,
            -37,
            -171,
            -62,
            -57,
            280,
            -322,
            -79,
            -364,
            -201,
            84,
            341,
            334,
            -75,
            332,
            207,
            337,
            -244,
            131,
            -191,
            164,
            -235,
            285,
            -309,
            -158,
            306,
            180,
            -130,
            -162,
            -155,
            3,
            198,
            26,
            -366,
            -191,
            127,
            -331,
            -11,
            -239,
            -189,
            243,
            118,
            346,
            -174,
            -146,
            -161,
            -330,
            327,
            192,
            310,
            316,
            313,
            -242,
            -51,
            -264,
            -180,
            -88,
            305,
            270,
            358,
            -173,
            -298,
            153,
            -89,
            155,
            -45,
            248,
            -46,
            -146,
            300,
            364,
            -335,
            356,
            -18,
            219,
            324,
            -239,
            -106,
            -298,
            328,
            362,
            344,
            -54,
            133,
            50,
            112,
            -212,
            -179,
            22,
            -201,
            -62,
            -293,
            9,
            30,
            -50,
            126,
            -72,
            264,
            28,
            -1,
            -207,
            160,
            -168,
            3,
            -176,
            -19,
            -157,
            349,
            100,
            -201,
            108,
            -180,
            51,
            -73,
            366,
            74,
            -226,
            238,
            121,
            -193,
            -125,
            -109,
            316,
            -177,
            -307,
            31,
            -76,
            217,
            -310,
            227,
            -360,
            71,
            255,
            -325,
            -214,
            40,
            42,
            17,
            -241,
            -84,
            -188,
            302,
            64,
            94,
            -362,
            23,
            166,
            85,
            71,
            -74,
            -47,
            -119,
            98,
            40,
            158,
            -64,
            175,
            269,
            127,
            -143,
            213,
            -196,
            121,
            81,
            -238,
            288,
            321,
            276,
            133,
            22,
            -213,
            -157,
            -280,
            -35,
            73,
            -194,
            65,
            -180,
            63,
            -242,
            -117,
            148,
            157,
            -320,
            318,
            8,
            210,
            -21,
            81,
            205,
            -258,
            -40,
            -114,
            -253,
            -263,
            65,
            185,
            -24,
            324,
            -172,
            25,
            260,
            211,
            342,
            -31,
            -288,
            -159,
            -4,
            -2,
            -107,
            -316,
            -276,
            331,
            -114,
            -20,
            -320,
            51,
            -176,
            -148,
            -50,
            -201,
            -104,
            153,
            -273,
            -189,
            67,
            209,
            149,
            49,
            -136,
            -125,
            -169,
            -324,
            309,
            -51,
            288,
            253,
            175,
            -146,
            171,
            -140,
            58,
            -212,
            164,
            270,
            102,
            70,
            299,
            89,
            -280,
            252,
            -342,
            240,
            226,
            68,
            -30,
            -232,
            -358,
            -166,
            60,
            140,
            275,
            13,
            250,
            -328,
            -189,
            -22,
            7,
            -235,
            -322,
            178,
            167,
            -104,
            -61,
            282,
            -80,
            -277,
            108,
            271,
            -237,
            297,
            -135,
            -135,
            -323,
            342,
            -267,
            -235,
            173,
            249,
            -288,
            257,
            139,
            -191,
            -217,
            10,
            -117,
            -297,
            -196,
            -206,
            341,
            166,
            181,
            129,
            -207,
            55,
            86,
          ],
          timezone: "Africa/Abidjan",
          weekStart: "MO",
        },
        {
          count: 3,
          endAt: new Date("2022-09-30T21:19:19.857Z"),
          excludedDates: [
            "2024-09-03T16:42:01.590Z",
            "2024-08-19T02:48:52.392Z",
          ],
          frequency: "DAILY",
          includedDates: [
            "2024-03-26T17:18:27.492Z",
            "2026-01-16T13:45:12.450Z",
            "2023-08-15T06:14:22.856Z",
          ],
          interval: 1,
          onDays: [
            "WE",
            "SU",
            "MO",
            "FR",
          ],
          onMonthDays: [
            -15,
          ],
          onMonths: [
            5,
            12,
            3,
            12,
            8,
          ],
          onWeeks: [
            -47,
            44,
          ],
          onYearDays: [
            -117,
            59,
            -6,
            187,
            45,
            70,
            15,
            255,
            44,
            -2,
            25,
            -175,
            -240,
            171,
            -294,
            19,
            38,
            -351,
            170,
            -10,
            -269,
            18,
            -65,
            -266,
            -31,
            328,
            -361,
            358,
            -256,
            -4,
            -312,
            82,
            -2,
            -75,
            -281,
            -304,
            53,
            -295,
            366,
            322,
            -191,
            26,
            97,
            53,
            75,
            -62,
            -109,
            66,
            177,
            -68,
            175,
            -280,
            70,
            -238,
            109,
            -304,
            326,
            -8,
            -71,
            -236,
            225,
            358,
            20,
            -5,
            -102,
            -134,
            -204,
            -116,
            -353,
            -273,
            106,
            284,
            -137,
            -324,
            301,
            -42,
            -229,
            271,
            -293,
            -343,
            211,
            47,
            -254,
            -154,
            -182,
            264,
            120,
            -11,
            -307,
            99,
            227,
            190,
            -17,
            -77,
            -255,
            -61,
            -249,
            -102,
            70,
            345,
            -187,
            -308,
            194,
            221,
            268,
            -169,
            -190,
            88,
            10,
            262,
            177,
            -314,
            -151,
            -295,
          ],
          timezone: "Asia/Choibalsan",
          weekStart: "TU",
        },
        {
          count: 8,
          endAt: new Date("2026-07-30T04:22:10.140Z"),
          excludedDates: [
            "2023-06-19T11:00:35.327Z",
            "2023-06-08T11:12:11.005Z",
          ],
          frequency: "WEEKLY",
          includedDates: [
            "2024-04-03T18:39:16.518Z",
            "2023-08-21T02:00:36.797Z",
            "2024-09-28T22:58:20.015Z",
          ],
          interval: 8,
          onDays: [
            "SU",
            "MO",
            "TU",
            "FR",
            "MO",
            "TH",
          ],
          onMonthDays: [
            -23,
          ],
          onMonths: [
            11,
            8,
            9,
            5,
            -12,
            -7,
            -5,
            10,
            10,
            -9,
            -10,
          ],
          onWeeks: [
            -49,
            46,
            35,
            -26,
            2,
            15,
            15,
            -26,
            24,
            -53,
            36,
            -43,
            51,
            -19,
            -7,
            -12,
            28,
            27,
            35,
            12,
            -28,
            -8,
            -4,
            -45,
          ],
          onYearDays: [
            84,
            -251,
            71,
            181,
            -163,
            158,
            301,
            -299,
            -184,
            -331,
            -152,
            -129,
            -237,
            -303,
            -24,
            126,
            -103,
            146,
            -346,
            86,
            -296,
            -337,
            -185,
            16,
            -270,
            -126,
            -295,
            -231,
            356,
            -293,
            115,
            -265,
            -293,
            -34,
            357,
            313,
            -343,
            180,
            -22,
            -161,
            350,
            177,
            190,
            223,
            -152,
            -360,
            -225,
            -60,
            -35,
            353,
            117,
            -171,
            -315,
            -321,
            -202,
            345,
            -1,
            -148,
            -168,
            181,
            -17,
            282,
            234,
            31,
            47,
            -236,
            366,
            -251,
            -232,
            -308,
            76,
            -199,
            184,
            198,
            225,
            75,
            6,
            227,
            -148,
            259,
            -146,
            49,
            -254,
            341,
            93,
            138,
            -164,
            237,
            4,
            -287,
            161,
          ],
          timezone: "Asia/Krasnoyarsk",
          weekStart: "WE",
        },
      ],
      registrantPassword: "W7J6DhkM",
      requireAddress: false,
      requireJobTitle: false,
      startAt: new Date("2025-05-03T02:38:40.672Z"),
      status: "TENTATIVE",
      subject: "Harum culpa decipio ex cubo ancilla cresco.",
      timezone: "Europe/Kaliningrad",
      updatedAt: new Date("2026-10-04T07:32:19.230Z"),
      webUrl: "https://quiet-permafrost.name",
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
import { calendarCreateCalendarWebinar } from "@unified-api/typescript-sdk/funcs/calendarCreateCalendarWebinar.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarCreateCalendarWebinar(unifiedTo, {
    calendarWebinar: {
      conference: [],
      createdAt: new Date("2022-07-06T11:45:14.631Z"),
      endAt: new Date("2025-10-31T16:54:01.010Z"),
      hasPolls: false,
      hasRecording: false,
      id: "3efb655c-d6ef-4576-9597-4790efce4ec3",
      isAutoApprove: false,
      isEnabled: true,
      isWebcast: false,
      joinUrl: "https://nutritious-crocodile.com",
      metadata: [],
      notes: "Curriculum ducimus assentator aspernatur ait.",
      recurrence: [
        {
          count: 10,
          endAt: new Date("2023-09-01T15:42:03.817Z"),
          excludedDates: [
            "2025-02-15T08:54:19.473Z",
          ],
          frequency: "MONTHLY",
          includedDates: [
            "2024-04-29T21:54:32.049Z",
          ],
          interval: 8,
          onDays: [
            "SU",
            "FR",
            "SA",
            "WE",
            "MO",
          ],
          onMonthDays: [
            -10,
          ],
          onMonths: [
            -9,
          ],
          onWeeks: [
            10,
            30,
            -38,
            30,
            -22,
            37,
            -12,
            27,
            2,
            15,
            26,
            18,
            -43,
            -33,
            -27,
            38,
            28,
            47,
            -8,
            24,
            35,
            -2,
            7,
            49,
            38,
            -41,
            46,
            -11,
            -45,
            0,
            48,
            34,
          ],
          onYearDays: [
            345,
            -207,
            230,
            -10,
            364,
            -256,
            -218,
            -295,
            290,
            -250,
            -315,
            60,
            205,
            -247,
            -318,
            -211,
            -13,
            256,
            -200,
            -313,
            336,
            -332,
            -90,
            287,
            -273,
            156,
            241,
            -138,
            -363,
            -37,
            -171,
            -62,
            -57,
            280,
            -322,
            -79,
            -364,
            -201,
            84,
            341,
            334,
            -75,
            332,
            207,
            337,
            -244,
            131,
            -191,
            164,
            -235,
            285,
            -309,
            -158,
            306,
            180,
            -130,
            -162,
            -155,
            3,
            198,
            26,
            -366,
            -191,
            127,
            -331,
            -11,
            -239,
            -189,
            243,
            118,
            346,
            -174,
            -146,
            -161,
            -330,
            327,
            192,
            310,
            316,
            313,
            -242,
            -51,
            -264,
            -180,
            -88,
            305,
            270,
            358,
            -173,
            -298,
            153,
            -89,
            155,
            -45,
            248,
            -46,
            -146,
            300,
            364,
            -335,
            356,
            -18,
            219,
            324,
            -239,
            -106,
            -298,
            328,
            362,
            344,
            -54,
            133,
            50,
            112,
            -212,
            -179,
            22,
            -201,
            -62,
            -293,
            9,
            30,
            -50,
            126,
            -72,
            264,
            28,
            -1,
            -207,
            160,
            -168,
            3,
            -176,
            -19,
            -157,
            349,
            100,
            -201,
            108,
            -180,
            51,
            -73,
            366,
            74,
            -226,
            238,
            121,
            -193,
            -125,
            -109,
            316,
            -177,
            -307,
            31,
            -76,
            217,
            -310,
            227,
            -360,
            71,
            255,
            -325,
            -214,
            40,
            42,
            17,
            -241,
            -84,
            -188,
            302,
            64,
            94,
            -362,
            23,
            166,
            85,
            71,
            -74,
            -47,
            -119,
            98,
            40,
            158,
            -64,
            175,
            269,
            127,
            -143,
            213,
            -196,
            121,
            81,
            -238,
            288,
            321,
            276,
            133,
            22,
            -213,
            -157,
            -280,
            -35,
            73,
            -194,
            65,
            -180,
            63,
            -242,
            -117,
            148,
            157,
            -320,
            318,
            8,
            210,
            -21,
            81,
            205,
            -258,
            -40,
            -114,
            -253,
            -263,
            65,
            185,
            -24,
            324,
            -172,
            25,
            260,
            211,
            342,
            -31,
            -288,
            -159,
            -4,
            -2,
            -107,
            -316,
            -276,
            331,
            -114,
            -20,
            -320,
            51,
            -176,
            -148,
            -50,
            -201,
            -104,
            153,
            -273,
            -189,
            67,
            209,
            149,
            49,
            -136,
            -125,
            -169,
            -324,
            309,
            -51,
            288,
            253,
            175,
            -146,
            171,
            -140,
            58,
            -212,
            164,
            270,
            102,
            70,
            299,
            89,
            -280,
            252,
            -342,
            240,
            226,
            68,
            -30,
            -232,
            -358,
            -166,
            60,
            140,
            275,
            13,
            250,
            -328,
            -189,
            -22,
            7,
            -235,
            -322,
            178,
            167,
            -104,
            -61,
            282,
            -80,
            -277,
            108,
            271,
            -237,
            297,
            -135,
            -135,
            -323,
            342,
            -267,
            -235,
            173,
            249,
            -288,
            257,
            139,
            -191,
            -217,
            10,
            -117,
            -297,
            -196,
            -206,
            341,
            166,
            181,
            129,
            -207,
            55,
            86,
          ],
          timezone: "Africa/Abidjan",
          weekStart: "MO",
        },
        {
          count: 3,
          endAt: new Date("2022-09-30T21:19:19.857Z"),
          excludedDates: [
            "2024-09-03T16:42:01.590Z",
            "2024-08-19T02:48:52.392Z",
          ],
          frequency: "DAILY",
          includedDates: [
            "2024-03-26T17:18:27.492Z",
            "2026-01-16T13:45:12.450Z",
            "2023-08-15T06:14:22.856Z",
          ],
          interval: 1,
          onDays: [
            "WE",
            "SU",
            "MO",
            "FR",
          ],
          onMonthDays: [
            -15,
          ],
          onMonths: [
            5,
            12,
            3,
            12,
            8,
          ],
          onWeeks: [
            -47,
            44,
          ],
          onYearDays: [
            -117,
            59,
            -6,
            187,
            45,
            70,
            15,
            255,
            44,
            -2,
            25,
            -175,
            -240,
            171,
            -294,
            19,
            38,
            -351,
            170,
            -10,
            -269,
            18,
            -65,
            -266,
            -31,
            328,
            -361,
            358,
            -256,
            -4,
            -312,
            82,
            -2,
            -75,
            -281,
            -304,
            53,
            -295,
            366,
            322,
            -191,
            26,
            97,
            53,
            75,
            -62,
            -109,
            66,
            177,
            -68,
            175,
            -280,
            70,
            -238,
            109,
            -304,
            326,
            -8,
            -71,
            -236,
            225,
            358,
            20,
            -5,
            -102,
            -134,
            -204,
            -116,
            -353,
            -273,
            106,
            284,
            -137,
            -324,
            301,
            -42,
            -229,
            271,
            -293,
            -343,
            211,
            47,
            -254,
            -154,
            -182,
            264,
            120,
            -11,
            -307,
            99,
            227,
            190,
            -17,
            -77,
            -255,
            -61,
            -249,
            -102,
            70,
            345,
            -187,
            -308,
            194,
            221,
            268,
            -169,
            -190,
            88,
            10,
            262,
            177,
            -314,
            -151,
            -295,
          ],
          timezone: "Asia/Choibalsan",
          weekStart: "TU",
        },
        {
          count: 8,
          endAt: new Date("2026-07-30T04:22:10.140Z"),
          excludedDates: [
            "2023-06-19T11:00:35.327Z",
            "2023-06-08T11:12:11.005Z",
          ],
          frequency: "WEEKLY",
          includedDates: [
            "2024-04-03T18:39:16.518Z",
            "2023-08-21T02:00:36.797Z",
            "2024-09-28T22:58:20.015Z",
          ],
          interval: 8,
          onDays: [
            "SU",
            "MO",
            "TU",
            "FR",
            "MO",
            "TH",
          ],
          onMonthDays: [
            -23,
          ],
          onMonths: [
            11,
            8,
            9,
            5,
            -12,
            -7,
            -5,
            10,
            10,
            -9,
            -10,
          ],
          onWeeks: [
            -49,
            46,
            35,
            -26,
            2,
            15,
            15,
            -26,
            24,
            -53,
            36,
            -43,
            51,
            -19,
            -7,
            -12,
            28,
            27,
            35,
            12,
            -28,
            -8,
            -4,
            -45,
          ],
          onYearDays: [
            84,
            -251,
            71,
            181,
            -163,
            158,
            301,
            -299,
            -184,
            -331,
            -152,
            -129,
            -237,
            -303,
            -24,
            126,
            -103,
            146,
            -346,
            86,
            -296,
            -337,
            -185,
            16,
            -270,
            -126,
            -295,
            -231,
            356,
            -293,
            115,
            -265,
            -293,
            -34,
            357,
            313,
            -343,
            180,
            -22,
            -161,
            350,
            177,
            190,
            223,
            -152,
            -360,
            -225,
            -60,
            -35,
            353,
            117,
            -171,
            -315,
            -321,
            -202,
            345,
            -1,
            -148,
            -168,
            181,
            -17,
            282,
            234,
            31,
            47,
            -236,
            366,
            -251,
            -232,
            -308,
            76,
            -199,
            184,
            198,
            225,
            75,
            6,
            227,
            -148,
            259,
            -146,
            49,
            -254,
            341,
            93,
            138,
            -164,
            237,
            4,
            -287,
            161,
          ],
          timezone: "Asia/Krasnoyarsk",
          weekStart: "WE",
        },
      ],
      registrantPassword: "W7J6DhkM",
      requireAddress: false,
      requireJobTitle: false,
      startAt: new Date("2025-05-03T02:38:40.672Z"),
      status: "TENTATIVE",
      subject: "Harum culpa decipio ex cubo ancilla cresco.",
      timezone: "Europe/Kaliningrad",
      updatedAt: new Date("2026-10-04T07:32:19.230Z"),
      webUrl: "https://quiet-permafrost.name",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarCreateCalendarWebinar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCalendarWebinarRequest](../../sdk/models/operations/createcalendarwebinarrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarWebinar](../../sdk/models/shared/calendarwebinar.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCalendarCalendar

Retrieves a single CalendarCalendar by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCalendarCalendar" method="get" path="/calendar/{connection_id}/calendar/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.getCalendarCalendar({
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
import { calendarGetCalendarCalendar } from "@unified-api/typescript-sdk/funcs/calendarGetCalendarCalendar.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarGetCalendarCalendar(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarGetCalendarCalendar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCalendarCalendarRequest](../../sdk/models/operations/getcalendarcalendarrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarCalendar](../../sdk/models/shared/calendarcalendar.md)\>**

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
  const result = await unifiedTo.calendar.getCalendarEvent({
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

## getCalendarLink

Retrieves a single CalendarLink by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCalendarLink" method="get" path="/calendar/{connection_id}/link/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.getCalendarLink({
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
import { calendarGetCalendarLink } from "@unified-api/typescript-sdk/funcs/calendarGetCalendarLink.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarGetCalendarLink(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarGetCalendarLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCalendarLinkRequest](../../sdk/models/operations/getcalendarlinkrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarLink](../../sdk/models/shared/calendarlink.md)\>**

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
  const result = await unifiedTo.calendar.getCalendarRecording({
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

## getCalendarWebinar

Retrieves a single CalendarWebinar by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCalendarWebinar" method="get" path="/calendar/{connection_id}/webinar/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.getCalendarWebinar({
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
import { calendarGetCalendarWebinar } from "@unified-api/typescript-sdk/funcs/calendarGetCalendarWebinar.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarGetCalendarWebinar(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarGetCalendarWebinar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCalendarWebinarRequest](../../sdk/models/operations/getcalendarwebinarrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarWebinar](../../sdk/models/shared/calendarwebinar.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCalendarBusies

Returns a list of CalendarBusies. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCalendarBusies" method="get" path="/calendar/{connection_id}/busy" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.listCalendarBusies({
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
import { calendarListCalendarBusies } from "@unified-api/typescript-sdk/funcs/calendarListCalendarBusies.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarListCalendarBusies(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarListCalendarBusies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCalendarBusiesRequest](../../sdk/models/operations/listcalendarbusiesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarBusy[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCalendarCalendars

Returns a list of CalendarCalendars. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCalendarCalendars" method="get" path="/calendar/{connection_id}/calendar" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.listCalendarCalendars({
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
import { calendarListCalendarCalendars } from "@unified-api/typescript-sdk/funcs/calendarListCalendarCalendars.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarListCalendarCalendars(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarListCalendarCalendars failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCalendarCalendarsRequest](../../sdk/models/operations/listcalendarcalendarsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarCalendar[]](../../models/.md)\>**

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
  const result = await unifiedTo.calendar.listCalendarEvents({
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

## listCalendarLinks

Returns a list of CalendarLinks. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCalendarLinks" method="get" path="/calendar/{connection_id}/link" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.listCalendarLinks({
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
import { calendarListCalendarLinks } from "@unified-api/typescript-sdk/funcs/calendarListCalendarLinks.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarListCalendarLinks(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarListCalendarLinks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCalendarLinksRequest](../../sdk/models/operations/listcalendarlinksrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarLink[]](../../models/.md)\>**

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
  const result = await unifiedTo.calendar.listCalendarRecordings({
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

## listCalendarWebinars

Returns a list of CalendarWebinars. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCalendarWebinars" method="get" path="/calendar/{connection_id}/webinar" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.listCalendarWebinars({
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
import { calendarListCalendarWebinars } from "@unified-api/typescript-sdk/funcs/calendarListCalendarWebinars.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarListCalendarWebinars(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarListCalendarWebinars failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCalendarWebinarsRequest](../../sdk/models/operations/listcalendarwebinarsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarWebinar[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCalendarCalendar

Updates the CalendarCalendar identified by `id`. Provide the unified CalendarCalendar fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCalendarCalendar" method="patch" path="/calendar/{connection_id}/calendar/{id}" example="calendar_calendar" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.patchCalendarCalendar({
    calendarCalendar: {
      createdAt: new Date("2020-01-09T23:11:34.147Z"),
      description: "Acer supra vallum suasoria thesaurus.",
      id: "6d77e417-a5ef-4ab0-81db-5ee1cd271334",
      isPrimary: false,
      metadata: [],
      name: "Interviews",
      timezone: "Asia/Kolkata",
      updatedAt: new Date("2023-03-29T23:20:52.712Z"),
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
import { calendarPatchCalendarCalendar } from "@unified-api/typescript-sdk/funcs/calendarPatchCalendarCalendar.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarPatchCalendarCalendar(unifiedTo, {
    calendarCalendar: {
      createdAt: new Date("2020-01-09T23:11:34.147Z"),
      description: "Acer supra vallum suasoria thesaurus.",
      id: "6d77e417-a5ef-4ab0-81db-5ee1cd271334",
      isPrimary: false,
      metadata: [],
      name: "Interviews",
      timezone: "Asia/Kolkata",
      updatedAt: new Date("2023-03-29T23:20:52.712Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarPatchCalendarCalendar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCalendarCalendarRequest](../../sdk/models/operations/patchcalendarcalendarrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarCalendar](../../sdk/models/shared/calendarcalendar.md)\>**

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
  const result = await unifiedTo.calendar.patchCalendarEvent({
    calendarEvent: {
      attachments: [],
      conference: [],
      createdAt: "2019-08-04T14:33:51.814Z",
      endAt: "2020-05-24T17:20:55.114Z",
      hasConference: false,
      id: "8c1b9f43-d9c7-4759-9399-0c29229a62a1",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      metadata: [],
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 4,
          endAt: new Date("2025-03-27T16:06:17.399Z"),
          excludedDates: [
            "2024-02-05T04:33:12.717Z",
          ],
          frequency: "YEARLY",
          includedDates: [
            "2023-07-09T03:51:04.377Z",
            "2025-01-26T19:59:32.651Z",
            "2024-04-04T11:33:44.972Z",
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
      startAt: "2020-05-24T08:06:29.207Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-06-30T17:01:27.919Z",
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
      endAt: "2020-05-24T17:20:55.114Z",
      hasConference: false,
      id: "8c1b9f43-d9c7-4759-9399-0c29229a62a1",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      metadata: [],
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 4,
          endAt: new Date("2025-03-27T16:06:17.399Z"),
          excludedDates: [
            "2024-02-05T04:33:12.717Z",
          ],
          frequency: "YEARLY",
          includedDates: [
            "2023-07-09T03:51:04.377Z",
            "2025-01-26T19:59:32.651Z",
            "2024-04-04T11:33:44.972Z",
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
      startAt: "2020-05-24T08:06:29.207Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-06-30T17:01:27.919Z",
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

## patchCalendarLink

Updates the CalendarLink identified by `id`. Provide the unified CalendarLink fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCalendarLink" method="patch" path="/calendar/{connection_id}/link/{id}" example="calendar_link" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.patchCalendarLink({
    calendarLink: {
      createdAt: "2023-03-07T13:34:11.959Z",
      description: "Vitium clibanus laboriosam uxor denuncio.",
      duration: 74,
      id: "18a06bda-aed3-4269-9fa0-5b198e8bfc39",
      isActive: true,
      metadata: [],
      name: "Sopor sopor ancilla animus anser dignissimos vito confero utilis.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-16T15:12:56.335Z",
      url: "https://annual-apricot.info/",
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
import { calendarPatchCalendarLink } from "@unified-api/typescript-sdk/funcs/calendarPatchCalendarLink.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarPatchCalendarLink(unifiedTo, {
    calendarLink: {
      createdAt: "2023-03-07T13:34:11.959Z",
      description: "Vitium clibanus laboriosam uxor denuncio.",
      duration: 74,
      id: "18a06bda-aed3-4269-9fa0-5b198e8bfc39",
      isActive: true,
      metadata: [],
      name: "Sopor sopor ancilla animus anser dignissimos vito confero utilis.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-16T15:12:56.335Z",
      url: "https://annual-apricot.info/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarPatchCalendarLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCalendarLinkRequest](../../sdk/models/operations/patchcalendarlinkrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarLink](../../sdk/models/shared/calendarlink.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCalendarWebinar

Updates the CalendarWebinar identified by `id`. Provide the unified CalendarWebinar fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCalendarWebinar" method="patch" path="/calendar/{connection_id}/webinar/{id}" example="calendar_webinar" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.patchCalendarWebinar({
    calendarWebinar: {
      conference: [],
      createdAt: new Date("2022-07-06T11:45:14.631Z"),
      endAt: new Date("2025-10-31T16:54:01.042Z"),
      hasPolls: false,
      hasRecording: false,
      id: "25208f6d-b8e0-4df3-89f4-b45625c79e89",
      isAutoApprove: false,
      isEnabled: true,
      isWebcast: false,
      joinUrl: "https://nutritious-crocodile.com",
      metadata: [],
      notes: "Curriculum ducimus assentator aspernatur ait.",
      recurrence: [
        {
          count: 10,
          endAt: new Date("2023-09-01T15:42:03.828Z"),
          excludedDates: [
            "2025-02-15T08:54:19.498Z",
          ],
          frequency: "MONTHLY",
          includedDates: [
            "2024-04-29T21:54:32.066Z",
          ],
          interval: 8,
          onDays: [
            "SU",
            "FR",
            "SA",
            "WE",
            "MO",
          ],
          onMonthDays: [
            -10,
          ],
          onMonths: [
            -9,
          ],
          onWeeks: [
            10,
            30,
            -38,
            30,
            -22,
            37,
            -12,
            27,
            2,
            15,
            26,
            18,
            -43,
            -33,
            -27,
            38,
            28,
            47,
            -8,
            24,
            35,
            -2,
            7,
            49,
            38,
            -41,
            46,
            -11,
            -45,
            0,
            48,
            34,
          ],
          onYearDays: [
            345,
            -207,
            230,
            -10,
            364,
            -256,
            -218,
            -295,
            290,
            -250,
            -315,
            60,
            205,
            -247,
            -318,
            -211,
            -13,
            256,
            -200,
            -313,
            336,
            -332,
            -90,
            287,
            -273,
            156,
            241,
            -138,
            -363,
            -37,
            -171,
            -62,
            -57,
            280,
            -322,
            -79,
            -364,
            -201,
            84,
            341,
            334,
            -75,
            332,
            207,
            337,
            -244,
            131,
            -191,
            164,
            -235,
            285,
            -309,
            -158,
            306,
            180,
            -130,
            -162,
            -155,
            3,
            198,
            26,
            -366,
            -191,
            127,
            -331,
            -11,
            -239,
            -189,
            243,
            118,
            346,
            -174,
            -146,
            -161,
            -330,
            327,
            192,
            310,
            316,
            313,
            -242,
            -51,
            -264,
            -180,
            -88,
            305,
            270,
            358,
            -173,
            -298,
            153,
            -89,
            155,
            -45,
            248,
            -46,
            -146,
            300,
            364,
            -335,
            356,
            -18,
            219,
            324,
            -239,
            -106,
            -298,
            328,
            362,
            344,
            -54,
            133,
            50,
            112,
            -212,
            -179,
            22,
            -201,
            -62,
            -293,
            9,
            30,
            -50,
            126,
            -72,
            264,
            28,
            -1,
            -207,
            160,
            -168,
            3,
            -176,
            -19,
            -157,
            349,
            100,
            -201,
            108,
            -180,
            51,
            -73,
            366,
            74,
            -226,
            238,
            121,
            -193,
            -125,
            -109,
            316,
            -177,
            -307,
            31,
            -76,
            217,
            -310,
            227,
            -360,
            71,
            255,
            -325,
            -214,
            40,
            42,
            17,
            -241,
            -84,
            -188,
            302,
            64,
            94,
            -362,
            23,
            166,
            85,
            71,
            -74,
            -47,
            -119,
            98,
            40,
            158,
            -64,
            175,
            269,
            127,
            -143,
            213,
            -196,
            121,
            81,
            -238,
            288,
            321,
            276,
            133,
            22,
            -213,
            -157,
            -280,
            -35,
            73,
            -194,
            65,
            -180,
            63,
            -242,
            -117,
            148,
            157,
            -320,
            318,
            8,
            210,
            -21,
            81,
            205,
            -258,
            -40,
            -114,
            -253,
            -263,
            65,
            185,
            -24,
            324,
            -172,
            25,
            260,
            211,
            342,
            -31,
            -288,
            -159,
            -4,
            -2,
            -107,
            -316,
            -276,
            331,
            -114,
            -20,
            -320,
            51,
            -176,
            -148,
            -50,
            -201,
            -104,
            153,
            -273,
            -189,
            67,
            209,
            149,
            49,
            -136,
            -125,
            -169,
            -324,
            309,
            -51,
            288,
            253,
            175,
            -146,
            171,
            -140,
            58,
            -212,
            164,
            270,
            102,
            70,
            299,
            89,
            -280,
            252,
            -342,
            240,
            226,
            68,
            -30,
            -232,
            -358,
            -166,
            60,
            140,
            275,
            13,
            250,
            -328,
            -189,
            -22,
            7,
            -235,
            -322,
            178,
            167,
            -104,
            -61,
            282,
            -80,
            -277,
            108,
            271,
            -237,
            297,
            -135,
            -135,
            -323,
            342,
            -267,
            -235,
            173,
            249,
            -288,
            257,
            139,
            -191,
            -217,
            10,
            -117,
            -297,
            -196,
            -206,
            341,
            166,
            181,
            129,
            -207,
            55,
            86,
          ],
          timezone: "Africa/Abidjan",
          weekStart: "MO",
        },
        {
          count: 3,
          endAt: new Date("2022-09-30T21:19:19.859Z"),
          excludedDates: [
            "2024-09-03T16:42:01.611Z",
            "2024-08-19T02:48:52.412Z",
          ],
          frequency: "DAILY",
          includedDates: [
            "2024-03-26T17:18:27.508Z",
            "2026-01-16T13:45:12.483Z",
            "2023-08-15T06:14:22.867Z",
          ],
          interval: 1,
          onDays: [
            "WE",
            "SU",
            "MO",
            "FR",
          ],
          onMonthDays: [
            -15,
          ],
          onMonths: [
            5,
            12,
            3,
            12,
            8,
          ],
          onWeeks: [
            -47,
            44,
          ],
          onYearDays: [
            -117,
            59,
            -6,
            187,
            45,
            70,
            15,
            255,
            44,
            -2,
            25,
            -175,
            -240,
            171,
            -294,
            19,
            38,
            -351,
            170,
            -10,
            -269,
            18,
            -65,
            -266,
            -31,
            328,
            -361,
            358,
            -256,
            -4,
            -312,
            82,
            -2,
            -75,
            -281,
            -304,
            53,
            -295,
            366,
            322,
            -191,
            26,
            97,
            53,
            75,
            -62,
            -109,
            66,
            177,
            -68,
            175,
            -280,
            70,
            -238,
            109,
            -304,
            326,
            -8,
            -71,
            -236,
            225,
            358,
            20,
            -5,
            -102,
            -134,
            -204,
            -116,
            -353,
            -273,
            106,
            284,
            -137,
            -324,
            301,
            -42,
            -229,
            271,
            -293,
            -343,
            211,
            47,
            -254,
            -154,
            -182,
            264,
            120,
            -11,
            -307,
            99,
            227,
            190,
            -17,
            -77,
            -255,
            -61,
            -249,
            -102,
            70,
            345,
            -187,
            -308,
            194,
            221,
            268,
            -169,
            -190,
            88,
            10,
            262,
            177,
            -314,
            -151,
            -295,
          ],
          timezone: "Asia/Choibalsan",
          weekStart: "TU",
        },
        {
          count: 8,
          endAt: new Date("2026-07-30T04:22:10.180Z"),
          excludedDates: [
            "2023-06-19T11:00:35.337Z",
            "2023-06-08T11:12:11.014Z",
          ],
          frequency: "WEEKLY",
          includedDates: [
            "2024-04-03T18:39:16.535Z",
            "2023-08-21T02:00:36.808Z",
            "2024-09-28T22:58:20.037Z",
          ],
          interval: 8,
          onDays: [
            "SU",
            "MO",
            "TU",
            "FR",
            "MO",
            "TH",
          ],
          onMonthDays: [
            -23,
          ],
          onMonths: [
            11,
            8,
            9,
            5,
            -12,
            -7,
            -5,
            10,
            10,
            -9,
            -10,
          ],
          onWeeks: [
            -49,
            46,
            35,
            -26,
            2,
            15,
            15,
            -26,
            24,
            -53,
            36,
            -43,
            51,
            -19,
            -7,
            -12,
            28,
            27,
            35,
            12,
            -28,
            -8,
            -4,
            -45,
          ],
          onYearDays: [
            84,
            -251,
            71,
            181,
            -163,
            158,
            301,
            -299,
            -184,
            -331,
            -152,
            -129,
            -237,
            -303,
            -24,
            126,
            -103,
            146,
            -346,
            86,
            -296,
            -337,
            -185,
            16,
            -270,
            -126,
            -295,
            -231,
            356,
            -293,
            115,
            -265,
            -293,
            -34,
            357,
            313,
            -343,
            180,
            -22,
            -161,
            350,
            177,
            190,
            223,
            -152,
            -360,
            -225,
            -60,
            -35,
            353,
            117,
            -171,
            -315,
            -321,
            -202,
            345,
            -1,
            -148,
            -168,
            181,
            -17,
            282,
            234,
            31,
            47,
            -236,
            366,
            -251,
            -232,
            -308,
            76,
            -199,
            184,
            198,
            225,
            75,
            6,
            227,
            -148,
            259,
            -146,
            49,
            -254,
            341,
            93,
            138,
            -164,
            237,
            4,
            -287,
            161,
          ],
          timezone: "Asia/Krasnoyarsk",
          weekStart: "WE",
        },
      ],
      registrantPassword: "W7J6DhkM",
      requireAddress: false,
      requireJobTitle: false,
      startAt: new Date("2025-05-03T02:38:40.699Z"),
      status: "TENTATIVE",
      subject: "Harum culpa decipio ex cubo ancilla cresco.",
      timezone: "Europe/Kaliningrad",
      updatedAt: new Date("2026-10-04T07:32:19.271Z"),
      webUrl: "https://quiet-permafrost.name",
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
import { calendarPatchCalendarWebinar } from "@unified-api/typescript-sdk/funcs/calendarPatchCalendarWebinar.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarPatchCalendarWebinar(unifiedTo, {
    calendarWebinar: {
      conference: [],
      createdAt: new Date("2022-07-06T11:45:14.631Z"),
      endAt: new Date("2025-10-31T16:54:01.042Z"),
      hasPolls: false,
      hasRecording: false,
      id: "25208f6d-b8e0-4df3-89f4-b45625c79e89",
      isAutoApprove: false,
      isEnabled: true,
      isWebcast: false,
      joinUrl: "https://nutritious-crocodile.com",
      metadata: [],
      notes: "Curriculum ducimus assentator aspernatur ait.",
      recurrence: [
        {
          count: 10,
          endAt: new Date("2023-09-01T15:42:03.828Z"),
          excludedDates: [
            "2025-02-15T08:54:19.498Z",
          ],
          frequency: "MONTHLY",
          includedDates: [
            "2024-04-29T21:54:32.066Z",
          ],
          interval: 8,
          onDays: [
            "SU",
            "FR",
            "SA",
            "WE",
            "MO",
          ],
          onMonthDays: [
            -10,
          ],
          onMonths: [
            -9,
          ],
          onWeeks: [
            10,
            30,
            -38,
            30,
            -22,
            37,
            -12,
            27,
            2,
            15,
            26,
            18,
            -43,
            -33,
            -27,
            38,
            28,
            47,
            -8,
            24,
            35,
            -2,
            7,
            49,
            38,
            -41,
            46,
            -11,
            -45,
            0,
            48,
            34,
          ],
          onYearDays: [
            345,
            -207,
            230,
            -10,
            364,
            -256,
            -218,
            -295,
            290,
            -250,
            -315,
            60,
            205,
            -247,
            -318,
            -211,
            -13,
            256,
            -200,
            -313,
            336,
            -332,
            -90,
            287,
            -273,
            156,
            241,
            -138,
            -363,
            -37,
            -171,
            -62,
            -57,
            280,
            -322,
            -79,
            -364,
            -201,
            84,
            341,
            334,
            -75,
            332,
            207,
            337,
            -244,
            131,
            -191,
            164,
            -235,
            285,
            -309,
            -158,
            306,
            180,
            -130,
            -162,
            -155,
            3,
            198,
            26,
            -366,
            -191,
            127,
            -331,
            -11,
            -239,
            -189,
            243,
            118,
            346,
            -174,
            -146,
            -161,
            -330,
            327,
            192,
            310,
            316,
            313,
            -242,
            -51,
            -264,
            -180,
            -88,
            305,
            270,
            358,
            -173,
            -298,
            153,
            -89,
            155,
            -45,
            248,
            -46,
            -146,
            300,
            364,
            -335,
            356,
            -18,
            219,
            324,
            -239,
            -106,
            -298,
            328,
            362,
            344,
            -54,
            133,
            50,
            112,
            -212,
            -179,
            22,
            -201,
            -62,
            -293,
            9,
            30,
            -50,
            126,
            -72,
            264,
            28,
            -1,
            -207,
            160,
            -168,
            3,
            -176,
            -19,
            -157,
            349,
            100,
            -201,
            108,
            -180,
            51,
            -73,
            366,
            74,
            -226,
            238,
            121,
            -193,
            -125,
            -109,
            316,
            -177,
            -307,
            31,
            -76,
            217,
            -310,
            227,
            -360,
            71,
            255,
            -325,
            -214,
            40,
            42,
            17,
            -241,
            -84,
            -188,
            302,
            64,
            94,
            -362,
            23,
            166,
            85,
            71,
            -74,
            -47,
            -119,
            98,
            40,
            158,
            -64,
            175,
            269,
            127,
            -143,
            213,
            -196,
            121,
            81,
            -238,
            288,
            321,
            276,
            133,
            22,
            -213,
            -157,
            -280,
            -35,
            73,
            -194,
            65,
            -180,
            63,
            -242,
            -117,
            148,
            157,
            -320,
            318,
            8,
            210,
            -21,
            81,
            205,
            -258,
            -40,
            -114,
            -253,
            -263,
            65,
            185,
            -24,
            324,
            -172,
            25,
            260,
            211,
            342,
            -31,
            -288,
            -159,
            -4,
            -2,
            -107,
            -316,
            -276,
            331,
            -114,
            -20,
            -320,
            51,
            -176,
            -148,
            -50,
            -201,
            -104,
            153,
            -273,
            -189,
            67,
            209,
            149,
            49,
            -136,
            -125,
            -169,
            -324,
            309,
            -51,
            288,
            253,
            175,
            -146,
            171,
            -140,
            58,
            -212,
            164,
            270,
            102,
            70,
            299,
            89,
            -280,
            252,
            -342,
            240,
            226,
            68,
            -30,
            -232,
            -358,
            -166,
            60,
            140,
            275,
            13,
            250,
            -328,
            -189,
            -22,
            7,
            -235,
            -322,
            178,
            167,
            -104,
            -61,
            282,
            -80,
            -277,
            108,
            271,
            -237,
            297,
            -135,
            -135,
            -323,
            342,
            -267,
            -235,
            173,
            249,
            -288,
            257,
            139,
            -191,
            -217,
            10,
            -117,
            -297,
            -196,
            -206,
            341,
            166,
            181,
            129,
            -207,
            55,
            86,
          ],
          timezone: "Africa/Abidjan",
          weekStart: "MO",
        },
        {
          count: 3,
          endAt: new Date("2022-09-30T21:19:19.859Z"),
          excludedDates: [
            "2024-09-03T16:42:01.611Z",
            "2024-08-19T02:48:52.412Z",
          ],
          frequency: "DAILY",
          includedDates: [
            "2024-03-26T17:18:27.508Z",
            "2026-01-16T13:45:12.483Z",
            "2023-08-15T06:14:22.867Z",
          ],
          interval: 1,
          onDays: [
            "WE",
            "SU",
            "MO",
            "FR",
          ],
          onMonthDays: [
            -15,
          ],
          onMonths: [
            5,
            12,
            3,
            12,
            8,
          ],
          onWeeks: [
            -47,
            44,
          ],
          onYearDays: [
            -117,
            59,
            -6,
            187,
            45,
            70,
            15,
            255,
            44,
            -2,
            25,
            -175,
            -240,
            171,
            -294,
            19,
            38,
            -351,
            170,
            -10,
            -269,
            18,
            -65,
            -266,
            -31,
            328,
            -361,
            358,
            -256,
            -4,
            -312,
            82,
            -2,
            -75,
            -281,
            -304,
            53,
            -295,
            366,
            322,
            -191,
            26,
            97,
            53,
            75,
            -62,
            -109,
            66,
            177,
            -68,
            175,
            -280,
            70,
            -238,
            109,
            -304,
            326,
            -8,
            -71,
            -236,
            225,
            358,
            20,
            -5,
            -102,
            -134,
            -204,
            -116,
            -353,
            -273,
            106,
            284,
            -137,
            -324,
            301,
            -42,
            -229,
            271,
            -293,
            -343,
            211,
            47,
            -254,
            -154,
            -182,
            264,
            120,
            -11,
            -307,
            99,
            227,
            190,
            -17,
            -77,
            -255,
            -61,
            -249,
            -102,
            70,
            345,
            -187,
            -308,
            194,
            221,
            268,
            -169,
            -190,
            88,
            10,
            262,
            177,
            -314,
            -151,
            -295,
          ],
          timezone: "Asia/Choibalsan",
          weekStart: "TU",
        },
        {
          count: 8,
          endAt: new Date("2026-07-30T04:22:10.180Z"),
          excludedDates: [
            "2023-06-19T11:00:35.337Z",
            "2023-06-08T11:12:11.014Z",
          ],
          frequency: "WEEKLY",
          includedDates: [
            "2024-04-03T18:39:16.535Z",
            "2023-08-21T02:00:36.808Z",
            "2024-09-28T22:58:20.037Z",
          ],
          interval: 8,
          onDays: [
            "SU",
            "MO",
            "TU",
            "FR",
            "MO",
            "TH",
          ],
          onMonthDays: [
            -23,
          ],
          onMonths: [
            11,
            8,
            9,
            5,
            -12,
            -7,
            -5,
            10,
            10,
            -9,
            -10,
          ],
          onWeeks: [
            -49,
            46,
            35,
            -26,
            2,
            15,
            15,
            -26,
            24,
            -53,
            36,
            -43,
            51,
            -19,
            -7,
            -12,
            28,
            27,
            35,
            12,
            -28,
            -8,
            -4,
            -45,
          ],
          onYearDays: [
            84,
            -251,
            71,
            181,
            -163,
            158,
            301,
            -299,
            -184,
            -331,
            -152,
            -129,
            -237,
            -303,
            -24,
            126,
            -103,
            146,
            -346,
            86,
            -296,
            -337,
            -185,
            16,
            -270,
            -126,
            -295,
            -231,
            356,
            -293,
            115,
            -265,
            -293,
            -34,
            357,
            313,
            -343,
            180,
            -22,
            -161,
            350,
            177,
            190,
            223,
            -152,
            -360,
            -225,
            -60,
            -35,
            353,
            117,
            -171,
            -315,
            -321,
            -202,
            345,
            -1,
            -148,
            -168,
            181,
            -17,
            282,
            234,
            31,
            47,
            -236,
            366,
            -251,
            -232,
            -308,
            76,
            -199,
            184,
            198,
            225,
            75,
            6,
            227,
            -148,
            259,
            -146,
            49,
            -254,
            341,
            93,
            138,
            -164,
            237,
            4,
            -287,
            161,
          ],
          timezone: "Asia/Krasnoyarsk",
          weekStart: "WE",
        },
      ],
      registrantPassword: "W7J6DhkM",
      requireAddress: false,
      requireJobTitle: false,
      startAt: new Date("2025-05-03T02:38:40.699Z"),
      status: "TENTATIVE",
      subject: "Harum culpa decipio ex cubo ancilla cresco.",
      timezone: "Europe/Kaliningrad",
      updatedAt: new Date("2026-10-04T07:32:19.271Z"),
      webUrl: "https://quiet-permafrost.name",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarPatchCalendarWebinar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCalendarWebinarRequest](../../sdk/models/operations/patchcalendarwebinarrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarWebinar](../../sdk/models/shared/calendarwebinar.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCalendarCalendar

Deletes the CalendarCalendar identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCalendarCalendar" method="delete" path="/calendar/{connection_id}/calendar/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.removeCalendarCalendar({
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
import { calendarRemoveCalendarCalendar } from "@unified-api/typescript-sdk/funcs/calendarRemoveCalendarCalendar.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarRemoveCalendarCalendar(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarRemoveCalendarCalendar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCalendarCalendarRequest](../../sdk/models/operations/removecalendarcalendarrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCalendarCalendarResponse](../../sdk/models/operations/removecalendarcalendarresponse.md)\>**

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
  const result = await unifiedTo.calendar.removeCalendarEvent({
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

## removeCalendarLink

Deletes the CalendarLink identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCalendarLink" method="delete" path="/calendar/{connection_id}/link/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.removeCalendarLink({
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
import { calendarRemoveCalendarLink } from "@unified-api/typescript-sdk/funcs/calendarRemoveCalendarLink.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarRemoveCalendarLink(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarRemoveCalendarLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCalendarLinkRequest](../../sdk/models/operations/removecalendarlinkrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCalendarLinkResponse](../../sdk/models/operations/removecalendarlinkresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCalendarWebinar

Deletes the CalendarWebinar identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCalendarWebinar" method="delete" path="/calendar/{connection_id}/webinar/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.removeCalendarWebinar({
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
import { calendarRemoveCalendarWebinar } from "@unified-api/typescript-sdk/funcs/calendarRemoveCalendarWebinar.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarRemoveCalendarWebinar(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarRemoveCalendarWebinar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCalendarWebinarRequest](../../sdk/models/operations/removecalendarwebinarrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCalendarWebinarResponse](../../sdk/models/operations/removecalendarwebinarresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCalendarCalendar

Updates the CalendarCalendar identified by `id`. Provide the unified CalendarCalendar fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCalendarCalendar" method="put" path="/calendar/{connection_id}/calendar/{id}" example="calendar_calendar" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.updateCalendarCalendar({
    calendarCalendar: {
      createdAt: new Date("2020-01-09T23:11:34.147Z"),
      description: "Acer supra vallum suasoria thesaurus.",
      id: "6d77e417-a5ef-4ab0-81db-5ee1cd271334",
      isPrimary: false,
      metadata: [],
      name: "Interviews",
      timezone: "Asia/Kolkata",
      updatedAt: new Date("2023-03-29T23:20:52.712Z"),
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
import { calendarUpdateCalendarCalendar } from "@unified-api/typescript-sdk/funcs/calendarUpdateCalendarCalendar.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarUpdateCalendarCalendar(unifiedTo, {
    calendarCalendar: {
      createdAt: new Date("2020-01-09T23:11:34.147Z"),
      description: "Acer supra vallum suasoria thesaurus.",
      id: "6d77e417-a5ef-4ab0-81db-5ee1cd271334",
      isPrimary: false,
      metadata: [],
      name: "Interviews",
      timezone: "Asia/Kolkata",
      updatedAt: new Date("2023-03-29T23:20:52.712Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarUpdateCalendarCalendar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCalendarCalendarRequest](../../sdk/models/operations/updatecalendarcalendarrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarCalendar](../../sdk/models/shared/calendarcalendar.md)\>**

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
  const result = await unifiedTo.calendar.updateCalendarEvent({
    calendarEvent: {
      attachments: [],
      conference: [],
      createdAt: "2019-08-04T14:33:51.814Z",
      endAt: "2020-05-24T17:20:55.114Z",
      hasConference: false,
      id: "8c1b9f43-d9c7-4759-9399-0c29229a62a1",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      metadata: [],
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 4,
          endAt: new Date("2025-03-27T16:06:17.399Z"),
          excludedDates: [
            "2024-02-05T04:33:12.717Z",
          ],
          frequency: "YEARLY",
          includedDates: [
            "2023-07-09T03:51:04.377Z",
            "2025-01-26T19:59:32.651Z",
            "2024-04-04T11:33:44.972Z",
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
      startAt: "2020-05-24T08:06:29.207Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-06-30T17:01:27.919Z",
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
      endAt: "2020-05-24T17:20:55.114Z",
      hasConference: false,
      id: "8c1b9f43-d9c7-4759-9399-0c29229a62a1",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      metadata: [],
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 4,
          endAt: new Date("2025-03-27T16:06:17.399Z"),
          excludedDates: [
            "2024-02-05T04:33:12.717Z",
          ],
          frequency: "YEARLY",
          includedDates: [
            "2023-07-09T03:51:04.377Z",
            "2025-01-26T19:59:32.651Z",
            "2024-04-04T11:33:44.972Z",
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
      startAt: "2020-05-24T08:06:29.207Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-06-30T17:01:27.919Z",
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

## updateCalendarLink

Updates the CalendarLink identified by `id`. Provide the unified CalendarLink fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCalendarLink" method="put" path="/calendar/{connection_id}/link/{id}" example="calendar_link" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.updateCalendarLink({
    calendarLink: {
      createdAt: "2023-03-07T13:34:11.959Z",
      description: "Vitium clibanus laboriosam uxor denuncio.",
      duration: 74,
      id: "18a06bda-aed3-4269-9fa0-5b198e8bfc39",
      isActive: true,
      metadata: [],
      name: "Sopor sopor ancilla animus anser dignissimos vito confero utilis.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-16T15:12:56.335Z",
      url: "https://annual-apricot.info/",
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
import { calendarUpdateCalendarLink } from "@unified-api/typescript-sdk/funcs/calendarUpdateCalendarLink.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarUpdateCalendarLink(unifiedTo, {
    calendarLink: {
      createdAt: "2023-03-07T13:34:11.959Z",
      description: "Vitium clibanus laboriosam uxor denuncio.",
      duration: 74,
      id: "18a06bda-aed3-4269-9fa0-5b198e8bfc39",
      isActive: true,
      metadata: [],
      name: "Sopor sopor ancilla animus anser dignissimos vito confero utilis.",
      priceAmount: 44,
      priceCurrency: "USD",
      updatedAt: "2024-03-16T15:12:56.335Z",
      url: "https://annual-apricot.info/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarUpdateCalendarLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCalendarLinkRequest](../../sdk/models/operations/updatecalendarlinkrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarLink](../../sdk/models/shared/calendarlink.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCalendarWebinar

Updates the CalendarWebinar identified by `id`. Provide the unified CalendarWebinar fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCalendarWebinar" method="put" path="/calendar/{connection_id}/webinar/{id}" example="calendar_webinar" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.calendar.updateCalendarWebinar({
    calendarWebinar: {
      conference: [],
      createdAt: new Date("2022-07-06T11:45:14.631Z"),
      endAt: new Date("2025-10-31T16:54:01.042Z"),
      hasPolls: false,
      hasRecording: false,
      id: "25208f6d-b8e0-4df3-89f4-b45625c79e89",
      isAutoApprove: false,
      isEnabled: true,
      isWebcast: false,
      joinUrl: "https://nutritious-crocodile.com",
      metadata: [],
      notes: "Curriculum ducimus assentator aspernatur ait.",
      recurrence: [
        {
          count: 10,
          endAt: new Date("2023-09-01T15:42:03.828Z"),
          excludedDates: [
            "2025-02-15T08:54:19.498Z",
          ],
          frequency: "MONTHLY",
          includedDates: [
            "2024-04-29T21:54:32.066Z",
          ],
          interval: 8,
          onDays: [
            "SU",
            "FR",
            "SA",
            "WE",
            "MO",
          ],
          onMonthDays: [
            -10,
          ],
          onMonths: [
            -9,
          ],
          onWeeks: [
            10,
            30,
            -38,
            30,
            -22,
            37,
            -12,
            27,
            2,
            15,
            26,
            18,
            -43,
            -33,
            -27,
            38,
            28,
            47,
            -8,
            24,
            35,
            -2,
            7,
            49,
            38,
            -41,
            46,
            -11,
            -45,
            0,
            48,
            34,
          ],
          onYearDays: [
            345,
            -207,
            230,
            -10,
            364,
            -256,
            -218,
            -295,
            290,
            -250,
            -315,
            60,
            205,
            -247,
            -318,
            -211,
            -13,
            256,
            -200,
            -313,
            336,
            -332,
            -90,
            287,
            -273,
            156,
            241,
            -138,
            -363,
            -37,
            -171,
            -62,
            -57,
            280,
            -322,
            -79,
            -364,
            -201,
            84,
            341,
            334,
            -75,
            332,
            207,
            337,
            -244,
            131,
            -191,
            164,
            -235,
            285,
            -309,
            -158,
            306,
            180,
            -130,
            -162,
            -155,
            3,
            198,
            26,
            -366,
            -191,
            127,
            -331,
            -11,
            -239,
            -189,
            243,
            118,
            346,
            -174,
            -146,
            -161,
            -330,
            327,
            192,
            310,
            316,
            313,
            -242,
            -51,
            -264,
            -180,
            -88,
            305,
            270,
            358,
            -173,
            -298,
            153,
            -89,
            155,
            -45,
            248,
            -46,
            -146,
            300,
            364,
            -335,
            356,
            -18,
            219,
            324,
            -239,
            -106,
            -298,
            328,
            362,
            344,
            -54,
            133,
            50,
            112,
            -212,
            -179,
            22,
            -201,
            -62,
            -293,
            9,
            30,
            -50,
            126,
            -72,
            264,
            28,
            -1,
            -207,
            160,
            -168,
            3,
            -176,
            -19,
            -157,
            349,
            100,
            -201,
            108,
            -180,
            51,
            -73,
            366,
            74,
            -226,
            238,
            121,
            -193,
            -125,
            -109,
            316,
            -177,
            -307,
            31,
            -76,
            217,
            -310,
            227,
            -360,
            71,
            255,
            -325,
            -214,
            40,
            42,
            17,
            -241,
            -84,
            -188,
            302,
            64,
            94,
            -362,
            23,
            166,
            85,
            71,
            -74,
            -47,
            -119,
            98,
            40,
            158,
            -64,
            175,
            269,
            127,
            -143,
            213,
            -196,
            121,
            81,
            -238,
            288,
            321,
            276,
            133,
            22,
            -213,
            -157,
            -280,
            -35,
            73,
            -194,
            65,
            -180,
            63,
            -242,
            -117,
            148,
            157,
            -320,
            318,
            8,
            210,
            -21,
            81,
            205,
            -258,
            -40,
            -114,
            -253,
            -263,
            65,
            185,
            -24,
            324,
            -172,
            25,
            260,
            211,
            342,
            -31,
            -288,
            -159,
            -4,
            -2,
            -107,
            -316,
            -276,
            331,
            -114,
            -20,
            -320,
            51,
            -176,
            -148,
            -50,
            -201,
            -104,
            153,
            -273,
            -189,
            67,
            209,
            149,
            49,
            -136,
            -125,
            -169,
            -324,
            309,
            -51,
            288,
            253,
            175,
            -146,
            171,
            -140,
            58,
            -212,
            164,
            270,
            102,
            70,
            299,
            89,
            -280,
            252,
            -342,
            240,
            226,
            68,
            -30,
            -232,
            -358,
            -166,
            60,
            140,
            275,
            13,
            250,
            -328,
            -189,
            -22,
            7,
            -235,
            -322,
            178,
            167,
            -104,
            -61,
            282,
            -80,
            -277,
            108,
            271,
            -237,
            297,
            -135,
            -135,
            -323,
            342,
            -267,
            -235,
            173,
            249,
            -288,
            257,
            139,
            -191,
            -217,
            10,
            -117,
            -297,
            -196,
            -206,
            341,
            166,
            181,
            129,
            -207,
            55,
            86,
          ],
          timezone: "Africa/Abidjan",
          weekStart: "MO",
        },
        {
          count: 3,
          endAt: new Date("2022-09-30T21:19:19.859Z"),
          excludedDates: [
            "2024-09-03T16:42:01.611Z",
            "2024-08-19T02:48:52.412Z",
          ],
          frequency: "DAILY",
          includedDates: [
            "2024-03-26T17:18:27.508Z",
            "2026-01-16T13:45:12.483Z",
            "2023-08-15T06:14:22.867Z",
          ],
          interval: 1,
          onDays: [
            "WE",
            "SU",
            "MO",
            "FR",
          ],
          onMonthDays: [
            -15,
          ],
          onMonths: [
            5,
            12,
            3,
            12,
            8,
          ],
          onWeeks: [
            -47,
            44,
          ],
          onYearDays: [
            -117,
            59,
            -6,
            187,
            45,
            70,
            15,
            255,
            44,
            -2,
            25,
            -175,
            -240,
            171,
            -294,
            19,
            38,
            -351,
            170,
            -10,
            -269,
            18,
            -65,
            -266,
            -31,
            328,
            -361,
            358,
            -256,
            -4,
            -312,
            82,
            -2,
            -75,
            -281,
            -304,
            53,
            -295,
            366,
            322,
            -191,
            26,
            97,
            53,
            75,
            -62,
            -109,
            66,
            177,
            -68,
            175,
            -280,
            70,
            -238,
            109,
            -304,
            326,
            -8,
            -71,
            -236,
            225,
            358,
            20,
            -5,
            -102,
            -134,
            -204,
            -116,
            -353,
            -273,
            106,
            284,
            -137,
            -324,
            301,
            -42,
            -229,
            271,
            -293,
            -343,
            211,
            47,
            -254,
            -154,
            -182,
            264,
            120,
            -11,
            -307,
            99,
            227,
            190,
            -17,
            -77,
            -255,
            -61,
            -249,
            -102,
            70,
            345,
            -187,
            -308,
            194,
            221,
            268,
            -169,
            -190,
            88,
            10,
            262,
            177,
            -314,
            -151,
            -295,
          ],
          timezone: "Asia/Choibalsan",
          weekStart: "TU",
        },
        {
          count: 8,
          endAt: new Date("2026-07-30T04:22:10.180Z"),
          excludedDates: [
            "2023-06-19T11:00:35.337Z",
            "2023-06-08T11:12:11.014Z",
          ],
          frequency: "WEEKLY",
          includedDates: [
            "2024-04-03T18:39:16.535Z",
            "2023-08-21T02:00:36.808Z",
            "2024-09-28T22:58:20.037Z",
          ],
          interval: 8,
          onDays: [
            "SU",
            "MO",
            "TU",
            "FR",
            "MO",
            "TH",
          ],
          onMonthDays: [
            -23,
          ],
          onMonths: [
            11,
            8,
            9,
            5,
            -12,
            -7,
            -5,
            10,
            10,
            -9,
            -10,
          ],
          onWeeks: [
            -49,
            46,
            35,
            -26,
            2,
            15,
            15,
            -26,
            24,
            -53,
            36,
            -43,
            51,
            -19,
            -7,
            -12,
            28,
            27,
            35,
            12,
            -28,
            -8,
            -4,
            -45,
          ],
          onYearDays: [
            84,
            -251,
            71,
            181,
            -163,
            158,
            301,
            -299,
            -184,
            -331,
            -152,
            -129,
            -237,
            -303,
            -24,
            126,
            -103,
            146,
            -346,
            86,
            -296,
            -337,
            -185,
            16,
            -270,
            -126,
            -295,
            -231,
            356,
            -293,
            115,
            -265,
            -293,
            -34,
            357,
            313,
            -343,
            180,
            -22,
            -161,
            350,
            177,
            190,
            223,
            -152,
            -360,
            -225,
            -60,
            -35,
            353,
            117,
            -171,
            -315,
            -321,
            -202,
            345,
            -1,
            -148,
            -168,
            181,
            -17,
            282,
            234,
            31,
            47,
            -236,
            366,
            -251,
            -232,
            -308,
            76,
            -199,
            184,
            198,
            225,
            75,
            6,
            227,
            -148,
            259,
            -146,
            49,
            -254,
            341,
            93,
            138,
            -164,
            237,
            4,
            -287,
            161,
          ],
          timezone: "Asia/Krasnoyarsk",
          weekStart: "WE",
        },
      ],
      registrantPassword: "W7J6DhkM",
      requireAddress: false,
      requireJobTitle: false,
      startAt: new Date("2025-05-03T02:38:40.699Z"),
      status: "TENTATIVE",
      subject: "Harum culpa decipio ex cubo ancilla cresco.",
      timezone: "Europe/Kaliningrad",
      updatedAt: new Date("2026-10-04T07:32:19.271Z"),
      webUrl: "https://quiet-permafrost.name",
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
import { calendarUpdateCalendarWebinar } from "@unified-api/typescript-sdk/funcs/calendarUpdateCalendarWebinar.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await calendarUpdateCalendarWebinar(unifiedTo, {
    calendarWebinar: {
      conference: [],
      createdAt: new Date("2022-07-06T11:45:14.631Z"),
      endAt: new Date("2025-10-31T16:54:01.042Z"),
      hasPolls: false,
      hasRecording: false,
      id: "25208f6d-b8e0-4df3-89f4-b45625c79e89",
      isAutoApprove: false,
      isEnabled: true,
      isWebcast: false,
      joinUrl: "https://nutritious-crocodile.com",
      metadata: [],
      notes: "Curriculum ducimus assentator aspernatur ait.",
      recurrence: [
        {
          count: 10,
          endAt: new Date("2023-09-01T15:42:03.828Z"),
          excludedDates: [
            "2025-02-15T08:54:19.498Z",
          ],
          frequency: "MONTHLY",
          includedDates: [
            "2024-04-29T21:54:32.066Z",
          ],
          interval: 8,
          onDays: [
            "SU",
            "FR",
            "SA",
            "WE",
            "MO",
          ],
          onMonthDays: [
            -10,
          ],
          onMonths: [
            -9,
          ],
          onWeeks: [
            10,
            30,
            -38,
            30,
            -22,
            37,
            -12,
            27,
            2,
            15,
            26,
            18,
            -43,
            -33,
            -27,
            38,
            28,
            47,
            -8,
            24,
            35,
            -2,
            7,
            49,
            38,
            -41,
            46,
            -11,
            -45,
            0,
            48,
            34,
          ],
          onYearDays: [
            345,
            -207,
            230,
            -10,
            364,
            -256,
            -218,
            -295,
            290,
            -250,
            -315,
            60,
            205,
            -247,
            -318,
            -211,
            -13,
            256,
            -200,
            -313,
            336,
            -332,
            -90,
            287,
            -273,
            156,
            241,
            -138,
            -363,
            -37,
            -171,
            -62,
            -57,
            280,
            -322,
            -79,
            -364,
            -201,
            84,
            341,
            334,
            -75,
            332,
            207,
            337,
            -244,
            131,
            -191,
            164,
            -235,
            285,
            -309,
            -158,
            306,
            180,
            -130,
            -162,
            -155,
            3,
            198,
            26,
            -366,
            -191,
            127,
            -331,
            -11,
            -239,
            -189,
            243,
            118,
            346,
            -174,
            -146,
            -161,
            -330,
            327,
            192,
            310,
            316,
            313,
            -242,
            -51,
            -264,
            -180,
            -88,
            305,
            270,
            358,
            -173,
            -298,
            153,
            -89,
            155,
            -45,
            248,
            -46,
            -146,
            300,
            364,
            -335,
            356,
            -18,
            219,
            324,
            -239,
            -106,
            -298,
            328,
            362,
            344,
            -54,
            133,
            50,
            112,
            -212,
            -179,
            22,
            -201,
            -62,
            -293,
            9,
            30,
            -50,
            126,
            -72,
            264,
            28,
            -1,
            -207,
            160,
            -168,
            3,
            -176,
            -19,
            -157,
            349,
            100,
            -201,
            108,
            -180,
            51,
            -73,
            366,
            74,
            -226,
            238,
            121,
            -193,
            -125,
            -109,
            316,
            -177,
            -307,
            31,
            -76,
            217,
            -310,
            227,
            -360,
            71,
            255,
            -325,
            -214,
            40,
            42,
            17,
            -241,
            -84,
            -188,
            302,
            64,
            94,
            -362,
            23,
            166,
            85,
            71,
            -74,
            -47,
            -119,
            98,
            40,
            158,
            -64,
            175,
            269,
            127,
            -143,
            213,
            -196,
            121,
            81,
            -238,
            288,
            321,
            276,
            133,
            22,
            -213,
            -157,
            -280,
            -35,
            73,
            -194,
            65,
            -180,
            63,
            -242,
            -117,
            148,
            157,
            -320,
            318,
            8,
            210,
            -21,
            81,
            205,
            -258,
            -40,
            -114,
            -253,
            -263,
            65,
            185,
            -24,
            324,
            -172,
            25,
            260,
            211,
            342,
            -31,
            -288,
            -159,
            -4,
            -2,
            -107,
            -316,
            -276,
            331,
            -114,
            -20,
            -320,
            51,
            -176,
            -148,
            -50,
            -201,
            -104,
            153,
            -273,
            -189,
            67,
            209,
            149,
            49,
            -136,
            -125,
            -169,
            -324,
            309,
            -51,
            288,
            253,
            175,
            -146,
            171,
            -140,
            58,
            -212,
            164,
            270,
            102,
            70,
            299,
            89,
            -280,
            252,
            -342,
            240,
            226,
            68,
            -30,
            -232,
            -358,
            -166,
            60,
            140,
            275,
            13,
            250,
            -328,
            -189,
            -22,
            7,
            -235,
            -322,
            178,
            167,
            -104,
            -61,
            282,
            -80,
            -277,
            108,
            271,
            -237,
            297,
            -135,
            -135,
            -323,
            342,
            -267,
            -235,
            173,
            249,
            -288,
            257,
            139,
            -191,
            -217,
            10,
            -117,
            -297,
            -196,
            -206,
            341,
            166,
            181,
            129,
            -207,
            55,
            86,
          ],
          timezone: "Africa/Abidjan",
          weekStart: "MO",
        },
        {
          count: 3,
          endAt: new Date("2022-09-30T21:19:19.859Z"),
          excludedDates: [
            "2024-09-03T16:42:01.611Z",
            "2024-08-19T02:48:52.412Z",
          ],
          frequency: "DAILY",
          includedDates: [
            "2024-03-26T17:18:27.508Z",
            "2026-01-16T13:45:12.483Z",
            "2023-08-15T06:14:22.867Z",
          ],
          interval: 1,
          onDays: [
            "WE",
            "SU",
            "MO",
            "FR",
          ],
          onMonthDays: [
            -15,
          ],
          onMonths: [
            5,
            12,
            3,
            12,
            8,
          ],
          onWeeks: [
            -47,
            44,
          ],
          onYearDays: [
            -117,
            59,
            -6,
            187,
            45,
            70,
            15,
            255,
            44,
            -2,
            25,
            -175,
            -240,
            171,
            -294,
            19,
            38,
            -351,
            170,
            -10,
            -269,
            18,
            -65,
            -266,
            -31,
            328,
            -361,
            358,
            -256,
            -4,
            -312,
            82,
            -2,
            -75,
            -281,
            -304,
            53,
            -295,
            366,
            322,
            -191,
            26,
            97,
            53,
            75,
            -62,
            -109,
            66,
            177,
            -68,
            175,
            -280,
            70,
            -238,
            109,
            -304,
            326,
            -8,
            -71,
            -236,
            225,
            358,
            20,
            -5,
            -102,
            -134,
            -204,
            -116,
            -353,
            -273,
            106,
            284,
            -137,
            -324,
            301,
            -42,
            -229,
            271,
            -293,
            -343,
            211,
            47,
            -254,
            -154,
            -182,
            264,
            120,
            -11,
            -307,
            99,
            227,
            190,
            -17,
            -77,
            -255,
            -61,
            -249,
            -102,
            70,
            345,
            -187,
            -308,
            194,
            221,
            268,
            -169,
            -190,
            88,
            10,
            262,
            177,
            -314,
            -151,
            -295,
          ],
          timezone: "Asia/Choibalsan",
          weekStart: "TU",
        },
        {
          count: 8,
          endAt: new Date("2026-07-30T04:22:10.180Z"),
          excludedDates: [
            "2023-06-19T11:00:35.337Z",
            "2023-06-08T11:12:11.014Z",
          ],
          frequency: "WEEKLY",
          includedDates: [
            "2024-04-03T18:39:16.535Z",
            "2023-08-21T02:00:36.808Z",
            "2024-09-28T22:58:20.037Z",
          ],
          interval: 8,
          onDays: [
            "SU",
            "MO",
            "TU",
            "FR",
            "MO",
            "TH",
          ],
          onMonthDays: [
            -23,
          ],
          onMonths: [
            11,
            8,
            9,
            5,
            -12,
            -7,
            -5,
            10,
            10,
            -9,
            -10,
          ],
          onWeeks: [
            -49,
            46,
            35,
            -26,
            2,
            15,
            15,
            -26,
            24,
            -53,
            36,
            -43,
            51,
            -19,
            -7,
            -12,
            28,
            27,
            35,
            12,
            -28,
            -8,
            -4,
            -45,
          ],
          onYearDays: [
            84,
            -251,
            71,
            181,
            -163,
            158,
            301,
            -299,
            -184,
            -331,
            -152,
            -129,
            -237,
            -303,
            -24,
            126,
            -103,
            146,
            -346,
            86,
            -296,
            -337,
            -185,
            16,
            -270,
            -126,
            -295,
            -231,
            356,
            -293,
            115,
            -265,
            -293,
            -34,
            357,
            313,
            -343,
            180,
            -22,
            -161,
            350,
            177,
            190,
            223,
            -152,
            -360,
            -225,
            -60,
            -35,
            353,
            117,
            -171,
            -315,
            -321,
            -202,
            345,
            -1,
            -148,
            -168,
            181,
            -17,
            282,
            234,
            31,
            47,
            -236,
            366,
            -251,
            -232,
            -308,
            76,
            -199,
            184,
            198,
            225,
            75,
            6,
            227,
            -148,
            259,
            -146,
            49,
            -254,
            341,
            93,
            138,
            -164,
            237,
            4,
            -287,
            161,
          ],
          timezone: "Asia/Krasnoyarsk",
          weekStart: "WE",
        },
      ],
      registrantPassword: "W7J6DhkM",
      requireAddress: false,
      requireJobTitle: false,
      startAt: new Date("2025-05-03T02:38:40.699Z"),
      status: "TENTATIVE",
      subject: "Harum culpa decipio ex cubo ancilla cresco.",
      timezone: "Europe/Kaliningrad",
      updatedAt: new Date("2026-10-04T07:32:19.271Z"),
      webUrl: "https://quiet-permafrost.name",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarUpdateCalendarWebinar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCalendarWebinarRequest](../../sdk/models/operations/updatecalendarwebinarrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CalendarWebinar](../../sdk/models/shared/calendarwebinar.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |