# DbType

## Example Usage

```typescript
import { DbType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DbType = "mariadb";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"mongodb" | "mysql" | "postgres" | "mssql" | "mariadb" | Unrecognized<string>
```