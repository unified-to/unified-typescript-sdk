# CreatePrintingOrderRequest

## Example Usage

```typescript
import { CreatePrintingOrderRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreatePrintingOrderRequest = {
  printingOrder: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `printingOrder`                                                                                                                                  | [shared.PrintingOrder](../../../sdk/models/shared/printingorder.md)                                                                              | :heavy_check_mark:                                                                                                                               | A production order placed with the print vendor                                                                                                  |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreatePrintingOrderQueryParamFields](../../../sdk/models/operations/createprintingorderqueryparamfields.md)[]                        | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |