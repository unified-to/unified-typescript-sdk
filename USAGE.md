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
      description: "Voluptatibus valde spoliatio.",
      id: "83f2ae40-24a8-404a-bae5-53dd1b96b4cf",
      isPayable: false,
      metadata: [],
      name: "Auto Loan Account",
      status: "ARCHIVED",
      taxonomy: [
        {
          originalType: "vilitas",
          type: "SUBGROUP",
          value: "comedo",
        },
      ],
      type: "ACCOUNTS_RECEIVABLE",
      updatedAt: new Date("2023-08-07T09:59:44.611Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->