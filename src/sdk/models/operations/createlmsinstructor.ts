/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateLmsInstructorRequest = {
  lmsInstructor: shared.LmsInstructor;
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
export const CreateLmsInstructorRequest$inboundSchema: z.ZodType<
  CreateLmsInstructorRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  LmsInstructor: shared.LmsInstructor$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "LmsInstructor": "lmsInstructor",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateLmsInstructorRequest$Outbound = {
  LmsInstructor: shared.LmsInstructor$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  raw?: string | undefined;
};

/** @internal */
export const CreateLmsInstructorRequest$outboundSchema: z.ZodType<
  CreateLmsInstructorRequest$Outbound,
  z.ZodTypeDef,
  CreateLmsInstructorRequest
> = z.object({
  lmsInstructor: shared.LmsInstructor$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
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
export namespace CreateLmsInstructorRequest$ {
  /** @deprecated use `CreateLmsInstructorRequest$inboundSchema` instead. */
  export const inboundSchema = CreateLmsInstructorRequest$inboundSchema;
  /** @deprecated use `CreateLmsInstructorRequest$outboundSchema` instead. */
  export const outboundSchema = CreateLmsInstructorRequest$outboundSchema;
  /** @deprecated use `CreateLmsInstructorRequest$Outbound` instead. */
  export type Outbound = CreateLmsInstructorRequest$Outbound;
}

export function createLmsInstructorRequestToJSON(
  createLmsInstructorRequest: CreateLmsInstructorRequest,
): string {
  return JSON.stringify(
    CreateLmsInstructorRequest$outboundSchema.parse(createLmsInstructorRequest),
  );
}

export function createLmsInstructorRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateLmsInstructorRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateLmsInstructorRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateLmsInstructorRequest' from JSON`,
  );
}
