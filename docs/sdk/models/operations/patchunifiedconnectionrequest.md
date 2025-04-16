# PatchUnifiedConnectionRequest

## Example Usage

```typescript
import { PatchUnifiedConnectionRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchUnifiedConnectionRequest = {
  connection: {
    categories: [
      "enrich",
    ],
    integrationType: "<value>",
    permissions: [
      "crm_pipeline_read",
    ],
  },
  id: "<id>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `connection`                                                         | [shared.Connection](../../../sdk/models/shared/connection.md)        | :heavy_check_mark:                                                   | A connection represents a specific authentication of an integration. |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | ID of the Connection                                                 |