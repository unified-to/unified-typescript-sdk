# UpdateCrmEventRequest

## Example Usage

```typescript
import { UpdateCrmEventRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateCrmEventRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `crmEvent`                                                                                                      | [shared.CrmEvent](../../../sdk/models/shared/crmevent.md)                                                       | :heavy_minus_sign:                                                                                              | An event represents an event, activity, or engagement and is always associated with a deal, contact, or company |
| `connectionId`                                                                                                  | *string*                                                                                                        | :heavy_check_mark:                                                                                              | ID of the connection                                                                                            |
| `id`                                                                                                            | *string*                                                                                                        | :heavy_check_mark:                                                                                              | ID of the Event                                                                                                 |