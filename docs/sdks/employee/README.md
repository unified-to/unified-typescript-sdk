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
        address1: "7431 Hintz Parkway",
        address2: "Apt. 520",
        city: "Port Rogerview",
        countryCode: "US",
        postalCode: "01711",
        region: "Missouri",
        regionCode: "TN",
      },
      bio: "fun advocate  🇱🇻",
      compensation: [
        {
          amount: 95000,
          currency: "USD",
          frequency: "YEAR",
          notes: "Eius.",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "USD",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "zetta.prohaska@insidious-stump.net",
          type: "WORK",
        },
      ],
      employeeNumber: "uCk3qaL1ei",
      employmentStatus: "ACTIVE",
      employmentType: "PART_TIME",
      firstName: "Zetta",
      flsaStatus: "EXEMPT",
      gender: "MALE",
      hasMfa: true,
      hiredAt: new Date("2019-09-16T15:08:53.262Z"),
      id: "0bdf24df-ee08-433c-8ef9-2218b9b96cb0",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/85.jpg",
      languageLocale: "in",
      lastName: "Prohaska",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "75c17fc8-5f34-44bc-9db7-d3dd3f2a1933",
          namespace: "custom",
          slug: "custom_property",
          value: "tutis",
        },
      ],
      name: "Zetta Prohaska",
      payFrequency: "WEEK",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "keith.prohaska@gmail.com",
            },
          ],
          name: "Keith Prohaska",
          type: "SIBLING",
        },
        {
          emails: [
            {
              email: "keely.prohaska@icloud.com",
            },
          ],
          name: "Keely Prohaska",
          type: "OTHER",
        },
      ],
      salutation: "Ms.",
      ssnSin: "284-82-8167",
      storageQuotaAllocated: 3653713,
      storageQuotaAvailable: 3017275,
      storageQuotaUsed: 367449,
      telephones: [
        {
          telephone: "(320) 980-1370",
          type: "HOME",
        },
        {
          telephone: "(694) 840-0166",
          type: "FAX",
        },
      ],
      timeoffDaysTotal: 17,
      timeoffDaysUsed: 9,
      timezone: "Europe/Ljubljana",
      title: "District Branding Specialist",
      updatedAt: new Date("2020-07-20T08:18:51.298Z"),
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
        address1: "7431 Hintz Parkway",
        address2: "Apt. 520",
        city: "Port Rogerview",
        countryCode: "US",
        postalCode: "01711",
        region: "Missouri",
        regionCode: "TN",
      },
      bio: "fun advocate  🇱🇻",
      compensation: [
        {
          amount: 95000,
          currency: "USD",
          frequency: "YEAR",
          notes: "Eius.",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "USD",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "zetta.prohaska@insidious-stump.net",
          type: "WORK",
        },
      ],
      employeeNumber: "uCk3qaL1ei",
      employmentStatus: "ACTIVE",
      employmentType: "PART_TIME",
      firstName: "Zetta",
      flsaStatus: "EXEMPT",
      gender: "MALE",
      hasMfa: true,
      hiredAt: new Date("2019-09-16T15:08:53.262Z"),
      id: "0bdf24df-ee08-433c-8ef9-2218b9b96cb0",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/85.jpg",
      languageLocale: "in",
      lastName: "Prohaska",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "75c17fc8-5f34-44bc-9db7-d3dd3f2a1933",
          namespace: "custom",
          slug: "custom_property",
          value: "tutis",
        },
      ],
      name: "Zetta Prohaska",
      payFrequency: "WEEK",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "keith.prohaska@gmail.com",
            },
          ],
          name: "Keith Prohaska",
          type: "SIBLING",
        },
        {
          emails: [
            {
              email: "keely.prohaska@icloud.com",
            },
          ],
          name: "Keely Prohaska",
          type: "OTHER",
        },
      ],
      salutation: "Ms.",
      ssnSin: "284-82-8167",
      storageQuotaAllocated: 3653713,
      storageQuotaAvailable: 3017275,
      storageQuotaUsed: 367449,
      telephones: [
        {
          telephone: "(320) 980-1370",
          type: "HOME",
        },
        {
          telephone: "(694) 840-0166",
          type: "FAX",
        },
      ],
      timeoffDaysTotal: 17,
      timeoffDaysUsed: 9,
      timezone: "Europe/Ljubljana",
      title: "District Branding Specialist",
      updatedAt: new Date("2020-07-20T08:18:51.298Z"),
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
        address1: "7431 Hintz Parkway",
        address2: "Apt. 520",
        city: "Port Rogerview",
        countryCode: "US",
        postalCode: "01711",
        region: "Missouri",
        regionCode: "TN",
      },
      bio: "fun advocate  🇱🇻",
      compensation: [
        {
          amount: 95000,
          currency: "USD",
          frequency: "YEAR",
          notes: "Eius.",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "USD",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "zetta.prohaska@insidious-stump.net",
          type: "WORK",
        },
      ],
      employeeNumber: "uCk3qaL1ei",
      employmentStatus: "ACTIVE",
      employmentType: "PART_TIME",
      firstName: "Zetta",
      flsaStatus: "EXEMPT",
      gender: "MALE",
      hasMfa: true,
      hiredAt: new Date("2019-09-16T15:08:53.262Z"),
      id: "33c0d067-dc02-43a6-a2fc-7a4031ac421f",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/85.jpg",
      languageLocale: "in",
      lastName: "Prohaska",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "a9e7d4e9-6fa9-44a7-8f19-1a6f7c3a75e4",
          namespace: "custom",
          slug: "custom_property",
          value: "tutis",
        },
      ],
      name: "Zetta Prohaska",
      payFrequency: "WEEK",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "keith.prohaska@gmail.com",
            },
          ],
          name: "Keith Prohaska",
          type: "SIBLING",
        },
        {
          emails: [
            {
              email: "keely.prohaska@icloud.com",
            },
          ],
          name: "Keely Prohaska",
          type: "OTHER",
        },
      ],
      salutation: "Ms.",
      ssnSin: "284-82-8167",
      storageQuotaAllocated: 3653713,
      storageQuotaAvailable: 3017275,
      storageQuotaUsed: 367449,
      telephones: [
        {
          telephone: "(320) 980-1370",
          type: "HOME",
        },
        {
          telephone: "(694) 840-0166",
          type: "FAX",
        },
      ],
      timeoffDaysTotal: 17,
      timeoffDaysUsed: 9,
      timezone: "Europe/Ljubljana",
      title: "District Branding Specialist",
      updatedAt: new Date("2020-07-20T08:18:51.306Z"),
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
        address1: "7431 Hintz Parkway",
        address2: "Apt. 520",
        city: "Port Rogerview",
        countryCode: "US",
        postalCode: "01711",
        region: "Missouri",
        regionCode: "TN",
      },
      bio: "fun advocate  🇱🇻",
      compensation: [
        {
          amount: 95000,
          currency: "USD",
          frequency: "YEAR",
          notes: "Eius.",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "USD",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "zetta.prohaska@insidious-stump.net",
          type: "WORK",
        },
      ],
      employeeNumber: "uCk3qaL1ei",
      employmentStatus: "ACTIVE",
      employmentType: "PART_TIME",
      firstName: "Zetta",
      flsaStatus: "EXEMPT",
      gender: "MALE",
      hasMfa: true,
      hiredAt: new Date("2019-09-16T15:08:53.262Z"),
      id: "33c0d067-dc02-43a6-a2fc-7a4031ac421f",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/85.jpg",
      languageLocale: "in",
      lastName: "Prohaska",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "a9e7d4e9-6fa9-44a7-8f19-1a6f7c3a75e4",
          namespace: "custom",
          slug: "custom_property",
          value: "tutis",
        },
      ],
      name: "Zetta Prohaska",
      payFrequency: "WEEK",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "keith.prohaska@gmail.com",
            },
          ],
          name: "Keith Prohaska",
          type: "SIBLING",
        },
        {
          emails: [
            {
              email: "keely.prohaska@icloud.com",
            },
          ],
          name: "Keely Prohaska",
          type: "OTHER",
        },
      ],
      salutation: "Ms.",
      ssnSin: "284-82-8167",
      storageQuotaAllocated: 3653713,
      storageQuotaAvailable: 3017275,
      storageQuotaUsed: 367449,
      telephones: [
        {
          telephone: "(320) 980-1370",
          type: "HOME",
        },
        {
          telephone: "(694) 840-0166",
          type: "FAX",
        },
      ],
      timeoffDaysTotal: 17,
      timeoffDaysUsed: 9,
      timezone: "Europe/Ljubljana",
      title: "District Branding Specialist",
      updatedAt: new Date("2020-07-20T08:18:51.306Z"),
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
        address1: "7431 Hintz Parkway",
        address2: "Apt. 520",
        city: "Port Rogerview",
        countryCode: "US",
        postalCode: "01711",
        region: "Missouri",
        regionCode: "TN",
      },
      bio: "fun advocate  🇱🇻",
      compensation: [
        {
          amount: 95000,
          currency: "USD",
          frequency: "YEAR",
          notes: "Eius.",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "USD",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "zetta.prohaska@insidious-stump.net",
          type: "WORK",
        },
      ],
      employeeNumber: "uCk3qaL1ei",
      employmentStatus: "ACTIVE",
      employmentType: "PART_TIME",
      firstName: "Zetta",
      flsaStatus: "EXEMPT",
      gender: "MALE",
      hasMfa: true,
      hiredAt: new Date("2019-09-16T15:08:53.262Z"),
      id: "33c0d067-dc02-43a6-a2fc-7a4031ac421f",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/85.jpg",
      languageLocale: "in",
      lastName: "Prohaska",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "a9e7d4e9-6fa9-44a7-8f19-1a6f7c3a75e4",
          namespace: "custom",
          slug: "custom_property",
          value: "tutis",
        },
      ],
      name: "Zetta Prohaska",
      payFrequency: "WEEK",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "keith.prohaska@gmail.com",
            },
          ],
          name: "Keith Prohaska",
          type: "SIBLING",
        },
        {
          emails: [
            {
              email: "keely.prohaska@icloud.com",
            },
          ],
          name: "Keely Prohaska",
          type: "OTHER",
        },
      ],
      salutation: "Ms.",
      ssnSin: "284-82-8167",
      storageQuotaAllocated: 3653713,
      storageQuotaAvailable: 3017275,
      storageQuotaUsed: 367449,
      telephones: [
        {
          telephone: "(320) 980-1370",
          type: "HOME",
        },
        {
          telephone: "(694) 840-0166",
          type: "FAX",
        },
      ],
      timeoffDaysTotal: 17,
      timeoffDaysUsed: 9,
      timezone: "Europe/Ljubljana",
      title: "District Branding Specialist",
      updatedAt: new Date("2020-07-20T08:18:51.306Z"),
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
        address1: "7431 Hintz Parkway",
        address2: "Apt. 520",
        city: "Port Rogerview",
        countryCode: "US",
        postalCode: "01711",
        region: "Missouri",
        regionCode: "TN",
      },
      bio: "fun advocate  🇱🇻",
      compensation: [
        {
          amount: 95000,
          currency: "USD",
          frequency: "YEAR",
          notes: "Eius.",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "USD",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "zetta.prohaska@insidious-stump.net",
          type: "WORK",
        },
      ],
      employeeNumber: "uCk3qaL1ei",
      employmentStatus: "ACTIVE",
      employmentType: "PART_TIME",
      firstName: "Zetta",
      flsaStatus: "EXEMPT",
      gender: "MALE",
      hasMfa: true,
      hiredAt: new Date("2019-09-16T15:08:53.262Z"),
      id: "33c0d067-dc02-43a6-a2fc-7a4031ac421f",
      imageUrl: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/85.jpg",
      languageLocale: "in",
      lastName: "Prohaska",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "a9e7d4e9-6fa9-44a7-8f19-1a6f7c3a75e4",
          namespace: "custom",
          slug: "custom_property",
          value: "tutis",
        },
      ],
      name: "Zetta Prohaska",
      payFrequency: "WEEK",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "keith.prohaska@gmail.com",
            },
          ],
          name: "Keith Prohaska",
          type: "SIBLING",
        },
        {
          emails: [
            {
              email: "keely.prohaska@icloud.com",
            },
          ],
          name: "Keely Prohaska",
          type: "OTHER",
        },
      ],
      salutation: "Ms.",
      ssnSin: "284-82-8167",
      storageQuotaAllocated: 3653713,
      storageQuotaAvailable: 3017275,
      storageQuotaUsed: 367449,
      telephones: [
        {
          telephone: "(320) 980-1370",
          type: "HOME",
        },
        {
          telephone: "(694) 840-0166",
          type: "FAX",
        },
      ],
      timeoffDaysTotal: 17,
      timeoffDaysUsed: 9,
      timezone: "Europe/Ljubljana",
      title: "District Branding Specialist",
      updatedAt: new Date("2020-07-20T08:18:51.306Z"),
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