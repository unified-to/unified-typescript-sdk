# CalendarBotStatusChange

## Example Usage

```typescript
import { CalendarBotStatusChange } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CalendarBotStatusChange = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `changedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                            |
| `message`                                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `status`                                                                                            | [shared.CalendarBotStatusChangeStatus](../../../sdk/models/shared/calendarbotstatuschangestatus.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `subCode`                                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |