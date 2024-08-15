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
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | ID of the Pipeline                                              |