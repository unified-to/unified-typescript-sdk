# CreateLmsClassRequest

## Example Usage

```typescript
import { CreateLmsClassRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateLmsClassRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `lmsClass`                                                | [shared.LmsClass](../../../sdk/models/shared/lmsclass.md) | :heavy_minus_sign:                                        | N/A                                                       |
| `connectionId`                                            | *string*                                                  | :heavy_check_mark:                                        | ID of the connection                                      |
| `fields`                                                  | *string*[]                                                | :heavy_minus_sign:                                        | Comma-delimited fields to return                          |