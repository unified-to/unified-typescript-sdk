# FhirContactPoint

## Example Usage

```typescript
import { FhirContactPoint } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirContactPoint = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `system`                                        | *string*                                        | :heavy_minus_sign:                              | phone \| fax \| email \| pager \| url \| sms \| other |
| `use`                                           | *string*                                        | :heavy_minus_sign:                              | home \| work \| temp \| old \| mobile           |
| `value`                                         | *string*                                        | :heavy_minus_sign:                              | The actual contact point details                |