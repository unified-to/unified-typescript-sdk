# PropertyEmail

## Example Usage

```typescript
import { PropertyEmail } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyEmail = {
  email: "Jessika.Harris@hotmail.com",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `email`                                                                     | *string*                                                                    | :heavy_check_mark:                                                          | the email address                                                           |
| `type`                                                                      | [shared.PropertyEmailType](../../../sdk/models/shared/propertyemailtype.md) | :heavy_minus_sign:                                                          | the kind of email address                                                   |