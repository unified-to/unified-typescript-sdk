# CreateHrisCompanyRequest

## Example Usage

```typescript
import { CreateHrisCompanyRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateHrisCompanyRequest = {
  hrisCompany: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `hrisCompany`                                                   | [shared.HrisCompany](../../../sdk/models/shared/hriscompany.md) | :heavy_check_mark:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |