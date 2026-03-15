# AdSchedule

## Example Usage

```typescript
import { AdSchedule } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AdSchedule = {
  dayOfWeek: "WEDNESDAY",
  endHour: 8515.33,
  startHour: 9325.12,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `bidModifier`                                               | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `dayOfWeek`                                                 | [shared.DayOfWeek](../../../sdk/models/shared/dayofweek.md) | :heavy_check_mark:                                          | N/A                                                         |
| `endHour`                                                   | *number*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `endMinute`                                                 | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `startHour`                                                 | *number*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `startMinute`                                               | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         |