/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveUcContactRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Contact
   */
  id: string;
};

export type RemoveUcContactResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveUcContactRequest$inboundSchema: z.ZodType<
  RemoveUcContactRequest,
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
export type RemoveUcContactRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveUcContactRequest$outboundSchema: z.ZodType<
  RemoveUcContactRequest$Outbound,
  z.ZodTypeDef,
  RemoveUcContactRequest
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
export namespace RemoveUcContactRequest$ {
  /** @deprecated use `RemoveUcContactRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveUcContactRequest$inboundSchema;
  /** @deprecated use `RemoveUcContactRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveUcContactRequest$outboundSchema;
  /** @deprecated use `RemoveUcContactRequest$Outbound` instead. */
  export type Outbound = RemoveUcContactRequest$Outbound;
}

/** @internal */
export const RemoveUcContactResponse$inboundSchema: z.ZodType<
  RemoveUcContactResponse,
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
export type RemoveUcContactResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveUcContactResponse$outboundSchema: z.ZodType<
  RemoveUcContactResponse$Outbound,
  z.ZodTypeDef,
  RemoveUcContactResponse
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
export namespace RemoveUcContactResponse$ {
  /** @deprecated use `RemoveUcContactResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveUcContactResponse$inboundSchema;
  /** @deprecated use `RemoveUcContactResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveUcContactResponse$outboundSchema;
  /** @deprecated use `RemoveUcContactResponse$Outbound` instead. */
  export type Outbound = RemoveUcContactResponse$Outbound;
}
