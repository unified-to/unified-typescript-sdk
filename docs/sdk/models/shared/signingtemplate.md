# SigningTemplate

## Example Usage

```typescript
import { SigningTemplate } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: SigningTemplate = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date that this template was created (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)              |
| `creatorId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | User who created the template                                                                 |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Template description                                                                          |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier for this template                                                           |
| `isActive`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the template is active/available                                                      |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Template name                                                                                 |
| `raw`                                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The raw data returned by the integration                                                      |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The last date that this template was updated (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)         |