# ListEnrichPeopleRequest

## Example Usage

```typescript
import { ListEnrichPeopleRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: ListEnrichPeopleRequest = {
  connectionId: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `companyName`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | The name of the company the person is associated with.  Not valid by itself. |
| `connectionId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | ID of the connection                                                         |
| `email`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | The email of the person to search                                            |
| `linkedinUrl`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | The LinkedIn URL of the person to search                                     |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | The name of the person to search                                             |
| `twitter`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | The twitter handle of the person to search                                   |