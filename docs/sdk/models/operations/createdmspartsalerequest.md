# CreateDmsPartsaleRequest

## Example Usage

```typescript
import { CreateDmsPartsaleRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateDmsPartsaleRequest = {
  dmsPartsale: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dmsPartsale`                                                                                                                                    | [shared.DmsPartsale](../../../sdk/models/shared/dmspartsale.md)                                                                                  | :heavy_check_mark:                                                                                                                               | A parts counter sale, quote or return                                                                                                            |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateDmsPartsaleQueryParamFields](../../../sdk/models/operations/createdmspartsalequeryparamfields.md)[]                            | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |