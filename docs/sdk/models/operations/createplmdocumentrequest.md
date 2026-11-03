# CreatePlmDocumentRequest

## Example Usage

```typescript
import { CreatePlmDocumentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreatePlmDocumentRequest = {
  plmDocument: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `plmDocument`                                                                                                                                    | [shared.PlmDocument](../../../sdk/models/shared/plmdocument.md)                                                                                  | :heavy_check_mark:                                                                                                                               | One revision of an engineering document                                                                                                          |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreatePlmDocumentQueryParamFields](../../../sdk/models/operations/createplmdocumentqueryparamfields.md)[]                            | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |