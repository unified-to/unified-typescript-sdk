# GetFhirEncounterRequest

## Example Usage

```typescript
import { GetFhirEncounterRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: GetFhirEncounterRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `connectionId`       | *string*             | :heavy_check_mark:   | ID of the connection |
| `id`                 | *string*             | :heavy_check_mark:   | ID of the Encounter  |