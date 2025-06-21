# PaymentSubscriptionStatus

## Example Usage

```typescript
import { PaymentSubscriptionStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PaymentSubscriptionStatus = "INACTIVE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ACTIVE" | "INACTIVE" | "CANCELED" | "PAUSED" | Unrecognized<string>
```