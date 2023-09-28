# Enrich
(*enrich*)

### Available Operations

* [getEnrichConnectionIdCompany](#getenrichconnectionidcompany) - Retrieve enrichment information for a company
* [getEnrichConnectionIdPerson](#getenrichconnectionidperson) - Retrieve enrichment information for a person

## getEnrichConnectionIdCompany

Retrieve enrichment information for a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetEnrichConnectionIdCompanyResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.enrich.getEnrichConnectionIdCompany({
  connectionId: "female Computers Central",
  domain: "scientific-facet.biz",
  name: "Outdoors embrace interface",
}).then((res: GetEnrichConnectionIdCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetEnrichConnectionIdCompanyRequest](../../models/operations/getenrichconnectionidcompanyrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetEnrichConnectionIdCompanyResponse](../../models/operations/getenrichconnectionidcompanyresponse.md)>**


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

sdk.enrich.getEnrichConnectionIdPerson({
  connectionId: "Iowa Account",
  email: "Jaiden_Weimann24@gmail.com",
  linkedinUrl: "paradigms integrate Creative",
  name: "Investment",
  twitter: "Hills",
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

