# ListFhirDiagnosticreportsRequest

## Example Usage

```typescript
import { ListFhirDiagnosticreportsRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: ListFhirDiagnosticreportsRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `count`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | Page size (an integer >= 1). Defaults to, and is capped at, the integration's maximum page size |
| `format`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | Response format. Only json is supported                                                         |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | Logical id: returns a Bundle with that one resource, or an empty Bundle                         |
| `lastUpdated`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | Only resources updated at or after this time, with the ge prefix (eg. ge2024-01-01T00:00:00Z)   |
| `offset`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | Paging offset, as returned in the Bundle's next link                                            |
| `connectionId`                                                                                  | *string*                                                                                        | :heavy_check_mark:                                                                              | ID of the connection                                                                            |
| `patient`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | The patient: Patient/{id} or {id}. Some integrations require it (see the CapabilityStatement)   |
| `subject`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | Same as patient                                                                                 |