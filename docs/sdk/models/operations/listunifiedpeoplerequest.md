# ListUnifiedPeopleRequest

## Example Usage

```typescript
import { ListUnifiedPeopleRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: ListUnifiedPeopleRequest = {
  query: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `query`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | Comma-delimited email addresses to search for (at most 100); returns each matching person once |