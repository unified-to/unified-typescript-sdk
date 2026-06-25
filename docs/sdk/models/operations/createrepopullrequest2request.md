# CreateRepoPullrequest2Request

## Example Usage

```typescript
import { CreateRepoPullrequest2Request } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateRepoPullrequest2Request = {
  repoPullrequest: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `repoPullrequest`                                                                                                                                | [shared.RepoPullrequest](../../../sdk/models/shared/repopullrequest.md)                                                                          | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateRepoPullrequest2QueryParamFields](../../../sdk/models/operations/createrepopullrequest2queryparamfields.md)[]                  | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |