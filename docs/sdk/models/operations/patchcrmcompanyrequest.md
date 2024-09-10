# PatchCrmCompanyRequest

## Example Usage

```typescript
import { PatchCrmCompanyRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchCrmCompanyRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `crmCompany`                                                                                   | [shared.CrmCompany](../../../sdk/models/shared/crmcompany.md)                                  | :heavy_minus_sign:                                                                             | A company represents an organization that optionally is associated with a deal and/or contacts |
| `connectionId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the connection                                                                           |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the Company                                                                              |