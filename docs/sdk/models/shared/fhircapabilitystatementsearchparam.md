# FhirCapabilityStatementSearchParam

## Example Usage

```typescript
import { FhirCapabilityStatementSearchParam } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirCapabilityStatementSearchParam = {
  name: "<value>",
  type: "date",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                       | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | Server-specific usage                                                                                                 |
| `name`                                                                                                                | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Name of search parameter                                                                                              |
| `type`                                                                                                                | [shared.FhirCapabilityStatementSearchParamType](../../../sdk/models/shared/fhircapabilitystatementsearchparamtype.md) | :heavy_check_mark:                                                                                                    | token \| date \| reference                                                                                            |