# UpdateHrisCompanyRequest

## Example Usage

```typescript
import { UpdateHrisCompanyRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateHrisCompanyRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `hrisCompany`                                                   | [shared.HrisCompany](../../../sdk/models/shared/hriscompany.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | ID of the Company                                               |