# Uc

## Overview

### Available Operations

* [createUcCall](#createuccall) - Create a call
* [createUcComment](#createuccomment) - Create a comment
* [createUcContact](#createuccontact) - Create a contact
* [createUcRecording](#createucrecording) - Create a recording
* [getUcCall](#getuccall) - Retrieve a call
* [getUcComment](#getuccomment) - Retrieve a comment
* [getUcContact](#getuccontact) - Retrieve a contact
* [getUcRecording](#getucrecording) - Retrieve a recording
* [getUcScorecard](#getucscorecard) - Retrieve a scorecard
* [getUcScorecardtemplate](#getucscorecardtemplate) - Retrieve a scorecardtemplate
* [listUcCalls](#listuccalls) - List all calls
* [listUcComments](#listuccomments) - List all comments
* [listUcContacts](#listuccontacts) - List all contacts
* [listUcRecordings](#listucrecordings) - List all recordings
* [listUcScorecards](#listucscorecards) - List all scorecards
* [listUcScorecardtemplates](#listucscorecardtemplates) - List all scorecardtemplates
* [patchUcCall](#patchuccall) - Update a call
* [patchUcComment](#patchuccomment) - Update a comment
* [patchUcContact](#patchuccontact) - Update a contact
* [patchUcRecording](#patchucrecording) - Update a recording
* [removeUcComment](#removeuccomment) - Remove a comment
* [removeUcContact](#removeuccontact) - Remove a contact
* [removeUcRecording](#removeucrecording) - Remove a recording
* [updateUcCall](#updateuccall) - Update a call
* [updateUcComment](#updateuccomment) - Update a comment
* [updateUcContact](#updateuccontact) - Update a contact
* [updateUcRecording](#updateucrecording) - Update a recording

## createUcCall

Creates a UcCall. Provide the unified UcCall fields in the request body; they are mapped to the provider's API. Returns the created UcCall.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createUcCall" method="post" path="/uc/{connection_id}/call" example="uc_call" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.createUcCall({
    ucCall: {
      answerAt: new Date("2025-05-18T03:34:42.227Z"),
      contacts: [],
      conversationIdentifier: "65870c5e-7ff3-465b-9732-7212a2e4671c",
      costAmount: 1.564,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2556,
      endAt: new Date("2024-06-01T11:38:09.352Z"),
      id: "65870c5e-7ff3-465b-9732-7212a2e4671c",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "PRICE",
          id: "a2653887-0ec7-478d-86f3-1a83e663f017",
          namespace: "custom",
          slug: "custom_field",
          value: "tui",
        },
      ],
      startAt: new Date("2023-12-18T20:22:36.621Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(493) 534-0768",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-03T23:20:31.004Z"),
      userPhone: "819-894-3317 x163",
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
import { ucCreateUcCall } from "@unified-api/typescript-sdk/funcs/ucCreateUcCall.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ucCreateUcCall(unifiedTo, {
    ucCall: {
      answerAt: new Date("2025-05-18T03:34:42.227Z"),
      contacts: [],
      conversationIdentifier: "65870c5e-7ff3-465b-9732-7212a2e4671c",
      costAmount: 1.564,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2556,
      endAt: new Date("2024-06-01T11:38:09.352Z"),
      id: "65870c5e-7ff3-465b-9732-7212a2e4671c",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "PRICE",
          id: "a2653887-0ec7-478d-86f3-1a83e663f017",
          namespace: "custom",
          slug: "custom_field",
          value: "tui",
        },
      ],
      startAt: new Date("2023-12-18T20:22:36.621Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(493) 534-0768",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-03T23:20:31.004Z"),
      userPhone: "819-894-3317 x163",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ucCreateUcCall failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateUcCallRequest](../../sdk/models/operations/createuccallrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcCall](../../sdk/models/shared/uccall.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createUcComment

Creates a UcComment. Provide the unified UcComment fields in the request body; they are mapped to the provider's API. Returns the created UcComment.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createUcComment" method="post" path="/uc/{connection_id}/comment" example="uc_comment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.createUcComment({
    ucComment: {
      content: "Vociferor vitiosus.",
      createdAt: "2023-04-02T23:42:31.571Z",
      id: "8dcec3b8-ca39-4aac-a650-7ccf778e621b",
      metadata: [],
      updatedAt: "2024-02-11T14:50:27.495Z",
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
import { commentCreateUcComment } from "@unified-api/typescript-sdk/funcs/commentCreateUcComment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commentCreateUcComment(unifiedTo, {
    ucComment: {
      content: "Vociferor vitiosus.",
      createdAt: "2023-04-02T23:42:31.571Z",
      id: "8dcec3b8-ca39-4aac-a650-7ccf778e621b",
      metadata: [],
      updatedAt: "2024-02-11T14:50:27.495Z",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commentCreateUcComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateUcCommentRequest](../../sdk/models/operations/createuccommentrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcComment](../../sdk/models/shared/uccomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createUcContact

Creates a UcContact. Provide the unified UcContact fields in the request body; they are mapped to the provider's API. Returns the created UcContact.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createUcContact" method="post" path="/uc/{connection_id}/contact" example="uc_contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.createUcContact({
    ucContact: {
      company: "Tillman Group",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Luther_Rogahn32@yahoo.com",
          type: "WORK",
        },
      ],
      firstName: "Luther",
      id: "7880599d-0b73-403b-9798-e626b7d516bc",
      lastName: "Rogahn",
      metadata: [],
      name: "Luther Rogahn",
      telephones: [
        {
          telephone: "(809) 992-1681",
          type: "FAX",
        },
        {
          telephone: "(868) 238-2746",
          type: "HOME",
        },
        {
          telephone: "(219) 736-0357",
          type: "MOBILE",
        },
      ],
      title: "Chief Optimization Executive",
      updatedAt: new Date("2023-12-12T21:25:24.170Z"),
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
import { contactCreateUcContact } from "@unified-api/typescript-sdk/funcs/contactCreateUcContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactCreateUcContact(unifiedTo, {
    ucContact: {
      company: "Tillman Group",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Luther_Rogahn32@yahoo.com",
          type: "WORK",
        },
      ],
      firstName: "Luther",
      id: "7880599d-0b73-403b-9798-e626b7d516bc",
      lastName: "Rogahn",
      metadata: [],
      name: "Luther Rogahn",
      telephones: [
        {
          telephone: "(809) 992-1681",
          type: "FAX",
        },
        {
          telephone: "(868) 238-2746",
          type: "HOME",
        },
        {
          telephone: "(219) 736-0357",
          type: "MOBILE",
        },
      ],
      title: "Chief Optimization Executive",
      updatedAt: new Date("2023-12-12T21:25:24.170Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactCreateUcContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateUcContactRequest](../../sdk/models/operations/createuccontactrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcContact](../../sdk/models/shared/uccontact.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

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
  const result = await unifiedTo.uc.createUcRecording({
    ucRecording: {
      contacts: [],
      conversationIdentifier: "bba3ce69-11df-42be-a8ae-10ac0b39f6cd",
      createdAt: new Date("2022-09-17T19:41:46.956Z"),
      endAt: new Date("2024-05-08T01:10:04.858Z"),
      expiresAt: new Date("2026-05-03T12:32:07.606Z"),
      id: "bba3ce69-11df-42be-a8ae-10ac0b39f6cd",
      media: [
        {
          endAt: new Date("2024-04-04T16:45:12.032Z"),
          language: "en",
          recordingDownloadUrl: "https://parched-wasabi.com/",
          startAt: new Date("2026-05-22T06:53:52.235Z"),
          transcriptDownloadUrl: "https://colossal-cuckoo.name",
          transcripts: [
            {
              endAt: new Date("2026-03-02T22:49:11.438Z"),
              startAt: new Date("2024-06-05T10:47:15.235Z"),
              text: "Turpis maiores ducimus tero speculum.",
            },
            {
              endAt: new Date("2024-10-16T10:12:15.496Z"),
              startAt: new Date("2026-08-10T03:15:08.919Z"),
              text: "Magnam consuasor uxor tergiversatio subseco.",
            },
          ],
        },
      ],
      metadata: [],
      startAt: new Date("2023-04-28T21:22:52.259Z"),
      type: "OUTBOUND",
      updatedAt: new Date("2025-03-21T03:11:46.690Z"),
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
      conversationIdentifier: "bba3ce69-11df-42be-a8ae-10ac0b39f6cd",
      createdAt: new Date("2022-09-17T19:41:46.956Z"),
      endAt: new Date("2024-05-08T01:10:04.858Z"),
      expiresAt: new Date("2026-05-03T12:32:07.606Z"),
      id: "bba3ce69-11df-42be-a8ae-10ac0b39f6cd",
      media: [
        {
          endAt: new Date("2024-04-04T16:45:12.032Z"),
          language: "en",
          recordingDownloadUrl: "https://parched-wasabi.com/",
          startAt: new Date("2026-05-22T06:53:52.235Z"),
          transcriptDownloadUrl: "https://colossal-cuckoo.name",
          transcripts: [
            {
              endAt: new Date("2026-03-02T22:49:11.438Z"),
              startAt: new Date("2024-06-05T10:47:15.235Z"),
              text: "Turpis maiores ducimus tero speculum.",
            },
            {
              endAt: new Date("2024-10-16T10:12:15.496Z"),
              startAt: new Date("2026-08-10T03:15:08.919Z"),
              text: "Magnam consuasor uxor tergiversatio subseco.",
            },
          ],
        },
      ],
      metadata: [],
      startAt: new Date("2023-04-28T21:22:52.259Z"),
      type: "OUTBOUND",
      updatedAt: new Date("2025-03-21T03:11:46.690Z"),
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

## getUcCall

Retrieves a single UcCall by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUcCall" method="get" path="/uc/{connection_id}/call/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.getUcCall({
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
import { ucGetUcCall } from "@unified-api/typescript-sdk/funcs/ucGetUcCall.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ucGetUcCall(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ucGetUcCall failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUcCallRequest](../../sdk/models/operations/getuccallrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcCall](../../sdk/models/shared/uccall.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getUcComment

Retrieves a single UcComment by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUcComment" method="get" path="/uc/{connection_id}/comment/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.getUcComment({
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
import { commentGetUcComment } from "@unified-api/typescript-sdk/funcs/commentGetUcComment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commentGetUcComment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commentGetUcComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUcCommentRequest](../../sdk/models/operations/getuccommentrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcComment](../../sdk/models/shared/uccomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getUcContact

Retrieves a single UcContact by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUcContact" method="get" path="/uc/{connection_id}/contact/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.getUcContact({
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
import { contactGetUcContact } from "@unified-api/typescript-sdk/funcs/contactGetUcContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactGetUcContact(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactGetUcContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUcContactRequest](../../sdk/models/operations/getuccontactrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcContact](../../sdk/models/shared/uccontact.md)\>**

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
  const result = await unifiedTo.uc.getUcRecording({
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

## getUcScorecard

Retrieves a single UcScorecard by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUcScorecard" method="get" path="/uc/{connection_id}/scorecard/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.getUcScorecard({
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
import { scorecardGetUcScorecard } from "@unified-api/typescript-sdk/funcs/scorecardGetUcScorecard.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await scorecardGetUcScorecard(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scorecardGetUcScorecard failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUcScorecardRequest](../../sdk/models/operations/getucscorecardrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcScorecard](../../sdk/models/shared/ucscorecard.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getUcScorecardtemplate

Retrieves a single UcScorecardtemplate by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUcScorecardtemplate" method="get" path="/uc/{connection_id}/scorecardtemplate/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.getUcScorecardtemplate({
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
import { ucGetUcScorecardtemplate } from "@unified-api/typescript-sdk/funcs/ucGetUcScorecardtemplate.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ucGetUcScorecardtemplate(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ucGetUcScorecardtemplate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUcScorecardtemplateRequest](../../sdk/models/operations/getucscorecardtemplaterequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcScorecardtemplate](../../sdk/models/shared/ucscorecardtemplate.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listUcCalls

Returns a list of UcCalls. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listUcCalls" method="get" path="/uc/{connection_id}/call" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.listUcCalls({
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
import { ucListUcCalls } from "@unified-api/typescript-sdk/funcs/ucListUcCalls.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ucListUcCalls(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ucListUcCalls failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListUcCallsRequest](../../sdk/models/operations/listuccallsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcCall[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listUcComments

Returns a list of UcComments. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listUcComments" method="get" path="/uc/{connection_id}/comment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.listUcComments({
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
import { commentListUcComments } from "@unified-api/typescript-sdk/funcs/commentListUcComments.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commentListUcComments(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commentListUcComments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListUcCommentsRequest](../../sdk/models/operations/listuccommentsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcComment[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listUcContacts

Returns a list of UcContacts. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listUcContacts" method="get" path="/uc/{connection_id}/contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.listUcContacts({
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
import { contactListUcContacts } from "@unified-api/typescript-sdk/funcs/contactListUcContacts.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactListUcContacts(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactListUcContacts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListUcContactsRequest](../../sdk/models/operations/listuccontactsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcContact[]](../../models/.md)\>**

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
  const result = await unifiedTo.uc.listUcRecordings({
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

## listUcScorecards

Returns a list of UcScorecards. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listUcScorecards" method="get" path="/uc/{connection_id}/scorecard" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.listUcScorecards({
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
import { scorecardListUcScorecards } from "@unified-api/typescript-sdk/funcs/scorecardListUcScorecards.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await scorecardListUcScorecards(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scorecardListUcScorecards failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListUcScorecardsRequest](../../sdk/models/operations/listucscorecardsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcScorecard[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listUcScorecardtemplates

Returns a list of UcScorecardtemplates. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listUcScorecardtemplates" method="get" path="/uc/{connection_id}/scorecardtemplate" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.listUcScorecardtemplates({
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
import { ucListUcScorecardtemplates } from "@unified-api/typescript-sdk/funcs/ucListUcScorecardtemplates.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ucListUcScorecardtemplates(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ucListUcScorecardtemplates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListUcScorecardtemplatesRequest](../../sdk/models/operations/listucscorecardtemplatesrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcScorecardtemplate[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchUcCall

Updates the UcCall identified by `id`. Provide the unified UcCall fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchUcCall" method="patch" path="/uc/{connection_id}/call/{id}" example="uc_call" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.patchUcCall({
    ucCall: {
      answerAt: new Date("2025-05-18T03:34:42.253Z"),
      contacts: [],
      conversationIdentifier: "34ed46fd-aab2-47e5-9663-5718a6a848ea",
      costAmount: 1.564,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2556,
      endAt: new Date("2024-06-01T11:38:09.366Z"),
      id: "34ed46fd-aab2-47e5-9663-5718a6a848ea",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "PRICE",
          id: "afd0ef3d-ec84-4ccf-9d41-66b3a8d74b7e",
          namespace: "custom",
          slug: "custom_field",
          value: "tui",
        },
      ],
      startAt: new Date("2023-12-18T20:22:36.629Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(493) 534-0768",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-03T23:20:31.008Z"),
      userPhone: "819-894-3317 x163",
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
import { ucPatchUcCall } from "@unified-api/typescript-sdk/funcs/ucPatchUcCall.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ucPatchUcCall(unifiedTo, {
    ucCall: {
      answerAt: new Date("2025-05-18T03:34:42.253Z"),
      contacts: [],
      conversationIdentifier: "34ed46fd-aab2-47e5-9663-5718a6a848ea",
      costAmount: 1.564,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2556,
      endAt: new Date("2024-06-01T11:38:09.366Z"),
      id: "34ed46fd-aab2-47e5-9663-5718a6a848ea",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "PRICE",
          id: "afd0ef3d-ec84-4ccf-9d41-66b3a8d74b7e",
          namespace: "custom",
          slug: "custom_field",
          value: "tui",
        },
      ],
      startAt: new Date("2023-12-18T20:22:36.629Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(493) 534-0768",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-03T23:20:31.008Z"),
      userPhone: "819-894-3317 x163",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ucPatchUcCall failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchUcCallRequest](../../sdk/models/operations/patchuccallrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcCall](../../sdk/models/shared/uccall.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchUcComment

Updates the UcComment identified by `id`. Provide the unified UcComment fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchUcComment" method="patch" path="/uc/{connection_id}/comment/{id}" example="uc_comment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.patchUcComment({
    ucComment: {
      content: "Vociferor vitiosus.",
      createdAt: "2023-04-02T23:42:31.571Z",
      id: "0534bbc8-94cd-429e-bcca-6fdde8020021",
      metadata: [],
      updatedAt: "2024-02-11T14:50:27.498Z",
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
import { commentPatchUcComment } from "@unified-api/typescript-sdk/funcs/commentPatchUcComment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commentPatchUcComment(unifiedTo, {
    ucComment: {
      content: "Vociferor vitiosus.",
      createdAt: "2023-04-02T23:42:31.571Z",
      id: "0534bbc8-94cd-429e-bcca-6fdde8020021",
      metadata: [],
      updatedAt: "2024-02-11T14:50:27.498Z",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commentPatchUcComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchUcCommentRequest](../../sdk/models/operations/patchuccommentrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcComment](../../sdk/models/shared/uccomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchUcContact

Updates the UcContact identified by `id`. Provide the unified UcContact fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchUcContact" method="patch" path="/uc/{connection_id}/contact/{id}" example="uc_contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.patchUcContact({
    ucContact: {
      company: "Tillman Group",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Luther_Rogahn32@yahoo.com",
          type: "WORK",
        },
      ],
      firstName: "Luther",
      id: "3064aa35-57bb-4256-9bba-86889df0b32e",
      lastName: "Rogahn",
      metadata: [],
      name: "Luther Rogahn",
      telephones: [
        {
          telephone: "(809) 992-1681",
          type: "FAX",
        },
        {
          telephone: "(868) 238-2746",
          type: "HOME",
        },
        {
          telephone: "(219) 736-0357",
          type: "MOBILE",
        },
      ],
      title: "Chief Optimization Executive",
      updatedAt: new Date("2023-12-12T21:25:24.179Z"),
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
import { contactPatchUcContact } from "@unified-api/typescript-sdk/funcs/contactPatchUcContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactPatchUcContact(unifiedTo, {
    ucContact: {
      company: "Tillman Group",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Luther_Rogahn32@yahoo.com",
          type: "WORK",
        },
      ],
      firstName: "Luther",
      id: "3064aa35-57bb-4256-9bba-86889df0b32e",
      lastName: "Rogahn",
      metadata: [],
      name: "Luther Rogahn",
      telephones: [
        {
          telephone: "(809) 992-1681",
          type: "FAX",
        },
        {
          telephone: "(868) 238-2746",
          type: "HOME",
        },
        {
          telephone: "(219) 736-0357",
          type: "MOBILE",
        },
      ],
      title: "Chief Optimization Executive",
      updatedAt: new Date("2023-12-12T21:25:24.179Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactPatchUcContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchUcContactRequest](../../sdk/models/operations/patchuccontactrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcContact](../../sdk/models/shared/uccontact.md)\>**

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
  const result = await unifiedTo.uc.patchUcRecording({
    ucRecording: {
      contacts: [],
      conversationIdentifier: "4a839961-6220-4b6d-a98d-4da834d1b5a1",
      createdAt: new Date("2022-09-17T19:41:46.956Z"),
      endAt: new Date("2024-05-08T01:10:04.879Z"),
      expiresAt: new Date("2026-05-03T12:32:07.653Z"),
      id: "4a839961-6220-4b6d-a98d-4da834d1b5a1",
      media: [
        {
          endAt: new Date("2024-04-04T16:45:12.053Z"),
          language: "en",
          recordingDownloadUrl: "https://parched-wasabi.com/",
          startAt: new Date("2026-05-22T06:53:52.284Z"),
          transcriptDownloadUrl: "https://colossal-cuckoo.name",
          transcripts: [
            {
              endAt: new Date("2026-03-02T22:49:11.485Z"),
              startAt: new Date("2024-06-05T10:47:15.258Z"),
              text: "Turpis maiores ducimus tero speculum.",
            },
            {
              endAt: new Date("2024-10-16T10:12:15.524Z"),
              startAt: new Date("2026-08-10T03:15:08.971Z"),
              text: "Magnam consuasor uxor tergiversatio subseco.",
            },
          ],
        },
      ],
      metadata: [],
      startAt: new Date("2023-04-28T21:22:52.267Z"),
      type: "OUTBOUND",
      updatedAt: new Date("2025-03-21T03:11:46.723Z"),
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
      conversationIdentifier: "4a839961-6220-4b6d-a98d-4da834d1b5a1",
      createdAt: new Date("2022-09-17T19:41:46.956Z"),
      endAt: new Date("2024-05-08T01:10:04.879Z"),
      expiresAt: new Date("2026-05-03T12:32:07.653Z"),
      id: "4a839961-6220-4b6d-a98d-4da834d1b5a1",
      media: [
        {
          endAt: new Date("2024-04-04T16:45:12.053Z"),
          language: "en",
          recordingDownloadUrl: "https://parched-wasabi.com/",
          startAt: new Date("2026-05-22T06:53:52.284Z"),
          transcriptDownloadUrl: "https://colossal-cuckoo.name",
          transcripts: [
            {
              endAt: new Date("2026-03-02T22:49:11.485Z"),
              startAt: new Date("2024-06-05T10:47:15.258Z"),
              text: "Turpis maiores ducimus tero speculum.",
            },
            {
              endAt: new Date("2024-10-16T10:12:15.524Z"),
              startAt: new Date("2026-08-10T03:15:08.971Z"),
              text: "Magnam consuasor uxor tergiversatio subseco.",
            },
          ],
        },
      ],
      metadata: [],
      startAt: new Date("2023-04-28T21:22:52.267Z"),
      type: "OUTBOUND",
      updatedAt: new Date("2025-03-21T03:11:46.723Z"),
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

## removeUcComment

Deletes the UcComment identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeUcComment" method="delete" path="/uc/{connection_id}/comment/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.removeUcComment({
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
import { commentRemoveUcComment } from "@unified-api/typescript-sdk/funcs/commentRemoveUcComment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commentRemoveUcComment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commentRemoveUcComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveUcCommentRequest](../../sdk/models/operations/removeuccommentrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveUcCommentResponse](../../sdk/models/operations/removeuccommentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeUcContact

Deletes the UcContact identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeUcContact" method="delete" path="/uc/{connection_id}/contact/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.removeUcContact({
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
import { contactRemoveUcContact } from "@unified-api/typescript-sdk/funcs/contactRemoveUcContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactRemoveUcContact(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactRemoveUcContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveUcContactRequest](../../sdk/models/operations/removeuccontactrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveUcContactResponse](../../sdk/models/operations/removeuccontactresponse.md)\>**

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
  const result = await unifiedTo.uc.removeUcRecording({
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

## updateUcCall

Updates the UcCall identified by `id`. Provide the unified UcCall fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateUcCall" method="put" path="/uc/{connection_id}/call/{id}" example="uc_call" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.updateUcCall({
    ucCall: {
      answerAt: new Date("2025-05-18T03:34:42.253Z"),
      contacts: [],
      conversationIdentifier: "34ed46fd-aab2-47e5-9663-5718a6a848ea",
      costAmount: 1.564,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2556,
      endAt: new Date("2024-06-01T11:38:09.366Z"),
      id: "34ed46fd-aab2-47e5-9663-5718a6a848ea",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "PRICE",
          id: "afd0ef3d-ec84-4ccf-9d41-66b3a8d74b7e",
          namespace: "custom",
          slug: "custom_field",
          value: "tui",
        },
      ],
      startAt: new Date("2023-12-18T20:22:36.629Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(493) 534-0768",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-03T23:20:31.008Z"),
      userPhone: "819-894-3317 x163",
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
import { ucUpdateUcCall } from "@unified-api/typescript-sdk/funcs/ucUpdateUcCall.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ucUpdateUcCall(unifiedTo, {
    ucCall: {
      answerAt: new Date("2025-05-18T03:34:42.253Z"),
      contacts: [],
      conversationIdentifier: "34ed46fd-aab2-47e5-9663-5718a6a848ea",
      costAmount: 1.564,
      createdAt: new Date("2023-04-22T19:05:34.882Z"),
      currency: "USD",
      durationSeconds: 2556,
      endAt: new Date("2024-06-01T11:38:09.366Z"),
      id: "34ed46fd-aab2-47e5-9663-5718a6a848ea",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "PRICE",
          id: "afd0ef3d-ec84-4ccf-9d41-66b3a8d74b7e",
          namespace: "custom",
          slug: "custom_field",
          value: "tui",
        },
      ],
      startAt: new Date("2023-12-18T20:22:36.629Z"),
      status: "IN_PROGRESS",
      telephone: {
        telephone: "(493) 534-0768",
        type: "MOBILE",
      },
      type: "INBOUND",
      updatedAt: new Date("2023-08-03T23:20:31.008Z"),
      userPhone: "819-894-3317 x163",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ucUpdateUcCall failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateUcCallRequest](../../sdk/models/operations/updateuccallrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcCall](../../sdk/models/shared/uccall.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateUcComment

Updates the UcComment identified by `id`. Provide the unified UcComment fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateUcComment" method="put" path="/uc/{connection_id}/comment/{id}" example="uc_comment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.updateUcComment({
    ucComment: {
      content: "Vociferor vitiosus.",
      createdAt: "2023-04-02T23:42:31.571Z",
      id: "0534bbc8-94cd-429e-bcca-6fdde8020021",
      metadata: [],
      updatedAt: "2024-02-11T14:50:27.498Z",
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
import { commentUpdateUcComment } from "@unified-api/typescript-sdk/funcs/commentUpdateUcComment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commentUpdateUcComment(unifiedTo, {
    ucComment: {
      content: "Vociferor vitiosus.",
      createdAt: "2023-04-02T23:42:31.571Z",
      id: "0534bbc8-94cd-429e-bcca-6fdde8020021",
      metadata: [],
      updatedAt: "2024-02-11T14:50:27.498Z",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commentUpdateUcComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateUcCommentRequest](../../sdk/models/operations/updateuccommentrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcComment](../../sdk/models/shared/uccomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateUcContact

Updates the UcContact identified by `id`. Provide the unified UcContact fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateUcContact" method="put" path="/uc/{connection_id}/contact/{id}" example="uc_contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.uc.updateUcContact({
    ucContact: {
      company: "Tillman Group",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Luther_Rogahn32@yahoo.com",
          type: "WORK",
        },
      ],
      firstName: "Luther",
      id: "3064aa35-57bb-4256-9bba-86889df0b32e",
      lastName: "Rogahn",
      metadata: [],
      name: "Luther Rogahn",
      telephones: [
        {
          telephone: "(809) 992-1681",
          type: "FAX",
        },
        {
          telephone: "(868) 238-2746",
          type: "HOME",
        },
        {
          telephone: "(219) 736-0357",
          type: "MOBILE",
        },
      ],
      title: "Chief Optimization Executive",
      updatedAt: new Date("2023-12-12T21:25:24.179Z"),
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
import { contactUpdateUcContact } from "@unified-api/typescript-sdk/funcs/contactUpdateUcContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactUpdateUcContact(unifiedTo, {
    ucContact: {
      company: "Tillman Group",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Luther_Rogahn32@yahoo.com",
          type: "WORK",
        },
      ],
      firstName: "Luther",
      id: "3064aa35-57bb-4256-9bba-86889df0b32e",
      lastName: "Rogahn",
      metadata: [],
      name: "Luther Rogahn",
      telephones: [
        {
          telephone: "(809) 992-1681",
          type: "FAX",
        },
        {
          telephone: "(868) 238-2746",
          type: "HOME",
        },
        {
          telephone: "(219) 736-0357",
          type: "MOBILE",
        },
      ],
      title: "Chief Optimization Executive",
      updatedAt: new Date("2023-12-12T21:25:24.179Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactUpdateUcContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateUcContactRequest](../../sdk/models/operations/updateuccontactrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcContact](../../sdk/models/shared/uccontact.md)\>**

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
  const result = await unifiedTo.uc.updateUcRecording({
    ucRecording: {
      contacts: [],
      conversationIdentifier: "4a839961-6220-4b6d-a98d-4da834d1b5a1",
      createdAt: new Date("2022-09-17T19:41:46.956Z"),
      endAt: new Date("2024-05-08T01:10:04.879Z"),
      expiresAt: new Date("2026-05-03T12:32:07.653Z"),
      id: "4a839961-6220-4b6d-a98d-4da834d1b5a1",
      media: [
        {
          endAt: new Date("2024-04-04T16:45:12.053Z"),
          language: "en",
          recordingDownloadUrl: "https://parched-wasabi.com/",
          startAt: new Date("2026-05-22T06:53:52.284Z"),
          transcriptDownloadUrl: "https://colossal-cuckoo.name",
          transcripts: [
            {
              endAt: new Date("2026-03-02T22:49:11.485Z"),
              startAt: new Date("2024-06-05T10:47:15.258Z"),
              text: "Turpis maiores ducimus tero speculum.",
            },
            {
              endAt: new Date("2024-10-16T10:12:15.524Z"),
              startAt: new Date("2026-08-10T03:15:08.971Z"),
              text: "Magnam consuasor uxor tergiversatio subseco.",
            },
          ],
        },
      ],
      metadata: [],
      startAt: new Date("2023-04-28T21:22:52.267Z"),
      type: "OUTBOUND",
      updatedAt: new Date("2025-03-21T03:11:46.723Z"),
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
      conversationIdentifier: "4a839961-6220-4b6d-a98d-4da834d1b5a1",
      createdAt: new Date("2022-09-17T19:41:46.956Z"),
      endAt: new Date("2024-05-08T01:10:04.879Z"),
      expiresAt: new Date("2026-05-03T12:32:07.653Z"),
      id: "4a839961-6220-4b6d-a98d-4da834d1b5a1",
      media: [
        {
          endAt: new Date("2024-04-04T16:45:12.053Z"),
          language: "en",
          recordingDownloadUrl: "https://parched-wasabi.com/",
          startAt: new Date("2026-05-22T06:53:52.284Z"),
          transcriptDownloadUrl: "https://colossal-cuckoo.name",
          transcripts: [
            {
              endAt: new Date("2026-03-02T22:49:11.485Z"),
              startAt: new Date("2024-06-05T10:47:15.258Z"),
              text: "Turpis maiores ducimus tero speculum.",
            },
            {
              endAt: new Date("2024-10-16T10:12:15.524Z"),
              startAt: new Date("2026-08-10T03:15:08.971Z"),
              text: "Magnam consuasor uxor tergiversatio subseco.",
            },
          ],
        },
      ],
      metadata: [],
      startAt: new Date("2023-04-28T21:22:52.267Z"),
      type: "OUTBOUND",
      updatedAt: new Date("2025-03-21T03:11:46.723Z"),
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