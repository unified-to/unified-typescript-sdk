# Prompt

## Overview

### Available Operations

* [createGenaiPrompt](#creategenaiprompt) - Create a prompt

## createGenaiPrompt

Creates a GenaiPrompt. Provide the unified GenaiPrompt fields in the request body; they are mapped to the provider's API. Returns the created GenaiPrompt.

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
      answers: [
        {
          confidence: 0.5384309098590165,
          id: "DiYHdUlr",
          probabilities: [
            {
              option: "ulterius",
              probability: 0.05683182482607663,
            },
            {
              option: "spiculum",
              probability: 0.1404057613108307,
            },
          ],
          score: 0.05974147981032729,
          type: "CHOICE",
          value: "vilicus",
        },
      ],
      maxTokens: 0.4677782787475735,
      mcpAuthorizationToken: "45c837a2-ed2d-458f-b4bc-782f4a6b065b",
      mcpDeferredTools: [],
      mcpUrl: "https://svelte-offset.net",
      messages: [
        {
          content: "Facere statua depulso speciosus xiphias soleo trepide crinis crapula balbus.",
          images: [],
          role: "ASSISTANT",
        },
        {
          content: "Circumvenio una demitto ventito chirographum culpo vos cohibeo complectus speciosus.",
          images: [],
          role: "SYSTEM",
        },
      ],
      questions: [
        {
          id: "9SIZCOoV",
          instructions: "Supellex verbera universe.",
          options: [
            "dens",
            "doloribus",
            "degusto",
          ],
          type: "BOOLEAN",
        },
        {
          id: "gsUyLAAa",
          instructions: "Amplexus abundans caelestis patrocinor vulgivagus condico adduco tego apostolus.",
          options: [
            "decretum",
            "vesica",
            "amet",
          ],
          type: "CHOICE",
        },
        {
          id: "Dwh6TeZp",
          instructions: "Capio somnus pauper summisse veniam comes.",
          options: [
            "depulso",
            "deficio",
            "sustineo",
          ],
          type: "BOOLEAN",
        },
      ],
      responses: [
        "Vereor pecco avarus derideo sumptus.",
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
      answers: [
        {
          confidence: 0.5384309098590165,
          id: "DiYHdUlr",
          probabilities: [
            {
              option: "ulterius",
              probability: 0.05683182482607663,
            },
            {
              option: "spiculum",
              probability: 0.1404057613108307,
            },
          ],
          score: 0.05974147981032729,
          type: "CHOICE",
          value: "vilicus",
        },
      ],
      maxTokens: 0.4677782787475735,
      mcpAuthorizationToken: "45c837a2-ed2d-458f-b4bc-782f4a6b065b",
      mcpDeferredTools: [],
      mcpUrl: "https://svelte-offset.net",
      messages: [
        {
          content: "Facere statua depulso speciosus xiphias soleo trepide crinis crapula balbus.",
          images: [],
          role: "ASSISTANT",
        },
        {
          content: "Circumvenio una demitto ventito chirographum culpo vos cohibeo complectus speciosus.",
          images: [],
          role: "SYSTEM",
        },
      ],
      questions: [
        {
          id: "9SIZCOoV",
          instructions: "Supellex verbera universe.",
          options: [
            "dens",
            "doloribus",
            "degusto",
          ],
          type: "BOOLEAN",
        },
        {
          id: "gsUyLAAa",
          instructions: "Amplexus abundans caelestis patrocinor vulgivagus condico adduco tego apostolus.",
          options: [
            "decretum",
            "vesica",
            "amet",
          ],
          type: "CHOICE",
        },
        {
          id: "Dwh6TeZp",
          instructions: "Capio somnus pauper summisse veniam comes.",
          options: [
            "depulso",
            "deficio",
            "sustineo",
          ],
          type: "BOOLEAN",
        },
      ],
      responses: [
        "Vereor pecco avarus derideo sumptus.",
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