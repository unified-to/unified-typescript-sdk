# CoverageLevel

## Example Usage

```typescript
import { CoverageLevel } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CoverageLevel = "EMPLOYEE_ONLY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"EMPLOYEE_ONLY" | "EMPLOYEE_SPOUSE" | "EMPLOYEE_CHILD" | "EMPLOYEE_CHILDREN" | "EMPLOYEE_FAMILY" | "FAMILY" | "OTHER" | Unrecognized<string>
```