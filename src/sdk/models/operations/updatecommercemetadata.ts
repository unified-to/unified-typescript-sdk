/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateCommerceMetadataRequest = {
  commerceMetadata?: shared.CommerceMetadata | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Metadata
   */
  id: string;
};

/** @internal */
export const UpdateCommerceMetadataRequest$inboundSchema: z.ZodType<
  UpdateCommerceMetadataRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CommerceMetadata: shared.CommerceMetadata$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "CommerceMetadata": "commerceMetadata",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateCommerceMetadataRequest$Outbound = {
  CommerceMetadata?: shared.CommerceMetadata$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateCommerceMetadataRequest$outboundSchema: z.ZodType<
  UpdateCommerceMetadataRequest$Outbound,
  z.ZodTypeDef,
  UpdateCommerceMetadataRequest
> = z.object({
  commerceMetadata: shared.CommerceMetadata$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    commerceMetadata: "CommerceMetadata",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateCommerceMetadataRequest$ {
  /** @deprecated use `UpdateCommerceMetadataRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateCommerceMetadataRequest$inboundSchema;
  /** @deprecated use `UpdateCommerceMetadataRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateCommerceMetadataRequest$outboundSchema;
  /** @deprecated use `UpdateCommerceMetadataRequest$Outbound` instead. */
  export type Outbound = UpdateCommerceMetadataRequest$Outbound;
}

export function updateCommerceMetadataRequestToJSON(
  updateCommerceMetadataRequest: UpdateCommerceMetadataRequest,
): string {
  return JSON.stringify(
    UpdateCommerceMetadataRequest$outboundSchema.parse(
      updateCommerceMetadataRequest,
    ),
  );
}

export function updateCommerceMetadataRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateCommerceMetadataRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateCommerceMetadataRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateCommerceMetadataRequest' from JSON`,
  );
}