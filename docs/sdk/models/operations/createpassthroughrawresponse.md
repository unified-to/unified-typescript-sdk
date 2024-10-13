# CreatePassthroughRawResponse

## Example Usage

```typescript
import { CreatePassthroughRawResponse } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreatePassthroughRawResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: new TextEncoder().encode("0xf4EA54b049"),
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `headers`                                       | Record<string, *string*[]>                      | :heavy_check_mark:                              | N/A                                             |
| `result`                                        | *operations.CreatePassthroughRawResponseResult* | :heavy_check_mark:                              | N/A                                             |