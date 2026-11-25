# FhirCapabilityStatementResource

## Example Usage

```typescript
import { FhirCapabilityStatementResource } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirCapabilityStatementResource = {
  type: "<value>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `interaction`                                                                                                   | [shared.FhirCapabilityStatementInteraction](../../../sdk/models/shared/fhircapabilitystatementinteraction.md)[] | :heavy_minus_sign:                                                                                              | What operations are supported?                                                                                  |
| `searchParam`                                                                                                   | [shared.FhirCapabilityStatementSearchParam](../../../sdk/models/shared/fhircapabilitystatementsearchparam.md)[] | :heavy_minus_sign:                                                                                              | Search parameters supported by implementation                                                                   |
| `type`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | A resource type that is supported                                                                               |