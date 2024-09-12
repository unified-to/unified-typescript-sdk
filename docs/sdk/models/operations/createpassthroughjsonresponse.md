# CreatePassthroughJsonResponse

## Example Usage

```typescript
import { CreatePassthroughJsonResponse } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreatePassthroughJsonResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: new TextEncoder().encode("0xc1E670eC2e"),
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `headers`                                        | Record<string, *string*[]>                       | :heavy_check_mark:                               | N/A                                              |
| `result`                                         | *operations.CreatePassthroughJsonResponseResult* | :heavy_check_mark:                               | N/A                                              |