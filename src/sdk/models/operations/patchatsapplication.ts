/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type PatchAtsApplicationRequest = {
    atsApplication?: shared.AtsApplication | undefined;
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * ID of the Application
     */
    id: string;
};

/** @internal */
export const PatchAtsApplicationRequest$inboundSchema: z.ZodType<
    PatchAtsApplicationRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        AtsApplication: shared.AtsApplication$inboundSchema.optional(),
        connection_id: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            AtsApplication: "atsApplication",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type PatchAtsApplicationRequest$Outbound = {
    AtsApplication?: shared.AtsApplication$Outbound | undefined;
    connection_id: string;
    id: string;
};

/** @internal */
export const PatchAtsApplicationRequest$outboundSchema: z.ZodType<
    PatchAtsApplicationRequest$Outbound,
    z.ZodTypeDef,
    PatchAtsApplicationRequest
> = z
    .object({
        atsApplication: shared.AtsApplication$outboundSchema.optional(),
        connectionId: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            atsApplication: "AtsApplication",
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAtsApplicationRequest$ {
    /** @deprecated use `PatchAtsApplicationRequest$inboundSchema` instead. */
    export const inboundSchema = PatchAtsApplicationRequest$inboundSchema;
    /** @deprecated use `PatchAtsApplicationRequest$outboundSchema` instead. */
    export const outboundSchema = PatchAtsApplicationRequest$outboundSchema;
    /** @deprecated use `PatchAtsApplicationRequest$Outbound` instead. */
    export type Outbound = PatchAtsApplicationRequest$Outbound;
}
