# UpdateCrmEventRequest

## Example Usage

```typescript
import { UpdateCrmEventRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateCrmEventRequest = {
  crmEvent: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `crmEvent`                                                                                                                                       | [shared.CrmEvent](../../../sdk/models/shared/crmevent.md)                                                                                        | :heavy_check_mark:                                                                                                                               | An event represents an event, activity, or engagement and is always associated with a deal, contact, or company                                  |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.UpdateCrmEventQueryParamFields](../../../sdk/models/operations/updatecrmeventqueryparamfields.md)[]                                  | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the Event                                                                                                                                  |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |