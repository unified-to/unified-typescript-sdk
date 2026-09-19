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
          contentIdentifier: "e84e2d6a-8581-483a-9f40-dbfdde655ed8",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "cad40bd3-ed2c-4f0a-afca-4f4b19dd8b23",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "abe4260d-5f53-49d7-9b5b-03fd5522311e",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "cad40bd3-ed2c-4f0a-afca-4f4b19dd8b23",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-06T18:11:15.112Z"),
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
          contentIdentifier: "e84e2d6a-8581-483a-9f40-dbfdde655ed8",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "cad40bd3-ed2c-4f0a-afca-4f4b19dd8b23",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "abe4260d-5f53-49d7-9b5b-03fd5522311e",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "cad40bd3-ed2c-4f0a-afca-4f4b19dd8b23",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-06T18:11:15.112Z"),
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
          contentIdentifier: "d678d73e-9280-48ff-9a5c-b140c02300cc",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "c607e0b1-0248-4bd4-b260-3111112670ec",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "b4fe68be-f018-4050-9227-003c36610a11",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "c607e0b1-0248-4bd4-b260-3111112670ec",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-06T18:11:15.121Z"),
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
          contentIdentifier: "d678d73e-9280-48ff-9a5c-b140c02300cc",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "c607e0b1-0248-4bd4-b260-3111112670ec",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "b4fe68be-f018-4050-9227-003c36610a11",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "c607e0b1-0248-4bd4-b260-3111112670ec",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-06T18:11:15.121Z"),
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
          contentIdentifier: "d678d73e-9280-48ff-9a5c-b140c02300cc",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "c607e0b1-0248-4bd4-b260-3111112670ec",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "b4fe68be-f018-4050-9227-003c36610a11",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "c607e0b1-0248-4bd4-b260-3111112670ec",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-06T18:11:15.121Z"),
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
          contentIdentifier: "d678d73e-9280-48ff-9a5c-b140c02300cc",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "c607e0b1-0248-4bd4-b260-3111112670ec",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "b4fe68be-f018-4050-9227-003c36610a11",
          text: "denuo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "c607e0b1-0248-4bd4-b260-3111112670ec",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      reactions: [],
      reference: "571483f2-d95b-4f06-8b78-d35e7046bb74",
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-06T18:11:15.121Z"),
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