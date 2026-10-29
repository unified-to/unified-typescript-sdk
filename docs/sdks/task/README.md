# Task

## Overview

### Available Operations

* [createGenaiTask](#creategenaitask) - Create a task
* [createTaskComment](#createtaskcomment) - Create a comment
* [createTaskProject](#createtaskproject) - Create a project
* [createTaskTask](#createtasktask) - Create a task
* [getGenaiTask](#getgenaitask) - Retrieve a task
* [getTaskChange](#gettaskchange) - Retrieve a change
* [getTaskComment](#gettaskcomment) - Retrieve a comment
* [getTaskProject](#gettaskproject) - Retrieve a project
* [getTaskTask](#gettasktask) - Retrieve a task
* [listGenaiTasks](#listgenaitasks) - List all tasks
* [listTaskChanges](#listtaskchanges) - List all changes
* [listTaskComments](#listtaskcomments) - List all comments
* [listTaskProjects](#listtaskprojects) - List all projects
* [listTaskTasks](#listtasktasks) - List all tasks
* [patchGenaiTask](#patchgenaitask) - Update a task
* [patchTaskComment](#patchtaskcomment) - Update a comment
* [patchTaskProject](#patchtaskproject) - Update a project
* [patchTaskTask](#patchtasktask) - Update a task
* [removeGenaiTask](#removegenaitask) - Remove a task
* [removeTaskComment](#removetaskcomment) - Remove a comment
* [removeTaskProject](#removetaskproject) - Remove a project
* [removeTaskTask](#removetasktask) - Remove a task
* [updateGenaiTask](#updategenaitask) - Update a task
* [updateTaskComment](#updatetaskcomment) - Update a comment
* [updateTaskProject](#updatetaskproject) - Update a project
* [updateTaskTask](#updatetasktask) - Update a task

## createGenaiTask

Creates a GenaiTask. Provide the unified GenaiTask fields in the request body; they are mapped to the provider's API. Returns the created GenaiTask.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createGenaiTask" method="post" path="/genai/{connection_id}/task" example="genai_task" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.createGenaiTask({
    genaiTask: {
      completedAt: new Date("2025-10-07T14:10:44.596Z"),
      createdAt: new Date("2020-10-25T20:19:33.247Z"),
      filesChanged: 19,
      id: "81f8bf74-ae16-4307-b354-08cce9acdf45",
      instructions: "Benigne canonicus officiis solvo adsidue deleo angustus.",
      linesAdded: 244,
      linesDeleted: 118,
      messages: [
        {
          content: "Stultus esse cursim stabilis tenetur amet contigo tristis.",
          images: [],
          role: "ASSISTANT",
        },
      ],
      name: "connect multi-byte port",
      pullrequestUrl: "https://github.com/berenice.satterfield/joshingly-ignorance/pull/383",
      repoUrl: "https://github.com/berenice.satterfield/joshingly-ignorance",
      sourceBranchIdentifier: "main",
      startedAt: new Date("2024-05-26T00:08:06.095Z"),
      status: "BLOCKED",
      summary: "Cur aeternus cogito vesper.",
      targetBranchIdentifier: "agent/joshingly-ignorance",
      tokensUsed: 2165,
      updatedAt: new Date("2023-03-01T07:01:54.036Z"),
      webUrl: "https://inexperienced-adrenalin.biz/",
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
import { genaiCreateGenaiTask } from "@unified-api/typescript-sdk/funcs/genaiCreateGenaiTask.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await genaiCreateGenaiTask(unifiedTo, {
    genaiTask: {
      completedAt: new Date("2025-10-07T14:10:44.596Z"),
      createdAt: new Date("2020-10-25T20:19:33.247Z"),
      filesChanged: 19,
      id: "81f8bf74-ae16-4307-b354-08cce9acdf45",
      instructions: "Benigne canonicus officiis solvo adsidue deleo angustus.",
      linesAdded: 244,
      linesDeleted: 118,
      messages: [
        {
          content: "Stultus esse cursim stabilis tenetur amet contigo tristis.",
          images: [],
          role: "ASSISTANT",
        },
      ],
      name: "connect multi-byte port",
      pullrequestUrl: "https://github.com/berenice.satterfield/joshingly-ignorance/pull/383",
      repoUrl: "https://github.com/berenice.satterfield/joshingly-ignorance",
      sourceBranchIdentifier: "main",
      startedAt: new Date("2024-05-26T00:08:06.095Z"),
      status: "BLOCKED",
      summary: "Cur aeternus cogito vesper.",
      targetBranchIdentifier: "agent/joshingly-ignorance",
      tokensUsed: 2165,
      updatedAt: new Date("2023-03-01T07:01:54.036Z"),
      webUrl: "https://inexperienced-adrenalin.biz/",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("genaiCreateGenaiTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateGenaiTaskRequest](../../sdk/models/operations/creategenaitaskrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.GenaiTask](../../sdk/models/shared/genaitask.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createTaskComment

Creates a TaskComment. Provide the unified TaskComment fields in the request body; they are mapped to the provider's API. Returns the created TaskComment.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createTaskComment" method="post" path="/task/{connection_id}/comment" example="task_comment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.createTaskComment({
    taskComment: {
      createdAt: new Date("2019-10-12T20:33:37.879Z"),
      hasChildren: true,
      id: "42204582-1744-4558-b542-e55f61b8742e",
      metadata: [],
      text: "Colo ulciscor sublime tabernus.",
      updatedAt: new Date("2021-10-05T11:42:24.197Z"),
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
import { taskCreateTaskComment } from "@unified-api/typescript-sdk/funcs/taskCreateTaskComment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taskCreateTaskComment(unifiedTo, {
    taskComment: {
      createdAt: new Date("2019-10-12T20:33:37.879Z"),
      hasChildren: true,
      id: "42204582-1744-4558-b542-e55f61b8742e",
      metadata: [],
      text: "Colo ulciscor sublime tabernus.",
      updatedAt: new Date("2021-10-05T11:42:24.197Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taskCreateTaskComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTaskCommentRequest](../../sdk/models/operations/createtaskcommentrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskComment](../../sdk/models/shared/taskcomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createTaskProject

Creates a TaskProject. Provide the unified TaskProject fields in the request body; they are mapped to the provider's API. Returns the created TaskProject.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createTaskProject" method="post" path="/task/{connection_id}/project" example="task_project" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.createTaskProject({
    taskProject: {
      createdAt: new Date("2023-06-23T16:39:40.446Z"),
      description: "Valetudo aggredior accommodo curiositas vox.",
      hasChildren: false,
      hasTasks: false,
      id: "2176e92a-0217-4b1d-8299-34c2a0f1fcad",
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "eb7ad595-07af-463f-961f-4a0fe66f38f5",
          namespace: "custom",
          slug: "decens",
          value: "uterque",
        },
        {
          extraData: {

          },
          format: "TEXT",
          id: "95655a9f-2f6c-421c-91f6-e4ae2f3ca05b",
          namespace: "custom",
          slug: "benevolentia",
          value: "pariatur",
        },
      ],
      name: "Garden",
      updatedAt: new Date("2023-10-12T07:08:15.213Z"),
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
import { projectCreateTaskProject } from "@unified-api/typescript-sdk/funcs/projectCreateTaskProject.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await projectCreateTaskProject(unifiedTo, {
    taskProject: {
      createdAt: new Date("2023-06-23T16:39:40.446Z"),
      description: "Valetudo aggredior accommodo curiositas vox.",
      hasChildren: false,
      hasTasks: false,
      id: "2176e92a-0217-4b1d-8299-34c2a0f1fcad",
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "eb7ad595-07af-463f-961f-4a0fe66f38f5",
          namespace: "custom",
          slug: "decens",
          value: "uterque",
        },
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "95655a9f-2f6c-421c-91f6-e4ae2f3ca05b",
          namespace: "custom",
          slug: "benevolentia",
          value: "pariatur",
        },
      ],
      name: "Garden",
      updatedAt: new Date("2023-10-12T07:08:15.213Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectCreateTaskProject failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTaskProjectRequest](../../sdk/models/operations/createtaskprojectrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskProject](../../sdk/models/shared/taskproject.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createTaskTask

Creates a TaskTask. Provide the unified TaskTask fields in the request body; they are mapped to the provider's API. Returns the created TaskTask.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createTaskTask" method="post" path="/task/{connection_id}/task" example="task_task" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.createTaskTask({
    taskTask: {
      attachmentIds: [],
      createdAt: new Date("2019-01-31T08:34:55.626Z"),
      dueAt: new Date("2025-09-18T05:46:48.925Z"),
      hasChildren: true,
      id: "c69a2a52-8f09-4b09-a659-ca7533caf9af",
      metadata: [],
      name: "I'll compress the optical IB interface, that should capacitor the JBOD system!",
      notes: "Argentum ventosus rem talis neque thymbra. Absconditus peccatus crustulum tollo cometes volva vacuus eos cedo. Somnus utpote coadunatio denuncio adopto autus sono atrocitas. Concido rerum cura aveho torqueo tempore tubineus vomer tempore suscipit. Clibanus valetudo vulnero pauper caput absorbeo correptius vir deduco.",
      priority: "MEDIUM",
      progress: 33,
      startAt: new Date("2025-08-20T19:55:19.963Z"),
      status: "OPENED",
      storyPoints: 0,
      tags: [
        "curis",
        "crinis",
      ],
      timeSpent: 5359,
      timeSpentUnit: "SECONDS",
      type: "magni",
      updatedAt: new Date("2022-04-10T05:57:13.301Z"),
      url: "https://elementary-utilization.net/",
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
import { taskCreateTaskTask } from "@unified-api/typescript-sdk/funcs/taskCreateTaskTask.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taskCreateTaskTask(unifiedTo, {
    taskTask: {
      attachmentIds: [],
      createdAt: new Date("2019-01-31T08:34:55.626Z"),
      dueAt: new Date("2025-09-18T05:46:48.925Z"),
      hasChildren: true,
      id: "c69a2a52-8f09-4b09-a659-ca7533caf9af",
      metadata: [],
      name: "I'll compress the optical IB interface, that should capacitor the JBOD system!",
      notes: "Argentum ventosus rem talis neque thymbra. Absconditus peccatus crustulum tollo cometes volva vacuus eos cedo. Somnus utpote coadunatio denuncio adopto autus sono atrocitas. Concido rerum cura aveho torqueo tempore tubineus vomer tempore suscipit. Clibanus valetudo vulnero pauper caput absorbeo correptius vir deduco.",
      priority: "MEDIUM",
      progress: 33,
      startAt: new Date("2025-08-20T19:55:19.963Z"),
      status: "OPENED",
      storyPoints: 0,
      tags: [
        "curis",
        "crinis",
      ],
      timeSpent: 5359,
      timeSpentUnit: "SECONDS",
      type: "magni",
      updatedAt: new Date("2022-04-10T05:57:13.301Z"),
      url: "https://elementary-utilization.net/",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taskCreateTaskTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTaskTaskRequest](../../sdk/models/operations/createtasktaskrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskTask](../../sdk/models/shared/tasktask.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getGenaiTask

Retrieves a single GenaiTask by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGenaiTask" method="get" path="/genai/{connection_id}/task/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.getGenaiTask({
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
import { genaiGetGenaiTask } from "@unified-api/typescript-sdk/funcs/genaiGetGenaiTask.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await genaiGetGenaiTask(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("genaiGetGenaiTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGenaiTaskRequest](../../sdk/models/operations/getgenaitaskrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.GenaiTask](../../sdk/models/shared/genaitask.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getTaskChange

Retrieves a single TaskChange by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTaskChange" method="get" path="/task/{connection_id}/change/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.getTaskChange({
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
import { taskGetTaskChange } from "@unified-api/typescript-sdk/funcs/taskGetTaskChange.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taskGetTaskChange(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taskGetTaskChange failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTaskChangeRequest](../../sdk/models/operations/gettaskchangerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskChange](../../sdk/models/shared/taskchange.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getTaskComment

Retrieves a single TaskComment by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTaskComment" method="get" path="/task/{connection_id}/comment/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.getTaskComment({
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
import { taskGetTaskComment } from "@unified-api/typescript-sdk/funcs/taskGetTaskComment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taskGetTaskComment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taskGetTaskComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTaskCommentRequest](../../sdk/models/operations/gettaskcommentrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskComment](../../sdk/models/shared/taskcomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getTaskProject

Retrieves a single TaskProject by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTaskProject" method="get" path="/task/{connection_id}/project/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.getTaskProject({
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
import { projectGetTaskProject } from "@unified-api/typescript-sdk/funcs/projectGetTaskProject.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await projectGetTaskProject(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectGetTaskProject failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTaskProjectRequest](../../sdk/models/operations/gettaskprojectrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskProject](../../sdk/models/shared/taskproject.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getTaskTask

Retrieves a single TaskTask by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTaskTask" method="get" path="/task/{connection_id}/task/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.getTaskTask({
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
import { taskGetTaskTask } from "@unified-api/typescript-sdk/funcs/taskGetTaskTask.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taskGetTaskTask(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taskGetTaskTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTaskTaskRequest](../../sdk/models/operations/gettasktaskrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskTask](../../sdk/models/shared/tasktask.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listGenaiTasks

Returns a list of GenaiTasks. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listGenaiTasks" method="get" path="/genai/{connection_id}/task" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.listGenaiTasks({
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
import { genaiListGenaiTasks } from "@unified-api/typescript-sdk/funcs/genaiListGenaiTasks.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await genaiListGenaiTasks(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("genaiListGenaiTasks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGenaiTasksRequest](../../sdk/models/operations/listgenaitasksrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.GenaiTask[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listTaskChanges

Returns a list of TaskChanges. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listTaskChanges" method="get" path="/task/{connection_id}/change" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.listTaskChanges({
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
import { taskListTaskChanges } from "@unified-api/typescript-sdk/funcs/taskListTaskChanges.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taskListTaskChanges(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taskListTaskChanges failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTaskChangesRequest](../../sdk/models/operations/listtaskchangesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskChange[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listTaskComments

Returns a list of TaskComments. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listTaskComments" method="get" path="/task/{connection_id}/comment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.listTaskComments({
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
import { taskListTaskComments } from "@unified-api/typescript-sdk/funcs/taskListTaskComments.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taskListTaskComments(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taskListTaskComments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTaskCommentsRequest](../../sdk/models/operations/listtaskcommentsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskComment[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listTaskProjects

Returns a list of TaskProjects. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listTaskProjects" method="get" path="/task/{connection_id}/project" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.listTaskProjects({
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
import { projectListTaskProjects } from "@unified-api/typescript-sdk/funcs/projectListTaskProjects.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await projectListTaskProjects(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectListTaskProjects failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTaskProjectsRequest](../../sdk/models/operations/listtaskprojectsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskProject[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listTaskTasks

Returns a list of TaskTasks. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listTaskTasks" method="get" path="/task/{connection_id}/task" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.listTaskTasks({
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
import { taskListTaskTasks } from "@unified-api/typescript-sdk/funcs/taskListTaskTasks.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taskListTaskTasks(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taskListTaskTasks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTaskTasksRequest](../../sdk/models/operations/listtasktasksrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskTask[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchGenaiTask

Updates the GenaiTask identified by `id`. Provide the unified GenaiTask fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchGenaiTask" method="patch" path="/genai/{connection_id}/task/{id}" example="genai_task" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.patchGenaiTask({
    genaiTask: {
      completedAt: new Date("2025-10-07T14:10:44.611Z"),
      createdAt: new Date("2020-10-25T20:19:33.247Z"),
      filesChanged: 19,
      id: "225d22ee-d368-4242-8dd2-54271ee584bd",
      instructions: "Benigne canonicus officiis solvo adsidue deleo angustus.",
      linesAdded: 244,
      linesDeleted: 118,
      messages: [
        {
          content: "Stultus esse cursim stabilis tenetur amet contigo tristis.",
          images: [],
          role: "ASSISTANT",
        },
      ],
      name: "connect multi-byte port",
      pullrequestUrl: "https://github.com/berenice.satterfield/joshingly-ignorance/pull/383",
      repoUrl: "https://github.com/berenice.satterfield/joshingly-ignorance",
      sourceBranchIdentifier: "main",
      startedAt: new Date("2024-05-26T00:08:06.105Z"),
      status: "BLOCKED",
      summary: "Cur aeternus cogito vesper.",
      targetBranchIdentifier: "agent/joshingly-ignorance",
      tokensUsed: 2165,
      updatedAt: new Date("2023-03-01T07:01:54.043Z"),
      webUrl: "https://inexperienced-adrenalin.biz/",
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
import { genaiPatchGenaiTask } from "@unified-api/typescript-sdk/funcs/genaiPatchGenaiTask.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await genaiPatchGenaiTask(unifiedTo, {
    genaiTask: {
      completedAt: new Date("2025-10-07T14:10:44.611Z"),
      createdAt: new Date("2020-10-25T20:19:33.247Z"),
      filesChanged: 19,
      id: "225d22ee-d368-4242-8dd2-54271ee584bd",
      instructions: "Benigne canonicus officiis solvo adsidue deleo angustus.",
      linesAdded: 244,
      linesDeleted: 118,
      messages: [
        {
          content: "Stultus esse cursim stabilis tenetur amet contigo tristis.",
          images: [],
          role: "ASSISTANT",
        },
      ],
      name: "connect multi-byte port",
      pullrequestUrl: "https://github.com/berenice.satterfield/joshingly-ignorance/pull/383",
      repoUrl: "https://github.com/berenice.satterfield/joshingly-ignorance",
      sourceBranchIdentifier: "main",
      startedAt: new Date("2024-05-26T00:08:06.105Z"),
      status: "BLOCKED",
      summary: "Cur aeternus cogito vesper.",
      targetBranchIdentifier: "agent/joshingly-ignorance",
      tokensUsed: 2165,
      updatedAt: new Date("2023-03-01T07:01:54.043Z"),
      webUrl: "https://inexperienced-adrenalin.biz/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("genaiPatchGenaiTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchGenaiTaskRequest](../../sdk/models/operations/patchgenaitaskrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.GenaiTask](../../sdk/models/shared/genaitask.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchTaskComment

Updates the TaskComment identified by `id`. Provide the unified TaskComment fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchTaskComment" method="patch" path="/task/{connection_id}/comment/{id}" example="task_comment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.patchTaskComment({
    taskComment: {
      createdAt: new Date("2019-10-12T20:33:37.879Z"),
      hasChildren: true,
      id: "a71090f8-ccb7-4b03-818c-0cfe4be09110",
      metadata: [],
      text: "Colo ulciscor sublime tabernus.",
      updatedAt: new Date("2021-10-05T11:42:24.199Z"),
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
import { taskPatchTaskComment } from "@unified-api/typescript-sdk/funcs/taskPatchTaskComment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taskPatchTaskComment(unifiedTo, {
    taskComment: {
      createdAt: new Date("2019-10-12T20:33:37.879Z"),
      hasChildren: true,
      id: "a71090f8-ccb7-4b03-818c-0cfe4be09110",
      metadata: [],
      text: "Colo ulciscor sublime tabernus.",
      updatedAt: new Date("2021-10-05T11:42:24.199Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taskPatchTaskComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchTaskCommentRequest](../../sdk/models/operations/patchtaskcommentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskComment](../../sdk/models/shared/taskcomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchTaskProject

Updates the TaskProject identified by `id`. Provide the unified TaskProject fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchTaskProject" method="patch" path="/task/{connection_id}/project/{id}" example="task_project" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.patchTaskProject({
    taskProject: {
      createdAt: new Date("2023-06-23T16:39:40.446Z"),
      description: "Valetudo aggredior accommodo curiositas vox.",
      hasChildren: false,
      hasTasks: false,
      id: "d1456921-4669-46bc-91fc-47a9a17da562",
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "a42b6a2d-5f61-4f7e-ac9a-6411f02da181",
          namespace: "custom",
          slug: "decens",
          value: "uterque",
        },
        {
          extraData: {

          },
          format: "TEXT",
          id: "5cc3ac6e-8050-424a-bb82-fa1c579c90b1",
          namespace: "custom",
          slug: "benevolentia",
          value: "pariatur",
        },
      ],
      name: "Garden",
      updatedAt: new Date("2023-10-12T07:08:15.213Z"),
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
import { projectPatchTaskProject } from "@unified-api/typescript-sdk/funcs/projectPatchTaskProject.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await projectPatchTaskProject(unifiedTo, {
    taskProject: {
      createdAt: new Date("2023-06-23T16:39:40.446Z"),
      description: "Valetudo aggredior accommodo curiositas vox.",
      hasChildren: false,
      hasTasks: false,
      id: "d1456921-4669-46bc-91fc-47a9a17da562",
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "a42b6a2d-5f61-4f7e-ac9a-6411f02da181",
          namespace: "custom",
          slug: "decens",
          value: "uterque",
        },
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "5cc3ac6e-8050-424a-bb82-fa1c579c90b1",
          namespace: "custom",
          slug: "benevolentia",
          value: "pariatur",
        },
      ],
      name: "Garden",
      updatedAt: new Date("2023-10-12T07:08:15.213Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectPatchTaskProject failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchTaskProjectRequest](../../sdk/models/operations/patchtaskprojectrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskProject](../../sdk/models/shared/taskproject.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchTaskTask

Updates the TaskTask identified by `id`. Provide the unified TaskTask fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchTaskTask" method="patch" path="/task/{connection_id}/task/{id}" example="task_task" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.patchTaskTask({
    taskTask: {
      attachmentIds: [],
      createdAt: new Date("2019-01-31T08:34:55.626Z"),
      dueAt: new Date("2025-09-18T05:46:48.940Z"),
      hasChildren: true,
      id: "4b3ba6ba-66e7-4d85-bcef-de88b2f69d35",
      metadata: [],
      name: "I'll compress the optical IB interface, that should capacitor the JBOD system!",
      notes: "Argentum ventosus rem talis neque thymbra. Absconditus peccatus crustulum tollo cometes volva vacuus eos cedo. Somnus utpote coadunatio denuncio adopto autus sono atrocitas. Concido rerum cura aveho torqueo tempore tubineus vomer tempore suscipit. Clibanus valetudo vulnero pauper caput absorbeo correptius vir deduco.",
      priority: "MEDIUM",
      progress: 33,
      startAt: new Date("2025-08-20T19:55:19.978Z"),
      status: "OPENED",
      storyPoints: 0,
      tags: [
        "curis",
        "crinis",
      ],
      timeSpent: 5359,
      timeSpentUnit: "SECONDS",
      type: "magni",
      updatedAt: new Date("2022-04-10T05:57:13.308Z"),
      url: "https://elementary-utilization.net/",
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
import { taskPatchTaskTask } from "@unified-api/typescript-sdk/funcs/taskPatchTaskTask.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taskPatchTaskTask(unifiedTo, {
    taskTask: {
      attachmentIds: [],
      createdAt: new Date("2019-01-31T08:34:55.626Z"),
      dueAt: new Date("2025-09-18T05:46:48.940Z"),
      hasChildren: true,
      id: "4b3ba6ba-66e7-4d85-bcef-de88b2f69d35",
      metadata: [],
      name: "I'll compress the optical IB interface, that should capacitor the JBOD system!",
      notes: "Argentum ventosus rem talis neque thymbra. Absconditus peccatus crustulum tollo cometes volva vacuus eos cedo. Somnus utpote coadunatio denuncio adopto autus sono atrocitas. Concido rerum cura aveho torqueo tempore tubineus vomer tempore suscipit. Clibanus valetudo vulnero pauper caput absorbeo correptius vir deduco.",
      priority: "MEDIUM",
      progress: 33,
      startAt: new Date("2025-08-20T19:55:19.978Z"),
      status: "OPENED",
      storyPoints: 0,
      tags: [
        "curis",
        "crinis",
      ],
      timeSpent: 5359,
      timeSpentUnit: "SECONDS",
      type: "magni",
      updatedAt: new Date("2022-04-10T05:57:13.308Z"),
      url: "https://elementary-utilization.net/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taskPatchTaskTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchTaskTaskRequest](../../sdk/models/operations/patchtasktaskrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskTask](../../sdk/models/shared/tasktask.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeGenaiTask

Deletes the GenaiTask identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeGenaiTask" method="delete" path="/genai/{connection_id}/task/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.removeGenaiTask({
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
import { genaiRemoveGenaiTask } from "@unified-api/typescript-sdk/funcs/genaiRemoveGenaiTask.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await genaiRemoveGenaiTask(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("genaiRemoveGenaiTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveGenaiTaskRequest](../../sdk/models/operations/removegenaitaskrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveGenaiTaskResponse](../../sdk/models/operations/removegenaitaskresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeTaskComment

Deletes the TaskComment identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeTaskComment" method="delete" path="/task/{connection_id}/comment/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.removeTaskComment({
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
import { taskRemoveTaskComment } from "@unified-api/typescript-sdk/funcs/taskRemoveTaskComment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taskRemoveTaskComment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taskRemoveTaskComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveTaskCommentRequest](../../sdk/models/operations/removetaskcommentrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveTaskCommentResponse](../../sdk/models/operations/removetaskcommentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeTaskProject

Deletes the TaskProject identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeTaskProject" method="delete" path="/task/{connection_id}/project/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.removeTaskProject({
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
import { projectRemoveTaskProject } from "@unified-api/typescript-sdk/funcs/projectRemoveTaskProject.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await projectRemoveTaskProject(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectRemoveTaskProject failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveTaskProjectRequest](../../sdk/models/operations/removetaskprojectrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveTaskProjectResponse](../../sdk/models/operations/removetaskprojectresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeTaskTask

Deletes the TaskTask identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeTaskTask" method="delete" path="/task/{connection_id}/task/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.removeTaskTask({
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
import { taskRemoveTaskTask } from "@unified-api/typescript-sdk/funcs/taskRemoveTaskTask.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taskRemoveTaskTask(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taskRemoveTaskTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveTaskTaskRequest](../../sdk/models/operations/removetasktaskrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveTaskTaskResponse](../../sdk/models/operations/removetasktaskresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateGenaiTask

Updates the GenaiTask identified by `id`. Provide the unified GenaiTask fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateGenaiTask" method="put" path="/genai/{connection_id}/task/{id}" example="genai_task" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.updateGenaiTask({
    genaiTask: {
      completedAt: new Date("2025-10-07T14:10:44.611Z"),
      createdAt: new Date("2020-10-25T20:19:33.247Z"),
      filesChanged: 19,
      id: "225d22ee-d368-4242-8dd2-54271ee584bd",
      instructions: "Benigne canonicus officiis solvo adsidue deleo angustus.",
      linesAdded: 244,
      linesDeleted: 118,
      messages: [
        {
          content: "Stultus esse cursim stabilis tenetur amet contigo tristis.",
          images: [],
          role: "ASSISTANT",
        },
      ],
      name: "connect multi-byte port",
      pullrequestUrl: "https://github.com/berenice.satterfield/joshingly-ignorance/pull/383",
      repoUrl: "https://github.com/berenice.satterfield/joshingly-ignorance",
      sourceBranchIdentifier: "main",
      startedAt: new Date("2024-05-26T00:08:06.105Z"),
      status: "BLOCKED",
      summary: "Cur aeternus cogito vesper.",
      targetBranchIdentifier: "agent/joshingly-ignorance",
      tokensUsed: 2165,
      updatedAt: new Date("2023-03-01T07:01:54.043Z"),
      webUrl: "https://inexperienced-adrenalin.biz/",
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
import { genaiUpdateGenaiTask } from "@unified-api/typescript-sdk/funcs/genaiUpdateGenaiTask.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await genaiUpdateGenaiTask(unifiedTo, {
    genaiTask: {
      completedAt: new Date("2025-10-07T14:10:44.611Z"),
      createdAt: new Date("2020-10-25T20:19:33.247Z"),
      filesChanged: 19,
      id: "225d22ee-d368-4242-8dd2-54271ee584bd",
      instructions: "Benigne canonicus officiis solvo adsidue deleo angustus.",
      linesAdded: 244,
      linesDeleted: 118,
      messages: [
        {
          content: "Stultus esse cursim stabilis tenetur amet contigo tristis.",
          images: [],
          role: "ASSISTANT",
        },
      ],
      name: "connect multi-byte port",
      pullrequestUrl: "https://github.com/berenice.satterfield/joshingly-ignorance/pull/383",
      repoUrl: "https://github.com/berenice.satterfield/joshingly-ignorance",
      sourceBranchIdentifier: "main",
      startedAt: new Date("2024-05-26T00:08:06.105Z"),
      status: "BLOCKED",
      summary: "Cur aeternus cogito vesper.",
      targetBranchIdentifier: "agent/joshingly-ignorance",
      tokensUsed: 2165,
      updatedAt: new Date("2023-03-01T07:01:54.043Z"),
      webUrl: "https://inexperienced-adrenalin.biz/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("genaiUpdateGenaiTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateGenaiTaskRequest](../../sdk/models/operations/updategenaitaskrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.GenaiTask](../../sdk/models/shared/genaitask.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateTaskComment

Updates the TaskComment identified by `id`. Provide the unified TaskComment fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateTaskComment" method="put" path="/task/{connection_id}/comment/{id}" example="task_comment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.updateTaskComment({
    taskComment: {
      createdAt: new Date("2019-10-12T20:33:37.879Z"),
      hasChildren: true,
      id: "a71090f8-ccb7-4b03-818c-0cfe4be09110",
      metadata: [],
      text: "Colo ulciscor sublime tabernus.",
      updatedAt: new Date("2021-10-05T11:42:24.199Z"),
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
import { taskUpdateTaskComment } from "@unified-api/typescript-sdk/funcs/taskUpdateTaskComment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taskUpdateTaskComment(unifiedTo, {
    taskComment: {
      createdAt: new Date("2019-10-12T20:33:37.879Z"),
      hasChildren: true,
      id: "a71090f8-ccb7-4b03-818c-0cfe4be09110",
      metadata: [],
      text: "Colo ulciscor sublime tabernus.",
      updatedAt: new Date("2021-10-05T11:42:24.199Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taskUpdateTaskComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateTaskCommentRequest](../../sdk/models/operations/updatetaskcommentrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskComment](../../sdk/models/shared/taskcomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateTaskProject

Updates the TaskProject identified by `id`. Provide the unified TaskProject fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateTaskProject" method="put" path="/task/{connection_id}/project/{id}" example="task_project" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.updateTaskProject({
    taskProject: {
      createdAt: new Date("2023-06-23T16:39:40.446Z"),
      description: "Valetudo aggredior accommodo curiositas vox.",
      hasChildren: false,
      hasTasks: false,
      id: "d1456921-4669-46bc-91fc-47a9a17da562",
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "a42b6a2d-5f61-4f7e-ac9a-6411f02da181",
          namespace: "custom",
          slug: "decens",
          value: "uterque",
        },
        {
          extraData: {

          },
          format: "TEXT",
          id: "5cc3ac6e-8050-424a-bb82-fa1c579c90b1",
          namespace: "custom",
          slug: "benevolentia",
          value: "pariatur",
        },
      ],
      name: "Garden",
      updatedAt: new Date("2023-10-12T07:08:15.213Z"),
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
import { projectUpdateTaskProject } from "@unified-api/typescript-sdk/funcs/projectUpdateTaskProject.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await projectUpdateTaskProject(unifiedTo, {
    taskProject: {
      createdAt: new Date("2023-06-23T16:39:40.446Z"),
      description: "Valetudo aggredior accommodo curiositas vox.",
      hasChildren: false,
      hasTasks: false,
      id: "d1456921-4669-46bc-91fc-47a9a17da562",
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "a42b6a2d-5f61-4f7e-ac9a-6411f02da181",
          namespace: "custom",
          slug: "decens",
          value: "uterque",
        },
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "5cc3ac6e-8050-424a-bb82-fa1c579c90b1",
          namespace: "custom",
          slug: "benevolentia",
          value: "pariatur",
        },
      ],
      name: "Garden",
      updatedAt: new Date("2023-10-12T07:08:15.213Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectUpdateTaskProject failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateTaskProjectRequest](../../sdk/models/operations/updatetaskprojectrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskProject](../../sdk/models/shared/taskproject.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateTaskTask

Updates the TaskTask identified by `id`. Provide the unified TaskTask fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateTaskTask" method="put" path="/task/{connection_id}/task/{id}" example="task_task" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.task.updateTaskTask({
    taskTask: {
      attachmentIds: [],
      createdAt: new Date("2019-01-31T08:34:55.626Z"),
      dueAt: new Date("2025-09-18T05:46:48.940Z"),
      hasChildren: true,
      id: "4b3ba6ba-66e7-4d85-bcef-de88b2f69d35",
      metadata: [],
      name: "I'll compress the optical IB interface, that should capacitor the JBOD system!",
      notes: "Argentum ventosus rem talis neque thymbra. Absconditus peccatus crustulum tollo cometes volva vacuus eos cedo. Somnus utpote coadunatio denuncio adopto autus sono atrocitas. Concido rerum cura aveho torqueo tempore tubineus vomer tempore suscipit. Clibanus valetudo vulnero pauper caput absorbeo correptius vir deduco.",
      priority: "MEDIUM",
      progress: 33,
      startAt: new Date("2025-08-20T19:55:19.978Z"),
      status: "OPENED",
      storyPoints: 0,
      tags: [
        "curis",
        "crinis",
      ],
      timeSpent: 5359,
      timeSpentUnit: "SECONDS",
      type: "magni",
      updatedAt: new Date("2022-04-10T05:57:13.308Z"),
      url: "https://elementary-utilization.net/",
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
import { taskUpdateTaskTask } from "@unified-api/typescript-sdk/funcs/taskUpdateTaskTask.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taskUpdateTaskTask(unifiedTo, {
    taskTask: {
      attachmentIds: [],
      createdAt: new Date("2019-01-31T08:34:55.626Z"),
      dueAt: new Date("2025-09-18T05:46:48.940Z"),
      hasChildren: true,
      id: "4b3ba6ba-66e7-4d85-bcef-de88b2f69d35",
      metadata: [],
      name: "I'll compress the optical IB interface, that should capacitor the JBOD system!",
      notes: "Argentum ventosus rem talis neque thymbra. Absconditus peccatus crustulum tollo cometes volva vacuus eos cedo. Somnus utpote coadunatio denuncio adopto autus sono atrocitas. Concido rerum cura aveho torqueo tempore tubineus vomer tempore suscipit. Clibanus valetudo vulnero pauper caput absorbeo correptius vir deduco.",
      priority: "MEDIUM",
      progress: 33,
      startAt: new Date("2025-08-20T19:55:19.978Z"),
      status: "OPENED",
      storyPoints: 0,
      tags: [
        "curis",
        "crinis",
      ],
      timeSpent: 5359,
      timeSpentUnit: "SECONDS",
      type: "magni",
      updatedAt: new Date("2022-04-10T05:57:13.308Z"),
      url: "https://elementary-utilization.net/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taskUpdateTaskTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateTaskTaskRequest](../../sdk/models/operations/updatetasktaskrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TaskTask](../../sdk/models/shared/tasktask.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |