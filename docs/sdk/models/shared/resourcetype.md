# ResourceType

## Example Usage

```typescript
import { ResourceType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ResourceType = "User";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"User" | "Group" | Unrecognized<string>
```