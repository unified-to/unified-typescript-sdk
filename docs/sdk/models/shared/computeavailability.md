# ComputeAvailability

## Example Usage

```typescript
import { ComputeAvailability } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ComputeAvailability = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `level`                                                    | [shared.Level](../../../sdk/models/shared/level.md)        | :heavy_minus_sign:                                         | Normalized stock level                                     |
| `quantity`                                                 | *number*                                                   | :heavy_minus_sign:                                         | Number of units available, when the vendor reports a count |
| `regionId`                                                 | *string*                                                   | :heavy_minus_sign:                                         | The region this availability applies to                    |