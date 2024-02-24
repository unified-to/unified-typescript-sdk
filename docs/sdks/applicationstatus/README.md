# Applicationstatus
(*applicationstatus*)

### Available Operations

* [listAtsApplicationstatuses](#listatsapplicationstatuses) - List all application statuses

## listAtsApplicationstatuses

List all application statuses

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAtsApplicationstatusesSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsApplicationstatusesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.applicationstatus.listAtsApplicationstatuses({
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

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.ListAtsApplicationstatusesRequest](../../sdk/models/operations/listatsapplicationstatusesrequest.md)   | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `security`                                                                                                         | [operations.ListAtsApplicationstatusesSecurity](../../sdk/models/operations/listatsapplicationstatusessecurity.md) | :heavy_check_mark:                                                                                                 | The security requirements to use for the request.                                                                  |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.ListAtsApplicationstatusesResponse](../../sdk/models/operations/listatsapplicationstatusesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
