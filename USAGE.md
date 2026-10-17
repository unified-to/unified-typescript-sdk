<!-- Start SDK Example Usage [usage] -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.accounting.createAccountingAccount({
    accountingAccount: {
      balance: 12092,
      createdAt: new Date("2022-07-03T17:57:07.391Z"),
      currency: "BOB",
      customerDefinedCode: "quo",
      description: "Spoliatio comedo vilitas harum cupiditate.",
      id: "e9d88130-eab7-41b2-9c48-0e0bef2b636e",
      isPayable: true,
      name: "Electronic Aluminum Tuna",
      status: "ARCHIVED",
      taxonomy: [
        {
          originalType: "vesper",
          type: "SUBGROUP",
          value: "iste",
        },
        {
          originalType: "adamo",
          type: "SUBGROUP",
          value: "peccatus",
        },
      ],
      type: "BANK",
      updatedAt: new Date("2023-01-06T14:16:00.355Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->