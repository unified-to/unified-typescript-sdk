# PatchCrmEventRequest

## Example Usage

```typescript
import { PatchCrmEventRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchCrmEventRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `crmEvent`                                                                                                      | [shared.CrmEvent](../../../sdk/models/shared/crmevent.md)                                                       | :heavy_minus_sign:                                                                                              | An event represents an event, activity, or engagement and is always associated with a deal, contact, or company |
| `connectionId`                                                                                                  | *string*                                                                                                        | :heavy_check_mark:                                                                                              | ID of the connection                                                                                            |
| `fields`                                                                                                        | *string*[]                                                                                                      | :heavy_minus_sign:                                                                                              | Comma-delimited fields to return                                                                                |
| `id`                                                                                                            | *string*                                                                                                        | :heavy_check_mark:                                                                                              | ID of the Event                                                                                                 |