# Hris

## Overview

### Available Operations

* [createHrisAttendance](#createhrisattendance) - Create an attendance
* [createHrisBankaccount](#createhrisbankaccount) - Create a bankaccount
* [createHrisBenefit](#createhrisbenefit) - Create a benefit
* [createHrisCompany](#createhriscompany) - Create a company
* [createHrisDeduction](#createhrisdeduction) - Create a deduction
* [createHrisDevice](#createhrisdevice) - Create a device
* [createHrisDocument](#createhrisdocument) - Create a document
* [createHrisEmployee](#createhrisemployee) - Create an employee
* [createHrisGroup](#createhrisgroup) - Create a group
* [createHrisLocation](#createhrislocation) - Create a location
* [createHrisTaxonomy](#createhristaxonomy) - Create a taxonomy
* [createHrisTimeoff](#createhristimeoff) - Create a timeoff
* [createHrisTimeshift](#createhristimeshift) - Create a timeshift
* [getHrisAttendance](#gethrisattendance) - Retrieve an attendance
* [getHrisBankaccount](#gethrisbankaccount) - Retrieve a bankaccount
* [getHrisBenefit](#gethrisbenefit) - Retrieve a benefit
* [getHrisCompany](#gethriscompany) - Retrieve a company
* [getHrisDeduction](#gethrisdeduction) - Retrieve a deduction
* [getHrisDevice](#gethrisdevice) - Retrieve a device
* [getHrisDocument](#gethrisdocument) - Retrieve a document
* [getHrisEmployee](#gethrisemployee) - Retrieve an employee
* [getHrisGroup](#gethrisgroup) - Retrieve a group
* [getHrisLocation](#gethrislocation) - Retrieve a location
* [getHrisPayslip](#gethrispayslip) - Retrieve a payslip
* [getHrisTaxonomy](#gethristaxonomy) - Retrieve a taxonomy
* [getHrisTimeoff](#gethristimeoff) - Retrieve a timeoff
* [getHrisTimeshift](#gethristimeshift) - Retrieve a timeshift
* [listHrisAttendances](#listhrisattendances) - List all attendances
* [listHrisBankaccounts](#listhrisbankaccounts) - List all bankaccounts
* [listHrisBenefits](#listhrisbenefits) - List all benefits
* [listHrisCompanies](#listhriscompanies) - List all companies
* [listHrisDeductions](#listhrisdeductions) - List all deductions
* [listHrisDevices](#listhrisdevices) - List all devices
* [listHrisDocuments](#listhrisdocuments) - List all documents
* [listHrisEmployees](#listhrisemployees) - List all employees
* [listHrisGroups](#listhrisgroups) - List all groups
* [listHrisLocations](#listhrislocations) - List all locations
* [listHrisPayslips](#listhrispayslips) - List all payslips
* [listHrisTaxonomies](#listhristaxonomies) - List all taxonomies
* [listHrisTimeoffs](#listhristimeoffs) - List all timeoffs
* [listHrisTimeshifts](#listhristimeshifts) - List all timeshifts
* [patchHrisAttendance](#patchhrisattendance) - Update an attendance
* [patchHrisBankaccount](#patchhrisbankaccount) - Update a bankaccount
* [patchHrisBenefit](#patchhrisbenefit) - Update a benefit
* [patchHrisCompany](#patchhriscompany) - Update a company
* [patchHrisDeduction](#patchhrisdeduction) - Update a deduction
* [patchHrisDevice](#patchhrisdevice) - Update a device
* [patchHrisDocument](#patchhrisdocument) - Update a document
* [patchHrisEmployee](#patchhrisemployee) - Update an employee
* [patchHrisGroup](#patchhrisgroup) - Update a group
* [patchHrisLocation](#patchhrislocation) - Update a location
* [patchHrisTimeoff](#patchhristimeoff) - Update a timeoff
* [patchHrisTimeshift](#patchhristimeshift) - Update a timeshift
* [removeHrisAttendance](#removehrisattendance) - Remove an attendance
* [removeHrisBankaccount](#removehrisbankaccount) - Remove a bankaccount
* [removeHrisBenefit](#removehrisbenefit) - Remove a benefit
* [removeHrisCompany](#removehriscompany) - Remove a company
* [removeHrisDeduction](#removehrisdeduction) - Remove a deduction
* [removeHrisDevice](#removehrisdevice) - Remove a device
* [removeHrisDocument](#removehrisdocument) - Remove a document
* [removeHrisEmployee](#removehrisemployee) - Remove an employee
* [removeHrisGroup](#removehrisgroup) - Remove a group
* [removeHrisLocation](#removehrislocation) - Remove a location
* [removeHrisTimeoff](#removehristimeoff) - Remove a timeoff
* [removeHrisTimeshift](#removehristimeshift) - Remove a timeshift
* [updateHrisAttendance](#updatehrisattendance) - Update an attendance
* [updateHrisBankaccount](#updatehrisbankaccount) - Update a bankaccount
* [updateHrisBenefit](#updatehrisbenefit) - Update a benefit
* [updateHrisCompany](#updatehriscompany) - Update a company
* [updateHrisDeduction](#updatehrisdeduction) - Update a deduction
* [updateHrisDevice](#updatehrisdevice) - Update a device
* [updateHrisDocument](#updatehrisdocument) - Update a document
* [updateHrisEmployee](#updatehrisemployee) - Update an employee
* [updateHrisGroup](#updatehrisgroup) - Update a group
* [updateHrisLocation](#updatehrislocation) - Update a location
* [updateHrisTimeoff](#updatehristimeoff) - Update a timeoff
* [updateHrisTimeshift](#updatehristimeshift) - Update a timeshift

## createHrisAttendance

Create an attendance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisAttendance" method="post" path="/hris/{connection_id}/attendance" example="hris_attendance" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.createHrisAttendance({
    hrisAttendance: {
      address: {
        address1: "14108 Allie Flats",
        city: "Kearaborough",
        countryCode: "US",
        postalCode: "23844-2344",
        region: "Tennessee",
        regionCode: "CA",
      },
      approvedAt: new Date("2021-08-13T10:37:48.058Z"),
      breaks: [
        {
          durationMinutes: 12,
          endAt: new Date("2023-10-23T01:21:03.436Z"),
          id: "d60a1001-5a8a-4991-8c21-f4da6036cc87",
          isPaid: true,
          name: "Lunch",
          startAt: new Date("2023-10-16T05:42:48.640Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "UGX",
      declaredTipsAmount: 161,
      employeeUserId: "<id>",
      endAt: new Date("2024-04-06T14:46:16.021Z"),
      hourlyRate: 53,
      hours: 10,
      id: "7bc49690-f92f-4d72-88f6-ef2714786716",
      jobName: "Global Creative Supervisor",
      nonCashTipsAmount: 54,
      startAt: new Date("2021-11-09T11:26:44.989Z"),
      status: "CLOSED",
      timezone: "America/Atikokan",
      updatedAt: new Date("2022-01-17T03:11:50.450Z"),
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
import { hrisCreateHrisAttendance } from "@unified-api/typescript-sdk/funcs/hrisCreateHrisAttendance.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisCreateHrisAttendance(unifiedTo, {
    hrisAttendance: {
      address: {
        address1: "14108 Allie Flats",
        city: "Kearaborough",
        countryCode: "US",
        postalCode: "23844-2344",
        region: "Tennessee",
        regionCode: "CA",
      },
      approvedAt: new Date("2021-08-13T10:37:48.058Z"),
      breaks: [
        {
          durationMinutes: 12,
          endAt: new Date("2023-10-23T01:21:03.436Z"),
          id: "d60a1001-5a8a-4991-8c21-f4da6036cc87",
          isPaid: true,
          name: "Lunch",
          startAt: new Date("2023-10-16T05:42:48.640Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "UGX",
      declaredTipsAmount: 161,
      employeeUserId: "<id>",
      endAt: new Date("2024-04-06T14:46:16.021Z"),
      hourlyRate: 53,
      hours: 10,
      id: "7bc49690-f92f-4d72-88f6-ef2714786716",
      jobName: "Global Creative Supervisor",
      nonCashTipsAmount: 54,
      startAt: new Date("2021-11-09T11:26:44.989Z"),
      status: "CLOSED",
      timezone: "America/Atikokan",
      updatedAt: new Date("2022-01-17T03:11:50.450Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateHrisAttendance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisAttendanceRequest](../../sdk/models/operations/createhrisattendancerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisAttendance](../../sdk/models/shared/hrisattendance.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createHrisBankaccount

Create a bankaccount

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisBankaccount" method="post" path="/hris/{connection_id}/bankaccount" example="hris_bankaccount" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.createHrisBankaccount({
    hrisBankaccount: {
      accountNumber: "****3777",
      accountNumberLast4: "3777",
      accountType: "CHECKING",
      bankName: "Huel Group",
      createdAt: new Date("2019-11-16T16:43:45.976Z"),
      id: "ac57849e-400d-4445-a9c6-3fcd13e850b9",
      isPrimary: false,
      name: "Checking Account",
      routingNumber: "448650724",
      updatedAt: new Date("2025-06-05T04:25:38.957Z"),
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
import { hrisCreateHrisBankaccount } from "@unified-api/typescript-sdk/funcs/hrisCreateHrisBankaccount.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisCreateHrisBankaccount(unifiedTo, {
    hrisBankaccount: {
      accountNumber: "****3777",
      accountNumberLast4: "3777",
      accountType: "CHECKING",
      bankName: "Huel Group",
      createdAt: new Date("2019-11-16T16:43:45.976Z"),
      id: "ac57849e-400d-4445-a9c6-3fcd13e850b9",
      isPrimary: false,
      name: "Checking Account",
      routingNumber: "448650724",
      updatedAt: new Date("2025-06-05T04:25:38.957Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateHrisBankaccount failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisBankaccountRequest](../../sdk/models/operations/createhrisbankaccountrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisBankaccount](../../sdk/models/shared/hrisbankaccount.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createHrisBenefit

Create a benefit

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisBenefit" method="post" path="/hris/{connection_id}/benefit" example="hris_benefit" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.createHrisBenefit({
    hrisBenefit: {
      coverageLevel: "EMPLOYEE_SPOUSE",
      createdAt: new Date("2020-06-11T01:24:05.654Z"),
      currency: "JOD",
      description: "Vomito voluptas dolor sed.",
      employerContributionAmount: 185006,
      employerContributionMaxAmount: 179093,
      employerContributionType: "PERCENTAGE",
      frequency: "HOUR",
      id: "4aba20e0-3e53-4476-9680-c3ec1a9dbbc7",
      isActive: false,
      name: "Frozen Wooden Ball",
      tax: "PRE_TAX",
      type: "GARNISHMENT",
      updatedAt: new Date("2023-03-06T20:05:42.327Z"),
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
import { hrisCreateHrisBenefit } from "@unified-api/typescript-sdk/funcs/hrisCreateHrisBenefit.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisCreateHrisBenefit(unifiedTo, {
    hrisBenefit: {
      coverageLevel: "EMPLOYEE_SPOUSE",
      createdAt: new Date("2020-06-11T01:24:05.654Z"),
      currency: "JOD",
      description: "Vomito voluptas dolor sed.",
      employerContributionAmount: 185006,
      employerContributionMaxAmount: 179093,
      employerContributionType: "PERCENTAGE",
      frequency: "HOUR",
      id: "4aba20e0-3e53-4476-9680-c3ec1a9dbbc7",
      isActive: false,
      name: "Frozen Wooden Ball",
      tax: "PRE_TAX",
      type: "GARNISHMENT",
      updatedAt: new Date("2023-03-06T20:05:42.327Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateHrisBenefit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisBenefitRequest](../../sdk/models/operations/createhrisbenefitrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisBenefit](../../sdk/models/shared/hrisbenefit.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createHrisCompany

Create a company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisCompany" method="post" path="/hris/{connection_id}/company" example="hris_company" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.createHrisCompany({
    hrisCompany: {
      address: {
        address1: "2549 Church Walk",
        city: "Lake Nettiebury",
        countryCode: "US",
        postalCode: "32877-4898",
        region: "Idaho",
        regionCode: "PA",
      },
      createdAt: new Date("2021-05-02T22:27:38.970Z"),
      id: "a4c05c48-9ff0-4134-a18a-1ed2088b8510",
      legalName: "Schultz LLC",
      name: "Gottlieb Group",
      updatedAt: new Date("2026-09-06T17:54:03.360Z"),
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
import { companyCreateHrisCompany } from "@unified-api/typescript-sdk/funcs/companyCreateHrisCompany.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await companyCreateHrisCompany(unifiedTo, {
    hrisCompany: {
      address: {
        address1: "2549 Church Walk",
        city: "Lake Nettiebury",
        countryCode: "US",
        postalCode: "32877-4898",
        region: "Idaho",
        regionCode: "PA",
      },
      createdAt: new Date("2021-05-02T22:27:38.970Z"),
      id: "a4c05c48-9ff0-4134-a18a-1ed2088b8510",
      legalName: "Schultz LLC",
      name: "Gottlieb Group",
      updatedAt: new Date("2026-09-06T17:54:03.360Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyCreateHrisCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisCompanyRequest](../../sdk/models/operations/createhriscompanyrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisCompany](../../sdk/models/shared/hriscompany.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createHrisDeduction

Create a deduction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisDeduction" method="post" path="/hris/{connection_id}/deduction" example="hris_deduction" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.createHrisDeduction({
    hrisDeduction: {
      amount: 139655,
      coverageLevel: "EMPLOYEE_ONLY",
      createdAt: new Date("2020-02-05T01:46:31.384Z"),
      endAt: new Date("2026-05-23T18:41:25.680Z"),
      frequency: "MONTH",
      id: "3ad03909-989d-4123-a3ba-7e68d8bfb874",
      isActive: false,
      notes: "Carmen desidero.",
      startAt: new Date("2025-02-18T20:29:59.692Z"),
      type: "FIXED",
      updatedAt: new Date("2024-03-02T12:31:12.361Z"),
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
import { hrisCreateHrisDeduction } from "@unified-api/typescript-sdk/funcs/hrisCreateHrisDeduction.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisCreateHrisDeduction(unifiedTo, {
    hrisDeduction: {
      amount: 139655,
      coverageLevel: "EMPLOYEE_ONLY",
      createdAt: new Date("2020-02-05T01:46:31.384Z"),
      endAt: new Date("2026-05-23T18:41:25.680Z"),
      frequency: "MONTH",
      id: "3ad03909-989d-4123-a3ba-7e68d8bfb874",
      isActive: false,
      notes: "Carmen desidero.",
      startAt: new Date("2025-02-18T20:29:59.692Z"),
      type: "FIXED",
      updatedAt: new Date("2024-03-02T12:31:12.361Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateHrisDeduction failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisDeductionRequest](../../sdk/models/operations/createhrisdeductionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisDeduction](../../sdk/models/shared/hrisdeduction.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createHrisDevice

Create a device

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisDevice" method="post" path="/hris/{connection_id}/device" example="hris_device" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.createHrisDevice({
    hrisDevice: {
      adminUserIds: [],
      assetTag: "dpho9OuFNG",
      createdAt: new Date("2019-04-04T17:11:40.322Z"),
      hasAntivirus: false,
      hasFirewall: true,
      hasHdEncrypted: true,
      hasPasswordManager: true,
      hasScreenlock: true,
      id: "129f267d-5a49-4049-9bd3-24499bf23f64",
      isMissing: false,
      manufacturer: "Sanford - Hamill",
      model: "Refined",
      name: "cross_contamination_if.rar",
      os: "monitor",
      osVersion: "1.12.16",
      updatedAt: new Date("2023-05-21T12:28:24.530Z"),
      version: "2.20.17",
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
import { hrisCreateHrisDevice } from "@unified-api/typescript-sdk/funcs/hrisCreateHrisDevice.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisCreateHrisDevice(unifiedTo, {
    hrisDevice: {
      adminUserIds: [],
      assetTag: "dpho9OuFNG",
      createdAt: new Date("2019-04-04T17:11:40.322Z"),
      hasAntivirus: false,
      hasFirewall: true,
      hasHdEncrypted: true,
      hasPasswordManager: true,
      hasScreenlock: true,
      id: "129f267d-5a49-4049-9bd3-24499bf23f64",
      isMissing: false,
      manufacturer: "Sanford - Hamill",
      model: "Refined",
      name: "cross_contamination_if.rar",
      os: "monitor",
      osVersion: "1.12.16",
      updatedAt: new Date("2023-05-21T12:28:24.530Z"),
      version: "2.20.17",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateHrisDevice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisDeviceRequest](../../sdk/models/operations/createhrisdevicerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisDevice](../../sdk/models/shared/hrisdevice.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createHrisDocument

Create a document

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisDocument" method="post" path="/hris/{connection_id}/document" example="hris_document" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.createHrisDocument({
    hrisDocument: {
      createdAt: new Date("2022-10-27T11:47:26.086Z"),
      documentUrl: "https://sore-decision.biz/",
      filename: "ridge_forager.xsl",
      id: "853c0405-9602-486f-9c22-ef706e267a21",
      type: "POLICY",
      updatedAt: new Date("2025-09-17T17:23:24.232Z"),
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
import { documentCreateHrisDocument } from "@unified-api/typescript-sdk/funcs/documentCreateHrisDocument.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await documentCreateHrisDocument(unifiedTo, {
    hrisDocument: {
      createdAt: new Date("2022-10-27T11:47:26.086Z"),
      documentUrl: "https://sore-decision.biz/",
      filename: "ridge_forager.xsl",
      id: "853c0405-9602-486f-9c22-ef706e267a21",
      type: "POLICY",
      updatedAt: new Date("2025-09-17T17:23:24.232Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentCreateHrisDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisDocumentRequest](../../sdk/models/operations/createhrisdocumentrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisDocument](../../sdk/models/shared/hrisdocument.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

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
  const result = await unifiedTo.hris.createHrisEmployee({
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
      hiredAt: new Date("2023-05-11T03:05:39.544Z"),
      id: "346d2ceb-8d36-4332-9c91-c03c342ea6b7",
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
          id: "ecb0c404-4b30-4648-85a8-37f3f9918959",
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
      updatedAt: new Date("2022-02-19T14:15:16.510Z"),
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
      hiredAt: new Date("2023-05-11T03:05:39.544Z"),
      id: "346d2ceb-8d36-4332-9c91-c03c342ea6b7",
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
          id: "ecb0c404-4b30-4648-85a8-37f3f9918959",
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
      updatedAt: new Date("2022-02-19T14:15:16.510Z"),
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

## createHrisGroup

Create a group

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisGroup" method="post" path="/hris/{connection_id}/group" example="hris_group" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.createHrisGroup({
    hrisGroup: {
      createdAt: new Date("2023-11-01T13:13:40.714Z"),
      description: "Absorbeo casso.",
      id: "8aaf9bb5-d9e0-4745-a861-5ab694b7bd28",
      isActive: false,
      name: "Games",
      type: "BUSINESS_UNIT",
      updatedAt: new Date("2026-04-24T08:20:05.649Z"),
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
import { groupCreateHrisGroup } from "@unified-api/typescript-sdk/funcs/groupCreateHrisGroup.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await groupCreateHrisGroup(unifiedTo, {
    hrisGroup: {
      createdAt: new Date("2023-11-01T13:13:40.714Z"),
      description: "Absorbeo casso.",
      id: "8aaf9bb5-d9e0-4745-a861-5ab694b7bd28",
      isActive: false,
      name: "Games",
      type: "BUSINESS_UNIT",
      updatedAt: new Date("2026-04-24T08:20:05.649Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupCreateHrisGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisGroupRequest](../../sdk/models/operations/createhrisgrouprequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisGroup](../../sdk/models/shared/hrisgroup.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createHrisLocation

Create a location

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisLocation" method="post" path="/hris/{connection_id}/location" example="hris_location" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.createHrisLocation({
    hrisLocation: {
      address: {
        address1: "2743 Connelly Summit",
        address2: "Apt. 350",
        city: "Titusville",
        countryCode: "US",
        postalCode: "16154-1095",
        region: "Oregon",
        regionCode: "AL",
      },
      createdAt: new Date("2021-07-18T10:32:01.414Z"),
      currency: "MUR",
      description: "Acervus caries.",
      externalIdentifier: "1dce9fd9-f80e-4e0a-9d42-da67300b9661",
      id: "d0f0b5e3-6e2f-4cb0-b7e9-2c37d630b8b8",
      isActive: true,
      isHq: false,
      languageLocale: "fr",
      name: "adhuc",
      telephones: [
        {
          telephone: "(710) 550-6997",
          type: "FAX",
        },
        {
          telephone: "(208) 555-8542",
          type: "HOME",
        },
        {
          telephone: "(712) 473-5482",
          type: "FAX",
        },
      ],
      timezone: "America/Guyana",
      updatedAt: new Date("2023-06-09T08:17:29.706Z"),
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
import { locationCreateHrisLocation } from "@unified-api/typescript-sdk/funcs/locationCreateHrisLocation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await locationCreateHrisLocation(unifiedTo, {
    hrisLocation: {
      address: {
        address1: "2743 Connelly Summit",
        address2: "Apt. 350",
        city: "Titusville",
        countryCode: "US",
        postalCode: "16154-1095",
        region: "Oregon",
        regionCode: "AL",
      },
      createdAt: new Date("2021-07-18T10:32:01.414Z"),
      currency: "MUR",
      description: "Acervus caries.",
      externalIdentifier: "1dce9fd9-f80e-4e0a-9d42-da67300b9661",
      id: "d0f0b5e3-6e2f-4cb0-b7e9-2c37d630b8b8",
      isActive: true,
      isHq: false,
      languageLocale: "fr",
      name: "adhuc",
      telephones: [
        {
          telephone: "(710) 550-6997",
          type: "FAX",
        },
        {
          telephone: "(208) 555-8542",
          type: "HOME",
        },
        {
          telephone: "(712) 473-5482",
          type: "FAX",
        },
      ],
      timezone: "America/Guyana",
      updatedAt: new Date("2023-06-09T08:17:29.706Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("locationCreateHrisLocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisLocationRequest](../../sdk/models/operations/createhrislocationrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisLocation](../../sdk/models/shared/hrislocation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createHrisTaxonomy

Create a taxonomy

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisTaxonomy" method="post" path="/hris/{connection_id}/taxonomy" example="hris_taxonomy" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.createHrisTaxonomy({
    hrisTaxonomy: {
      createdAt: new Date("2022-06-23T02:10:00.789Z"),
      description: "Apto demonstro audacia adstringo cursim tristis solio careo.",
      domain: "Electronics",
      id: "ede085db-5709-4d53-a490-746f3de5be17",
      isActive: false,
      name: "International Functionality Architect",
      parentId: "6524b2a7-6520-4e15-8c4e-1aa6793db837",
      roleIds: [
        "2b1ef757-eb4c-4207-8af1-929afe49cd65",
      ],
      subcategory: "Bamboo",
      type: "KNOWLEDGE",
      updatedAt: new Date("2023-05-22T09:26:36.352Z"),
      url: "https://our-polarisation.name",
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
import { taxonomyCreateHrisTaxonomy } from "@unified-api/typescript-sdk/funcs/taxonomyCreateHrisTaxonomy.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taxonomyCreateHrisTaxonomy(unifiedTo, {
    hrisTaxonomy: {
      createdAt: new Date("2022-06-23T02:10:00.789Z"),
      description: "Apto demonstro audacia adstringo cursim tristis solio careo.",
      domain: "Electronics",
      id: "ede085db-5709-4d53-a490-746f3de5be17",
      isActive: false,
      name: "International Functionality Architect",
      parentId: "6524b2a7-6520-4e15-8c4e-1aa6793db837",
      roleIds: [
        "2b1ef757-eb4c-4207-8af1-929afe49cd65",
      ],
      subcategory: "Bamboo",
      type: "KNOWLEDGE",
      updatedAt: new Date("2023-05-22T09:26:36.352Z"),
      url: "https://our-polarisation.name",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxonomyCreateHrisTaxonomy failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisTaxonomyRequest](../../sdk/models/operations/createhristaxonomyrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTaxonomy](../../sdk/models/shared/hristaxonomy.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createHrisTimeoff

Create a timeoff

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisTimeoff" method="post" path="/hris/{connection_id}/timeoff" example="hris_timeoff" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.createHrisTimeoff({
    hrisTimeoff: {
      approvedAt: new Date("2022-02-20T22:37:32.140Z"),
      comments: "Blandior ventus curiositas amplitudo.",
      createdAt: new Date("2021-10-06T18:00:20.615Z"),
      duration: 4,
      durationType: "DAY",
      endAt: new Date("2024-12-08T03:12:16.434Z"),
      id: "5e2b1b3c-9a46-44a5-94f6-03cee7d458af",
      isPaid: true,
      originalType: "acerbitas ut",
      reason: "verto",
      startAt: new Date("2023-08-23T14:51:13.090Z"),
      status: "DENIED",
      type: "IN_LIEU",
      updatedAt: new Date("2022-07-07T22:44:35.352Z"),
      userId: "<id>",
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
import { hrisCreateHrisTimeoff } from "@unified-api/typescript-sdk/funcs/hrisCreateHrisTimeoff.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisCreateHrisTimeoff(unifiedTo, {
    hrisTimeoff: {
      approvedAt: new Date("2022-02-20T22:37:32.140Z"),
      comments: "Blandior ventus curiositas amplitudo.",
      createdAt: new Date("2021-10-06T18:00:20.615Z"),
      duration: 4,
      durationType: "DAY",
      endAt: new Date("2024-12-08T03:12:16.434Z"),
      id: "5e2b1b3c-9a46-44a5-94f6-03cee7d458af",
      isPaid: true,
      originalType: "acerbitas ut",
      reason: "verto",
      startAt: new Date("2023-08-23T14:51:13.090Z"),
      status: "DENIED",
      type: "IN_LIEU",
      updatedAt: new Date("2022-07-07T22:44:35.352Z"),
      userId: "<id>",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateHrisTimeoff failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisTimeoffRequest](../../sdk/models/operations/createhristimeoffrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTimeoff](../../sdk/models/shared/hristimeoff.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createHrisTimeshift

Create a timeshift

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisTimeshift" method="post" path="/hris/{connection_id}/timeshift" example="hris_timeshift" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.createHrisTimeshift({
    hrisTimeshift: {
      approvedAt: new Date("2023-06-06T01:52:38.509Z"),
      compensation: [
        {
          amount: 76761,
          currency: "JPY",
          frequency: "HOUR",
          notes: "Annus adficio suasoria architecto aggero.",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-07-01T23:53:15.738Z"),
      employeeUserId: "<id>",
      endAt: new Date("2026-08-26T05:07:47.620Z"),
      hours: 8,
      id: "389a8fac-d525-4504-b833-b86522a5fe4d",
      isApproved: true,
      startAt: new Date("2023-06-25T06:59:35.775Z"),
      updatedAt: new Date("2021-06-23T02:35:54.485Z"),
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
import { hrisCreateHrisTimeshift } from "@unified-api/typescript-sdk/funcs/hrisCreateHrisTimeshift.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisCreateHrisTimeshift(unifiedTo, {
    hrisTimeshift: {
      approvedAt: new Date("2023-06-06T01:52:38.509Z"),
      compensation: [
        {
          amount: 76761,
          currency: "JPY",
          frequency: "HOUR",
          notes: "Annus adficio suasoria architecto aggero.",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-07-01T23:53:15.738Z"),
      employeeUserId: "<id>",
      endAt: new Date("2026-08-26T05:07:47.620Z"),
      hours: 8,
      id: "389a8fac-d525-4504-b833-b86522a5fe4d",
      isApproved: true,
      startAt: new Date("2023-06-25T06:59:35.775Z"),
      updatedAt: new Date("2021-06-23T02:35:54.485Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateHrisTimeshift failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisTimeshiftRequest](../../sdk/models/operations/createhristimeshiftrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTimeshift](../../sdk/models/shared/hristimeshift.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHrisAttendance

Retrieve an attendance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisAttendance" method="get" path="/hris/{connection_id}/attendance/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.getHrisAttendance({
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
import { hrisGetHrisAttendance } from "@unified-api/typescript-sdk/funcs/hrisGetHrisAttendance.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisGetHrisAttendance(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetHrisAttendance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisAttendanceRequest](../../sdk/models/operations/gethrisattendancerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisAttendance](../../sdk/models/shared/hrisattendance.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHrisBankaccount

Retrieve a bankaccount

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisBankaccount" method="get" path="/hris/{connection_id}/bankaccount/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.getHrisBankaccount({
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
import { hrisGetHrisBankaccount } from "@unified-api/typescript-sdk/funcs/hrisGetHrisBankaccount.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisGetHrisBankaccount(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetHrisBankaccount failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisBankaccountRequest](../../sdk/models/operations/gethrisbankaccountrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisBankaccount](../../sdk/models/shared/hrisbankaccount.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHrisBenefit

Retrieve a benefit

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisBenefit" method="get" path="/hris/{connection_id}/benefit/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.getHrisBenefit({
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
import { hrisGetHrisBenefit } from "@unified-api/typescript-sdk/funcs/hrisGetHrisBenefit.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisGetHrisBenefit(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetHrisBenefit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisBenefitRequest](../../sdk/models/operations/gethrisbenefitrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisBenefit](../../sdk/models/shared/hrisbenefit.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHrisCompany

Retrieve a company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisCompany" method="get" path="/hris/{connection_id}/company/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.getHrisCompany({
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
import { companyGetHrisCompany } from "@unified-api/typescript-sdk/funcs/companyGetHrisCompany.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await companyGetHrisCompany(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyGetHrisCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisCompanyRequest](../../sdk/models/operations/gethriscompanyrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisCompany](../../sdk/models/shared/hriscompany.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHrisDeduction

Retrieve a deduction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisDeduction" method="get" path="/hris/{connection_id}/deduction/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.getHrisDeduction({
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
import { hrisGetHrisDeduction } from "@unified-api/typescript-sdk/funcs/hrisGetHrisDeduction.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisGetHrisDeduction(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetHrisDeduction failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisDeductionRequest](../../sdk/models/operations/gethrisdeductionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisDeduction](../../sdk/models/shared/hrisdeduction.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHrisDevice

Retrieve a device

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisDevice" method="get" path="/hris/{connection_id}/device/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.getHrisDevice({
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
import { hrisGetHrisDevice } from "@unified-api/typescript-sdk/funcs/hrisGetHrisDevice.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisGetHrisDevice(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetHrisDevice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisDeviceRequest](../../sdk/models/operations/gethrisdevicerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisDevice](../../sdk/models/shared/hrisdevice.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHrisDocument

Retrieve a document

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisDocument" method="get" path="/hris/{connection_id}/document/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.getHrisDocument({
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
import { documentGetHrisDocument } from "@unified-api/typescript-sdk/funcs/documentGetHrisDocument.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await documentGetHrisDocument(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentGetHrisDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisDocumentRequest](../../sdk/models/operations/gethrisdocumentrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisDocument](../../sdk/models/shared/hrisdocument.md)\>**

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
  const result = await unifiedTo.hris.getHrisEmployee({
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

## getHrisGroup

Retrieve a group

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisGroup" method="get" path="/hris/{connection_id}/group/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.getHrisGroup({
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
import { groupGetHrisGroup } from "@unified-api/typescript-sdk/funcs/groupGetHrisGroup.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await groupGetHrisGroup(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupGetHrisGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisGroupRequest](../../sdk/models/operations/gethrisgrouprequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisGroup](../../sdk/models/shared/hrisgroup.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHrisLocation

Retrieve a location

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisLocation" method="get" path="/hris/{connection_id}/location/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.getHrisLocation({
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
import { locationGetHrisLocation } from "@unified-api/typescript-sdk/funcs/locationGetHrisLocation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await locationGetHrisLocation(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("locationGetHrisLocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisLocationRequest](../../sdk/models/operations/gethrislocationrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisLocation](../../sdk/models/shared/hrislocation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHrisPayslip

Retrieve a payslip

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisPayslip" method="get" path="/hris/{connection_id}/payslip/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.getHrisPayslip({
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
import { hrisGetHrisPayslip } from "@unified-api/typescript-sdk/funcs/hrisGetHrisPayslip.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisGetHrisPayslip(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetHrisPayslip failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisPayslipRequest](../../sdk/models/operations/gethrispaysliprequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisPayslip](../../sdk/models/shared/hrispayslip.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHrisTaxonomy

Retrieve a taxonomy

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisTaxonomy" method="get" path="/hris/{connection_id}/taxonomy/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.getHrisTaxonomy({
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
import { taxonomyGetHrisTaxonomy } from "@unified-api/typescript-sdk/funcs/taxonomyGetHrisTaxonomy.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taxonomyGetHrisTaxonomy(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxonomyGetHrisTaxonomy failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisTaxonomyRequest](../../sdk/models/operations/gethristaxonomyrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTaxonomy](../../sdk/models/shared/hristaxonomy.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHrisTimeoff

Retrieve a timeoff

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisTimeoff" method="get" path="/hris/{connection_id}/timeoff/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.getHrisTimeoff({
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
import { hrisGetHrisTimeoff } from "@unified-api/typescript-sdk/funcs/hrisGetHrisTimeoff.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisGetHrisTimeoff(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetHrisTimeoff failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisTimeoffRequest](../../sdk/models/operations/gethristimeoffrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTimeoff](../../sdk/models/shared/hristimeoff.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHrisTimeshift

Retrieve a timeshift

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisTimeshift" method="get" path="/hris/{connection_id}/timeshift/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.getHrisTimeshift({
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
import { hrisGetHrisTimeshift } from "@unified-api/typescript-sdk/funcs/hrisGetHrisTimeshift.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisGetHrisTimeshift(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetHrisTimeshift failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisTimeshiftRequest](../../sdk/models/operations/gethristimeshiftrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTimeshift](../../sdk/models/shared/hristimeshift.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHrisAttendances

List all attendances

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisAttendances" method="get" path="/hris/{connection_id}/attendance" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.listHrisAttendances({
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
import { hrisListHrisAttendances } from "@unified-api/typescript-sdk/funcs/hrisListHrisAttendances.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisListHrisAttendances(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisListHrisAttendances failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisAttendancesRequest](../../sdk/models/operations/listhrisattendancesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisAttendance[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHrisBankaccounts

List all bankaccounts

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisBankaccounts" method="get" path="/hris/{connection_id}/bankaccount" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.listHrisBankaccounts({
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
import { hrisListHrisBankaccounts } from "@unified-api/typescript-sdk/funcs/hrisListHrisBankaccounts.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisListHrisBankaccounts(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisListHrisBankaccounts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisBankaccountsRequest](../../sdk/models/operations/listhrisbankaccountsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisBankaccount[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHrisBenefits

List all benefits

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisBenefits" method="get" path="/hris/{connection_id}/benefit" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.listHrisBenefits({
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
import { hrisListHrisBenefits } from "@unified-api/typescript-sdk/funcs/hrisListHrisBenefits.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisListHrisBenefits(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisListHrisBenefits failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisBenefitsRequest](../../sdk/models/operations/listhrisbenefitsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisBenefit[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHrisCompanies

List all companies

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisCompanies" method="get" path="/hris/{connection_id}/company" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.listHrisCompanies({
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
import { companyListHrisCompanies } from "@unified-api/typescript-sdk/funcs/companyListHrisCompanies.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await companyListHrisCompanies(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyListHrisCompanies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisCompaniesRequest](../../sdk/models/operations/listhriscompaniesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisCompany[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHrisDeductions

List all deductions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisDeductions" method="get" path="/hris/{connection_id}/deduction" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.listHrisDeductions({
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
import { hrisListHrisDeductions } from "@unified-api/typescript-sdk/funcs/hrisListHrisDeductions.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisListHrisDeductions(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisListHrisDeductions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisDeductionsRequest](../../sdk/models/operations/listhrisdeductionsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisDeduction[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHrisDevices

List all devices

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisDevices" method="get" path="/hris/{connection_id}/device" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.listHrisDevices({
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
import { hrisListHrisDevices } from "@unified-api/typescript-sdk/funcs/hrisListHrisDevices.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisListHrisDevices(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisListHrisDevices failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisDevicesRequest](../../sdk/models/operations/listhrisdevicesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisDevice[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHrisDocuments

List all documents

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisDocuments" method="get" path="/hris/{connection_id}/document" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.listHrisDocuments({
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
import { documentListHrisDocuments } from "@unified-api/typescript-sdk/funcs/documentListHrisDocuments.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await documentListHrisDocuments(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentListHrisDocuments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisDocumentsRequest](../../sdk/models/operations/listhrisdocumentsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisDocument[]](../../models/.md)\>**

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
  const result = await unifiedTo.hris.listHrisEmployees({
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

## listHrisGroups

List all groups

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisGroups" method="get" path="/hris/{connection_id}/group" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.listHrisGroups({
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
import { groupListHrisGroups } from "@unified-api/typescript-sdk/funcs/groupListHrisGroups.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await groupListHrisGroups(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupListHrisGroups failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisGroupsRequest](../../sdk/models/operations/listhrisgroupsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisGroup[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHrisLocations

List all locations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisLocations" method="get" path="/hris/{connection_id}/location" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.listHrisLocations({
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
import { locationListHrisLocations } from "@unified-api/typescript-sdk/funcs/locationListHrisLocations.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await locationListHrisLocations(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("locationListHrisLocations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisLocationsRequest](../../sdk/models/operations/listhrislocationsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisLocation[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHrisPayslips

List all payslips

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisPayslips" method="get" path="/hris/{connection_id}/payslip" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.listHrisPayslips({
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
import { hrisListHrisPayslips } from "@unified-api/typescript-sdk/funcs/hrisListHrisPayslips.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisListHrisPayslips(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisListHrisPayslips failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisPayslipsRequest](../../sdk/models/operations/listhrispayslipsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisPayslip[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHrisTaxonomies

List all taxonomies

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisTaxonomies" method="get" path="/hris/{connection_id}/taxonomy" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.listHrisTaxonomies({
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
import { taxonomyListHrisTaxonomies } from "@unified-api/typescript-sdk/funcs/taxonomyListHrisTaxonomies.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taxonomyListHrisTaxonomies(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxonomyListHrisTaxonomies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisTaxonomiesRequest](../../sdk/models/operations/listhristaxonomiesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTaxonomy[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHrisTimeoffs

List all timeoffs

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisTimeoffs" method="get" path="/hris/{connection_id}/timeoff" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.listHrisTimeoffs({
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
import { hrisListHrisTimeoffs } from "@unified-api/typescript-sdk/funcs/hrisListHrisTimeoffs.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisListHrisTimeoffs(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisListHrisTimeoffs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisTimeoffsRequest](../../sdk/models/operations/listhristimeoffsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTimeoff[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHrisTimeshifts

List all timeshifts

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisTimeshifts" method="get" path="/hris/{connection_id}/timeshift" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.listHrisTimeshifts({
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
import { hrisListHrisTimeshifts } from "@unified-api/typescript-sdk/funcs/hrisListHrisTimeshifts.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisListHrisTimeshifts(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisListHrisTimeshifts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisTimeshiftsRequest](../../sdk/models/operations/listhristimeshiftsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTimeshift[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHrisAttendance

Update an attendance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHrisAttendance" method="patch" path="/hris/{connection_id}/attendance/{id}" example="hris_attendance" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.patchHrisAttendance({
    hrisAttendance: {
      address: {
        address1: "14108 Allie Flats",
        city: "Kearaborough",
        countryCode: "US",
        postalCode: "23844-2344",
        region: "Tennessee",
        regionCode: "CA",
      },
      approvedAt: new Date("2021-08-13T10:37:48.058Z"),
      breaks: [
        {
          durationMinutes: 12,
          endAt: new Date("2023-10-23T01:21:03.443Z"),
          id: "d60a1001-5a8a-4991-8c21-f4da6036cc87",
          isPaid: true,
          name: "Lunch",
          startAt: new Date("2023-10-16T05:42:48.647Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "UGX",
      declaredTipsAmount: 161,
      employeeUserId: "<id>",
      endAt: new Date("2024-04-06T14:46:16.029Z"),
      hourlyRate: 53,
      hours: 10,
      id: "65dd8339-6582-442f-90fc-0504ca4df5c8",
      jobName: "Global Creative Supervisor",
      nonCashTipsAmount: 54,
      startAt: new Date("2021-11-09T11:26:44.990Z"),
      status: "CLOSED",
      timezone: "America/Atikokan",
      updatedAt: new Date("2022-01-17T03:11:50.451Z"),
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
import { hrisPatchHrisAttendance } from "@unified-api/typescript-sdk/funcs/hrisPatchHrisAttendance.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisPatchHrisAttendance(unifiedTo, {
    hrisAttendance: {
      address: {
        address1: "14108 Allie Flats",
        city: "Kearaborough",
        countryCode: "US",
        postalCode: "23844-2344",
        region: "Tennessee",
        regionCode: "CA",
      },
      approvedAt: new Date("2021-08-13T10:37:48.058Z"),
      breaks: [
        {
          durationMinutes: 12,
          endAt: new Date("2023-10-23T01:21:03.443Z"),
          id: "d60a1001-5a8a-4991-8c21-f4da6036cc87",
          isPaid: true,
          name: "Lunch",
          startAt: new Date("2023-10-16T05:42:48.647Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "UGX",
      declaredTipsAmount: 161,
      employeeUserId: "<id>",
      endAt: new Date("2024-04-06T14:46:16.029Z"),
      hourlyRate: 53,
      hours: 10,
      id: "65dd8339-6582-442f-90fc-0504ca4df5c8",
      jobName: "Global Creative Supervisor",
      nonCashTipsAmount: 54,
      startAt: new Date("2021-11-09T11:26:44.990Z"),
      status: "CLOSED",
      timezone: "America/Atikokan",
      updatedAt: new Date("2022-01-17T03:11:50.451Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisPatchHrisAttendance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHrisAttendanceRequest](../../sdk/models/operations/patchhrisattendancerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisAttendance](../../sdk/models/shared/hrisattendance.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHrisBankaccount

Update a bankaccount

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHrisBankaccount" method="patch" path="/hris/{connection_id}/bankaccount/{id}" example="hris_bankaccount" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.patchHrisBankaccount({
    hrisBankaccount: {
      accountNumber: "****3777",
      accountNumberLast4: "3777",
      accountType: "CHECKING",
      bankName: "Huel Group",
      createdAt: new Date("2019-11-16T16:43:45.976Z"),
      id: "9451579c-5d66-4fec-8b26-9f6f20040b1e",
      isPrimary: false,
      name: "Checking Account",
      routingNumber: "448650724",
      updatedAt: new Date("2025-06-05T04:25:38.963Z"),
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
import { hrisPatchHrisBankaccount } from "@unified-api/typescript-sdk/funcs/hrisPatchHrisBankaccount.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisPatchHrisBankaccount(unifiedTo, {
    hrisBankaccount: {
      accountNumber: "****3777",
      accountNumberLast4: "3777",
      accountType: "CHECKING",
      bankName: "Huel Group",
      createdAt: new Date("2019-11-16T16:43:45.976Z"),
      id: "9451579c-5d66-4fec-8b26-9f6f20040b1e",
      isPrimary: false,
      name: "Checking Account",
      routingNumber: "448650724",
      updatedAt: new Date("2025-06-05T04:25:38.963Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisPatchHrisBankaccount failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHrisBankaccountRequest](../../sdk/models/operations/patchhrisbankaccountrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisBankaccount](../../sdk/models/shared/hrisbankaccount.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHrisBenefit

Update a benefit

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHrisBenefit" method="patch" path="/hris/{connection_id}/benefit/{id}" example="hris_benefit" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.patchHrisBenefit({
    hrisBenefit: {
      coverageLevel: "EMPLOYEE_SPOUSE",
      createdAt: new Date("2020-06-11T01:24:05.654Z"),
      currency: "JOD",
      description: "Vomito voluptas dolor sed.",
      employerContributionAmount: 185006,
      employerContributionMaxAmount: 179093,
      employerContributionType: "PERCENTAGE",
      frequency: "HOUR",
      id: "8e6de8e0-672d-492e-8ae7-6b22e421c099",
      isActive: false,
      name: "Frozen Wooden Ball",
      tax: "PRE_TAX",
      type: "GARNISHMENT",
      updatedAt: new Date("2023-03-06T20:05:42.332Z"),
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
import { hrisPatchHrisBenefit } from "@unified-api/typescript-sdk/funcs/hrisPatchHrisBenefit.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisPatchHrisBenefit(unifiedTo, {
    hrisBenefit: {
      coverageLevel: "EMPLOYEE_SPOUSE",
      createdAt: new Date("2020-06-11T01:24:05.654Z"),
      currency: "JOD",
      description: "Vomito voluptas dolor sed.",
      employerContributionAmount: 185006,
      employerContributionMaxAmount: 179093,
      employerContributionType: "PERCENTAGE",
      frequency: "HOUR",
      id: "8e6de8e0-672d-492e-8ae7-6b22e421c099",
      isActive: false,
      name: "Frozen Wooden Ball",
      tax: "PRE_TAX",
      type: "GARNISHMENT",
      updatedAt: new Date("2023-03-06T20:05:42.332Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisPatchHrisBenefit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHrisBenefitRequest](../../sdk/models/operations/patchhrisbenefitrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisBenefit](../../sdk/models/shared/hrisbenefit.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHrisCompany

Update a company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHrisCompany" method="patch" path="/hris/{connection_id}/company/{id}" example="hris_company" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.patchHrisCompany({
    hrisCompany: {
      address: {
        address1: "2549 Church Walk",
        city: "Lake Nettiebury",
        countryCode: "US",
        postalCode: "32877-4898",
        region: "Idaho",
        regionCode: "PA",
      },
      createdAt: new Date("2021-05-02T22:27:38.970Z"),
      id: "815d164c-4191-4190-9ff2-42b88d494b72",
      legalName: "Schultz LLC",
      name: "Gottlieb Group",
      updatedAt: new Date("2026-09-06T17:54:03.371Z"),
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
import { companyPatchHrisCompany } from "@unified-api/typescript-sdk/funcs/companyPatchHrisCompany.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await companyPatchHrisCompany(unifiedTo, {
    hrisCompany: {
      address: {
        address1: "2549 Church Walk",
        city: "Lake Nettiebury",
        countryCode: "US",
        postalCode: "32877-4898",
        region: "Idaho",
        regionCode: "PA",
      },
      createdAt: new Date("2021-05-02T22:27:38.970Z"),
      id: "815d164c-4191-4190-9ff2-42b88d494b72",
      legalName: "Schultz LLC",
      name: "Gottlieb Group",
      updatedAt: new Date("2026-09-06T17:54:03.371Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyPatchHrisCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHrisCompanyRequest](../../sdk/models/operations/patchhriscompanyrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisCompany](../../sdk/models/shared/hriscompany.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHrisDeduction

Update a deduction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHrisDeduction" method="patch" path="/hris/{connection_id}/deduction/{id}" example="hris_deduction" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.patchHrisDeduction({
    hrisDeduction: {
      amount: 139655,
      coverageLevel: "EMPLOYEE_ONLY",
      createdAt: new Date("2020-02-05T01:46:31.384Z"),
      endAt: new Date("2026-05-23T18:41:25.688Z"),
      frequency: "MONTH",
      id: "59fa7887-46c9-484c-a8d3-d50eaa8ecbeb",
      isActive: false,
      notes: "Carmen desidero.",
      startAt: new Date("2025-02-18T20:29:59.698Z"),
      type: "FIXED",
      updatedAt: new Date("2024-03-02T12:31:12.366Z"),
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
import { hrisPatchHrisDeduction } from "@unified-api/typescript-sdk/funcs/hrisPatchHrisDeduction.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisPatchHrisDeduction(unifiedTo, {
    hrisDeduction: {
      amount: 139655,
      coverageLevel: "EMPLOYEE_ONLY",
      createdAt: new Date("2020-02-05T01:46:31.384Z"),
      endAt: new Date("2026-05-23T18:41:25.688Z"),
      frequency: "MONTH",
      id: "59fa7887-46c9-484c-a8d3-d50eaa8ecbeb",
      isActive: false,
      notes: "Carmen desidero.",
      startAt: new Date("2025-02-18T20:29:59.698Z"),
      type: "FIXED",
      updatedAt: new Date("2024-03-02T12:31:12.366Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisPatchHrisDeduction failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHrisDeductionRequest](../../sdk/models/operations/patchhrisdeductionrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisDeduction](../../sdk/models/shared/hrisdeduction.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHrisDevice

Update a device

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHrisDevice" method="patch" path="/hris/{connection_id}/device/{id}" example="hris_device" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.patchHrisDevice({
    hrisDevice: {
      adminUserIds: [],
      assetTag: "dpho9OuFNG",
      createdAt: new Date("2019-04-04T17:11:40.322Z"),
      hasAntivirus: false,
      hasFirewall: true,
      hasHdEncrypted: true,
      hasPasswordManager: true,
      hasScreenlock: true,
      id: "da70b610-0a29-4f13-bfed-69fdce890530",
      isMissing: false,
      manufacturer: "Sanford - Hamill",
      model: "Refined",
      name: "cross_contamination_if.rar",
      os: "monitor",
      osVersion: "1.12.16",
      updatedAt: new Date("2023-05-21T12:28:24.535Z"),
      version: "2.20.17",
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
import { hrisPatchHrisDevice } from "@unified-api/typescript-sdk/funcs/hrisPatchHrisDevice.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisPatchHrisDevice(unifiedTo, {
    hrisDevice: {
      adminUserIds: [],
      assetTag: "dpho9OuFNG",
      createdAt: new Date("2019-04-04T17:11:40.322Z"),
      hasAntivirus: false,
      hasFirewall: true,
      hasHdEncrypted: true,
      hasPasswordManager: true,
      hasScreenlock: true,
      id: "da70b610-0a29-4f13-bfed-69fdce890530",
      isMissing: false,
      manufacturer: "Sanford - Hamill",
      model: "Refined",
      name: "cross_contamination_if.rar",
      os: "monitor",
      osVersion: "1.12.16",
      updatedAt: new Date("2023-05-21T12:28:24.535Z"),
      version: "2.20.17",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisPatchHrisDevice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHrisDeviceRequest](../../sdk/models/operations/patchhrisdevicerequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisDevice](../../sdk/models/shared/hrisdevice.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHrisDocument

Update a document

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHrisDocument" method="patch" path="/hris/{connection_id}/document/{id}" example="hris_document" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.patchHrisDocument({
    hrisDocument: {
      createdAt: new Date("2022-10-27T11:47:26.086Z"),
      documentUrl: "https://sore-decision.biz/",
      filename: "ridge_forager.xsl",
      id: "0ea5063c-40c4-4179-80ff-0ea658ceb10a",
      type: "POLICY",
      updatedAt: new Date("2025-09-17T17:23:24.237Z"),
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
import { documentPatchHrisDocument } from "@unified-api/typescript-sdk/funcs/documentPatchHrisDocument.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await documentPatchHrisDocument(unifiedTo, {
    hrisDocument: {
      createdAt: new Date("2022-10-27T11:47:26.086Z"),
      documentUrl: "https://sore-decision.biz/",
      filename: "ridge_forager.xsl",
      id: "0ea5063c-40c4-4179-80ff-0ea658ceb10a",
      type: "POLICY",
      updatedAt: new Date("2025-09-17T17:23:24.237Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentPatchHrisDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHrisDocumentRequest](../../sdk/models/operations/patchhrisdocumentrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisDocument](../../sdk/models/shared/hrisdocument.md)\>**

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
  const result = await unifiedTo.hris.patchHrisEmployee({
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
      hiredAt: new Date("2023-05-11T03:05:39.592Z"),
      id: "2e06c795-11b5-4ba8-affe-13f480701219",
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
          id: "58313980-39c4-4eb1-994c-d45b52ede586",
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
      updatedAt: new Date("2022-02-19T14:15:16.541Z"),
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
      hiredAt: new Date("2023-05-11T03:05:39.592Z"),
      id: "2e06c795-11b5-4ba8-affe-13f480701219",
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
          id: "58313980-39c4-4eb1-994c-d45b52ede586",
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
      updatedAt: new Date("2022-02-19T14:15:16.541Z"),
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

## patchHrisGroup

Update a group

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHrisGroup" method="patch" path="/hris/{connection_id}/group/{id}" example="hris_group" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.patchHrisGroup({
    hrisGroup: {
      createdAt: new Date("2023-11-01T13:13:40.714Z"),
      description: "Absorbeo casso.",
      id: "af0dfebd-25f9-41be-b0c3-f8c5ac0e3ed4",
      isActive: false,
      name: "Games",
      type: "BUSINESS_UNIT",
      updatedAt: new Date("2026-04-24T08:20:05.660Z"),
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
import { groupPatchHrisGroup } from "@unified-api/typescript-sdk/funcs/groupPatchHrisGroup.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await groupPatchHrisGroup(unifiedTo, {
    hrisGroup: {
      createdAt: new Date("2023-11-01T13:13:40.714Z"),
      description: "Absorbeo casso.",
      id: "af0dfebd-25f9-41be-b0c3-f8c5ac0e3ed4",
      isActive: false,
      name: "Games",
      type: "BUSINESS_UNIT",
      updatedAt: new Date("2026-04-24T08:20:05.660Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupPatchHrisGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHrisGroupRequest](../../sdk/models/operations/patchhrisgrouprequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisGroup](../../sdk/models/shared/hrisgroup.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHrisLocation

Update a location

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHrisLocation" method="patch" path="/hris/{connection_id}/location/{id}" example="hris_location" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.patchHrisLocation({
    hrisLocation: {
      address: {
        address1: "2743 Connelly Summit",
        address2: "Apt. 350",
        city: "Titusville",
        countryCode: "US",
        postalCode: "16154-1095",
        region: "Oregon",
        regionCode: "AL",
      },
      createdAt: new Date("2021-07-18T10:32:01.414Z"),
      currency: "MUR",
      description: "Acervus caries.",
      externalIdentifier: "5c05dd5c-9ced-4ad0-aa1f-a076aafaf2b5",
      id: "c8de35bd-f517-470f-a60d-6f6bbb10d07c",
      isActive: true,
      isHq: false,
      languageLocale: "fr",
      name: "adhuc",
      telephones: [
        {
          telephone: "(710) 550-6997",
          type: "FAX",
        },
        {
          telephone: "(208) 555-8542",
          type: "HOME",
        },
        {
          telephone: "(712) 473-5482",
          type: "FAX",
        },
      ],
      timezone: "America/Guyana",
      updatedAt: new Date("2023-06-09T08:17:29.711Z"),
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
import { locationPatchHrisLocation } from "@unified-api/typescript-sdk/funcs/locationPatchHrisLocation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await locationPatchHrisLocation(unifiedTo, {
    hrisLocation: {
      address: {
        address1: "2743 Connelly Summit",
        address2: "Apt. 350",
        city: "Titusville",
        countryCode: "US",
        postalCode: "16154-1095",
        region: "Oregon",
        regionCode: "AL",
      },
      createdAt: new Date("2021-07-18T10:32:01.414Z"),
      currency: "MUR",
      description: "Acervus caries.",
      externalIdentifier: "5c05dd5c-9ced-4ad0-aa1f-a076aafaf2b5",
      id: "c8de35bd-f517-470f-a60d-6f6bbb10d07c",
      isActive: true,
      isHq: false,
      languageLocale: "fr",
      name: "adhuc",
      telephones: [
        {
          telephone: "(710) 550-6997",
          type: "FAX",
        },
        {
          telephone: "(208) 555-8542",
          type: "HOME",
        },
        {
          telephone: "(712) 473-5482",
          type: "FAX",
        },
      ],
      timezone: "America/Guyana",
      updatedAt: new Date("2023-06-09T08:17:29.711Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("locationPatchHrisLocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHrisLocationRequest](../../sdk/models/operations/patchhrislocationrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisLocation](../../sdk/models/shared/hrislocation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHrisTimeoff

Update a timeoff

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHrisTimeoff" method="patch" path="/hris/{connection_id}/timeoff/{id}" example="hris_timeoff" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.patchHrisTimeoff({
    hrisTimeoff: {
      approvedAt: new Date("2022-02-20T22:37:32.141Z"),
      comments: "Blandior ventus curiositas amplitudo.",
      createdAt: new Date("2021-10-06T18:00:20.615Z"),
      duration: 4,
      durationType: "DAY",
      endAt: new Date("2024-12-08T03:12:16.439Z"),
      id: "1125b475-98ea-4ae7-af13-6e4669d8acda",
      isPaid: true,
      originalType: "acerbitas ut",
      reason: "verto",
      startAt: new Date("2023-08-23T14:51:13.093Z"),
      status: "DENIED",
      type: "IN_LIEU",
      updatedAt: new Date("2022-07-07T22:44:35.353Z"),
      userId: "<id>",
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
import { hrisPatchHrisTimeoff } from "@unified-api/typescript-sdk/funcs/hrisPatchHrisTimeoff.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisPatchHrisTimeoff(unifiedTo, {
    hrisTimeoff: {
      approvedAt: new Date("2022-02-20T22:37:32.141Z"),
      comments: "Blandior ventus curiositas amplitudo.",
      createdAt: new Date("2021-10-06T18:00:20.615Z"),
      duration: 4,
      durationType: "DAY",
      endAt: new Date("2024-12-08T03:12:16.439Z"),
      id: "1125b475-98ea-4ae7-af13-6e4669d8acda",
      isPaid: true,
      originalType: "acerbitas ut",
      reason: "verto",
      startAt: new Date("2023-08-23T14:51:13.093Z"),
      status: "DENIED",
      type: "IN_LIEU",
      updatedAt: new Date("2022-07-07T22:44:35.353Z"),
      userId: "<id>",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisPatchHrisTimeoff failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHrisTimeoffRequest](../../sdk/models/operations/patchhristimeoffrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTimeoff](../../sdk/models/shared/hristimeoff.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchHrisTimeshift

Update a timeshift

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHrisTimeshift" method="patch" path="/hris/{connection_id}/timeshift/{id}" example="hris_timeshift" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.patchHrisTimeshift({
    hrisTimeshift: {
      approvedAt: new Date("2023-06-06T01:52:38.516Z"),
      compensation: [
        {
          amount: 76761,
          currency: "JPY",
          frequency: "HOUR",
          notes: "Annus adficio suasoria architecto aggero.",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-07-01T23:53:15.738Z"),
      employeeUserId: "<id>",
      endAt: new Date("2026-08-26T05:07:47.633Z"),
      hours: 8,
      id: "6d978792-6ea8-4343-a1de-957917b11392",
      isApproved: true,
      startAt: new Date("2023-06-25T06:59:35.782Z"),
      updatedAt: new Date("2021-06-23T02:35:54.489Z"),
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
import { hrisPatchHrisTimeshift } from "@unified-api/typescript-sdk/funcs/hrisPatchHrisTimeshift.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisPatchHrisTimeshift(unifiedTo, {
    hrisTimeshift: {
      approvedAt: new Date("2023-06-06T01:52:38.516Z"),
      compensation: [
        {
          amount: 76761,
          currency: "JPY",
          frequency: "HOUR",
          notes: "Annus adficio suasoria architecto aggero.",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-07-01T23:53:15.738Z"),
      employeeUserId: "<id>",
      endAt: new Date("2026-08-26T05:07:47.633Z"),
      hours: 8,
      id: "6d978792-6ea8-4343-a1de-957917b11392",
      isApproved: true,
      startAt: new Date("2023-06-25T06:59:35.782Z"),
      updatedAt: new Date("2021-06-23T02:35:54.489Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisPatchHrisTimeshift failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHrisTimeshiftRequest](../../sdk/models/operations/patchhristimeshiftrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTimeshift](../../sdk/models/shared/hristimeshift.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeHrisAttendance

Remove an attendance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHrisAttendance" method="delete" path="/hris/{connection_id}/attendance/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.removeHrisAttendance({
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
import { hrisRemoveHrisAttendance } from "@unified-api/typescript-sdk/funcs/hrisRemoveHrisAttendance.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisRemoveHrisAttendance(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisRemoveHrisAttendance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHrisAttendanceRequest](../../sdk/models/operations/removehrisattendancerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHrisAttendanceResponse](../../sdk/models/operations/removehrisattendanceresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeHrisBankaccount

Remove a bankaccount

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHrisBankaccount" method="delete" path="/hris/{connection_id}/bankaccount/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.removeHrisBankaccount({
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
import { hrisRemoveHrisBankaccount } from "@unified-api/typescript-sdk/funcs/hrisRemoveHrisBankaccount.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisRemoveHrisBankaccount(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisRemoveHrisBankaccount failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHrisBankaccountRequest](../../sdk/models/operations/removehrisbankaccountrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHrisBankaccountResponse](../../sdk/models/operations/removehrisbankaccountresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeHrisBenefit

Remove a benefit

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHrisBenefit" method="delete" path="/hris/{connection_id}/benefit/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.removeHrisBenefit({
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
import { hrisRemoveHrisBenefit } from "@unified-api/typescript-sdk/funcs/hrisRemoveHrisBenefit.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisRemoveHrisBenefit(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisRemoveHrisBenefit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHrisBenefitRequest](../../sdk/models/operations/removehrisbenefitrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHrisBenefitResponse](../../sdk/models/operations/removehrisbenefitresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeHrisCompany

Remove a company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHrisCompany" method="delete" path="/hris/{connection_id}/company/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.removeHrisCompany({
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
import { companyRemoveHrisCompany } from "@unified-api/typescript-sdk/funcs/companyRemoveHrisCompany.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await companyRemoveHrisCompany(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyRemoveHrisCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHrisCompanyRequest](../../sdk/models/operations/removehriscompanyrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHrisCompanyResponse](../../sdk/models/operations/removehriscompanyresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeHrisDeduction

Remove a deduction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHrisDeduction" method="delete" path="/hris/{connection_id}/deduction/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.removeHrisDeduction({
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
import { hrisRemoveHrisDeduction } from "@unified-api/typescript-sdk/funcs/hrisRemoveHrisDeduction.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisRemoveHrisDeduction(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisRemoveHrisDeduction failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHrisDeductionRequest](../../sdk/models/operations/removehrisdeductionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHrisDeductionResponse](../../sdk/models/operations/removehrisdeductionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeHrisDevice

Remove a device

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHrisDevice" method="delete" path="/hris/{connection_id}/device/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.removeHrisDevice({
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
import { hrisRemoveHrisDevice } from "@unified-api/typescript-sdk/funcs/hrisRemoveHrisDevice.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisRemoveHrisDevice(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisRemoveHrisDevice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHrisDeviceRequest](../../sdk/models/operations/removehrisdevicerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHrisDeviceResponse](../../sdk/models/operations/removehrisdeviceresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeHrisDocument

Remove a document

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHrisDocument" method="delete" path="/hris/{connection_id}/document/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.removeHrisDocument({
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
import { documentRemoveHrisDocument } from "@unified-api/typescript-sdk/funcs/documentRemoveHrisDocument.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await documentRemoveHrisDocument(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentRemoveHrisDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHrisDocumentRequest](../../sdk/models/operations/removehrisdocumentrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHrisDocumentResponse](../../sdk/models/operations/removehrisdocumentresponse.md)\>**

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
  const result = await unifiedTo.hris.removeHrisEmployee({
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

## removeHrisGroup

Remove a group

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHrisGroup" method="delete" path="/hris/{connection_id}/group/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.removeHrisGroup({
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
import { groupRemoveHrisGroup } from "@unified-api/typescript-sdk/funcs/groupRemoveHrisGroup.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await groupRemoveHrisGroup(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupRemoveHrisGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHrisGroupRequest](../../sdk/models/operations/removehrisgrouprequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHrisGroupResponse](../../sdk/models/operations/removehrisgroupresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeHrisLocation

Remove a location

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHrisLocation" method="delete" path="/hris/{connection_id}/location/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.removeHrisLocation({
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
import { locationRemoveHrisLocation } from "@unified-api/typescript-sdk/funcs/locationRemoveHrisLocation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await locationRemoveHrisLocation(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("locationRemoveHrisLocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHrisLocationRequest](../../sdk/models/operations/removehrislocationrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHrisLocationResponse](../../sdk/models/operations/removehrislocationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeHrisTimeoff

Remove a timeoff

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHrisTimeoff" method="delete" path="/hris/{connection_id}/timeoff/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.removeHrisTimeoff({
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
import { hrisRemoveHrisTimeoff } from "@unified-api/typescript-sdk/funcs/hrisRemoveHrisTimeoff.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisRemoveHrisTimeoff(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisRemoveHrisTimeoff failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHrisTimeoffRequest](../../sdk/models/operations/removehristimeoffrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHrisTimeoffResponse](../../sdk/models/operations/removehristimeoffresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeHrisTimeshift

Remove a timeshift

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHrisTimeshift" method="delete" path="/hris/{connection_id}/timeshift/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.removeHrisTimeshift({
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
import { hrisRemoveHrisTimeshift } from "@unified-api/typescript-sdk/funcs/hrisRemoveHrisTimeshift.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisRemoveHrisTimeshift(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisRemoveHrisTimeshift failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHrisTimeshiftRequest](../../sdk/models/operations/removehristimeshiftrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHrisTimeshiftResponse](../../sdk/models/operations/removehristimeshiftresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHrisAttendance

Update an attendance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHrisAttendance" method="put" path="/hris/{connection_id}/attendance/{id}" example="hris_attendance" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.updateHrisAttendance({
    hrisAttendance: {
      address: {
        address1: "14108 Allie Flats",
        city: "Kearaborough",
        countryCode: "US",
        postalCode: "23844-2344",
        region: "Tennessee",
        regionCode: "CA",
      },
      approvedAt: new Date("2021-08-13T10:37:48.058Z"),
      breaks: [
        {
          durationMinutes: 12,
          endAt: new Date("2023-10-23T01:21:03.443Z"),
          id: "d60a1001-5a8a-4991-8c21-f4da6036cc87",
          isPaid: true,
          name: "Lunch",
          startAt: new Date("2023-10-16T05:42:48.647Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "UGX",
      declaredTipsAmount: 161,
      employeeUserId: "<id>",
      endAt: new Date("2024-04-06T14:46:16.029Z"),
      hourlyRate: 53,
      hours: 10,
      id: "65dd8339-6582-442f-90fc-0504ca4df5c8",
      jobName: "Global Creative Supervisor",
      nonCashTipsAmount: 54,
      startAt: new Date("2021-11-09T11:26:44.990Z"),
      status: "CLOSED",
      timezone: "America/Atikokan",
      updatedAt: new Date("2022-01-17T03:11:50.451Z"),
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
import { hrisUpdateHrisAttendance } from "@unified-api/typescript-sdk/funcs/hrisUpdateHrisAttendance.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisUpdateHrisAttendance(unifiedTo, {
    hrisAttendance: {
      address: {
        address1: "14108 Allie Flats",
        city: "Kearaborough",
        countryCode: "US",
        postalCode: "23844-2344",
        region: "Tennessee",
        regionCode: "CA",
      },
      approvedAt: new Date("2021-08-13T10:37:48.058Z"),
      breaks: [
        {
          durationMinutes: 12,
          endAt: new Date("2023-10-23T01:21:03.443Z"),
          id: "d60a1001-5a8a-4991-8c21-f4da6036cc87",
          isPaid: true,
          name: "Lunch",
          startAt: new Date("2023-10-16T05:42:48.647Z"),
        },
      ],
      createdAt: new Date("2021-08-10T19:43:18.452Z"),
      currency: "UGX",
      declaredTipsAmount: 161,
      employeeUserId: "<id>",
      endAt: new Date("2024-04-06T14:46:16.029Z"),
      hourlyRate: 53,
      hours: 10,
      id: "65dd8339-6582-442f-90fc-0504ca4df5c8",
      jobName: "Global Creative Supervisor",
      nonCashTipsAmount: 54,
      startAt: new Date("2021-11-09T11:26:44.990Z"),
      status: "CLOSED",
      timezone: "America/Atikokan",
      updatedAt: new Date("2022-01-17T03:11:50.451Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisUpdateHrisAttendance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHrisAttendanceRequest](../../sdk/models/operations/updatehrisattendancerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisAttendance](../../sdk/models/shared/hrisattendance.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHrisBankaccount

Update a bankaccount

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHrisBankaccount" method="put" path="/hris/{connection_id}/bankaccount/{id}" example="hris_bankaccount" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.updateHrisBankaccount({
    hrisBankaccount: {
      accountNumber: "****3777",
      accountNumberLast4: "3777",
      accountType: "CHECKING",
      bankName: "Huel Group",
      createdAt: new Date("2019-11-16T16:43:45.976Z"),
      id: "9451579c-5d66-4fec-8b26-9f6f20040b1e",
      isPrimary: false,
      name: "Checking Account",
      routingNumber: "448650724",
      updatedAt: new Date("2025-06-05T04:25:38.963Z"),
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
import { hrisUpdateHrisBankaccount } from "@unified-api/typescript-sdk/funcs/hrisUpdateHrisBankaccount.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisUpdateHrisBankaccount(unifiedTo, {
    hrisBankaccount: {
      accountNumber: "****3777",
      accountNumberLast4: "3777",
      accountType: "CHECKING",
      bankName: "Huel Group",
      createdAt: new Date("2019-11-16T16:43:45.976Z"),
      id: "9451579c-5d66-4fec-8b26-9f6f20040b1e",
      isPrimary: false,
      name: "Checking Account",
      routingNumber: "448650724",
      updatedAt: new Date("2025-06-05T04:25:38.963Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisUpdateHrisBankaccount failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHrisBankaccountRequest](../../sdk/models/operations/updatehrisbankaccountrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisBankaccount](../../sdk/models/shared/hrisbankaccount.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHrisBenefit

Update a benefit

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHrisBenefit" method="put" path="/hris/{connection_id}/benefit/{id}" example="hris_benefit" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.updateHrisBenefit({
    hrisBenefit: {
      coverageLevel: "EMPLOYEE_SPOUSE",
      createdAt: new Date("2020-06-11T01:24:05.654Z"),
      currency: "JOD",
      description: "Vomito voluptas dolor sed.",
      employerContributionAmount: 185006,
      employerContributionMaxAmount: 179093,
      employerContributionType: "PERCENTAGE",
      frequency: "HOUR",
      id: "8e6de8e0-672d-492e-8ae7-6b22e421c099",
      isActive: false,
      name: "Frozen Wooden Ball",
      tax: "PRE_TAX",
      type: "GARNISHMENT",
      updatedAt: new Date("2023-03-06T20:05:42.332Z"),
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
import { hrisUpdateHrisBenefit } from "@unified-api/typescript-sdk/funcs/hrisUpdateHrisBenefit.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisUpdateHrisBenefit(unifiedTo, {
    hrisBenefit: {
      coverageLevel: "EMPLOYEE_SPOUSE",
      createdAt: new Date("2020-06-11T01:24:05.654Z"),
      currency: "JOD",
      description: "Vomito voluptas dolor sed.",
      employerContributionAmount: 185006,
      employerContributionMaxAmount: 179093,
      employerContributionType: "PERCENTAGE",
      frequency: "HOUR",
      id: "8e6de8e0-672d-492e-8ae7-6b22e421c099",
      isActive: false,
      name: "Frozen Wooden Ball",
      tax: "PRE_TAX",
      type: "GARNISHMENT",
      updatedAt: new Date("2023-03-06T20:05:42.332Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisUpdateHrisBenefit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHrisBenefitRequest](../../sdk/models/operations/updatehrisbenefitrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisBenefit](../../sdk/models/shared/hrisbenefit.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHrisCompany

Update a company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHrisCompany" method="put" path="/hris/{connection_id}/company/{id}" example="hris_company" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.updateHrisCompany({
    hrisCompany: {
      address: {
        address1: "2549 Church Walk",
        city: "Lake Nettiebury",
        countryCode: "US",
        postalCode: "32877-4898",
        region: "Idaho",
        regionCode: "PA",
      },
      createdAt: new Date("2021-05-02T22:27:38.970Z"),
      id: "815d164c-4191-4190-9ff2-42b88d494b72",
      legalName: "Schultz LLC",
      name: "Gottlieb Group",
      updatedAt: new Date("2026-09-06T17:54:03.371Z"),
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
import { companyUpdateHrisCompany } from "@unified-api/typescript-sdk/funcs/companyUpdateHrisCompany.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await companyUpdateHrisCompany(unifiedTo, {
    hrisCompany: {
      address: {
        address1: "2549 Church Walk",
        city: "Lake Nettiebury",
        countryCode: "US",
        postalCode: "32877-4898",
        region: "Idaho",
        regionCode: "PA",
      },
      createdAt: new Date("2021-05-02T22:27:38.970Z"),
      id: "815d164c-4191-4190-9ff2-42b88d494b72",
      legalName: "Schultz LLC",
      name: "Gottlieb Group",
      updatedAt: new Date("2026-09-06T17:54:03.371Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyUpdateHrisCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHrisCompanyRequest](../../sdk/models/operations/updatehriscompanyrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisCompany](../../sdk/models/shared/hriscompany.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHrisDeduction

Update a deduction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHrisDeduction" method="put" path="/hris/{connection_id}/deduction/{id}" example="hris_deduction" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.updateHrisDeduction({
    hrisDeduction: {
      amount: 139655,
      coverageLevel: "EMPLOYEE_ONLY",
      createdAt: new Date("2020-02-05T01:46:31.384Z"),
      endAt: new Date("2026-05-23T18:41:25.688Z"),
      frequency: "MONTH",
      id: "59fa7887-46c9-484c-a8d3-d50eaa8ecbeb",
      isActive: false,
      notes: "Carmen desidero.",
      startAt: new Date("2025-02-18T20:29:59.698Z"),
      type: "FIXED",
      updatedAt: new Date("2024-03-02T12:31:12.366Z"),
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
import { hrisUpdateHrisDeduction } from "@unified-api/typescript-sdk/funcs/hrisUpdateHrisDeduction.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisUpdateHrisDeduction(unifiedTo, {
    hrisDeduction: {
      amount: 139655,
      coverageLevel: "EMPLOYEE_ONLY",
      createdAt: new Date("2020-02-05T01:46:31.384Z"),
      endAt: new Date("2026-05-23T18:41:25.688Z"),
      frequency: "MONTH",
      id: "59fa7887-46c9-484c-a8d3-d50eaa8ecbeb",
      isActive: false,
      notes: "Carmen desidero.",
      startAt: new Date("2025-02-18T20:29:59.698Z"),
      type: "FIXED",
      updatedAt: new Date("2024-03-02T12:31:12.366Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisUpdateHrisDeduction failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHrisDeductionRequest](../../sdk/models/operations/updatehrisdeductionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisDeduction](../../sdk/models/shared/hrisdeduction.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHrisDevice

Update a device

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHrisDevice" method="put" path="/hris/{connection_id}/device/{id}" example="hris_device" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.updateHrisDevice({
    hrisDevice: {
      adminUserIds: [],
      assetTag: "dpho9OuFNG",
      createdAt: new Date("2019-04-04T17:11:40.322Z"),
      hasAntivirus: false,
      hasFirewall: true,
      hasHdEncrypted: true,
      hasPasswordManager: true,
      hasScreenlock: true,
      id: "da70b610-0a29-4f13-bfed-69fdce890530",
      isMissing: false,
      manufacturer: "Sanford - Hamill",
      model: "Refined",
      name: "cross_contamination_if.rar",
      os: "monitor",
      osVersion: "1.12.16",
      updatedAt: new Date("2023-05-21T12:28:24.535Z"),
      version: "2.20.17",
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
import { hrisUpdateHrisDevice } from "@unified-api/typescript-sdk/funcs/hrisUpdateHrisDevice.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisUpdateHrisDevice(unifiedTo, {
    hrisDevice: {
      adminUserIds: [],
      assetTag: "dpho9OuFNG",
      createdAt: new Date("2019-04-04T17:11:40.322Z"),
      hasAntivirus: false,
      hasFirewall: true,
      hasHdEncrypted: true,
      hasPasswordManager: true,
      hasScreenlock: true,
      id: "da70b610-0a29-4f13-bfed-69fdce890530",
      isMissing: false,
      manufacturer: "Sanford - Hamill",
      model: "Refined",
      name: "cross_contamination_if.rar",
      os: "monitor",
      osVersion: "1.12.16",
      updatedAt: new Date("2023-05-21T12:28:24.535Z"),
      version: "2.20.17",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisUpdateHrisDevice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHrisDeviceRequest](../../sdk/models/operations/updatehrisdevicerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisDevice](../../sdk/models/shared/hrisdevice.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHrisDocument

Update a document

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHrisDocument" method="put" path="/hris/{connection_id}/document/{id}" example="hris_document" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.updateHrisDocument({
    hrisDocument: {
      createdAt: new Date("2022-10-27T11:47:26.086Z"),
      documentUrl: "https://sore-decision.biz/",
      filename: "ridge_forager.xsl",
      id: "0ea5063c-40c4-4179-80ff-0ea658ceb10a",
      type: "POLICY",
      updatedAt: new Date("2025-09-17T17:23:24.237Z"),
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
import { documentUpdateHrisDocument } from "@unified-api/typescript-sdk/funcs/documentUpdateHrisDocument.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await documentUpdateHrisDocument(unifiedTo, {
    hrisDocument: {
      createdAt: new Date("2022-10-27T11:47:26.086Z"),
      documentUrl: "https://sore-decision.biz/",
      filename: "ridge_forager.xsl",
      id: "0ea5063c-40c4-4179-80ff-0ea658ceb10a",
      type: "POLICY",
      updatedAt: new Date("2025-09-17T17:23:24.237Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentUpdateHrisDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHrisDocumentRequest](../../sdk/models/operations/updatehrisdocumentrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisDocument](../../sdk/models/shared/hrisdocument.md)\>**

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
  const result = await unifiedTo.hris.updateHrisEmployee({
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
      hiredAt: new Date("2023-05-11T03:05:39.592Z"),
      id: "2e06c795-11b5-4ba8-affe-13f480701219",
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
          id: "58313980-39c4-4eb1-994c-d45b52ede586",
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
      updatedAt: new Date("2022-02-19T14:15:16.541Z"),
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
      hiredAt: new Date("2023-05-11T03:05:39.592Z"),
      id: "2e06c795-11b5-4ba8-affe-13f480701219",
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
          id: "58313980-39c4-4eb1-994c-d45b52ede586",
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
      updatedAt: new Date("2022-02-19T14:15:16.541Z"),
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

## updateHrisGroup

Update a group

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHrisGroup" method="put" path="/hris/{connection_id}/group/{id}" example="hris_group" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.updateHrisGroup({
    hrisGroup: {
      createdAt: new Date("2023-11-01T13:13:40.714Z"),
      description: "Absorbeo casso.",
      id: "af0dfebd-25f9-41be-b0c3-f8c5ac0e3ed4",
      isActive: false,
      name: "Games",
      type: "BUSINESS_UNIT",
      updatedAt: new Date("2026-04-24T08:20:05.660Z"),
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
import { groupUpdateHrisGroup } from "@unified-api/typescript-sdk/funcs/groupUpdateHrisGroup.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await groupUpdateHrisGroup(unifiedTo, {
    hrisGroup: {
      createdAt: new Date("2023-11-01T13:13:40.714Z"),
      description: "Absorbeo casso.",
      id: "af0dfebd-25f9-41be-b0c3-f8c5ac0e3ed4",
      isActive: false,
      name: "Games",
      type: "BUSINESS_UNIT",
      updatedAt: new Date("2026-04-24T08:20:05.660Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupUpdateHrisGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHrisGroupRequest](../../sdk/models/operations/updatehrisgrouprequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisGroup](../../sdk/models/shared/hrisgroup.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHrisLocation

Update a location

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHrisLocation" method="put" path="/hris/{connection_id}/location/{id}" example="hris_location" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.updateHrisLocation({
    hrisLocation: {
      address: {
        address1: "2743 Connelly Summit",
        address2: "Apt. 350",
        city: "Titusville",
        countryCode: "US",
        postalCode: "16154-1095",
        region: "Oregon",
        regionCode: "AL",
      },
      createdAt: new Date("2021-07-18T10:32:01.414Z"),
      currency: "MUR",
      description: "Acervus caries.",
      externalIdentifier: "5c05dd5c-9ced-4ad0-aa1f-a076aafaf2b5",
      id: "c8de35bd-f517-470f-a60d-6f6bbb10d07c",
      isActive: true,
      isHq: false,
      languageLocale: "fr",
      name: "adhuc",
      telephones: [
        {
          telephone: "(710) 550-6997",
          type: "FAX",
        },
        {
          telephone: "(208) 555-8542",
          type: "HOME",
        },
        {
          telephone: "(712) 473-5482",
          type: "FAX",
        },
      ],
      timezone: "America/Guyana",
      updatedAt: new Date("2023-06-09T08:17:29.711Z"),
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
import { locationUpdateHrisLocation } from "@unified-api/typescript-sdk/funcs/locationUpdateHrisLocation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await locationUpdateHrisLocation(unifiedTo, {
    hrisLocation: {
      address: {
        address1: "2743 Connelly Summit",
        address2: "Apt. 350",
        city: "Titusville",
        countryCode: "US",
        postalCode: "16154-1095",
        region: "Oregon",
        regionCode: "AL",
      },
      createdAt: new Date("2021-07-18T10:32:01.414Z"),
      currency: "MUR",
      description: "Acervus caries.",
      externalIdentifier: "5c05dd5c-9ced-4ad0-aa1f-a076aafaf2b5",
      id: "c8de35bd-f517-470f-a60d-6f6bbb10d07c",
      isActive: true,
      isHq: false,
      languageLocale: "fr",
      name: "adhuc",
      telephones: [
        {
          telephone: "(710) 550-6997",
          type: "FAX",
        },
        {
          telephone: "(208) 555-8542",
          type: "HOME",
        },
        {
          telephone: "(712) 473-5482",
          type: "FAX",
        },
      ],
      timezone: "America/Guyana",
      updatedAt: new Date("2023-06-09T08:17:29.711Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("locationUpdateHrisLocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHrisLocationRequest](../../sdk/models/operations/updatehrislocationrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisLocation](../../sdk/models/shared/hrislocation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHrisTimeoff

Update a timeoff

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHrisTimeoff" method="put" path="/hris/{connection_id}/timeoff/{id}" example="hris_timeoff" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.updateHrisTimeoff({
    hrisTimeoff: {
      approvedAt: new Date("2022-02-20T22:37:32.141Z"),
      comments: "Blandior ventus curiositas amplitudo.",
      createdAt: new Date("2021-10-06T18:00:20.615Z"),
      duration: 4,
      durationType: "DAY",
      endAt: new Date("2024-12-08T03:12:16.439Z"),
      id: "1125b475-98ea-4ae7-af13-6e4669d8acda",
      isPaid: true,
      originalType: "acerbitas ut",
      reason: "verto",
      startAt: new Date("2023-08-23T14:51:13.093Z"),
      status: "DENIED",
      type: "IN_LIEU",
      updatedAt: new Date("2022-07-07T22:44:35.353Z"),
      userId: "<id>",
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
import { hrisUpdateHrisTimeoff } from "@unified-api/typescript-sdk/funcs/hrisUpdateHrisTimeoff.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisUpdateHrisTimeoff(unifiedTo, {
    hrisTimeoff: {
      approvedAt: new Date("2022-02-20T22:37:32.141Z"),
      comments: "Blandior ventus curiositas amplitudo.",
      createdAt: new Date("2021-10-06T18:00:20.615Z"),
      duration: 4,
      durationType: "DAY",
      endAt: new Date("2024-12-08T03:12:16.439Z"),
      id: "1125b475-98ea-4ae7-af13-6e4669d8acda",
      isPaid: true,
      originalType: "acerbitas ut",
      reason: "verto",
      startAt: new Date("2023-08-23T14:51:13.093Z"),
      status: "DENIED",
      type: "IN_LIEU",
      updatedAt: new Date("2022-07-07T22:44:35.353Z"),
      userId: "<id>",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisUpdateHrisTimeoff failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHrisTimeoffRequest](../../sdk/models/operations/updatehristimeoffrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTimeoff](../../sdk/models/shared/hristimeoff.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateHrisTimeshift

Update a timeshift

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHrisTimeshift" method="put" path="/hris/{connection_id}/timeshift/{id}" example="hris_timeshift" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.hris.updateHrisTimeshift({
    hrisTimeshift: {
      approvedAt: new Date("2023-06-06T01:52:38.516Z"),
      compensation: [
        {
          amount: 76761,
          currency: "JPY",
          frequency: "HOUR",
          notes: "Annus adficio suasoria architecto aggero.",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-07-01T23:53:15.738Z"),
      employeeUserId: "<id>",
      endAt: new Date("2026-08-26T05:07:47.633Z"),
      hours: 8,
      id: "6d978792-6ea8-4343-a1de-957917b11392",
      isApproved: true,
      startAt: new Date("2023-06-25T06:59:35.782Z"),
      updatedAt: new Date("2021-06-23T02:35:54.489Z"),
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
import { hrisUpdateHrisTimeshift } from "@unified-api/typescript-sdk/funcs/hrisUpdateHrisTimeshift.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await hrisUpdateHrisTimeshift(unifiedTo, {
    hrisTimeshift: {
      approvedAt: new Date("2023-06-06T01:52:38.516Z"),
      compensation: [
        {
          amount: 76761,
          currency: "JPY",
          frequency: "HOUR",
          notes: "Annus adficio suasoria architecto aggero.",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2019-07-01T23:53:15.738Z"),
      employeeUserId: "<id>",
      endAt: new Date("2026-08-26T05:07:47.633Z"),
      hours: 8,
      id: "6d978792-6ea8-4343-a1de-957917b11392",
      isApproved: true,
      startAt: new Date("2023-06-25T06:59:35.782Z"),
      updatedAt: new Date("2021-06-23T02:35:54.489Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisUpdateHrisTimeshift failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHrisTimeshiftRequest](../../sdk/models/operations/updatehristimeshiftrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisTimeshift](../../sdk/models/shared/hristimeshift.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |