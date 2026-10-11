# AccountingJournalLineitem

## Example Usage

```typescript
import { AccountingJournalLineitem } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingJournalLineitem = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `accountId`                                                    | *string*                                                       | :heavy_minus_sign:                                             | (reference to AccountingAccount)                               |
| `categoryIds`                                                  | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `contactId`                                                    | *string*                                                       | :heavy_minus_sign:                                             | (reference to AccountingContact)                               |
| `creditAmount`                                                 | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `debitAmount`                                                  | *number*                                                       | :heavy_minus_sign:                                             | will replace total_amount (absolute value)                     |
| `description`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `groupId`                                                      | *string*                                                       | :heavy_minus_sign:                                             | points to a HRIS Group (reference to HrisGroup)                |
| `id`                                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `invoiceId`                                                    | *string*                                                       | :heavy_minus_sign:                                             | (reference to AccountingInvoice)                               |
| `organizationId`                                               | *string*                                                       | :heavy_minus_sign:                                             | points to a AccountingOrganization                             |
| `paymentId`                                                    | *string*                                                       | :heavy_minus_sign:                                             | link to PaymentPayment (reference to PaymentPayment)           |
| `projectId`                                                    | *string*                                                       | :heavy_minus_sign:                                             | (reference to TaskProject)                                     |
| `taxAmount`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `taxrateId`                                                    | *string*                                                       | :heavy_minus_sign:                                             | ref -> AccountingTaxrate applied to the line                   |
| `totalAmount`                                                  | *number*                                                       | :heavy_minus_sign:                                             | will be a positive value for a debit and negative for a credit |