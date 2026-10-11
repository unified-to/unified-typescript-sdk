# BillingEvent

Billing events for ads_group (what you pay for; cross-platform; platform-specific values allowed as pass-through)

## Example Usage

```typescript
import { BillingEvent } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: BillingEvent = "MESSAGES";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"IMPRESSIONS" | "LINK_CLICKS" | "VIDEO_VIEWS" | "APP_INSTALLS" | "ENGAGEMENT" | "PAGE_LIKES" | "MESSAGES" | "POST_ENGAGEMENT" | "PURCHASE" | "NONE" | Unrecognized<string>
```