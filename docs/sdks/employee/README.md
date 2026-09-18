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

Create an employee

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
        address1: "52008 Lansdowne Road",
        address2: "Apt. 101",
        city: "Connellyberg",
        countryCode: "US",
        postalCode: "18978",
        region: "South Dakota",
        regionCode: "NM",
      },
      bio: "sushi devotee, singer",
      compensation: [
        {
          amount: 69148,
          currency: "CRC",
          frequency: "QUARTER",
          notes: "Tergeo laborum laboriosam tutis.",
          type: "EQUITY",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "IDR",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "Zetta_Prohaska67@hotmail.com",
          type: "HOME",
        },
      ],
      employeeNumber: "YuOt169CGu",
      employmentStatus: "ACTIVE",
      employmentType: "VOLUNTEER",
      firstName: "Zetta",
      gender: "INTERSEX",
      hasMfa: true,
      hiredAt: new Date("2023-05-10T16:15:07.653Z"),
      id: "1dfdcf05-413d-4fb8-82f1-fe4ed9681c02",
      imageUrl: "https://loremflickr.com/3684/2116?lock=4686991638584456",
      languageLocale: "es",
      lastName: "Prohaska",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "1af6cea0-5868-4220-b922-55797633b82d",
          namespace: "custom",
          slug: "custom_property",
          value: "tenetur",
        },
      ],
      name: "Zetta Prohaska",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "Deshaun.Sanford24@yahoo.com",
            },
            {
              email: "Rebeca.Dibbert11@hotmail.com",
            },
            {
              email: "Hester80@gmail.com",
            },
          ],
          name: "Automotive",
          type: "EMERGENCY",
        },
        {
          emails: [
            {
              email: "Benedict_Wisozk83@hotmail.com",
            },
            {
              email: "Princess_Rath43@gmail.com",
            },
            {
              email: "Elmira92@yahoo.com",
            },
          ],
          name: "Music",
          type: "FRIEND",
        },
        {
          emails: [
            {
              email: "Jane30@gmail.com",
            },
          ],
          name: "Jewelry",
          type: "SIBLING",
        },
      ],
      salutation: "Miss",
      ssnSin: "yMRtj0Q3xO",
      storageQuotaAllocated: 3674489,
      storageQuotaAvailable: 7748057,
      storageQuotaUsed: 301727,
      telephones: [
        {
          telephone: "(409) 801-3705",
          type: "FAX",
        },
      ],
      terminationReason: "Communis adnuo damnatio atavus terebro acies canis cogito triumphus creber temptatio defendo cubo amissio paulatim corroboro.",
      timeoffDaysTotal: 12,
      timeoffDaysUsed: 6,
      timezone: "Africa/Harare",
      title: "Investor Paradigm Liaison",
      updatedAt: new Date("2022-02-19T07:02:15.352Z"),
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
        address1: "52008 Lansdowne Road",
        address2: "Apt. 101",
        city: "Connellyberg",
        countryCode: "US",
        postalCode: "18978",
        region: "South Dakota",
        regionCode: "NM",
      },
      bio: "sushi devotee, singer",
      compensation: [
        {
          amount: 69148,
          currency: "CRC",
          frequency: "QUARTER",
          notes: "Tergeo laborum laboriosam tutis.",
          type: "EQUITY",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "IDR",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "Zetta_Prohaska67@hotmail.com",
          type: "HOME",
        },
      ],
      employeeNumber: "YuOt169CGu",
      employmentStatus: "ACTIVE",
      employmentType: "VOLUNTEER",
      firstName: "Zetta",
      gender: "INTERSEX",
      hasMfa: true,
      hiredAt: new Date("2023-05-10T16:15:07.653Z"),
      id: "1dfdcf05-413d-4fb8-82f1-fe4ed9681c02",
      imageUrl: "https://loremflickr.com/3684/2116?lock=4686991638584456",
      languageLocale: "es",
      lastName: "Prohaska",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "1af6cea0-5868-4220-b922-55797633b82d",
          namespace: "custom",
          slug: "custom_property",
          value: "tenetur",
        },
      ],
      name: "Zetta Prohaska",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "Deshaun.Sanford24@yahoo.com",
            },
            {
              email: "Rebeca.Dibbert11@hotmail.com",
            },
            {
              email: "Hester80@gmail.com",
            },
          ],
          name: "Automotive",
          type: "EMERGENCY",
        },
        {
          emails: [
            {
              email: "Benedict_Wisozk83@hotmail.com",
            },
            {
              email: "Princess_Rath43@gmail.com",
            },
            {
              email: "Elmira92@yahoo.com",
            },
          ],
          name: "Music",
          type: "FRIEND",
        },
        {
          emails: [
            {
              email: "Jane30@gmail.com",
            },
          ],
          name: "Jewelry",
          type: "SIBLING",
        },
      ],
      salutation: "Miss",
      ssnSin: "yMRtj0Q3xO",
      storageQuotaAllocated: 3674489,
      storageQuotaAvailable: 7748057,
      storageQuotaUsed: 301727,
      telephones: [
        {
          telephone: "(409) 801-3705",
          type: "FAX",
        },
      ],
      terminationReason: "Communis adnuo damnatio atavus terebro acies canis cogito triumphus creber temptatio defendo cubo amissio paulatim corroboro.",
      timeoffDaysTotal: 12,
      timeoffDaysUsed: 6,
      timezone: "Africa/Harare",
      title: "Investor Paradigm Liaison",
      updatedAt: new Date("2022-02-19T07:02:15.352Z"),
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

