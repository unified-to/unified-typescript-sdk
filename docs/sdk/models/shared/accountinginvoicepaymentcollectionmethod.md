# AccountingInvoicePaymentCollectionMethod

When set to charging_automatically, an automated attempt will occur to pay this invoice using the default payment source attached to the contactcustomer. When set to send_invoice, an will email will be sent with this invoice to the contact/customer with payment instructions.

## Example Usage

```typescript
import { AccountingInvoicePaymentCollectionMethod } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingInvoicePaymentCollectionMethod = "charge_automatically";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"send_invoice" | "charge_automatically" | Unrecognized<string>
```