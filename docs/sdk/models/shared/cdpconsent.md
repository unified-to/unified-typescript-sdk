# CdpConsent

## Example Usage

```typescript
import { CdpConsent } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CdpConsent = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `purpose`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The consent purpose or objective (eg. marketing, analytics)                                   |
| `status`                                                                                      | [shared.CdpConsentStatus](../../../sdk/models/shared/cdpconsentstatus.md)                     | :heavy_minus_sign:                                                                            | The consent status for this purpose                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the consent status was last updated (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)             |