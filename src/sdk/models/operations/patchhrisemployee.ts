/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchHrisEmployeeRequest = {
  hrisEmployee: shared.HrisEmployee;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Employee
   */
  id: string;
};

/** @internal */
export const PatchHrisEmployeeRequest$inboundSchema: z.ZodType<
  PatchHrisEmployeeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  HrisEmployee: shared.HrisEmployee$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "HrisEmployee": "hrisEmployee",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchHrisEmployeeRequest$Outbound = {
  HrisEmployee: shared.HrisEmployee$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchHrisEmployeeRequest$outboundSchema: z.ZodType<
  PatchHrisEmployeeRequest$Outbound,
  z.ZodTypeDef,
  PatchHrisEmployeeRequest
> = z.object({
  hrisEmployee: shared.HrisEmployee$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    hrisEmployee: "HrisEmployee",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchHrisEmployeeRequest$ {
  /** @deprecated use `PatchHrisEmployeeRequest$inboundSchema` instead. */
  export const inboundSchema = PatchHrisEmployeeRequest$inboundSchema;
  /** @deprecated use `PatchHrisEmployeeRequest$outboundSchema` instead. */
  export const outboundSchema = PatchHrisEmployeeRequest$outboundSchema;
  /** @deprecated use `PatchHrisEmployeeRequest$Outbound` instead. */
  export type Outbound = PatchHrisEmployeeRequest$Outbound;
}

export function patchHrisEmployeeRequestToJSON(
  patchHrisEmployeeRequest: PatchHrisEmployeeRequest,
): string {
  return JSON.stringify(
    PatchHrisEmployeeRequest$outboundSchema.parse(patchHrisEmployeeRequest),
  );
}

export function patchHrisEmployeeRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchHrisEmployeeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchHrisEmployeeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchHrisEmployeeRequest' from JSON`,
  );
}
