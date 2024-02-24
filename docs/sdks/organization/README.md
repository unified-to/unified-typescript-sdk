# Organization
(*organization*)

### Available Operations

* [getAccountingOrganization](#getaccountingorganization) - Retrieve an organization
* [listAccountingOrganizations](#listaccountingorganizations) - List all organizations

## getAccountingOrganization

Retrieve an organization

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetAccountingOrganizationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAccountingOrganizationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.organization.getAccountingOrganization({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetAccountingOrganizationRequest](../../sdk/models/operations/getaccountingorganizationrequest.md)   | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `security`                                                                                                       | [operations.GetAccountingOrganizationSecurity](../../sdk/models/operations/getaccountingorganizationsecurity.md) | :heavy_check_mark:                                                                                               | The security requirements to use for the request.                                                                |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetAccountingOrganizationResponse](../../sdk/models/operations/getaccountingorganizationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAccountingOrganizations

List all organizations

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAccountingOrganizationsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAccountingOrganizationsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.organization.listAccountingOrganizations({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.ListAccountingOrganizationsRequest](../../sdk/models/operations/listaccountingorganizationsrequest.md)   | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `security`                                                                                                           | [operations.ListAccountingOrganizationsSecurity](../../sdk/models/operations/listaccountingorganizationssecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.ListAccountingOrganizationsResponse](../../sdk/models/operations/listaccountingorganizationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
