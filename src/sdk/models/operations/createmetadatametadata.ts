/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateMetadataMetadataRequest = {
  metadataMetadata: shared.MetadataMetadata;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const CreateMetadataMetadataRequest$inboundSchema: z.ZodType<
  CreateMetadataMetadataRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  MetadataMetadata: shared.MetadataMetadata$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "MetadataMetadata": "metadataMetadata",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateMetadataMetadataRequest$Outbound = {
  MetadataMetadata: shared.MetadataMetadata$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  raw?: string | undefined;
};

/** @internal */
export const CreateMetadataMetadataRequest$outboundSchema: z.ZodType<
  CreateMetadataMetadataRequest$Outbound,
  z.ZodTypeDef,
  CreateMetadataMetadataRequest
> = z.object({
  metadataMetadata: shared.MetadataMetadata$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    metadataMetadata: "MetadataMetadata",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMetadataMetadataRequest$ {
  /** @deprecated use `CreateMetadataMetadataRequest$inboundSchema` instead. */
  export const inboundSchema = CreateMetadataMetadataRequest$inboundSchema;
  /** @deprecated use `CreateMetadataMetadataRequest$outboundSchema` instead. */
  export const outboundSchema = CreateMetadataMetadataRequest$outboundSchema;
  /** @deprecated use `CreateMetadataMetadataRequest$Outbound` instead. */
  export type Outbound = CreateMetadataMetadataRequest$Outbound;
}

export function createMetadataMetadataRequestToJSON(
  createMetadataMetadataRequest: CreateMetadataMetadataRequest,
): string {
  return JSON.stringify(
    CreateMetadataMetadataRequest$outboundSchema.parse(
      createMetadataMetadataRequest,
    ),
  );
}

export function createMetadataMetadataRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateMetadataMetadataRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMetadataMetadataRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMetadataMetadataRequest' from JSON`,
  );
}
