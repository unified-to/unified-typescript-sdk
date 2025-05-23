/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateGenaiPromptRequest = {
  genaiPrompt: shared.GenaiPrompt;
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
export const CreateGenaiPromptRequest$inboundSchema: z.ZodType<
  CreateGenaiPromptRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  GenaiPrompt: shared.GenaiPrompt$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "GenaiPrompt": "genaiPrompt",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateGenaiPromptRequest$Outbound = {
  GenaiPrompt: shared.GenaiPrompt$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  raw?: string | undefined;
};

/** @internal */
export const CreateGenaiPromptRequest$outboundSchema: z.ZodType<
  CreateGenaiPromptRequest$Outbound,
  z.ZodTypeDef,
  CreateGenaiPromptRequest
> = z.object({
  genaiPrompt: shared.GenaiPrompt$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    genaiPrompt: "GenaiPrompt",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateGenaiPromptRequest$ {
  /** @deprecated use `CreateGenaiPromptRequest$inboundSchema` instead. */
  export const inboundSchema = CreateGenaiPromptRequest$inboundSchema;
  /** @deprecated use `CreateGenaiPromptRequest$outboundSchema` instead. */
  export const outboundSchema = CreateGenaiPromptRequest$outboundSchema;
  /** @deprecated use `CreateGenaiPromptRequest$Outbound` instead. */
  export type Outbound = CreateGenaiPromptRequest$Outbound;
}

export function createGenaiPromptRequestToJSON(
  createGenaiPromptRequest: CreateGenaiPromptRequest,
): string {
  return JSON.stringify(
    CreateGenaiPromptRequest$outboundSchema.parse(createGenaiPromptRequest),
  );
}

export function createGenaiPromptRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateGenaiPromptRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateGenaiPromptRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateGenaiPromptRequest' from JSON`,
  );
}
