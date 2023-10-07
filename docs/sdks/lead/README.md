# Lead
(*lead*)

### Available Operations

* [deleteCrmConnectionIdLeadId](#deletecrmconnectionidleadid) - Remove a lead
* [getCrmConnectionIdLead](#getcrmconnectionidlead) - List all leads
* [getCrmConnectionIdLeadId](#getcrmconnectionidleadid) - Retrieve a lead
* [patchCrmConnectionIdLeadId](#patchcrmconnectionidleadid) - Update a lead
* [postCrmConnectionIdLead](#postcrmconnectionidlead) - Create a lead
* [putCrmConnectionIdLeadId](#putcrmconnectionidleadid) - Update a lead

## deleteCrmConnectionIdLeadId

Remove a lead

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.lead.deleteCrmConnectionIdLeadId({
    connectionId: "Senior azure",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteCrmConnectionIdLeadIdRequest](../../models/operations/deletecrmconnectionidleadidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteCrmConnectionIdLeadIdResponse](../../models/operations/deletecrmconnectionidleadidresponse.md)>**


## getCrmConnectionIdLead

List all leads

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.lead.getCrmConnectionIdLead({
    connectionId: "Computer Hop",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCrmConnectionIdLeadRequest](../../models/operations/getcrmconnectionidleadrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCrmConnectionIdLeadResponse](../../models/operations/getcrmconnectionidleadresponse.md)>**


## getCrmConnectionIdLeadId

Retrieve a lead

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.lead.getCrmConnectionIdLeadId({
    connectionId: "users Minnesota Bypass",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCrmConnectionIdLeadIdRequest](../../models/operations/getcrmconnectionidleadidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCrmConnectionIdLeadIdResponse](../../models/operations/getcrmconnectionidleadidresponse.md)>**


## patchCrmConnectionIdLeadId

Update a lead

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { CrmEmailType, CrmTelephoneType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.lead.patchCrmConnectionIdLeadId({
    crmLead: {
      address: {},
      emails: [
        {},
      ],
      raw: {},
      telephones: [
        {
          telephone: "Cambridgeshire",
        },
      ],
    },
    connectionId: "Oriental farad male",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchCrmConnectionIdLeadIdRequest](../../models/operations/patchcrmconnectionidleadidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchCrmConnectionIdLeadIdResponse](../../models/operations/patchcrmconnectionidleadidresponse.md)>**


## postCrmConnectionIdLead

Create a lead

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { CrmEmailType, CrmTelephoneType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.lead.postCrmConnectionIdLead({
    crmLead: {
      address: {},
      emails: [
        {},
      ],
      raw: {},
      telephones: [
        {
          telephone: "XSS Country knowledge",
        },
      ],
    },
    connectionId: "structure",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostCrmConnectionIdLeadRequest](../../models/operations/postcrmconnectionidleadrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostCrmConnectionIdLeadResponse](../../models/operations/postcrmconnectionidleadresponse.md)>**


## putCrmConnectionIdLeadId

Update a lead

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { CrmEmailType, CrmTelephoneType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.lead.putCrmConnectionIdLeadId({
    crmLead: {
      address: {},
      emails: [
        {},
      ],
      raw: {},
      telephones: [
        {
          telephone: "Extension",
        },
      ],
    },
    connectionId: "supposing Dorado Assistant",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PutCrmConnectionIdLeadIdRequest](../../models/operations/putcrmconnectionidleadidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PutCrmConnectionIdLeadIdResponse](../../models/operations/putcrmconnectionidleadidresponse.md)>**

