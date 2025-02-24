# PatchHrisCompanyRequest

## Example Usage

```typescript
import { PatchHrisCompanyRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchHrisCompanyRequest = {
  hrisCompany: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `hrisCompany`                                                   | [shared.HrisCompany](../../../sdk/models/shared/hriscompany.md) | :heavy_check_mark:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | ID of the Company                                               |