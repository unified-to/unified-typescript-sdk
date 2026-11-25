# PropertyFhirEncounterPeriod

The start and end time of the encounter

## Example Usage

```typescript
import { PropertyFhirEncounterPeriod } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyFhirEncounterPeriod = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `end`                                            | *string*                                         | :heavy_minus_sign:                               | End time with inclusive boundary, if not ongoing |
| `start`                                          | *string*                                         | :heavy_minus_sign:                               | Starting time with inclusive boundary            |