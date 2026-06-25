# DatastoreRecord

## Example Usage

```typescript
import { DatastoreRecord } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DatastoreRecord = {
  fields: {
    "key": {},
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `databaseId`                                                                                    | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `fields`                                                                                        | Record<string, [shared.DatastoreFieldValue](../../../sdk/models/shared/datastorefieldvalue.md)> | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `raw`                                                                                           | Record<string, *any*>                                                                           | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `rowNumber`                                                                                     | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `tableId`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `updatedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | N/A                                                                                             |