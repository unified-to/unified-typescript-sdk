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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.passthrough.deletePassthroughConnectionIdPath({
    connectionId: "Planner Checking Tricycle",
    path: "/usr/obj",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.passthrough.getPassthroughConnectionIdPath({
    connectionId: "Global",
    path: "/private/var",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.passthrough.patchPassthroughConnectionIdPath({
    connectionId: "average maroon",
    path: "/proc",
    undefined: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.passthrough.postPassthroughConnectionIdPath({
    connectionId: "Computer Hip",
    path: "/boot/defaults",
    undefined: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.passthrough.putPassthroughConnectionIdPath({
    connectionId: "Computer Oriental",
    path: "/usr/local/src",
    undefined: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PutPassthroughConnectionIdPathRequest](../../models/operations/putpassthroughconnectionidpathrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PutPassthroughConnectionIdPathResponse](../../models/operations/putpassthroughconnectionidpathresponse.md)>**

