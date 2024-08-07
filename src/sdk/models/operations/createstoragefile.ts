/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreateStorageFileRequest = {
    storageFile?: shared.StorageFile | undefined;
    /**
     * ID of the connection
     */
    connectionId: string;
};

/** @internal */
export const CreateStorageFileRequest$inboundSchema: z.ZodType<
    CreateStorageFileRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        StorageFile: shared.StorageFile$inboundSchema.optional(),
        connection_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            StorageFile: "storageFile",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type CreateStorageFileRequest$Outbound = {
    StorageFile?: shared.StorageFile$Outbound | undefined;
    connection_id: string;
};

/** @internal */
export const CreateStorageFileRequest$outboundSchema: z.ZodType<
    CreateStorageFileRequest$Outbound,
    z.ZodTypeDef,
    CreateStorageFileRequest
> = z
    .object({
        storageFile: shared.StorageFile$outboundSchema.optional(),
        connectionId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            storageFile: "StorageFile",
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateStorageFileRequest$ {
    /** @deprecated use `CreateStorageFileRequest$inboundSchema` instead. */
    export const inboundSchema = CreateStorageFileRequest$inboundSchema;
    /** @deprecated use `CreateStorageFileRequest$outboundSchema` instead. */
    export const outboundSchema = CreateStorageFileRequest$outboundSchema;
    /** @deprecated use `CreateStorageFileRequest$Outbound` instead. */
    export type Outbound = CreateStorageFileRequest$Outbound;
}
