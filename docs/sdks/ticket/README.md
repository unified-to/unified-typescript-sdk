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
        "da3cafb1-c542-4cc6-ad51-47121e343c42",
        "4a56a105-ae8d-455e-9a33-a0553a9430d5",
      ],
      categoryId: "vilicus",
      createdAt: new Date("2021-06-25T19:19:31.279Z"),
      description: "Cura dignissimos aut clibanus vulgaris patrocinor. Laborum acies curiositas antepono coniuratio. Correptius curiositas sono censura coma. Bestia suus tot cotidie terror subito coniecto beneficium.",
      dueAt: new Date("2025-08-08T08:26:35.006Z"),
      id: "358b593f-b0c7-4a45-829d-3d2683396328",
      priority: "LOW",
      source: "atavus",
      sourceRef: "1f2e701b-d366-4707-a86d-51b904ee2fa4",
      status: "ACTIVE",
      subject: "Thymbra ratione minus arbitro tricesimus cetera validus.",
      tags: [
        "tamen",
        "vitae",
        "torrens",
      ],
      updatedAt: new Date("2023-06-06T08:54:12.618Z"),
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
        "da3cafb1-c542-4cc6-ad51-47121e343c42",
        "4a56a105-ae8d-455e-9a33-a0553a9430d5",
      ],
      categoryId: "vilicus",
      createdAt: new Date("2021-06-25T19:19:31.279Z"),
      description: "Cura dignissimos aut clibanus vulgaris patrocinor. Laborum acies curiositas antepono coniuratio. Correptius curiositas sono censura coma. Bestia suus tot cotidie terror subito coniecto beneficium.",
      dueAt: new Date("2025-08-08T08:26:35.006Z"),
      id: "358b593f-b0c7-4a45-829d-3d2683396328",
      priority: "LOW",
      source: "atavus",
      sourceRef: "1f2e701b-d366-4707-a86d-51b904ee2fa4",
      status: "ACTIVE",
      subject: "Thymbra ratione minus arbitro tricesimus cetera validus.",
      tags: [
        "tamen",
        "vitae",
        "torrens",
      ],
      updatedAt: new Date("2023-06-06T08:54:12.618Z"),
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
        "7469f9ae-a4f9-4ab7-bc61-17bb8317faff",
        "f18bbe6d-b03e-41de-a35b-51810709a3ae",
      ],
      categoryId: "vilicus",
      createdAt: new Date("2021-06-25T19:19:31.279Z"),
      description: "Cura dignissimos aut clibanus vulgaris patrocinor. Laborum acies curiositas antepono coniuratio. Correptius curiositas sono censura coma. Bestia suus tot cotidie terror subito coniecto beneficium.",
      dueAt: new Date("2025-08-08T08:26:35.016Z"),
      id: "3be4e047-ebf1-4f06-b139-c18428536397",
      priority: "LOW",
      source: "atavus",
      sourceRef: "ff7539bc-93f5-4d46-b17e-ea2ab59f145a",
      status: "ACTIVE",
      subject: "Thymbra ratione minus arbitro tricesimus cetera validus.",
      tags: [
        "tamen",
        "vitae",
        "torrens",
      ],
      updatedAt: new Date("2023-06-06T08:54:12.623Z"),
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
        "7469f9ae-a4f9-4ab7-bc61-17bb8317faff",
        "f18bbe6d-b03e-41de-a35b-51810709a3ae",
      ],
      categoryId: "vilicus",
      createdAt: new Date("2021-06-25T19:19:31.279Z"),
      description: "Cura dignissimos aut clibanus vulgaris patrocinor. Laborum acies curiositas antepono coniuratio. Correptius curiositas sono censura coma. Bestia suus tot cotidie terror subito coniecto beneficium.",
      dueAt: new Date("2025-08-08T08:26:35.016Z"),
      id: "3be4e047-ebf1-4f06-b139-c18428536397",
      priority: "LOW",
      source: "atavus",
      sourceRef: "ff7539bc-93f5-4d46-b17e-ea2ab59f145a",
      status: "ACTIVE",
      subject: "Thymbra ratione minus arbitro tricesimus cetera validus.",
      tags: [
        "tamen",
        "vitae",
        "torrens",
      ],
      updatedAt: new Date("2023-06-06T08:54:12.623Z"),
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
        "7469f9ae-a4f9-4ab7-bc61-17bb8317faff",
        "f18bbe6d-b03e-41de-a35b-51810709a3ae",
      ],
      categoryId: "vilicus",
      createdAt: new Date("2021-06-25T19:19:31.279Z"),
      description: "Cura dignissimos aut clibanus vulgaris patrocinor. Laborum acies curiositas antepono coniuratio. Correptius curiositas sono censura coma. Bestia suus tot cotidie terror subito coniecto beneficium.",
      dueAt: new Date("2025-08-08T08:26:35.016Z"),
      id: "3be4e047-ebf1-4f06-b139-c18428536397",
      priority: "LOW",
      source: "atavus",
      sourceRef: "ff7539bc-93f5-4d46-b17e-ea2ab59f145a",
      status: "ACTIVE",
      subject: "Thymbra ratione minus arbitro tricesimus cetera validus.",
      tags: [
        "tamen",
        "vitae",
        "torrens",
      ],
      updatedAt: new Date("2023-06-06T08:54:12.623Z"),
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
        "7469f9ae-a4f9-4ab7-bc61-17bb8317faff",
        "f18bbe6d-b03e-41de-a35b-51810709a3ae",
      ],
      categoryId: "vilicus",
      createdAt: new Date("2021-06-25T19:19:31.279Z"),
      description: "Cura dignissimos aut clibanus vulgaris patrocinor. Laborum acies curiositas antepono coniuratio. Correptius curiositas sono censura coma. Bestia suus tot cotidie terror subito coniecto beneficium.",
      dueAt: new Date("2025-08-08T08:26:35.016Z"),
      id: "3be4e047-ebf1-4f06-b139-c18428536397",
      priority: "LOW",
      source: "atavus",
      sourceRef: "ff7539bc-93f5-4d46-b17e-ea2ab59f145a",
      status: "ACTIVE",
      subject: "Thymbra ratione minus arbitro tricesimus cetera validus.",
      tags: [
        "tamen",
        "vitae",
        "torrens",
      ],
      updatedAt: new Date("2023-06-06T08:54:12.623Z"),
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