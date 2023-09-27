# Person
(*person*)

### Available Operations

* [getEnrichConnectionIdPerson](#getenrichconnectionidperson) - Retrieve enrichment information for a person

## getEnrichConnectionIdPerson

Retrieve enrichment information for a person

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetEnrichConnectionIdPersonResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.person.getEnrichConnectionIdPerson({
  connectionId: "numquam",
  email: "Donna44@yahoo.com",
  linkedinUrl: "laboriosam",
  name: "Phillip Waelchi",
  twitter: "totam",
}).then((res: GetEnrichConnectionIdPersonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetEnrichConnectionIdPersonRequest](../../models/operations/getenrichconnectionidpersonrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetEnrichConnectionIdPersonResponse](../../models/operations/getenrichconnectionidpersonresponse.md)>**

