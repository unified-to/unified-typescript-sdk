# MarketingCampaignStatus

## Example Usage

```typescript
import { MarketingCampaignStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: MarketingCampaignStatus = "SCHEDULED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DRAFT" | "SCHEDULED" | "SENDING" | "SENT" | "CANCELLED" | "PAUSED" | "ARCHIVED" | "OTHER" | Unrecognized<string>
```