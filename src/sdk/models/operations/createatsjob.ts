/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreateAtsJobRequest = {
    atsJob?: shared.AtsJob | undefined;
    /**
     * ID of the connection
     */
    connectionId: string;
};

/** @internal */
export const CreateAtsJobRequest$inboundSchema: z.ZodType<
    CreateAtsJobRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        AtsJob: shared.AtsJob$inboundSchema.optional(),
        connection_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            AtsJob: "atsJob",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type CreateAtsJobRequest$Outbound = {
    AtsJob?: shared.AtsJob$Outbound | undefined;
    connection_id: string;
};

/** @internal */
export const CreateAtsJobRequest$outboundSchema: z.ZodType<
    CreateAtsJobRequest$Outbound,
    z.ZodTypeDef,
    CreateAtsJobRequest
> = z
    .object({
        atsJob: shared.AtsJob$outboundSchema.optional(),
        connectionId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            atsJob: "AtsJob",
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAtsJobRequest$ {
    /** @deprecated use `CreateAtsJobRequest$inboundSchema` instead. */
    export const inboundSchema = CreateAtsJobRequest$inboundSchema;
    /** @deprecated use `CreateAtsJobRequest$outboundSchema` instead. */
    export const outboundSchema = CreateAtsJobRequest$outboundSchema;
    /** @deprecated use `CreateAtsJobRequest$Outbound` instead. */
    export type Outbound = CreateAtsJobRequest$Outbound;
}
