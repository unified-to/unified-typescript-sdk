/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateUcContactRequest = {
  /**
   * A contact represents a person that optionally is associated with a call
   */
  ucContact?: shared.UcContact | undefined;
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
export const CreateUcContactRequest$inboundSchema: z.ZodType<
  CreateUcContactRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  UcContact: shared.UcContact$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "UcContact": "ucContact",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateUcContactRequest$Outbound = {
  UcContact?: shared.UcContact$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateUcContactRequest$outboundSchema: z.ZodType<
  CreateUcContactRequest$Outbound,
  z.ZodTypeDef,
  CreateUcContactRequest
> = z.object({
  ucContact: shared.UcContact$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    ucContact: "UcContact",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateUcContactRequest$ {
  /** @deprecated use `CreateUcContactRequest$inboundSchema` instead. */
  export const inboundSchema = CreateUcContactRequest$inboundSchema;
  /** @deprecated use `CreateUcContactRequest$outboundSchema` instead. */
  export const outboundSchema = CreateUcContactRequest$outboundSchema;
  /** @deprecated use `CreateUcContactRequest$Outbound` instead. */
  export type Outbound = CreateUcContactRequest$Outbound;
}

export function createUcContactRequestToJSON(
  createUcContactRequest: CreateUcContactRequest,
): string {
  return JSON.stringify(
    CreateUcContactRequest$outboundSchema.parse(createUcContactRequest),
  );
}

export function createUcContactRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateUcContactRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateUcContactRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateUcContactRequest' from JSON`,
  );
}
