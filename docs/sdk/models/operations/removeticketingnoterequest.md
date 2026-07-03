# RemoveTicketingNoteRequest

## Example Usage

```typescript
import { RemoveTicketingNoteRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: RemoveTicketingNoteRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `connectionId`       | *string*             | :heavy_check_mark:   | ID of the connection |
| `id`                 | *string*             | :heavy_check_mark:   | ID of the Note       |