/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreateHrisLocationRequest = {
    hrisLocation?: shared.HrisLocation | undefined;
    /**
     * ID of the connection
     */
    connectionId: string;
};

/** @internal */
export const CreateHrisLocationRequest$inboundSchema: z.ZodType<
    CreateHrisLocationRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HrisLocation: shared.HrisLocation$inboundSchema.optional(),
        connection_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            HrisLocation: "hrisLocation",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type CreateHrisLocationRequest$Outbound = {
    HrisLocation?: shared.HrisLocation$Outbound | undefined;
    connection_id: string;
};

/** @internal */
export const CreateHrisLocationRequest$outboundSchema: z.ZodType<
    CreateHrisLocationRequest$Outbound,
    z.ZodTypeDef,
    CreateHrisLocationRequest
> = z
    .object({
        hrisLocation: shared.HrisLocation$outboundSchema.optional(),
        connectionId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            hrisLocation: "HrisLocation",
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateHrisLocationRequest$ {
    /** @deprecated use `CreateHrisLocationRequest$inboundSchema` instead. */
    export const inboundSchema = CreateHrisLocationRequest$inboundSchema;
    /** @deprecated use `CreateHrisLocationRequest$outboundSchema` instead. */
    export const outboundSchema = CreateHrisLocationRequest$outboundSchema;
    /** @deprecated use `CreateHrisLocationRequest$Outbound` instead. */
    export type Outbound = CreateHrisLocationRequest$Outbound;
}
