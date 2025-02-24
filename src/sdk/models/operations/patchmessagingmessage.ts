/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchMessagingMessageRequest = {
  messagingMessage: shared.MessagingMessage;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Message
   */
  id: string;
};

/** @internal */
export const PatchMessagingMessageRequest$inboundSchema: z.ZodType<
  PatchMessagingMessageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  MessagingMessage: shared.MessagingMessage$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "MessagingMessage": "messagingMessage",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchMessagingMessageRequest$Outbound = {
  MessagingMessage: shared.MessagingMessage$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchMessagingMessageRequest$outboundSchema: z.ZodType<
  PatchMessagingMessageRequest$Outbound,
  z.ZodTypeDef,
  PatchMessagingMessageRequest
> = z.object({
  messagingMessage: shared.MessagingMessage$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    messagingMessage: "MessagingMessage",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchMessagingMessageRequest$ {
  /** @deprecated use `PatchMessagingMessageRequest$inboundSchema` instead. */
  export const inboundSchema = PatchMessagingMessageRequest$inboundSchema;
  /** @deprecated use `PatchMessagingMessageRequest$outboundSchema` instead. */
  export const outboundSchema = PatchMessagingMessageRequest$outboundSchema;
  /** @deprecated use `PatchMessagingMessageRequest$Outbound` instead. */
  export type Outbound = PatchMessagingMessageRequest$Outbound;
}

export function patchMessagingMessageRequestToJSON(
  patchMessagingMessageRequest: PatchMessagingMessageRequest,
): string {
  return JSON.stringify(
    PatchMessagingMessageRequest$outboundSchema.parse(
      patchMessagingMessageRequest,
    ),
  );
}

export function patchMessagingMessageRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchMessagingMessageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchMessagingMessageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchMessagingMessageRequest' from JSON`,
  );
}
