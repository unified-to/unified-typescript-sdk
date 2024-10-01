# RemoveCrmPipelineRequest

## Example Usage

```typescript
import { RemoveCrmPipelineRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: RemoveCrmPipelineRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `connectionId`       | *string*             | :heavy_check_mark:   | ID of the connection |
| `id`                 | *string*             | :heavy_check_mark:   | ID of the Pipeline   |