Retrieve an employee

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

List all employees

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

Update an employee

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
        address1: "52008 Lansdowne Road",
        address2: "Apt. 101",
        city: "Connellyberg",
        countryCode: "US",
        postalCode: "18978",
        region: "South Dakota",
        regionCode: "NM",
      },
      bio: "sushi devotee, singer",
      compensation: [
        {
          amount: 69148,
          currency: "CRC",
          frequency: "QUARTER",
          notes: "Tergeo laborum laboriosam tutis.",
          type: "EQUITY",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "IDR",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "Zetta_Prohaska67@hotmail.com",
          type: "HOME",
        },
      ],
      employeeNumber: "YuOt169CGu",
      employmentStatus: "ACTIVE",
      employmentType: "VOLUNTEER",
      firstName: "Zetta",
      gender: "INTERSEX",
      hasMfa: true,
      hiredAt: new Date("2023-05-10T16:15:07.690Z"),
      id: "f48de0fa-eaf1-4dda-a822-85ff56964d2a",
      imageUrl: "https://loremflickr.com/3684/2116?lock=4686991638584456",
      languageLocale: "es",
      lastName: "Prohaska",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "a70413d9-b815-4ba9-8f48-c242e3ecee27",
          namespace: "custom",
          slug: "custom_property",
          value: "tenetur",
        },
      ],
      name: "Zetta Prohaska",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "Deshaun.Sanford24@yahoo.com",
            },
            {
              email: "Rebeca.Dibbert11@hotmail.com",
            },
            {
              email: "Hester80@gmail.com",
            },
          ],
          name: "Automotive",
          type: "EMERGENCY",
        },
        {
          emails: [
            {
              email: "Benedict_Wisozk83@hotmail.com",
            },
            {
              email: "Princess_Rath43@gmail.com",
            },
            {
              email: "Elmira92@yahoo.com",
            },
          ],
          name: "Music",
          type: "FRIEND",
        },
        {
          emails: [
            {
              email: "Jane30@gmail.com",
            },
          ],
          name: "Jewelry",
          type: "SIBLING",
        },
      ],
      salutation: "Miss",
      ssnSin: "yMRtj0Q3xO",
      storageQuotaAllocated: 3674489,
      storageQuotaAvailable: 7748057,
      storageQuotaUsed: 301727,
      telephones: [
        {
          telephone: "(409) 801-3705",
          type: "FAX",
        },
      ],
      terminationReason: "Communis adnuo damnatio atavus terebro acies canis cogito triumphus creber temptatio defendo cubo amissio paulatim corroboro.",
      timeoffDaysTotal: 12,
      timeoffDaysUsed: 6,
      timezone: "Africa/Harare",
      title: "Investor Paradigm Liaison",
      updatedAt: new Date("2022-02-19T07:02:15.376Z"),
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
        address1: "52008 Lansdowne Road",
        address2: "Apt. 101",
        city: "Connellyberg",
        countryCode: "US",
        postalCode: "18978",
        region: "South Dakota",
        regionCode: "NM",
      },
      bio: "sushi devotee, singer",
      compensation: [
        {
          amount: 69148,
          currency: "CRC",
          frequency: "QUARTER",
          notes: "Tergeo laborum laboriosam tutis.",
          type: "EQUITY",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "IDR",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "Zetta_Prohaska67@hotmail.com",
          type: "HOME",
        },
      ],
      employeeNumber: "YuOt169CGu",
      employmentStatus: "ACTIVE",
      employmentType: "VOLUNTEER",
      firstName: "Zetta",
      gender: "INTERSEX",
      hasMfa: true,
      hiredAt: new Date("2023-05-10T16:15:07.690Z"),
      id: "f48de0fa-eaf1-4dda-a822-85ff56964d2a",
      imageUrl: "https://loremflickr.com/3684/2116?lock=4686991638584456",
      languageLocale: "es",
      lastName: "Prohaska",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "a70413d9-b815-4ba9-8f48-c242e3ecee27",
          namespace: "custom",
          slug: "custom_property",
          value: "tenetur",
        },
      ],
      name: "Zetta Prohaska",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "Deshaun.Sanford24@yahoo.com",
            },
            {
              email: "Rebeca.Dibbert11@hotmail.com",
            },
            {
              email: "Hester80@gmail.com",
            },
          ],
          name: "Automotive",
          type: "EMERGENCY",
        },
        {
          emails: [
            {
              email: "Benedict_Wisozk83@hotmail.com",
            },
            {
              email: "Princess_Rath43@gmail.com",
            },
            {
              email: "Elmira92@yahoo.com",
            },
          ],
          name: "Music",
          type: "FRIEND",
        },
        {
          emails: [
            {
              email: "Jane30@gmail.com",
            },
          ],
          name: "Jewelry",
          type: "SIBLING",
        },
      ],
      salutation: "Miss",
      ssnSin: "yMRtj0Q3xO",
      storageQuotaAllocated: 3674489,
      storageQuotaAvailable: 7748057,
      storageQuotaUsed: 301727,
      telephones: [
        {
          telephone: "(409) 801-3705",
          type: "FAX",
        },
      ],
      terminationReason: "Communis adnuo damnatio atavus terebro acies canis cogito triumphus creber temptatio defendo cubo amissio paulatim corroboro.",
      timeoffDaysTotal: 12,
      timeoffDaysUsed: 6,
      timezone: "Africa/Harare",
      title: "Investor Paradigm Liaison",
      updatedAt: new Date("2022-02-19T07:02:15.376Z"),
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

