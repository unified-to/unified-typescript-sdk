# Auth
(*auth*)

### Available Operations

* [getUnifiedIntegrationAuth](#getunifiedintegrationauth) - Create connection indirectly
* [getUnifiedIntegrationLogin](#getunifiedintegrationlogin) - Sign in a user

## getUnifiedIntegrationAuth

Returns an authorization URL for the specified integration.  Once a successful authorization occurs, a new connection is created.

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { Scopes } from "unified-to/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.auth.getUnifiedIntegrationAuth({
    integrationType: "string",
    scopes: [
      Scopes.HrisEmployeeRead,
    ],
    workspaceId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetUnifiedIntegrationAuthRequest](../../sdk/models/operations/getunifiedintegrationauthrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetUnifiedIntegrationAuthResponse](../../sdk/models/operations/getunifiedintegrationauthresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUnifiedIntegrationLogin

Returns an authentication URL for the specified integration.  Once a successful authentication occurs, the name and emails are returned.

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.auth.getUnifiedIntegrationLogin({
    integrationType: "string",
    workspaceId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetUnifiedIntegrationLoginRequest](../../sdk/models/operations/getunifiedintegrationloginrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetUnifiedIntegrationLoginResponse](../../sdk/models/operations/getunifiedintegrationloginresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
