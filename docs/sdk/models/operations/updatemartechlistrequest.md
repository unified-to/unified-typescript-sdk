# UpdateMartechListRequest

## Example Usage

```typescript
import { UpdateMartechListRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateMartechListRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `marketingList`                                                     | [shared.MarketingList](../../../sdk/models/shared/marketinglist.md) | :heavy_minus_sign:                                                  | Mailing List                                                        |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | ID of the connection                                                |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | ID of the List                                                      |