/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreateKmsPageRequest = {
    kmsPage?: shared.KmsPage | undefined;
    /**
     * ID of the connection
     */
    connectionId: string;
};

/** @internal */
export const CreateKmsPageRequest$inboundSchema: z.ZodType<
    CreateKmsPageRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        KmsPage: shared.KmsPage$inboundSchema.optional(),
        connection_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            KmsPage: "kmsPage",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type CreateKmsPageRequest$Outbound = {
    KmsPage?: shared.KmsPage$Outbound | undefined;
    connection_id: string;
};

/** @internal */
export const CreateKmsPageRequest$outboundSchema: z.ZodType<
    CreateKmsPageRequest$Outbound,
    z.ZodTypeDef,
    CreateKmsPageRequest
> = z
    .object({
        kmsPage: shared.KmsPage$outboundSchema.optional(),
        connectionId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            kmsPage: "KmsPage",
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateKmsPageRequest$ {
    /** @deprecated use `CreateKmsPageRequest$inboundSchema` instead. */
    export const inboundSchema = CreateKmsPageRequest$inboundSchema;
    /** @deprecated use `CreateKmsPageRequest$outboundSchema` instead. */
    export const outboundSchema = CreateKmsPageRequest$outboundSchema;
    /** @deprecated use `CreateKmsPageRequest$Outbound` instead. */
    export type Outbound = CreateKmsPageRequest$Outbound;
}
