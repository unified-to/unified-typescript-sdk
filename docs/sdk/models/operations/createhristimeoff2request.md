# CreateHrisTimeoff2Request

## Example Usage

```typescript
import { CreateHrisTimeoff2Request } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateHrisTimeoff2Request = {
  hrisTimeoff: {
    userId: "<id>",
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `hrisTimeoff`                                                                                                                                    | [shared.HrisTimeoff](../../../sdk/models/shared/hristimeoff.md)                                                                                  | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateHrisTimeoff2QueryParamFields](../../../sdk/models/operations/createhristimeoff2queryparamfields.md)[]                          | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |