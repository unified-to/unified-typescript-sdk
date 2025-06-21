# AtsOfferStatus

## Example Usage

```typescript
import { AtsOfferStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AtsOfferStatus = "CREATED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"CREATED" | "SENT" | "ACCEPTED" | "REJECTED" | Unrecognized<string>
```