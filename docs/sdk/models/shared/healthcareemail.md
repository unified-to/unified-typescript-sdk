# HealthcareEmail

## Example Usage

```typescript
import { HealthcareEmail } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: HealthcareEmail = {
  email: "Aditya.Schumm@hotmail.com",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `email`                                                                         | *string*                                                                        | :heavy_check_mark:                                                              | The email address                                                               |
| `type`                                                                          | [shared.HealthcareEmailType](../../../sdk/models/shared/healthcareemailtype.md) | :heavy_minus_sign:                                                              | The kind of email address (work, home or other)                                 |