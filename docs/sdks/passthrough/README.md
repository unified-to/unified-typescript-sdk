# Passthrough
(*passthrough*)

### Available Operations

* [createPassthrough](#createpassthrough) - Passthrough POST
* [listPassthroughs](#listpassthroughs) - Passthrough GET
* [patchPassthrough](#patchpassthrough) - Passthrough PUT
* [removePassthrough](#removepassthrough) - Passthrough DELETE
* [updatePassthrough](#updatepassthrough) - Passthrough PUT

## createPassthrough

Passthrough POST

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreatePassthroughSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreatePassthroughSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.passthrough.createPassthrough({
    requestBody: {
      "key": "<value>",
    },
    connectionId: "<value>",
    path: "/etc/periodic",
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
| `request`                                                                                        | [operations.CreatePassthroughRequest](../../sdk/models/operations/createpassthroughrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.CreatePassthroughSecurity](../../sdk/models/operations/createpassthroughsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreatePassthroughResponse](../../sdk/models/operations/createpassthroughresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listPassthroughs

Passthrough GET

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListPassthroughsSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListPassthroughsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.passthrough.listPassthroughs({
    connectionId: "<value>",
    path: "/selinux",
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
| `request`                                                                                      | [operations.ListPassthroughsRequest](../../sdk/models/operations/listpassthroughsrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ListPassthroughsSecurity](../../sdk/models/operations/listpassthroughssecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListPassthroughsResponse](../../sdk/models/operations/listpassthroughsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchPassthrough

Passthrough PUT

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchPassthroughSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchPassthroughSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.passthrough.patchPassthrough({
    requestBody: {
      "key": "<value>",
    },
    connectionId: "<value>",
    path: "/mnt",
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
| `request`                                                                                      | [operations.PatchPassthroughRequest](../../sdk/models/operations/patchpassthroughrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.PatchPassthroughSecurity](../../sdk/models/operations/patchpassthroughsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PatchPassthroughResponse](../../sdk/models/operations/patchpassthroughresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removePassthrough

Passthrough DELETE

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemovePassthroughSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemovePassthroughSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.passthrough.removePassthrough({
    connectionId: "<value>",
    path: "/Applications",
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
| `request`                                                                                        | [operations.RemovePassthroughRequest](../../sdk/models/operations/removepassthroughrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.RemovePassthroughSecurity](../../sdk/models/operations/removepassthroughsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.RemovePassthroughResponse](../../sdk/models/operations/removepassthroughresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updatePassthrough

Passthrough PUT

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdatePassthroughSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdatePassthroughSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.passthrough.updatePassthrough({
    requestBody: {
      "key": "<value>",
    },
    connectionId: "<value>",
    path: "/dev",
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
| `request`                                                                                        | [operations.UpdatePassthroughRequest](../../sdk/models/operations/updatepassthroughrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.UpdatePassthroughSecurity](../../sdk/models/operations/updatepassthroughsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdatePassthroughResponse](../../sdk/models/operations/updatepassthroughresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
