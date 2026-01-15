# ShippingTrackingStatus

## Example Usage

```typescript
import { ShippingTrackingStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ShippingTrackingStatus = "DELIVERY_ATTEMPTED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PENDING" | "PROCESSING" | "IN_TRANSIT" | "DELIVERED" | "EXCEPTION" | "CANCELLED" | "LABEL_CREATED" | "PICKED_UP" | "OUT_FOR_DELIVERY" | "DELIVERY_ATTEMPTED" | "RETURNED_TO_SENDER" | "HELD_AT_LOCATION" | "CUSTOMS_CLEARANCE" | "EXCEPTION_RESOLVED" | Unrecognized<string>
```