# CdpIdentifier

## Example Usage

```typescript
import { CdpIdentifier } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CdpIdentifier = {
  value: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `encoding`                                                                  | *string*                                                                    | :heavy_minus_sign:                                                          | The encoding of the identifier value (eg. raw, sha256)                      |
| `isPrimary`                                                                 | *boolean*                                                                   | :heavy_minus_sign:                                                          | Whether this is the primary identifier for the profile                      |
| `source`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | The source that provided this identifier                                    |
| `type`                                                                      | [shared.CdpIdentifierType](../../../sdk/models/shared/cdpidentifiertype.md) | :heavy_minus_sign:                                                          | The type of the identifier (eg. EMAIL, USER_ID, ANONYMOUS_ID)               |
| `value`                                                                     | *string*                                                                    | :heavy_check_mark:                                                          | The identifier value that resolves to the profile                           |