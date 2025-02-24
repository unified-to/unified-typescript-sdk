# CreateCommerceLocationRequest

## Example Usage

```typescript
import { CreateCommerceLocationRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCommerceLocationRequest = {
  commerceLocation: {
    name: "<value>",
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `commerceLocation`                                                        | [shared.CommerceLocation](../../../sdk/models/shared/commercelocation.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `connectionId`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | ID of the connection                                                      |
| `fields`                                                                  | *string*[]                                                                | :heavy_minus_sign:                                                        | Comma-delimited fields to return                                          |