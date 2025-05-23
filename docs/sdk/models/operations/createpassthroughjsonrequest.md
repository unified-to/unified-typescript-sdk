# CreatePassthroughJsonRequest

## Example Usage

```typescript
import { CreatePassthroughJsonRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreatePassthroughJsonRequest = {
  connectionId: "<id>",
  path: "/private/tmp",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `requestBody`                | *any*                        | :heavy_minus_sign:           | integration-specific payload |
| `connectionId`               | *string*                     | :heavy_check_mark:           | ID of the connection         |
| `path`                       | *string*                     | :heavy_check_mark:           | N/A                          |
| `query`                      | Record<string, *any*>        | :heavy_minus_sign:           | N/A                          |