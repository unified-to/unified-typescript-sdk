/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type RemoveMartechMemberRequest = {
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * ID of the Member
     */
    id: string;
};

/** @internal */
export const RemoveMartechMemberRequest$inboundSchema: z.ZodType<
    RemoveMartechMemberRequest,
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
export type RemoveMartechMemberRequest$Outbound = {
    connection_id: string;
    id: string;
};

/** @internal */
export const RemoveMartechMemberRequest$outboundSchema: z.ZodType<
    RemoveMartechMemberRequest$Outbound,
    z.ZodTypeDef,
    RemoveMartechMemberRequest
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
export namespace RemoveMartechMemberRequest$ {
    /** @deprecated use `RemoveMartechMemberRequest$inboundSchema` instead. */
    export const inboundSchema = RemoveMartechMemberRequest$inboundSchema;
    /** @deprecated use `RemoveMartechMemberRequest$outboundSchema` instead. */
    export const outboundSchema = RemoveMartechMemberRequest$outboundSchema;
    /** @deprecated use `RemoveMartechMemberRequest$Outbound` instead. */
    export type Outbound = RemoveMartechMemberRequest$Outbound;
}
