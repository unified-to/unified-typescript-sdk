/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateUnifiedWebhookRequest = {
  /**
   * A webhook is used to POST new/updated information to your server.
   */
  webhook: shared.Webhook;
  /**
   * When set, all of the existing data will sent back to your server.
   */
  includeAll?: boolean | undefined;
};

/** @internal */
export const CreateUnifiedWebhookRequest$inboundSchema: z.ZodType<
  CreateUnifiedWebhookRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  Webhook: shared.Webhook$inboundSchema,
  include_all: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "Webhook": "webhook",
    "include_all": "includeAll",
  });
});

/** @internal */
export type CreateUnifiedWebhookRequest$Outbound = {
  Webhook: shared.Webhook$Outbound;
  include_all?: boolean | undefined;
};

/** @internal */
export const CreateUnifiedWebhookRequest$outboundSchema: z.ZodType<
  CreateUnifiedWebhookRequest$Outbound,
  z.ZodTypeDef,
  CreateUnifiedWebhookRequest
> = z.object({
  webhook: shared.Webhook$outboundSchema,
  includeAll: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    webhook: "Webhook",
    includeAll: "include_all",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateUnifiedWebhookRequest$ {
  /** @deprecated use `CreateUnifiedWebhookRequest$inboundSchema` instead. */
  export const inboundSchema = CreateUnifiedWebhookRequest$inboundSchema;
  /** @deprecated use `CreateUnifiedWebhookRequest$outboundSchema` instead. */
  export const outboundSchema = CreateUnifiedWebhookRequest$outboundSchema;
  /** @deprecated use `CreateUnifiedWebhookRequest$Outbound` instead. */
  export type Outbound = CreateUnifiedWebhookRequest$Outbound;
}

export function createUnifiedWebhookRequestToJSON(
  createUnifiedWebhookRequest: CreateUnifiedWebhookRequest,
): string {
  return JSON.stringify(
    CreateUnifiedWebhookRequest$outboundSchema.parse(
      createUnifiedWebhookRequest,
    ),
  );
}

export function createUnifiedWebhookRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateUnifiedWebhookRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateUnifiedWebhookRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateUnifiedWebhookRequest' from JSON`,
  );
}
