# RemovePassthroughResponse

## Example Usage

```typescript
import { RemovePassthroughResponse } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: RemovePassthroughResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: new TextEncoder().encode("0x4b42CFFDB7"),
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `headers`                                    | Record<string, *string*[]>                   | :heavy_check_mark:                           | N/A                                          |
| `result`                                     | *operations.RemovePassthroughResponseResult* | :heavy_check_mark:                           | N/A                                          |