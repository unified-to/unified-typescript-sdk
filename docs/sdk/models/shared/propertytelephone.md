# PropertyTelephone

## Example Usage

```typescript
import { PropertyTelephone } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyTelephone = {
  telephone: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `telephone`                                                                         | *string*                                                                            | :heavy_check_mark:                                                                  | the telephone number                                                                |
| `type`                                                                              | [shared.PropertyTelephoneType](../../../sdk/models/shared/propertytelephonetype.md) | :heavy_minus_sign:                                                                  | the kind of telephone number                                                        |