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
      id: "10d91247-ded1-4d1d-9568-80e29a471e72",
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
      updatedAt: new Date("2023-08-08T20:25:09.921Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->