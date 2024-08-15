# CreateCrmPipelineRequest

## Example Usage

```typescript
import { CreateCrmPipelineRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCrmPipelineRequest = {
    connectionId: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `crmPipeline`                                                   | [shared.CrmPipeline](../../../sdk/models/shared/crmpipeline.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |