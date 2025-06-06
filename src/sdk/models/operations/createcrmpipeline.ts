/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateCrmPipelineRequest = {
  crmPipeline: shared.CrmPipeline;
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
export const CreateCrmPipelineRequest$inboundSchema: z.ZodType<
  CreateCrmPipelineRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CrmPipeline: shared.CrmPipeline$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "CrmPipeline": "crmPipeline",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateCrmPipelineRequest$Outbound = {
  CrmPipeline: shared.CrmPipeline$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  raw?: string | undefined;
};

/** @internal */
export const CreateCrmPipelineRequest$outboundSchema: z.ZodType<
  CreateCrmPipelineRequest$Outbound,
  z.ZodTypeDef,
  CreateCrmPipelineRequest
> = z.object({
  crmPipeline: shared.CrmPipeline$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    crmPipeline: "CrmPipeline",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCrmPipelineRequest$ {
  /** @deprecated use `CreateCrmPipelineRequest$inboundSchema` instead. */
  export const inboundSchema = CreateCrmPipelineRequest$inboundSchema;
  /** @deprecated use `CreateCrmPipelineRequest$outboundSchema` instead. */
  export const outboundSchema = CreateCrmPipelineRequest$outboundSchema;
  /** @deprecated use `CreateCrmPipelineRequest$Outbound` instead. */
  export type Outbound = CreateCrmPipelineRequest$Outbound;
}

export function createCrmPipelineRequestToJSON(
  createCrmPipelineRequest: CreateCrmPipelineRequest,
): string {
  return JSON.stringify(
    CreateCrmPipelineRequest$outboundSchema.parse(createCrmPipelineRequest),
  );
}

export function createCrmPipelineRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateCrmPipelineRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCrmPipelineRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCrmPipelineRequest' from JSON`,
  );
}
