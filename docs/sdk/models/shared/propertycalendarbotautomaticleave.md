# PropertyCalendarBotAutomaticLeave

## Example Usage

```typescript
import { PropertyCalendarBotAutomaticLeave } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyCalendarBotAutomaticLeave = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `detectBots`                                                           | *boolean*                                                              | :heavy_minus_sign:                                                     | Whether to leave if only bots remain                                   |
| `noParticipantsTimeout`                                                | *number*                                                               | :heavy_minus_sign:                                                     | Seconds to wait when no other participants before leaving (default: 2) |
| `waitingRoomTimeout`                                                   | *number*                                                               | :heavy_minus_sign:                                                     | Seconds to wait in waiting room before leaving (default: 1200)         |