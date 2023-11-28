<!-- Start SDK Example Usage [usage] -->
```typescript
import { UnifiedTo } from "unified-to";
import { AccountingTelephoneType, TaxExemption, TypeT } from "unified-to/dist/sdk/models/shared";

(async () => {
    const sdk = new UnifiedTo({
        security: {
            jwt: "",
        },
    });

    const res = await sdk.accounting.createAccountingCustomer({
        accountingCustomer: {
            billingAddress: {},
            emails: [
                {
                    email: "Kevon_Schultz42@gmail.com",
                },
            ],
            raw: {},
            shippingAddress: {},
            telephones: [
                {
                    telephone: "string",
                },
            ],
        },
        connectionId: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage [usage] -->