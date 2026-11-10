# GetUnifiedConnectionRequest

## Example Usage

```typescript
import { GetUnifiedConnectionRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: GetUnifiedConnectionRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                    | [operations.GetUnifiedConnectionQueryParamFields](../../../sdk/models/operations/getunifiedconnectionqueryparamfields.md)[] | :heavy_minus_sign:                                                                                                          | Fields to return. Leave out auth to get connection metadata without credentials                                             |
| `id`                                                                                                                        | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | ID of the Connection                                                                                                        |