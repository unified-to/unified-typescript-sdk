# HealthcareCode

## Example Usage

```typescript
import { HealthcareCode } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: HealthcareCode = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `code`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | The code within the system                                          |
| `display`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | Human-readable display text for the code                            |
| `system`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | The code system URI (e.g. http://loinc.org, http://snomed.info/sct) |