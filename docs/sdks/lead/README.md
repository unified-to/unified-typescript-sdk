# Lead
(*lead*)

### Available Operations

* [createCrmLead](#createcrmlead) - Create a lead
* [getCrmLead](#getcrmlead) - Retrieve a lead
* [listCrmLeads](#listcrmleads) - List all leads
* [patchCrmLead](#patchcrmlead) - Update a lead
* [removeCrmLead](#removecrmlead) - Remove a lead
* [updateCrmLead](#updatecrmlead) - Update a lead

## createCrmLead

Create a lead

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreateCrmLeadSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCrmLeadSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.lead.createCrmLead({
    crmLead: {
      address: {},
      emails: [
        {},
      ],
      raw: {
        "key": "<value>",
      },
      telephones: [
        {
          telephone: "<value>",
        },
      ],
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateCrmLeadRequest](../../sdk/models/operations/createcrmleadrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.CreateCrmLeadSecurity](../../sdk/models/operations/createcrmleadsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateCrmLeadResponse](../../sdk/models/operations/createcrmleadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCrmLead

Retrieve a lead

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetCrmLeadSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCrmLeadSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.lead.getCrmLead({
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

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetCrmLeadRequest](../../sdk/models/operations/getcrmleadrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.GetCrmLeadSecurity](../../sdk/models/operations/getcrmleadsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetCrmLeadResponse](../../sdk/models/operations/getcrmleadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCrmLeads

List all leads

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListCrmLeadsSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCrmLeadsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.lead.listCrmLeads({
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

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListCrmLeadsRequest](../../sdk/models/operations/listcrmleadsrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.ListCrmLeadsSecurity](../../sdk/models/operations/listcrmleadssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListCrmLeadsResponse](../../sdk/models/operations/listcrmleadsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchCrmLead

Update a lead

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchCrmLeadSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCrmLeadSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.lead.patchCrmLead({
    crmLead: {
      address: {},
      emails: [
        {},
      ],
      raw: {
        "key": "<value>",
      },
      telephones: [
        {
          telephone: "<value>",
        },
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.PatchCrmLeadRequest](../../sdk/models/operations/patchcrmleadrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.PatchCrmLeadSecurity](../../sdk/models/operations/patchcrmleadsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PatchCrmLeadResponse](../../sdk/models/operations/patchcrmleadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeCrmLead

Remove a lead

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemoveCrmLeadSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCrmLeadSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.lead.removeCrmLead({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.RemoveCrmLeadRequest](../../sdk/models/operations/removecrmleadrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.RemoveCrmLeadSecurity](../../sdk/models/operations/removecrmleadsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.RemoveCrmLeadResponse](../../sdk/models/operations/removecrmleadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateCrmLead

Update a lead

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdateCrmLeadSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCrmLeadSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.lead.updateCrmLead({
    crmLead: {
      address: {},
      emails: [
        {},
      ],
      raw: {
        "key": "<value>",
      },
      telephones: [
        {
          telephone: "<value>",
        },
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateCrmLeadRequest](../../sdk/models/operations/updatecrmleadrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.UpdateCrmLeadSecurity](../../sdk/models/operations/updatecrmleadsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateCrmLeadResponse](../../sdk/models/operations/updatecrmleadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
