# CreateCrmLeadRequest

## Example Usage

```typescript
import { CreateCrmLeadRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCrmLeadRequest = {
    connectionId: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `crmLead`                                               | [shared.CrmLead](../../../sdk/models/shared/crmlead.md) | :heavy_minus_sign:                                      | N/A                                                     |
| `connectionId`                                          | *string*                                                | :heavy_check_mark:                                      | ID of the connection                                    |