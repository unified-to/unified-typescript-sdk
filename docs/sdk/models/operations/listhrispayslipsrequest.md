# ListHrisPayslipsRequest

## Example Usage

```typescript
import { ListHrisPayslipsRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: ListHrisPayslipsRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `companyId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `connectionId`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the connection                                                                          |
| `fields`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Comma-delimited fields to return                                                              |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `offset`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `order`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `query`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Query string to search. eg. email address or name                                             |
| `sort`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedGte`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Return only results whose updated date is equal or greater to this value                      |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |