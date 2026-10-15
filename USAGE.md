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
      id: "492e62ef-68be-4797-87aa-20929c42bef4",
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
      updatedAt: new Date("2023-01-06T07:59:53.204Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->