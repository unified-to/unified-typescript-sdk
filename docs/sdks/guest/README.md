# Guest

## Overview

### Available Operations

* [createPropertyGuest](#createpropertyguest) - Create a guest
* [getPropertyGuest](#getpropertyguest) - Retrieve a guest
* [listPropertyGuests](#listpropertyguests) - List all guests
* [patchPropertyGuest](#patchpropertyguest) - Update a guest
* [updatePropertyGuest](#updatepropertyguest) - Update a guest

## createPropertyGuest

Creates a PropertyGuest. Provide the unified PropertyGuest fields in the request body; they are mapped to the provider's API. Returns the created PropertyGuest.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPropertyGuest" method="post" path="/property/{connection_id}/guest" example="property_guest" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.guest.createPropertyGuest({
    propertyGuest: {
      address: {
        address1: "874 Rice Trafficway",
        city: "East Dollyside",
        country: "Cameroon",
        countryCode: "MX",
        postalCode: "51113-4329",
        region: "Missouri",
      },
      companyName: "Kertzmann, Bednar and Bashirian",
      createdAt: new Date("2021-10-17T05:59:05.070Z"),
      emails: [
        {
          email: "melissa.green@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Melissa",
      id: "3910830c-018d-4922-a6dd-fba9c3c605ee",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/36.jpg",
      language: "es",
      lastName: "Green",
      metadata: [],
      name: "Melissa Green",
      nationality: "SI",
      notes: "Minus incidunt corporis.",
      telephones: [
        {
          telephone: "+14564841285",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2025-07-03T13:23:11.422Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { propertyCreatePropertyGuest } from "@unified-api/typescript-sdk/funcs/propertyCreatePropertyGuest.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyCreatePropertyGuest(unifiedTo, {
    propertyGuest: {
      address: {
        address1: "874 Rice Trafficway",
        city: "East Dollyside",
        country: "Cameroon",
        countryCode: "MX",
        postalCode: "51113-4329",
        region: "Missouri",
      },
      companyName: "Kertzmann, Bednar and Bashirian",
      createdAt: new Date("2021-10-17T05:59:05.070Z"),
      emails: [
        {
          email: "melissa.green@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Melissa",
      id: "3910830c-018d-4922-a6dd-fba9c3c605ee",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/36.jpg",
      language: "es",
      lastName: "Green",
      metadata: [],
      name: "Melissa Green",
      nationality: "SI",
      notes: "Minus incidunt corporis.",
      telephones: [
        {
          telephone: "+14564841285",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2025-07-03T13:23:11.422Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyCreatePropertyGuest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePropertyGuestRequest](../../sdk/models/operations/createpropertyguestrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyGuest](../../sdk/models/shared/propertyguest.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPropertyGuest

Retrieves a single PropertyGuest by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPropertyGuest" method="get" path="/property/{connection_id}/guest/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.guest.getPropertyGuest({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { propertyGetPropertyGuest } from "@unified-api/typescript-sdk/funcs/propertyGetPropertyGuest.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyGetPropertyGuest(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyGetPropertyGuest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPropertyGuestRequest](../../sdk/models/operations/getpropertyguestrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyGuest](../../sdk/models/shared/propertyguest.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPropertyGuests

Returns a list of PropertyGuests. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPropertyGuests" method="get" path="/property/{connection_id}/guest" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.guest.listPropertyGuests({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { propertyListPropertyGuests } from "@unified-api/typescript-sdk/funcs/propertyListPropertyGuests.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyListPropertyGuests(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyListPropertyGuests failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPropertyGuestsRequest](../../sdk/models/operations/listpropertyguestsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyGuest[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchPropertyGuest

Updates the PropertyGuest identified by `id`. Provide the unified PropertyGuest fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchPropertyGuest" method="patch" path="/property/{connection_id}/guest/{id}" example="property_guest" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.guest.patchPropertyGuest({
    propertyGuest: {
      address: {
        address1: "874 Rice Trafficway",
        city: "East Dollyside",
        country: "Cameroon",
        countryCode: "MX",
        postalCode: "51113-4329",
        region: "Missouri",
      },
      companyName: "Kertzmann, Bednar and Bashirian",
      createdAt: new Date("2021-10-17T05:59:05.070Z"),
      emails: [
        {
          email: "melissa.green@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Melissa",
      id: "7000ea21-fc73-4f7e-b993-42e0df589258",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/36.jpg",
      language: "es",
      lastName: "Green",
      metadata: [],
      name: "Melissa Green",
      nationality: "SI",
      notes: "Minus incidunt corporis.",
      telephones: [
        {
          telephone: "+14564841285",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2025-07-03T13:23:11.450Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { propertyPatchPropertyGuest } from "@unified-api/typescript-sdk/funcs/propertyPatchPropertyGuest.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyPatchPropertyGuest(unifiedTo, {
    propertyGuest: {
      address: {
        address1: "874 Rice Trafficway",
        city: "East Dollyside",
        country: "Cameroon",
        countryCode: "MX",
        postalCode: "51113-4329",
        region: "Missouri",
      },
      companyName: "Kertzmann, Bednar and Bashirian",
      createdAt: new Date("2021-10-17T05:59:05.070Z"),
      emails: [
        {
          email: "melissa.green@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Melissa",
      id: "7000ea21-fc73-4f7e-b993-42e0df589258",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/36.jpg",
      language: "es",
      lastName: "Green",
      metadata: [],
      name: "Melissa Green",
      nationality: "SI",
      notes: "Minus incidunt corporis.",
      telephones: [
        {
          telephone: "+14564841285",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2025-07-03T13:23:11.450Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyPatchPropertyGuest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchPropertyGuestRequest](../../sdk/models/operations/patchpropertyguestrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyGuest](../../sdk/models/shared/propertyguest.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updatePropertyGuest

Updates the PropertyGuest identified by `id`. Provide the unified PropertyGuest fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updatePropertyGuest" method="put" path="/property/{connection_id}/guest/{id}" example="property_guest" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.guest.updatePropertyGuest({
    propertyGuest: {
      address: {
        address1: "874 Rice Trafficway",
        city: "East Dollyside",
        country: "Cameroon",
        countryCode: "MX",
        postalCode: "51113-4329",
        region: "Missouri",
      },
      companyName: "Kertzmann, Bednar and Bashirian",
      createdAt: new Date("2021-10-17T05:59:05.070Z"),
      emails: [
        {
          email: "melissa.green@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Melissa",
      id: "7000ea21-fc73-4f7e-b993-42e0df589258",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/36.jpg",
      language: "es",
      lastName: "Green",
      metadata: [],
      name: "Melissa Green",
      nationality: "SI",
      notes: "Minus incidunt corporis.",
      telephones: [
        {
          telephone: "+14564841285",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2025-07-03T13:23:11.450Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { propertyUpdatePropertyGuest } from "@unified-api/typescript-sdk/funcs/propertyUpdatePropertyGuest.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyUpdatePropertyGuest(unifiedTo, {
    propertyGuest: {
      address: {
        address1: "874 Rice Trafficway",
        city: "East Dollyside",
        country: "Cameroon",
        countryCode: "MX",
        postalCode: "51113-4329",
        region: "Missouri",
      },
      companyName: "Kertzmann, Bednar and Bashirian",
      createdAt: new Date("2021-10-17T05:59:05.070Z"),
      emails: [
        {
          email: "melissa.green@icloud.com",
          type: "HOME",
        },
      ],
      firstName: "Melissa",
      id: "7000ea21-fc73-4f7e-b993-42e0df589258",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/36.jpg",
      language: "es",
      lastName: "Green",
      metadata: [],
      name: "Melissa Green",
      nationality: "SI",
      notes: "Minus incidunt corporis.",
      telephones: [
        {
          telephone: "+14564841285",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2025-07-03T13:23:11.450Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyUpdatePropertyGuest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePropertyGuestRequest](../../sdk/models/operations/updatepropertyguestrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyGuest](../../sdk/models/shared/propertyguest.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |