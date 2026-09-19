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

Create a content

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
      externalReference: "0d230e31-a9c4-4a35-a5b9-9168e91ffff5",
      id: "894c5dff-670c-4685-bc8c-6d367600c064",
      instructors: [
        {
          id: "91a23b20-a7a3-4323-9548-0897c09eb49e",
          name: "Winston Ferry",
        },
      ],
      isActive: true,
      languages: [
        "despecto",
        "suppellex",
      ],
      localizations: [
        {
          description: "Numquam.",
          language: "es",
          name: "validus",
        },
        {
          description: "Callide.",
          language: "fr",
          name: "crux",
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
      name: "ut",
      providerName: "Berge LLC",
      publishedAt: new Date("2023-11-08T11:32:09.080Z"),
      shortDescription: "Commemoro.",
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
      updatedAt: new Date("2022-09-23T17:59:49.051Z"),
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
      externalReference: "0d230e31-a9c4-4a35-a5b9-9168e91ffff5",
      id: "894c5dff-670c-4685-bc8c-6d367600c064",
      instructors: [
        {
          id: "91a23b20-a7a3-4323-9548-0897c09eb49e",
          name: "Winston Ferry",
        },
      ],
      isActive: true,
      languages: [
        "despecto",
        "suppellex",
      ],
      localizations: [
        {
          description: "Numquam.",
          language: "es",
          name: "validus",
        },
        {
          description: "Callide.",
          language: "fr",
          name: "crux",
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
      name: "ut",
      providerName: "Berge LLC",
      publishedAt: new Date("2023-11-08T11:32:09.080Z"),
      shortDescription: "Commemoro.",
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
      updatedAt: new Date("2022-09-23T17:59:49.051Z"),
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

Retrieve a content

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

List all contents

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

Update a content

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
      externalReference: "0d230e31-a9c4-4a35-a5b9-9168e91ffff5",
      id: "8cc5813e-f98d-4b09-9716-4bad43b58fd2",
      instructors: [
        {
          id: "91a23b20-a7a3-4323-9548-0897c09eb49e",
          name: "Winston Ferry",
        },
      ],
      isActive: true,
      languages: [
        "despecto",
        "suppellex",
      ],
      localizations: [
        {
          description: "Numquam.",
          language: "es",
          name: "validus",
        },
        {
          description: "Callide.",
          language: "fr",
          name: "crux",
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
      name: "ut",
      providerName: "Berge LLC",
      publishedAt: new Date("2023-11-08T11:32:09.080Z"),
      shortDescription: "Commemoro.",
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
      updatedAt: new Date("2022-09-23T17:59:49.060Z"),
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
      externalReference: "0d230e31-a9c4-4a35-a5b9-9168e91ffff5",
      id: "8cc5813e-f98d-4b09-9716-4bad43b58fd2",
      instructors: [
        {
          id: "91a23b20-a7a3-4323-9548-0897c09eb49e",
          name: "Winston Ferry",
        },
      ],
      isActive: true,
      languages: [
        "despecto",
        "suppellex",
      ],
      localizations: [
        {
          description: "Numquam.",
          language: "es",
          name: "validus",
        },
        {
          description: "Callide.",
          language: "fr",
          name: "crux",
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
      name: "ut",
      providerName: "Berge LLC",
      publishedAt: new Date("2023-11-08T11:32:09.080Z"),
      shortDescription: "Commemoro.",
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
      updatedAt: new Date("2022-09-23T17:59:49.060Z"),
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

Remove a content

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

Update a content

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
      externalReference: "0d230e31-a9c4-4a35-a5b9-9168e91ffff5",
      id: "8cc5813e-f98d-4b09-9716-4bad43b58fd2",
      instructors: [
        {
          id: "91a23b20-a7a3-4323-9548-0897c09eb49e",
          name: "Winston Ferry",
        },
      ],
      isActive: true,
      languages: [
        "despecto",
        "suppellex",
      ],
      localizations: [
        {
          description: "Numquam.",
          language: "es",
          name: "validus",
        },
        {
          description: "Callide.",
          language: "fr",
          name: "crux",
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
      name: "ut",
      providerName: "Berge LLC",
      publishedAt: new Date("2023-11-08T11:32:09.080Z"),
      shortDescription: "Commemoro.",
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
      updatedAt: new Date("2022-09-23T17:59:49.060Z"),
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
      externalReference: "0d230e31-a9c4-4a35-a5b9-9168e91ffff5",
      id: "8cc5813e-f98d-4b09-9716-4bad43b58fd2",
      instructors: [
        {
          id: "91a23b20-a7a3-4323-9548-0897c09eb49e",
          name: "Winston Ferry",
        },
      ],
      isActive: true,
      languages: [
        "despecto",
        "suppellex",
      ],
      localizations: [
        {
          description: "Numquam.",
          language: "es",
          name: "validus",
        },
        {
          description: "Callide.",
          language: "fr",
          name: "crux",
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
      name: "ut",
      providerName: "Berge LLC",
      publishedAt: new Date("2023-11-08T11:32:09.080Z"),
      shortDescription: "Commemoro.",
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
      updatedAt: new Date("2022-09-23T17:59:49.060Z"),
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