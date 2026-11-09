# UpdateUnifiedWorkspaceintegrationRequest

## Example Usage

```typescript
import { UpdateUnifiedWorkspaceintegrationRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateUnifiedWorkspaceintegrationRequest = {
  workspaceIntegration: {
    integrationType: "<value>",
    isActive: false,
  },
  id: "<id>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `workspaceIntegration`                                                            | [shared.WorkspaceIntegration](../../../sdk/models/shared/workspaceintegration.md) | :heavy_check_mark:                                                                | N/A                                                                               |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | ID of the Workspaceintegration                                                    |