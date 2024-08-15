# MarketingMember

A member represents a person

## Example Usage

```typescript
import { MarketingMember } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: MarketingMember = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `emails`                                                                                      | [shared.MarketingEmail](../../../sdk/models/shared/marketingemail.md)[]                       | :heavy_minus_sign:                                                                            | An array of email addresses for this member                                                   |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `listIds`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | An array of list IDs associated with this member                                              |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `raw`                                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The raw data returned by the integration for this member                                      |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | An array of tags associated with this member                                                  |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |