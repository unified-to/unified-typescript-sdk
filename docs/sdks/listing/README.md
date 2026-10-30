# Listing

## Overview

### Available Operations

* [createPropertyListing](#createpropertylisting) - Create a listing
* [getPropertyListing](#getpropertylisting) - Retrieve a listing
* [listPropertyListings](#listpropertylistings) - List all listings
* [patchPropertyListing](#patchpropertylisting) - Update a listing
* [removePropertyListing](#removepropertylisting) - Remove a listing
* [updatePropertyListing](#updatepropertylisting) - Update a listing

## createPropertyListing

Creates a PropertyListing. Provide the unified PropertyListing fields in the request body; they are mapped to the provider's API. Returns the created PropertyListing.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPropertyListing" method="post" path="/property/{connection_id}/listing" example="property_listing" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.listing.createPropertyListing({
    propertyListing: {
      address: {
        address1: "9262 Bramley Close",
        city: "New Andrewshire",
        country: "United States",
        countryCode: "US",
        postalCode: "53615-4664",
        region: "Nebraska",
        regionCode: "IL",
      },
      amenities: [
        "Wifi",
        "Kitchen",
        "Free parking",
      ],
      bathrooms: 1,
      bedrooms: 4,
      beds: 8,
      channels: [
        {
          name: "Booking.com",
          webUrl: "https://frightened-hyphenation.net/",
        },
      ],
      checkInEndTime: "22:00",
      checkInStartTime: "15:00",
      checkOutTime: "11:00",
      cleaningFeeAmount: 134,
      createdAt: new Date("2021-01-08T09:27:35.485Z"),
      currency: "USD",
      description: "Cuius deputo cruentus demoror censura caveo sponte statim vespillo cursim. Arbitro barba summopere. Curto vulticulus comparo surgo vociferor carmen deputo defluo.",
      houseRules: "No smoking. No parties or events.",
      id: "d700eabc-20a8-479f-8559-73e55d0225c3",
      imageUrls: [
        "https://loremflickr.com/23/1328?lock=5798241296161663",
        "https://loremflickr.com/12/1312?lock=6354590363728966",
      ],
      latitude: -5.4327,
      longitude: 98.9045,
      maxNights: 15,
      maxOccupancy: 5,
      metadata: [],
      minNights: 1,
      name: "accurate Loft",
      rating: 4.9,
      reviewCount: 343,
      startPriceAmount: 470,
      timezone: "America/Los_Angeles",
      type: "ROOM",
      updatedAt: new Date("2026-09-06T21:05:58.525Z"),
      webUrl: "https://tight-pronoun.info/",
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
import { propertyCreatePropertyListing } from "@unified-api/typescript-sdk/funcs/propertyCreatePropertyListing.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyCreatePropertyListing(unifiedTo, {
    propertyListing: {
      address: {
        address1: "9262 Bramley Close",
        city: "New Andrewshire",
        country: "United States",
        countryCode: "US",
        postalCode: "53615-4664",
        region: "Nebraska",
        regionCode: "IL",
      },
      amenities: [
        "Wifi",
        "Kitchen",
        "Free parking",
      ],
      bathrooms: 1,
      bedrooms: 4,
      beds: 8,
      channels: [
        {
          name: "Booking.com",
          webUrl: "https://frightened-hyphenation.net/",
        },
      ],
      checkInEndTime: "22:00",
      checkInStartTime: "15:00",
      checkOutTime: "11:00",
      cleaningFeeAmount: 134,
      createdAt: new Date("2021-01-08T09:27:35.485Z"),
      currency: "USD",
      description: "Cuius deputo cruentus demoror censura caveo sponte statim vespillo cursim. Arbitro barba summopere. Curto vulticulus comparo surgo vociferor carmen deputo defluo.",
      houseRules: "No smoking. No parties or events.",
      id: "d700eabc-20a8-479f-8559-73e55d0225c3",
      imageUrls: [
        "https://loremflickr.com/23/1328?lock=5798241296161663",
        "https://loremflickr.com/12/1312?lock=6354590363728966",
      ],
      latitude: -5.4327,
      longitude: 98.9045,
      maxNights: 15,
      maxOccupancy: 5,
      metadata: [],
      minNights: 1,
      name: "accurate Loft",
      rating: 4.9,
      reviewCount: 343,
      startPriceAmount: 470,
      timezone: "America/Los_Angeles",
      type: "ROOM",
      updatedAt: new Date("2026-09-06T21:05:58.525Z"),
      webUrl: "https://tight-pronoun.info/",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyCreatePropertyListing failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePropertyListingRequest](../../sdk/models/operations/createpropertylistingrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyListing](../../sdk/models/shared/propertylisting.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPropertyListing

Retrieves a single PropertyListing by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPropertyListing" method="get" path="/property/{connection_id}/listing/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.listing.getPropertyListing({
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
import { propertyGetPropertyListing } from "@unified-api/typescript-sdk/funcs/propertyGetPropertyListing.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyGetPropertyListing(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyGetPropertyListing failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPropertyListingRequest](../../sdk/models/operations/getpropertylistingrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyListing](../../sdk/models/shared/propertylisting.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPropertyListings

Returns a list of PropertyListings. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPropertyListings" method="get" path="/property/{connection_id}/listing" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.listing.listPropertyListings({
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
import { propertyListPropertyListings } from "@unified-api/typescript-sdk/funcs/propertyListPropertyListings.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyListPropertyListings(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyListPropertyListings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPropertyListingsRequest](../../sdk/models/operations/listpropertylistingsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyListing[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchPropertyListing

Updates the PropertyListing identified by `id`. Provide the unified PropertyListing fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchPropertyListing" method="patch" path="/property/{connection_id}/listing/{id}" example="property_listing" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.listing.patchPropertyListing({
    propertyListing: {
      address: {
        address1: "9262 Bramley Close",
        city: "New Andrewshire",
        country: "United States",
        countryCode: "US",
        postalCode: "53615-4664",
        region: "Nebraska",
        regionCode: "IL",
      },
      amenities: [
        "Wifi",
        "Kitchen",
        "Free parking",
      ],
      bathrooms: 1,
      bedrooms: 4,
      beds: 8,
      channels: [
        {
          name: "Booking.com",
          webUrl: "https://frightened-hyphenation.net/",
        },
      ],
      checkInEndTime: "22:00",
      checkInStartTime: "15:00",
      checkOutTime: "11:00",
      cleaningFeeAmount: 134,
      createdAt: new Date("2021-01-08T09:27:35.485Z"),
      currency: "USD",
      description: "Cuius deputo cruentus demoror censura caveo sponte statim vespillo cursim. Arbitro barba summopere. Curto vulticulus comparo surgo vociferor carmen deputo defluo.",
      houseRules: "No smoking. No parties or events.",
      id: "ad355a94-2332-4535-bf67-eb3a0574d4d3",
      imageUrls: [
        "https://loremflickr.com/23/1328?lock=5798241296161663",
        "https://loremflickr.com/12/1312?lock=6354590363728966",
      ],
      latitude: -5.4327,
      longitude: 98.9045,
      maxNights: 15,
      maxOccupancy: 5,
      metadata: [],
      minNights: 1,
      name: "accurate Loft",
      rating: 4.9,
      reviewCount: 343,
      startPriceAmount: 470,
      timezone: "America/Los_Angeles",
      type: "ROOM",
      updatedAt: new Date("2026-09-06T21:05:58.567Z"),
      webUrl: "https://tight-pronoun.info/",
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
import { propertyPatchPropertyListing } from "@unified-api/typescript-sdk/funcs/propertyPatchPropertyListing.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyPatchPropertyListing(unifiedTo, {
    propertyListing: {
      address: {
        address1: "9262 Bramley Close",
        city: "New Andrewshire",
        country: "United States",
        countryCode: "US",
        postalCode: "53615-4664",
        region: "Nebraska",
        regionCode: "IL",
      },
      amenities: [
        "Wifi",
        "Kitchen",
        "Free parking",
      ],
      bathrooms: 1,
      bedrooms: 4,
      beds: 8,
      channels: [
        {
          name: "Booking.com",
          webUrl: "https://frightened-hyphenation.net/",
        },
      ],
      checkInEndTime: "22:00",
      checkInStartTime: "15:00",
      checkOutTime: "11:00",
      cleaningFeeAmount: 134,
      createdAt: new Date("2021-01-08T09:27:35.485Z"),
      currency: "USD",
      description: "Cuius deputo cruentus demoror censura caveo sponte statim vespillo cursim. Arbitro barba summopere. Curto vulticulus comparo surgo vociferor carmen deputo defluo.",
      houseRules: "No smoking. No parties or events.",
      id: "ad355a94-2332-4535-bf67-eb3a0574d4d3",
      imageUrls: [
        "https://loremflickr.com/23/1328?lock=5798241296161663",
        "https://loremflickr.com/12/1312?lock=6354590363728966",
      ],
      latitude: -5.4327,
      longitude: 98.9045,
      maxNights: 15,
      maxOccupancy: 5,
      metadata: [],
      minNights: 1,
      name: "accurate Loft",
      rating: 4.9,
      reviewCount: 343,
      startPriceAmount: 470,
      timezone: "America/Los_Angeles",
      type: "ROOM",
      updatedAt: new Date("2026-09-06T21:05:58.567Z"),
      webUrl: "https://tight-pronoun.info/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyPatchPropertyListing failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchPropertyListingRequest](../../sdk/models/operations/patchpropertylistingrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyListing](../../sdk/models/shared/propertylisting.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removePropertyListing

Deletes the PropertyListing identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removePropertyListing" method="delete" path="/property/{connection_id}/listing/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.listing.removePropertyListing({
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
import { propertyRemovePropertyListing } from "@unified-api/typescript-sdk/funcs/propertyRemovePropertyListing.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyRemovePropertyListing(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyRemovePropertyListing failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemovePropertyListingRequest](../../sdk/models/operations/removepropertylistingrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemovePropertyListingResponse](../../sdk/models/operations/removepropertylistingresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updatePropertyListing

Updates the PropertyListing identified by `id`. Provide the unified PropertyListing fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updatePropertyListing" method="put" path="/property/{connection_id}/listing/{id}" example="property_listing" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.listing.updatePropertyListing({
    propertyListing: {
      address: {
        address1: "9262 Bramley Close",
        city: "New Andrewshire",
        country: "United States",
        countryCode: "US",
        postalCode: "53615-4664",
        region: "Nebraska",
        regionCode: "IL",
      },
      amenities: [
        "Wifi",
        "Kitchen",
        "Free parking",
      ],
      bathrooms: 1,
      bedrooms: 4,
      beds: 8,
      channels: [
        {
          name: "Booking.com",
          webUrl: "https://frightened-hyphenation.net/",
        },
      ],
      checkInEndTime: "22:00",
      checkInStartTime: "15:00",
      checkOutTime: "11:00",
      cleaningFeeAmount: 134,
      createdAt: new Date("2021-01-08T09:27:35.485Z"),
      currency: "USD",
      description: "Cuius deputo cruentus demoror censura caveo sponte statim vespillo cursim. Arbitro barba summopere. Curto vulticulus comparo surgo vociferor carmen deputo defluo.",
      houseRules: "No smoking. No parties or events.",
      id: "ad355a94-2332-4535-bf67-eb3a0574d4d3",
      imageUrls: [
        "https://loremflickr.com/23/1328?lock=5798241296161663",
        "https://loremflickr.com/12/1312?lock=6354590363728966",
      ],
      latitude: -5.4327,
      longitude: 98.9045,
      maxNights: 15,
      maxOccupancy: 5,
      metadata: [],
      minNights: 1,
      name: "accurate Loft",
      rating: 4.9,
      reviewCount: 343,
      startPriceAmount: 470,
      timezone: "America/Los_Angeles",
      type: "ROOM",
      updatedAt: new Date("2026-09-06T21:05:58.567Z"),
      webUrl: "https://tight-pronoun.info/",
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
import { propertyUpdatePropertyListing } from "@unified-api/typescript-sdk/funcs/propertyUpdatePropertyListing.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyUpdatePropertyListing(unifiedTo, {
    propertyListing: {
      address: {
        address1: "9262 Bramley Close",
        city: "New Andrewshire",
        country: "United States",
        countryCode: "US",
        postalCode: "53615-4664",
        region: "Nebraska",
        regionCode: "IL",
      },
      amenities: [
        "Wifi",
        "Kitchen",
        "Free parking",
      ],
      bathrooms: 1,
      bedrooms: 4,
      beds: 8,
      channels: [
        {
          name: "Booking.com",
          webUrl: "https://frightened-hyphenation.net/",
        },
      ],
      checkInEndTime: "22:00",
      checkInStartTime: "15:00",
      checkOutTime: "11:00",
      cleaningFeeAmount: 134,
      createdAt: new Date("2021-01-08T09:27:35.485Z"),
      currency: "USD",
      description: "Cuius deputo cruentus demoror censura caveo sponte statim vespillo cursim. Arbitro barba summopere. Curto vulticulus comparo surgo vociferor carmen deputo defluo.",
      houseRules: "No smoking. No parties or events.",
      id: "ad355a94-2332-4535-bf67-eb3a0574d4d3",
      imageUrls: [
        "https://loremflickr.com/23/1328?lock=5798241296161663",
        "https://loremflickr.com/12/1312?lock=6354590363728966",
      ],
      latitude: -5.4327,
      longitude: 98.9045,
      maxNights: 15,
      maxOccupancy: 5,
      metadata: [],
      minNights: 1,
      name: "accurate Loft",
      rating: 4.9,
      reviewCount: 343,
      startPriceAmount: 470,
      timezone: "America/Los_Angeles",
      type: "ROOM",
      updatedAt: new Date("2026-09-06T21:05:58.567Z"),
      webUrl: "https://tight-pronoun.info/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyUpdatePropertyListing failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePropertyListingRequest](../../sdk/models/operations/updatepropertylistingrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyListing](../../sdk/models/shared/propertylisting.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |