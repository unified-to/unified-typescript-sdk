# ComputeEnv

## Example Usage

```typescript
import { ComputeEnv } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ComputeEnv = {
  name: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `name`                                                  | *string*                                                | :heavy_check_mark:                                      | Environment variable name                               |
| `value`                                                 | *string*                                                | :heavy_minus_sign:                                      | Environment variable value (write-only; never returned) |