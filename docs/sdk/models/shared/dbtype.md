# DbType

## Example Usage

```typescript
import { DbType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DbType = "snowflake";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"mongodb" | "mysql" | "postgres" | "mssql" | "mariadb" | "supabase" | "snowflake" | Unrecognized<string>
```