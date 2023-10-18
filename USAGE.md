<!-- Start SDK Example Usage -->


```typescript
import { UnifiedTo } from "unified-to";
import { TicketingEmailType, TicketingTelephoneType } from "unified-to/dist/sdk/models/shared";

(async () => {
    const sdk = new UnifiedTo({
        security: {
            jwt: "",
        },
    });

    const res = await sdk.agent.createTicketingAgent({
        ticketingAgent: {
            emails: [
                {
                    email: "Paolo.Cole8@yahoo.com",
                },
            ],
            raw: {},
            telephones: [
                {
                    telephone: "Seaborgium",
                },
            ],
        },
        connectionId: "Manager",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->