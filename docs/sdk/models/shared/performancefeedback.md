# PerformanceFeedback

## Example Usage

```typescript
import { PerformanceFeedback } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PerformanceFeedback = {
  userId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `authorUserId`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | the HR Employee that gave this feedback (reference to HrisEmployee)                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isVisible`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | true when publicly visible (e.g. praise wall); false when private or manager-only             |
| `message`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `raw`                                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | badges or company values attached to this feedback                                            |
| `type`                                                                                        | [shared.PerformanceFeedbackType](../../../sdk/models/shared/performancefeedbacktype.md)       | :heavy_minus_sign:                                                                            | praise/recognition, constructive feedback, or a response to a feedback request                |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | the HR Employee that this feedback is about (reference to HrisEmployee)                       |