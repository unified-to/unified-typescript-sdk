# PropertyScimUserSchemas

## Example Usage

```typescript
import { PropertyScimUserSchemas } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyScimUserSchemas =
  "urn:ietf:params:scim:schemas:extension:lattice:attributes:1.0:User";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"urn:ietf:params:scim:schemas:core:2.0:User" | "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User" | "urn:ietf:params:scim:schemas:extension:lattice:attributes:1.0:User" | "urn:ietf:params:scim:schemas:extension:peakon:2.0:User" | Unrecognized<string>
```