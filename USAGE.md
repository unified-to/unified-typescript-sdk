<!-- Start SDK Example Usage -->


```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.agent.deleteTicketingConnectionIdAgentId({
    connectionId: "navigate",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->