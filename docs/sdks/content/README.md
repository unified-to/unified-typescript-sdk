# Content

## Overview

### Available Operations

* [createLmsContent](#createlmscontent) - Create a content
* [getLmsContent](#getlmscontent) - Retrieve a content
* [listLmsContents](#listlmscontents) - List all contents
* [patchLmsContent](#patchlmscontent) - Update a content
* [removeLmsContent](#removelmscontent) - Remove a content
* [updateLmsContent](#updatelmscontent) - Update a content

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
  const result = await unifiedTo.content.createLmsContent({
    lmsContent: {
      categories: [
        "tergum",
      ],
      createdAt: new Date("2020-10-22T22:30:50.963Z"),
      description: "Adflicto despecto suppellex socius cresco.",
      difficulty: "Beginner",
      durationMinutes: 19,
      id: "8cca49ee-59cc-4696-badb-4a01aecbd5c4",
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
      publishedAt: new Date("2022-09-14T10:56:45.648Z"),
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
      updatedAt: new Date("2022-10-15T21:25:49.349Z"),
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
      id: "8cca49ee-59cc-4696-badb-4a01aecbd5c4",
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
      publishedAt: new Date("2022-09-14T10:56:45.648Z"),
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
      updatedAt: new Date("2022-10-15T21:25:49.349Z"),
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
  const result = await unifiedTo.content.getLmsContent({
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
  const result = await unifiedTo.content.listLmsContents({
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
  const result = await unifiedTo.content.patchLmsContent({
    lmsContent: {
      categories: [
        "tergum",
      ],
      createdAt: new Date("2020-10-22T22:30:50.963Z"),
      description: "Adflicto despecto suppellex socius cresco.",
      difficulty: "Beginner",
      durationMinutes: 19,
      id: "7776cc7d-184f-4d86-952e-0d32f716ff5a",
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
      publishedAt: new Date("2022-09-14T10:56:45.657Z"),
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
      updatedAt: new Date("2022-10-15T21:25:49.359Z"),
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
      id: "7776cc7d-184f-4d86-952e-0d32f716ff5a",
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
      publishedAt: new Date("2022-09-14T10:56:45.657Z"),
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
      updatedAt: new Date("2022-10-15T21:25:49.359Z"),
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
  const result = await unifiedTo.content.removeLmsContent({
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
  const result = await unifiedTo.content.updateLmsContent({
    lmsContent: {
      categories: [
        "tergum",
      ],
      createdAt: new Date("2020-10-22T22:30:50.963Z"),
      description: "Adflicto despecto suppellex socius cresco.",
      difficulty: "Beginner",
      durationMinutes: 19,
      id: "7776cc7d-184f-4d86-952e-0d32f716ff5a",
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
      publishedAt: new Date("2022-09-14T10:56:45.657Z"),
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
      updatedAt: new Date("2022-10-15T21:25:49.359Z"),
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
      id: "7776cc7d-184f-4d86-952e-0d32f716ff5a",
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
      publishedAt: new Date("2022-09-14T10:56:45.657Z"),
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
      updatedAt: new Date("2022-10-15T21:25:49.359Z"),
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