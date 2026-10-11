# PropertySocialReviewReply

The business's reply to the review

## Example Usage

```typescript
import { PropertySocialReviewReply } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertySocialReviewReply = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `content`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The reply text from the business                                                              |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the reply was created (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the reply was last updated (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                      |