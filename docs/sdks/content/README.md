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
        "territo",
      ],
      createdAt: new Date("2020-10-22T22:30:50.963Z"),
      description: "Usque laboriosam ventosus adflicto.",
      difficulty: "Beginner",
      durationMinutes: 19,
      id: "8ea5b330-b9b8-438b-a0c7-07f316683e39",
      instructors: [],
      isActive: true,
      languages: [
        "despecto",
        "suppellex",
      ],
      localizations: [
        {
          description: "Acervus.",
          language: "es",
          name: "talis",
        },
        {
          description: "Ratione.",
          language: "es",
          name: "sint",
        },
      ],
      media: [
        {
          content: "Adnuo antepono vulticulus incidunt. Commemoro voro ocer arca velut vigor venustas una audeo. Consectetur totidem amor amo vigor. Patior ulciscor cohors necessitatibus beatae. Copiose cedo sub decens acer.",
          description: "Venia aeternus tandem spargo.",
          languages: [
            "zu",
            "ba",
          ],
          name: "subiungo",
          thumbnailUrl: "https://loremflickr.com/2056/3712?lock=5644845642923518",
          type: "OTHER",
          url: "https://loremflickr.com/2593/1553?lock=8591263400111785",
        },
        {
          content: "Terminatio acidus tripudio teres. Compono demum aut aestivus ambitus pecus tergum verumtamen vestrum. Absque adversus desino aut tabernus tollo vigor. Cur agnitio totidem consuasor bene doloribus. Vetus abundans curriculum curatio usitas.",
          description: "Comedo valde caste combibo.",
          languages: [
            "it",
            "hu",
          ],
          name: "beneficium",
          thumbnailUrl: "https://picsum.photos/seed/pNFr1/2597/885",
          type: "WEB",
          url: "https://loremflickr.com/3597/239?lock=7142808124990633",
        },
        {
          content: "Coepi demo adversus capillus aro unus templum. Aspicio alius vehemens terminatio varietas vomica. Apud thorax defero decet impedit verbera pauci laboriosam molestiae urbanus. Aveho vergo crux certus nulla caute sophismata. Caute voluptatibus patrocinor demo verumtamen adeo canis sapiente depraedor verus.",
          description: "Tunc barba decens.",
          languages: [
            "bn",
            "yo",
          ],
          name: "qui",
          thumbnailUrl: "https://loremflickr.com/1375/3377?lock=6601832177607674",
          type: "IMAGE",
          url: "https://loremflickr.com/3927/2086?lock=5199784913821481",
        },
      ],
      metadata: [],
      name: "ut",
      providerName: "Bins LLC",
      publishedAt: new Date("2022-09-05T10:12:49.669Z"),
      shortDescription: "Caritas.",
      skills: [
        "trucido",
      ],
      sortOrder: 3,
      subjects: [
        {
          name: "tibi",
          rank: 1,
        },
      ],
      tags: [
        "dens",
      ],
      updatedAt: new Date("2022-10-06T10:50:43.346Z"),
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
        "territo",
      ],
      createdAt: new Date("2020-10-22T22:30:50.963Z"),
      description: "Usque laboriosam ventosus adflicto.",
      difficulty: "Beginner",
      durationMinutes: 19,
      id: "8ea5b330-b9b8-438b-a0c7-07f316683e39",
      instructors: [],
      isActive: true,
      languages: [
        "despecto",
        "suppellex",
      ],
      localizations: [
        {
          description: "Acervus.",
          language: "es",
          name: "talis",
        },
        {
          description: "Ratione.",
          language: "es",
          name: "sint",
        },
      ],
      media: [
        {
          content: "Adnuo antepono vulticulus incidunt. Commemoro voro ocer arca velut vigor venustas una audeo. Consectetur totidem amor amo vigor. Patior ulciscor cohors necessitatibus beatae. Copiose cedo sub decens acer.",
          description: "Venia aeternus tandem spargo.",
          languages: [
            "zu",
            "ba",
          ],
          name: "subiungo",
          thumbnailUrl: "https://loremflickr.com/2056/3712?lock=5644845642923518",
          type: "OTHER",
          url: "https://loremflickr.com/2593/1553?lock=8591263400111785",
        },
        {
          content: "Terminatio acidus tripudio teres. Compono demum aut aestivus ambitus pecus tergum verumtamen vestrum. Absque adversus desino aut tabernus tollo vigor. Cur agnitio totidem consuasor bene doloribus. Vetus abundans curriculum curatio usitas.",
          description: "Comedo valde caste combibo.",
          languages: [
            "it",
            "hu",
          ],
          name: "beneficium",
          thumbnailUrl: "https://picsum.photos/seed/pNFr1/2597/885",
          type: "WEB",
          url: "https://loremflickr.com/3597/239?lock=7142808124990633",
        },
        {
          content: "Coepi demo adversus capillus aro unus templum. Aspicio alius vehemens terminatio varietas vomica. Apud thorax defero decet impedit verbera pauci laboriosam molestiae urbanus. Aveho vergo crux certus nulla caute sophismata. Caute voluptatibus patrocinor demo verumtamen adeo canis sapiente depraedor verus.",
          description: "Tunc barba decens.",
          languages: [
            "bn",
            "yo",
          ],
          name: "qui",
          thumbnailUrl: "https://loremflickr.com/1375/3377?lock=6601832177607674",
          type: "IMAGE",
          url: "https://loremflickr.com/3927/2086?lock=5199784913821481",
        },
      ],
      metadata: [],
      name: "ut",
      providerName: "Bins LLC",
      publishedAt: new Date("2022-09-05T10:12:49.669Z"),
      shortDescription: "Caritas.",
      skills: [
        "trucido",
      ],
      sortOrder: 3,
      subjects: [
        {
          name: "tibi",
          rank: 1,
        },
      ],
      tags: [
        "dens",
      ],
      updatedAt: new Date("2022-10-06T10:50:43.346Z"),
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
        "territo",
      ],
      createdAt: new Date("2020-10-22T22:30:50.963Z"),
      description: "Usque laboriosam ventosus adflicto.",
      difficulty: "Beginner",
      durationMinutes: 19,
      id: "d8bcc06c-14da-4ee5-aa05-dfa8ef83d727",
      instructors: [],
      isActive: true,
      languages: [
        "despecto",
        "suppellex",
      ],
      localizations: [
        {
          description: "Acervus.",
          language: "es",
          name: "talis",
        },
        {
          description: "Ratione.",
          language: "es",
          name: "sint",
        },
      ],
      media: [
        {
          content: "Adnuo antepono vulticulus incidunt. Commemoro voro ocer arca velut vigor venustas una audeo. Consectetur totidem amor amo vigor. Patior ulciscor cohors necessitatibus beatae. Copiose cedo sub decens acer.",
          description: "Venia aeternus tandem spargo.",
          languages: [
            "zu",
            "ba",
          ],
          name: "subiungo",
          thumbnailUrl: "https://loremflickr.com/2056/3712?lock=5644845642923518",
          type: "OTHER",
          url: "https://loremflickr.com/2593/1553?lock=8591263400111785",
        },
        {
          content: "Terminatio acidus tripudio teres. Compono demum aut aestivus ambitus pecus tergum verumtamen vestrum. Absque adversus desino aut tabernus tollo vigor. Cur agnitio totidem consuasor bene doloribus. Vetus abundans curriculum curatio usitas.",
          description: "Comedo valde caste combibo.",
          languages: [
            "it",
            "hu",
          ],
          name: "beneficium",
          thumbnailUrl: "https://picsum.photos/seed/pNFr1/2597/885",
          type: "WEB",
          url: "https://loremflickr.com/3597/239?lock=7142808124990633",
        },
        {
          content: "Coepi demo adversus capillus aro unus templum. Aspicio alius vehemens terminatio varietas vomica. Apud thorax defero decet impedit verbera pauci laboriosam molestiae urbanus. Aveho vergo crux certus nulla caute sophismata. Caute voluptatibus patrocinor demo verumtamen adeo canis sapiente depraedor verus.",
          description: "Tunc barba decens.",
          languages: [
            "bn",
            "yo",
          ],
          name: "qui",
          thumbnailUrl: "https://loremflickr.com/1375/3377?lock=6601832177607674",
          type: "IMAGE",
          url: "https://loremflickr.com/3927/2086?lock=5199784913821481",
        },
      ],
      metadata: [],
      name: "ut",
      providerName: "Bins LLC",
      publishedAt: new Date("2022-09-05T10:12:49.680Z"),
      shortDescription: "Caritas.",
      skills: [
        "trucido",
      ],
      sortOrder: 3,
      subjects: [
        {
          name: "tibi",
          rank: 1,
        },
      ],
      tags: [
        "dens",
      ],
      updatedAt: new Date("2022-10-06T10:50:43.356Z"),
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
        "territo",
      ],
      createdAt: new Date("2020-10-22T22:30:50.963Z"),
      description: "Usque laboriosam ventosus adflicto.",
      difficulty: "Beginner",
      durationMinutes: 19,
      id: "d8bcc06c-14da-4ee5-aa05-dfa8ef83d727",
      instructors: [],
      isActive: true,
      languages: [
        "despecto",
        "suppellex",
      ],
      localizations: [
        {
          description: "Acervus.",
          language: "es",
          name: "talis",
        },
        {
          description: "Ratione.",
          language: "es",
          name: "sint",
        },
      ],
      media: [
        {
          content: "Adnuo antepono vulticulus incidunt. Commemoro voro ocer arca velut vigor venustas una audeo. Consectetur totidem amor amo vigor. Patior ulciscor cohors necessitatibus beatae. Copiose cedo sub decens acer.",
          description: "Venia aeternus tandem spargo.",
          languages: [
            "zu",
            "ba",
          ],
          name: "subiungo",
          thumbnailUrl: "https://loremflickr.com/2056/3712?lock=5644845642923518",
          type: "OTHER",
          url: "https://loremflickr.com/2593/1553?lock=8591263400111785",
        },
        {
          content: "Terminatio acidus tripudio teres. Compono demum aut aestivus ambitus pecus tergum verumtamen vestrum. Absque adversus desino aut tabernus tollo vigor. Cur agnitio totidem consuasor bene doloribus. Vetus abundans curriculum curatio usitas.",
          description: "Comedo valde caste combibo.",
          languages: [
            "it",
            "hu",
          ],
          name: "beneficium",
          thumbnailUrl: "https://picsum.photos/seed/pNFr1/2597/885",
          type: "WEB",
          url: "https://loremflickr.com/3597/239?lock=7142808124990633",
        },
        {
          content: "Coepi demo adversus capillus aro unus templum. Aspicio alius vehemens terminatio varietas vomica. Apud thorax defero decet impedit verbera pauci laboriosam molestiae urbanus. Aveho vergo crux certus nulla caute sophismata. Caute voluptatibus patrocinor demo verumtamen adeo canis sapiente depraedor verus.",
          description: "Tunc barba decens.",
          languages: [
            "bn",
            "yo",
          ],
          name: "qui",
          thumbnailUrl: "https://loremflickr.com/1375/3377?lock=6601832177607674",
          type: "IMAGE",
          url: "https://loremflickr.com/3927/2086?lock=5199784913821481",
        },
      ],
      metadata: [],
      name: "ut",
      providerName: "Bins LLC",
      publishedAt: new Date("2022-09-05T10:12:49.680Z"),
      shortDescription: "Caritas.",
      skills: [
        "trucido",
      ],
      sortOrder: 3,
      subjects: [
        {
          name: "tibi",
          rank: 1,
        },
      ],
      tags: [
        "dens",
      ],
      updatedAt: new Date("2022-10-06T10:50:43.356Z"),
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
        "territo",
      ],
      createdAt: new Date("2020-10-22T22:30:50.963Z"),
      description: "Usque laboriosam ventosus adflicto.",
      difficulty: "Beginner",
      durationMinutes: 19,
      id: "d8bcc06c-14da-4ee5-aa05-dfa8ef83d727",
      instructors: [],
      isActive: true,
      languages: [
        "despecto",
        "suppellex",
      ],
      localizations: [
        {
          description: "Acervus.",
          language: "es",
          name: "talis",
        },
        {
          description: "Ratione.",
          language: "es",
          name: "sint",
        },
      ],
      media: [
        {
          content: "Adnuo antepono vulticulus incidunt. Commemoro voro ocer arca velut vigor venustas una audeo. Consectetur totidem amor amo vigor. Patior ulciscor cohors necessitatibus beatae. Copiose cedo sub decens acer.",
          description: "Venia aeternus tandem spargo.",
          languages: [
            "zu",
            "ba",
          ],
          name: "subiungo",
          thumbnailUrl: "https://loremflickr.com/2056/3712?lock=5644845642923518",
          type: "OTHER",
          url: "https://loremflickr.com/2593/1553?lock=8591263400111785",
        },
        {
          content: "Terminatio acidus tripudio teres. Compono demum aut aestivus ambitus pecus tergum verumtamen vestrum. Absque adversus desino aut tabernus tollo vigor. Cur agnitio totidem consuasor bene doloribus. Vetus abundans curriculum curatio usitas.",
          description: "Comedo valde caste combibo.",
          languages: [
            "it",
            "hu",
          ],
          name: "beneficium",
          thumbnailUrl: "https://picsum.photos/seed/pNFr1/2597/885",
          type: "WEB",
          url: "https://loremflickr.com/3597/239?lock=7142808124990633",
        },
        {
          content: "Coepi demo adversus capillus aro unus templum. Aspicio alius vehemens terminatio varietas vomica. Apud thorax defero decet impedit verbera pauci laboriosam molestiae urbanus. Aveho vergo crux certus nulla caute sophismata. Caute voluptatibus patrocinor demo verumtamen adeo canis sapiente depraedor verus.",
          description: "Tunc barba decens.",
          languages: [
            "bn",
            "yo",
          ],
          name: "qui",
          thumbnailUrl: "https://loremflickr.com/1375/3377?lock=6601832177607674",
          type: "IMAGE",
          url: "https://loremflickr.com/3927/2086?lock=5199784913821481",
        },
      ],
      metadata: [],
      name: "ut",
      providerName: "Bins LLC",
      publishedAt: new Date("2022-09-05T10:12:49.680Z"),
      shortDescription: "Caritas.",
      skills: [
        "trucido",
      ],
      sortOrder: 3,
      subjects: [
        {
          name: "tibi",
          rank: 1,
        },
      ],
      tags: [
        "dens",
      ],
      updatedAt: new Date("2022-10-06T10:50:43.356Z"),
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
        "territo",
      ],
      createdAt: new Date("2020-10-22T22:30:50.963Z"),
      description: "Usque laboriosam ventosus adflicto.",
      difficulty: "Beginner",
      durationMinutes: 19,
      id: "d8bcc06c-14da-4ee5-aa05-dfa8ef83d727",
      instructors: [],
      isActive: true,
      languages: [
        "despecto",
        "suppellex",
      ],
      localizations: [
        {
          description: "Acervus.",
          language: "es",
          name: "talis",
        },
        {
          description: "Ratione.",
          language: "es",
          name: "sint",
        },
      ],
      media: [
        {
          content: "Adnuo antepono vulticulus incidunt. Commemoro voro ocer arca velut vigor venustas una audeo. Consectetur totidem amor amo vigor. Patior ulciscor cohors necessitatibus beatae. Copiose cedo sub decens acer.",
          description: "Venia aeternus tandem spargo.",
          languages: [
            "zu",
            "ba",
          ],
          name: "subiungo",
          thumbnailUrl: "https://loremflickr.com/2056/3712?lock=5644845642923518",
          type: "OTHER",
          url: "https://loremflickr.com/2593/1553?lock=8591263400111785",
        },
        {
          content: "Terminatio acidus tripudio teres. Compono demum aut aestivus ambitus pecus tergum verumtamen vestrum. Absque adversus desino aut tabernus tollo vigor. Cur agnitio totidem consuasor bene doloribus. Vetus abundans curriculum curatio usitas.",
          description: "Comedo valde caste combibo.",
          languages: [
            "it",
            "hu",
          ],
          name: "beneficium",
          thumbnailUrl: "https://picsum.photos/seed/pNFr1/2597/885",
          type: "WEB",
          url: "https://loremflickr.com/3597/239?lock=7142808124990633",
        },
        {
          content: "Coepi demo adversus capillus aro unus templum. Aspicio alius vehemens terminatio varietas vomica. Apud thorax defero decet impedit verbera pauci laboriosam molestiae urbanus. Aveho vergo crux certus nulla caute sophismata. Caute voluptatibus patrocinor demo verumtamen adeo canis sapiente depraedor verus.",
          description: "Tunc barba decens.",
          languages: [
            "bn",
            "yo",
          ],
          name: "qui",
          thumbnailUrl: "https://loremflickr.com/1375/3377?lock=6601832177607674",
          type: "IMAGE",
          url: "https://loremflickr.com/3927/2086?lock=5199784913821481",
        },
      ],
      metadata: [],
      name: "ut",
      providerName: "Bins LLC",
      publishedAt: new Date("2022-09-05T10:12:49.680Z"),
      shortDescription: "Caritas.",
      skills: [
        "trucido",
      ],
      sortOrder: 3,
      subjects: [
        {
          name: "tibi",
          rank: 1,
        },
      ],
      tags: [
        "dens",
      ],
      updatedAt: new Date("2022-10-06T10:50:43.356Z"),
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