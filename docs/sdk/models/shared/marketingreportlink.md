# MarketingReportLink

## Example Usage

```typescript
import { MarketingReportLink } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: MarketingReportLink = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `clickPercentage`                                                                             | *number*                                                                                      | :heavy_minus_sign:                                                                            | Percentage of total clicks                                                                    |
| `lastClickAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Last click timestamp (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                 |
| `totalClicks`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total clicks on this link                                                                     |
| `uniqueClickPercentage`                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Percentage of unique clicks                                                                   |
| `uniqueClicks`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | Unique clicks on this link                                                                    |
| `url`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The URL                                                                                       |