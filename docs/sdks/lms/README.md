# Lms

## Overview

### Available Operations

* [createLmsActivity](#createlmsactivity) - Create an activity
* [createLmsClass](#createlmsclass) - Create a class
* [createLmsCollection](#createlmscollection) - Create a collection
* [createLmsContent](#createlmscontent) - Create a content
* [createLmsCourse](#createlmscourse) - Create a course
* [createLmsInstructor](#createlmsinstructor) - Create an instructor
* [createLmsStudent](#createlmsstudent) - Create a student
* [getLmsActivity](#getlmsactivity) - Retrieve an activity
* [getLmsClass](#getlmsclass) - Retrieve a class
* [getLmsCollection](#getlmscollection) - Retrieve a collection
* [getLmsContent](#getlmscontent) - Retrieve a content
* [getLmsCourse](#getlmscourse) - Retrieve a course
* [getLmsInstructor](#getlmsinstructor) - Retrieve an instructor
* [getLmsStudent](#getlmsstudent) - Retrieve a student
* [listLmsActivities](#listlmsactivities) - List all activities
* [listLmsClasses](#listlmsclasses) - List all classes
* [listLmsCollections](#listlmscollections) - List all collections
* [listLmsContents](#listlmscontents) - List all contents
* [listLmsCourses](#listlmscourses) - List all courses
* [listLmsInstructors](#listlmsinstructors) - List all instructors
* [listLmsStudents](#listlmsstudents) - List all students
* [patchLmsActivity](#patchlmsactivity) - Update an activity
* [patchLmsClass](#patchlmsclass) - Update a class
* [patchLmsCollection](#patchlmscollection) - Update a collection
* [patchLmsContent](#patchlmscontent) - Update a content
* [patchLmsCourse](#patchlmscourse) - Update a course
* [patchLmsInstructor](#patchlmsinstructor) - Update an instructor
* [patchLmsStudent](#patchlmsstudent) - Update a student
* [removeLmsActivity](#removelmsactivity) - Remove an activity
* [removeLmsClass](#removelmsclass) - Remove a class
* [removeLmsCollection](#removelmscollection) - Remove a collection
* [removeLmsContent](#removelmscontent) - Remove a content
* [removeLmsCourse](#removelmscourse) - Remove a course
* [removeLmsInstructor](#removelmsinstructor) - Remove an instructor
* [removeLmsStudent](#removelmsstudent) - Remove a student
* [updateLmsActivity](#updatelmsactivity) - Update an activity
* [updateLmsClass](#updatelmsclass) - Update a class
* [updateLmsCollection](#updatelmscollection) - Update a collection
* [updateLmsContent](#updatelmscontent) - Update a content
* [updateLmsCourse](#updatelmscourse) - Update a course
* [updateLmsInstructor](#updatelmsinstructor) - Update an instructor
* [updateLmsStudent](#updatelmsstudent) - Update a student

## createLmsActivity

Creates a LmsActivity. Provide the unified LmsActivity fields in the request body; they are mapped to the provider's API. Returns the created LmsActivity.

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
  const result = await unifiedTo.lms.createLmsActivity({
    lmsActivity: {
      assignedGrade: "deserunt",
      completedAt: new Date("2023-12-24T16:56:11.328Z"),
      createdAt: new Date("2020-10-17T01:25:21.745Z"),
      durationMinutes: 55,
      id: "84846f35-9e5a-496d-baa3-24aedc533020",
      isCompleted: true,
      metadata: [],
      progressPercentage: 100,
      startedAt: new Date("2021-04-28T06:59:42.629Z"),
      updatedAt: new Date("2022-02-07T16:28:36.452Z"),
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
      assignedGrade: "deserunt",
      completedAt: new Date("2023-12-24T16:56:11.328Z"),
      createdAt: new Date("2020-10-17T01:25:21.745Z"),
      durationMinutes: 55,
      id: "84846f35-9e5a-496d-baa3-24aedc533020",
      isCompleted: true,
      metadata: [],
      progressPercentage: 100,
      startedAt: new Date("2021-04-28T06:59:42.629Z"),
      updatedAt: new Date("2022-02-07T16:28:36.452Z"),
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

## createLmsClass

Creates a LmsClass. Provide the unified LmsClass fields in the request body; they are mapped to the provider's API. Returns the created LmsClass.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createLmsClass" method="post" path="/lms/{connection_id}/class" example="lms_class" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.createLmsClass({
    lmsClass: {
      createdAt: new Date("2020-02-20T14:48:51.845Z"),
      description: "Animus callide corpus.",
      id: "df86bd14-9ab4-4acb-aa0b-dedc727a993a",
      instructors: [],
      languages: [
        "in",
      ],
      media: [
        {
          content: "Ceno earum culpa adhaero tabesco apostolus talis. Ultra accommodo deinde sono culpo arto cruciamentum triduana. Solvo uter adficio.",
          description: "Defetiscor aetas.",
          languages: [
            "ko",
            "lv",
          ],
          name: "suspendo",
          thumbnailUrl: "https://picsum.photos/seed/coddeQdTZn/105/852",
          type: "VIDEO",
          url: "https://picsum.photos/seed/wl3tnt/2277/2170",
        },
      ],
      metadata: [],
      name: "sperno",
      students: [],
      updatedAt: new Date("2025-09-02T06:01:03.196Z"),
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
import { lmsCreateLmsClass } from "@unified-api/typescript-sdk/funcs/lmsCreateLmsClass.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsCreateLmsClass(unifiedTo, {
    lmsClass: {
      createdAt: new Date("2020-02-20T14:48:51.845Z"),
      description: "Animus callide corpus.",
      id: "df86bd14-9ab4-4acb-aa0b-dedc727a993a",
      instructors: [],
      languages: [
        "in",
      ],
      media: [
        {
          content: "Ceno earum culpa adhaero tabesco apostolus talis. Ultra accommodo deinde sono culpo arto cruciamentum triduana. Solvo uter adficio.",
          description: "Defetiscor aetas.",
          languages: [
            "ko",
            "lv",
          ],
          name: "suspendo",
          thumbnailUrl: "https://picsum.photos/seed/coddeQdTZn/105/852",
          type: "VIDEO",
          url: "https://picsum.photos/seed/wl3tnt/2277/2170",
        },
      ],
      metadata: [],
      name: "sperno",
      students: [],
      updatedAt: new Date("2025-09-02T06:01:03.196Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsCreateLmsClass failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLmsClassRequest](../../sdk/models/operations/createlmsclassrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsClass](../../sdk/models/shared/lmsclass.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createLmsCollection

Creates a LmsCollection. Provide the unified LmsCollection fields in the request body; they are mapped to the provider's API. Returns the created LmsCollection.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createLmsCollection" method="post" path="/lms/{connection_id}/collection" example="lms_collection" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.createLmsCollection({
    lmsCollection: {
      createdAt: new Date("2019-08-19T14:40:29.227Z"),
      description: "Defluo.",
      id: "e9c8a809-c614-43ce-976d-722c51be4b4e",
      isActive: true,
      media: [
        {
          content: "Sollers adeo caste brevis denuo attonbitus. Amita ducimus capillus claudeo vulgaris temporibus arbustum solium. Degusto suppono commodo fuga surculus tripudio doloribus. Quaerat cauda civitas carcer alveus alienus sperno vetus. Adulescens conspergo appositus arguo. Fugiat cimentarius depono angustus somniculosus tubineus terra beatae sui.",
          description: "Alias sit careo vesco tollo.",
          languages: [
            "eo",
          ],
          name: "aiunt",
          thumbnailUrl: "https://picsum.photos/seed/Iy2MXlem/2398/73",
          type: "HEADSHOT",
          url: "https://picsum.photos/seed/5KfxRKbzo1/2699/3216",
        },
      ],
      metadata: [],
      name: "spargo",
      updatedAt: new Date("2026-09-03T01:09:42.071Z"),
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
import { collectionCreateLmsCollection } from "@unified-api/typescript-sdk/funcs/collectionCreateLmsCollection.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await collectionCreateLmsCollection(unifiedTo, {
    lmsCollection: {
      createdAt: new Date("2019-08-19T14:40:29.227Z"),
      description: "Defluo.",
      id: "e9c8a809-c614-43ce-976d-722c51be4b4e",
      isActive: true,
      media: [
        {
          content: "Sollers adeo caste brevis denuo attonbitus. Amita ducimus capillus claudeo vulgaris temporibus arbustum solium. Degusto suppono commodo fuga surculus tripudio doloribus. Quaerat cauda civitas carcer alveus alienus sperno vetus. Adulescens conspergo appositus arguo. Fugiat cimentarius depono angustus somniculosus tubineus terra beatae sui.",
          description: "Alias sit careo vesco tollo.",
          languages: [
            "eo",
          ],
          name: "aiunt",
          thumbnailUrl: "https://picsum.photos/seed/Iy2MXlem/2398/73",
          type: "HEADSHOT",
          url: "https://picsum.photos/seed/5KfxRKbzo1/2699/3216",
        },
      ],
      metadata: [],
      name: "spargo",
      updatedAt: new Date("2026-09-03T01:09:42.071Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionCreateLmsCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLmsCollectionRequest](../../sdk/models/operations/createlmscollectionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsCollection](../../sdk/models/shared/lmscollection.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createLmsContent

Creates a LmsContent. Provide the unified LmsContent fields in the request body; they are mapped to the provider's API. Returns the created LmsContent.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createLmsContent" method="post" path="/lms/{connection_id}/content" example="lms_content" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.createLmsContent({
    lmsContent: {
      categories: [
        "tergum",
      ],
      createdAt: new Date("2020-10-22T22:30:50.963Z"),
      description: "Adflicto despecto suppellex socius cresco.",
      difficulty: "Beginner",
      durationMinutes: 19,
      id: "0925a670-de4e-4351-a2cc-ccb0d92ecfb3",
      instructors: [],
      isActive: true,
      languages: [
        "campana",
        "viriliter",
      ],
      localizations: [
        {
          description: "Vindico vorago.",
          language: "es",
          name: "aeger",
        },
        {
          description: "Sulum.",
          language: "es",
          name: "voluptate",
        },
      ],
      media: [
        {
          content: "Cohors necessitatibus beatae copiose copiose cedo sub decens acer. Spiritus velum adulatio commodi textus beneficium termes comedo valde caste. Sodalitas bos timor abeo cur. Sperno decet acquiro tabgo canto terminatio acidus tripudio teres. Compono demum aut aestivus ambitus pecus tergum verumtamen vestrum.",
          description: "Incidunt tepidus commemoro voro ocer.",
          languages: [
            "ro",
            "af",
          ],
          name: "antepono",
          thumbnailUrl: "https://picsum.photos/seed/URbmlO66Wk/587/3603",
          type: "OTHER",
          url: "https://picsum.photos/seed/4KFvVbCx83/2788/2850",
        },
        {
          content: "Ago neque qui cursim tunc barba decens. Tutamen amplus tabella tabgo infit. Demo adversus capillus aro unus. Dedico aspicio alius vehemens terminatio varietas vomica voluptatibus apud. Defero decet impedit verbera pauci laboriosam molestiae urbanus mollitia. Vergo crux certus nulla.",
          description: "Bene doloribus.",
          languages: [
            "ru",
            "sw",
          ],
          name: "totidem",
          thumbnailUrl: "https://picsum.photos/seed/qpRev/1286/3718",
          type: "WEB",
          url: "https://picsum.photos/seed/JOWrp5/254/2004",
        },
        {
          content: "Laborum adiuvo labore officia demulceo. Abduco mollitia ventosus synagoga certus magni vado cilicium stella. Velut capitulus attero odio advenio similique acsi totam atavus aufero. Ventosus campana animi.",
          description: "Trucido dens pecus aer stella.",
          languages: [
            "is",
            "sk",
          ],
          name: "territo",
          thumbnailUrl: "https://picsum.photos/seed/81EuDedaf/557/986",
          type: "IMAGE",
          url: "https://picsum.photos/seed/BtV2eDuVm7/3644/1033",
        },
      ],
      metadata: [],
      name: "laboriosam",
      providerName: "Mraz - Keeling",
      publishedAt: new Date("2022-09-14T09:58:46.061Z"),
      shortDescription: "Videlicet pauci.",
      skills: [
        "soleo",
      ],
      sortOrder: 3,
      subjects: [
        {
          name: "clam",
          rank: 1,
        },
      ],
      tags: [
        "audio",
      ],
      updatedAt: new Date("2022-10-15T20:25:11.578Z"),
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
import { lmsCreateLmsContent } from "@unified-api/typescript-sdk/funcs/lmsCreateLmsContent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsCreateLmsContent(unifiedTo, {
    lmsContent: {
      categories: [
        "tergum",
      ],
      createdAt: new Date("2020-10-22T22:30:50.963Z"),
      description: "Adflicto despecto suppellex socius cresco.",
      difficulty: "Beginner",
      durationMinutes: 19,
      id: "0925a670-de4e-4351-a2cc-ccb0d92ecfb3",
      instructors: [],
      isActive: true,
      languages: [
        "campana",
        "viriliter",
      ],
      localizations: [
        {
          description: "Vindico vorago.",
          language: "es",
          name: "aeger",
        },
        {
          description: "Sulum.",
          language: "es",
          name: "voluptate",
        },
      ],
      media: [
        {
          content: "Cohors necessitatibus beatae copiose copiose cedo sub decens acer. Spiritus velum adulatio commodi textus beneficium termes comedo valde caste. Sodalitas bos timor abeo cur. Sperno decet acquiro tabgo canto terminatio acidus tripudio teres. Compono demum aut aestivus ambitus pecus tergum verumtamen vestrum.",
          description: "Incidunt tepidus commemoro voro ocer.",
          languages: [
            "ro",
            "af",
          ],
          name: "antepono",
          thumbnailUrl: "https://picsum.photos/seed/URbmlO66Wk/587/3603",
          type: "OTHER",
          url: "https://picsum.photos/seed/4KFvVbCx83/2788/2850",
        },
        {
          content: "Ago neque qui cursim tunc barba decens. Tutamen amplus tabella tabgo infit. Demo adversus capillus aro unus. Dedico aspicio alius vehemens terminatio varietas vomica voluptatibus apud. Defero decet impedit verbera pauci laboriosam molestiae urbanus mollitia. Vergo crux certus nulla.",
          description: "Bene doloribus.",
          languages: [
            "ru",
            "sw",
          ],
          name: "totidem",
          thumbnailUrl: "https://picsum.photos/seed/qpRev/1286/3718",
          type: "WEB",
          url: "https://picsum.photos/seed/JOWrp5/254/2004",
        },
        {
          content: "Laborum adiuvo labore officia demulceo. Abduco mollitia ventosus synagoga certus magni vado cilicium stella. Velut capitulus attero odio advenio similique acsi totam atavus aufero. Ventosus campana animi.",
          description: "Trucido dens pecus aer stella.",
          languages: [
            "is",
            "sk",
          ],
          name: "territo",
          thumbnailUrl: "https://picsum.photos/seed/81EuDedaf/557/986",
          type: "IMAGE",
          url: "https://picsum.photos/seed/BtV2eDuVm7/3644/1033",
        },
      ],
      metadata: [],
      name: "laboriosam",
      providerName: "Mraz - Keeling",
      publishedAt: new Date("2022-09-14T09:58:46.061Z"),
      shortDescription: "Videlicet pauci.",
      skills: [
        "soleo",
      ],
      sortOrder: 3,
      subjects: [
        {
          name: "clam",
          rank: 1,
        },
      ],
      tags: [
        "audio",
      ],
      updatedAt: new Date("2022-10-15T20:25:11.578Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsCreateLmsContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLmsContentRequest](../../sdk/models/operations/createlmscontentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsContent](../../sdk/models/shared/lmscontent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createLmsCourse

Creates a LmsCourse. Provide the unified LmsCourse fields in the request body; they are mapped to the provider's API. Returns the created LmsCourse.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createLmsCourse" method="post" path="/lms/{connection_id}/course" example="lms_course" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.createLmsCourse({
    lmsCourse: {
      categories: [
        "deripio",
        "tergiversatio",
      ],
      createdAt: new Date("2022-10-06T09:58:53.559Z"),
      currency: "DZD",
      description: "Aut.",
      durationMinutes: 148,
      id: "c813ed25-c01d-49aa-9db1-26284e073e56",
      instructors: [],
      isActive: true,
      isPrivate: false,
      languages: [
        "capitulus",
        "desparatus",
        "earum",
      ],
      media: [
        {
          content: "Carbo dapifer adeptio. Ipsum utrimque quae architecto repellendus cum. Conitor anser abutor error adsuesco abeo caelestis.",
          description: "Accommodo adipiscor campana aegrotatio.",
          languages: [
            "el",
            "hr",
          ],
          name: "conduco",
          thumbnailUrl: "https://picsum.photos/seed/yTatRhK/3873/3840",
          type: "OTHER",
          url: "https://picsum.photos/seed/vcfQAbs/3357/2472",
        },
      ],
      metadata: [],
      name: "vinco",
      priceAmount: 84,
      providerName: "Roberts Group",
      publishedAt: new Date("2022-11-06T11:53:42.380Z"),
      skills: [
        "aveho",
        "via",
      ],
      students: [],
      timeEstimateMinutes: 100,
      updatedAt: new Date("2023-02-12T20:04:59.681Z"),
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
import { lmsCreateLmsCourse } from "@unified-api/typescript-sdk/funcs/lmsCreateLmsCourse.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsCreateLmsCourse(unifiedTo, {
    lmsCourse: {
      categories: [
        "deripio",
        "tergiversatio",
      ],
      createdAt: new Date("2022-10-06T09:58:53.559Z"),
      currency: "DZD",
      description: "Aut.",
      durationMinutes: 148,
      id: "c813ed25-c01d-49aa-9db1-26284e073e56",
      instructors: [],
      isActive: true,
      isPrivate: false,
      languages: [
        "capitulus",
        "desparatus",
        "earum",
      ],
      media: [
        {
          content: "Carbo dapifer adeptio. Ipsum utrimque quae architecto repellendus cum. Conitor anser abutor error adsuesco abeo caelestis.",
          description: "Accommodo adipiscor campana aegrotatio.",
          languages: [
            "el",
            "hr",
          ],
          name: "conduco",
          thumbnailUrl: "https://picsum.photos/seed/yTatRhK/3873/3840",
          type: "OTHER",
          url: "https://picsum.photos/seed/vcfQAbs/3357/2472",
        },
      ],
      metadata: [],
      name: "vinco",
      priceAmount: 84,
      providerName: "Roberts Group",
      publishedAt: new Date("2022-11-06T11:53:42.380Z"),
      skills: [
        "aveho",
        "via",
      ],
      students: [],
      timeEstimateMinutes: 100,
      updatedAt: new Date("2023-02-12T20:04:59.681Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsCreateLmsCourse failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLmsCourseRequest](../../sdk/models/operations/createlmscourserequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsCourse](../../sdk/models/shared/lmscourse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createLmsInstructor

Creates a LmsInstructor. Provide the unified LmsInstructor fields in the request body; they are mapped to the provider's API. Returns the created LmsInstructor.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createLmsInstructor" method="post" path="/lms/{connection_id}/instructor" example="lms_instructor" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.createLmsInstructor({
    lmsInstructor: {
      createdAt: new Date("2021-10-12T16:38:54.979Z"),
      emails: [
        {},
      ],
      firstName: "Miranda",
      id: "3c4f9112-f8e1-4074-835d-8a6a061e6915",
      imageUrl: "https://avatars.githubusercontent.com/u/96902788",
      lastName: "Turcotte",
      metadata: [],
      name: "Miranda Turcotte",
      telephones: [
        {
          telephone: "(752) 816-3330",
          type: "WORK",
        },
        {
          telephone: "(415) 345-1798",
          type: "HOME",
        },
      ],
      title: "Customer Brand Planner",
      updatedAt: new Date("2025-08-20T10:38:15.324Z"),
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
import { lmsCreateLmsInstructor } from "@unified-api/typescript-sdk/funcs/lmsCreateLmsInstructor.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsCreateLmsInstructor(unifiedTo, {
    lmsInstructor: {
      createdAt: new Date("2021-10-12T16:38:54.979Z"),
      emails: [
        {},
      ],
      firstName: "Miranda",
      id: "3c4f9112-f8e1-4074-835d-8a6a061e6915",
      imageUrl: "https://avatars.githubusercontent.com/u/96902788",
      lastName: "Turcotte",
      metadata: [],
      name: "Miranda Turcotte",
      telephones: [
        {
          telephone: "(752) 816-3330",
          type: "WORK",
        },
        {
          telephone: "(415) 345-1798",
          type: "HOME",
        },
      ],
      title: "Customer Brand Planner",
      updatedAt: new Date("2025-08-20T10:38:15.324Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsCreateLmsInstructor failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLmsInstructorRequest](../../sdk/models/operations/createlmsinstructorrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsInstructor](../../sdk/models/shared/lmsinstructor.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createLmsStudent

Creates a LmsStudent. Provide the unified LmsStudent fields in the request body; they are mapped to the provider's API. Returns the created LmsStudent.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createLmsStudent" method="post" path="/lms/{connection_id}/student" example="lms_student" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.createLmsStudent({
    lmsStudent: {
      address: {
        address1: "4610 Smith Cove",
        city: "Lake Milanchester",
        countryCode: "US",
        postalCode: "58634-4787",
        region: "Iowa",
        regionCode: "AZ",
      },
      createdAt: new Date("2020-03-23T06:59:29.777Z"),
      emails: [
        {},
      ],
      firstName: "Lazaro",
      id: "f8cede2f-404d-4164-9d69-09bc659189a3",
      imageUrl: "https://avatars.githubusercontent.com/u/3245424",
      lastName: "Zulauf-Schowalter",
      metadata: [],
      name: "Lazaro Zulauf-Schowalter",
      telephones: [
        {
          telephone: "(476) 500-2870",
          type: "WORK",
        },
        {
          telephone: "(338) 436-9806",
          type: "FAX",
        },
        {
          telephone: "(852) 940-8205",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2022-07-13T08:51:18.718Z"),
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
import { lmsCreateLmsStudent } from "@unified-api/typescript-sdk/funcs/lmsCreateLmsStudent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsCreateLmsStudent(unifiedTo, {
    lmsStudent: {
      address: {
        address1: "4610 Smith Cove",
        city: "Lake Milanchester",
        countryCode: "US",
        postalCode: "58634-4787",
        region: "Iowa",
        regionCode: "AZ",
      },
      createdAt: new Date("2020-03-23T06:59:29.777Z"),
      emails: [
        {},
      ],
      firstName: "Lazaro",
      id: "f8cede2f-404d-4164-9d69-09bc659189a3",
      imageUrl: "https://avatars.githubusercontent.com/u/3245424",
      lastName: "Zulauf-Schowalter",
      metadata: [],
      name: "Lazaro Zulauf-Schowalter",
      telephones: [
        {
          telephone: "(476) 500-2870",
          type: "WORK",
        },
        {
          telephone: "(338) 436-9806",
          type: "FAX",
        },
        {
          telephone: "(852) 940-8205",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2022-07-13T08:51:18.718Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsCreateLmsStudent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLmsStudentRequest](../../sdk/models/operations/createlmsstudentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsStudent](../../sdk/models/shared/lmsstudent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLmsActivity

Retrieves a single LmsActivity by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

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
  const result = await unifiedTo.lms.getLmsActivity({
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

## getLmsClass

Retrieves a single LmsClass by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLmsClass" method="get" path="/lms/{connection_id}/class/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.getLmsClass({
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
import { lmsGetLmsClass } from "@unified-api/typescript-sdk/funcs/lmsGetLmsClass.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsGetLmsClass(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsGetLmsClass failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLmsClassRequest](../../sdk/models/operations/getlmsclassrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsClass](../../sdk/models/shared/lmsclass.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLmsCollection

Retrieves a single LmsCollection by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLmsCollection" method="get" path="/lms/{connection_id}/collection/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.getLmsCollection({
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
import { collectionGetLmsCollection } from "@unified-api/typescript-sdk/funcs/collectionGetLmsCollection.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await collectionGetLmsCollection(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionGetLmsCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLmsCollectionRequest](../../sdk/models/operations/getlmscollectionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsCollection](../../sdk/models/shared/lmscollection.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLmsContent

Retrieves a single LmsContent by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLmsContent" method="get" path="/lms/{connection_id}/content/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.getLmsContent({
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
import { lmsGetLmsContent } from "@unified-api/typescript-sdk/funcs/lmsGetLmsContent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsGetLmsContent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsGetLmsContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLmsContentRequest](../../sdk/models/operations/getlmscontentrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsContent](../../sdk/models/shared/lmscontent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLmsCourse

Retrieves a single LmsCourse by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLmsCourse" method="get" path="/lms/{connection_id}/course/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.getLmsCourse({
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
import { lmsGetLmsCourse } from "@unified-api/typescript-sdk/funcs/lmsGetLmsCourse.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsGetLmsCourse(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsGetLmsCourse failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLmsCourseRequest](../../sdk/models/operations/getlmscourserequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsCourse](../../sdk/models/shared/lmscourse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLmsInstructor

Retrieves a single LmsInstructor by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLmsInstructor" method="get" path="/lms/{connection_id}/instructor/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.getLmsInstructor({
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
import { lmsGetLmsInstructor } from "@unified-api/typescript-sdk/funcs/lmsGetLmsInstructor.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsGetLmsInstructor(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsGetLmsInstructor failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLmsInstructorRequest](../../sdk/models/operations/getlmsinstructorrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsInstructor](../../sdk/models/shared/lmsinstructor.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLmsStudent

Retrieves a single LmsStudent by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLmsStudent" method="get" path="/lms/{connection_id}/student/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.getLmsStudent({
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
import { lmsGetLmsStudent } from "@unified-api/typescript-sdk/funcs/lmsGetLmsStudent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsGetLmsStudent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsGetLmsStudent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLmsStudentRequest](../../sdk/models/operations/getlmsstudentrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsStudent](../../sdk/models/shared/lmsstudent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listLmsActivities

Returns a list of LmsActivities. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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
  const result = await unifiedTo.lms.listLmsActivities({
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

## listLmsClasses

Returns a list of LmsClasses. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listLmsClasses" method="get" path="/lms/{connection_id}/class" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.listLmsClasses({
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
import { lmsListLmsClasses } from "@unified-api/typescript-sdk/funcs/lmsListLmsClasses.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsListLmsClasses(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsListLmsClasses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLmsClassesRequest](../../sdk/models/operations/listlmsclassesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsClass[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listLmsCollections

Returns a list of LmsCollections. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listLmsCollections" method="get" path="/lms/{connection_id}/collection" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.listLmsCollections({
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
import { collectionListLmsCollections } from "@unified-api/typescript-sdk/funcs/collectionListLmsCollections.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await collectionListLmsCollections(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionListLmsCollections failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLmsCollectionsRequest](../../sdk/models/operations/listlmscollectionsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsCollection[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listLmsContents

Returns a list of LmsContents. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listLmsContents" method="get" path="/lms/{connection_id}/content" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.listLmsContents({
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
import { lmsListLmsContents } from "@unified-api/typescript-sdk/funcs/lmsListLmsContents.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsListLmsContents(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsListLmsContents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLmsContentsRequest](../../sdk/models/operations/listlmscontentsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsContent[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listLmsCourses

Returns a list of LmsCourses. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listLmsCourses" method="get" path="/lms/{connection_id}/course" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.listLmsCourses({
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
import { lmsListLmsCourses } from "@unified-api/typescript-sdk/funcs/lmsListLmsCourses.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsListLmsCourses(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsListLmsCourses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLmsCoursesRequest](../../sdk/models/operations/listlmscoursesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsCourse[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listLmsInstructors

Returns a list of LmsInstructors. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listLmsInstructors" method="get" path="/lms/{connection_id}/instructor" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.listLmsInstructors({
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
import { lmsListLmsInstructors } from "@unified-api/typescript-sdk/funcs/lmsListLmsInstructors.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsListLmsInstructors(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsListLmsInstructors failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLmsInstructorsRequest](../../sdk/models/operations/listlmsinstructorsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsInstructor[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listLmsStudents

Returns a list of LmsStudents. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listLmsStudents" method="get" path="/lms/{connection_id}/student" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.listLmsStudents({
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
import { lmsListLmsStudents } from "@unified-api/typescript-sdk/funcs/lmsListLmsStudents.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsListLmsStudents(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsListLmsStudents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLmsStudentsRequest](../../sdk/models/operations/listlmsstudentsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsStudent[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchLmsActivity

Updates the LmsActivity identified by `id`. Provide the unified LmsActivity fields to change in the request body.

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
  const result = await unifiedTo.lms.patchLmsActivity({
    lmsActivity: {
      assignedGrade: "deserunt",
      completedAt: new Date("2023-12-24T16:56:11.334Z"),
      createdAt: new Date("2020-10-17T01:25:21.745Z"),
      durationMinutes: 55,
      id: "2225be86-8ae5-4d6b-a44b-551bacdb6fc4",
      isCompleted: true,
      metadata: [],
      progressPercentage: 100,
      startedAt: new Date("2021-04-28T06:59:42.630Z"),
      updatedAt: new Date("2022-02-07T16:28:36.454Z"),
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
      assignedGrade: "deserunt",
      completedAt: new Date("2023-12-24T16:56:11.334Z"),
      createdAt: new Date("2020-10-17T01:25:21.745Z"),
      durationMinutes: 55,
      id: "2225be86-8ae5-4d6b-a44b-551bacdb6fc4",
      isCompleted: true,
      metadata: [],
      progressPercentage: 100,
      startedAt: new Date("2021-04-28T06:59:42.630Z"),
      updatedAt: new Date("2022-02-07T16:28:36.454Z"),
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

## patchLmsClass

Updates the LmsClass identified by `id`. Provide the unified LmsClass fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchLmsClass" method="patch" path="/lms/{connection_id}/class/{id}" example="lms_class" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.patchLmsClass({
    lmsClass: {
      createdAt: new Date("2020-02-20T14:48:51.845Z"),
      description: "Animus callide corpus.",
      id: "feba7e98-5ad1-461a-88b6-016c76e53356",
      instructors: [],
      languages: [
        "in",
      ],
      media: [
        {
          content: "Ceno earum culpa adhaero tabesco apostolus talis. Ultra accommodo deinde sono culpo arto cruciamentum triduana. Solvo uter adficio.",
          description: "Defetiscor aetas.",
          languages: [
            "ko",
            "lv",
          ],
          name: "suspendo",
          thumbnailUrl: "https://picsum.photos/seed/coddeQdTZn/105/852",
          type: "VIDEO",
          url: "https://picsum.photos/seed/wl3tnt/2277/2170",
        },
      ],
      metadata: [],
      name: "sperno",
      students: [],
      updatedAt: new Date("2025-09-02T06:01:03.208Z"),
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
import { lmsPatchLmsClass } from "@unified-api/typescript-sdk/funcs/lmsPatchLmsClass.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsPatchLmsClass(unifiedTo, {
    lmsClass: {
      createdAt: new Date("2020-02-20T14:48:51.845Z"),
      description: "Animus callide corpus.",
      id: "feba7e98-5ad1-461a-88b6-016c76e53356",
      instructors: [],
      languages: [
        "in",
      ],
      media: [
        {
          content: "Ceno earum culpa adhaero tabesco apostolus talis. Ultra accommodo deinde sono culpo arto cruciamentum triduana. Solvo uter adficio.",
          description: "Defetiscor aetas.",
          languages: [
            "ko",
            "lv",
          ],
          name: "suspendo",
          thumbnailUrl: "https://picsum.photos/seed/coddeQdTZn/105/852",
          type: "VIDEO",
          url: "https://picsum.photos/seed/wl3tnt/2277/2170",
        },
      ],
      metadata: [],
      name: "sperno",
      students: [],
      updatedAt: new Date("2025-09-02T06:01:03.208Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsPatchLmsClass failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchLmsClassRequest](../../sdk/models/operations/patchlmsclassrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsClass](../../sdk/models/shared/lmsclass.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchLmsCollection

Updates the LmsCollection identified by `id`. Provide the unified LmsCollection fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchLmsCollection" method="patch" path="/lms/{connection_id}/collection/{id}" example="lms_collection" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.patchLmsCollection({
    lmsCollection: {
      createdAt: new Date("2019-08-19T14:40:29.227Z"),
      description: "Defluo.",
      id: "9fa41abf-79c2-46ae-ae8d-6de4263375c2",
      isActive: true,
      media: [
        {
          content: "Sollers adeo caste brevis denuo attonbitus. Amita ducimus capillus claudeo vulgaris temporibus arbustum solium. Degusto suppono commodo fuga surculus tripudio doloribus. Quaerat cauda civitas carcer alveus alienus sperno vetus. Adulescens conspergo appositus arguo. Fugiat cimentarius depono angustus somniculosus tubineus terra beatae sui.",
          description: "Alias sit careo vesco tollo.",
          languages: [
            "eo",
          ],
          name: "aiunt",
          thumbnailUrl: "https://picsum.photos/seed/Iy2MXlem/2398/73",
          type: "HEADSHOT",
          url: "https://picsum.photos/seed/5KfxRKbzo1/2699/3216",
        },
      ],
      metadata: [],
      name: "spargo",
      updatedAt: new Date("2026-09-03T01:09:42.083Z"),
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
import { collectionPatchLmsCollection } from "@unified-api/typescript-sdk/funcs/collectionPatchLmsCollection.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await collectionPatchLmsCollection(unifiedTo, {
    lmsCollection: {
      createdAt: new Date("2019-08-19T14:40:29.227Z"),
      description: "Defluo.",
      id: "9fa41abf-79c2-46ae-ae8d-6de4263375c2",
      isActive: true,
      media: [
        {
          content: "Sollers adeo caste brevis denuo attonbitus. Amita ducimus capillus claudeo vulgaris temporibus arbustum solium. Degusto suppono commodo fuga surculus tripudio doloribus. Quaerat cauda civitas carcer alveus alienus sperno vetus. Adulescens conspergo appositus arguo. Fugiat cimentarius depono angustus somniculosus tubineus terra beatae sui.",
          description: "Alias sit careo vesco tollo.",
          languages: [
            "eo",
          ],
          name: "aiunt",
          thumbnailUrl: "https://picsum.photos/seed/Iy2MXlem/2398/73",
          type: "HEADSHOT",
          url: "https://picsum.photos/seed/5KfxRKbzo1/2699/3216",
        },
      ],
      metadata: [],
      name: "spargo",
      updatedAt: new Date("2026-09-03T01:09:42.083Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionPatchLmsCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchLmsCollectionRequest](../../sdk/models/operations/patchlmscollectionrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsCollection](../../sdk/models/shared/lmscollection.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchLmsContent

Updates the LmsContent identified by `id`. Provide the unified LmsContent fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchLmsContent" method="patch" path="/lms/{connection_id}/content/{id}" example="lms_content" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.patchLmsContent({
    lmsContent: {
      categories: [
        "tergum",
      ],
      createdAt: new Date("2020-10-22T22:30:50.963Z"),
      description: "Adflicto despecto suppellex socius cresco.",
      difficulty: "Beginner",
      durationMinutes: 19,
      id: "a269ccc0-5951-4253-b68b-c21e16b75b86",
      instructors: [],
      isActive: true,
      languages: [
        "campana",
        "viriliter",
      ],
      localizations: [
        {
          description: "Vindico vorago.",
          language: "es",
          name: "aeger",
        },
        {
          description: "Sulum.",
          language: "es",
          name: "voluptate",
        },
      ],
      media: [
        {
          content: "Cohors necessitatibus beatae copiose copiose cedo sub decens acer. Spiritus velum adulatio commodi textus beneficium termes comedo valde caste. Sodalitas bos timor abeo cur. Sperno decet acquiro tabgo canto terminatio acidus tripudio teres. Compono demum aut aestivus ambitus pecus tergum verumtamen vestrum.",
          description: "Incidunt tepidus commemoro voro ocer.",
          languages: [
            "ro",
            "af",
          ],
          name: "antepono",
          thumbnailUrl: "https://picsum.photos/seed/URbmlO66Wk/587/3603",
          type: "OTHER",
          url: "https://picsum.photos/seed/4KFvVbCx83/2788/2850",
        },
        {
          content: "Ago neque qui cursim tunc barba decens. Tutamen amplus tabella tabgo infit. Demo adversus capillus aro unus. Dedico aspicio alius vehemens terminatio varietas vomica voluptatibus apud. Defero decet impedit verbera pauci laboriosam molestiae urbanus mollitia. Vergo crux certus nulla.",
          description: "Bene doloribus.",
          languages: [
            "ru",
            "sw",
          ],
          name: "totidem",
          thumbnailUrl: "https://picsum.photos/seed/qpRev/1286/3718",
          type: "WEB",
          url: "https://picsum.photos/seed/JOWrp5/254/2004",
        },
        {
          content: "Laborum adiuvo labore officia demulceo. Abduco mollitia ventosus synagoga certus magni vado cilicium stella. Velut capitulus attero odio advenio similique acsi totam atavus aufero. Ventosus campana animi.",
          description: "Trucido dens pecus aer stella.",
          languages: [
            "is",
            "sk",
          ],
          name: "territo",
          thumbnailUrl: "https://picsum.photos/seed/81EuDedaf/557/986",
          type: "IMAGE",
          url: "https://picsum.photos/seed/BtV2eDuVm7/3644/1033",
        },
      ],
      metadata: [],
      name: "laboriosam",
      providerName: "Mraz - Keeling",
      publishedAt: new Date("2022-09-14T09:58:46.068Z"),
      shortDescription: "Videlicet pauci.",
      skills: [
        "soleo",
      ],
      sortOrder: 3,
      subjects: [
        {
          name: "clam",
          rank: 1,
        },
      ],
      tags: [
        "audio",
      ],
      updatedAt: new Date("2022-10-15T20:25:11.584Z"),
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
import { lmsPatchLmsContent } from "@unified-api/typescript-sdk/funcs/lmsPatchLmsContent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsPatchLmsContent(unifiedTo, {
    lmsContent: {
      categories: [
        "tergum",
      ],
      createdAt: new Date("2020-10-22T22:30:50.963Z"),
      description: "Adflicto despecto suppellex socius cresco.",
      difficulty: "Beginner",
      durationMinutes: 19,
      id: "a269ccc0-5951-4253-b68b-c21e16b75b86",
      instructors: [],
      isActive: true,
      languages: [
        "campana",
        "viriliter",
      ],
      localizations: [
        {
          description: "Vindico vorago.",
          language: "es",
          name: "aeger",
        },
        {
          description: "Sulum.",
          language: "es",
          name: "voluptate",
        },
      ],
      media: [
        {
          content: "Cohors necessitatibus beatae copiose copiose cedo sub decens acer. Spiritus velum adulatio commodi textus beneficium termes comedo valde caste. Sodalitas bos timor abeo cur. Sperno decet acquiro tabgo canto terminatio acidus tripudio teres. Compono demum aut aestivus ambitus pecus tergum verumtamen vestrum.",
          description: "Incidunt tepidus commemoro voro ocer.",
          languages: [
            "ro",
            "af",
          ],
          name: "antepono",
          thumbnailUrl: "https://picsum.photos/seed/URbmlO66Wk/587/3603",
          type: "OTHER",
          url: "https://picsum.photos/seed/4KFvVbCx83/2788/2850",
        },
        {
          content: "Ago neque qui cursim tunc barba decens. Tutamen amplus tabella tabgo infit. Demo adversus capillus aro unus. Dedico aspicio alius vehemens terminatio varietas vomica voluptatibus apud. Defero decet impedit verbera pauci laboriosam molestiae urbanus mollitia. Vergo crux certus nulla.",
          description: "Bene doloribus.",
          languages: [
            "ru",
            "sw",
          ],
          name: "totidem",
          thumbnailUrl: "https://picsum.photos/seed/qpRev/1286/3718",
          type: "WEB",
          url: "https://picsum.photos/seed/JOWrp5/254/2004",
        },
        {
          content: "Laborum adiuvo labore officia demulceo. Abduco mollitia ventosus synagoga certus magni vado cilicium stella. Velut capitulus attero odio advenio similique acsi totam atavus aufero. Ventosus campana animi.",
          description: "Trucido dens pecus aer stella.",
          languages: [
            "is",
            "sk",
          ],
          name: "territo",
          thumbnailUrl: "https://picsum.photos/seed/81EuDedaf/557/986",
          type: "IMAGE",
          url: "https://picsum.photos/seed/BtV2eDuVm7/3644/1033",
        },
      ],
      metadata: [],
      name: "laboriosam",
      providerName: "Mraz - Keeling",
      publishedAt: new Date("2022-09-14T09:58:46.068Z"),
      shortDescription: "Videlicet pauci.",
      skills: [
        "soleo",
      ],
      sortOrder: 3,
      subjects: [
        {
          name: "clam",
          rank: 1,
        },
      ],
      tags: [
        "audio",
      ],
      updatedAt: new Date("2022-10-15T20:25:11.584Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsPatchLmsContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchLmsContentRequest](../../sdk/models/operations/patchlmscontentrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsContent](../../sdk/models/shared/lmscontent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchLmsCourse

Updates the LmsCourse identified by `id`. Provide the unified LmsCourse fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchLmsCourse" method="patch" path="/lms/{connection_id}/course/{id}" example="lms_course" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.patchLmsCourse({
    lmsCourse: {
      categories: [
        "deripio",
        "tergiversatio",
      ],
      createdAt: new Date("2022-10-06T09:58:53.559Z"),
      currency: "DZD",
      description: "Aut.",
      durationMinutes: 148,
      id: "23bd7a59-b009-470a-99bc-507a58e1bc41",
      instructors: [],
      isActive: true,
      isPrivate: false,
      languages: [
        "capitulus",
        "desparatus",
        "earum",
      ],
      media: [
        {
          content: "Carbo dapifer adeptio. Ipsum utrimque quae architecto repellendus cum. Conitor anser abutor error adsuesco abeo caelestis.",
          description: "Accommodo adipiscor campana aegrotatio.",
          languages: [
            "el",
            "hr",
          ],
          name: "conduco",
          thumbnailUrl: "https://picsum.photos/seed/yTatRhK/3873/3840",
          type: "OTHER",
          url: "https://picsum.photos/seed/vcfQAbs/3357/2472",
        },
      ],
      metadata: [],
      name: "vinco",
      priceAmount: 84,
      providerName: "Roberts Group",
      publishedAt: new Date("2022-11-06T11:53:42.381Z"),
      skills: [
        "aveho",
        "via",
      ],
      students: [],
      timeEstimateMinutes: 100,
      updatedAt: new Date("2023-02-12T20:04:59.683Z"),
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
import { lmsPatchLmsCourse } from "@unified-api/typescript-sdk/funcs/lmsPatchLmsCourse.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsPatchLmsCourse(unifiedTo, {
    lmsCourse: {
      categories: [
        "deripio",
        "tergiversatio",
      ],
      createdAt: new Date("2022-10-06T09:58:53.559Z"),
      currency: "DZD",
      description: "Aut.",
      durationMinutes: 148,
      id: "23bd7a59-b009-470a-99bc-507a58e1bc41",
      instructors: [],
      isActive: true,
      isPrivate: false,
      languages: [
        "capitulus",
        "desparatus",
        "earum",
      ],
      media: [
        {
          content: "Carbo dapifer adeptio. Ipsum utrimque quae architecto repellendus cum. Conitor anser abutor error adsuesco abeo caelestis.",
          description: "Accommodo adipiscor campana aegrotatio.",
          languages: [
            "el",
            "hr",
          ],
          name: "conduco",
          thumbnailUrl: "https://picsum.photos/seed/yTatRhK/3873/3840",
          type: "OTHER",
          url: "https://picsum.photos/seed/vcfQAbs/3357/2472",
        },
      ],
      metadata: [],
      name: "vinco",
      priceAmount: 84,
      providerName: "Roberts Group",
      publishedAt: new Date("2022-11-06T11:53:42.381Z"),
      skills: [
        "aveho",
        "via",
      ],
      students: [],
      timeEstimateMinutes: 100,
      updatedAt: new Date("2023-02-12T20:04:59.683Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsPatchLmsCourse failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchLmsCourseRequest](../../sdk/models/operations/patchlmscourserequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsCourse](../../sdk/models/shared/lmscourse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchLmsInstructor

Updates the LmsInstructor identified by `id`. Provide the unified LmsInstructor fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchLmsInstructor" method="patch" path="/lms/{connection_id}/instructor/{id}" example="lms_instructor" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.patchLmsInstructor({
    lmsInstructor: {
      createdAt: new Date("2021-10-12T16:38:54.979Z"),
      emails: [
        {},
      ],
      firstName: "Miranda",
      id: "9cf6fc8c-5463-4f9f-8e9b-3a52b35977e6",
      imageUrl: "https://avatars.githubusercontent.com/u/96902788",
      lastName: "Turcotte",
      metadata: [],
      name: "Miranda Turcotte",
      telephones: [
        {
          telephone: "(752) 816-3330",
          type: "WORK",
        },
        {
          telephone: "(415) 345-1798",
          type: "HOME",
        },
      ],
      title: "Customer Brand Planner",
      updatedAt: new Date("2025-08-20T10:38:15.332Z"),
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
import { lmsPatchLmsInstructor } from "@unified-api/typescript-sdk/funcs/lmsPatchLmsInstructor.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsPatchLmsInstructor(unifiedTo, {
    lmsInstructor: {
      createdAt: new Date("2021-10-12T16:38:54.979Z"),
      emails: [
        {},
      ],
      firstName: "Miranda",
      id: "9cf6fc8c-5463-4f9f-8e9b-3a52b35977e6",
      imageUrl: "https://avatars.githubusercontent.com/u/96902788",
      lastName: "Turcotte",
      metadata: [],
      name: "Miranda Turcotte",
      telephones: [
        {
          telephone: "(752) 816-3330",
          type: "WORK",
        },
        {
          telephone: "(415) 345-1798",
          type: "HOME",
        },
      ],
      title: "Customer Brand Planner",
      updatedAt: new Date("2025-08-20T10:38:15.332Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsPatchLmsInstructor failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchLmsInstructorRequest](../../sdk/models/operations/patchlmsinstructorrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsInstructor](../../sdk/models/shared/lmsinstructor.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchLmsStudent

Updates the LmsStudent identified by `id`. Provide the unified LmsStudent fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchLmsStudent" method="patch" path="/lms/{connection_id}/student/{id}" example="lms_student" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.patchLmsStudent({
    lmsStudent: {
      address: {
        address1: "4610 Smith Cove",
        city: "Lake Milanchester",
        countryCode: "US",
        postalCode: "58634-4787",
        region: "Iowa",
        regionCode: "AZ",
      },
      createdAt: new Date("2020-03-23T06:59:29.777Z"),
      emails: [
        {},
      ],
      firstName: "Lazaro",
      id: "44e6b921-c1a6-4ab4-a042-bcd715791854",
      imageUrl: "https://avatars.githubusercontent.com/u/3245424",
      lastName: "Zulauf-Schowalter",
      metadata: [],
      name: "Lazaro Zulauf-Schowalter",
      telephones: [
        {
          telephone: "(476) 500-2870",
          type: "WORK",
        },
        {
          telephone: "(338) 436-9806",
          type: "FAX",
        },
        {
          telephone: "(852) 940-8205",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2022-07-13T08:51:18.725Z"),
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
import { lmsPatchLmsStudent } from "@unified-api/typescript-sdk/funcs/lmsPatchLmsStudent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsPatchLmsStudent(unifiedTo, {
    lmsStudent: {
      address: {
        address1: "4610 Smith Cove",
        city: "Lake Milanchester",
        countryCode: "US",
        postalCode: "58634-4787",
        region: "Iowa",
        regionCode: "AZ",
      },
      createdAt: new Date("2020-03-23T06:59:29.777Z"),
      emails: [
        {},
      ],
      firstName: "Lazaro",
      id: "44e6b921-c1a6-4ab4-a042-bcd715791854",
      imageUrl: "https://avatars.githubusercontent.com/u/3245424",
      lastName: "Zulauf-Schowalter",
      metadata: [],
      name: "Lazaro Zulauf-Schowalter",
      telephones: [
        {
          telephone: "(476) 500-2870",
          type: "WORK",
        },
        {
          telephone: "(338) 436-9806",
          type: "FAX",
        },
        {
          telephone: "(852) 940-8205",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2022-07-13T08:51:18.725Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsPatchLmsStudent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchLmsStudentRequest](../../sdk/models/operations/patchlmsstudentrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsStudent](../../sdk/models/shared/lmsstudent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeLmsActivity

Deletes the LmsActivity identified by `id`.

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
  const result = await unifiedTo.lms.removeLmsActivity({
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

## removeLmsClass

Deletes the LmsClass identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeLmsClass" method="delete" path="/lms/{connection_id}/class/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.removeLmsClass({
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
import { lmsRemoveLmsClass } from "@unified-api/typescript-sdk/funcs/lmsRemoveLmsClass.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsRemoveLmsClass(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsRemoveLmsClass failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveLmsClassRequest](../../sdk/models/operations/removelmsclassrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveLmsClassResponse](../../sdk/models/operations/removelmsclassresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeLmsCollection

Deletes the LmsCollection identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeLmsCollection" method="delete" path="/lms/{connection_id}/collection/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.removeLmsCollection({
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
import { collectionRemoveLmsCollection } from "@unified-api/typescript-sdk/funcs/collectionRemoveLmsCollection.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await collectionRemoveLmsCollection(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionRemoveLmsCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveLmsCollectionRequest](../../sdk/models/operations/removelmscollectionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveLmsCollectionResponse](../../sdk/models/operations/removelmscollectionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeLmsContent

Deletes the LmsContent identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeLmsContent" method="delete" path="/lms/{connection_id}/content/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.removeLmsContent({
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
import { lmsRemoveLmsContent } from "@unified-api/typescript-sdk/funcs/lmsRemoveLmsContent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsRemoveLmsContent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsRemoveLmsContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveLmsContentRequest](../../sdk/models/operations/removelmscontentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveLmsContentResponse](../../sdk/models/operations/removelmscontentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeLmsCourse

Deletes the LmsCourse identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeLmsCourse" method="delete" path="/lms/{connection_id}/course/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.removeLmsCourse({
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
import { lmsRemoveLmsCourse } from "@unified-api/typescript-sdk/funcs/lmsRemoveLmsCourse.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsRemoveLmsCourse(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsRemoveLmsCourse failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveLmsCourseRequest](../../sdk/models/operations/removelmscourserequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveLmsCourseResponse](../../sdk/models/operations/removelmscourseresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeLmsInstructor

Deletes the LmsInstructor identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeLmsInstructor" method="delete" path="/lms/{connection_id}/instructor/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.removeLmsInstructor({
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
import { lmsRemoveLmsInstructor } from "@unified-api/typescript-sdk/funcs/lmsRemoveLmsInstructor.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsRemoveLmsInstructor(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsRemoveLmsInstructor failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveLmsInstructorRequest](../../sdk/models/operations/removelmsinstructorrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveLmsInstructorResponse](../../sdk/models/operations/removelmsinstructorresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeLmsStudent

Deletes the LmsStudent identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeLmsStudent" method="delete" path="/lms/{connection_id}/student/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.removeLmsStudent({
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
import { lmsRemoveLmsStudent } from "@unified-api/typescript-sdk/funcs/lmsRemoveLmsStudent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsRemoveLmsStudent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsRemoveLmsStudent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveLmsStudentRequest](../../sdk/models/operations/removelmsstudentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveLmsStudentResponse](../../sdk/models/operations/removelmsstudentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateLmsActivity

Updates the LmsActivity identified by `id`. Provide the unified LmsActivity fields to change in the request body.

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
  const result = await unifiedTo.lms.updateLmsActivity({
    lmsActivity: {
      assignedGrade: "deserunt",
      completedAt: new Date("2023-12-24T16:56:11.334Z"),
      createdAt: new Date("2020-10-17T01:25:21.745Z"),
      durationMinutes: 55,
      id: "2225be86-8ae5-4d6b-a44b-551bacdb6fc4",
      isCompleted: true,
      metadata: [],
      progressPercentage: 100,
      startedAt: new Date("2021-04-28T06:59:42.630Z"),
      updatedAt: new Date("2022-02-07T16:28:36.454Z"),
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
      assignedGrade: "deserunt",
      completedAt: new Date("2023-12-24T16:56:11.334Z"),
      createdAt: new Date("2020-10-17T01:25:21.745Z"),
      durationMinutes: 55,
      id: "2225be86-8ae5-4d6b-a44b-551bacdb6fc4",
      isCompleted: true,
      metadata: [],
      progressPercentage: 100,
      startedAt: new Date("2021-04-28T06:59:42.630Z"),
      updatedAt: new Date("2022-02-07T16:28:36.454Z"),
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

## updateLmsClass

Updates the LmsClass identified by `id`. Provide the unified LmsClass fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateLmsClass" method="put" path="/lms/{connection_id}/class/{id}" example="lms_class" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.updateLmsClass({
    lmsClass: {
      createdAt: new Date("2020-02-20T14:48:51.845Z"),
      description: "Animus callide corpus.",
      id: "feba7e98-5ad1-461a-88b6-016c76e53356",
      instructors: [],
      languages: [
        "in",
      ],
      media: [
        {
          content: "Ceno earum culpa adhaero tabesco apostolus talis. Ultra accommodo deinde sono culpo arto cruciamentum triduana. Solvo uter adficio.",
          description: "Defetiscor aetas.",
          languages: [
            "ko",
            "lv",
          ],
          name: "suspendo",
          thumbnailUrl: "https://picsum.photos/seed/coddeQdTZn/105/852",
          type: "VIDEO",
          url: "https://picsum.photos/seed/wl3tnt/2277/2170",
        },
      ],
      metadata: [],
      name: "sperno",
      students: [],
      updatedAt: new Date("2025-09-02T06:01:03.208Z"),
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
import { lmsUpdateLmsClass } from "@unified-api/typescript-sdk/funcs/lmsUpdateLmsClass.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsUpdateLmsClass(unifiedTo, {
    lmsClass: {
      createdAt: new Date("2020-02-20T14:48:51.845Z"),
      description: "Animus callide corpus.",
      id: "feba7e98-5ad1-461a-88b6-016c76e53356",
      instructors: [],
      languages: [
        "in",
      ],
      media: [
        {
          content: "Ceno earum culpa adhaero tabesco apostolus talis. Ultra accommodo deinde sono culpo arto cruciamentum triduana. Solvo uter adficio.",
          description: "Defetiscor aetas.",
          languages: [
            "ko",
            "lv",
          ],
          name: "suspendo",
          thumbnailUrl: "https://picsum.photos/seed/coddeQdTZn/105/852",
          type: "VIDEO",
          url: "https://picsum.photos/seed/wl3tnt/2277/2170",
        },
      ],
      metadata: [],
      name: "sperno",
      students: [],
      updatedAt: new Date("2025-09-02T06:01:03.208Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsUpdateLmsClass failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLmsClassRequest](../../sdk/models/operations/updatelmsclassrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsClass](../../sdk/models/shared/lmsclass.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateLmsCollection

Updates the LmsCollection identified by `id`. Provide the unified LmsCollection fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateLmsCollection" method="put" path="/lms/{connection_id}/collection/{id}" example="lms_collection" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.updateLmsCollection({
    lmsCollection: {
      createdAt: new Date("2019-08-19T14:40:29.227Z"),
      description: "Defluo.",
      id: "9fa41abf-79c2-46ae-ae8d-6de4263375c2",
      isActive: true,
      media: [
        {
          content: "Sollers adeo caste brevis denuo attonbitus. Amita ducimus capillus claudeo vulgaris temporibus arbustum solium. Degusto suppono commodo fuga surculus tripudio doloribus. Quaerat cauda civitas carcer alveus alienus sperno vetus. Adulescens conspergo appositus arguo. Fugiat cimentarius depono angustus somniculosus tubineus terra beatae sui.",
          description: "Alias sit careo vesco tollo.",
          languages: [
            "eo",
          ],
          name: "aiunt",
          thumbnailUrl: "https://picsum.photos/seed/Iy2MXlem/2398/73",
          type: "HEADSHOT",
          url: "https://picsum.photos/seed/5KfxRKbzo1/2699/3216",
        },
      ],
      metadata: [],
      name: "spargo",
      updatedAt: new Date("2026-09-03T01:09:42.083Z"),
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
import { collectionUpdateLmsCollection } from "@unified-api/typescript-sdk/funcs/collectionUpdateLmsCollection.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await collectionUpdateLmsCollection(unifiedTo, {
    lmsCollection: {
      createdAt: new Date("2019-08-19T14:40:29.227Z"),
      description: "Defluo.",
      id: "9fa41abf-79c2-46ae-ae8d-6de4263375c2",
      isActive: true,
      media: [
        {
          content: "Sollers adeo caste brevis denuo attonbitus. Amita ducimus capillus claudeo vulgaris temporibus arbustum solium. Degusto suppono commodo fuga surculus tripudio doloribus. Quaerat cauda civitas carcer alveus alienus sperno vetus. Adulescens conspergo appositus arguo. Fugiat cimentarius depono angustus somniculosus tubineus terra beatae sui.",
          description: "Alias sit careo vesco tollo.",
          languages: [
            "eo",
          ],
          name: "aiunt",
          thumbnailUrl: "https://picsum.photos/seed/Iy2MXlem/2398/73",
          type: "HEADSHOT",
          url: "https://picsum.photos/seed/5KfxRKbzo1/2699/3216",
        },
      ],
      metadata: [],
      name: "spargo",
      updatedAt: new Date("2026-09-03T01:09:42.083Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionUpdateLmsCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLmsCollectionRequest](../../sdk/models/operations/updatelmscollectionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsCollection](../../sdk/models/shared/lmscollection.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateLmsContent

Updates the LmsContent identified by `id`. Provide the unified LmsContent fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateLmsContent" method="put" path="/lms/{connection_id}/content/{id}" example="lms_content" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.updateLmsContent({
    lmsContent: {
      categories: [
        "tergum",
      ],
      createdAt: new Date("2020-10-22T22:30:50.963Z"),
      description: "Adflicto despecto suppellex socius cresco.",
      difficulty: "Beginner",
      durationMinutes: 19,
      id: "a269ccc0-5951-4253-b68b-c21e16b75b86",
      instructors: [],
      isActive: true,
      languages: [
        "campana",
        "viriliter",
      ],
      localizations: [
        {
          description: "Vindico vorago.",
          language: "es",
          name: "aeger",
        },
        {
          description: "Sulum.",
          language: "es",
          name: "voluptate",
        },
      ],
      media: [
        {
          content: "Cohors necessitatibus beatae copiose copiose cedo sub decens acer. Spiritus velum adulatio commodi textus beneficium termes comedo valde caste. Sodalitas bos timor abeo cur. Sperno decet acquiro tabgo canto terminatio acidus tripudio teres. Compono demum aut aestivus ambitus pecus tergum verumtamen vestrum.",
          description: "Incidunt tepidus commemoro voro ocer.",
          languages: [
            "ro",
            "af",
          ],
          name: "antepono",
          thumbnailUrl: "https://picsum.photos/seed/URbmlO66Wk/587/3603",
          type: "OTHER",
          url: "https://picsum.photos/seed/4KFvVbCx83/2788/2850",
        },
        {
          content: "Ago neque qui cursim tunc barba decens. Tutamen amplus tabella tabgo infit. Demo adversus capillus aro unus. Dedico aspicio alius vehemens terminatio varietas vomica voluptatibus apud. Defero decet impedit verbera pauci laboriosam molestiae urbanus mollitia. Vergo crux certus nulla.",
          description: "Bene doloribus.",
          languages: [
            "ru",
            "sw",
          ],
          name: "totidem",
          thumbnailUrl: "https://picsum.photos/seed/qpRev/1286/3718",
          type: "WEB",
          url: "https://picsum.photos/seed/JOWrp5/254/2004",
        },
        {
          content: "Laborum adiuvo labore officia demulceo. Abduco mollitia ventosus synagoga certus magni vado cilicium stella. Velut capitulus attero odio advenio similique acsi totam atavus aufero. Ventosus campana animi.",
          description: "Trucido dens pecus aer stella.",
          languages: [
            "is",
            "sk",
          ],
          name: "territo",
          thumbnailUrl: "https://picsum.photos/seed/81EuDedaf/557/986",
          type: "IMAGE",
          url: "https://picsum.photos/seed/BtV2eDuVm7/3644/1033",
        },
      ],
      metadata: [],
      name: "laboriosam",
      providerName: "Mraz - Keeling",
      publishedAt: new Date("2022-09-14T09:58:46.068Z"),
      shortDescription: "Videlicet pauci.",
      skills: [
        "soleo",
      ],
      sortOrder: 3,
      subjects: [
        {
          name: "clam",
          rank: 1,
        },
      ],
      tags: [
        "audio",
      ],
      updatedAt: new Date("2022-10-15T20:25:11.584Z"),
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
import { lmsUpdateLmsContent } from "@unified-api/typescript-sdk/funcs/lmsUpdateLmsContent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsUpdateLmsContent(unifiedTo, {
    lmsContent: {
      categories: [
        "tergum",
      ],
      createdAt: new Date("2020-10-22T22:30:50.963Z"),
      description: "Adflicto despecto suppellex socius cresco.",
      difficulty: "Beginner",
      durationMinutes: 19,
      id: "a269ccc0-5951-4253-b68b-c21e16b75b86",
      instructors: [],
      isActive: true,
      languages: [
        "campana",
        "viriliter",
      ],
      localizations: [
        {
          description: "Vindico vorago.",
          language: "es",
          name: "aeger",
        },
        {
          description: "Sulum.",
          language: "es",
          name: "voluptate",
        },
      ],
      media: [
        {
          content: "Cohors necessitatibus beatae copiose copiose cedo sub decens acer. Spiritus velum adulatio commodi textus beneficium termes comedo valde caste. Sodalitas bos timor abeo cur. Sperno decet acquiro tabgo canto terminatio acidus tripudio teres. Compono demum aut aestivus ambitus pecus tergum verumtamen vestrum.",
          description: "Incidunt tepidus commemoro voro ocer.",
          languages: [
            "ro",
            "af",
          ],
          name: "antepono",
          thumbnailUrl: "https://picsum.photos/seed/URbmlO66Wk/587/3603",
          type: "OTHER",
          url: "https://picsum.photos/seed/4KFvVbCx83/2788/2850",
        },
        {
          content: "Ago neque qui cursim tunc barba decens. Tutamen amplus tabella tabgo infit. Demo adversus capillus aro unus. Dedico aspicio alius vehemens terminatio varietas vomica voluptatibus apud. Defero decet impedit verbera pauci laboriosam molestiae urbanus mollitia. Vergo crux certus nulla.",
          description: "Bene doloribus.",
          languages: [
            "ru",
            "sw",
          ],
          name: "totidem",
          thumbnailUrl: "https://picsum.photos/seed/qpRev/1286/3718",
          type: "WEB",
          url: "https://picsum.photos/seed/JOWrp5/254/2004",
        },
        {
          content: "Laborum adiuvo labore officia demulceo. Abduco mollitia ventosus synagoga certus magni vado cilicium stella. Velut capitulus attero odio advenio similique acsi totam atavus aufero. Ventosus campana animi.",
          description: "Trucido dens pecus aer stella.",
          languages: [
            "is",
            "sk",
          ],
          name: "territo",
          thumbnailUrl: "https://picsum.photos/seed/81EuDedaf/557/986",
          type: "IMAGE",
          url: "https://picsum.photos/seed/BtV2eDuVm7/3644/1033",
        },
      ],
      metadata: [],
      name: "laboriosam",
      providerName: "Mraz - Keeling",
      publishedAt: new Date("2022-09-14T09:58:46.068Z"),
      shortDescription: "Videlicet pauci.",
      skills: [
        "soleo",
      ],
      sortOrder: 3,
      subjects: [
        {
          name: "clam",
          rank: 1,
        },
      ],
      tags: [
        "audio",
      ],
      updatedAt: new Date("2022-10-15T20:25:11.584Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsUpdateLmsContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLmsContentRequest](../../sdk/models/operations/updatelmscontentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsContent](../../sdk/models/shared/lmscontent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateLmsCourse

Updates the LmsCourse identified by `id`. Provide the unified LmsCourse fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateLmsCourse" method="put" path="/lms/{connection_id}/course/{id}" example="lms_course" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.updateLmsCourse({
    lmsCourse: {
      categories: [
        "deripio",
        "tergiversatio",
      ],
      createdAt: new Date("2022-10-06T09:58:53.559Z"),
      currency: "DZD",
      description: "Aut.",
      durationMinutes: 148,
      id: "23bd7a59-b009-470a-99bc-507a58e1bc41",
      instructors: [],
      isActive: true,
      isPrivate: false,
      languages: [
        "capitulus",
        "desparatus",
        "earum",
      ],
      media: [
        {
          content: "Carbo dapifer adeptio. Ipsum utrimque quae architecto repellendus cum. Conitor anser abutor error adsuesco abeo caelestis.",
          description: "Accommodo adipiscor campana aegrotatio.",
          languages: [
            "el",
            "hr",
          ],
          name: "conduco",
          thumbnailUrl: "https://picsum.photos/seed/yTatRhK/3873/3840",
          type: "OTHER",
          url: "https://picsum.photos/seed/vcfQAbs/3357/2472",
        },
      ],
      metadata: [],
      name: "vinco",
      priceAmount: 84,
      providerName: "Roberts Group",
      publishedAt: new Date("2022-11-06T11:53:42.381Z"),
      skills: [
        "aveho",
        "via",
      ],
      students: [],
      timeEstimateMinutes: 100,
      updatedAt: new Date("2023-02-12T20:04:59.683Z"),
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
import { lmsUpdateLmsCourse } from "@unified-api/typescript-sdk/funcs/lmsUpdateLmsCourse.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsUpdateLmsCourse(unifiedTo, {
    lmsCourse: {
      categories: [
        "deripio",
        "tergiversatio",
      ],
      createdAt: new Date("2022-10-06T09:58:53.559Z"),
      currency: "DZD",
      description: "Aut.",
      durationMinutes: 148,
      id: "23bd7a59-b009-470a-99bc-507a58e1bc41",
      instructors: [],
      isActive: true,
      isPrivate: false,
      languages: [
        "capitulus",
        "desparatus",
        "earum",
      ],
      media: [
        {
          content: "Carbo dapifer adeptio. Ipsum utrimque quae architecto repellendus cum. Conitor anser abutor error adsuesco abeo caelestis.",
          description: "Accommodo adipiscor campana aegrotatio.",
          languages: [
            "el",
            "hr",
          ],
          name: "conduco",
          thumbnailUrl: "https://picsum.photos/seed/yTatRhK/3873/3840",
          type: "OTHER",
          url: "https://picsum.photos/seed/vcfQAbs/3357/2472",
        },
      ],
      metadata: [],
      name: "vinco",
      priceAmount: 84,
      providerName: "Roberts Group",
      publishedAt: new Date("2022-11-06T11:53:42.381Z"),
      skills: [
        "aveho",
        "via",
      ],
      students: [],
      timeEstimateMinutes: 100,
      updatedAt: new Date("2023-02-12T20:04:59.683Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsUpdateLmsCourse failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLmsCourseRequest](../../sdk/models/operations/updatelmscourserequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsCourse](../../sdk/models/shared/lmscourse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateLmsInstructor

Updates the LmsInstructor identified by `id`. Provide the unified LmsInstructor fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateLmsInstructor" method="put" path="/lms/{connection_id}/instructor/{id}" example="lms_instructor" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.updateLmsInstructor({
    lmsInstructor: {
      createdAt: new Date("2021-10-12T16:38:54.979Z"),
      emails: [
        {},
      ],
      firstName: "Miranda",
      id: "9cf6fc8c-5463-4f9f-8e9b-3a52b35977e6",
      imageUrl: "https://avatars.githubusercontent.com/u/96902788",
      lastName: "Turcotte",
      metadata: [],
      name: "Miranda Turcotte",
      telephones: [
        {
          telephone: "(752) 816-3330",
          type: "WORK",
        },
        {
          telephone: "(415) 345-1798",
          type: "HOME",
        },
      ],
      title: "Customer Brand Planner",
      updatedAt: new Date("2025-08-20T10:38:15.332Z"),
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
import { lmsUpdateLmsInstructor } from "@unified-api/typescript-sdk/funcs/lmsUpdateLmsInstructor.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsUpdateLmsInstructor(unifiedTo, {
    lmsInstructor: {
      createdAt: new Date("2021-10-12T16:38:54.979Z"),
      emails: [
        {},
      ],
      firstName: "Miranda",
      id: "9cf6fc8c-5463-4f9f-8e9b-3a52b35977e6",
      imageUrl: "https://avatars.githubusercontent.com/u/96902788",
      lastName: "Turcotte",
      metadata: [],
      name: "Miranda Turcotte",
      telephones: [
        {
          telephone: "(752) 816-3330",
          type: "WORK",
        },
        {
          telephone: "(415) 345-1798",
          type: "HOME",
        },
      ],
      title: "Customer Brand Planner",
      updatedAt: new Date("2025-08-20T10:38:15.332Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsUpdateLmsInstructor failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLmsInstructorRequest](../../sdk/models/operations/updatelmsinstructorrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsInstructor](../../sdk/models/shared/lmsinstructor.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateLmsStudent

Updates the LmsStudent identified by `id`. Provide the unified LmsStudent fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateLmsStudent" method="put" path="/lms/{connection_id}/student/{id}" example="lms_student" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.lms.updateLmsStudent({
    lmsStudent: {
      address: {
        address1: "4610 Smith Cove",
        city: "Lake Milanchester",
        countryCode: "US",
        postalCode: "58634-4787",
        region: "Iowa",
        regionCode: "AZ",
      },
      createdAt: new Date("2020-03-23T06:59:29.777Z"),
      emails: [
        {},
      ],
      firstName: "Lazaro",
      id: "44e6b921-c1a6-4ab4-a042-bcd715791854",
      imageUrl: "https://avatars.githubusercontent.com/u/3245424",
      lastName: "Zulauf-Schowalter",
      metadata: [],
      name: "Lazaro Zulauf-Schowalter",
      telephones: [
        {
          telephone: "(476) 500-2870",
          type: "WORK",
        },
        {
          telephone: "(338) 436-9806",
          type: "FAX",
        },
        {
          telephone: "(852) 940-8205",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2022-07-13T08:51:18.725Z"),
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
import { lmsUpdateLmsStudent } from "@unified-api/typescript-sdk/funcs/lmsUpdateLmsStudent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await lmsUpdateLmsStudent(unifiedTo, {
    lmsStudent: {
      address: {
        address1: "4610 Smith Cove",
        city: "Lake Milanchester",
        countryCode: "US",
        postalCode: "58634-4787",
        region: "Iowa",
        regionCode: "AZ",
      },
      createdAt: new Date("2020-03-23T06:59:29.777Z"),
      emails: [
        {},
      ],
      firstName: "Lazaro",
      id: "44e6b921-c1a6-4ab4-a042-bcd715791854",
      imageUrl: "https://avatars.githubusercontent.com/u/3245424",
      lastName: "Zulauf-Schowalter",
      metadata: [],
      name: "Lazaro Zulauf-Schowalter",
      telephones: [
        {
          telephone: "(476) 500-2870",
          type: "WORK",
        },
        {
          telephone: "(338) 436-9806",
          type: "FAX",
        },
        {
          telephone: "(852) 940-8205",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2022-07-13T08:51:18.725Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lmsUpdateLmsStudent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLmsStudentRequest](../../sdk/models/operations/updatelmsstudentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LmsStudent](../../sdk/models/shared/lmsstudent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |