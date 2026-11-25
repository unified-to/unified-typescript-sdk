# FhirBundleEntry

## Example Usage

```typescript
import { FhirBundleEntry } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirBundleEntry = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `fullUrl`                                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | URI for resource (Absolute URL)                                                                     |
| `resource`                                                                                          | *shared.Resource*                                                                                   | :heavy_minus_sign:                                                                                  | A resource of the searched type                                                                     |
| `search`                                                                                            | [shared.PropertyFhirBundleEntrySearch](../../../sdk/models/shared/propertyfhirbundleentrysearch.md) | :heavy_minus_sign:                                                                                  | Search related information                                                                          |