/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateKmsPageRequest = {
  kmsPage: shared.KmsPage;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Page
   */
  id: string;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const UpdateKmsPageRequest$inboundSchema: z.ZodType<
  UpdateKmsPageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  KmsPage: shared.KmsPage$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "KmsPage": "kmsPage",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateKmsPageRequest$Outbound = {
  KmsPage: shared.KmsPage$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
  raw?: string | undefined;
};

/** @internal */
export const UpdateKmsPageRequest$outboundSchema: z.ZodType<
  UpdateKmsPageRequest$Outbound,
  z.ZodTypeDef,
  UpdateKmsPageRequest
> = z.object({
  kmsPage: shared.KmsPage$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    kmsPage: "KmsPage",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateKmsPageRequest$ {
  /** @deprecated use `UpdateKmsPageRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateKmsPageRequest$inboundSchema;
  /** @deprecated use `UpdateKmsPageRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateKmsPageRequest$outboundSchema;
  /** @deprecated use `UpdateKmsPageRequest$Outbound` instead. */
  export type Outbound = UpdateKmsPageRequest$Outbound;
}

export function updateKmsPageRequestToJSON(
  updateKmsPageRequest: UpdateKmsPageRequest,
): string {
  return JSON.stringify(
    UpdateKmsPageRequest$outboundSchema.parse(updateKmsPageRequest),
  );
}

export function updateKmsPageRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateKmsPageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateKmsPageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateKmsPageRequest' from JSON`,
  );
}
