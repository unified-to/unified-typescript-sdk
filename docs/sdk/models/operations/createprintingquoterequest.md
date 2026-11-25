# CreatePrintingQuoteRequest

## Example Usage

```typescript
import { CreatePrintingQuoteRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreatePrintingQuoteRequest = {
  printingQuote: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `printingQuote`                                                                                                                                  | [shared.PrintingQuote](../../../sdk/models/shared/printingquote.md)                                                                              | :heavy_check_mark:                                                                                                                               | A cost and shipping estimate for a prospective print order                                                                                       |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreatePrintingQuoteQueryParamFields](../../../sdk/models/operations/createprintingquotequeryparamfields.md)[]                        | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |