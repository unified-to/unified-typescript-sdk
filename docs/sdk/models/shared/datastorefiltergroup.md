# DatastoreFilterGroup

## Example Usage

```typescript
import { DatastoreFilterGroup } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DatastoreFilterGroup = {
  type: "FILTER",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `and`                                                                                     | [shared.DatastoreFilterGroup](../../../sdk/models/shared/datastorefiltergroup.md)[]       | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `filters`                                                                                 | [shared.DatastoreFilter](../../../sdk/models/shared/datastorefilter.md)[]                 | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `or`                                                                                      | [shared.DatastoreFilterGroup](../../../sdk/models/shared/datastorefiltergroup.md)[]       | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `type`                                                                                    | [shared.DatastoreFilterGroupType](../../../sdk/models/shared/datastorefiltergrouptype.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |