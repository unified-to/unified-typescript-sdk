/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetHrisPayslipRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Payslip
   */
  id: string;
};

/** @internal */
export const GetHrisPayslipRequest$inboundSchema: z.ZodType<
  GetHrisPayslipRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type GetHrisPayslipRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetHrisPayslipRequest$outboundSchema: z.ZodType<
  GetHrisPayslipRequest$Outbound,
  z.ZodTypeDef,
  GetHrisPayslipRequest
> = z.object({
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
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
export namespace GetHrisPayslipRequest$ {
  /** @deprecated use `GetHrisPayslipRequest$inboundSchema` instead. */
  export const inboundSchema = GetHrisPayslipRequest$inboundSchema;
  /** @deprecated use `GetHrisPayslipRequest$outboundSchema` instead. */
  export const outboundSchema = GetHrisPayslipRequest$outboundSchema;
  /** @deprecated use `GetHrisPayslipRequest$Outbound` instead. */
  export type Outbound = GetHrisPayslipRequest$Outbound;
}

export function getHrisPayslipRequestToJSON(
  getHrisPayslipRequest: GetHrisPayslipRequest,
): string {
  return JSON.stringify(
    GetHrisPayslipRequest$outboundSchema.parse(getHrisPayslipRequest),
  );
}

export function getHrisPayslipRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetHrisPayslipRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetHrisPayslipRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetHrisPayslipRequest' from JSON`,
  );
}
