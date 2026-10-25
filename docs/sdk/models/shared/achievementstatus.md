# AchievementStatus

Progress towards the goal

## Example Usage

```typescript
import { AchievementStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AchievementStatus = "IN_PROGRESS";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"IN_PROGRESS" | "IMPROVING" | "WORSENING" | "NO_CHANGE" | "ACHIEVED" | "SUSTAINING" | "NOT_ACHIEVED" | "NO_PROGRESS" | "NOT_ATTAINABLE" | "OTHER" | Unrecognized<string>
```