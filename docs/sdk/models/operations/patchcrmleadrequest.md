# PatchCrmLeadRequest

## Example Usage

```typescript
import { PatchCrmLeadRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchCrmLeadRequest = {
  crmLead: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `crmLead`                                               | [shared.CrmLead](../../../sdk/models/shared/crmlead.md) | :heavy_check_mark:                                      | N/A                                                     |
| `connectionId`                                          | *string*                                                | :heavy_check_mark:                                      | ID of the connection                                    |
| `fields`                                                | *string*[]                                              | :heavy_minus_sign:                                      | Comma-delimited fields to return                        |
| `id`                                                    | *string*                                                | :heavy_check_mark:                                      | ID of the Lead                                          |