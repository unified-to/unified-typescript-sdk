# CreateAssessmentPackage2Request

## Example Usage

```typescript
import { CreateAssessmentPackage2Request } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAssessmentPackage2Request = {
  assessmentPackage: {
    type: "OTHER",
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `assessmentPackage`                                                         | [shared.AssessmentPackage](../../../sdk/models/shared/assessmentpackage.md) | :heavy_check_mark:                                                          | Used by assessment providers to SUBMIT packages to ATS systems              |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |