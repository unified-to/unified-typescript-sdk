# CreatePrintingFileRequest

## Example Usage

```typescript
import { CreatePrintingFileRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreatePrintingFileRequest = {
  printingFile: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `printingFile`                                                                                                                                   | [shared.PrintingFile](../../../sdk/models/shared/printingfile.md)                                                                                | :heavy_check_mark:                                                                                                                               | An artwork or print file in the print vendor file library                                                                                        |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreatePrintingFileQueryParamFields](../../../sdk/models/operations/createprintingfilequeryparamfields.md)[]                          | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |