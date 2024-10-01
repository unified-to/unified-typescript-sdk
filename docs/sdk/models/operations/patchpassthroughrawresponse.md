# PatchPassthroughRawResponse

## Example Usage

```typescript
import { PatchPassthroughRawResponse } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchPassthroughRawResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: new TextEncoder().encode("0x6520EeB6c1"),
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `headers`                                      | Record<string, *string*[]>                     | :heavy_check_mark:                             | N/A                                            |
| `result`                                       | *operations.PatchPassthroughRawResponseResult* | :heavy_check_mark:                             | N/A                                            |