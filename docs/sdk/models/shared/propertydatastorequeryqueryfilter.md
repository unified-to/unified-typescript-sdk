# PropertyDatastoreQueryQueryFilter

## Example Usage

```typescript
import { PropertyDatastoreQueryQueryFilter } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyDatastoreQueryQueryFilter = {
  type: "FILTER",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `and`                                                                                                               | [shared.DatastoreFilterGroup](../../../sdk/models/shared/datastorefiltergroup.md)[]                                 | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `filters`                                                                                                           | [shared.DatastoreFilter](../../../sdk/models/shared/datastorefilter.md)[]                                           | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `or`                                                                                                                | [shared.DatastoreFilterGroup](../../../sdk/models/shared/datastorefiltergroup.md)[]                                 | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `type`                                                                                                              | [shared.PropertyDatastoreQueryQueryFilterType](../../../sdk/models/shared/propertydatastorequeryqueryfiltertype.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |