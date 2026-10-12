# HealthcareIdentifier

## Example Usage

```typescript
import { HealthcareIdentifier } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: HealthcareIdentifier = {
  value: "<value>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `system`                                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | The namespace/system URI that issued the identifier                                       |
| `type`                                                                                    | [shared.HealthcareIdentifierType](../../../sdk/models/shared/healthcareidentifiertype.md) | :heavy_minus_sign:                                                                        | The kind of identifier                                                                    |
| `value`                                                                                   | *string*                                                                                  | :heavy_check_mark:                                                                        | The identifier value                                                                      |