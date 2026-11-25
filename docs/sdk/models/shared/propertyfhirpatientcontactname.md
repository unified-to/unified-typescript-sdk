# PropertyFhirPatientContactName

A name associated with the contact person

## Example Usage

```typescript
import { PropertyFhirPatientContactName } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyFhirPatientContactName = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `family`                                                      | *string*                                                      | :heavy_minus_sign:                                            | Family name (often called surname)                            |
| `given`                                                       | *string*[]                                                    | :heavy_minus_sign:                                            | Given names (not always first), including middle names        |
| `prefix`                                                      | *string*[]                                                    | :heavy_minus_sign:                                            | Parts that come before the name, eg. Dr                       |
| `text`                                                        | *string*                                                      | :heavy_minus_sign:                                            | Text representation of the full name                          |
| `use`                                                         | *string*                                                      | :heavy_minus_sign:                                            | usual \| official \| temp \| nickname \| anonymous \| old \| maiden |