# RemovePassthrough2Request

## Example Usage

```typescript
import { RemovePassthrough2Request } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: RemovePassthrough2Request = {
  connectionId: "<id>",
  path: "/private/tmp",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `connectionId`        | *string*              | :heavy_check_mark:    | ID of the connection  |
| `path`                | *string*              | :heavy_check_mark:    | N/A                   |
| `query`               | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |