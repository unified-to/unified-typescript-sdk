# CreatePassthroughRawRequest

## Example Usage

```typescript
import { CreatePassthroughRawRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

// No examples available for this model
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `requestBody`                | *ReadableStream<Uint8Array>* | :heavy_minus_sign:           | integration-specific payload |
| `connectionId`               | *string*                     | :heavy_check_mark:           | ID of the connection         |
| `path`                       | *string*                     | :heavy_check_mark:           | N/A                          |
| `query`                      | Record<string, *any*>        | :heavy_minus_sign:           | N/A                          |