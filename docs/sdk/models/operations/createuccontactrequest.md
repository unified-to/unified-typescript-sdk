# CreateUcContactRequest

## Example Usage

```typescript
import { CreateUcContactRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateUcContactRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `ucContact`                                                             | [shared.UcContact](../../../sdk/models/shared/uccontact.md)             | :heavy_minus_sign:                                                      | A contact represents a person that optionally is associated with a call |
| `connectionId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | ID of the connection                                                    |
| `fields`                                                                | *string*[]                                                              | :heavy_minus_sign:                                                      | Comma-delimited fields to return                                        |