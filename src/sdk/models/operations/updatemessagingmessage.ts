/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateMessagingMessageRequest = {
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
export const UpdateMessagingMessageRequest$inboundSchema: z.ZodType<
  UpdateMessagingMessageRequest,
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
export type UpdateMessagingMessageRequest$Outbound = {
  MessagingMessage: shared.MessagingMessage$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateMessagingMessageRequest$outboundSchema: z.ZodType<
  UpdateMessagingMessageRequest$Outbound,
  z.ZodTypeDef,
  UpdateMessagingMessageRequest
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
export namespace UpdateMessagingMessageRequest$ {
  /** @deprecated use `UpdateMessagingMessageRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateMessagingMessageRequest$inboundSchema;
  /** @deprecated use `UpdateMessagingMessageRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateMessagingMessageRequest$outboundSchema;
  /** @deprecated use `UpdateMessagingMessageRequest$Outbound` instead. */
  export type Outbound = UpdateMessagingMessageRequest$Outbound;
}

export function updateMessagingMessageRequestToJSON(
  updateMessagingMessageRequest: UpdateMessagingMessageRequest,
): string {
  return JSON.stringify(
    UpdateMessagingMessageRequest$outboundSchema.parse(
      updateMessagingMessageRequest,
    ),
  );
}

export function updateMessagingMessageRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMessagingMessageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMessagingMessageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMessagingMessageRequest' from JSON`,
  );
}
