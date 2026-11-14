# QmsCharacteristic

A characteristic measured or checked during an inspection

## Example Usage

```typescript
import { QmsCharacteristic } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: QmsCharacteristic = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `lowerLimit`                                             | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `measuredValue`                                          | *string*                                                 | :heavy_minus_sign:                                       | Measured or observed value; text so attribute checks fit |
| `name`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `nominalValue`                                           | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `notes`                                                  | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `result`                                                 | [shared.Result](../../../sdk/models/shared/result.md)    | :heavy_minus_sign:                                       | N/A                                                      |
| `specification`                                          | *string*                                                 | :heavy_minus_sign:                                       | Requirement or drawing reference                         |
| `unitOfMeasure`                                          | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `upperLimit`                                             | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |