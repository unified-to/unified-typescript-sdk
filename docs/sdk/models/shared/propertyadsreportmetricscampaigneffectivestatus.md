# PropertyAdsReportMetricsCampaignEffectiveStatus

read-only; controlled by the provider (whether/why the campaign can serve), unlike the user-managed status

## Example Usage

```typescript
import { PropertyAdsReportMetricsCampaignEffectiveStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyAdsReportMetricsCampaignEffectiveStatus = "LIMITED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"UNSPECIFIED" | "SERVING" | "LIMITED" | "LEARNING" | "PAUSED" | "PENDING" | "ENDED" | "MISCONFIGURED" | "NOT_ELIGIBLE" | "ARCHIVED" | "REMOVED" | Unrecognized<string>
```