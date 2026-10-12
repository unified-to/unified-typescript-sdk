# ComputeInstanceStatus

Normalized lifecycle status; set on update to start, stop, pause, resume, restart or terminate

## Example Usage

```typescript
import { ComputeInstanceStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ComputeInstanceStatus = "ERROR";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PROVISIONING" | "STARTING" | "RUNNING" | "STOPPING" | "STOPPED" | "PAUSING" | "PAUSED" | "RESUMING" | "RESTARTING" | "TERMINATING" | "TERMINATED" | "PREEMPTED" | "ERROR" | "OTHER" | Unrecognized<string>
```