# Call
(*call*)

### Available Operations

* [getUcConnectionIdCall](#getucconnectionidcall) - List all calls

## getUcConnectionIdCall

List all calls

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUcConnectionIdCallResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.call.getUcConnectionIdCall({
  agentId: "a",
  connectionId: "iste",
  contactId: "dicta",
  limit: 5524.39,
  offset: 3563.15,
  order: "dolore",
  query: "modi",
  sort: "itaque",
  updatedGte: new Date("2022-03-15T19:59:59.350Z"),
}).then((res: GetUcConnectionIdCallResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetUcConnectionIdCallRequest](../../models/operations/getucconnectionidcallrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetUcConnectionIdCallResponse](../../models/operations/getucconnectionidcallresponse.md)>**

