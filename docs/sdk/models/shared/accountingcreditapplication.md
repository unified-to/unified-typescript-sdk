# AccountingCreditApplication

## Example Usage

```typescript
import { AccountingCreditApplication } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingCreditApplication = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                       | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | The amount of credit applied to this object                                                                    |
| `appliedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_minus_sign:                                                                                             | Date and time when the credit was applied, in ISO 8601 format and UTC (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format) |
| `objectId`                                                                                                     | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The id of the object this credit was applied to                                                                |
| `objectType`                                                                                                   | [shared.ObjectType](../../../sdk/models/shared/objecttype.md)                                                  | :heavy_minus_sign:                                                                                             | The type of object this credit was applied to                                                                  |