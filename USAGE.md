<!-- Start SDK Example Usage [usage] -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.accounting.createAccountingAccount2({
    accountingAccount: {},
    connectionId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->