# Interpretation

Interpretation of the result (e.g. high, low)

## Example Usage

```typescript
import { Interpretation } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Interpretation = "ABNORMAL";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"NORMAL" | "ABNORMAL" | "LOW" | "HIGH" | "CRITICAL_LOW" | "CRITICAL_HIGH" | "OTHER" | Unrecognized<string>
```