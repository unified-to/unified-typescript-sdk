# HealthcareObservationComponentInterpretation

Interpretation of the component value

## Example Usage

```typescript
import { HealthcareObservationComponentInterpretation } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: HealthcareObservationComponentInterpretation = "ABNORMAL";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"NORMAL" | "ABNORMAL" | "LOW" | "HIGH" | "CRITICAL_LOW" | "CRITICAL_HIGH" | "OTHER" | Unrecognized<string>
```