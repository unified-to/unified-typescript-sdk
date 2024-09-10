/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type PropertyMessagingMessageAuthorMember = {
  email?: string | undefined;
  name?: string | undefined;
  userId?: string | undefined;
};

/** @internal */
export const PropertyMessagingMessageAuthorMember$inboundSchema: z.ZodType<
  PropertyMessagingMessageAuthorMember,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.string().optional(),
  name: z.string().optional(),
  user_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "user_id": "userId",
  });
});

/** @internal */
export type PropertyMessagingMessageAuthorMember$Outbound = {
  email?: string | undefined;
  name?: string | undefined;
  user_id?: string | undefined;
};

/** @internal */
export const PropertyMessagingMessageAuthorMember$outboundSchema: z.ZodType<
  PropertyMessagingMessageAuthorMember$Outbound,
  z.ZodTypeDef,
  PropertyMessagingMessageAuthorMember
> = z.object({
  email: z.string().optional(),
  name: z.string().optional(),
  userId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyMessagingMessageAuthorMember$ {
  /** @deprecated use `PropertyMessagingMessageAuthorMember$inboundSchema` instead. */
  export const inboundSchema =
    PropertyMessagingMessageAuthorMember$inboundSchema;
  /** @deprecated use `PropertyMessagingMessageAuthorMember$outboundSchema` instead. */
  export const outboundSchema =
    PropertyMessagingMessageAuthorMember$outboundSchema;
  /** @deprecated use `PropertyMessagingMessageAuthorMember$Outbound` instead. */
  export type Outbound = PropertyMessagingMessageAuthorMember$Outbound;
}
