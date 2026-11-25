# FhirBundle

## Example Usage

```typescript
import { FhirBundle } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirBundle = {
  resourceType: "Bundle",
  type: "searchset",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `entry`                                                                               | [shared.FhirBundleEntry](../../../sdk/models/shared/fhirbundleentry.md)[]             | :heavy_minus_sign:                                                                    | Entry in the bundle - will have a resource or information                             |
| `link`                                                                                | [shared.FhirBundleLink](../../../sdk/models/shared/fhirbundlelink.md)[]               | :heavy_minus_sign:                                                                    | Links related to this Bundle (self, next)                                             |
| `resourceType`                                                                        | [shared.FhirBundleResourceType](../../../sdk/models/shared/fhirbundleresourcetype.md) | :heavy_check_mark:                                                                    | Always Bundle                                                                         |
| `total`                                                                               | *number*                                                                              | :heavy_minus_sign:                                                                    | Total number of matches, when the integration reports it                              |
| `type`                                                                                | [shared.FhirBundleType](../../../sdk/models/shared/fhirbundletype.md)                 | :heavy_check_mark:                                                                    | searchset                                                                             |