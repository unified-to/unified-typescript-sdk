# PrintingLineitemFile

A print file attached to a line item for one placement

## Example Usage

```typescript
import { PrintingLineitemFile } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PrintingLineitemFile = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `fileId`                                                | *string*                                                | :heavy_minus_sign:                                      | The PrintingFile ID                                     |
| `placement`                                             | *string*                                                | :heavy_minus_sign:                                      | Placement code the file is printed on (eg. front, back) |
| `url`                                                   | *string*                                                | :heavy_minus_sign:                                      | URL of the print file                                   |