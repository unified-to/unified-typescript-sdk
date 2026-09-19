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

Create an event

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
      id: "607105c1-38b2-4249-ac4f-052f51e3dba1",
      metadata: {
        "key": {},
      },
      name: "Xk707ttsb51v",
      updatedAt: new Date("2023-09-22T03:52:34.004Z"),
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
      id: "607105c1-38b2-4249-ac4f-052f51e3dba1",
      metadata: {
        "key": {},
      },
      name: "Xk707ttsb51v",
      updatedAt: new Date("2023-09-22T03:52:34.004Z"),
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

Create an event

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
      endAt: "2020-05-20T17:02:26.498Z",
      id: "88341186-6373-48f0-9c10-9ac320861286",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 8,
          endAt: new Date("2025-12-26T05:12:51.348Z"),
          excludedDates: [
            "2025-09-30T21:23:43.877Z",
            "2023-10-09T11:20:22.986Z",
            "2024-02-15T12:22:14.400Z",
          ],
          frequency: "MONTHLY",
          includedDates: [
            "2021-02-16T21:44:17.249Z",
          ],
          interval: 4,
          onDays: [
            "TH",
            "MO",
            "TH",
          ],
          onMonthDays: [
            -26,
          ],
          onMonths: [
            12,
            9,
            -1,
            0,
            1,
            6,
            -10,
            9,
            0,
            4,
            -2,
          ],
          onWeeks: [
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
          ],
          onYearDays: [
            -35,
            14,
            -338,
            175,
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
          ],
          timezone: "Asia/Ho_Chi_Minh",
          weekStart: "SU",
        },
        {
          count: 9,
          endAt: new Date("2025-04-30T04:39:02.799Z"),
          excludedDates: [
            "2020-04-29T00:33:55.776Z",
          ],
          frequency: "DAILY",
          includedDates: [
            "2020-09-11T02:20:07.440Z",
            "2021-11-29T00:58:07.020Z",
            "2019-12-22T18:01:10.165Z",
          ],
          interval: 1,
          onDays: [
            "WE",
            "TU",
            "WE",
            "SA",
            "SA",
            "SA",
          ],
          onMonthDays: [
            1,
          ],
          onMonths: [
            4,
            0,
            -3,
          ],
          onWeeks: [
            -7,
            -19,
            50,
            -37,
            43,
            -48,
            -30,
            34,
            36,
            -33,
            24,
            -4,
          ],
          onYearDays: [
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
            -35,
            -121,
            262,
            32,
            190,
            107,
            -145,
            91,
            313,
            -48,
            277,
            104,
            342,
            297,
            -216,
            346,
            -257,
            307,
            -44,
            264,
            -153,
            -268,
            92,
            152,
            -182,
            -334,
            89,
            343,
            -320,
            -36,
            84,
            340,
            -88,
            -278,
            202,
            291,
            95,
            -234,
            -304,
            -157,
            -82,
            -339,
            83,
            2,
            -238,
            -204,
            206,
            -273,
            -78,
            -21,
            270,
            -266,
            -276,
            154,
            -97,
            -43,
            -3,
            191,
            -302,
            290,
            -118,
            -125,
            -294,
            115,
            -73,
            -244,
            127,
            26,
            251,
            47,
            -157,
            22,
            -361,
            318,
            352,
            358,
            167,
            210,
            -185,
            327,
            117,
            350,
            -170,
            -144,
            -14,
            -37,
            318,
            243,
            33,
            90,
            319,
            -270,
            229,
            122,
            287,
            -90,
            -69,
            -134,
            -184,
            25,
            -178,
            -89,
            -273,
            -49,
            -362,
            -9,
            -71,
            -347,
            353,
            342,
            133,
            -116,
            231,
            -231,
            51,
            288,
            186,
            -328,
            275,
            81,
            94,
            -263,
            114,
            13,
            -357,
            171,
            -242,
            -85,
            -362,
            108,
            164,
            69,
            15,
            57,
            -287,
            100,
            165,
            205,
            204,
            -78,
            360,
            -80,
            -120,
            -255,
            -77,
            110,
            -26,
            -149,
            -254,
            95,
            32,
            -57,
            -195,
            100,
            221,
            74,
            274,
            15,
            353,
            204,
            -365,
            315,
            344,
            199,
            -59,
            272,
            173,
            -40,
            -318,
            -330,
            -365,
            -272,
            -149,
            -27,
            -334,
            -277,
            344,
            351,
            -310,
            264,
            281,
            176,
            191,
            -183,
            288,
            -112,
            -55,
            -166,
            258,
            194,
            59,
          ],
          timezone: "America/Guadeloupe",
          weekStart: "TU",
        },
        {
          count: 1,
          endAt: new Date("2020-11-04T17:37:50.876Z"),
          excludedDates: [
            "2023-01-11T20:50:29.612Z",
            "2021-09-07T12:54:49.807Z",
          ],
          frequency: "WEEKLY",
          includedDates: [
            "2024-08-31T09:53:36.700Z",
          ],
          interval: 9,
          onDays: [
            "TU",
            "SA",
          ],
          onMonthDays: [
            -2,
          ],
          onMonths: [
            -4,
            8,
            0,
            9,
            4,
            -11,
            7,
            1,
            -5,
          ],
          onWeeks: [
            -36,
            -31,
            -16,
            -6,
            44,
            -37,
            14,
            38,
            -27,
            -22,
            -2,
            24,
            7,
            50,
            46,
            52,
            20,
            37,
            31,
            48,
            35,
            -46,
            13,
            22,
            53,
            20,
            -28,
            -2,
            39,
            13,
            4,
            0,
            7,
            -38,
            -35,
            41,
            49,
            12,
            17,
            8,
            49,
            -47,
            46,
            25,
            14,
            -26,
            -37,
            -25,
            -41,
            27,
            28,
            -19,
          ],
          onYearDays: [
            -256,
            -328,
            -312,
            50,
            -251,
            -338,
            -315,
            214,
            129,
            -263,
            -108,
            -11,
            206,
            -29,
            -159,
            -29,
            -264,
            295,
            -231,
            53,
            34,
            -366,
            326,
            -202,
            151,
            79,
            -66,
            11,
            -42,
            73,
            338,
            -155,
            197,
            260,
            356,
            -323,
            -213,
            -332,
            -305,
            -182,
            -253,
            -276,
            -285,
            96,
            -336,
            269,
            -233,
            250,
            -112,
            -307,
            -96,
            54,
            267,
            318,
            -66,
            11,
            -303,
            231,
            165,
            -297,
            -348,
            -355,
            364,
            312,
            -26,
            111,
            162,
            280,
            312,
            337,
            235,
            68,
            -282,
            363,
            212,
            -328,
            9,
            -24,
            -163,
            -101,
            -79,
            -264,
            -157,
            188,
            290,
            51,
            -213,
            216,
            230,
            -270,
            -211,
            -156,
            -165,
            -305,
            -45,
            224,
            -248,
            65,
            9,
            274,
            -299,
            -228,
            33,
            -42,
            356,
            -311,
            241,
            261,
            -136,
            -252,
            166,
            208,
            -126,
            64,
            323,
            -104,
            -106,
            -248,
            -41,
            -109,
            245,
            47,
            205,
            358,
            -296,
            214,
            -157,
            -313,
            -303,
            -54,
            -229,
            231,
            -94,
            -198,
            338,
            199,
            5,
            42,
            309,
            73,
            56,
            -120,
            351,
            6,
            -193,
            21,
            78,
            57,
            -269,
            -76,
            -299,
            295,
            -278,
            11,
            121,
            -323,
            156,
            67,
            152,
            284,
            108,
            -7,
            329,
            -32,
            333,
            -338,
            148,
            -42,
            151,
            145,
            -34,
            -36,
            296,
            -198,
            -317,
            -161,
            -253,
            328,
            -57,
            134,
            -289,
            229,
            44,
            16,
            -256,
            289,
            -234,
            197,
            333,
            228,
            -143,
            -202,
            -172,
            -262,
            -203,
            -83,
            -242,
            -173,
            336,
            298,
            -319,
            66,
            254,
            214,
            -118,
            -216,
            -168,
            44,
            -243,
            207,
            -28,
            -4,
            -272,
            79,
          ],
          timezone: "Atlantic/Reykjavik",
          weekStart: "TU",
        },
      ],
      recurringEventId: "07021b25-0d15-4e3e-94bf-fe46b7ebd92d",
      sendNotifications: false,
      startAt: "2020-05-20T07:55:34.461Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-06-26T04:36:19.042Z",
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
      endAt: "2020-05-20T17:02:26.498Z",
      id: "88341186-6373-48f0-9c10-9ac320861286",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 8,
          endAt: new Date("2025-12-26T05:12:51.348Z"),
          excludedDates: [
            "2025-09-30T21:23:43.877Z",
            "2023-10-09T11:20:22.986Z",
            "2024-02-15T12:22:14.400Z",
          ],
          frequency: "MONTHLY",
          includedDates: [
            "2021-02-16T21:44:17.249Z",
          ],
          interval: 4,
          onDays: [
            "TH",
            "MO",
            "TH",
          ],
          onMonthDays: [
            -26,
          ],
          onMonths: [
            12,
            9,
            -1,
            0,
            1,
            6,
            -10,
            9,
            0,
            4,
            -2,
          ],
          onWeeks: [
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
          ],
          onYearDays: [
            -35,
            14,
            -338,
            175,
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
          ],
          timezone: "Asia/Ho_Chi_Minh",
          weekStart: "SU",
        },
        {
          count: 9,
          endAt: new Date("2025-04-30T04:39:02.799Z"),
          excludedDates: [
            "2020-04-29T00:33:55.776Z",
          ],
          frequency: "DAILY",
          includedDates: [
            "2020-09-11T02:20:07.440Z",
            "2021-11-29T00:58:07.020Z",
            "2019-12-22T18:01:10.165Z",
          ],
          interval: 1,
          onDays: [
            "WE",
            "TU",
            "WE",
            "SA",
            "SA",
            "SA",
          ],
          onMonthDays: [
            1,
          ],
          onMonths: [
            4,
            0,
            -3,
          ],
          onWeeks: [
            -7,
            -19,
            50,
            -37,
            43,
            -48,
            -30,
            34,
            36,
            -33,
            24,
            -4,
          ],
          onYearDays: [
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
            -35,
            -121,
            262,
            32,
            190,
            107,
            -145,
            91,
            313,
            -48,
            277,
            104,
            342,
            297,
            -216,
            346,
            -257,
            307,
            -44,
            264,
            -153,
            -268,
            92,
            152,
            -182,
            -334,
            89,
            343,
            -320,
            -36,
            84,
            340,
            -88,
            -278,
            202,
            291,
            95,
            -234,
            -304,
            -157,
            -82,
            -339,
            83,
            2,
            -238,
            -204,
            206,
            -273,
            -78,
            -21,
            270,
            -266,
            -276,
            154,
            -97,
            -43,
            -3,
            191,
            -302,
            290,
            -118,
            -125,
            -294,
            115,
            -73,
            -244,
            127,
            26,
            251,
            47,
            -157,
            22,
            -361,
            318,
            352,
            358,
            167,
            210,
            -185,
            327,
            117,
            350,
            -170,
            -144,
            -14,
            -37,
            318,
            243,
            33,
            90,
            319,
            -270,
            229,
            122,
            287,
            -90,
            -69,
            -134,
            -184,
            25,
            -178,
            -89,
            -273,
            -49,
            -362,
            -9,
            -71,
            -347,
            353,
            342,
            133,
            -116,
            231,
            -231,
            51,
            288,
            186,
            -328,
            275,
            81,
            94,
            -263,
            114,
            13,
            -357,
            171,
            -242,
            -85,
            -362,
            108,
            164,
            69,
            15,
            57,
            -287,
            100,
            165,
            205,
            204,
            -78,
            360,
            -80,
            -120,
            -255,
            -77,
            110,
            -26,
            -149,
            -254,
            95,
            32,
            -57,
            -195,
            100,
            221,
            74,
            274,
            15,
            353,
            204,
            -365,
            315,
            344,
            199,
            -59,
            272,
            173,
            -40,
            -318,
            -330,
            -365,
            -272,
            -149,
            -27,
            -334,
            -277,
            344,
            351,
            -310,
            264,
            281,
            176,
            191,
            -183,
            288,
            -112,
            -55,
            -166,
            258,
            194,
            59,
          ],
          timezone: "America/Guadeloupe",
          weekStart: "TU",
        },
        {
          count: 1,
          endAt: new Date("2020-11-04T17:37:50.876Z"),
          excludedDates: [
            "2023-01-11T20:50:29.612Z",
            "2021-09-07T12:54:49.807Z",
          ],
          frequency: "WEEKLY",
          includedDates: [
            "2024-08-31T09:53:36.700Z",
          ],
          interval: 9,
          onDays: [
            "TU",
            "SA",
          ],
          onMonthDays: [
            -2,
          ],
          onMonths: [
            -4,
            8,
            0,
            9,
            4,
            -11,
            7,
            1,
            -5,
          ],
          onWeeks: [
            -36,
            -31,
            -16,
            -6,
            44,
            -37,
            14,
            38,
            -27,
            -22,
            -2,
            24,
            7,
            50,
            46,
            52,
            20,
            37,
            31,
            48,
            35,
            -46,
            13,
            22,
            53,
            20,
            -28,
            -2,
            39,
            13,
            4,
            0,
            7,
            -38,
            -35,
            41,
            49,
            12,
            17,
            8,
            49,
            -47,
            46,
            25,
            14,
            -26,
            -37,
            -25,
            -41,
            27,
            28,
            -19,
          ],
          onYearDays: [
            -256,
            -328,
            -312,
            50,
            -251,
            -338,
            -315,
            214,
            129,
            -263,
            -108,
            -11,
            206,
            -29,
            -159,
            -29,
            -264,
            295,
            -231,
            53,
            34,
            -366,
            326,
            -202,
            151,
            79,
            -66,
            11,
            -42,
            73,
            338,
            -155,
            197,
            260,
            356,
            -323,
            -213,
            -332,
            -305,
            -182,
            -253,
            -276,
            -285,
            96,
            -336,
            269,
            -233,
            250,
            -112,
            -307,
            -96,
            54,
            267,
            318,
            -66,
            11,
            -303,
            231,
            165,
            -297,
            -348,
            -355,
            364,
            312,
            -26,
            111,
            162,
            280,
            312,
            337,
            235,
            68,
            -282,
            363,
            212,
            -328,
            9,
            -24,
            -163,
            -101,
            -79,
            -264,
            -157,
            188,
            290,
            51,
            -213,
            216,
            230,
            -270,
            -211,
            -156,
            -165,
            -305,
            -45,
            224,
            -248,
            65,
            9,
            274,
            -299,
            -228,
            33,
            -42,
            356,
            -311,
            241,
            261,
            -136,
            -252,
            166,
            208,
            -126,
            64,
            323,
            -104,
            -106,
            -248,
            -41,
            -109,
            245,
            47,
            205,
            358,
            -296,
            214,
            -157,
            -313,
            -303,
            -54,
            -229,
            231,
            -94,
            -198,
            338,
            199,
            5,
            42,
            309,
            73,
            56,
            -120,
            351,
            6,
            -193,
            21,
            78,
            57,
            -269,
            -76,
            -299,
            295,
            -278,
            11,
            121,
            -323,
            156,
            67,
            152,
            284,
            108,
            -7,
            329,
            -32,
            333,
            -338,
            148,
            -42,
            151,
            145,
            -34,
            -36,
            296,
            -198,
            -317,
            -161,
            -253,
            328,
            -57,
            134,
            -289,
            229,
            44,
            16,
            -256,
            289,
            -234,
            197,
            333,
            228,
            -143,
            -202,
            -172,
            -262,
            -203,
            -83,
            -242,
            -173,
            336,
            298,
            -319,
            66,
            254,
            214,
            -118,
            -216,
            -168,
            44,
            -243,
            207,
            -28,
            -4,
            -272,
            79,
          ],
          timezone: "Atlantic/Reykjavik",
          weekStart: "TU",
        },
      ],
      recurringEventId: "07021b25-0d15-4e3e-94bf-fe46b7ebd92d",
      sendNotifications: false,
      startAt: "2020-05-20T07:55:34.461Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-06-26T04:36:19.042Z",
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

Create an event

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

Create an event

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
        startAt: new Date("2024-11-18T10:15:15.925Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "b551526d-8b33-4d90-855f-67e3ce7f4881",
      type: "CALL",
      updatedAt: new Date("2026-09-09T12:52:42.825Z"),
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
        startAt: new Date("2024-11-18T10:15:15.925Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "b551526d-8b33-4d90-855f-67e3ce7f4881",
      type: "CALL",
      updatedAt: new Date("2026-09-09T12:52:42.825Z"),
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

Retrieve an event

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

Retrieve an event

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

Retrieve an event

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

Retrieve an event

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

Retrieve an event

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

List all events

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

List all events

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

List all events

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

List all events

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

List all events

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

Update an event

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
      endAt: "2020-05-20T17:02:26.502Z",
      id: "35c43f4f-4c87-485d-bf34-f551f86b4d4b",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 8,
          endAt: new Date("2025-12-26T05:12:51.373Z"),
          excludedDates: [
            "2025-09-30T21:23:43.902Z",
            "2023-10-09T11:20:23.002Z",
            "2024-02-15T12:22:14.418Z",
          ],
          frequency: "MONTHLY",
          includedDates: [
            "2021-02-16T21:44:17.255Z",
          ],
          interval: 4,
          onDays: [
            "TH",
            "MO",
            "TH",
          ],
          onMonthDays: [
            -26,
          ],
          onMonths: [
            12,
            9,
            -1,
            0,
            1,
            6,
            -10,
            9,
            0,
            4,
            -2,
          ],
          onWeeks: [
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
          ],
          onYearDays: [
            -35,
            14,
            -338,
            175,
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
          ],
          timezone: "Asia/Ho_Chi_Minh",
          weekStart: "SU",
        },
        {
          count: 9,
          endAt: new Date("2025-04-30T04:39:02.822Z"),
          excludedDates: [
            "2020-04-29T00:33:55.778Z",
          ],
          frequency: "DAILY",
          includedDates: [
            "2020-09-11T02:20:07.444Z",
            "2021-11-29T00:58:07.029Z",
            "2019-12-22T18:01:10.166Z",
          ],
          interval: 1,
          onDays: [
            "WE",
            "TU",
            "WE",
            "SA",
            "SA",
            "SA",
          ],
          onMonthDays: [
            1,
          ],
          onMonths: [
            4,
            0,
            -3,
          ],
          onWeeks: [
            -7,
            -19,
            50,
            -37,
            43,
            -48,
            -30,
            34,
            36,
            -33,
            24,
            -4,
          ],
          onYearDays: [
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
            -35,
            -121,
            262,
            32,
            190,
            107,
            -145,
            91,
            313,
            -48,
            277,
            104,
            342,
            297,
            -216,
            346,
            -257,
            307,
            -44,
            264,
            -153,
            -268,
            92,
            152,
            -182,
            -334,
            89,
            343,
            -320,
            -36,
            84,
            340,
            -88,
            -278,
            202,
            291,
            95,
            -234,
            -304,
            -157,
            -82,
            -339,
            83,
            2,
            -238,
            -204,
            206,
            -273,
            -78,
            -21,
            270,
            -266,
            -276,
            154,
            -97,
            -43,
            -3,
            191,
            -302,
            290,
            -118,
            -125,
            -294,
            115,
            -73,
            -244,
            127,
            26,
            251,
            47,
            -157,
            22,
            -361,
            318,
            352,
            358,
            167,
            210,
            -185,
            327,
            117,
            350,
            -170,
            -144,
            -14,
            -37,
            318,
            243,
            33,
            90,
            319,
            -270,
            229,
            122,
            287,
            -90,
            -69,
            -134,
            -184,
            25,
            -178,
            -89,
            -273,
            -49,
            -362,
            -9,
            -71,
            -347,
            353,
            342,
            133,
            -116,
            231,
            -231,
            51,
            288,
            186,
            -328,
            275,
            81,
            94,
            -263,
            114,
            13,
            -357,
            171,
            -242,
            -85,
            -362,
            108,
            164,
            69,
            15,
            57,
            -287,
            100,
            165,
            205,
            204,
            -78,
            360,
            -80,
            -120,
            -255,
            -77,
            110,
            -26,
            -149,
            -254,
            95,
            32,
            -57,
            -195,
            100,
            221,
            74,
            274,
            15,
            353,
            204,
            -365,
            315,
            344,
            199,
            -59,
            272,
            173,
            -40,
            -318,
            -330,
            -365,
            -272,
            -149,
            -27,
            -334,
            -277,
            344,
            351,
            -310,
            264,
            281,
            176,
            191,
            -183,
            288,
            -112,
            -55,
            -166,
            258,
            194,
            59,
          ],
          timezone: "America/Guadeloupe",
          weekStart: "TU",
        },
        {
          count: 1,
          endAt: new Date("2020-11-04T17:37:50.881Z"),
          excludedDates: [
            "2023-01-11T20:50:29.626Z",
            "2021-09-07T12:54:49.815Z",
          ],
          frequency: "WEEKLY",
          includedDates: [
            "2024-08-31T09:53:36.720Z",
          ],
          interval: 9,
          onDays: [
            "TU",
            "SA",
          ],
          onMonthDays: [
            -2,
          ],
          onMonths: [
            -4,
            8,
            0,
            9,
            4,
            -11,
            7,
            1,
            -5,
          ],
          onWeeks: [
            -36,
            -31,
            -16,
            -6,
            44,
            -37,
            14,
            38,
            -27,
            -22,
            -2,
            24,
            7,
            50,
            46,
            52,
            20,
            37,
            31,
            48,
            35,
            -46,
            13,
            22,
            53,
            20,
            -28,
            -2,
            39,
            13,
            4,
            0,
            7,
            -38,
            -35,
            41,
            49,
            12,
            17,
            8,
            49,
            -47,
            46,
            25,
            14,
            -26,
            -37,
            -25,
            -41,
            27,
            28,
            -19,
          ],
          onYearDays: [
            -256,
            -328,
            -312,
            50,
            -251,
            -338,
            -315,
            214,
            129,
            -263,
            -108,
            -11,
            206,
            -29,
            -159,
            -29,
            -264,
            295,
            -231,
            53,
            34,
            -366,
            326,
            -202,
            151,
            79,
            -66,
            11,
            -42,
            73,
            338,
            -155,
            197,
            260,
            356,
            -323,
            -213,
            -332,
            -305,
            -182,
            -253,
            -276,
            -285,
            96,
            -336,
            269,
            -233,
            250,
            -112,
            -307,
            -96,
            54,
            267,
            318,
            -66,
            11,
            -303,
            231,
            165,
            -297,
            -348,
            -355,
            364,
            312,
            -26,
            111,
            162,
            280,
            312,
            337,
            235,
            68,
            -282,
            363,
            212,
            -328,
            9,
            -24,
            -163,
            -101,
            -79,
            -264,
            -157,
            188,
            290,
            51,
            -213,
            216,
            230,
            -270,
            -211,
            -156,
            -165,
            -305,
            -45,
            224,
            -248,
            65,
            9,
            274,
            -299,
            -228,
            33,
            -42,
            356,
            -311,
            241,
            261,
            -136,
            -252,
            166,
            208,
            -126,
            64,
            323,
            -104,
            -106,
            -248,
            -41,
            -109,
            245,
            47,
            205,
            358,
            -296,
            214,
            -157,
            -313,
            -303,
            -54,
            -229,
            231,
            -94,
            -198,
            338,
            199,
            5,
            42,
            309,
            73,
            56,
            -120,
            351,
            6,
            -193,
            21,
            78,
            57,
            -269,
            -76,
            -299,
            295,
            -278,
            11,
            121,
            -323,
            156,
            67,
            152,
            284,
            108,
            -7,
            329,
            -32,
            333,
            -338,
            148,
            -42,
            151,
            145,
            -34,
            -36,
            296,
            -198,
            -317,
            -161,
            -253,
            328,
            -57,
            134,
            -289,
            229,
            44,
            16,
            -256,
            289,
            -234,
            197,
            333,
            228,
            -143,
            -202,
            -172,
            -262,
            -203,
            -83,
            -242,
            -173,
            336,
            298,
            -319,
            66,
            254,
            214,
            -118,
            -216,
            -168,
            44,
            -243,
            207,
            -28,
            -4,
            -272,
            79,
          ],
          timezone: "Atlantic/Reykjavik",
          weekStart: "TU",
        },
      ],
      recurringEventId: "038797b6-cddf-453f-bb78-e2e4314a2521",
      sendNotifications: false,
      startAt: "2020-05-20T07:55:34.465Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-06-26T04:36:19.045Z",
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
      endAt: "2020-05-20T17:02:26.502Z",
      id: "35c43f4f-4c87-485d-bf34-f551f86b4d4b",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 8,
          endAt: new Date("2025-12-26T05:12:51.373Z"),
          excludedDates: [
            "2025-09-30T21:23:43.902Z",
            "2023-10-09T11:20:23.002Z",
            "2024-02-15T12:22:14.418Z",
          ],
          frequency: "MONTHLY",
          includedDates: [
            "2021-02-16T21:44:17.255Z",
          ],
          interval: 4,
          onDays: [
            "TH",
            "MO",
            "TH",
          ],
          onMonthDays: [
            -26,
          ],
          onMonths: [
            12,
            9,
            -1,
            0,
            1,
            6,
            -10,
            9,
            0,
            4,
            -2,
          ],
          onWeeks: [
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
          ],
          onYearDays: [
            -35,
            14,
            -338,
            175,
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
          ],
          timezone: "Asia/Ho_Chi_Minh",
          weekStart: "SU",
        },
        {
          count: 9,
          endAt: new Date("2025-04-30T04:39:02.822Z"),
          excludedDates: [
            "2020-04-29T00:33:55.778Z",
          ],
          frequency: "DAILY",
          includedDates: [
            "2020-09-11T02:20:07.444Z",
            "2021-11-29T00:58:07.029Z",
            "2019-12-22T18:01:10.166Z",
          ],
          interval: 1,
          onDays: [
            "WE",
            "TU",
            "WE",
            "SA",
            "SA",
            "SA",
          ],
          onMonthDays: [
            1,
          ],
          onMonths: [
            4,
            0,
            -3,
          ],
          onWeeks: [
            -7,
            -19,
            50,
            -37,
            43,
            -48,
            -30,
            34,
            36,
            -33,
            24,
            -4,
          ],
          onYearDays: [
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
            -35,
            -121,
            262,
            32,
            190,
            107,
            -145,
            91,
            313,
            -48,
            277,
            104,
            342,
            297,
            -216,
            346,
            -257,
            307,
            -44,
            264,
            -153,
            -268,
            92,
            152,
            -182,
            -334,
            89,
            343,
            -320,
            -36,
            84,
            340,
            -88,
            -278,
            202,
            291,
            95,
            -234,
            -304,
            -157,
            -82,
            -339,
            83,
            2,
            -238,
            -204,
            206,
            -273,
            -78,
            -21,
            270,
            -266,
            -276,
            154,
            -97,
            -43,
            -3,
            191,
            -302,
            290,
            -118,
            -125,
            -294,
            115,
            -73,
            -244,
            127,
            26,
            251,
            47,
            -157,
            22,
            -361,
            318,
            352,
            358,
            167,
            210,
            -185,
            327,
            117,
            350,
            -170,
            -144,
            -14,
            -37,
            318,
            243,
            33,
            90,
            319,
            -270,
            229,
            122,
            287,
            -90,
            -69,
            -134,
            -184,
            25,
            -178,
            -89,
            -273,
            -49,
            -362,
            -9,
            -71,
            -347,
            353,
            342,
            133,
            -116,
            231,
            -231,
            51,
            288,
            186,
            -328,
            275,
            81,
            94,
            -263,
            114,
            13,
            -357,
            171,
            -242,
            -85,
            -362,
            108,
            164,
            69,
            15,
            57,
            -287,
            100,
            165,
            205,
            204,
            -78,
            360,
            -80,
            -120,
            -255,
            -77,
            110,
            -26,
            -149,
            -254,
            95,
            32,
            -57,
            -195,
            100,
            221,
            74,
            274,
            15,
            353,
            204,
            -365,
            315,
            344,
            199,
            -59,
            272,
            173,
            -40,
            -318,
            -330,
            -365,
            -272,
            -149,
            -27,
            -334,
            -277,
            344,
            351,
            -310,
            264,
            281,
            176,
            191,
            -183,
            288,
            -112,
            -55,
            -166,
            258,
            194,
            59,
          ],
          timezone: "America/Guadeloupe",
          weekStart: "TU",
        },
        {
          count: 1,
          endAt: new Date("2020-11-04T17:37:50.881Z"),
          excludedDates: [
            "2023-01-11T20:50:29.626Z",
            "2021-09-07T12:54:49.815Z",
          ],
          frequency: "WEEKLY",
          includedDates: [
            "2024-08-31T09:53:36.720Z",
          ],
          interval: 9,
          onDays: [
            "TU",
            "SA",
          ],
          onMonthDays: [
            -2,
          ],
          onMonths: [
            -4,
            8,
            0,
            9,
            4,
            -11,
            7,
            1,
            -5,
          ],
          onWeeks: [
            -36,
            -31,
            -16,
            -6,
            44,
            -37,
            14,
            38,
            -27,
            -22,
            -2,
            24,
            7,
            50,
            46,
            52,
            20,
            37,
            31,
            48,
            35,
            -46,
            13,
            22,
            53,
            20,
            -28,
            -2,
            39,
            13,
            4,
            0,
            7,
            -38,
            -35,
            41,
            49,
            12,
            17,
            8,
            49,
            -47,
            46,
            25,
            14,
            -26,
            -37,
            -25,
            -41,
            27,
            28,
            -19,
          ],
          onYearDays: [
            -256,
            -328,
            -312,
            50,
            -251,
            -338,
            -315,
            214,
            129,
            -263,
            -108,
            -11,
            206,
            -29,
            -159,
            -29,
            -264,
            295,
            -231,
            53,
            34,
            -366,
            326,
            -202,
            151,
            79,
            -66,
            11,
            -42,
            73,
            338,
            -155,
            197,
            260,
            356,
            -323,
            -213,
            -332,
            -305,
            -182,
            -253,
            -276,
            -285,
            96,
            -336,
            269,
            -233,
            250,
            -112,
            -307,
            -96,
            54,
            267,
            318,
            -66,
            11,
            -303,
            231,
            165,
            -297,
            -348,
            -355,
            364,
            312,
            -26,
            111,
            162,
            280,
            312,
            337,
            235,
            68,
            -282,
            363,
            212,
            -328,
            9,
            -24,
            -163,
            -101,
            -79,
            -264,
            -157,
            188,
            290,
            51,
            -213,
            216,
            230,
            -270,
            -211,
            -156,
            -165,
            -305,
            -45,
            224,
            -248,
            65,
            9,
            274,
            -299,
            -228,
            33,
            -42,
            356,
            -311,
            241,
            261,
            -136,
            -252,
            166,
            208,
            -126,
            64,
            323,
            -104,
            -106,
            -248,
            -41,
            -109,
            245,
            47,
            205,
            358,
            -296,
            214,
            -157,
            -313,
            -303,
            -54,
            -229,
            231,
            -94,
            -198,
            338,
            199,
            5,
            42,
            309,
            73,
            56,
            -120,
            351,
            6,
            -193,
            21,
            78,
            57,
            -269,
            -76,
            -299,
            295,
            -278,
            11,
            121,
            -323,
            156,
            67,
            152,
            284,
            108,
            -7,
            329,
            -32,
            333,
            -338,
            148,
            -42,
            151,
            145,
            -34,
            -36,
            296,
            -198,
            -317,
            -161,
            -253,
            328,
            -57,
            134,
            -289,
            229,
            44,
            16,
            -256,
            289,
            -234,
            197,
            333,
            228,
            -143,
            -202,
            -172,
            -262,
            -203,
            -83,
            -242,
            -173,
            336,
            298,
            -319,
            66,
            254,
            214,
            -118,
            -216,
            -168,
            44,
            -243,
            207,
            -28,
            -4,
            -272,
            79,
          ],
          timezone: "Atlantic/Reykjavik",
          weekStart: "TU",
        },
      ],
      recurringEventId: "038797b6-cddf-453f-bb78-e2e4314a2521",
      sendNotifications: false,
      startAt: "2020-05-20T07:55:34.465Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-06-26T04:36:19.045Z",
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

