# PatchMartechListRequest

## Example Usage

```typescript
import { PatchMartechListRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchMartechListRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `marketingList`                                                     | [shared.MarketingList](../../../sdk/models/shared/marketinglist.md) | :heavy_minus_sign:                                                  | Mailing List                                                        |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | ID of the connection                                                |
| `fields`                                                            | *string*[]                                                          | :heavy_minus_sign:                                                  | Comma-delimited fields to return                                    |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | ID of the List                                                      |