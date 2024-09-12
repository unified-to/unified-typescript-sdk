# PatchPassthroughJsonResponse

## Example Usage

```typescript
import { PatchPassthroughJsonResponse } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchPassthroughJsonResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: new TextEncoder().encode("0xce4DEe99CF"),
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `headers`                                       | Record<string, *string*[]>                      | :heavy_check_mark:                              | N/A                                             |
| `result`                                        | *operations.PatchPassthroughJsonResponseResult* | :heavy_check_mark:                              | N/A                                             |