# FhirBundleLink

## Example Usage

```typescript
import { FhirBundleLink } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirBundleLink = {
  relation: "next",
  url: "https://proper-newsletter.com/",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `relation`                                                | [shared.Relation](../../../sdk/models/shared/relation.md) | :heavy_check_mark:                                        | self \| next                                              |
| `url`                                                     | *string*                                                  | :heavy_check_mark:                                        | Reference details for the link                            |