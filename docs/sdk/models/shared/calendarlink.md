# CalendarLink

## Example Usage

```typescript
import { CalendarLink } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CalendarLink = {
  url: "https://dull-traffic.info/",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `createdAt`                              | *string*                                 | :heavy_minus_sign:                       | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format) |
| `description`                            | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `duration`                               | *number*                                 | :heavy_minus_sign:                       | minutes                                  |
| `id`                                     | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `isActive`                               | *boolean*                                | :heavy_minus_sign:                       | N/A                                      |
| `name`                                   | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `priceAmount`                            | *number*                                 | :heavy_minus_sign:                       | N/A                                      |
| `priceCurrency`                          | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `raw`                                    | Record<string, *any*>                    | :heavy_minus_sign:                       | N/A                                      |
| `updatedAt`                              | *string*                                 | :heavy_minus_sign:                       | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format) |
| `url`                                    | *string*                                 | :heavy_check_mark:                       | N/A                                      |