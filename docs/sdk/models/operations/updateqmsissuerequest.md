# UpdateQmsIssueRequest

## Example Usage

```typescript
import { UpdateQmsIssueRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateQmsIssueRequest = {
  qmsIssue: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `qmsIssue`                                                                                                                                       | [shared.QmsIssue](../../../sdk/models/shared/qmsissue.md)                                                                                        | :heavy_check_mark:                                                                                                                               | A nonconformance, complaint, audit finding or problem report                                                                                     |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.UpdateQmsIssueQueryParamFields](../../../sdk/models/operations/updateqmsissuequeryparamfields.md)[]                                  | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the Issue                                                                                                                                  |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |