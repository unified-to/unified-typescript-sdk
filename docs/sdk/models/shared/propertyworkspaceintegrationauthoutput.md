# PropertyWorkspaceIntegrationAuthOutput

## Example Usage

```typescript
import { PropertyWorkspaceIntegrationAuthOutput } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyWorkspaceIntegrationAuthOutput = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `clientId`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `consumerKey`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `needsPkce`                                                        | *boolean*                                                          | :heavy_minus_sign:                                                 | opt-in PKCE for OAuth2 when the integration app or org requires it |
| `samlIdpEntityId`                                                  | *string*                                                           | :heavy_minus_sign:                                                 | the SAML IdP issuer/entity ID                                      |
| `samlIdpUrl`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | the SAML IdP SSO/login URL for end-user SAML login                 |
| `samlPem`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | the SAML IdP signing certificate; PEM X.509 in Base64 ASCII format |