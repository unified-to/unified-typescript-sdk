/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveMartechMemberRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Member
   */
  id: string;
};

export type RemoveMartechMemberResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveMartechMemberRequest$inboundSchema: z.ZodType<
  RemoveMartechMemberRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type RemoveMartechMemberRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveMartechMemberRequest$outboundSchema: z.ZodType<
  RemoveMartechMemberRequest$Outbound,
  z.ZodTypeDef,
  RemoveMartechMemberRequest
> = z.object({
  connectionId: z.string(),
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
export namespace RemoveMartechMemberRequest$ {
  /** @deprecated use `RemoveMartechMemberRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveMartechMemberRequest$inboundSchema;
  /** @deprecated use `RemoveMartechMemberRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveMartechMemberRequest$outboundSchema;
  /** @deprecated use `RemoveMartechMemberRequest$Outbound` instead. */
  export type Outbound = RemoveMartechMemberRequest$Outbound;
}

/** @internal */
export const RemoveMartechMemberResponse$inboundSchema: z.ZodType<
  RemoveMartechMemberResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
  });
});

/** @internal */
export type RemoveMartechMemberResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveMartechMemberResponse$outboundSchema: z.ZodType<
  RemoveMartechMemberResponse$Outbound,
  z.ZodTypeDef,
  RemoveMartechMemberResponse
> = z.object({
  headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoveMartechMemberResponse$ {
  /** @deprecated use `RemoveMartechMemberResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveMartechMemberResponse$inboundSchema;
  /** @deprecated use `RemoveMartechMemberResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveMartechMemberResponse$outboundSchema;
  /** @deprecated use `RemoveMartechMemberResponse$Outbound` instead. */
  export type Outbound = RemoveMartechMemberResponse$Outbound;
}
