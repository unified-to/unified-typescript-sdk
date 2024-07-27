/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountingJournalLineitem } from "./accountingjournallineitem";
import { Expose, Type } from "class-transformer";

export class AccountingJournal extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * new field name
     */
    @SpeakeasyMetadata({ elemType: AccountingJournalLineitem })
    @Expose({ name: "lineitems" })
    @Type(() => AccountingJournalLineitem)
    lineitems?: AccountingJournalLineitem[];

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "tax_amount" })
    taxAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "taxrate_id" })
    taxrateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt?: string;
}
