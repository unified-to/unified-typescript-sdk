# PropertyCrmEventCall

The call object, when type = call

## Example Usage

```typescript
import { PropertyCrmEventCall } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyCrmEventCall = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The event call's descriptionnotes                                                             |
| `duration`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | The event call's duration in minutes                                                          |
| `startAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |