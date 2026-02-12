# CreateAssessmentPackageRequest

## Example Usage

```typescript
import { CreateAssessmentPackageRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAssessmentPackageRequest = {
  assessmentPackage: {
    id: "<id>",
    name: "<value>",
    type: "VIDEO_INTERVIEW",
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `assessmentPackage`                                                         | [shared.AssessmentPackage](../../../sdk/models/shared/assessmentpackage.md) | :heavy_check_mark:                                                          | Used by assessment providers to SUBMIT packages to ATS systems              |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |