# PropertyCrmEventEmail

The email object, when type = email

## Example Usage

```typescript
import { PropertyCrmEventEmail } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyCrmEventEmail = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `attachmentFileIds`                                        | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |
| `body`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `cc`                                                       | *string*[]                                                 | :heavy_minus_sign:                                         | The event email's cc name & email (name <test@test.com>)   |
| `from`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `subject`                                                  | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `to`                                                       | *string*[]                                                 | :heavy_minus_sign:                                         | The event email's "to" name & email (name <test@test.com>) |