# Ticket

## Overview

### Available Operations

* [createTicketingTicket](#createticketingticket) - Create a ticket
* [getTicketingTicket](#getticketingticket) - Retrieve a ticket
* [listTicketingTickets](#listticketingtickets) - List all tickets
* [patchTicketingTicket](#patchticketingticket) - Update a ticket
* [removeTicketingTicket](#removeticketingticket) - Remove a ticket
* [updateTicketingTicket](#updateticketingticket) - Update a ticket

## createTicketingTicket

Create a ticket

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createTicketingTicket" method="post" path="/ticketing/{connection_id}/ticket" example="ticketing_ticket" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ticket.createTicketingTicket({
    ticketingTicket: {
      attachmentIds: [
        "116cac13-b7c7-441b-a977-4eac369e9b84",
        "abb77e3d-6d4b-41cc-8373-f3b2cfe1363a",
      ],
      categoryId: "vilicus",
      createdAt: new Date("2021-06-25T19:19:31.279Z"),
      description: "Cura dignissimos aut clibanus vulgaris patrocinor. Laborum acies curiositas antepono coniuratio. Correptius curiositas sono censura coma. Bestia suus tot cotidie terror subito coniecto beneficium.",
      dueAt: new Date("2025-08-12T11:59:38.200Z"),
      id: "d0845f87-cb32-4d49-88f9-aefc27a55287",
      priority: "LOW",
      source: "atavus",
      sourceRef: "29cae13e-4b0b-4f77-88ee-dec55ae51a23",
      status: "ACTIVE",
      subject: "Thymbra ratione minus arbitro tricesimus cetera validus.",
      tags: [
        "tamen",
        "vitae",
        "torrens",
      ],
      updatedAt: new Date("2023-06-08T07:55:09.477Z"),
      url: "https://yellowish-testimonial.biz",
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
import { ticketingCreateTicketingTicket } from "@unified-api/typescript-sdk/funcs/ticketingCreateTicketingTicket.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ticketingCreateTicketingTicket(unifiedTo, {
    ticketingTicket: {
      attachmentIds: [
        "116cac13-b7c7-441b-a977-4eac369e9b84",
        "abb77e3d-6d4b-41cc-8373-f3b2cfe1363a",
      ],
      categoryId: "vilicus",
      createdAt: new Date("2021-06-25T19:19:31.279Z"),
      description: "Cura dignissimos aut clibanus vulgaris patrocinor. Laborum acies curiositas antepono coniuratio. Correptius curiositas sono censura coma. Bestia suus tot cotidie terror subito coniecto beneficium.",
      dueAt: new Date("2025-08-12T11:59:38.200Z"),
      id: "d0845f87-cb32-4d49-88f9-aefc27a55287",
      priority: "LOW",
      source: "atavus",
      sourceRef: "29cae13e-4b0b-4f77-88ee-dec55ae51a23",
      status: "ACTIVE",
      subject: "Thymbra ratione minus arbitro tricesimus cetera validus.",
      tags: [
        "tamen",
        "vitae",
        "torrens",
      ],
      updatedAt: new Date("2023-06-08T07:55:09.477Z"),
      url: "https://yellowish-testimonial.biz",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ticketingCreateTicketingTicket failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTicketingTicketRequest](../../sdk/models/operations/createticketingticketrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TicketingTicket](../../sdk/models/shared/ticketingticket.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getTicketingTicket

Retrieve a ticket

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTicketingTicket" method="get" path="/ticketing/{connection_id}/ticket/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ticket.getTicketingTicket({
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
import { ticketingGetTicketingTicket } from "@unified-api/typescript-sdk/funcs/ticketingGetTicketingTicket.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ticketingGetTicketingTicket(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ticketingGetTicketingTicket failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTicketingTicketRequest](../../sdk/models/operations/getticketingticketrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TicketingTicket](../../sdk/models/shared/ticketingticket.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listTicketingTickets

List all tickets

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listTicketingTickets" method="get" path="/ticketing/{connection_id}/ticket" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ticket.listTicketingTickets({
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
import { ticketingListTicketingTickets } from "@unified-api/typescript-sdk/funcs/ticketingListTicketingTickets.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ticketingListTicketingTickets(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ticketingListTicketingTickets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTicketingTicketsRequest](../../sdk/models/operations/listticketingticketsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TicketingTicket[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchTicketingTicket

Update a ticket

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchTicketingTicket" method="patch" path="/ticketing/{connection_id}/ticket/{id}" example="ticketing_ticket" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ticket.patchTicketingTicket({
    ticketingTicket: {
      attachmentIds: [
        "d3915ccd-4090-41ce-b4ae-460a750f70f6",
        "00dc8df3-1513-45e5-acc9-46662126db61",
      ],
      categoryId: "vilicus",
      createdAt: new Date("2021-06-25T19:19:31.279Z"),
      description: "Cura dignissimos aut clibanus vulgaris patrocinor. Laborum acies curiositas antepono coniuratio. Correptius curiositas sono censura coma. Bestia suus tot cotidie terror subito coniecto beneficium.",
      dueAt: new Date("2025-08-12T11:59:38.213Z"),
      id: "8c8d0c1f-7e80-48ac-b72d-7e344fe03f32",
      priority: "LOW",
      source: "atavus",
      sourceRef: "502c8b73-3b23-43b3-92a1-a82dac14b701",
      status: "ACTIVE",
      subject: "Thymbra ratione minus arbitro tricesimus cetera validus.",
      tags: [
        "tamen",
        "vitae",
        "torrens",
      ],
      updatedAt: new Date("2023-06-08T07:55:09.483Z"),
      url: "https://yellowish-testimonial.biz",
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
import { ticketingPatchTicketingTicket } from "@unified-api/typescript-sdk/funcs/ticketingPatchTicketingTicket.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ticketingPatchTicketingTicket(unifiedTo, {
    ticketingTicket: {
      attachmentIds: [
        "d3915ccd-4090-41ce-b4ae-460a750f70f6",
        "00dc8df3-1513-45e5-acc9-46662126db61",
      ],
      categoryId: "vilicus",
      createdAt: new Date("2021-06-25T19:19:31.279Z"),
      description: "Cura dignissimos aut clibanus vulgaris patrocinor. Laborum acies curiositas antepono coniuratio. Correptius curiositas sono censura coma. Bestia suus tot cotidie terror subito coniecto beneficium.",
      dueAt: new Date("2025-08-12T11:59:38.213Z"),
      id: "8c8d0c1f-7e80-48ac-b72d-7e344fe03f32",
      priority: "LOW",
      source: "atavus",
      sourceRef: "502c8b73-3b23-43b3-92a1-a82dac14b701",
      status: "ACTIVE",
      subject: "Thymbra ratione minus arbitro tricesimus cetera validus.",
      tags: [
        "tamen",
        "vitae",
        "torrens",
      ],
      updatedAt: new Date("2023-06-08T07:55:09.483Z"),
      url: "https://yellowish-testimonial.biz",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ticketingPatchTicketingTicket failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchTicketingTicketRequest](../../sdk/models/operations/patchticketingticketrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TicketingTicket](../../sdk/models/shared/ticketingticket.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeTicketingTicket

Remove a ticket

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeTicketingTicket" method="delete" path="/ticketing/{connection_id}/ticket/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ticket.removeTicketingTicket({
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
import { ticketingRemoveTicketingTicket } from "@unified-api/typescript-sdk/funcs/ticketingRemoveTicketingTicket.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ticketingRemoveTicketingTicket(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ticketingRemoveTicketingTicket failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveTicketingTicketRequest](../../sdk/models/operations/removeticketingticketrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveTicketingTicketResponse](../../sdk/models/operations/removeticketingticketresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateTicketingTicket

Update a ticket

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateTicketingTicket" method="put" path="/ticketing/{connection_id}/ticket/{id}" example="ticketing_ticket" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ticket.updateTicketingTicket({
    ticketingTicket: {
      attachmentIds: [
        "d3915ccd-4090-41ce-b4ae-460a750f70f6",
        "00dc8df3-1513-45e5-acc9-46662126db61",
      ],
      categoryId: "vilicus",
      createdAt: new Date("2021-06-25T19:19:31.279Z"),
      description: "Cura dignissimos aut clibanus vulgaris patrocinor. Laborum acies curiositas antepono coniuratio. Correptius curiositas sono censura coma. Bestia suus tot cotidie terror subito coniecto beneficium.",
      dueAt: new Date("2025-08-12T11:59:38.213Z"),
      id: "8c8d0c1f-7e80-48ac-b72d-7e344fe03f32",
      priority: "LOW",
      source: "atavus",
      sourceRef: "502c8b73-3b23-43b3-92a1-a82dac14b701",
      status: "ACTIVE",
      subject: "Thymbra ratione minus arbitro tricesimus cetera validus.",
      tags: [
        "tamen",
        "vitae",
        "torrens",
      ],
      updatedAt: new Date("2023-06-08T07:55:09.483Z"),
      url: "https://yellowish-testimonial.biz",
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
import { ticketingUpdateTicketingTicket } from "@unified-api/typescript-sdk/funcs/ticketingUpdateTicketingTicket.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ticketingUpdateTicketingTicket(unifiedTo, {
    ticketingTicket: {
      attachmentIds: [
        "d3915ccd-4090-41ce-b4ae-460a750f70f6",
        "00dc8df3-1513-45e5-acc9-46662126db61",
      ],
      categoryId: "vilicus",
      createdAt: new Date("2021-06-25T19:19:31.279Z"),
      description: "Cura dignissimos aut clibanus vulgaris patrocinor. Laborum acies curiositas antepono coniuratio. Correptius curiositas sono censura coma. Bestia suus tot cotidie terror subito coniecto beneficium.",
      dueAt: new Date("2025-08-12T11:59:38.213Z"),
      id: "8c8d0c1f-7e80-48ac-b72d-7e344fe03f32",
      priority: "LOW",
      source: "atavus",
      sourceRef: "502c8b73-3b23-43b3-92a1-a82dac14b701",
      status: "ACTIVE",
      subject: "Thymbra ratione minus arbitro tricesimus cetera validus.",
      tags: [
        "tamen",
        "vitae",
        "torrens",
      ],
      updatedAt: new Date("2023-06-08T07:55:09.483Z"),
      url: "https://yellowish-testimonial.biz",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ticketingUpdateTicketingTicket failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateTicketingTicketRequest](../../sdk/models/operations/updateticketingticketrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TicketingTicket](../../sdk/models/shared/ticketingticket.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |