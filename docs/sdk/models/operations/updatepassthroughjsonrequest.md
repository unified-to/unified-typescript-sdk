# UpdatePassthroughJsonRequest

## Example Usage

```typescript
import { UpdatePassthroughJsonRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdatePassthroughJsonRequest = {
  connectionId: "<id>",
  path: "/usr/X11R6",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `requestBody`                | *any*                        | :heavy_minus_sign:           | integration-specific payload |
| `connectionId`               | *string*                     | :heavy_check_mark:           | ID of the connection         |
| `path`                       | *string*                     | :heavy_check_mark:           | N/A                          |
| `query`                      | Record<string, *any*>        | :heavy_minus_sign:           | N/A                          |