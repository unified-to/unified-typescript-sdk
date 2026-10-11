# UcRecordingMedia

## Example Usage

```typescript
import { UcRecordingMedia } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: UcRecordingMedia = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `endAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |
| `language`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | two digit ISO code                                                                            |
| `recordingDownloadUrl`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |
| `transcriptDownloadUrl`                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `transcripts`                                                                                 | [shared.UcRecordingTranscript](../../../sdk/models/shared/ucrecordingtranscript.md)[]         | :heavy_minus_sign:                                                                            | N/A                                                                                           |