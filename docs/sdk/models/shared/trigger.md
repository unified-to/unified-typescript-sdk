# Trigger

What started the deployment

## Example Usage

```typescript
import { Trigger } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Trigger = "MANUAL";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"GIT" | "MANUAL" | "API" | "ROLLBACK" | "OTHER" | Unrecognized<string>
```