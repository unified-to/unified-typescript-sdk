# ListPassthroughsRequest

## Example Usage

```typescript
import { ListPassthroughsRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: ListPassthroughsRequest = {
  connectionId: "<id>",
  path: "/opt/lib",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `connectionId`        | *string*              | :heavy_check_mark:    | ID of the connection  |
| `path`                | *string*              | :heavy_check_mark:    | N/A                   |
| `query`               | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |