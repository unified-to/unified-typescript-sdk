# Property

## Overview

### Available Operations

* [createAnalyticsProperty](#createanalyticsproperty) - Create a property
* [createPropertyConversation](#createpropertyconversation) - Create a conversation
* [createPropertyGuest](#createpropertyguest) - Create a guest
* [createPropertyListing](#createpropertylisting) - Create a listing
* [createPropertyQuote](#createpropertyquote) - Create a quote
* [createPropertyReservation](#createpropertyreservation) - Create a reservation
* [getAnalyticsProperty](#getanalyticsproperty) - Retrieve a property
* [getPropertyConversation](#getpropertyconversation) - Retrieve a conversation
* [getPropertyGuest](#getpropertyguest) - Retrieve a guest
* [getPropertyListing](#getpropertylisting) - Retrieve a listing
* [getPropertyReservation](#getpropertyreservation) - Retrieve a reservation
* [getPropertyReview](#getpropertyreview) - Retrieve a review
* [getPropertyUnittype](#getpropertyunittype) - Retrieve an unittype
* [listAnalyticsProperties](#listanalyticsproperties) - List all properties
* [listPropertyAvailabilities](#listpropertyavailabilities) - List all availabilities
* [listPropertyConversations](#listpropertyconversations) - List all conversations
* [listPropertyGuests](#listpropertyguests) - List all guests
* [listPropertyListings](#listpropertylistings) - List all listings
* [listPropertyReservations](#listpropertyreservations) - List all reservations
* [listPropertyReviews](#listpropertyreviews) - List all reviews
* [listPropertyUnittypes](#listpropertyunittypes) - List all unittypes
* [patchAnalyticsProperty](#patchanalyticsproperty) - Update a property
* [patchPropertyGuest](#patchpropertyguest) - Update a guest
* [patchPropertyListing](#patchpropertylisting) - Update a listing
* [patchPropertyReservation](#patchpropertyreservation) - Update a reservation
* [patchPropertyReview](#patchpropertyreview) - Update a review
* [removeAnalyticsProperty](#removeanalyticsproperty) - Remove a property
* [removePropertyListing](#removepropertylisting) - Remove a listing
* [updateAnalyticsProperty](#updateanalyticsproperty) - Update a property
* [updatePropertyGuest](#updatepropertyguest) - Update a guest
* [updatePropertyListing](#updatepropertylisting) - Update a listing
* [updatePropertyReservation](#updatepropertyreservation) - Update a reservation
* [updatePropertyReview](#updatepropertyreview) - Update a review

## createAnalyticsProperty

Creates a AnalyticsProperty. Provide the unified AnalyticsProperty fields in the request body; they are mapped to the provider's API. Returns the created AnalyticsProperty.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAnalyticsProperty" method="post" path="/analytics/{connection_id}/property" example="analytics_property" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.createAnalyticsProperty({
    analyticsProperty: {
      createdAt: new Date("2021-09-05T19:04:58.430Z"),
      currency: "USD",
      id: "0a0a3442-35cd-4d9e-93b3-b976ce7d72a6",
      name: "Daniel, Goldner and Dickinson",
      timezone: "UTC",
      updatedAt: new Date("2021-09-14T21:29:08.024Z"),
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
import { analyticsCreateAnalyticsProperty } from "@unified-api/typescript-sdk/funcs/analyticsCreateAnalyticsProperty.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await analyticsCreateAnalyticsProperty(unifiedTo, {
    analyticsProperty: {
      createdAt: new Date("2021-09-05T19:04:58.430Z"),
      currency: "USD",
      id: "0a0a3442-35cd-4d9e-93b3-b976ce7d72a6",
      name: "Daniel, Goldner and Dickinson",
      timezone: "UTC",
      updatedAt: new Date("2021-09-14T21:29:08.024Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsCreateAnalyticsProperty failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAnalyticsPropertyRequest](../../sdk/models/operations/createanalyticspropertyrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AnalyticsProperty](../../sdk/models/shared/analyticsproperty.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createPropertyConversation

Creates a PropertyConversation. Provide the unified PropertyConversation fields in the request body; they are mapped to the provider's API. Returns the created PropertyConversation.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPropertyConversation" method="post" path="/property/{connection_id}/conversation" example="property_conversation" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.createPropertyConversation({
    propertyConversation: {
      createdAt: new Date("2022-06-20T00:02:46.530Z"),
      guestName: "Evie Okuneva",
      id: "f837f86d-6200-4b56-8ae4-54223e915204",
      isUnread: false,
      messages: [
        {
          attachments: [],
          createdAt: new Date("2025-04-22T09:42:07.332Z"),
          id: "ef813cbd-76bd-431f-bb79-a6238f3d0e47",
          isAutomatic: false,
          message: "Vinitor caterva amor sophismata admitto colo tempore aufero torrens.",
          senderName: "Evie Okuneva",
          senderType: "GUEST",
        },
        {
          attachments: [],
          createdAt: new Date("2026-05-05T16:07:01.767Z"),
          id: "d9f239c7-70fb-44a3-909d-f76a9146eb56",
          message: "Aequitas torqueo curiositas cimentarius repellendus auditor degero ademptio adnuo.",
          senderName: "Ms. Patti Lynch",
          senderType: "HOST",
        },
      ],
      metadata: [],
      source: "Airbnb",
      updatedAt: new Date("2026-05-05T16:07:01.767Z"),
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
import { propertyCreatePropertyConversation } from "@unified-api/typescript-sdk/funcs/propertyCreatePropertyConversation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyCreatePropertyConversation(unifiedTo, {
    propertyConversation: {
      createdAt: new Date("2022-06-20T00:02:46.530Z"),
      guestName: "Evie Okuneva",
      id: "f837f86d-6200-4b56-8ae4-54223e915204",
      isUnread: false,
      messages: [
        {
          attachments: [],
          createdAt: new Date("2025-04-22T09:42:07.332Z"),
          id: "ef813cbd-76bd-431f-bb79-a6238f3d0e47",
          isAutomatic: false,
          message: "Vinitor caterva amor sophismata admitto colo tempore aufero torrens.",
          senderName: "Evie Okuneva",
          senderType: "GUEST",
        },
        {
          attachments: [],
          createdAt: new Date("2026-05-05T16:07:01.767Z"),
          id: "d9f239c7-70fb-44a3-909d-f76a9146eb56",
          message: "Aequitas torqueo curiositas cimentarius repellendus auditor degero ademptio adnuo.",
          senderName: "Ms. Patti Lynch",
          senderType: "HOST",
        },
      ],
      metadata: [],
      source: "Airbnb",
      updatedAt: new Date("2026-05-05T16:07:01.767Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyCreatePropertyConversation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePropertyConversationRequest](../../sdk/models/operations/createpropertyconversationrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyConversation](../../sdk/models/shared/propertyconversation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

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
  const result = await unifiedTo.property.createPropertyGuest({
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
  const result = await unifiedTo.property.createPropertyListing({
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

## createPropertyQuote

Creates a PropertyQuote. Provide the unified PropertyQuote fields in the request body; they are mapped to the provider's API. Returns the created PropertyQuote.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPropertyQuote" method="post" path="/property/{connection_id}/quote" example="property_quote" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.createPropertyQuote({
    propertyQuote: {
      adults: 1,
      children: 1,
      createdAt: new Date("2020-12-18T19:14:11.415Z"),
      currency: "USD",
      depositAmount: 594.54,
      endAt: new Date("2026-11-13"),
      guests: 2,
      id: "a346331f-845a-4e3e-b6da-f8c2bbd98d09",
      lineItems: [
        {
          amount: 1665,
          description: "9 nights",
          isMandatory: true,
          name: "Accommodation",
          type: "BASE",
        },
        {
          amount: 117,
          isMandatory: true,
          name: "Cleaning fee",
          type: "FEE",
        },
        {
          amount: 199.8,
          isMandatory: true,
          name: "Lodging tax",
          type: "TAX",
        },
      ],
      startAt: new Date("2026-11-04"),
      totalAmount: 1981.8,
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
import { quoteCreatePropertyQuote } from "@unified-api/typescript-sdk/funcs/quoteCreatePropertyQuote.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await quoteCreatePropertyQuote(unifiedTo, {
    propertyQuote: {
      adults: 1,
      children: 1,
      createdAt: new Date("2020-12-18T19:14:11.415Z"),
      currency: "USD",
      depositAmount: 594.54,
      endAt: new Date("2026-11-13"),
      guests: 2,
      id: "a346331f-845a-4e3e-b6da-f8c2bbd98d09",
      lineItems: [
        {
          amount: 1665,
          description: "9 nights",
          isMandatory: true,
          name: "Accommodation",
          type: "BASE",
        },
        {
          amount: 117,
          isMandatory: true,
          name: "Cleaning fee",
          type: "FEE",
        },
        {
          amount: 199.8,
          isMandatory: true,
          name: "Lodging tax",
          type: "TAX",
        },
      ],
      startAt: new Date("2026-11-04"),
      totalAmount: 1981.8,
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("quoteCreatePropertyQuote failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePropertyQuoteRequest](../../sdk/models/operations/createpropertyquoterequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyQuote](../../sdk/models/shared/propertyquote.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createPropertyReservation

Creates a PropertyReservation. Provide the unified PropertyReservation fields in the request body; they are mapped to the provider's API. Returns the created PropertyReservation.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPropertyReservation" method="post" path="/property/{connection_id}/reservation" example="property_reservation" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.createPropertyReservation({
    propertyReservation: {
      adults: 4,
      balanceAmount: 2181.6,
      children: 2,
      confirmationCode: "GNLTDDQ88Z",
      createdAt: new Date("2022-06-03T01:40:03.655Z"),
      currency: "USD",
      endAt: new Date("2022-10-06T17:17:08.838Z"),
      estimatedDepartureTime: "10:00",
      guestEmail: "anya.parisian@hotmail.com",
      guestName: "Anya Parisian",
      guests: 6,
      id: "8cb0e0a8-176b-47ac-aaf5-ef3f5e9b475b",
      lineItems: [
        {
          amount: 1980,
          description: "11 nights",
          isMandatory: true,
          name: "Accommodation",
          type: "BASE",
        },
        {
          amount: 162,
          isMandatory: true,
          name: "Cleaning fee",
          type: "FEE",
        },
        {
          amount: 237.6,
          isMandatory: true,
          name: "Lodging tax",
          type: "TAX",
        },
        {
          amount: -198,
          isMandatory: false,
          name: "Weekly discount",
          type: "DISCOUNT",
        },
      ],
      metadata: [],
      nights: 11,
      notes: "Conculco volaticus vis volva quas trepide vae earum temptatio tertius.",
      paidAmount: 0,
      pets: 1,
      source: "Vrbo",
      startAt: new Date("2022-09-25T17:17:08.838Z"),
      status: "PENDING",
      totalAmount: 2181.6,
      updatedAt: new Date("2022-11-16T10:45:54.735Z"),
      webUrl: "https://antique-tennis.biz/",
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
import { propertyCreatePropertyReservation } from "@unified-api/typescript-sdk/funcs/propertyCreatePropertyReservation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyCreatePropertyReservation(unifiedTo, {
    propertyReservation: {
      adults: 4,
      balanceAmount: 2181.6,
      children: 2,
      confirmationCode: "GNLTDDQ88Z",
      createdAt: new Date("2022-06-03T01:40:03.655Z"),
      currency: "USD",
      endAt: new Date("2022-10-06T17:17:08.838Z"),
      estimatedDepartureTime: "10:00",
      guestEmail: "anya.parisian@hotmail.com",
      guestName: "Anya Parisian",
      guests: 6,
      id: "8cb0e0a8-176b-47ac-aaf5-ef3f5e9b475b",
      lineItems: [
        {
          amount: 1980,
          description: "11 nights",
          isMandatory: true,
          name: "Accommodation",
          type: "BASE",
        },
        {
          amount: 162,
          isMandatory: true,
          name: "Cleaning fee",
          type: "FEE",
        },
        {
          amount: 237.6,
          isMandatory: true,
          name: "Lodging tax",
          type: "TAX",
        },
        {
          amount: -198,
          isMandatory: false,
          name: "Weekly discount",
          type: "DISCOUNT",
        },
      ],
      metadata: [],
      nights: 11,
      notes: "Conculco volaticus vis volva quas trepide vae earum temptatio tertius.",
      paidAmount: 0,
      pets: 1,
      source: "Vrbo",
      startAt: new Date("2022-09-25T17:17:08.838Z"),
      status: "PENDING",
      totalAmount: 2181.6,
      updatedAt: new Date("2022-11-16T10:45:54.735Z"),
      webUrl: "https://antique-tennis.biz/",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyCreatePropertyReservation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePropertyReservationRequest](../../sdk/models/operations/createpropertyreservationrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyReservation](../../sdk/models/shared/propertyreservation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAnalyticsProperty

Retrieves a single AnalyticsProperty by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAnalyticsProperty" method="get" path="/analytics/{connection_id}/property/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.getAnalyticsProperty({
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
import { analyticsGetAnalyticsProperty } from "@unified-api/typescript-sdk/funcs/analyticsGetAnalyticsProperty.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await analyticsGetAnalyticsProperty(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsGetAnalyticsProperty failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsPropertyRequest](../../sdk/models/operations/getanalyticspropertyrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AnalyticsProperty](../../sdk/models/shared/analyticsproperty.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPropertyConversation

Retrieves a single PropertyConversation by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPropertyConversation" method="get" path="/property/{connection_id}/conversation/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.getPropertyConversation({
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
import { propertyGetPropertyConversation } from "@unified-api/typescript-sdk/funcs/propertyGetPropertyConversation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyGetPropertyConversation(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyGetPropertyConversation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPropertyConversationRequest](../../sdk/models/operations/getpropertyconversationrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyConversation](../../sdk/models/shared/propertyconversation.md)\>**

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
  const result = await unifiedTo.property.getPropertyGuest({
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
  const result = await unifiedTo.property.getPropertyListing({
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

## getPropertyReservation

Retrieves a single PropertyReservation by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPropertyReservation" method="get" path="/property/{connection_id}/reservation/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.getPropertyReservation({
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
import { propertyGetPropertyReservation } from "@unified-api/typescript-sdk/funcs/propertyGetPropertyReservation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyGetPropertyReservation(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyGetPropertyReservation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPropertyReservationRequest](../../sdk/models/operations/getpropertyreservationrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyReservation](../../sdk/models/shared/propertyreservation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPropertyReview

Retrieves a single PropertyReview by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPropertyReview" method="get" path="/property/{connection_id}/review/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.getPropertyReview({
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
import { propertyGetPropertyReview } from "@unified-api/typescript-sdk/funcs/propertyGetPropertyReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyGetPropertyReview(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyGetPropertyReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPropertyReviewRequest](../../sdk/models/operations/getpropertyreviewrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyReview](../../sdk/models/shared/propertyreview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPropertyUnittype

Retrieves a single PropertyUnittype by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPropertyUnittype" method="get" path="/property/{connection_id}/unittype/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.getPropertyUnittype({
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
import { propertyGetPropertyUnittype } from "@unified-api/typescript-sdk/funcs/propertyGetPropertyUnittype.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyGetPropertyUnittype(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyGetPropertyUnittype failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPropertyUnittypeRequest](../../sdk/models/operations/getpropertyunittyperequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyUnittype](../../sdk/models/shared/propertyunittype.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAnalyticsProperties

Returns a list of AnalyticsProperties. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAnalyticsProperties" method="get" path="/analytics/{connection_id}/property" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.listAnalyticsProperties({
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
import { analyticsListAnalyticsProperties } from "@unified-api/typescript-sdk/funcs/analyticsListAnalyticsProperties.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await analyticsListAnalyticsProperties(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsListAnalyticsProperties failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAnalyticsPropertiesRequest](../../sdk/models/operations/listanalyticspropertiesrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AnalyticsProperty[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPropertyAvailabilities

Returns a list of PropertyAvailabilities. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPropertyAvailabilities" method="get" path="/property/{connection_id}/availability" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.listPropertyAvailabilities({
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
import { propertyListPropertyAvailabilities } from "@unified-api/typescript-sdk/funcs/propertyListPropertyAvailabilities.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyListPropertyAvailabilities(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyListPropertyAvailabilities failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPropertyAvailabilitiesRequest](../../sdk/models/operations/listpropertyavailabilitiesrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyAvailability[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPropertyConversations

Returns a list of PropertyConversations. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPropertyConversations" method="get" path="/property/{connection_id}/conversation" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.listPropertyConversations({
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
import { propertyListPropertyConversations } from "@unified-api/typescript-sdk/funcs/propertyListPropertyConversations.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyListPropertyConversations(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyListPropertyConversations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPropertyConversationsRequest](../../sdk/models/operations/listpropertyconversationsrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyConversation[]](../../models/.md)\>**

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
  const result = await unifiedTo.property.listPropertyGuests({
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
  const result = await unifiedTo.property.listPropertyListings({
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

## listPropertyReservations

Returns a list of PropertyReservations. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPropertyReservations" method="get" path="/property/{connection_id}/reservation" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.listPropertyReservations({
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
import { propertyListPropertyReservations } from "@unified-api/typescript-sdk/funcs/propertyListPropertyReservations.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyListPropertyReservations(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyListPropertyReservations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPropertyReservationsRequest](../../sdk/models/operations/listpropertyreservationsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyReservation[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPropertyReviews

Returns a list of PropertyReviews. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPropertyReviews" method="get" path="/property/{connection_id}/review" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.listPropertyReviews({
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
import { propertyListPropertyReviews } from "@unified-api/typescript-sdk/funcs/propertyListPropertyReviews.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyListPropertyReviews(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyListPropertyReviews failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPropertyReviewsRequest](../../sdk/models/operations/listpropertyreviewsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyReview[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPropertyUnittypes

Returns a list of PropertyUnittypes. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPropertyUnittypes" method="get" path="/property/{connection_id}/unittype" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.listPropertyUnittypes({
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
import { propertyListPropertyUnittypes } from "@unified-api/typescript-sdk/funcs/propertyListPropertyUnittypes.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyListPropertyUnittypes(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyListPropertyUnittypes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPropertyUnittypesRequest](../../sdk/models/operations/listpropertyunittypesrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyUnittype[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAnalyticsProperty

Updates the AnalyticsProperty identified by `id`. Provide the unified AnalyticsProperty fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAnalyticsProperty" method="patch" path="/analytics/{connection_id}/property/{id}" example="analytics_property" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.patchAnalyticsProperty({
    analyticsProperty: {
      createdAt: new Date("2021-09-05T19:04:58.430Z"),
      currency: "USD",
      id: "a20a522c-a627-49e6-890c-d2618b0e66f6",
      name: "Daniel, Goldner and Dickinson",
      timezone: "UTC",
      updatedAt: new Date("2021-09-14T21:29:08.024Z"),
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
import { analyticsPatchAnalyticsProperty } from "@unified-api/typescript-sdk/funcs/analyticsPatchAnalyticsProperty.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await analyticsPatchAnalyticsProperty(unifiedTo, {
    analyticsProperty: {
      createdAt: new Date("2021-09-05T19:04:58.430Z"),
      currency: "USD",
      id: "a20a522c-a627-49e6-890c-d2618b0e66f6",
      name: "Daniel, Goldner and Dickinson",
      timezone: "UTC",
      updatedAt: new Date("2021-09-14T21:29:08.024Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsPatchAnalyticsProperty failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAnalyticsPropertyRequest](../../sdk/models/operations/patchanalyticspropertyrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AnalyticsProperty](../../sdk/models/shared/analyticsproperty.md)\>**

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
  const result = await unifiedTo.property.patchPropertyGuest({
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
  const result = await unifiedTo.property.patchPropertyListing({
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

## patchPropertyReservation

Updates the PropertyReservation identified by `id`. Provide the unified PropertyReservation fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchPropertyReservation" method="patch" path="/property/{connection_id}/reservation/{id}" example="property_reservation" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.patchPropertyReservation({
    propertyReservation: {
      adults: 4,
      balanceAmount: 2181.6,
      children: 2,
      confirmationCode: "GNLTDDQ88Z",
      createdAt: new Date("2022-06-03T01:40:03.655Z"),
      currency: "USD",
      endAt: new Date("2022-10-06T17:17:08.838Z"),
      estimatedDepartureTime: "10:00",
      guestEmail: "anya.parisian@hotmail.com",
      guestName: "Anya Parisian",
      guests: 6,
      id: "52660b13-8460-4431-93d4-dba4152c7764",
      lineItems: [
        {
          amount: 1980,
          description: "11 nights",
          isMandatory: true,
          name: "Accommodation",
          type: "BASE",
        },
        {
          amount: 162,
          isMandatory: true,
          name: "Cleaning fee",
          type: "FEE",
        },
        {
          amount: 237.6,
          isMandatory: true,
          name: "Lodging tax",
          type: "TAX",
        },
        {
          amount: -198,
          isMandatory: false,
          name: "Weekly discount",
          type: "DISCOUNT",
        },
      ],
      metadata: [],
      nights: 11,
      notes: "Conculco volaticus vis volva quas trepide vae earum temptatio tertius.",
      paidAmount: 0,
      pets: 1,
      source: "Vrbo",
      startAt: new Date("2022-09-25T17:17:08.838Z"),
      status: "PENDING",
      totalAmount: 2181.6,
      updatedAt: new Date("2022-11-16T10:45:54.738Z"),
      webUrl: "https://antique-tennis.biz/",
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
import { propertyPatchPropertyReservation } from "@unified-api/typescript-sdk/funcs/propertyPatchPropertyReservation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyPatchPropertyReservation(unifiedTo, {
    propertyReservation: {
      adults: 4,
      balanceAmount: 2181.6,
      children: 2,
      confirmationCode: "GNLTDDQ88Z",
      createdAt: new Date("2022-06-03T01:40:03.655Z"),
      currency: "USD",
      endAt: new Date("2022-10-06T17:17:08.838Z"),
      estimatedDepartureTime: "10:00",
      guestEmail: "anya.parisian@hotmail.com",
      guestName: "Anya Parisian",
      guests: 6,
      id: "52660b13-8460-4431-93d4-dba4152c7764",
      lineItems: [
        {
          amount: 1980,
          description: "11 nights",
          isMandatory: true,
          name: "Accommodation",
          type: "BASE",
        },
        {
          amount: 162,
          isMandatory: true,
          name: "Cleaning fee",
          type: "FEE",
        },
        {
          amount: 237.6,
          isMandatory: true,
          name: "Lodging tax",
          type: "TAX",
        },
        {
          amount: -198,
          isMandatory: false,
          name: "Weekly discount",
          type: "DISCOUNT",
        },
      ],
      metadata: [],
      nights: 11,
      notes: "Conculco volaticus vis volva quas trepide vae earum temptatio tertius.",
      paidAmount: 0,
      pets: 1,
      source: "Vrbo",
      startAt: new Date("2022-09-25T17:17:08.838Z"),
      status: "PENDING",
      totalAmount: 2181.6,
      updatedAt: new Date("2022-11-16T10:45:54.738Z"),
      webUrl: "https://antique-tennis.biz/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyPatchPropertyReservation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchPropertyReservationRequest](../../sdk/models/operations/patchpropertyreservationrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyReservation](../../sdk/models/shared/propertyreservation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchPropertyReview

Updates the PropertyReview identified by `id`. Provide the unified PropertyReview fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchPropertyReview" method="patch" path="/property/{connection_id}/review/{id}" example="property_review" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.patchPropertyReview({
    propertyReview: {
      authorName: "Benton Jast",
      categoryRatings: [
        {
          category: "CLEANLINESS",
          comment: "Umquam perferendis amitto voluptas sum blanditiis terreo.",
          rating: 5,
        },
        {
          category: "ACCURACY",
          comment: "Capitulus dolorem verus.",
          rating: 4,
        },
        {
          category: "COMMUNICATION",
          rating: 1,
        },
        {
          category: "CHECKIN",
          rating: 1,
        },
        {
          category: "LOCATION",
          rating: 2,
        },
        {
          category: "VALUE",
          comment: "Quos constans aperte tero sollers.",
          rating: 5,
        },
      ],
      content: "Delectus conscendo communis custodia statim. Tutis adsuesco attonbitus comitatus auditor ea tergo nostrum deleo. Comprehendo tertius summopere vaco apparatus incidunt tabula pauci confido colo.",
      createdAt: new Date("2022-10-17T11:17:07.682Z"),
      id: "a7750698-a3b6-46a8-ae8f-5b7c955134b2",
      isPublic: true,
      metadata: [],
      privateFeedback: "Tripudio neque communis.",
      rating: 3,
      source: "Airbnb",
      updatedAt: new Date("2026-02-18T09:21:42.301Z"),
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
import { propertyPatchPropertyReview } from "@unified-api/typescript-sdk/funcs/propertyPatchPropertyReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyPatchPropertyReview(unifiedTo, {
    propertyReview: {
      authorName: "Benton Jast",
      categoryRatings: [
        {
          category: "CLEANLINESS",
          comment: "Umquam perferendis amitto voluptas sum blanditiis terreo.",
          rating: 5,
        },
        {
          category: "ACCURACY",
          comment: "Capitulus dolorem verus.",
          rating: 4,
        },
        {
          category: "COMMUNICATION",
          rating: 1,
        },
        {
          category: "CHECKIN",
          rating: 1,
        },
        {
          category: "LOCATION",
          rating: 2,
        },
        {
          category: "VALUE",
          comment: "Quos constans aperte tero sollers.",
          rating: 5,
        },
      ],
      content: "Delectus conscendo communis custodia statim. Tutis adsuesco attonbitus comitatus auditor ea tergo nostrum deleo. Comprehendo tertius summopere vaco apparatus incidunt tabula pauci confido colo.",
      createdAt: new Date("2022-10-17T11:17:07.682Z"),
      id: "a7750698-a3b6-46a8-ae8f-5b7c955134b2",
      isPublic: true,
      metadata: [],
      privateFeedback: "Tripudio neque communis.",
      rating: 3,
      source: "Airbnb",
      updatedAt: new Date("2026-02-18T09:21:42.301Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyPatchPropertyReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchPropertyReviewRequest](../../sdk/models/operations/patchpropertyreviewrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyReview](../../sdk/models/shared/propertyreview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAnalyticsProperty

Deletes the AnalyticsProperty identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAnalyticsProperty" method="delete" path="/analytics/{connection_id}/property/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.removeAnalyticsProperty({
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
import { analyticsRemoveAnalyticsProperty } from "@unified-api/typescript-sdk/funcs/analyticsRemoveAnalyticsProperty.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await analyticsRemoveAnalyticsProperty(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsRemoveAnalyticsProperty failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAnalyticsPropertyRequest](../../sdk/models/operations/removeanalyticspropertyrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAnalyticsPropertyResponse](../../sdk/models/operations/removeanalyticspropertyresponse.md)\>**

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
  const result = await unifiedTo.property.removePropertyListing({
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

## updateAnalyticsProperty

Updates the AnalyticsProperty identified by `id`. Provide the unified AnalyticsProperty fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAnalyticsProperty" method="put" path="/analytics/{connection_id}/property/{id}" example="analytics_property" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.updateAnalyticsProperty({
    analyticsProperty: {
      createdAt: new Date("2021-09-05T19:04:58.430Z"),
      currency: "USD",
      id: "a20a522c-a627-49e6-890c-d2618b0e66f6",
      name: "Daniel, Goldner and Dickinson",
      timezone: "UTC",
      updatedAt: new Date("2021-09-14T21:29:08.024Z"),
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
import { analyticsUpdateAnalyticsProperty } from "@unified-api/typescript-sdk/funcs/analyticsUpdateAnalyticsProperty.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await analyticsUpdateAnalyticsProperty(unifiedTo, {
    analyticsProperty: {
      createdAt: new Date("2021-09-05T19:04:58.430Z"),
      currency: "USD",
      id: "a20a522c-a627-49e6-890c-d2618b0e66f6",
      name: "Daniel, Goldner and Dickinson",
      timezone: "UTC",
      updatedAt: new Date("2021-09-14T21:29:08.024Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsUpdateAnalyticsProperty failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAnalyticsPropertyRequest](../../sdk/models/operations/updateanalyticspropertyrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AnalyticsProperty](../../sdk/models/shared/analyticsproperty.md)\>**

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
  const result = await unifiedTo.property.updatePropertyGuest({
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
  const result = await unifiedTo.property.updatePropertyListing({
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

## updatePropertyReservation

Updates the PropertyReservation identified by `id`. Provide the unified PropertyReservation fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updatePropertyReservation" method="put" path="/property/{connection_id}/reservation/{id}" example="property_reservation" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.updatePropertyReservation({
    propertyReservation: {
      adults: 4,
      balanceAmount: 2181.6,
      children: 2,
      confirmationCode: "GNLTDDQ88Z",
      createdAt: new Date("2022-06-03T01:40:03.655Z"),
      currency: "USD",
      endAt: new Date("2022-10-06T17:17:08.838Z"),
      estimatedDepartureTime: "10:00",
      guestEmail: "anya.parisian@hotmail.com",
      guestName: "Anya Parisian",
      guests: 6,
      id: "52660b13-8460-4431-93d4-dba4152c7764",
      lineItems: [
        {
          amount: 1980,
          description: "11 nights",
          isMandatory: true,
          name: "Accommodation",
          type: "BASE",
        },
        {
          amount: 162,
          isMandatory: true,
          name: "Cleaning fee",
          type: "FEE",
        },
        {
          amount: 237.6,
          isMandatory: true,
          name: "Lodging tax",
          type: "TAX",
        },
        {
          amount: -198,
          isMandatory: false,
          name: "Weekly discount",
          type: "DISCOUNT",
        },
      ],
      metadata: [],
      nights: 11,
      notes: "Conculco volaticus vis volva quas trepide vae earum temptatio tertius.",
      paidAmount: 0,
      pets: 1,
      source: "Vrbo",
      startAt: new Date("2022-09-25T17:17:08.838Z"),
      status: "PENDING",
      totalAmount: 2181.6,
      updatedAt: new Date("2022-11-16T10:45:54.738Z"),
      webUrl: "https://antique-tennis.biz/",
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
import { propertyUpdatePropertyReservation } from "@unified-api/typescript-sdk/funcs/propertyUpdatePropertyReservation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyUpdatePropertyReservation(unifiedTo, {
    propertyReservation: {
      adults: 4,
      balanceAmount: 2181.6,
      children: 2,
      confirmationCode: "GNLTDDQ88Z",
      createdAt: new Date("2022-06-03T01:40:03.655Z"),
      currency: "USD",
      endAt: new Date("2022-10-06T17:17:08.838Z"),
      estimatedDepartureTime: "10:00",
      guestEmail: "anya.parisian@hotmail.com",
      guestName: "Anya Parisian",
      guests: 6,
      id: "52660b13-8460-4431-93d4-dba4152c7764",
      lineItems: [
        {
          amount: 1980,
          description: "11 nights",
          isMandatory: true,
          name: "Accommodation",
          type: "BASE",
        },
        {
          amount: 162,
          isMandatory: true,
          name: "Cleaning fee",
          type: "FEE",
        },
        {
          amount: 237.6,
          isMandatory: true,
          name: "Lodging tax",
          type: "TAX",
        },
        {
          amount: -198,
          isMandatory: false,
          name: "Weekly discount",
          type: "DISCOUNT",
        },
      ],
      metadata: [],
      nights: 11,
      notes: "Conculco volaticus vis volva quas trepide vae earum temptatio tertius.",
      paidAmount: 0,
      pets: 1,
      source: "Vrbo",
      startAt: new Date("2022-09-25T17:17:08.838Z"),
      status: "PENDING",
      totalAmount: 2181.6,
      updatedAt: new Date("2022-11-16T10:45:54.738Z"),
      webUrl: "https://antique-tennis.biz/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyUpdatePropertyReservation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePropertyReservationRequest](../../sdk/models/operations/updatepropertyreservationrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyReservation](../../sdk/models/shared/propertyreservation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updatePropertyReview

Updates the PropertyReview identified by `id`. Provide the unified PropertyReview fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updatePropertyReview" method="put" path="/property/{connection_id}/review/{id}" example="property_review" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.property.updatePropertyReview({
    propertyReview: {
      authorName: "Benton Jast",
      categoryRatings: [
        {
          category: "CLEANLINESS",
          comment: "Umquam perferendis amitto voluptas sum blanditiis terreo.",
          rating: 5,
        },
        {
          category: "ACCURACY",
          comment: "Capitulus dolorem verus.",
          rating: 4,
        },
        {
          category: "COMMUNICATION",
          rating: 1,
        },
        {
          category: "CHECKIN",
          rating: 1,
        },
        {
          category: "LOCATION",
          rating: 2,
        },
        {
          category: "VALUE",
          comment: "Quos constans aperte tero sollers.",
          rating: 5,
        },
      ],
      content: "Delectus conscendo communis custodia statim. Tutis adsuesco attonbitus comitatus auditor ea tergo nostrum deleo. Comprehendo tertius summopere vaco apparatus incidunt tabula pauci confido colo.",
      createdAt: new Date("2022-10-17T11:17:07.682Z"),
      id: "a7750698-a3b6-46a8-ae8f-5b7c955134b2",
      isPublic: true,
      metadata: [],
      privateFeedback: "Tripudio neque communis.",
      rating: 3,
      source: "Airbnb",
      updatedAt: new Date("2026-02-18T09:21:42.301Z"),
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
import { propertyUpdatePropertyReview } from "@unified-api/typescript-sdk/funcs/propertyUpdatePropertyReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await propertyUpdatePropertyReview(unifiedTo, {
    propertyReview: {
      authorName: "Benton Jast",
      categoryRatings: [
        {
          category: "CLEANLINESS",
          comment: "Umquam perferendis amitto voluptas sum blanditiis terreo.",
          rating: 5,
        },
        {
          category: "ACCURACY",
          comment: "Capitulus dolorem verus.",
          rating: 4,
        },
        {
          category: "COMMUNICATION",
          rating: 1,
        },
        {
          category: "CHECKIN",
          rating: 1,
        },
        {
          category: "LOCATION",
          rating: 2,
        },
        {
          category: "VALUE",
          comment: "Quos constans aperte tero sollers.",
          rating: 5,
        },
      ],
      content: "Delectus conscendo communis custodia statim. Tutis adsuesco attonbitus comitatus auditor ea tergo nostrum deleo. Comprehendo tertius summopere vaco apparatus incidunt tabula pauci confido colo.",
      createdAt: new Date("2022-10-17T11:17:07.682Z"),
      id: "a7750698-a3b6-46a8-ae8f-5b7c955134b2",
      isPublic: true,
      metadata: [],
      privateFeedback: "Tripudio neque communis.",
      rating: 3,
      source: "Airbnb",
      updatedAt: new Date("2026-02-18T09:21:42.301Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertyUpdatePropertyReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePropertyReviewRequest](../../sdk/models/operations/updatepropertyreviewrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PropertyReview](../../sdk/models/shared/propertyreview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |