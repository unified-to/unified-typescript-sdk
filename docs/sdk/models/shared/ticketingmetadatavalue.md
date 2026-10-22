# TicketingMetadataValue

The field's value, typed by `format`: DATE as ISO-8601 (`YYYY-MM-DD`, or `YYYY-MM-DDTHH:MM:SSZ` for date-times); NUMBER, PRICE and CURRENCY as a number; BOOLEAN and YES_NO as true/false; MULTIPLE_SELECT as an array of option values; otherwise a string.


## Supported Types

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "key": "<value>",
  "key1": "<value>",
  "key2": "<value>",
};
```

### `string`

```typescript
const value: string = "<value>";
```

### `number`

```typescript
const value: number = 1284.03;
```

### `boolean`

```typescript
const value: boolean = true;
```

### `shared.TicketingMetadataSchemas5[]`

```typescript
const value: shared.TicketingMetadataSchemas5[] = [
  true,
];
```

