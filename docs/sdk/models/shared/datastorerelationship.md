# DatastoreRelationship

## Example Usage

```typescript
import { DatastoreRelationship } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DatastoreRelationship = {
  field: "<value>",
  name: "<value>",
  tableId: "<id>",
  type: "MANY",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `field`                                                                                     | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `name`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `tableId`                                                                                   | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `type`                                                                                      | [shared.DatastoreRelationshipType](../../../sdk/models/shared/datastorerelationshiptype.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |