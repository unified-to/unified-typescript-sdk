# CdpProfileSegment

## Example Usage

```typescript
import { CdpProfileSegment } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CdpProfileSegment = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `expiresAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | When the profile's membership expires (if applicable) (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format) |
| `joinedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | When the profile joined the segment (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                   |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The name of the segment/audience                                                               |
| `segmentId`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | The segment/audience this profile belongs to; points to CdpSegment                             |