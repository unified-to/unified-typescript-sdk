# CreateGenaiPromptRequest

## Example Usage

```typescript
import { CreateGenaiPromptRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateGenaiPromptRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `genaiPrompt`                                                   | [shared.GenaiPrompt](../../../sdk/models/shared/genaiprompt.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |