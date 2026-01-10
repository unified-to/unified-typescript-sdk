# CreateLmsClassRequest

## Example Usage

```typescript
import { CreateLmsClassRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateLmsClassRequest = {
  lmsClass: {
    courseId: "<id>",
    name: "<value>",
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `lmsClass`                                                                                                                                       | [shared.LmsClass](../../../sdk/models/shared/lmsclass.md)                                                                                        | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateLmsClassQueryParamFields](../../../sdk/models/operations/createlmsclassqueryparamfields.md)[]                                  | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |