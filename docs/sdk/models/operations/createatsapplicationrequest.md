# CreateAtsApplicationRequest

## Example Usage

```typescript
import { CreateAtsApplicationRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAtsApplicationRequest = {
  atsApplication: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `atsApplication`                                                      | [shared.AtsApplication](../../../sdk/models/shared/atsapplication.md) | :heavy_check_mark:                                                    | N/A                                                                   |
| `connectionId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | ID of the connection                                                  |
| `fields`                                                              | *string*[]                                                            | :heavy_minus_sign:                                                    | Comma-delimited fields to return                                      |