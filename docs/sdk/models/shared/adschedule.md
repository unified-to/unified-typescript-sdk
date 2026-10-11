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
| `bidModifier`                                               | *number*                                                    | :heavy_minus_sign:                                          | 0.1-10.0                                                    |
| `dayOfWeek`                                                 | [shared.DayOfWeek](../../../sdk/models/shared/dayofweek.md) | :heavy_check_mark:                                          | N/A                                                         |
| `endHour`                                                   | *number*                                                    | :heavy_check_mark:                                          | 0-24 (24 = end of day)                                      |
| `endMinute`                                                 | *number*                                                    | :heavy_minus_sign:                                          | 0, 15, 30, 45                                               |
| `startHour`                                                 | *number*                                                    | :heavy_check_mark:                                          | 0-23                                                        |
| `startMinute`                                               | *number*                                                    | :heavy_minus_sign:                                          | 0, 15, 30, 45                                               |