Remove an employee

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

Update an employee

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
        address1: "52008 Lansdowne Road",
        address2: "Apt. 101",
        city: "Connellyberg",
        countryCode: "US",
        postalCode: "18978",
        region: "South Dakota",
        regionCode: "NM",
      },
      bio: "sushi devotee, singer",
      compensation: [
        {
          amount: 69148,
          currency: "CRC",
          frequency: "QUARTER",
          notes: "Tergeo laborum laboriosam tutis.",
          type: "EQUITY",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "IDR",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "Zetta_Prohaska67@hotmail.com",
          type: "HOME",
        },
      ],
      employeeNumber: "YuOt169CGu",
      employmentStatus: "ACTIVE",
      employmentType: "VOLUNTEER",
      firstName: "Zetta",
      gender: "INTERSEX",
      hasMfa: true,
      hiredAt: new Date("2023-05-10T16:15:07.690Z"),
      id: "f48de0fa-eaf1-4dda-a822-85ff56964d2a",
      imageUrl: "https://loremflickr.com/3684/2116?lock=4686991638584456",
      languageLocale: "es",
      lastName: "Prohaska",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "a70413d9-b815-4ba9-8f48-c242e3ecee27",
          namespace: "custom",
          slug: "custom_property",
          value: "tenetur",
        },
      ],
      name: "Zetta Prohaska",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "Deshaun.Sanford24@yahoo.com",
            },
            {
              email: "Rebeca.Dibbert11@hotmail.com",
            },
            {
              email: "Hester80@gmail.com",
            },
          ],
          name: "Automotive",
          type: "EMERGENCY",
        },
        {
          emails: [
            {
              email: "Benedict_Wisozk83@hotmail.com",
            },
            {
              email: "Princess_Rath43@gmail.com",
            },
            {
              email: "Elmira92@yahoo.com",
            },
          ],
          name: "Music",
          type: "FRIEND",
        },
        {
          emails: [
            {
              email: "Jane30@gmail.com",
            },
          ],
          name: "Jewelry",
          type: "SIBLING",
        },
      ],
      salutation: "Miss",
      ssnSin: "yMRtj0Q3xO",
      storageQuotaAllocated: 3674489,
      storageQuotaAvailable: 7748057,
      storageQuotaUsed: 301727,
      telephones: [
        {
          telephone: "(409) 801-3705",
          type: "FAX",
        },
      ],
      terminationReason: "Communis adnuo damnatio atavus terebro acies canis cogito triumphus creber temptatio defendo cubo amissio paulatim corroboro.",
      timeoffDaysTotal: 12,
      timeoffDaysUsed: 6,
      timezone: "Africa/Harare",
      title: "Investor Paradigm Liaison",
      updatedAt: new Date("2022-02-19T07:02:15.376Z"),
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
        address1: "52008 Lansdowne Road",
        address2: "Apt. 101",
        city: "Connellyberg",
        countryCode: "US",
        postalCode: "18978",
        region: "South Dakota",
        regionCode: "NM",
      },
      bio: "sushi devotee, singer",
      compensation: [
        {
          amount: 69148,
          currency: "CRC",
          frequency: "QUARTER",
          notes: "Tergeo laborum laboriosam tutis.",
          type: "EQUITY",
        },
      ],
      createdAt: new Date("2019-09-16T15:08:53.262Z"),
      currency: "IDR",
      dateOfBirth: new Date("2001-04-22"),
      emails: [
        {
          email: "Zetta_Prohaska67@hotmail.com",
          type: "HOME",
        },
      ],
      employeeNumber: "YuOt169CGu",
      employmentStatus: "ACTIVE",
      employmentType: "VOLUNTEER",
      firstName: "Zetta",
      gender: "INTERSEX",
      hasMfa: true,
      hiredAt: new Date("2023-05-10T16:15:07.690Z"),
      id: "f48de0fa-eaf1-4dda-a822-85ff56964d2a",
      imageUrl: "https://loremflickr.com/3684/2116?lock=4686991638584456",
      languageLocale: "es",
      lastName: "Prohaska",
      locations: [],
      maritalStatus: "MARRIED",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "a70413d9-b815-4ba9-8f48-c242e3ecee27",
          namespace: "custom",
          slug: "custom_property",
          value: "tenetur",
        },
      ],
      name: "Zetta Prohaska",
      pronouns: "she/her",
      relationships: [
        {
          emails: [
            {
              email: "Deshaun.Sanford24@yahoo.com",
            },
            {
              email: "Rebeca.Dibbert11@hotmail.com",
            },
            {
              email: "Hester80@gmail.com",
            },
          ],
          name: "Automotive",
          type: "EMERGENCY",
        },
        {
          emails: [
            {
              email: "Benedict_Wisozk83@hotmail.com",
            },
            {
              email: "Princess_Rath43@gmail.com",
            },
            {
              email: "Elmira92@yahoo.com",
            },
          ],
          name: "Music",
          type: "FRIEND",
        },
        {
          emails: [
            {
              email: "Jane30@gmail.com",
            },
          ],
          name: "Jewelry",
          type: "SIBLING",
        },
      ],
      salutation: "Miss",
      ssnSin: "yMRtj0Q3xO",
      storageQuotaAllocated: 3674489,
      storageQuotaAvailable: 7748057,
      storageQuotaUsed: 301727,
      telephones: [
        {
          telephone: "(409) 801-3705",
          type: "FAX",
        },
      ],
      terminationReason: "Communis adnuo damnatio atavus terebro acies canis cogito triumphus creber temptatio defendo cubo amissio paulatim corroboro.",
      timeoffDaysTotal: 12,
      timeoffDaysUsed: 6,
      timezone: "Africa/Harare",
      title: "Investor Paradigm Liaison",
      updatedAt: new Date("2022-02-19T07:02:15.376Z"),
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