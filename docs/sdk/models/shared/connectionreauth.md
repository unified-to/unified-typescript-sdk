# ConnectionReauth

## Example Usage

```typescript
import { ConnectionReauth } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ConnectionReauth = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `expiresAt`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The token is single-use and expires at this time (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)              |
| `reauthToken`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Pass as reauth_token (together with connection_id) on the "Authorize or re-authorize a connection" URL |