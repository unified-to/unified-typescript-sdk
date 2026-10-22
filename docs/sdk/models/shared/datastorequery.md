# DatastoreQuery

## Example Usage

```typescript
import { DatastoreQuery } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DatastoreQuery = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `databaseId`                                                                                              | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `metadata`                                                                                                | [shared.DatastoreMetadata](../../../sdk/models/shared/datastoremetadata.md)[]                             | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `query`                                                                                                   | [shared.PropertyDatastoreQueryQuery](../../../sdk/models/shared/propertydatastorequeryquery.md)           | :heavy_minus_sign:                                                                                        | What to run: a raw `sql` statement, or a structured query (select, filter, sort, limit/offset, aggregate) |
| `raw`                                                                                                     | Record<string, *any*>                                                                                     | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `response`                                                                                                | [shared.PropertyDatastoreQueryResponse](../../../sdk/models/shared/propertydatastorequeryresponse.md)     | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `tableId`                                                                                                 | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |