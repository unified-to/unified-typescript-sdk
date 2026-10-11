# SplitType

how net pay is split into this account when an employee has several accounts

## Example Usage

```typescript
import { SplitType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: SplitType = "PERCENTAGE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PERCENTAGE" | "FIXED" | "REMAINDER" | Unrecognized<string>
```