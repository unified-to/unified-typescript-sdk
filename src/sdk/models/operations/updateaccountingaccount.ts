/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type UpdateAccountingAccountRequest = {
    /**
     * Chart of accounts
     */
    accountingAccount?: shared.AccountingAccount | undefined;
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * ID of the Account
     */
    id: string;
};

/** @internal */
export const UpdateAccountingAccountRequest$inboundSchema: z.ZodType<
    UpdateAccountingAccountRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        AccountingAccount: shared.AccountingAccount$inboundSchema.optional(),
        connection_id: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            AccountingAccount: "accountingAccount",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type UpdateAccountingAccountRequest$Outbound = {
    AccountingAccount?: shared.AccountingAccount$Outbound | undefined;
    connection_id: string;
    id: string;
};

/** @internal */
export const UpdateAccountingAccountRequest$outboundSchema: z.ZodType<
    UpdateAccountingAccountRequest$Outbound,
    z.ZodTypeDef,
    UpdateAccountingAccountRequest
> = z
    .object({
        accountingAccount: shared.AccountingAccount$outboundSchema.optional(),
        connectionId: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            accountingAccount: "AccountingAccount",
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAccountingAccountRequest$ {
    /** @deprecated use `UpdateAccountingAccountRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateAccountingAccountRequest$inboundSchema;
    /** @deprecated use `UpdateAccountingAccountRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateAccountingAccountRequest$outboundSchema;
    /** @deprecated use `UpdateAccountingAccountRequest$Outbound` instead. */
    export type Outbound = UpdateAccountingAccountRequest$Outbound;
}
