/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type PatchMartechMemberRequest = {
    /**
     * A member represents a person
     */
    marketingMember?: shared.MarketingMember | undefined;
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
export const PatchMartechMemberRequest$inboundSchema: z.ZodType<
    PatchMartechMemberRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        MarketingMember: shared.MarketingMember$inboundSchema.optional(),
        connection_id: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            MarketingMember: "marketingMember",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type PatchMartechMemberRequest$Outbound = {
    MarketingMember?: shared.MarketingMember$Outbound | undefined;
    connection_id: string;
    id: string;
};

/** @internal */
export const PatchMartechMemberRequest$outboundSchema: z.ZodType<
    PatchMartechMemberRequest$Outbound,
    z.ZodTypeDef,
    PatchMartechMemberRequest
> = z
    .object({
        marketingMember: shared.MarketingMember$outboundSchema.optional(),
        connectionId: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            marketingMember: "MarketingMember",
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchMartechMemberRequest$ {
    /** @deprecated use `PatchMartechMemberRequest$inboundSchema` instead. */
    export const inboundSchema = PatchMartechMemberRequest$inboundSchema;
    /** @deprecated use `PatchMartechMemberRequest$outboundSchema` instead. */
    export const outboundSchema = PatchMartechMemberRequest$outboundSchema;
    /** @deprecated use `PatchMartechMemberRequest$Outbound` instead. */
    export type Outbound = PatchMartechMemberRequest$Outbound;
}
