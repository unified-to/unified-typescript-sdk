<!-- Start SDK Example Usage [usage] -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { Status, TypeT } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
    const sdk = new UnifiedTo({
        security: {
            jwt: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accounting.createAccountingAccount({
        accountingAccount: {
            name: "<value>",
            raw: {
                key: "<value>",
            },
        },
        connectionId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->