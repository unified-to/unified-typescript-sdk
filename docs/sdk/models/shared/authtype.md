# AuthType

the authentication method to use for this workspace integration; when set, it overrides the default auth-method selection (e.g. force 'token' even when Unified OAUTH credentials exist)

## Example Usage

```typescript
import { AuthType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AuthType = "other";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"oauth2" | "other" | "token" | Unrecognized<string>
```