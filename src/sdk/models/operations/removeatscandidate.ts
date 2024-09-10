/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveAtsCandidateRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Candidate
   */
  id: string;
};

/** @internal */
export const RemoveAtsCandidateRequest$inboundSchema: z.ZodType<
  RemoveAtsCandidateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type RemoveAtsCandidateRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveAtsCandidateRequest$outboundSchema: z.ZodType<
  RemoveAtsCandidateRequest$Outbound,
  z.ZodTypeDef,
  RemoveAtsCandidateRequest
> = z.object({
  connectionId: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoveAtsCandidateRequest$ {
  /** @deprecated use `RemoveAtsCandidateRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveAtsCandidateRequest$inboundSchema;
  /** @deprecated use `RemoveAtsCandidateRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveAtsCandidateRequest$outboundSchema;
  /** @deprecated use `RemoveAtsCandidateRequest$Outbound` instead. */
  export type Outbound = RemoveAtsCandidateRequest$Outbound;
}
