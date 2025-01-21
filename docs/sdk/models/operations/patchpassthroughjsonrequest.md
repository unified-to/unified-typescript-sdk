# PatchPassthroughJsonRequest

## Example Usage

```typescript
import { PatchPassthroughJsonRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchPassthroughJsonRequest = {
  connectionId: "<id>",
  path: "/etc",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `requestBody`                | *any*                        | :heavy_minus_sign:           | integration-specific payload |
| `connectionId`               | *string*                     | :heavy_check_mark:           | ID of the connection         |
| `path`                       | *string*                     | :heavy_check_mark:           | N/A                          |