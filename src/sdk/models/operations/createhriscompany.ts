/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreateHrisCompanyRequest = {
    hrisCompany?: shared.HrisCompany | undefined;
    /**
     * ID of the connection
     */
    connectionId: string;
};

/** @internal */
export const CreateHrisCompanyRequest$inboundSchema: z.ZodType<
    CreateHrisCompanyRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HrisCompany: shared.HrisCompany$inboundSchema.optional(),
        connection_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            HrisCompany: "hrisCompany",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type CreateHrisCompanyRequest$Outbound = {
    HrisCompany?: shared.HrisCompany$Outbound | undefined;
    connection_id: string;
};

/** @internal */
export const CreateHrisCompanyRequest$outboundSchema: z.ZodType<
    CreateHrisCompanyRequest$Outbound,
    z.ZodTypeDef,
    CreateHrisCompanyRequest
> = z
    .object({
        hrisCompany: shared.HrisCompany$outboundSchema.optional(),
        connectionId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            hrisCompany: "HrisCompany",
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateHrisCompanyRequest$ {
    /** @deprecated use `CreateHrisCompanyRequest$inboundSchema` instead. */
    export const inboundSchema = CreateHrisCompanyRequest$inboundSchema;
    /** @deprecated use `CreateHrisCompanyRequest$outboundSchema` instead. */
    export const outboundSchema = CreateHrisCompanyRequest$outboundSchema;
    /** @deprecated use `CreateHrisCompanyRequest$Outbound` instead. */
    export type Outbound = CreateHrisCompanyRequest$Outbound;
}
