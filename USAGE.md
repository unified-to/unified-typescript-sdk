<!-- Start SDK Example Usage [usage] -->
```typescript
import { UnifiedTo } from "unified-to";
import { Status, TypeT } from "unified-to/dist/sdk/models/shared";

async function run() {
    const sdk = new UnifiedTo({
        security: {
            jwt: "",
        },
    });

    const res = await sdk.accounting.createAccountingAccount({
        accountingAccount: {
            name: "string",
            raw: {},
        },
        connectionId: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->