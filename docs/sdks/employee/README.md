# Employee

## Overview

### Available Operations

* [createHrisEmployee](#createhrisemployee) - Create an employee
* [getHrisEmployee](#gethrisemployee) - Retrieve an employee
* [listHrisEmployees](#listhrisemployees) - List all employees
* [patchHrisEmployee](#patchhrisemployee) - Update an employee
* [removeHrisEmployee](#removehrisemployee) - Remove an employee
* [updateHrisEmployee](#updatehrisemployee) - Update an employee

## createHrisEmployee

Creates a HrisEmployee. Provide the unified HrisEmployee fields in the request body; they are mapped to the provider's API. Returns the created HrisEmployee.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisEmployee" method="post" path="/hris/{connection_id}/employee" example="hris_employee" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.employee.createHrisEmployee({
    hrisEmployee: {
      address: {
        address1: "1636 Anissa Circle",
        address2: "Suite 844",
        city: "North Breanneberg",
        countryCode: "US",
        postalCode: "18978",
        region: "South Dakota",
        regionCode: "MN",
      },
      bio: "sushi devotee, singer",
      compensation: [
        {
          amount: 95000,
          currency: "USD",
          frequency: "YEAR",
          notes: "Soleo.",
          startAt: new Date("2019-09-16T15:08:53.262Z"),
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "USD",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "milo.padberg@known-petal.com",
          type: "WORK",
        },
      ],
      employeeNumber: "3qaL1eiPnL",
      employmentStatus: "ACTIVE",
      employmentType: "PART_TIME",
      firstName: "Milo",
      flsaStatus: "EXEMPT",
      gender: "MALE",
      hasMfa: true,
      hiredAt: new Date("2019-09-16T15:08:53.262Z"),
      id: "b1fb8218-af6a-46b0-be4d-12df9d96eb87",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/52.jpg",
      languageLocale: "in",
      lastName: "Padberg",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "10741e68-ec7c-4c4f-9c2c-4d8a581e5283",
          namespace: "custom",
          slug: "custom_property",
          value: "teneo",
        },
      ],
      name: "Milo Padberg",
      payFrequency: "WEEK",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "amanda.padberg@gmail.com",
            },
          ],
          name: "Amanda Padberg",
          type: "SIBLING",
        },
        {
          emails: [
            {
              email: "alex.padberg@icloud.com",
            },
          ],
          name: "Alex Padberg",
          type: "OTHER",
        },
      ],
      salutation: "Miss",
      seniorityStartedAt: new Date("2019-09-16T15:08:53.262Z"),
      serviceStartedAt: new Date("2019-09-16T15:08:53.262Z"),
      ssnSin: "755-85-7843",
      storageQuotaAllocated: 3653713,
      storageQuotaAvailable: 3017275,
      storageQuotaUsed: 367449,
      telephones: [
        {
          telephone: "(980) 337-0594",
          type: "HOME",
        },
        {
          telephone: "(840) 216-6463",
          type: "FAX",
        },
      ],
      timeoffDaysTotal: 17,
      timeoffDaysUsed: 9,
      timezone: "America/Nome",
      title: "Corporate Functionality Executive",
      updatedAt: new Date("2020-07-23T13:15:02.643Z"),
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
import { hrisCreateHrisEmployee } from "@unified-api/typescript-sdk/funcs/hrisCreateHrisEmployee.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisCreateHrisEmployee(unifiedTo, {
    hrisEmployee: {
      address: {
        address1: "1636 Anissa Circle",
        address2: "Suite 844",
        city: "North Breanneberg",
        countryCode: "US",
        postalCode: "18978",
        region: "South Dakota",
        regionCode: "MN",
      },
      bio: "sushi devotee, singer",
      compensation: [
        {
          amount: 95000,
          currency: "USD",
          frequency: "YEAR",
          notes: "Soleo.",
          startAt: new Date("2019-09-16T15:08:53.262Z"),
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "USD",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "milo.padberg@known-petal.com",
          type: "WORK",
        },
      ],
      employeeNumber: "3qaL1eiPnL",
      employmentStatus: "ACTIVE",
      employmentType: "PART_TIME",
      firstName: "Milo",
      flsaStatus: "EXEMPT",
      gender: "MALE",
      hasMfa: true,
      hiredAt: new Date("2019-09-16T15:08:53.262Z"),
      id: "b1fb8218-af6a-46b0-be4d-12df9d96eb87",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/52.jpg",
      languageLocale: "in",
      lastName: "Padberg",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "10741e68-ec7c-4c4f-9c2c-4d8a581e5283",
          namespace: "custom",
          slug: "custom_property",
          value: "teneo",
        },
      ],
      name: "Milo Padberg",
      payFrequency: "WEEK",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "amanda.padberg@gmail.com",
            },
          ],
          name: "Amanda Padberg",
          type: "SIBLING",
        },
        {
          emails: [
            {
              email: "alex.padberg@icloud.com",
            },
          ],
          name: "Alex Padberg",
          type: "OTHER",
        },
      ],
      salutation: "Miss",
      seniorityStartedAt: new Date("2019-09-16T15:08:53.262Z"),
      serviceStartedAt: new Date("2019-09-16T15:08:53.262Z"),
      ssnSin: "755-85-7843",
      storageQuotaAllocated: 3653713,
      storageQuotaAvailable: 3017275,
      storageQuotaUsed: 367449,
      telephones: [
        {
          telephone: "(980) 337-0594",
          type: "HOME",
        },
        {
          telephone: "(840) 216-6463",
          type: "FAX",
        },
      ],
      timeoffDaysTotal: 17,
      timeoffDaysUsed: 9,
      timezone: "America/Nome",
      title: "Corporate Functionality Executive",
      updatedAt: new Date("2020-07-23T13:15:02.643Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateHrisEmployee failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisEmployeeRequest](../../sdk/models/operations/createhrisemployeerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisEmployee](../../sdk/models/shared/hrisemployee.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHrisEmployee

Retrieves a single HrisEmployee by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisEmployee" method="get" path="/hris/{connection_id}/employee/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.employee.getHrisEmployee({
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
import { hrisGetHrisEmployee } from "@unified-api/typescript-sdk/funcs/hrisGetHrisEmployee.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisGetHrisEmployee(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetHrisEmployee failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisEmployeeRequest](../../sdk/models/operations/gethrisemployeerequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisEmployee](../../sdk/models/shared/hrisemployee.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHrisEmployees

Returns a list of HrisEmployees. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisEmployees" method="get" path="/hris/{connection_id}/employee" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.employee.listHrisEmployees({
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
import { hrisListHrisEmployees } from "@unified-api/typescript-sdk/funcs/hrisListHrisEmployees.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisListHrisEmployees(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisListHrisEmployees failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisEmployeesRequest](../../sdk/models/operations/listhrisemployeesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisEmployee[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHrisEmployee

Updates the HrisEmployee identified by `id`. Provide the unified HrisEmployee fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHrisEmployee" method="patch" path="/hris/{connection_id}/employee/{id}" example="hris_employee" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.employee.patchHrisEmployee({
    hrisEmployee: {
      address: {
        address1: "1636 Anissa Circle",
        address2: "Suite 844",
        city: "North Breanneberg",
        countryCode: "US",
        postalCode: "18978",
        region: "South Dakota",
        regionCode: "MN",
      },
      bio: "sushi devotee, singer",
      compensation: [
        {
          amount: 95000,
          currency: "USD",
          frequency: "YEAR",
          notes: "Soleo.",
          startAt: new Date("2019-09-16T15:08:53.262Z"),
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "USD",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "milo.padberg@known-petal.com",
          type: "WORK",
        },
      ],
      employeeNumber: "3qaL1eiPnL",
      employmentStatus: "ACTIVE",
      employmentType: "PART_TIME",
      firstName: "Milo",
      flsaStatus: "EXEMPT",
      gender: "MALE",
      hasMfa: true,
      hiredAt: new Date("2019-09-16T15:08:53.262Z"),
      id: "5c536474-ce57-4410-a741-60d0292e6227",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/52.jpg",
      languageLocale: "in",
      lastName: "Padberg",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "cdd742cf-1494-484e-89fb-29eabbde2d0f",
          namespace: "custom",
          slug: "custom_property",
          value: "teneo",
        },
      ],
      name: "Milo Padberg",
      payFrequency: "WEEK",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "amanda.padberg@gmail.com",
            },
          ],
          name: "Amanda Padberg",
          type: "SIBLING",
        },
        {
          emails: [
            {
              email: "alex.padberg@icloud.com",
            },
          ],
          name: "Alex Padberg",
          type: "OTHER",
        },
      ],
      salutation: "Miss",
      seniorityStartedAt: new Date("2019-09-16T15:08:53.262Z"),
      serviceStartedAt: new Date("2019-09-16T15:08:53.262Z"),
      ssnSin: "755-85-7843",
      storageQuotaAllocated: 3653713,
      storageQuotaAvailable: 3017275,
      storageQuotaUsed: 367449,
      telephones: [
        {
          telephone: "(980) 337-0594",
          type: "HOME",
        },
        {
          telephone: "(840) 216-6463",
          type: "FAX",
        },
      ],
      timeoffDaysTotal: 17,
      timeoffDaysUsed: 9,
      timezone: "America/Nome",
      title: "Corporate Functionality Executive",
      updatedAt: new Date("2020-07-23T13:15:02.654Z"),
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
import { hrisPatchHrisEmployee } from "@unified-api/typescript-sdk/funcs/hrisPatchHrisEmployee.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisPatchHrisEmployee(unifiedTo, {
    hrisEmployee: {
      address: {
        address1: "1636 Anissa Circle",
        address2: "Suite 844",
        city: "North Breanneberg",
        countryCode: "US",
        postalCode: "18978",
        region: "South Dakota",
        regionCode: "MN",
      },
      bio: "sushi devotee, singer",
      compensation: [
        {
          amount: 95000,
          currency: "USD",
          frequency: "YEAR",
          notes: "Soleo.",
          startAt: new Date("2019-09-16T15:08:53.262Z"),
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "USD",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "milo.padberg@known-petal.com",
          type: "WORK",
        },
      ],
      employeeNumber: "3qaL1eiPnL",
      employmentStatus: "ACTIVE",
      employmentType: "PART_TIME",
      firstName: "Milo",
      flsaStatus: "EXEMPT",
      gender: "MALE",
      hasMfa: true,
      hiredAt: new Date("2019-09-16T15:08:53.262Z"),
      id: "5c536474-ce57-4410-a741-60d0292e6227",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/52.jpg",
      languageLocale: "in",
      lastName: "Padberg",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "cdd742cf-1494-484e-89fb-29eabbde2d0f",
          namespace: "custom",
          slug: "custom_property",
          value: "teneo",
        },
      ],
      name: "Milo Padberg",
      payFrequency: "WEEK",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "amanda.padberg@gmail.com",
            },
          ],
          name: "Amanda Padberg",
          type: "SIBLING",
        },
        {
          emails: [
            {
              email: "alex.padberg@icloud.com",
            },
          ],
          name: "Alex Padberg",
          type: "OTHER",
        },
      ],
      salutation: "Miss",
      seniorityStartedAt: new Date("2019-09-16T15:08:53.262Z"),
      serviceStartedAt: new Date("2019-09-16T15:08:53.262Z"),
      ssnSin: "755-85-7843",
      storageQuotaAllocated: 3653713,
      storageQuotaAvailable: 3017275,
      storageQuotaUsed: 367449,
      telephones: [
        {
          telephone: "(980) 337-0594",
          type: "HOME",
        },
        {
          telephone: "(840) 216-6463",
          type: "FAX",
        },
      ],
      timeoffDaysTotal: 17,
      timeoffDaysUsed: 9,
      timezone: "America/Nome",
      title: "Corporate Functionality Executive",
      updatedAt: new Date("2020-07-23T13:15:02.654Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisPatchHrisEmployee failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHrisEmployeeRequest](../../sdk/models/operations/patchhrisemployeerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisEmployee](../../sdk/models/shared/hrisemployee.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeHrisEmployee

Deletes the HrisEmployee identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHrisEmployee" method="delete" path="/hris/{connection_id}/employee/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.employee.removeHrisEmployee({
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
import { hrisRemoveHrisEmployee } from "@unified-api/typescript-sdk/funcs/hrisRemoveHrisEmployee.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisRemoveHrisEmployee(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisRemoveHrisEmployee failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHrisEmployeeRequest](../../sdk/models/operations/removehrisemployeerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHrisEmployeeResponse](../../sdk/models/operations/removehrisemployeeresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHrisEmployee

Updates the HrisEmployee identified by `id`. Provide the unified HrisEmployee fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHrisEmployee" method="put" path="/hris/{connection_id}/employee/{id}" example="hris_employee" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.employee.updateHrisEmployee({
    hrisEmployee: {
      address: {
        address1: "1636 Anissa Circle",
        address2: "Suite 844",
        city: "North Breanneberg",
        countryCode: "US",
        postalCode: "18978",
        region: "South Dakota",
        regionCode: "MN",
      },
      bio: "sushi devotee, singer",
      compensation: [
        {
          amount: 95000,
          currency: "USD",
          frequency: "YEAR",
          notes: "Soleo.",
          startAt: new Date("2019-09-16T15:08:53.262Z"),
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "USD",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "milo.padberg@known-petal.com",
          type: "WORK",
        },
      ],
      employeeNumber: "3qaL1eiPnL",
      employmentStatus: "ACTIVE",
      employmentType: "PART_TIME",
      firstName: "Milo",
      flsaStatus: "EXEMPT",
      gender: "MALE",
      hasMfa: true,
      hiredAt: new Date("2019-09-16T15:08:53.262Z"),
      id: "5c536474-ce57-4410-a741-60d0292e6227",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/52.jpg",
      languageLocale: "in",
      lastName: "Padberg",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "cdd742cf-1494-484e-89fb-29eabbde2d0f",
          namespace: "custom",
          slug: "custom_property",
          value: "teneo",
        },
      ],
      name: "Milo Padberg",
      payFrequency: "WEEK",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "amanda.padberg@gmail.com",
            },
          ],
          name: "Amanda Padberg",
          type: "SIBLING",
        },
        {
          emails: [
            {
              email: "alex.padberg@icloud.com",
            },
          ],
          name: "Alex Padberg",
          type: "OTHER",
        },
      ],
      salutation: "Miss",
      seniorityStartedAt: new Date("2019-09-16T15:08:53.262Z"),
      serviceStartedAt: new Date("2019-09-16T15:08:53.262Z"),
      ssnSin: "755-85-7843",
      storageQuotaAllocated: 3653713,
      storageQuotaAvailable: 3017275,
      storageQuotaUsed: 367449,
      telephones: [
        {
          telephone: "(980) 337-0594",
          type: "HOME",
        },
        {
          telephone: "(840) 216-6463",
          type: "FAX",
        },
      ],
      timeoffDaysTotal: 17,
      timeoffDaysUsed: 9,
      timezone: "America/Nome",
      title: "Corporate Functionality Executive",
      updatedAt: new Date("2020-07-23T13:15:02.654Z"),
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
import { hrisUpdateHrisEmployee } from "@unified-api/typescript-sdk/funcs/hrisUpdateHrisEmployee.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisUpdateHrisEmployee(unifiedTo, {
    hrisEmployee: {
      address: {
        address1: "1636 Anissa Circle",
        address2: "Suite 844",
        city: "North Breanneberg",
        countryCode: "US",
        postalCode: "18978",
        region: "South Dakota",
        regionCode: "MN",
      },
      bio: "sushi devotee, singer",
      compensation: [
        {
          amount: 95000,
          currency: "USD",
          frequency: "YEAR",
          notes: "Soleo.",
          startAt: new Date("2019-09-16T15:08:53.262Z"),
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "USD",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "milo.padberg@known-petal.com",
          type: "WORK",
        },
      ],
      employeeNumber: "3qaL1eiPnL",
      employmentStatus: "ACTIVE",
      employmentType: "PART_TIME",
      firstName: "Milo",
      flsaStatus: "EXEMPT",
      gender: "MALE",
      hasMfa: true,
      hiredAt: new Date("2019-09-16T15:08:53.262Z"),
      id: "5c536474-ce57-4410-a741-60d0292e6227",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/52.jpg",
      languageLocale: "in",
      lastName: "Padberg",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "cdd742cf-1494-484e-89fb-29eabbde2d0f",
          namespace: "custom",
          slug: "custom_property",
          value: "teneo",
        },
      ],
      name: "Milo Padberg",
      payFrequency: "WEEK",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "amanda.padberg@gmail.com",
            },
          ],
          name: "Amanda Padberg",
          type: "SIBLING",
        },
        {
          emails: [
            {
              email: "alex.padberg@icloud.com",
            },
          ],
          name: "Alex Padberg",
          type: "OTHER",
        },
      ],
      salutation: "Miss",
      seniorityStartedAt: new Date("2019-09-16T15:08:53.262Z"),
      serviceStartedAt: new Date("2019-09-16T15:08:53.262Z"),
      ssnSin: "755-85-7843",
      storageQuotaAllocated: 3653713,
      storageQuotaAvailable: 3017275,
      storageQuotaUsed: 367449,
      telephones: [
        {
          telephone: "(980) 337-0594",
          type: "HOME",
        },
        {
          telephone: "(840) 216-6463",
          type: "FAX",
        },
      ],
      timeoffDaysTotal: 17,
      timeoffDaysUsed: 9,
      timezone: "America/Nome",
      title: "Corporate Functionality Executive",
      updatedAt: new Date("2020-07-23T13:15:02.654Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisUpdateHrisEmployee failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHrisEmployeeRequest](../../sdk/models/operations/updatehrisemployeerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisEmployee](../../sdk/models/shared/hrisemployee.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |