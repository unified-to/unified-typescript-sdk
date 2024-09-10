/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateAtsScorecardRequest = {
  atsScorecard?: shared.AtsScorecard | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateAtsScorecardRequest$inboundSchema: z.ZodType<
  CreateAtsScorecardRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsScorecard: shared.AtsScorecard$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "AtsScorecard": "atsScorecard",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateAtsScorecardRequest$Outbound = {
  AtsScorecard?: shared.AtsScorecard$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateAtsScorecardRequest$outboundSchema: z.ZodType<
  CreateAtsScorecardRequest$Outbound,
  z.ZodTypeDef,
  CreateAtsScorecardRequest
> = z.object({
  atsScorecard: shared.AtsScorecard$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
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
