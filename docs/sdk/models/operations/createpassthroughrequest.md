# CreatePassthroughRequest

## Example Usage

```typescript
import { CreatePassthroughRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreatePassthroughRequest = {
  connectionId: "<value>",
  path: "/rescue",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `requestBody`                | Record<string, *any*>        | :heavy_minus_sign:           | integration-specific payload |
| `connectionId`               | *string*                     | :heavy_check_mark:           | ID of the connection         |
| `path`                       | *string*                     | :heavy_check_mark:           | N/A                          |