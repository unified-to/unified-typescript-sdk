# CreateCrmCompanyRequest

## Example Usage

```typescript
import { CreateCrmCompanyRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCrmCompanyRequest = {
  connectionId: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `crmCompany`                                                                                   | [shared.CrmCompany](../../../sdk/models/shared/crmcompany.md)                                  | :heavy_minus_sign:                                                                             | A company represents an organization that optionally is associated with a deal and/or contacts |
| `connectionId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the connection                                                                           |
| `fields`                                                                                       | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | Comma-delimited fields to return                                                               |