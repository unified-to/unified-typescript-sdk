# UpdateCrmContactRequest

## Example Usage

```typescript
import { UpdateCrmContactRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateCrmContactRequest = {
  crmContact: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `crmContact`                                                                             | [shared.CrmContact](../../../sdk/models/shared/crmcontact.md)                            | :heavy_check_mark:                                                                       | A contact represents a person that optionally is associated with a deal and/or a company |
| `connectionId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | ID of the connection                                                                     |
| `fields`                                                                                 | *string*[]                                                                               | :heavy_minus_sign:                                                                       | Comma-delimited fields to return                                                         |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | ID of the Contact                                                                        |