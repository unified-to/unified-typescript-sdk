# UpdateCommerceItemRequest

## Example Usage

```typescript
import { UpdateCommerceItemRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateCommerceItemRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `commerceItem`                                                    | [shared.CommerceItem](../../../sdk/models/shared/commerceitem.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | ID of the Item                                                    |