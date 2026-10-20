# TaskChange

## Example Usage

```typescript
import { TaskChange } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: TaskChange = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [shared.TaskChangeItem](../../../sdk/models/shared/taskchangeitem.md)[]                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | [shared.TaskMetadata](../../../sdk/models/shared/taskmetadata.md)[]                           | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `raw`                                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `taskId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | (reference to TaskTask)                                                                       |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | (reference to HrisEmployee)                                                                   |