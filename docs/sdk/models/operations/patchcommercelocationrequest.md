# PatchCommerceLocationRequest

## Example Usage

```typescript
import { PatchCommerceLocationRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchCommerceLocationRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `commerceLocation`                                                        | [shared.CommerceLocation](../../../sdk/models/shared/commercelocation.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `connectionId`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | ID of the connection                                                      |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | ID of the Location                                                        |