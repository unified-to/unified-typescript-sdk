# Crm
(*crm*)

### Available Operations

* [createCrmCompany](#createcrmcompany) - Create a company
* [createCrmContact](#createcrmcontact) - Create a contact
* [createCrmDeal](#createcrmdeal) - Create a deal
* [createCrmEvent](#createcrmevent) - Create a event
* [createCrmLead](#createcrmlead) - Create a lead
* [createCrmPipeline](#createcrmpipeline) - Create a pipeline
* [getCrmCompany](#getcrmcompany) - Retrieve a company
* [getCrmContact](#getcrmcontact) - Retrieve a contact
* [getCrmDeal](#getcrmdeal) - Retrieve a deal
* [getCrmEvent](#getcrmevent) - Retrieve a event
* [getCrmLead](#getcrmlead) - Retrieve a lead
* [getCrmPipeline](#getcrmpipeline) - Retrieve a pipeline
* [listCrmCompanies](#listcrmcompanies) - List all companies
* [listCrmContacts](#listcrmcontacts) - List all contacts
* [listCrmDeals](#listcrmdeals) - List all deals
* [listCrmEvents](#listcrmevents) - List all events
* [listCrmLeads](#listcrmleads) - List all leads
* [listCrmPipelines](#listcrmpipelines) - List all pipelines
* [patchCrmCompany](#patchcrmcompany) - Update a company
* [patchCrmContact](#patchcrmcontact) - Update a contact
* [patchCrmDeal](#patchcrmdeal) - Update a deal
* [patchCrmEvent](#patchcrmevent) - Update a event
* [patchCrmLead](#patchcrmlead) - Update a lead
* [patchCrmPipeline](#patchcrmpipeline) - Update a pipeline
* [removeCrmCompany](#removecrmcompany) - Remove a company
* [removeCrmContact](#removecrmcontact) - Remove a contact
* [removeCrmDeal](#removecrmdeal) - Remove a deal
* [removeCrmEvent](#removecrmevent) - Remove a event
* [removeCrmLead](#removecrmlead) - Remove a lead
* [removeCrmPipeline](#removecrmpipeline) - Remove a pipeline
* [updateCrmCompany](#updatecrmcompany) - Update a company
* [updateCrmContact](#updatecrmcontact) - Update a contact
* [updateCrmDeal](#updatecrmdeal) - Update a deal
* [updateCrmEvent](#updatecrmevent) - Update a event
* [updateCrmLead](#updatecrmlead) - Update a lead
* [updateCrmPipeline](#updatecrmpipeline) - Update a pipeline

## createCrmCompany

Create a company

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateCrmCompanySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCrmCompanySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.createCrmCompany({
    crmCompany: {
      address: {},
      dealIds: [
        "<value>",
      ],
      emails: [
        {},
      ],
      linkUrls: [
        "<value>",
      ],
      raw: {
        "key": "<value>",
      },
      tags: [
        "<value>",
      ],
      telephones: [
        {
          telephone: "<value>",
        },
      ],
      websites: [
        "<value>",
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateCrmCompanyRequest](../../sdk/models/operations/createcrmcompanyrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.CreateCrmCompanySecurity](../../sdk/models/operations/createcrmcompanysecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateCrmCompanyResponse](../../sdk/models/operations/createcrmcompanyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createCrmContact

Create a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateCrmContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCrmContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.createCrmContact({
    crmContact: {
      address: {},
      companyIds: [
        "<value>",
      ],
      dealIds: [
        "<value>",
      ],
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateCrmContactRequest](../../sdk/models/operations/createcrmcontactrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.CreateCrmContactSecurity](../../sdk/models/operations/createcrmcontactsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateCrmContactResponse](../../sdk/models/operations/createcrmcontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createCrmDeal

Create a deal

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateCrmDealSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCrmDealSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.createCrmDeal({
    crmDeal: {
      raw: {
        "key": "<value>",
      },
      tags: [
        "<value>",
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
| `request`                                                                                | [operations.CreateCrmDealRequest](../../sdk/models/operations/createcrmdealrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.CreateCrmDealSecurity](../../sdk/models/operations/createcrmdealsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateCrmDealResponse](../../sdk/models/operations/createcrmdealresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createCrmEvent

Create a event

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateCrmEventSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CrmEventType, PropertyCrmEventTaskStatus } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCrmEventSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.createCrmEvent({
    crmEvent: {
      call: {},
      companyIds: [
        "<value>",
      ],
      contactIds: [
        "<value>",
      ],
      dealIds: [
        "<value>",
      ],
      email: {
        attachmentFileIds: [
          "<value>",
        ],
        cc: [
          "<value>",
        ],
        to: [
          "<value>",
        ],
      },
      leadIds: [
        "<value>",
      ],
      meeting: {},
      note: {},
      raw: {
        "key": "<value>",
      },
      task: {},
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

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateCrmEventRequest](../../sdk/models/operations/createcrmeventrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.CreateCrmEventSecurity](../../sdk/models/operations/createcrmeventsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateCrmEventResponse](../../sdk/models/operations/createcrmeventresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createCrmLead

Create a lead

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateCrmLeadSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCrmLeadSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.createCrmLead({
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

## createCrmPipeline

Create a pipeline

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateCrmPipelineSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCrmPipelineSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.createCrmPipeline({
    crmPipeline: {
      raw: {
        "key": "<value>",
      },
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

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateCrmPipelineRequest](../../sdk/models/operations/createcrmpipelinerequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.CreateCrmPipelineSecurity](../../sdk/models/operations/createcrmpipelinesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateCrmPipelineResponse](../../sdk/models/operations/createcrmpipelineresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCrmCompany

Retrieve a company

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetCrmCompanySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCrmCompanySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.getCrmCompany({
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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetCrmCompanyRequest](../../sdk/models/operations/getcrmcompanyrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.GetCrmCompanySecurity](../../sdk/models/operations/getcrmcompanysecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetCrmCompanyResponse](../../sdk/models/operations/getcrmcompanyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCrmContact

Retrieve a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetCrmContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCrmContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.getCrmContact({
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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetCrmContactRequest](../../sdk/models/operations/getcrmcontactrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.GetCrmContactSecurity](../../sdk/models/operations/getcrmcontactsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetCrmContactResponse](../../sdk/models/operations/getcrmcontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCrmDeal

Retrieve a deal

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetCrmDealSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCrmDealSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.getCrmDeal({
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
| `request`                                                                          | [operations.GetCrmDealRequest](../../sdk/models/operations/getcrmdealrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.GetCrmDealSecurity](../../sdk/models/operations/getcrmdealsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetCrmDealResponse](../../sdk/models/operations/getcrmdealresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCrmEvent

Retrieve a event

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetCrmEventSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCrmEventSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.getCrmEvent({
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetCrmEventRequest](../../sdk/models/operations/getcrmeventrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.GetCrmEventSecurity](../../sdk/models/operations/getcrmeventsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetCrmEventResponse](../../sdk/models/operations/getcrmeventresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCrmLead

Retrieve a lead

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetCrmLeadSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCrmLeadSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.getCrmLead({
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

## getCrmPipeline

Retrieve a pipeline

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetCrmPipelineSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCrmPipelineSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.getCrmPipeline({
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

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetCrmPipelineRequest](../../sdk/models/operations/getcrmpipelinerequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetCrmPipelineSecurity](../../sdk/models/operations/getcrmpipelinesecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetCrmPipelineResponse](../../sdk/models/operations/getcrmpipelineresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCrmCompanies

List all companies

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListCrmCompaniesSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCrmCompaniesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.listCrmCompanies({
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListCrmCompaniesRequest](../../sdk/models/operations/listcrmcompaniesrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ListCrmCompaniesSecurity](../../sdk/models/operations/listcrmcompaniessecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListCrmCompaniesResponse](../../sdk/models/operations/listcrmcompaniesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCrmContacts

List all contacts

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListCrmContactsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCrmContactsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.listCrmContacts({
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

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListCrmContactsRequest](../../sdk/models/operations/listcrmcontactsrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.ListCrmContactsSecurity](../../sdk/models/operations/listcrmcontactssecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListCrmContactsResponse](../../sdk/models/operations/listcrmcontactsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCrmDeals

List all deals

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListCrmDealsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCrmDealsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.listCrmDeals({
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
| `request`                                                                              | [operations.ListCrmDealsRequest](../../sdk/models/operations/listcrmdealsrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.ListCrmDealsSecurity](../../sdk/models/operations/listcrmdealssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListCrmDealsResponse](../../sdk/models/operations/listcrmdealsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCrmEvents

List all events

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListCrmEventsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCrmEventsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.listCrmEvents({
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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListCrmEventsRequest](../../sdk/models/operations/listcrmeventsrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.ListCrmEventsSecurity](../../sdk/models/operations/listcrmeventssecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListCrmEventsResponse](../../sdk/models/operations/listcrmeventsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCrmLeads

List all leads

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListCrmLeadsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCrmLeadsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.listCrmLeads({
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

## listCrmPipelines

List all pipelines

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListCrmPipelinesSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCrmPipelinesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.listCrmPipelines({
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListCrmPipelinesRequest](../../sdk/models/operations/listcrmpipelinesrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ListCrmPipelinesSecurity](../../sdk/models/operations/listcrmpipelinessecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListCrmPipelinesResponse](../../sdk/models/operations/listcrmpipelinesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchCrmCompany

Update a company

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchCrmCompanySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCrmCompanySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.patchCrmCompany({
    crmCompany: {
      address: {},
      dealIds: [
        "<value>",
      ],
      emails: [
        {},
      ],
      linkUrls: [
        "<value>",
      ],
      raw: {
        "key": "<value>",
      },
      tags: [
        "<value>",
      ],
      telephones: [
        {
          telephone: "<value>",
        },
      ],
      websites: [
        "<value>",
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

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.PatchCrmCompanyRequest](../../sdk/models/operations/patchcrmcompanyrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.PatchCrmCompanySecurity](../../sdk/models/operations/patchcrmcompanysecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.PatchCrmCompanyResponse](../../sdk/models/operations/patchcrmcompanyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchCrmContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchCrmContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCrmContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.patchCrmContact({
    crmContact: {
      address: {},
      companyIds: [
        "<value>",
      ],
      dealIds: [
        "<value>",
      ],
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

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.PatchCrmContactRequest](../../sdk/models/operations/patchcrmcontactrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.PatchCrmContactSecurity](../../sdk/models/operations/patchcrmcontactsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.PatchCrmContactResponse](../../sdk/models/operations/patchcrmcontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchCrmDeal

Update a deal

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchCrmDealSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCrmDealSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.patchCrmDeal({
    crmDeal: {
      raw: {
        "key": "<value>",
      },
      tags: [
        "<value>",
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
| `request`                                                                              | [operations.PatchCrmDealRequest](../../sdk/models/operations/patchcrmdealrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.PatchCrmDealSecurity](../../sdk/models/operations/patchcrmdealsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PatchCrmDealResponse](../../sdk/models/operations/patchcrmdealresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchCrmEvent

Update a event

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchCrmEventSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CrmEventType, PropertyCrmEventTaskStatus } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCrmEventSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.patchCrmEvent({
    crmEvent: {
      call: {},
      companyIds: [
        "<value>",
      ],
      contactIds: [
        "<value>",
      ],
      dealIds: [
        "<value>",
      ],
      email: {
        attachmentFileIds: [
          "<value>",
        ],
        cc: [
          "<value>",
        ],
        to: [
          "<value>",
        ],
      },
      leadIds: [
        "<value>",
      ],
      meeting: {},
      note: {},
      raw: {
        "key": "<value>",
      },
      task: {},
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
| `request`                                                                                | [operations.PatchCrmEventRequest](../../sdk/models/operations/patchcrmeventrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.PatchCrmEventSecurity](../../sdk/models/operations/patchcrmeventsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PatchCrmEventResponse](../../sdk/models/operations/patchcrmeventresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchCrmLead

Update a lead

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchCrmLeadSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCrmLeadSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.patchCrmLead({
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

## patchCrmPipeline

Update a pipeline

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchCrmPipelineSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCrmPipelineSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.patchCrmPipeline({
    crmPipeline: {
      raw: {
        "key": "<value>",
      },
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PatchCrmPipelineRequest](../../sdk/models/operations/patchcrmpipelinerequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.PatchCrmPipelineSecurity](../../sdk/models/operations/patchcrmpipelinesecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PatchCrmPipelineResponse](../../sdk/models/operations/patchcrmpipelineresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeCrmCompany

Remove a company

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveCrmCompanySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCrmCompanySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.removeCrmCompany({
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.RemoveCrmCompanyRequest](../../sdk/models/operations/removecrmcompanyrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.RemoveCrmCompanySecurity](../../sdk/models/operations/removecrmcompanysecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.RemoveCrmCompanyResponse](../../sdk/models/operations/removecrmcompanyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeCrmContact

Remove a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveCrmContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCrmContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.removeCrmContact({
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.RemoveCrmContactRequest](../../sdk/models/operations/removecrmcontactrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.RemoveCrmContactSecurity](../../sdk/models/operations/removecrmcontactsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.RemoveCrmContactResponse](../../sdk/models/operations/removecrmcontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeCrmDeal

Remove a deal

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveCrmDealSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCrmDealSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.removeCrmDeal({
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
| `request`                                                                                | [operations.RemoveCrmDealRequest](../../sdk/models/operations/removecrmdealrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.RemoveCrmDealSecurity](../../sdk/models/operations/removecrmdealsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.RemoveCrmDealResponse](../../sdk/models/operations/removecrmdealresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeCrmEvent

Remove a event

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveCrmEventSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCrmEventSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.removeCrmEvent({
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

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.RemoveCrmEventRequest](../../sdk/models/operations/removecrmeventrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.RemoveCrmEventSecurity](../../sdk/models/operations/removecrmeventsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.RemoveCrmEventResponse](../../sdk/models/operations/removecrmeventresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeCrmLead

Remove a lead

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveCrmLeadSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCrmLeadSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.removeCrmLead({
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

## removeCrmPipeline

Remove a pipeline

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveCrmPipelineSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCrmPipelineSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.removeCrmPipeline({
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

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.RemoveCrmPipelineRequest](../../sdk/models/operations/removecrmpipelinerequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.RemoveCrmPipelineSecurity](../../sdk/models/operations/removecrmpipelinesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.RemoveCrmPipelineResponse](../../sdk/models/operations/removecrmpipelineresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateCrmCompany

Update a company

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateCrmCompanySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCrmCompanySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.updateCrmCompany({
    crmCompany: {
      address: {},
      dealIds: [
        "<value>",
      ],
      emails: [
        {},
      ],
      linkUrls: [
        "<value>",
      ],
      raw: {
        "key": "<value>",
      },
      tags: [
        "<value>",
      ],
      telephones: [
        {
          telephone: "<value>",
        },
      ],
      websites: [
        "<value>",
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateCrmCompanyRequest](../../sdk/models/operations/updatecrmcompanyrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.UpdateCrmCompanySecurity](../../sdk/models/operations/updatecrmcompanysecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateCrmCompanyResponse](../../sdk/models/operations/updatecrmcompanyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateCrmContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateCrmContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCrmContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.updateCrmContact({
    crmContact: {
      address: {},
      companyIds: [
        "<value>",
      ],
      dealIds: [
        "<value>",
      ],
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateCrmContactRequest](../../sdk/models/operations/updatecrmcontactrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.UpdateCrmContactSecurity](../../sdk/models/operations/updatecrmcontactsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateCrmContactResponse](../../sdk/models/operations/updatecrmcontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateCrmDeal

Update a deal

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateCrmDealSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCrmDealSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.updateCrmDeal({
    crmDeal: {
      raw: {
        "key": "<value>",
      },
      tags: [
        "<value>",
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
| `request`                                                                                | [operations.UpdateCrmDealRequest](../../sdk/models/operations/updatecrmdealrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.UpdateCrmDealSecurity](../../sdk/models/operations/updatecrmdealsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateCrmDealResponse](../../sdk/models/operations/updatecrmdealresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateCrmEvent

Update a event

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateCrmEventSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CrmEventType, PropertyCrmEventTaskStatus } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCrmEventSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.updateCrmEvent({
    crmEvent: {
      call: {},
      companyIds: [
        "<value>",
      ],
      contactIds: [
        "<value>",
      ],
      dealIds: [
        "<value>",
      ],
      email: {
        attachmentFileIds: [
          "<value>",
        ],
        cc: [
          "<value>",
        ],
        to: [
          "<value>",
        ],
      },
      leadIds: [
        "<value>",
      ],
      meeting: {},
      note: {},
      raw: {
        "key": "<value>",
      },
      task: {},
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

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateCrmEventRequest](../../sdk/models/operations/updatecrmeventrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.UpdateCrmEventSecurity](../../sdk/models/operations/updatecrmeventsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateCrmEventResponse](../../sdk/models/operations/updatecrmeventresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateCrmLead

Update a lead

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateCrmLeadSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCrmLeadSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.updateCrmLead({
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

## updateCrmPipeline

Update a pipeline

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateCrmPipelineSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCrmPipelineSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.crm.updateCrmPipeline({
    crmPipeline: {
      raw: {
        "key": "<value>",
      },
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

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateCrmPipelineRequest](../../sdk/models/operations/updatecrmpipelinerequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.UpdateCrmPipelineSecurity](../../sdk/models/operations/updatecrmpipelinesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateCrmPipelineResponse](../../sdk/models/operations/updatecrmpipelineresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
