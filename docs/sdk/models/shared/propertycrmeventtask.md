# PropertyCrmEventTask

The task object, when type = task

## Example Usage

```typescript
import { PropertyCrmEventTask } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyCrmEventTask = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The event task's descriptionnote                                                              |
| `dueAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The event task's nametitle/subject                                                            |
| `priority`                                                                                    | [shared.Priority](../../../sdk/models/shared/priority.md)                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.PropertyCrmEventTaskStatus](../../../sdk/models/shared/propertycrmeventtaskstatus.md) | :heavy_minus_sign:                                                                            | The event task's status                                                                       |