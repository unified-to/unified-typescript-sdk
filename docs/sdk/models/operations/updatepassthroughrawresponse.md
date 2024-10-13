# UpdatePassthroughRawResponse

## Example Usage

```typescript
import { UpdatePassthroughRawResponse } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdatePassthroughRawResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: new TextEncoder().encode("0x58c684a0B1"),
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `headers`                                       | Record<string, *string*[]>                      | :heavy_check_mark:                              | N/A                                             |
| `result`                                        | *operations.UpdatePassthroughRawResponseResult* | :heavy_check_mark:                              | N/A                                             |