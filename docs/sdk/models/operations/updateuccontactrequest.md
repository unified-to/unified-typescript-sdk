# UpdateUcContactRequest

## Example Usage

```typescript
import { UpdateUcContactRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateUcContactRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `ucContact`                                                             | [shared.UcContact](../../../sdk/models/shared/uccontact.md)             | :heavy_minus_sign:                                                      | A contact represents a person that optionally is associated with a call |
| `connectionId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | ID of the connection                                                    |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | ID of the Contact                                                       |