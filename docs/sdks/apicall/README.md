# Apicall
(*apicall*)

### Available Operations

* [getUnifiedApicall](#getunifiedapicall) - Retrieve specific API Call by its ID
* [listUnifiedApicalls](#listunifiedapicalls) - Returns API Calls

## getUnifiedApicall

Retrieve specific API Call by its ID

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetUnifiedApicallSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetUnifiedApicallSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.apicall.getUnifiedApicall({
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetUnifiedApicallRequest](../../sdk/models/operations/getunifiedapicallrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetUnifiedApicallSecurity](../../sdk/models/operations/getunifiedapicallsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetUnifiedApicallResponse](../../sdk/models/operations/getunifiedapicallresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUnifiedApicalls

Returns API Calls

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListUnifiedApicallsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListUnifiedApicallsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.apicall.listUnifiedApicalls({}, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListUnifiedApicallsRequest](../../sdk/models/operations/listunifiedapicallsrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.ListUnifiedApicallsSecurity](../../sdk/models/operations/listunifiedapicallssecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListUnifiedApicallsResponse](../../sdk/models/operations/listunifiedapicallsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
