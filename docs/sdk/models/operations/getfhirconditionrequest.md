# GetFhirConditionRequest

## Example Usage

```typescript
import { GetFhirConditionRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: GetFhirConditionRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `connectionId`       | *string*             | :heavy_check_mark:   | ID of the connection |
| `id`                 | *string*             | :heavy_check_mark:   | ID of the Condition  |