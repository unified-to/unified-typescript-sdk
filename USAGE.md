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
      id: "5344fa39-7fa0-422f-985f-fe609b0f7e60",
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
      updatedAt: new Date("2023-08-16T07:23:45.673Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->