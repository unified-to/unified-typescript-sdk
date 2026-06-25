# ListPassthroughs2Request

## Example Usage

```typescript
import { ListPassthroughs2Request } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: ListPassthroughs2Request = {
  connectionId: "<id>",
  path: "/etc/periodic",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `connectionId`        | *string*              | :heavy_check_mark:    | ID of the connection  |
| `path`                | *string*              | :heavy_check_mark:    | N/A                   |
| `query`               | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |