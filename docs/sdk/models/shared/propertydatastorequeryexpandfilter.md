# PropertyDatastoreQueryExpandFilter

## Example Usage

```typescript
import { PropertyDatastoreQueryExpandFilter } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyDatastoreQueryExpandFilter = {
  type: "AND",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `and`                                                                                                                 | [shared.DatastoreFilterGroup](../../../sdk/models/shared/datastorefiltergroup.md)[]                                   | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `filters`                                                                                                             | [shared.DatastoreFilter](../../../sdk/models/shared/datastorefilter.md)[]                                             | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `or`                                                                                                                  | [shared.DatastoreFilterGroup](../../../sdk/models/shared/datastorefiltergroup.md)[]                                   | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `type`                                                                                                                | [shared.PropertyDatastoreQueryExpandFilterType](../../../sdk/models/shared/propertydatastorequeryexpandfiltertype.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |