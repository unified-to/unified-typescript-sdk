# CommerceAvailability

## Example Usage

```typescript
import { CommerceAvailability } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CommerceAvailability = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `endAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |
| `itemId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | (reference to CommerceItem)                                                                   |
| `locationId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | (reference to CommerceLocation)                                                               |
| `raw`                                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `size`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `staffUserId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | (reference to HrisEmployee)                                                                   |
| `startAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |