# Passthrough
(*passthrough*)

### Available Operations

* [deletePassthroughConnectionIdPath](#deletepassthroughconnectionidpath) - Passthrough DELETE
* [getPassthroughConnectionIdPath](#getpassthroughconnectionidpath) - Passthrough GET
* [patchPassthroughConnectionIdPath](#patchpassthroughconnectionidpath) - Passthrough PUT
* [postPassthroughConnectionIdPath](#postpassthroughconnectionidpath) - Passthrough POST
* [putPassthroughConnectionIdPath](#putpassthroughconnectionidpath) - Passthrough PUT

## deletePassthroughConnectionIdPath

Passthrough DELETE

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeletePassthroughConnectionIdPathResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.passthrough.deletePassthroughConnectionIdPath({
  connectionId: "fugiat",
  path: "debitis",
}).then((res: DeletePassthroughConnectionIdPathResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.DeletePassthroughConnectionIdPathRequest](../../models/operations/deletepassthroughconnectionidpathrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.DeletePassthroughConnectionIdPathResponse](../../models/operations/deletepassthroughconnectionidpathresponse.md)>**


## getPassthroughConnectionIdPath

Passthrough GET

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetPassthroughConnectionIdPathResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.passthrough.getPassthroughConnectionIdPath({
  connectionId: "minima",
  path: "ducimus",
}).then((res: GetPassthroughConnectionIdPathResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetPassthroughConnectionIdPathRequest](../../models/operations/getpassthroughconnectionidpathrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetPassthroughConnectionIdPathResponse](../../models/operations/getpassthroughconnectionidpathresponse.md)>**


## patchPassthroughConnectionIdPath

Passthrough PUT

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchPassthroughConnectionIdPathResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.passthrough.patchPassthroughConnectionIdPath({
  connectionId: "est",
  path: "dicta",
  undefined: {},
}).then((res: PatchPassthroughConnectionIdPathResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PatchPassthroughConnectionIdPathRequest](../../models/operations/patchpassthroughconnectionidpathrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PatchPassthroughConnectionIdPathResponse](../../models/operations/patchpassthroughconnectionidpathresponse.md)>**


## postPassthroughConnectionIdPath

Passthrough POST

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostPassthroughConnectionIdPathResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.passthrough.postPassthroughConnectionIdPath({
  connectionId: "architecto",
  path: "fugiat",
  undefined: {},
}).then((res: PostPassthroughConnectionIdPathResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PostPassthroughConnectionIdPathRequest](../../models/operations/postpassthroughconnectionidpathrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PostPassthroughConnectionIdPathResponse](../../models/operations/postpassthroughconnectionidpathresponse.md)>**


## putPassthroughConnectionIdPath

Passthrough PUT

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutPassthroughConnectionIdPathResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.passthrough.putPassthroughConnectionIdPath({
  connectionId: "eum",
  path: "vitae",
  undefined: {},
}).then((res: PutPassthroughConnectionIdPathResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PutPassthroughConnectionIdPathRequest](../../models/operations/putpassthroughconnectionidpathrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PutPassthroughConnectionIdPathResponse](../../models/operations/putpassthroughconnectionidpathresponse.md)>**

