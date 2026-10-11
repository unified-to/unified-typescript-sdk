# AdsTargetType

Targeting search types for ads_target list endpoint (Meta: adinterest, adbehavior, adlocale, adgeolocation; Google: geoTargetConstants, user_interest, topic_constant, language_constant)

## Example Usage

```typescript
import { AdsTargetType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AdsTargetType = "CARRIER";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"INTEREST" | "BEHAVIOR" | "LOCALE" | "COUNTRY" | "REGION" | "CITY" | "ZIP" | "US_DMA" | "TOPIC" | "USER_LIST" | "CARRIER" | "DEVICE_MODEL" | "OS_VERSION" | Unrecognized<string>
```