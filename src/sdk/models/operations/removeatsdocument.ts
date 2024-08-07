/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type RemoveAtsDocumentRequest = {
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * ID of the Document
     */
    id: string;
};

/** @internal */
export const RemoveAtsDocumentRequest$inboundSchema: z.ZodType<
    RemoveAtsDocumentRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        connection_id: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            connection_id: "connectionId",
        });
    });

/** @internal */
export type RemoveAtsDocumentRequest$Outbound = {
    connection_id: string;
    id: string;
};

/** @internal */
export const RemoveAtsDocumentRequest$outboundSchema: z.ZodType<
    RemoveAtsDocumentRequest$Outbound,
    z.ZodTypeDef,
    RemoveAtsDocumentRequest
> = z
    .object({
        connectionId: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoveAtsDocumentRequest$ {
    /** @deprecated use `RemoveAtsDocumentRequest$inboundSchema` instead. */
    export const inboundSchema = RemoveAtsDocumentRequest$inboundSchema;
    /** @deprecated use `RemoveAtsDocumentRequest$outboundSchema` instead. */
    export const outboundSchema = RemoveAtsDocumentRequest$outboundSchema;
    /** @deprecated use `RemoveAtsDocumentRequest$Outbound` instead. */
    export type Outbound = RemoveAtsDocumentRequest$Outbound;
}
