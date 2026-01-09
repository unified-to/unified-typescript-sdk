# UpdateLmsStudentRequest

## Example Usage

```typescript
import { UpdateLmsStudentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateLmsStudentRequest = {
  lmsStudent: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `lmsStudent`                                                                                                                                     | [shared.LmsStudent](../../../sdk/models/shared/lmsstudent.md)                                                                                    | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.UpdateLmsStudentQueryParamFields](../../../sdk/models/operations/updatelmsstudentqueryparamfields.md)[]                              | :heavy_minus_sign:                                                                                                                               | Comma-delimited fields to return                                                                                                                 |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the Student                                                                                                                                |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |