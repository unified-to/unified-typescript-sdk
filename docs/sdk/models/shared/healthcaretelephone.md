# HealthcareTelephone

## Example Usage

```typescript
import { HealthcareTelephone } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: HealthcareTelephone = {
  telephone: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `telephone`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | The telephone number                                                                    |
| `type`                                                                                  | [shared.HealthcareTelephoneType](../../../sdk/models/shared/healthcaretelephonetype.md) | :heavy_minus_sign:                                                                      | The kind of telephone number (work, home, mobile, fax or other)                         |