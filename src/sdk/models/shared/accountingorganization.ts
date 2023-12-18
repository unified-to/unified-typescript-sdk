/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyAccountingOrganizationAddress } from "./propertyaccountingorganizationaddress";
import { PropertyAccountingOrganizationRaw } from "./propertyaccountingorganizationraw";
import { Expose, Transform, Type } from "class-transformer";

export class AccountingOrganization extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => PropertyAccountingOrganizationAddress)
    address?: PropertyAccountingOrganizationAddress;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "fiscal_year_end_month" })
    fiscalYearEndMonth?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "legal_name" })
    legalName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    @Type(() => PropertyAccountingOrganizationRaw)
    raw?: PropertyAccountingOrganizationRaw;

    @SpeakeasyMetadata()
    @Expose({ name: "tax_number" })
    taxNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "timezone" })
    timezone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "website" })
    website?: string;
}