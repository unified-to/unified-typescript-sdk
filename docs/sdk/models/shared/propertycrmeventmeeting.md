# PropertyCrmEventMeeting

The meeting object, when type = meeting

## Example Usage

```typescript
import { PropertyCrmEventMeeting } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyCrmEventMeeting = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The event meeting's agendadescription                                                         |
| `endAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The event meeting's end datetime (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                     |
| `startAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The event meeting's start datetime (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                   |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The event meeting's topicsubject                                                              |