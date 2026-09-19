# Activity

## Overview

### Available Operations

* [createAtsActivity](#createatsactivity) - Create an activity
* [createLmsActivity](#createlmsactivity) - Create an activity
* [getAtsActivity](#getatsactivity) - Retrieve an activity
* [getClubsActivity](#getclubsactivity) - Retrieve an activity
* [getLmsActivity](#getlmsactivity) - Retrieve an activity
* [listAtsActivities](#listatsactivities) - List all activities
* [listClubsActivities](#listclubsactivities) - List all activities
* [listLmsActivities](#listlmsactivities) - List all activities
* [patchAtsActivity](#patchatsactivity) - Update an activity
* [patchLmsActivity](#patchlmsactivity) - Update an activity
* [removeAtsActivity](#removeatsactivity) - Remove an activity
* [removeLmsActivity](#removelmsactivity) - Remove an activity
* [updateAtsActivity](#updateatsactivity) - Update an activity
* [updateLmsActivity](#updatelmsactivity) - Update an activity

## createAtsActivity

Create an activity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAtsActivity" method="post" path="/ats/{connection_id}/activity" example="ats_activity" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.activity.createAtsActivity({
    atsActivity: {
      bcc: [
        {
          email: "Mabel_Schuppe-Schowalter42@hotmail.com",
          name: "Rochelle Franey-Bechtelar",
          type: "HOME",
        },
      ],
      cc: [
        {
          email: "Sasha24@hotmail.com",
          name: "Dr. Elbert Kuvalis",
          type: "HOME",
        },
        {
          email: "Rosetta_Donnelly@gmail.com",
          name: "Ramon Daniel",
          type: "OTHER",
        },
        {
          email: "Kathryne_Jast@yahoo.com",
          name: "Christian Jacobson",
          type: "OTHER",
        },
        {
          email: "Eldred95@yahoo.com",
          name: "Edna Bogan",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Amplus.",
      from: {
        email: "Norwood.Wiza47@yahoo.com",
        name: "Toby Grant",
        type: "OTHER",
      },
      id: "1ffc1186-2a83-4ab3-8889-f3b5571c696b",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "20428482-120c-4b8a-b178-46630ccdec4c",
          namespace: "activity",
          slug: "acer",
          value: "Pauci eius cena adamo summisse arguo pectus communis arcesso tergeo.",
        },
        {
          extraData: {

          },
          format: "TEXT",
          id: "17d145ad-e463-4034-87d3-498759c97e2f",
          namespace: "activity",
          slug: "tremo",
          value: "Amita delectus dicta temptatio utroque ex.",
        },
      ],
      subType: "TASK",
      title: "Senior Interactions Manager",
      to: [
        {
          email: "Sister91@hotmail.com",
          name: "Eddie Nienow PhD",
          type: "WORK",
        },
      ],
      type: "TASK",
      updatedAt: new Date("2026-03-07T07:41:22.999Z"),
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
import { atsCreateAtsActivity } from "@unified-api/typescript-sdk/funcs/atsCreateAtsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsCreateAtsActivity(unifiedTo, {
    atsActivity: {
      bcc: [
        {
          email: "Mabel_Schuppe-Schowalter42@hotmail.com",
          name: "Rochelle Franey-Bechtelar",
          type: "HOME",
        },
      ],
      cc: [
        {
          email: "Sasha24@hotmail.com",
          name: "Dr. Elbert Kuvalis",
          type: "HOME",
        },
        {
          email: "Rosetta_Donnelly@gmail.com",
          name: "Ramon Daniel",
          type: "OTHER",
        },
        {
          email: "Kathryne_Jast@yahoo.com",
          name: "Christian Jacobson",
          type: "OTHER",
        },
        {
          email: "Eldred95@yahoo.com",
          name: "Edna Bogan",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Amplus.",
      from: {
        email: "Norwood.Wiza47@yahoo.com",
        name: "Toby Grant",
        type: "OTHER",
      },
      id: "1ffc1186-2a83-4ab3-8889-f3b5571c696b",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "20428482-120c-4b8a-b178-46630ccdec4c",
          namespace: "activity",
          slug: "acer",
          value: "Pauci eius cena adamo summisse arguo pectus communis arcesso tergeo.",
        },
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "17d145ad-e463-4034-87d3-498759c97e2f",
          namespace: "activity",
          slug: "tremo",
          value: "Amita delectus dicta temptatio utroque ex.",
        },
      ],
      subType: "TASK",
      title: "Senior Interactions Manager",
      to: [
        {
          email: "Sister91@hotmail.com",
          name: "Eddie Nienow PhD",
          type: "WORK",
        },
      ],
      type: "TASK",
      updatedAt: new Date("2026-03-07T07:41:22.999Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsCreateAtsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAtsActivityRequest](../../sdk/models/operations/createatsactivityrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsActivity](../../sdk/models/shared/atsactivity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createLmsActivity

Create an activity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createLmsActivity" method="post" path="/lms/{connection_id}/activity" example="lms_activity" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.activity.createLmsActivity({
    lmsActivity: {
      assignedGrade: "summopere",
      completedAt: new Date("2025-04-13T07:03:42.212Z"),
      createdAt: new Date("2020-10-17T01:25:21.745Z"),
      durationMinutes: 55,
      id: "35eb9780-b88e-4d56-a9b0-acfc2ebe1e91",
      isCompleted: true,
      progressPercentage: 100,
      startedAt: new Date("2023-12-24T04:54:05.825Z"),
      updatedAt: new Date("2022-01-24T02:13:08.319Z"),
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
import { activityCreateLmsActivity } from "@unified-api/typescript-sdk/funcs/activityCreateLmsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await activityCreateLmsActivity(unifiedTo, {
    lmsActivity: {
      assignedGrade: "summopere",
      completedAt: new Date("2025-04-13T07:03:42.212Z"),
      createdAt: new Date("2020-10-17T01:25:21.745Z"),
      durationMinutes: 55,
      id: "35eb9780-b88e-4d56-a9b0-acfc2ebe1e91",
      isCompleted: true,
      progressPercentage: 100,
      startedAt: new Date("2023-12-24T04:54:05.825Z"),
      updatedAt: new Date("2022-01-24T02:13:08.319Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activityCreateLmsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLmsActivityRequest](../../sdk/models/operations/createlmsactivityrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsActivity](../../sdk/models/shared/lmsactivity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAtsActivity

Retrieve an activity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAtsActivity" method="get" path="/ats/{connection_id}/activity/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.activity.getAtsActivity({
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
import { atsGetAtsActivity } from "@unified-api/typescript-sdk/funcs/atsGetAtsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsGetAtsActivity(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsGetAtsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsActivityRequest](../../sdk/models/operations/getatsactivityrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsActivity](../../sdk/models/shared/atsactivity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getClubsActivity

Retrieve an activity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getClubsActivity" method="get" path="/clubs/{connection_id}/activity/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.activity.getClubsActivity({
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
import { activityGetClubsActivity } from "@unified-api/typescript-sdk/funcs/activityGetClubsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await activityGetClubsActivity(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activityGetClubsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetClubsActivityRequest](../../sdk/models/operations/getclubsactivityrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ClubsActivity](../../sdk/models/shared/clubsactivity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLmsActivity

Retrieve an activity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLmsActivity" method="get" path="/lms/{connection_id}/activity/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.activity.getLmsActivity({
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
import { activityGetLmsActivity } from "@unified-api/typescript-sdk/funcs/activityGetLmsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await activityGetLmsActivity(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activityGetLmsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLmsActivityRequest](../../sdk/models/operations/getlmsactivityrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsActivity](../../sdk/models/shared/lmsactivity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAtsActivities

List all activities

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAtsActivities" method="get" path="/ats/{connection_id}/activity" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.activity.listAtsActivities({
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
import { atsListAtsActivities } from "@unified-api/typescript-sdk/funcs/atsListAtsActivities.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsListAtsActivities(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsListAtsActivities failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAtsActivitiesRequest](../../sdk/models/operations/listatsactivitiesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsActivity[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listClubsActivities

List all activities

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listClubsActivities" method="get" path="/clubs/{connection_id}/activity" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.activity.listClubsActivities({
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
import { activityListClubsActivities } from "@unified-api/typescript-sdk/funcs/activityListClubsActivities.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await activityListClubsActivities(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activityListClubsActivities failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListClubsActivitiesRequest](../../sdk/models/operations/listclubsactivitiesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ClubsActivity[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listLmsActivities

List all activities

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listLmsActivities" method="get" path="/lms/{connection_id}/activity" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.activity.listLmsActivities({
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
import { activityListLmsActivities } from "@unified-api/typescript-sdk/funcs/activityListLmsActivities.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await activityListLmsActivities(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activityListLmsActivities failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLmsActivitiesRequest](../../sdk/models/operations/listlmsactivitiesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsActivity[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAtsActivity

Update an activity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAtsActivity" method="patch" path="/ats/{connection_id}/activity/{id}" example="ats_activity" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.activity.patchAtsActivity({
    atsActivity: {
      bcc: [
        {
          email: "Mabel_Schuppe-Schowalter42@hotmail.com",
          name: "Rochelle Franey-Bechtelar",
          type: "HOME",
        },
      ],
      cc: [
        {
          email: "Sasha24@hotmail.com",
          name: "Dr. Elbert Kuvalis",
          type: "HOME",
        },
        {
          email: "Rosetta_Donnelly@gmail.com",
          name: "Ramon Daniel",
          type: "OTHER",
        },
        {
          email: "Kathryne_Jast@yahoo.com",
          name: "Christian Jacobson",
          type: "OTHER",
        },
        {
          email: "Eldred95@yahoo.com",
          name: "Edna Bogan",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Amplus.",
      from: {
        email: "Norwood.Wiza47@yahoo.com",
        name: "Toby Grant",
        type: "OTHER",
      },
      id: "26d24fbd-b757-4b81-88e8-c23de1dbd158",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "2998e920-2d4c-44a1-bd92-1b642abbea47",
          namespace: "activity",
          slug: "acer",
          value: "Pauci eius cena adamo summisse arguo pectus communis arcesso tergeo.",
        },
        {
          extraData: {

          },
          format: "TEXT",
          id: "f4b7288c-a0e5-4480-8e4b-6ad1a02957ce",
          namespace: "activity",
          slug: "tremo",
          value: "Amita delectus dicta temptatio utroque ex.",
        },
      ],
      subType: "TASK",
      title: "Senior Interactions Manager",
      to: [
        {
          email: "Sister91@hotmail.com",
          name: "Eddie Nienow PhD",
          type: "WORK",
        },
      ],
      type: "TASK",
      updatedAt: new Date("2026-03-07T07:41:23.018Z"),
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
import { atsPatchAtsActivity } from "@unified-api/typescript-sdk/funcs/atsPatchAtsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsPatchAtsActivity(unifiedTo, {
    atsActivity: {
      bcc: [
        {
          email: "Mabel_Schuppe-Schowalter42@hotmail.com",
          name: "Rochelle Franey-Bechtelar",
          type: "HOME",
        },
      ],
      cc: [
        {
          email: "Sasha24@hotmail.com",
          name: "Dr. Elbert Kuvalis",
          type: "HOME",
        },
        {
          email: "Rosetta_Donnelly@gmail.com",
          name: "Ramon Daniel",
          type: "OTHER",
        },
        {
          email: "Kathryne_Jast@yahoo.com",
          name: "Christian Jacobson",
          type: "OTHER",
        },
        {
          email: "Eldred95@yahoo.com",
          name: "Edna Bogan",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Amplus.",
      from: {
        email: "Norwood.Wiza47@yahoo.com",
        name: "Toby Grant",
        type: "OTHER",
      },
      id: "26d24fbd-b757-4b81-88e8-c23de1dbd158",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "2998e920-2d4c-44a1-bd92-1b642abbea47",
          namespace: "activity",
          slug: "acer",
          value: "Pauci eius cena adamo summisse arguo pectus communis arcesso tergeo.",
        },
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "f4b7288c-a0e5-4480-8e4b-6ad1a02957ce",
          namespace: "activity",
          slug: "tremo",
          value: "Amita delectus dicta temptatio utroque ex.",
        },
      ],
      subType: "TASK",
      title: "Senior Interactions Manager",
      to: [
        {
          email: "Sister91@hotmail.com",
          name: "Eddie Nienow PhD",
          type: "WORK",
        },
      ],
      type: "TASK",
      updatedAt: new Date("2026-03-07T07:41:23.018Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsPatchAtsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAtsActivityRequest](../../sdk/models/operations/patchatsactivityrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsActivity](../../sdk/models/shared/atsactivity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchLmsActivity

Update an activity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchLmsActivity" method="patch" path="/lms/{connection_id}/activity/{id}" example="lms_activity" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.activity.patchLmsActivity({
    lmsActivity: {
      assignedGrade: "summopere",
      completedAt: new Date("2025-04-13T07:03:42.217Z"),
      createdAt: new Date("2020-10-17T01:25:21.745Z"),
      durationMinutes: 55,
      id: "cd664f28-66b4-440c-a53f-9cf1dc0d3ce1",
      isCompleted: true,
      progressPercentage: 100,
      startedAt: new Date("2023-12-24T04:54:05.825Z"),
      updatedAt: new Date("2022-01-24T02:13:08.322Z"),
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
import { activityPatchLmsActivity } from "@unified-api/typescript-sdk/funcs/activityPatchLmsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await activityPatchLmsActivity(unifiedTo, {
    lmsActivity: {
      assignedGrade: "summopere",
      completedAt: new Date("2025-04-13T07:03:42.217Z"),
      createdAt: new Date("2020-10-17T01:25:21.745Z"),
      durationMinutes: 55,
      id: "cd664f28-66b4-440c-a53f-9cf1dc0d3ce1",
      isCompleted: true,
      progressPercentage: 100,
      startedAt: new Date("2023-12-24T04:54:05.825Z"),
      updatedAt: new Date("2022-01-24T02:13:08.322Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activityPatchLmsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchLmsActivityRequest](../../sdk/models/operations/patchlmsactivityrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsActivity](../../sdk/models/shared/lmsactivity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAtsActivity

Remove an activity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAtsActivity" method="delete" path="/ats/{connection_id}/activity/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.activity.removeAtsActivity({
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
import { atsRemoveAtsActivity } from "@unified-api/typescript-sdk/funcs/atsRemoveAtsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsRemoveAtsActivity(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsRemoveAtsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAtsActivityRequest](../../sdk/models/operations/removeatsactivityrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAtsActivityResponse](../../sdk/models/operations/removeatsactivityresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeLmsActivity

Remove an activity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeLmsActivity" method="delete" path="/lms/{connection_id}/activity/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.activity.removeLmsActivity({
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
import { activityRemoveLmsActivity } from "@unified-api/typescript-sdk/funcs/activityRemoveLmsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await activityRemoveLmsActivity(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activityRemoveLmsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveLmsActivityRequest](../../sdk/models/operations/removelmsactivityrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveLmsActivityResponse](../../sdk/models/operations/removelmsactivityresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAtsActivity

Update an activity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAtsActivity" method="put" path="/ats/{connection_id}/activity/{id}" example="ats_activity" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.activity.updateAtsActivity({
    atsActivity: {
      bcc: [
        {
          email: "Mabel_Schuppe-Schowalter42@hotmail.com",
          name: "Rochelle Franey-Bechtelar",
          type: "HOME",
        },
      ],
      cc: [
        {
          email: "Sasha24@hotmail.com",
          name: "Dr. Elbert Kuvalis",
          type: "HOME",
        },
        {
          email: "Rosetta_Donnelly@gmail.com",
          name: "Ramon Daniel",
          type: "OTHER",
        },
        {
          email: "Kathryne_Jast@yahoo.com",
          name: "Christian Jacobson",
          type: "OTHER",
        },
        {
          email: "Eldred95@yahoo.com",
          name: "Edna Bogan",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Amplus.",
      from: {
        email: "Norwood.Wiza47@yahoo.com",
        name: "Toby Grant",
        type: "OTHER",
      },
      id: "26d24fbd-b757-4b81-88e8-c23de1dbd158",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "2998e920-2d4c-44a1-bd92-1b642abbea47",
          namespace: "activity",
          slug: "acer",
          value: "Pauci eius cena adamo summisse arguo pectus communis arcesso tergeo.",
        },
        {
          extraData: {

          },
          format: "TEXT",
          id: "f4b7288c-a0e5-4480-8e4b-6ad1a02957ce",
          namespace: "activity",
          slug: "tremo",
          value: "Amita delectus dicta temptatio utroque ex.",
        },
      ],
      subType: "TASK",
      title: "Senior Interactions Manager",
      to: [
        {
          email: "Sister91@hotmail.com",
          name: "Eddie Nienow PhD",
          type: "WORK",
        },
      ],
      type: "TASK",
      updatedAt: new Date("2026-03-07T07:41:23.018Z"),
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
import { atsUpdateAtsActivity } from "@unified-api/typescript-sdk/funcs/atsUpdateAtsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsUpdateAtsActivity(unifiedTo, {
    atsActivity: {
      bcc: [
        {
          email: "Mabel_Schuppe-Schowalter42@hotmail.com",
          name: "Rochelle Franey-Bechtelar",
          type: "HOME",
        },
      ],
      cc: [
        {
          email: "Sasha24@hotmail.com",
          name: "Dr. Elbert Kuvalis",
          type: "HOME",
        },
        {
          email: "Rosetta_Donnelly@gmail.com",
          name: "Ramon Daniel",
          type: "OTHER",
        },
        {
          email: "Kathryne_Jast@yahoo.com",
          name: "Christian Jacobson",
          type: "OTHER",
        },
        {
          email: "Eldred95@yahoo.com",
          name: "Edna Bogan",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Amplus.",
      from: {
        email: "Norwood.Wiza47@yahoo.com",
        name: "Toby Grant",
        type: "OTHER",
      },
      id: "26d24fbd-b757-4b81-88e8-c23de1dbd158",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "2998e920-2d4c-44a1-bd92-1b642abbea47",
          namespace: "activity",
          slug: "acer",
          value: "Pauci eius cena adamo summisse arguo pectus communis arcesso tergeo.",
        },
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "f4b7288c-a0e5-4480-8e4b-6ad1a02957ce",
          namespace: "activity",
          slug: "tremo",
          value: "Amita delectus dicta temptatio utroque ex.",
        },
      ],
      subType: "TASK",
      title: "Senior Interactions Manager",
      to: [
        {
          email: "Sister91@hotmail.com",
          name: "Eddie Nienow PhD",
          type: "WORK",
        },
      ],
      type: "TASK",
      updatedAt: new Date("2026-03-07T07:41:23.018Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsUpdateAtsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAtsActivityRequest](../../sdk/models/operations/updateatsactivityrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsActivity](../../sdk/models/shared/atsactivity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateLmsActivity

Update an activity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateLmsActivity" method="put" path="/lms/{connection_id}/activity/{id}" example="lms_activity" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.activity.updateLmsActivity({
    lmsActivity: {
      assignedGrade: "summopere",
      completedAt: new Date("2025-04-13T07:03:42.217Z"),
      createdAt: new Date("2020-10-17T01:25:21.745Z"),
      durationMinutes: 55,
      id: "cd664f28-66b4-440c-a53f-9cf1dc0d3ce1",
      isCompleted: true,
      progressPercentage: 100,
      startedAt: new Date("2023-12-24T04:54:05.825Z"),
      updatedAt: new Date("2022-01-24T02:13:08.322Z"),
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
import { activityUpdateLmsActivity } from "@unified-api/typescript-sdk/funcs/activityUpdateLmsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await activityUpdateLmsActivity(unifiedTo, {
    lmsActivity: {
      assignedGrade: "summopere",
      completedAt: new Date("2025-04-13T07:03:42.217Z"),
      createdAt: new Date("2020-10-17T01:25:21.745Z"),
      durationMinutes: 55,
      id: "cd664f28-66b4-440c-a53f-9cf1dc0d3ce1",
      isCompleted: true,
      progressPercentage: 100,
      startedAt: new Date("2023-12-24T04:54:05.825Z"),
      updatedAt: new Date("2022-01-24T02:13:08.322Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activityUpdateLmsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLmsActivityRequest](../../sdk/models/operations/updatelmsactivityrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsActivity](../../sdk/models/shared/lmsactivity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |