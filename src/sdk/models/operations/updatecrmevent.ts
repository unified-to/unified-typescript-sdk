/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateCrmEventRequest = {
  /**
   * An event represents an event, activity, or engagement and is always associated with a deal, contact, or company
   */
  crmEvent?: shared.CrmEvent | undefined;
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
};

/** @internal */
export const UpdateCrmEventRequest$inboundSchema: z.ZodType<
  UpdateCrmEventRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CrmEvent: shared.CrmEvent$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "CrmEvent": "crmEvent",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateCrmEventRequest$Outbound = {
  CrmEvent?: shared.CrmEvent$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateCrmEventRequest$outboundSchema: z.ZodType<
  UpdateCrmEventRequest$Outbound,
  z.ZodTypeDef,
  UpdateCrmEventRequest
> = z.object({
  crmEvent: shared.CrmEvent$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
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
export namespace UpdateCrmEventRequest$ {
  /** @deprecated use `UpdateCrmEventRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateCrmEventRequest$inboundSchema;
  /** @deprecated use `UpdateCrmEventRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateCrmEventRequest$outboundSchema;
  /** @deprecated use `UpdateCrmEventRequest$Outbound` instead. */
  export type Outbound = UpdateCrmEventRequest$Outbound;
}

export function updateCrmEventRequestToJSON(
  updateCrmEventRequest: UpdateCrmEventRequest,
): string {
  return JSON.stringify(
    UpdateCrmEventRequest$outboundSchema.parse(updateCrmEventRequest),
  );
}

export function updateCrmEventRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateCrmEventRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateCrmEventRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateCrmEventRequest' from JSON`,
  );
}
