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
      id: "f1188d28-f079-4c8f-ae9b-6589c39f534a",
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
      updatedAt: new Date("2023-08-16T13:36:02.035Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->