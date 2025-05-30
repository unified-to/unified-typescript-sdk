/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchCrmEventRequest = {
  /**
   * An event represents an event, activity, or engagement and is always associated with a deal, contact, or company
   */
  crmEvent: shared.CrmEvent;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Event
   */
  id: string;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const PatchCrmEventRequest$inboundSchema: z.ZodType<
  PatchCrmEventRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CrmEvent: shared.CrmEvent$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "CrmEvent": "crmEvent",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchCrmEventRequest$Outbound = {
  CrmEvent: shared.CrmEvent$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
  raw?: string | undefined;
};

/** @internal */
export const PatchCrmEventRequest$outboundSchema: z.ZodType<
  PatchCrmEventRequest$Outbound,
  z.ZodTypeDef,
  PatchCrmEventRequest
> = z.object({
  crmEvent: shared.CrmEvent$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    crmEvent: "CrmEvent",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchCrmEventRequest$ {
  /** @deprecated use `PatchCrmEventRequest$inboundSchema` instead. */
  export const inboundSchema = PatchCrmEventRequest$inboundSchema;
  /** @deprecated use `PatchCrmEventRequest$outboundSchema` instead. */
  export const outboundSchema = PatchCrmEventRequest$outboundSchema;
  /** @deprecated use `PatchCrmEventRequest$Outbound` instead. */
  export type Outbound = PatchCrmEventRequest$Outbound;
}

export function patchCrmEventRequestToJSON(
  patchCrmEventRequest: PatchCrmEventRequest,
): string {
  return JSON.stringify(
    PatchCrmEventRequest$outboundSchema.parse(patchCrmEventRequest),
  );
}

export function patchCrmEventRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchCrmEventRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchCrmEventRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchCrmEventRequest' from JSON`,
  );
}
