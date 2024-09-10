# UpdateCrmContactRequest

## Example Usage

```typescript
import { UpdateCrmContactRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateCrmContactRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `crmContact`                                                                             | [shared.CrmContact](../../../sdk/models/shared/crmcontact.md)                            | :heavy_minus_sign:                                                                       | A contact represents a person that optionally is associated with a deal and/or a company |
| `connectionId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | ID of the connection                                                                     |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | ID of the Contact                                                                        |