# UpdatePassthroughRequest

## Example Usage

```typescript
import { UpdatePassthroughRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdatePassthroughRequest = {
    connectionId: "<value>",
    path: "/selinux",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `requestBody`                | Record<string, *any*>        | :heavy_minus_sign:           | integration-specific payload |
| `connectionId`               | *string*                     | :heavy_check_mark:           | ID of the connection         |
| `path`                       | *string*                     | :heavy_check_mark:           | N/A                          |