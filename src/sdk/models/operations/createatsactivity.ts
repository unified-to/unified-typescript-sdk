/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateAtsActivityRequest = {
  atsActivity?: shared.AtsActivity | undefined;
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
export const CreateAtsActivityRequest$inboundSchema: z.ZodType<
  CreateAtsActivityRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsActivity: shared.AtsActivity$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "AtsActivity": "atsActivity",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateAtsActivityRequest$Outbound = {
  AtsActivity?: shared.AtsActivity$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateAtsActivityRequest$outboundSchema: z.ZodType<
  CreateAtsActivityRequest$Outbound,
  z.ZodTypeDef,
  CreateAtsActivityRequest
> = z.object({
  atsActivity: shared.AtsActivity$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    atsActivity: "AtsActivity",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAtsActivityRequest$ {
  /** @deprecated use `CreateAtsActivityRequest$inboundSchema` instead. */
  export const inboundSchema = CreateAtsActivityRequest$inboundSchema;
  /** @deprecated use `CreateAtsActivityRequest$outboundSchema` instead. */
  export const outboundSchema = CreateAtsActivityRequest$outboundSchema;
  /** @deprecated use `CreateAtsActivityRequest$Outbound` instead. */
  export type Outbound = CreateAtsActivityRequest$Outbound;
}

export function createAtsActivityRequestToJSON(
  createAtsActivityRequest: CreateAtsActivityRequest,
): string {
  return JSON.stringify(
    CreateAtsActivityRequest$outboundSchema.parse(createAtsActivityRequest),
  );
}

export function createAtsActivityRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateAtsActivityRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateAtsActivityRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAtsActivityRequest' from JSON`,
  );
}
