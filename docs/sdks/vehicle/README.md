# Vehicle

## Overview

### Available Operations

* [createDmsVehicle](#createdmsvehicle) - Create a vehicle
* [getDmsVehicle](#getdmsvehicle) - Retrieve a vehicle
* [listDmsVehicles](#listdmsvehicles) - List all vehicles
* [patchDmsVehicle](#patchdmsvehicle) - Update a vehicle
* [updateDmsVehicle](#updatedmsvehicle) - Update a vehicle

## createDmsVehicle

Creates a DmsVehicle. Provide the unified DmsVehicle fields in the request body; they are mapped to the provider's API. Returns the created DmsVehicle.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDmsVehicle" method="post" path="/dms/{connection_id}/vehicle" example="dms_vehicle" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.vehicle.createDmsVehicle({
    dmsVehicle: {
      bodyStyle: "Pickup",
      condition: "NEW",
      costAmount: 26498,
      createdAt: new Date("2021-02-03T08:01:58.559Z"),
      currency: "USD",
      description: "2023 Citroën Silverado",
      exteriorColor: "lavender",
      fuelType: "ELECTRIC",
      id: "1553a44f-1f12-47c4-bb07-fb2d039acf68",
      imageUrls: [
        "https://picsum.photos/seed/tOUr5K/1358/1877",
      ],
      interiorColor: "Black",
      internetPriceAmount: 29526,
      isActive: true,
      isCertified: false,
      isInventory: true,
      isPublished: false,
      make: "Citroën",
      metadata: [],
      model: "Silverado",
      modelCode: "PMU8KI",
      msrpAmount: 33100,
      odometer: 1,
      odometerUnit: "MILES",
      options: [
        {
          code: "SXE",
          costAmount: 250,
          description: "Tow package",
          priceAmount: 1400,
          type: "DEALER",
        },
        {
          code: "458",
          costAmount: 700,
          description: "Tow package",
          priceAmount: 600,
          type: "DEALER",
        },
      ],
      priceAmount: 29926,
      receivedAt: new Date("2021-02-03T08:01:58.559Z"),
      status: "OTHER",
      stockNumber: "N24959",
      transmission: "Manual",
      trim: "Base",
      type: "SUV",
      updatedAt: new Date("2023-11-03T01:01:02.943Z"),
      vin: "C29ZDU474DDR70955",
      warrantyExpiresAt: new Date("2022-03-28T09:10:09.889Z"),
      year: 2023,
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
import { dmsCreateDmsVehicle } from "@unified-api/typescript-sdk/funcs/dmsCreateDmsVehicle.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsCreateDmsVehicle(unifiedTo, {
    dmsVehicle: {
      bodyStyle: "Pickup",
      condition: "NEW",
      costAmount: 26498,
      createdAt: new Date("2021-02-03T08:01:58.559Z"),
      currency: "USD",
      description: "2023 Citroën Silverado",
      exteriorColor: "lavender",
      fuelType: "ELECTRIC",
      id: "1553a44f-1f12-47c4-bb07-fb2d039acf68",
      imageUrls: [
        "https://picsum.photos/seed/tOUr5K/1358/1877",
      ],
      interiorColor: "Black",
      internetPriceAmount: 29526,
      isActive: true,
      isCertified: false,
      isInventory: true,
      isPublished: false,
      make: "Citroën",
      metadata: [],
      model: "Silverado",
      modelCode: "PMU8KI",
      msrpAmount: 33100,
      odometer: 1,
      odometerUnit: "MILES",
      options: [
        {
          code: "SXE",
          costAmount: 250,
          description: "Tow package",
          priceAmount: 1400,
          type: "DEALER",
        },
        {
          code: "458",
          costAmount: 700,
          description: "Tow package",
          priceAmount: 600,
          type: "DEALER",
        },
      ],
      priceAmount: 29926,
      receivedAt: new Date("2021-02-03T08:01:58.559Z"),
      status: "OTHER",
      stockNumber: "N24959",
      transmission: "Manual",
      trim: "Base",
      type: "SUV",
      updatedAt: new Date("2023-11-03T01:01:02.943Z"),
      vin: "C29ZDU474DDR70955",
      warrantyExpiresAt: new Date("2022-03-28T09:10:09.889Z"),
      year: 2023,
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsCreateDmsVehicle failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDmsVehicleRequest](../../sdk/models/operations/createdmsvehiclerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsVehicle](../../sdk/models/shared/dmsvehicle.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getDmsVehicle

Retrieves a single DmsVehicle by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDmsVehicle" method="get" path="/dms/{connection_id}/vehicle/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.vehicle.getDmsVehicle({
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
import { dmsGetDmsVehicle } from "@unified-api/typescript-sdk/funcs/dmsGetDmsVehicle.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsGetDmsVehicle(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsGetDmsVehicle failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDmsVehicleRequest](../../sdk/models/operations/getdmsvehiclerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsVehicle](../../sdk/models/shared/dmsvehicle.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listDmsVehicles

Returns a list of DmsVehicles. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listDmsVehicles" method="get" path="/dms/{connection_id}/vehicle" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.vehicle.listDmsVehicles({
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
import { dmsListDmsVehicles } from "@unified-api/typescript-sdk/funcs/dmsListDmsVehicles.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsListDmsVehicles(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsListDmsVehicles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDmsVehiclesRequest](../../sdk/models/operations/listdmsvehiclesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsVehicle[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchDmsVehicle

Updates the DmsVehicle identified by `id`. Provide the unified DmsVehicle fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchDmsVehicle" method="patch" path="/dms/{connection_id}/vehicle/{id}" example="dms_vehicle" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.vehicle.patchDmsVehicle({
    dmsVehicle: {
      bodyStyle: "Pickup",
      condition: "NEW",
      costAmount: 26498,
      createdAt: new Date("2021-02-03T08:01:58.559Z"),
      currency: "USD",
      description: "2023 Citroën Silverado",
      exteriorColor: "lavender",
      fuelType: "ELECTRIC",
      id: "63a2cbde-78f0-46f3-80e2-2e734ab98da5",
      imageUrls: [
        "https://picsum.photos/seed/tOUr5K/1358/1877",
      ],
      interiorColor: "Black",
      internetPriceAmount: 29526,
      isActive: true,
      isCertified: false,
      isInventory: true,
      isPublished: false,
      make: "Citroën",
      metadata: [],
      model: "Silverado",
      modelCode: "PMU8KI",
      msrpAmount: 33100,
      odometer: 1,
      odometerUnit: "MILES",
      options: [
        {
          code: "SXE",
          costAmount: 250,
          description: "Tow package",
          priceAmount: 1400,
          type: "DEALER",
        },
        {
          code: "458",
          costAmount: 700,
          description: "Tow package",
          priceAmount: 600,
          type: "DEALER",
        },
      ],
      priceAmount: 29926,
      receivedAt: new Date("2021-02-03T08:01:58.559Z"),
      status: "OTHER",
      stockNumber: "N24959",
      transmission: "Manual",
      trim: "Base",
      type: "SUV",
      updatedAt: new Date("2023-11-03T01:01:02.954Z"),
      vin: "C29ZDU474DDR70955",
      warrantyExpiresAt: new Date("2022-03-28T09:10:09.889Z"),
      year: 2023,
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
import { dmsPatchDmsVehicle } from "@unified-api/typescript-sdk/funcs/dmsPatchDmsVehicle.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsPatchDmsVehicle(unifiedTo, {
    dmsVehicle: {
      bodyStyle: "Pickup",
      condition: "NEW",
      costAmount: 26498,
      createdAt: new Date("2021-02-03T08:01:58.559Z"),
      currency: "USD",
      description: "2023 Citroën Silverado",
      exteriorColor: "lavender",
      fuelType: "ELECTRIC",
      id: "63a2cbde-78f0-46f3-80e2-2e734ab98da5",
      imageUrls: [
        "https://picsum.photos/seed/tOUr5K/1358/1877",
      ],
      interiorColor: "Black",
      internetPriceAmount: 29526,
      isActive: true,
      isCertified: false,
      isInventory: true,
      isPublished: false,
      make: "Citroën",
      metadata: [],
      model: "Silverado",
      modelCode: "PMU8KI",
      msrpAmount: 33100,
      odometer: 1,
      odometerUnit: "MILES",
      options: [
        {
          code: "SXE",
          costAmount: 250,
          description: "Tow package",
          priceAmount: 1400,
          type: "DEALER",
        },
        {
          code: "458",
          costAmount: 700,
          description: "Tow package",
          priceAmount: 600,
          type: "DEALER",
        },
      ],
      priceAmount: 29926,
      receivedAt: new Date("2021-02-03T08:01:58.559Z"),
      status: "OTHER",
      stockNumber: "N24959",
      transmission: "Manual",
      trim: "Base",
      type: "SUV",
      updatedAt: new Date("2023-11-03T01:01:02.954Z"),
      vin: "C29ZDU474DDR70955",
      warrantyExpiresAt: new Date("2022-03-28T09:10:09.889Z"),
      year: 2023,
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsPatchDmsVehicle failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchDmsVehicleRequest](../../sdk/models/operations/patchdmsvehiclerequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsVehicle](../../sdk/models/shared/dmsvehicle.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateDmsVehicle

Updates the DmsVehicle identified by `id`. Provide the unified DmsVehicle fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDmsVehicle" method="put" path="/dms/{connection_id}/vehicle/{id}" example="dms_vehicle" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.vehicle.updateDmsVehicle({
    dmsVehicle: {
      bodyStyle: "Pickup",
      condition: "NEW",
      costAmount: 26498,
      createdAt: new Date("2021-02-03T08:01:58.559Z"),
      currency: "USD",
      description: "2023 Citroën Silverado",
      exteriorColor: "lavender",
      fuelType: "ELECTRIC",
      id: "63a2cbde-78f0-46f3-80e2-2e734ab98da5",
      imageUrls: [
        "https://picsum.photos/seed/tOUr5K/1358/1877",
      ],
      interiorColor: "Black",
      internetPriceAmount: 29526,
      isActive: true,
      isCertified: false,
      isInventory: true,
      isPublished: false,
      make: "Citroën",
      metadata: [],
      model: "Silverado",
      modelCode: "PMU8KI",
      msrpAmount: 33100,
      odometer: 1,
      odometerUnit: "MILES",
      options: [
        {
          code: "SXE",
          costAmount: 250,
          description: "Tow package",
          priceAmount: 1400,
          type: "DEALER",
        },
        {
          code: "458",
          costAmount: 700,
          description: "Tow package",
          priceAmount: 600,
          type: "DEALER",
        },
      ],
      priceAmount: 29926,
      receivedAt: new Date("2021-02-03T08:01:58.559Z"),
      status: "OTHER",
      stockNumber: "N24959",
      transmission: "Manual",
      trim: "Base",
      type: "SUV",
      updatedAt: new Date("2023-11-03T01:01:02.954Z"),
      vin: "C29ZDU474DDR70955",
      warrantyExpiresAt: new Date("2022-03-28T09:10:09.889Z"),
      year: 2023,
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
import { dmsUpdateDmsVehicle } from "@unified-api/typescript-sdk/funcs/dmsUpdateDmsVehicle.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsUpdateDmsVehicle(unifiedTo, {
    dmsVehicle: {
      bodyStyle: "Pickup",
      condition: "NEW",
      costAmount: 26498,
      createdAt: new Date("2021-02-03T08:01:58.559Z"),
      currency: "USD",
      description: "2023 Citroën Silverado",
      exteriorColor: "lavender",
      fuelType: "ELECTRIC",
      id: "63a2cbde-78f0-46f3-80e2-2e734ab98da5",
      imageUrls: [
        "https://picsum.photos/seed/tOUr5K/1358/1877",
      ],
      interiorColor: "Black",
      internetPriceAmount: 29526,
      isActive: true,
      isCertified: false,
      isInventory: true,
      isPublished: false,
      make: "Citroën",
      metadata: [],
      model: "Silverado",
      modelCode: "PMU8KI",
      msrpAmount: 33100,
      odometer: 1,
      odometerUnit: "MILES",
      options: [
        {
          code: "SXE",
          costAmount: 250,
          description: "Tow package",
          priceAmount: 1400,
          type: "DEALER",
        },
        {
          code: "458",
          costAmount: 700,
          description: "Tow package",
          priceAmount: 600,
          type: "DEALER",
        },
      ],
      priceAmount: 29926,
      receivedAt: new Date("2021-02-03T08:01:58.559Z"),
      status: "OTHER",
      stockNumber: "N24959",
      transmission: "Manual",
      trim: "Base",
      type: "SUV",
      updatedAt: new Date("2023-11-03T01:01:02.954Z"),
      vin: "C29ZDU474DDR70955",
      warrantyExpiresAt: new Date("2022-03-28T09:10:09.889Z"),
      year: 2023,
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsUpdateDmsVehicle failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDmsVehicleRequest](../../sdk/models/operations/updatedmsvehiclerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsVehicle](../../sdk/models/shared/dmsvehicle.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |