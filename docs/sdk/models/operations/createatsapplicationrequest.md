# CreateAtsApplicationRequest

## Example Usage

```typescript
import { CreateAtsApplicationRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAtsApplicationRequest = {
  connectionId: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `atsApplication`                                                      | [shared.AtsApplication](../../../sdk/models/shared/atsapplication.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `connectionId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | ID of the connection                                                  |