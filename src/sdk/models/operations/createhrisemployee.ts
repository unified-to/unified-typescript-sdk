/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateHrisEmployeeRequest = {
  hrisEmployee?: shared.HrisEmployee | undefined;
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
export const CreateHrisEmployeeRequest$inboundSchema: z.ZodType<
  CreateHrisEmployeeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  HrisEmployee: shared.HrisEmployee$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "HrisEmployee": "hrisEmployee",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateHrisEmployeeRequest$Outbound = {
  HrisEmployee?: shared.HrisEmployee$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateHrisEmployeeRequest$outboundSchema: z.ZodType<
  CreateHrisEmployeeRequest$Outbound,
  z.ZodTypeDef,
  CreateHrisEmployeeRequest
> = z.object({
  hrisEmployee: shared.HrisEmployee$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
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
export namespace CreateHrisEmployeeRequest$ {
  /** @deprecated use `CreateHrisEmployeeRequest$inboundSchema` instead. */
  export const inboundSchema = CreateHrisEmployeeRequest$inboundSchema;
  /** @deprecated use `CreateHrisEmployeeRequest$outboundSchema` instead. */
  export const outboundSchema = CreateHrisEmployeeRequest$outboundSchema;
  /** @deprecated use `CreateHrisEmployeeRequest$Outbound` instead. */
  export type Outbound = CreateHrisEmployeeRequest$Outbound;
}

export function createHrisEmployeeRequestToJSON(
  createHrisEmployeeRequest: CreateHrisEmployeeRequest,
): string {
  return JSON.stringify(
    CreateHrisEmployeeRequest$outboundSchema.parse(createHrisEmployeeRequest),
  );
}

export function createHrisEmployeeRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateHrisEmployeeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateHrisEmployeeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateHrisEmployeeRequest' from JSON`,
  );
}
