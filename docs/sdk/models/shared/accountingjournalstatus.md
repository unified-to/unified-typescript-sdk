# AccountingJournalStatus

Posting state of the journal entry

## Example Usage

```typescript
import { AccountingJournalStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingJournalStatus = "POSTED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"DRAFT" | "POSTED" | "VOID" | "OTHER" | Unrecognized<string>
```