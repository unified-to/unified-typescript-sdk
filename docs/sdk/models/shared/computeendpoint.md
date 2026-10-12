# ComputeEndpoint

## Example Usage

```typescript
import { ComputeEndpoint } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ComputeEndpoint = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `isAuthRequired`                                          | *boolean*                                                 | :heavy_minus_sign:                                        | Whether the URL requires a vendor access token            |
| `port`                                                    | *number*                                                  | :heavy_minus_sign:                                        | The port inside the instance                              |
| `protocol`                                                | [shared.Protocol](../../../sdk/models/shared/protocol.md) | :heavy_minus_sign:                                        | The protocol served on this port                          |
| `url`                                                     | *string*                                                  | :heavy_minus_sign:                                        | Public or proxied URL for this port                       |