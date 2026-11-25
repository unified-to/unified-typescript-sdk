# HrisCompensation

## Example Usage

```typescript
import { HrisCompensation } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: HrisCompensation = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `amount`                                                                                    | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `currency`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `endAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                          | date this pay stopped (empty = still current) (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)      |
| `frequency`                                                                                 | [shared.HrisCompensationFrequency](../../../sdk/models/shared/hriscompensationfrequency.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `groupId`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | (reference to HrisGroup)                                                                    |
| `notes`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `startAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                          | date this pay became effective (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                     |
| `type`                                                                                      | [shared.HrisCompensationType](../../../sdk/models/shared/hriscompensationtype.md)           | :heavy_minus_sign:                                                                          | N/A                                                                                         |