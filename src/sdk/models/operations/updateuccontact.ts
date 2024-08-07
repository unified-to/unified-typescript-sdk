/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type UpdateUcContactRequest = {
    /**
     * A contact represents a person that optionally is associated with a call
     */
    ucContact?: shared.UcContact | undefined;
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
export const UpdateUcContactRequest$inboundSchema: z.ZodType<
    UpdateUcContactRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        UcContact: shared.UcContact$inboundSchema.optional(),
        connection_id: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            UcContact: "ucContact",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type UpdateUcContactRequest$Outbound = {
    UcContact?: shared.UcContact$Outbound | undefined;
    connection_id: string;
    id: string;
};

/** @internal */
export const UpdateUcContactRequest$outboundSchema: z.ZodType<
    UpdateUcContactRequest$Outbound,
    z.ZodTypeDef,
    UpdateUcContactRequest
> = z
    .object({
        ucContact: shared.UcContact$outboundSchema.optional(),
        connectionId: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            ucContact: "UcContact",
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateUcContactRequest$ {
    /** @deprecated use `UpdateUcContactRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateUcContactRequest$inboundSchema;
    /** @deprecated use `UpdateUcContactRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateUcContactRequest$outboundSchema;
    /** @deprecated use `UpdateUcContactRequest$Outbound` instead. */
    export type Outbound = UpdateUcContactRequest$Outbound;
}
