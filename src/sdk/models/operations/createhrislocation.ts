/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateHrisLocationRequest = {
  hrisLocation?: shared.HrisLocation | undefined;
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
export const CreateHrisLocationRequest$inboundSchema: z.ZodType<
  CreateHrisLocationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  HrisLocation: shared.HrisLocation$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "HrisLocation": "hrisLocation",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateHrisLocationRequest$Outbound = {
  HrisLocation?: shared.HrisLocation$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateHrisLocationRequest$outboundSchema: z.ZodType<
  CreateHrisLocationRequest$Outbound,
  z.ZodTypeDef,
  CreateHrisLocationRequest
> = z.object({
  hrisLocation: shared.HrisLocation$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    hrisLocation: "HrisLocation",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateHrisLocationRequest$ {
  /** @deprecated use `CreateHrisLocationRequest$inboundSchema` instead. */
  export const inboundSchema = CreateHrisLocationRequest$inboundSchema;
  /** @deprecated use `CreateHrisLocationRequest$outboundSchema` instead. */
  export const outboundSchema = CreateHrisLocationRequest$outboundSchema;
  /** @deprecated use `CreateHrisLocationRequest$Outbound` instead. */
  export type Outbound = CreateHrisLocationRequest$Outbound;
}

export function createHrisLocationRequestToJSON(
  createHrisLocationRequest: CreateHrisLocationRequest,
): string {
  return JSON.stringify(
    CreateHrisLocationRequest$outboundSchema.parse(createHrisLocationRequest),
  );
}

export function createHrisLocationRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateHrisLocationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateHrisLocationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateHrisLocationRequest' from JSON`,
  );
}
