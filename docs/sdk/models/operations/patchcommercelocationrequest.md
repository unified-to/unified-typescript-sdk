# PatchCommerceLocationRequest

## Example Usage

```typescript
import { PatchCommerceLocationRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchCommerceLocationRequest = {
  commerceLocation: {
    name: "<value>",
  },
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `commerceLocation`                                                        | [shared.CommerceLocation](../../../sdk/models/shared/commercelocation.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `connectionId`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | ID of the connection                                                      |
| `fields`                                                                  | *string*[]                                                                | :heavy_minus_sign:                                                        | Comma-delimited fields to return                                          |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | ID of the Location                                                        |