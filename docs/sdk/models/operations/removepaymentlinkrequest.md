# RemovePaymentLinkRequest

## Example Usage

```typescript
import { RemovePaymentLinkRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: RemovePaymentLinkRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `connectionId`       | *string*             | :heavy_check_mark:   | ID of the connection |
| `id`                 | *string*             | :heavy_check_mark:   | ID of the Link       |