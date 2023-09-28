<!-- Start SDK Example Usage -->


```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteTicketingConnectionIdAgentIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.agent.deleteTicketingConnectionIdAgentId({
  connectionId: "navigate",
  id: "<ID>",
}).then((res: DeleteTicketingConnectionIdAgentIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->