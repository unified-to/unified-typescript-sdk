# RemoveUnifiedPersonRequest

## Example Usage

```typescript
import { RemoveUnifiedPersonRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: RemoveUnifiedPersonRequest = {
  query: "<value>",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `query`                                                                                                                               | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Comma-delimited email addresses to erase from this workspace's unified persons (at most 100); a person left without emails is deleted |