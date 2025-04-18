# CreateHrisGroupRequest

## Example Usage

```typescript
import { CreateHrisGroupRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateHrisGroupRequest = {
  hrisGroup: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `hrisGroup`                                                 | [shared.HrisGroup](../../../sdk/models/shared/hrisgroup.md) | :heavy_check_mark:                                          | N/A                                                         |
| `connectionId`                                              | *string*                                                    | :heavy_check_mark:                                          | ID of the connection                                        |
| `fields`                                                    | *string*[]                                                  | :heavy_minus_sign:                                          | Comma-delimited fields to return                            |