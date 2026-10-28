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

Creates a MessagingMessage. Provide the unified MessagingMessage fields in the request body; they are mapped to the provider's API. Returns the created MessagingMessage.

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
          contentIdentifier: "35416341-defc-4a1a-9046-72c6190510fb",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "5626a9fa-c060-447f-acce-d62dc712da4f",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "56eb692e-eb00-4e68-9dd0-b76d4c31bf25",
          text: "comparo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "5626a9fa-c060-447f-acce-d62dc712da4f",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      metadata: [],
      reactions: [],
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-19T19:45:35.640Z"),
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
          contentIdentifier: "35416341-defc-4a1a-9046-72c6190510fb",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "5626a9fa-c060-447f-acce-d62dc712da4f",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "56eb692e-eb00-4e68-9dd0-b76d4c31bf25",
          text: "comparo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "5626a9fa-c060-447f-acce-d62dc712da4f",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      metadata: [],
      reactions: [],
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-19T19:45:35.640Z"),
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

Retrieves a single MessagingMessage by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

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

Returns a list of MessagingMessages. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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

Updates the MessagingMessage identified by `id`. Provide the unified MessagingMessage fields to change in the request body.

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
          contentIdentifier: "b99fd12d-29f0-402c-8039-bab88ca78c9e",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "c39a74f1-715e-489e-97d0-45a19eeef714",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "e3bbc717-accc-4a07-a938-d3cb099fe9e4",
          text: "comparo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "c39a74f1-715e-489e-97d0-45a19eeef714",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      metadata: [],
      reactions: [],
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-19T19:45:35.649Z"),
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
          contentIdentifier: "b99fd12d-29f0-402c-8039-bab88ca78c9e",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "c39a74f1-715e-489e-97d0-45a19eeef714",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "e3bbc717-accc-4a07-a938-d3cb099fe9e4",
          text: "comparo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "c39a74f1-715e-489e-97d0-45a19eeef714",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      metadata: [],
      reactions: [],
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-19T19:45:35.649Z"),
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

Deletes the MessagingMessage identified by `id`.

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

Updates the MessagingMessage identified by `id`. Provide the unified MessagingMessage fields to change in the request body.

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
          contentIdentifier: "b99fd12d-29f0-402c-8039-bab88ca78c9e",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "c39a74f1-715e-489e-97d0-45a19eeef714",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "e3bbc717-accc-4a07-a938-d3cb099fe9e4",
          text: "comparo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "c39a74f1-715e-489e-97d0-45a19eeef714",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      metadata: [],
      reactions: [],
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-19T19:45:35.649Z"),
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
          contentIdentifier: "b99fd12d-29f0-402c-8039-bab88ca78c9e",
          contentType: "coaegresco",
          downloadUrl: "https://rotating-advertisement.org",
          filename: "super",
          messageId: "c39a74f1-715e-489e-97d0-45a19eeef714",
          size: 327,
        },
      ],
      buttons: [
        {
          id: "e3bbc717-accc-4a07-a938-d3cb099fe9e4",
          text: "comparo",
        },
      ],
      createdAt: new Date("2021-11-26T09:26:33.973Z"),
      destinationMembers: [],
      hasChildren: true,
      hiddenMembers: [],
      id: "c39a74f1-715e-489e-97d0-45a19eeef714",
      isUnread: false,
      mentionedMembers: [],
      message: "Sum utique aliquid.",
      messageHtml: "Articulus tardus tergiversatio.",
      messageMarkdown: "Territo uterque tergo curiositas.",
      metadata: [],
      reactions: [],
      subject: "Cernuus optio cohaero summisse in.",
      updatedAt: new Date("2023-07-19T19:45:35.649Z"),
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