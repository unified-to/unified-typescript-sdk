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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.passthrough.createPassthrough({
    connectionId: "string",
    path: "/etc/periodic",
    undefined: {},
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreatePassthroughRequest](../../models/operations/createpassthroughrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreatePassthroughResponse](../../models/operations/createpassthroughresponse.md)>**


## listPassthroughs

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

  const res = await sdk.passthrough.listPassthroughs({
    connectionId: "string",
    path: "/selinux",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListPassthroughsRequest](../../models/operations/listpassthroughsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListPassthroughsResponse](../../models/operations/listpassthroughsresponse.md)>**


## patchPassthrough

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

  const res = await sdk.passthrough.patchPassthrough({
    connectionId: "string",
    path: "/mnt",
    undefined: {},
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PatchPassthroughRequest](../../models/operations/patchpassthroughrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PatchPassthroughResponse](../../models/operations/patchpassthroughresponse.md)>**


## removePassthrough

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

  const res = await sdk.passthrough.removePassthrough({
    connectionId: "string",
    path: "/Applications",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.RemovePassthroughRequest](../../models/operations/removepassthroughrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.RemovePassthroughResponse](../../models/operations/removepassthroughresponse.md)>**


## updatePassthrough

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

  const res = await sdk.passthrough.updatePassthrough({
    connectionId: "string",
    path: "/dev",
    undefined: {},
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdatePassthroughRequest](../../models/operations/updatepassthroughrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdatePassthroughResponse](../../models/operations/updatepassthroughresponse.md)>**

