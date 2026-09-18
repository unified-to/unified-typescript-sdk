# Prompt

## Overview

### Available Operations

* [createGenaiPrompt](#creategenaiprompt) - Create a prompt

## createGenaiPrompt

Create a prompt

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createGenaiPrompt" method="post" path="/genai/{connection_id}/prompt" example="genai_prompt" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.prompt.createGenaiPrompt({
    genaiPrompt: {
      maxTokens: 0.4677782787475735,
      mcpAuthorizationToken: "f45a6e93-7bed-49b4-a5c8-37a2ed2d58f4",
      mcpDeferredTools: [],
      mcpUrl: "https://unsung-dusk.info/",
      messages: [
        {
          content: "Aegre repudiandae verecundia facere statua.",
          role: "ASSISTANT",
        },
        {
          content: "Speciosus xiphias soleo trepide crinis.",
          role: "SYSTEM",
        },
      ],
      responses: [
        "Balbus vobis circumvenio una.",
      ],
      temperature: 0,
      tokensUsed: 975,
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
import { genaiCreateGenaiPrompt } from "@unified-api/typescript-sdk/funcs/genaiCreateGenaiPrompt.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await genaiCreateGenaiPrompt(unifiedTo, {
    genaiPrompt: {
      maxTokens: 0.4677782787475735,
      mcpAuthorizationToken: "f45a6e93-7bed-49b4-a5c8-37a2ed2d58f4",
      mcpDeferredTools: [],
      mcpUrl: "https://unsung-dusk.info/",
      messages: [
        {
          content: "Aegre repudiandae verecundia facere statua.",
          role: "ASSISTANT",
        },
        {
          content: "Speciosus xiphias soleo trepide crinis.",
          role: "SYSTEM",
        },
      ],
      responses: [
        "Balbus vobis circumvenio una.",
      ],
      temperature: 0,
      tokensUsed: 975,
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("genaiCreateGenaiPrompt failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateGenaiPromptRequest](../../sdk/models/operations/creategenaipromptrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.GenaiPrompt](../../sdk/models/shared/genaiprompt.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |