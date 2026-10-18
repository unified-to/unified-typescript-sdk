# Message

## Overview

### Available Operations

* [createMessagingMessage](#createmessagingmessage) - Create a message
* [getMessagingMessage](#getmessagingmessage) - Retrieve a message
* [listMessagingMessages](#listmessagingmessages) - List all messages
* [patchMessagingMessage](#patchmessagingmessage) - Update a message
* [removeMessagingMessage](#removemessagingmessage) - Remove a message
* [updateMessagingMessage](#updatemessagingmessage) - Update a message

## createMessagingMessage

Create a message

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createMessagingMessage" method="post" path="/messaging/{connection_id}/message" example="messaging_message" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.message.createMessagingMessage({
    messagingMessage: {
      attachments: [
        {
          contentIdentifier: "5404d632-eaf0-40c5-80c6-625343930738",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "9b112778-1b2a-4d20-a5a7-6b05239d4b7b",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "e0ba27c7-e5bd-467c-87f8-395644162932",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "9b112778-1b2a-4d20-a5a7-6b05239d4b7b",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-16T11:55:35.587Z"),
      webUrl: "https://grumpy-kit.net",
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
import { messagingCreateMessagingMessage } from "@unified-api/typescript-sdk/funcs/messagingCreateMessagingMessage.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await messagingCreateMessagingMessage(unifiedTo, {
    messagingMessage: {
      attachments: [
        {
          contentIdentifier: "5404d632-eaf0-40c5-80c6-625343930738",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "9b112778-1b2a-4d20-a5a7-6b05239d4b7b",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "e0ba27c7-e5bd-467c-87f8-395644162932",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "9b112778-1b2a-4d20-a5a7-6b05239d4b7b",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-16T11:55:35.587Z"),
      webUrl: "https://grumpy-kit.net",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagingCreateMessagingMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateMessagingMessageRequest](../../sdk/models/operations/createmessagingmessagerequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MessagingMessage](../../sdk/models/shared/messagingmessage.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getMessagingMessage

Retrieve a message

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMessagingMessage" method="get" path="/messaging/{connection_id}/message/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.message.getMessagingMessage({
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
import { messagingGetMessagingMessage } from "@unified-api/typescript-sdk/funcs/messagingGetMessagingMessage.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await messagingGetMessagingMessage(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagingGetMessagingMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMessagingMessageRequest](../../sdk/models/operations/getmessagingmessagerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MessagingMessage](../../sdk/models/shared/messagingmessage.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listMessagingMessages

List all messages

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listMessagingMessages" method="get" path="/messaging/{connection_id}/message" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.message.listMessagingMessages({
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
import { messagingListMessagingMessages } from "@unified-api/typescript-sdk/funcs/messagingListMessagingMessages.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await messagingListMessagingMessages(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagingListMessagingMessages failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListMessagingMessagesRequest](../../sdk/models/operations/listmessagingmessagesrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MessagingMessage[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchMessagingMessage

Update a message

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchMessagingMessage" method="patch" path="/messaging/{connection_id}/message/{id}" example="messaging_message" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.message.patchMessagingMessage({
    messagingMessage: {
      attachments: [
        {
          contentIdentifier: "7873b0ba-c91d-4c46-9493-372477ea38db",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "905fa806-2bd2-45ba-8e74-89d8daddd47c",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "83b0e7fd-56a1-4f41-9606-94eade38a290",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "905fa806-2bd2-45ba-8e74-89d8daddd47c",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-16T11:55:35.595Z"),
      webUrl: "https://grumpy-kit.net",
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
import { messagingPatchMessagingMessage } from "@unified-api/typescript-sdk/funcs/messagingPatchMessagingMessage.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await messagingPatchMessagingMessage(unifiedTo, {
    messagingMessage: {
      attachments: [
        {
          contentIdentifier: "7873b0ba-c91d-4c46-9493-372477ea38db",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "905fa806-2bd2-45ba-8e74-89d8daddd47c",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "83b0e7fd-56a1-4f41-9606-94eade38a290",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "905fa806-2bd2-45ba-8e74-89d8daddd47c",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-16T11:55:35.595Z"),
      webUrl: "https://grumpy-kit.net",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagingPatchMessagingMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchMessagingMessageRequest](../../sdk/models/operations/patchmessagingmessagerequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MessagingMessage](../../sdk/models/shared/messagingmessage.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeMessagingMessage

Remove a message

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeMessagingMessage" method="delete" path="/messaging/{connection_id}/message/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.message.removeMessagingMessage({
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
import { messagingRemoveMessagingMessage } from "@unified-api/typescript-sdk/funcs/messagingRemoveMessagingMessage.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await messagingRemoveMessagingMessage(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagingRemoveMessagingMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveMessagingMessageRequest](../../sdk/models/operations/removemessagingmessagerequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveMessagingMessageResponse](../../sdk/models/operations/removemessagingmessageresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateMessagingMessage

Update a message

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateMessagingMessage" method="put" path="/messaging/{connection_id}/message/{id}" example="messaging_message" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.message.updateMessagingMessage({
    messagingMessage: {
      attachments: [
        {
          contentIdentifier: "7873b0ba-c91d-4c46-9493-372477ea38db",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "905fa806-2bd2-45ba-8e74-89d8daddd47c",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "83b0e7fd-56a1-4f41-9606-94eade38a290",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "905fa806-2bd2-45ba-8e74-89d8daddd47c",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-16T11:55:35.595Z"),
      webUrl: "https://grumpy-kit.net",
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
import { messagingUpdateMessagingMessage } from "@unified-api/typescript-sdk/funcs/messagingUpdateMessagingMessage.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await messagingUpdateMessagingMessage(unifiedTo, {
    messagingMessage: {
      attachments: [
        {
          contentIdentifier: "7873b0ba-c91d-4c46-9493-372477ea38db",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "905fa806-2bd2-45ba-8e74-89d8daddd47c",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "83b0e7fd-56a1-4f41-9606-94eade38a290",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "905fa806-2bd2-45ba-8e74-89d8daddd47c",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-16T11:55:35.595Z"),
      webUrl: "https://grumpy-kit.net",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagingUpdateMessagingMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateMessagingMessageRequest](../../sdk/models/operations/updatemessagingmessagerequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MessagingMessage](../../sdk/models/shared/messagingmessage.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |