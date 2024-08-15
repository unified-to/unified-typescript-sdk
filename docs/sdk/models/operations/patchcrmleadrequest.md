# PatchCrmLeadRequest

## Example Usage

```typescript
import { PatchCrmLeadRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchCrmLeadRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `crmLead`                                               | [shared.CrmLead](../../../sdk/models/shared/crmlead.md) | :heavy_minus_sign:                                      | N/A                                                     |
| `connectionId`                                          | *string*                                                | :heavy_check_mark:                                      | ID of the connection                                    |
| `id`                                                    | *string*                                                | :heavy_check_mark:                                      | ID of the Lead                                          |