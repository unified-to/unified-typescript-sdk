# LegalParty

## Example Usage

```typescript
import { LegalParty } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: LegalParty = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `companyId`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | pointer to a CRM Company                                              |
| `contactId`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | pointer to a CRM Contact                                              |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | the vendor's free-text relationship description                       |
| `role`                                                                | [shared.LegalPartyRole](../../../sdk/models/shared/legalpartyrole.md) | :heavy_minus_sign:                                                    | the party role on the matter                                          |