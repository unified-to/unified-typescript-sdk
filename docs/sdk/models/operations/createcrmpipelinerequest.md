# CreateCrmPipelineRequest

## Example Usage

```typescript
import { CreateCrmPipelineRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCrmPipelineRequest = {
  crmPipeline: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `crmPipeline`                                                   | [shared.CrmPipeline](../../../sdk/models/shared/crmpipeline.md) | :heavy_check_mark:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |