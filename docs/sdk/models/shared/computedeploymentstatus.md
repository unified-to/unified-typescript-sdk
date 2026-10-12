# ComputeDeploymentStatus

Normalized deployment status; set to CANCELED on update to cancel

## Example Usage

```typescript
import { ComputeDeploymentStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ComputeDeploymentStatus = "BUILDING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"QUEUED" | "BUILDING" | "DEPLOYING" | "LIVE" | "FAILED" | "CANCELED" | "SUPERSEDED" | "OTHER" | Unrecognized<string>
```