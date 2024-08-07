/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type PatchCrmContactRequest = {
    /**
     * A contact represents a person that optionally is associated with a deal and/or a company
     */
    crmContact?: shared.CrmContact | undefined;
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * ID of the Contact
     */
    id: string;
};

/** @internal */
export const PatchCrmContactRequest$inboundSchema: z.ZodType<
    PatchCrmContactRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        CrmContact: shared.CrmContact$inboundSchema.optional(),
        connection_id: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            CrmContact: "crmContact",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type PatchCrmContactRequest$Outbound = {
    CrmContact?: shared.CrmContact$Outbound | undefined;
    connection_id: string;
    id: string;
};

/** @internal */
export const PatchCrmContactRequest$outboundSchema: z.ZodType<
    PatchCrmContactRequest$Outbound,
    z.ZodTypeDef,
    PatchCrmContactRequest
> = z
    .object({
        crmContact: shared.CrmContact$outboundSchema.optional(),
        connectionId: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            crmContact: "CrmContact",
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchCrmContactRequest$ {
    /** @deprecated use `PatchCrmContactRequest$inboundSchema` instead. */
    export const inboundSchema = PatchCrmContactRequest$inboundSchema;
    /** @deprecated use `PatchCrmContactRequest$outboundSchema` instead. */
    export const outboundSchema = PatchCrmContactRequest$outboundSchema;
    /** @deprecated use `PatchCrmContactRequest$Outbound` instead. */
    export type Outbound = PatchCrmContactRequest$Outbound;
}
