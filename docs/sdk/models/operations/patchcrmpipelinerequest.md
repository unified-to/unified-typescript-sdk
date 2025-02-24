# PatchCrmPipelineRequest

## Example Usage

```typescript
import { PatchCrmPipelineRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchCrmPipelineRequest = {
  crmPipeline: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `crmPipeline`                                                   | [shared.CrmPipeline](../../../sdk/models/shared/crmpipeline.md) | :heavy_check_mark:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | ID of the Pipeline                                              |