# AtsFee

## Example Usage

```typescript
import { AtsFee } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AtsFee = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `amount`                                                        | *number*                                                        | :heavy_minus_sign:                                              | Flat fee amount, in `currency`                                  |
| `currency`                                                      | *string*                                                        | :heavy_minus_sign:                                              | ISO 4217 currency code of `amount`                              |
| `percentage`                                                    | *number*                                                        | :heavy_minus_sign:                                              | Fee as a percentage of the candidate's salary (e.g. 20 for 20%) |
| `type`                                                          | [shared.AtsFeeType](../../../sdk/models/shared/atsfeetype.md)   | :heavy_minus_sign:                                              | The fee arrangement (e.g. contingency or retained search)       |