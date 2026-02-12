# UpdateAssessmentPackageRequest

## Example Usage

```typescript
import { UpdateAssessmentPackageRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateAssessmentPackageRequest = {
  assessmentPackage: {
    id: "<id>",
    name: "<value>",
    type: "VIDEO_INTERVIEW",
  },
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `assessmentPackage`                                                         | [shared.AssessmentPackage](../../../sdk/models/shared/assessmentpackage.md) | :heavy_check_mark:                                                          | Used by assessment providers to SUBMIT packages to ATS systems              |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | ID of the Package                                                           |