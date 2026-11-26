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
      currency: "CAD",
      customerDefinedCode: "6170",
      description: "Comedo vilitas harum cupiditate animus quo iste.",
      id: "0f32f5c7-6b71-4bd7-9314-3d6200b660bc",
      isPayable: false,
      metadata: [],
      name: "Savings Account",
      status: "ARCHIVED",
      taxonomy: [
        {
          originalType: "peccatus",
          type: "SUBGROUP",
          value: "vesper",
        },
      ],
      type: "ACCOUNTS_RECEIVABLE",
      updatedAt: new Date("2023-08-16T01:24:25.576Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->