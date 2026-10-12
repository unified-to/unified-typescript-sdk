# Protocol

The protocol served on this port

## Example Usage

```typescript
import { Protocol } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Protocol = "HTTP";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"HTTP" | "HTTPS" | "TCP" | "UDP" | "OTHER" | Unrecognized<string>
```