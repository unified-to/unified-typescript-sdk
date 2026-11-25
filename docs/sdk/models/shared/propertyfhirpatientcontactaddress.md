# PropertyFhirPatientContactAddress

Address for the contact person

## Example Usage

```typescript
import { PropertyFhirPatientContactAddress } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyFhirPatientContactAddress = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `city`                                            | *string*                                          | :heavy_minus_sign:                                | Name of city, town etc.                           |
| `country`                                         | *string*                                          | :heavy_minus_sign:                                | Country (e.g. can be ISO 3166 2 or 3 letter code) |
| `line`                                            | *string*[]                                        | :heavy_minus_sign:                                | Street name, number, direction and P.O. Box etc.  |
| `postalCode`                                      | *string*                                          | :heavy_minus_sign:                                | Postal code for area                              |
| `state`                                           | *string*                                          | :heavy_minus_sign:                                | Sub-unit of country (abbreviations ok)            |
| `type`                                            | *string*                                          | :heavy_minus_sign:                                | postal \| physical \| both                        |
| `use`                                             | *string*                                          | :heavy_minus_sign:                                | home \| work \| temp \| old \| billing            |