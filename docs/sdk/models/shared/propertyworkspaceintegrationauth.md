# PropertyWorkspaceIntegrationAuth

## Example Usage

```typescript
import { PropertyWorkspaceIntegrationAuth } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyWorkspaceIntegrationAuth = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `clientId`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `clientSecret`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `consumerKey`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `consumerSecret`                                                   | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `devApiKey`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `key`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | the private KEY X.509 certificate in Base64 ASCII format           |
| `needsPkce`                                                        | *boolean*                                                          | :heavy_minus_sign:                                                 | opt-in PKCE for OAuth2 when the integration app or org requires it |
| `pem`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | the PEM X.509 certificate in Base64 ASCII format                   |
| `samlIdpEntityId`                                                  | *string*                                                           | :heavy_minus_sign:                                                 | the SAML IdP issuer/entity ID                                      |
| `samlIdpUrl`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | the SAML IdP SSO/login URL for end-user SAML login                 |
| `samlPem`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | the SAML IdP signing certificate; PEM X.509 in Base64 ASCII format |