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
  connectionId: "corrupti",
  id: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
}).then((res: DeleteTicketingConnectionIdAgentIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->