/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type PatchLmsInstructorRequest = {
  lmsInstructor?: shared.LmsInstructor | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Instructor
   */
  id: string;
};

/** @internal */
export const PatchLmsInstructorRequest$inboundSchema: z.ZodType<
  PatchLmsInstructorRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  LmsInstructor: shared.LmsInstructor$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "LmsInstructor": "lmsInstructor",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchLmsInstructorRequest$Outbound = {
  LmsInstructor?: shared.LmsInstructor$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchLmsInstructorRequest$outboundSchema: z.ZodType<
  PatchLmsInstructorRequest$Outbound,
  z.ZodTypeDef,
  PatchLmsInstructorRequest
> = z.object({
  lmsInstructor: shared.LmsInstructor$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    lmsInstructor: "LmsInstructor",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchLmsInstructorRequest$ {
  /** @deprecated use `PatchLmsInstructorRequest$inboundSchema` instead. */
  export const inboundSchema = PatchLmsInstructorRequest$inboundSchema;
  /** @deprecated use `PatchLmsInstructorRequest$outboundSchema` instead. */
  export const outboundSchema = PatchLmsInstructorRequest$outboundSchema;
  /** @deprecated use `PatchLmsInstructorRequest$Outbound` instead. */
  export type Outbound = PatchLmsInstructorRequest$Outbound;
}