Update an event

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

Update an event

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
        startAt: new Date("2024-11-18T10:15:15.947Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "e57130d1-475d-4d5e-a829-64369bb8e28d",
      type: "CALL",
      updatedAt: new Date("2026-09-09T12:52:42.855Z"),
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
        startAt: new Date("2024-11-18T10:15:15.947Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "e57130d1-475d-4d5e-a829-64369bb8e28d",
      type: "CALL",
      updatedAt: new Date("2026-09-09T12:52:42.855Z"),
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

Update an event

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
      id: "929fee18-e57f-43ae-87ce-2f0b4a8ffb29",
      isReplacingOriginal: false,
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
      id: "929fee18-e57f-43ae-87ce-2f0b4a8ffb29",
      isReplacingOriginal: false,
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

Remove an event

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

Remove an event

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

Remove an event

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

Update an event

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
      endAt: "2020-05-20T17:02:26.502Z",
      id: "35c43f4f-4c87-485d-bf34-f551f86b4d4b",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 8,
          endAt: new Date("2025-12-26T05:12:51.373Z"),
          excludedDates: [
            "2025-09-30T21:23:43.902Z",
            "2023-10-09T11:20:23.002Z",
            "2024-02-15T12:22:14.418Z",
          ],
          frequency: "MONTHLY",
          includedDates: [
            "2021-02-16T21:44:17.255Z",
          ],
          interval: 4,
          onDays: [
            "TH",
            "MO",
            "TH",
          ],
          onMonthDays: [
            -26,
          ],
          onMonths: [
            12,
            9,
            -1,
            0,
            1,
            6,
            -10,
            9,
            0,
            4,
            -2,
          ],
          onWeeks: [
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
          ],
          onYearDays: [
            -35,
            14,
            -338,
            175,
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
          ],
          timezone: "Asia/Ho_Chi_Minh",
          weekStart: "SU",
        },
        {
          count: 9,
          endAt: new Date("2025-04-30T04:39:02.822Z"),
          excludedDates: [
            "2020-04-29T00:33:55.778Z",
          ],
          frequency: "DAILY",
          includedDates: [
            "2020-09-11T02:20:07.444Z",
            "2021-11-29T00:58:07.029Z",
            "2019-12-22T18:01:10.166Z",
          ],
          interval: 1,
          onDays: [
            "WE",
            "TU",
            "WE",
            "SA",
            "SA",
            "SA",
          ],
          onMonthDays: [
            1,
          ],
          onMonths: [
            4,
            0,
            -3,
          ],
          onWeeks: [
            -7,
            -19,
            50,
            -37,
            43,
            -48,
            -30,
            34,
            36,
            -33,
            24,
            -4,
          ],
          onYearDays: [
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
            -35,
            -121,
            262,
            32,
            190,
            107,
            -145,
            91,
            313,
            -48,
            277,
            104,
            342,
            297,
            -216,
            346,
            -257,
            307,
            -44,
            264,
            -153,
            -268,
            92,
            152,
            -182,
            -334,
            89,
            343,
            -320,
            -36,
            84,
            340,
            -88,
            -278,
            202,
            291,
            95,
            -234,
            -304,
            -157,
            -82,
            -339,
            83,
            2,
            -238,
            -204,
            206,
            -273,
            -78,
            -21,
            270,
            -266,
            -276,
            154,
            -97,
            -43,
            -3,
            191,
            -302,
            290,
            -118,
            -125,
            -294,
            115,
            -73,
            -244,
            127,
            26,
            251,
            47,
            -157,
            22,
            -361,
            318,
            352,
            358,
            167,
            210,
            -185,
            327,
            117,
            350,
            -170,
            -144,
            -14,
            -37,
            318,
            243,
            33,
            90,
            319,
            -270,
            229,
            122,
            287,
            -90,
            -69,
            -134,
            -184,
            25,
            -178,
            -89,
            -273,
            -49,
            -362,
            -9,
            -71,
            -347,
            353,
            342,
            133,
            -116,
            231,
            -231,
            51,
            288,
            186,
            -328,
            275,
            81,
            94,
            -263,
            114,
            13,
            -357,
            171,
            -242,
            -85,
            -362,
            108,
            164,
            69,
            15,
            57,
            -287,
            100,
            165,
            205,
            204,
            -78,
            360,
            -80,
            -120,
            -255,
            -77,
            110,
            -26,
            -149,
            -254,
            95,
            32,
            -57,
            -195,
            100,
            221,
            74,
            274,
            15,
            353,
            204,
            -365,
            315,
            344,
            199,
            -59,
            272,
            173,
            -40,
            -318,
            -330,
            -365,
            -272,
            -149,
            -27,
            -334,
            -277,
            344,
            351,
            -310,
            264,
            281,
            176,
            191,
            -183,
            288,
            -112,
            -55,
            -166,
            258,
            194,
            59,
          ],
          timezone: "America/Guadeloupe",
          weekStart: "TU",
        },
        {
          count: 1,
          endAt: new Date("2020-11-04T17:37:50.881Z"),
          excludedDates: [
            "2023-01-11T20:50:29.626Z",
            "2021-09-07T12:54:49.815Z",
          ],
          frequency: "WEEKLY",
          includedDates: [
            "2024-08-31T09:53:36.720Z",
          ],
          interval: 9,
          onDays: [
            "TU",
            "SA",
          ],
          onMonthDays: [
            -2,
          ],
          onMonths: [
            -4,
            8,
            0,
            9,
            4,
            -11,
            7,
            1,
            -5,
          ],
          onWeeks: [
            -36,
            -31,
            -16,
            -6,
            44,
            -37,
            14,
            38,
            -27,
            -22,
            -2,
            24,
            7,
            50,
            46,
            52,
            20,
            37,
            31,
            48,
            35,
            -46,
            13,
            22,
            53,
            20,
            -28,
            -2,
            39,
            13,
            4,
            0,
            7,
            -38,
            -35,
            41,
            49,
            12,
            17,
            8,
            49,
            -47,
            46,
            25,
            14,
            -26,
            -37,
            -25,
            -41,
            27,
            28,
            -19,
          ],
          onYearDays: [
            -256,
            -328,
            -312,
            50,
            -251,
            -338,
            -315,
            214,
            129,
            -263,
            -108,
            -11,
            206,
            -29,
            -159,
            -29,
            -264,
            295,
            -231,
            53,
            34,
            -366,
            326,
            -202,
            151,
            79,
            -66,
            11,
            -42,
            73,
            338,
            -155,
            197,
            260,
            356,
            -323,
            -213,
            -332,
            -305,
            -182,
            -253,
            -276,
            -285,
            96,
            -336,
            269,
            -233,
            250,
            -112,
            -307,
            -96,
            54,
            267,
            318,
            -66,
            11,
            -303,
            231,
            165,
            -297,
            -348,
            -355,
            364,
            312,
            -26,
            111,
            162,
            280,
            312,
            337,
            235,
            68,
            -282,
            363,
            212,
            -328,
            9,
            -24,
            -163,
            -101,
            -79,
            -264,
            -157,
            188,
            290,
            51,
            -213,
            216,
            230,
            -270,
            -211,
            -156,
            -165,
            -305,
            -45,
            224,
            -248,
            65,
            9,
            274,
            -299,
            -228,
            33,
            -42,
            356,
            -311,
            241,
            261,
            -136,
            -252,
            166,
            208,
            -126,
            64,
            323,
            -104,
            -106,
            -248,
            -41,
            -109,
            245,
            47,
            205,
            358,
            -296,
            214,
            -157,
            -313,
            -303,
            -54,
            -229,
            231,
            -94,
            -198,
            338,
            199,
            5,
            42,
            309,
            73,
            56,
            -120,
            351,
            6,
            -193,
            21,
            78,
            57,
            -269,
            -76,
            -299,
            295,
            -278,
            11,
            121,
            -323,
            156,
            67,
            152,
            284,
            108,
            -7,
            329,
            -32,
            333,
            -338,
            148,
            -42,
            151,
            145,
            -34,
            -36,
            296,
            -198,
            -317,
            -161,
            -253,
            328,
            -57,
            134,
            -289,
            229,
            44,
            16,
            -256,
            289,
            -234,
            197,
            333,
            228,
            -143,
            -202,
            -172,
            -262,
            -203,
            -83,
            -242,
            -173,
            336,
            298,
            -319,
            66,
            254,
            214,
            -118,
            -216,
            -168,
            44,
            -243,
            207,
            -28,
            -4,
            -272,
            79,
          ],
          timezone: "Atlantic/Reykjavik",
          weekStart: "TU",
        },
      ],
      recurringEventId: "038797b6-cddf-453f-bb78-e2e4314a2521",
      sendNotifications: false,
      startAt: "2020-05-20T07:55:34.465Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-06-26T04:36:19.045Z",
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
      endAt: "2020-05-20T17:02:26.502Z",
      id: "35c43f4f-4c87-485d-bf34-f551f86b4d4b",
      isAllDay: false,
      isFree: false,
      isPrivate: false,
      location: "621 Boehm Prairie",
      notes: "Aegre traho.",
      recurrence: [
        {
          count: 8,
          endAt: new Date("2025-12-26T05:12:51.373Z"),
          excludedDates: [
            "2025-09-30T21:23:43.902Z",
            "2023-10-09T11:20:23.002Z",
            "2024-02-15T12:22:14.418Z",
          ],
          frequency: "MONTHLY",
          includedDates: [
            "2021-02-16T21:44:17.255Z",
          ],
          interval: 4,
          onDays: [
            "TH",
            "MO",
            "TH",
          ],
          onMonthDays: [
            -26,
          ],
          onMonths: [
            12,
            9,
            -1,
            0,
            1,
            6,
            -10,
            9,
            0,
            4,
            -2,
          ],
          onWeeks: [
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
          ],
          onYearDays: [
            -35,
            14,
            -338,
            175,
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
          ],
          timezone: "Asia/Ho_Chi_Minh",
          weekStart: "SU",
        },
        {
          count: 9,
          endAt: new Date("2025-04-30T04:39:02.822Z"),
          excludedDates: [
            "2020-04-29T00:33:55.778Z",
          ],
          frequency: "DAILY",
          includedDates: [
            "2020-09-11T02:20:07.444Z",
            "2021-11-29T00:58:07.029Z",
            "2019-12-22T18:01:10.166Z",
          ],
          interval: 1,
          onDays: [
            "WE",
            "TU",
            "WE",
            "SA",
            "SA",
            "SA",
          ],
          onMonthDays: [
            1,
          ],
          onMonths: [
            4,
            0,
            -3,
          ],
          onWeeks: [
            -7,
            -19,
            50,
            -37,
            43,
            -48,
            -30,
            34,
            36,
            -33,
            24,
            -4,
          ],
          onYearDays: [
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
            -35,
            -121,
            262,
            32,
            190,
            107,
            -145,
            91,
            313,
            -48,
            277,
            104,
            342,
            297,
            -216,
            346,
            -257,
            307,
            -44,
            264,
            -153,
            -268,
            92,
            152,
            -182,
            -334,
            89,
            343,
            -320,
            -36,
            84,
            340,
            -88,
            -278,
            202,
            291,
            95,
            -234,
            -304,
            -157,
            -82,
            -339,
            83,
            2,
            -238,
            -204,
            206,
            -273,
            -78,
            -21,
            270,
            -266,
            -276,
            154,
            -97,
            -43,
            -3,
            191,
            -302,
            290,
            -118,
            -125,
            -294,
            115,
            -73,
            -244,
            127,
            26,
            251,
            47,
            -157,
            22,
            -361,
            318,
            352,
            358,
            167,
            210,
            -185,
            327,
            117,
            350,
            -170,
            -144,
            -14,
            -37,
            318,
            243,
            33,
            90,
            319,
            -270,
            229,
            122,
            287,
            -90,
            -69,
            -134,
            -184,
            25,
            -178,
            -89,
            -273,
            -49,
            -362,
            -9,
            -71,
            -347,
            353,
            342,
            133,
            -116,
            231,
            -231,
            51,
            288,
            186,
            -328,
            275,
            81,
            94,
            -263,
            114,
            13,
            -357,
            171,
            -242,
            -85,
            -362,
            108,
            164,
            69,
            15,
            57,
            -287,
            100,
            165,
            205,
            204,
            -78,
            360,
            -80,
            -120,
            -255,
            -77,
            110,
            -26,
            -149,
            -254,
            95,
            32,
            -57,
            -195,
            100,
            221,
            74,
            274,
            15,
            353,
            204,
            -365,
            315,
            344,
            199,
            -59,
            272,
            173,
            -40,
            -318,
            -330,
            -365,
            -272,
            -149,
            -27,
            -334,
            -277,
            344,
            351,
            -310,
            264,
            281,
            176,
            191,
            -183,
            288,
            -112,
            -55,
            -166,
            258,
            194,
            59,
          ],
          timezone: "America/Guadeloupe",
          weekStart: "TU",
        },
        {
          count: 1,
          endAt: new Date("2020-11-04T17:37:50.881Z"),
          excludedDates: [
            "2023-01-11T20:50:29.626Z",
            "2021-09-07T12:54:49.815Z",
          ],
          frequency: "WEEKLY",
          includedDates: [
            "2024-08-31T09:53:36.720Z",
          ],
          interval: 9,
          onDays: [
            "TU",
            "SA",
          ],
          onMonthDays: [
            -2,
          ],
          onMonths: [
            -4,
            8,
            0,
            9,
            4,
            -11,
            7,
            1,
            -5,
          ],
          onWeeks: [
            -36,
            -31,
            -16,
            -6,
            44,
            -37,
            14,
            38,
            -27,
            -22,
            -2,
            24,
            7,
            50,
            46,
            52,
            20,
            37,
            31,
            48,
            35,
            -46,
            13,
            22,
            53,
            20,
            -28,
            -2,
            39,
            13,
            4,
            0,
            7,
            -38,
            -35,
            41,
            49,
            12,
            17,
            8,
            49,
            -47,
            46,
            25,
            14,
            -26,
            -37,
            -25,
            -41,
            27,
            28,
            -19,
          ],
          onYearDays: [
            -256,
            -328,
            -312,
            50,
            -251,
            -338,
            -315,
            214,
            129,
            -263,
            -108,
            -11,
            206,
            -29,
            -159,
            -29,
            -264,
            295,
            -231,
            53,
            34,
            -366,
            326,
            -202,
            151,
            79,
            -66,
            11,
            -42,
            73,
            338,
            -155,
            197,
            260,
            356,
            -323,
            -213,
            -332,
            -305,
            -182,
            -253,
            -276,
            -285,
            96,
            -336,
            269,
            -233,
            250,
            -112,
            -307,
            -96,
            54,
            267,
            318,
            -66,
            11,
            -303,
            231,
            165,
            -297,
            -348,
            -355,
            364,
            312,
            -26,
            111,
            162,
            280,
            312,
            337,
            235,
            68,
            -282,
            363,
            212,
            -328,
            9,
            -24,
            -163,
            -101,
            -79,
            -264,
            -157,
            188,
            290,
            51,
            -213,
            216,
            230,
            -270,
            -211,
            -156,
            -165,
            -305,
            -45,
            224,
            -248,
            65,
            9,
            274,
            -299,
            -228,
            33,
            -42,
            356,
            -311,
            241,
            261,
            -136,
            -252,
            166,
            208,
            -126,
            64,
            323,
            -104,
            -106,
            -248,
            -41,
            -109,
            245,
            47,
            205,
            358,
            -296,
            214,
            -157,
            -313,
            -303,
            -54,
            -229,
            231,
            -94,
            -198,
            338,
            199,
            5,
            42,
            309,
            73,
            56,
            -120,
            351,
            6,
            -193,
            21,
            78,
            57,
            -269,
            -76,
            -299,
            295,
            -278,
            11,
            121,
            -323,
            156,
            67,
            152,
            284,
            108,
            -7,
            329,
            -32,
            333,
            -338,
            148,
            -42,
            151,
            145,
            -34,
            -36,
            296,
            -198,
            -317,
            -161,
            -253,
            328,
            -57,
            134,
            -289,
            229,
            44,
            16,
            -256,
            289,
            -234,
            197,
            333,
            228,
            -143,
            -202,
            -172,
            -262,
            -203,
            -83,
            -242,
            -173,
            336,
            298,
            -319,
            66,
            254,
            214,
            -118,
            -216,
            -168,
            44,
            -243,
            207,
            -28,
            -4,
            -272,
            79,
          ],
          timezone: "Atlantic/Reykjavik",
          weekStart: "TU",
        },
      ],
      recurringEventId: "038797b6-cddf-453f-bb78-e2e4314a2521",
      sendNotifications: false,
      startAt: "2020-05-20T07:55:34.465Z",
      status: "CONFIRMED",
      subject: "Sunt spargo tepidus bestia vigor credo coadunatio appello.",
      timezone: "Asia/Bangkok",
      updatedAt: "2020-06-26T04:36:19.045Z",
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

Update an event

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

Update an event

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
        startAt: new Date("2024-11-18T10:15:15.947Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "e57130d1-475d-4d5e-a829-64369bb8e28d",
      type: "CALL",
      updatedAt: new Date("2026-09-09T12:52:42.855Z"),
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
        startAt: new Date("2024-11-18T10:15:15.947Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "e57130d1-475d-4d5e-a829-64369bb8e28d",
      type: "CALL",
      updatedAt: new Date("2026-09-09T12:52:42.855Z"),
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

Update an event

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
      id: "929fee18-e57f-43ae-87ce-2f0b4a8ffb29",
      isReplacingOriginal: false,
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
      id: "929fee18-e57f-43ae-87ce-2f0b4a8ffb29",
      isReplacingOriginal: false,
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