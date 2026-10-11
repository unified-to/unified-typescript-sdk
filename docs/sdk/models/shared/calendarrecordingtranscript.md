# CalendarRecordingTranscript

## Example Usage

```typescript
import { CalendarRecordingTranscript } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CalendarRecordingTranscript = {
  text: "<value>",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `attendee`                                                                                                                      | [shared.PropertyCalendarRecordingTranscriptAttendee](../../../sdk/models/shared/propertycalendarrecordingtranscriptattendee.md) | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `endAt`                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_minus_sign:                                                                                                              | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                                                        |
| `language`                                                                                                                      | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | two digit ISO code                                                                                                              |
| `startAt`                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_minus_sign:                                                                                                              | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                                                        |
| `text`                                                                                                                          | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |