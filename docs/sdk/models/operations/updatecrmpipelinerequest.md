# UpdateCrmPipelineRequest

## Example Usage

```typescript
import { UpdateCrmPipelineRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateCrmPipelineRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `crmPipeline`                                                   | [shared.CrmPipeline](../../../sdk/models/shared/crmpipeline.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | ID of the Pipeline                                              |