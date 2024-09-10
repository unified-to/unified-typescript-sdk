# CreateMartechListRequest

## Example Usage

```typescript
import { CreateMartechListRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateMartechListRequest = {
  connectionId: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `marketingList`                                                     | [shared.MarketingList](../../../sdk/models/shared/marketinglist.md) | :heavy_minus_sign:                                                  | Mailing List                                                        |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | ID of the connection                                                |