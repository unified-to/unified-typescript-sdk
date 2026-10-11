# ScimAddress

## Example Usage

```typescript
import { ScimAddress } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ScimAddress = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `country`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `formatted`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `locality`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | city                                                                    |
| `postalCode`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `region`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | stateprovince                                                           |
| `streetAddress`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | could be multi-line                                                     |
| `type`                                                                  | [shared.ScimAddressType](../../../sdk/models/shared/scimaddresstype.md) | :heavy_minus_sign:                                                      | N/A                                                                     |