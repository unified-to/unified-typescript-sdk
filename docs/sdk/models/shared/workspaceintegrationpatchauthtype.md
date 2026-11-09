# WorkspaceIntegrationPatchAuthType

the authentication method to use for this workspace integration; when set, it overrides the default auth-method selection (e.g. force 'token' even when Unified OAUTH credentials exist)

## Example Usage

```typescript
import { WorkspaceIntegrationPatchAuthType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: WorkspaceIntegrationPatchAuthType = "oauth2";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"oauth2" | "other" | "token" | Unrecognized<string>
```