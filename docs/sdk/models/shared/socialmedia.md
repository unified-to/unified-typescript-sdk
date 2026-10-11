# SocialMedia

## Example Usage

```typescript
import { SocialMedia } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: SocialMedia = {
  url: "https://ultimate-provision.net",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `alt`                                                                   | *string*                                                                | :heavy_minus_sign:                                                      | Accessibility caption / alt text                                        |
| `height`                                                                | *number*                                                                | :heavy_minus_sign:                                                      | Media height in pixels                                                  |
| `id`                                                                    | *string*                                                                | :heavy_minus_sign:                                                      | Provider media id, when the media is individually addressable           |
| `position`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | Ordering of the media within the post; 1 is the first                   |
| `type`                                                                  | [shared.SocialMediaType](../../../sdk/models/shared/socialmediatype.md) | :heavy_minus_sign:                                                      | Type of media                                                           |
| `url`                                                                   | *string*                                                                | :heavy_check_mark:                                                      | URL of the media asset                                                  |
| `width`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | Media width in pixels                                                   |