/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type RemoveHrisGroupRequest = {
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * ID of the Group
     */
    id: string;
};

/** @internal */
export const RemoveHrisGroupRequest$inboundSchema: z.ZodType<
    RemoveHrisGroupRequest,
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
export type RemoveHrisGroupRequest$Outbound = {
    connection_id: string;
    id: string;
};

/** @internal */
export const RemoveHrisGroupRequest$outboundSchema: z.ZodType<
    RemoveHrisGroupRequest$Outbound,
    z.ZodTypeDef,
    RemoveHrisGroupRequest
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
export namespace RemoveHrisGroupRequest$ {
    /** @deprecated use `RemoveHrisGroupRequest$inboundSchema` instead. */
    export const inboundSchema = RemoveHrisGroupRequest$inboundSchema;
    /** @deprecated use `RemoveHrisGroupRequest$outboundSchema` instead. */
    export const outboundSchema = RemoveHrisGroupRequest$outboundSchema;
    /** @deprecated use `RemoveHrisGroupRequest$Outbound` instead. */
    export type Outbound = RemoveHrisGroupRequest$Outbound;
}
