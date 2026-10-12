# ComputeServiceStatus

Normalized status; set to SUSPENDED or LIVE on update to suspend or resume

## Example Usage

```typescript
import { ComputeServiceStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ComputeServiceStatus = "CREATING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CREATING" | "DEPLOYING" | "LIVE" | "SUSPENDED" | "FAILED" | "OTHER" | Unrecognized<string>
```