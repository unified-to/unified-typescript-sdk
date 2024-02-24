# Company
(*company*)

### Available Operations

* [createCrmCompany](#createcrmcompany) - Create a company
* [getAtsCompany](#getatscompany) - Retrieve a company
* [getCrmCompany](#getcrmcompany) - Retrieve a company
* [listAtsCompanies](#listatscompanies) - List all companies
* [listCrmCompanies](#listcrmcompanies) - List all companies
* [listEnrichCompanies](#listenrichcompanies) - Retrieve enrichment information for a company
* [patchCrmCompany](#patchcrmcompany) - Update a company
* [removeCrmCompany](#removecrmcompany) - Remove a company
* [updateCrmCompany](#updatecrmcompany) - Update a company

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

  const res = await sdk.company.createCrmCompany({
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

## getAtsCompany

Retrieve a company

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetAtsCompanySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAtsCompanySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.company.getAtsCompany({
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
| `request`                                                                                | [operations.GetAtsCompanyRequest](../../sdk/models/operations/getatscompanyrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.GetAtsCompanySecurity](../../sdk/models/operations/getatscompanysecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetAtsCompanyResponse](../../sdk/models/operations/getatscompanyresponse.md)>**
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

  const res = await sdk.company.getCrmCompany({
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

## listAtsCompanies

List all companies

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAtsCompaniesSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsCompaniesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.company.listAtsCompanies({
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
| `request`                                                                                      | [operations.ListAtsCompaniesRequest](../../sdk/models/operations/listatscompaniesrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ListAtsCompaniesSecurity](../../sdk/models/operations/listatscompaniessecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListAtsCompaniesResponse](../../sdk/models/operations/listatscompaniesresponse.md)>**
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

  const res = await sdk.company.listCrmCompanies({
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

## listEnrichCompanies

Retrieve enrichment information for a company

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListEnrichCompaniesSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListEnrichCompaniesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.company.listEnrichCompanies({
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListEnrichCompaniesRequest](../../sdk/models/operations/listenrichcompaniesrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.ListEnrichCompaniesSecurity](../../sdk/models/operations/listenrichcompaniessecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListEnrichCompaniesResponse](../../sdk/models/operations/listenrichcompaniesresponse.md)>**
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

  const res = await sdk.company.patchCrmCompany({
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

  const res = await sdk.company.removeCrmCompany({
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

  const res = await sdk.company.updateCrmCompany({
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
