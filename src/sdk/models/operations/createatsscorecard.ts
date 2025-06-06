/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateAtsScorecardRequest = {
  atsScorecard: shared.AtsScorecard;
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
export const CreateAtsScorecardRequest$inboundSchema: z.ZodType<
  CreateAtsScorecardRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsScorecard: shared.AtsScorecard$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "AtsScorecard": "atsScorecard",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateAtsScorecardRequest$Outbound = {
  AtsScorecard: shared.AtsScorecard$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  raw?: string | undefined;
};

/** @internal */
export const CreateAtsScorecardRequest$outboundSchema: z.ZodType<
  CreateAtsScorecardRequest$Outbound,
  z.ZodTypeDef,
  CreateAtsScorecardRequest
> = z.object({
  atsScorecard: shared.AtsScorecard$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    atsScorecard: "AtsScorecard",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAtsScorecardRequest$ {
  /** @deprecated use `CreateAtsScorecardRequest$inboundSchema` instead. */
  export const inboundSchema = CreateAtsScorecardRequest$inboundSchema;
  /** @deprecated use `CreateAtsScorecardRequest$outboundSchema` instead. */
  export const outboundSchema = CreateAtsScorecardRequest$outboundSchema;
  /** @deprecated use `CreateAtsScorecardRequest$Outbound` instead. */
  export type Outbound = CreateAtsScorecardRequest$Outbound;
}

export function createAtsScorecardRequestToJSON(
  createAtsScorecardRequest: CreateAtsScorecardRequest,
): string {
  return JSON.stringify(
    CreateAtsScorecardRequest$outboundSchema.parse(createAtsScorecardRequest),
  );
}

export function createAtsScorecardRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateAtsScorecardRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateAtsScorecardRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAtsScorecardRequest' from JSON`,
  );
}
