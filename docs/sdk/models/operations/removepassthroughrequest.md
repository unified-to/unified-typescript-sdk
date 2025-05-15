# RemovePassthroughRequest

## Example Usage

```typescript
import { RemovePassthroughRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: RemovePassthroughRequest = {
  connectionId: "<id>",
  path: "/net",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `connectionId`        | *string*              | :heavy_check_mark:    | ID of the connection  |
| `path`                | *string*              | :heavy_check_mark:    | N/A                   |
| `query`               | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |