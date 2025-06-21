# CommerceReviewStatus

## Example Usage

```typescript
import { CommerceReviewStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CommerceReviewStatus = "REJECTED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PENDING" | "APPROVED" | "REJECTED" | "SPAM" | Unrecognized<string>
```