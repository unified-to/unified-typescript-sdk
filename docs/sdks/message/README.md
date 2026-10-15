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
          contentIdentifier: "05d3a618-8e92-400f-8605-7256f294df9c",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "81f4cefb-7a7c-41e7-a198-8417d1f6e95a",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "beeef80d-9962-42a2-bf65-01d82f5ab99b",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "81f4cefb-7a7c-41e7-a198-8417d1f6e95a",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-15T10:24:29.513Z"),
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
          contentIdentifier: "05d3a618-8e92-400f-8605-7256f294df9c",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "81f4cefb-7a7c-41e7-a198-8417d1f6e95a",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "beeef80d-9962-42a2-bf65-01d82f5ab99b",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "81f4cefb-7a7c-41e7-a198-8417d1f6e95a",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-15T10:24:29.513Z"),
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
          contentIdentifier: "600b3654-0b48-4348-94c2-e08fa97fe6e4",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "03b80bca-f70f-4824-9aa6-701ae5ad8845",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "09b0d879-72a0-42b2-98a2-ab3ef32bf740",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "03b80bca-f70f-4824-9aa6-701ae5ad8845",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-15T10:24:29.524Z"),
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
          contentIdentifier: "600b3654-0b48-4348-94c2-e08fa97fe6e4",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "03b80bca-f70f-4824-9aa6-701ae5ad8845",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "09b0d879-72a0-42b2-98a2-ab3ef32bf740",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "03b80bca-f70f-4824-9aa6-701ae5ad8845",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-15T10:24:29.524Z"),
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
          contentIdentifier: "600b3654-0b48-4348-94c2-e08fa97fe6e4",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "03b80bca-f70f-4824-9aa6-701ae5ad8845",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "09b0d879-72a0-42b2-98a2-ab3ef32bf740",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "03b80bca-f70f-4824-9aa6-701ae5ad8845",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-15T10:24:29.524Z"),
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
          contentIdentifier: "600b3654-0b48-4348-94c2-e08fa97fe6e4",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "03b80bca-f70f-4824-9aa6-701ae5ad8845",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "09b0d879-72a0-42b2-98a2-ab3ef32bf740",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "03b80bca-f70f-4824-9aa6-701ae5ad8845",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-15T10:24:29.524Z"),
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