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
  agentId: "Directives",
  connectionId: "female than",
  contactId: "reintermediate Enid Applications",
  limit: 1980.39,
  offset: 3478,
  order: "white Oklahoma Functionality",
  query: "pricing whether Hillsboro",
  sort: "Wooden desensitize SCSI",
  updatedGte: new Date("2021-11-03T12:40:46.997Z"),
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

