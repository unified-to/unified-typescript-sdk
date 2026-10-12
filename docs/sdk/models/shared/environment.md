# Environment

Target environment

## Example Usage

```typescript
import { Environment } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Environment = "DEVELOPMENT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PRODUCTION" | "PREVIEW" | "DEVELOPMENT" | "OTHER" | Unrecognized<string>
```