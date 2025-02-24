# CreateRepoPullrequestRequest

## Example Usage

```typescript
import { CreateRepoPullrequestRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateRepoPullrequestRequest = {
  repoPullrequest: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `repoPullrequest`                                                       | [shared.RepoPullrequest](../../../sdk/models/shared/repopullrequest.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `connectionId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | ID of the connection                                                    |
| `fields`                                                                | *string*[]                                                              | :heavy_minus_sign:                                                      | Comma-delimited fields to return                                        |