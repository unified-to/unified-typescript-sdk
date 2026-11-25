# DmsVehicleStatus

Stock status; only set for inventory units

## Example Usage

```typescript
import { DmsVehicleStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DmsVehicleStatus = "RESERVED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AVAILABLE" | "ON_ORDER" | "IN_TRANSIT" | "RESERVED" | "SOLD" | "UNAVAILABLE" | "OTHER" | Unrecognized<string>
```