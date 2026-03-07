# ShippingLabelStatus

## Example Usage

```typescript
import { ShippingLabelStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ShippingLabelStatus = "PROCESSING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PENDING" | "PROCESSING" | "IN_TRANSIT" | "DELIVERED" | "EXCEPTION" | "CANCELLED" | "LABEL_CREATED" | "PICKED_UP" | "OUT_FOR_DELIVERY" | "DELIVERY_ATTEMPTED" | "RETURNED_TO_SENDER" | "HELD_AT_LOCATION" | "CUSTOMS_CLEARANCE" | "EXCEPTION_RESOLVED" | Unrecognized<string>
```