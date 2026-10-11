# CommerceItemPrice

## Example Usage

```typescript
import { CommerceItemPrice } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CommerceItemPrice = {
  price: 6395.04,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `compareAtPrice`                                               | *number*                                                       | :heavy_minus_sign:                                             | The original price of the item before an adjustment or a sale. |
| `currency`                                                     | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `price`                                                        | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |