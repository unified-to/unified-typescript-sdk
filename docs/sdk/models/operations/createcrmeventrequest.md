# CreateCrmEventRequest

## Example Usage

```typescript
import { CreateCrmEventRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCrmEventRequest = {
  crmEvent: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `crmEvent`                                                                                                      | [shared.CrmEvent](../../../sdk/models/shared/crmevent.md)                                                       | :heavy_check_mark:                                                                                              | An event represents an event, activity, or engagement and is always associated with a deal, contact, or company |
| `connectionId`                                                                                                  | *string*                                                                                                        | :heavy_check_mark:                                                                                              | ID of the connection                                                                                            |
| `fields`                                                                                                        | *string*[]                                                                                                      | :heavy_minus_sign:                                                                                              | Comma-delimited fields to return                                                                                |