/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveCrmCompanyRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Company
   */
  id: string;
};

export type RemoveCrmCompanyResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveCrmCompanyRequest$inboundSchema: z.ZodType<
  RemoveCrmCompanyRequest,
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
export type RemoveCrmCompanyRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveCrmCompanyRequest$outboundSchema: z.ZodType<
  RemoveCrmCompanyRequest$Outbound,
  z.ZodTypeDef,
  RemoveCrmCompanyRequest
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
export namespace RemoveCrmCompanyRequest$ {
  /** @deprecated use `RemoveCrmCompanyRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveCrmCompanyRequest$inboundSchema;
  /** @deprecated use `RemoveCrmCompanyRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveCrmCompanyRequest$outboundSchema;
  /** @deprecated use `RemoveCrmCompanyRequest$Outbound` instead. */
  export type Outbound = RemoveCrmCompanyRequest$Outbound;
}

/** @internal */
export const RemoveCrmCompanyResponse$inboundSchema: z.ZodType<
  RemoveCrmCompanyResponse,
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
export type RemoveCrmCompanyResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveCrmCompanyResponse$outboundSchema: z.ZodType<
  RemoveCrmCompanyResponse$Outbound,
  z.ZodTypeDef,
  RemoveCrmCompanyResponse
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
export namespace RemoveCrmCompanyResponse$ {
  /** @deprecated use `RemoveCrmCompanyResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveCrmCompanyResponse$inboundSchema;
  /** @deprecated use `RemoveCrmCompanyResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveCrmCompanyResponse$outboundSchema;
  /** @deprecated use `RemoveCrmCompanyResponse$Outbound` instead. */
  export type Outbound = RemoveCrmCompanyResponse$Outbound;
}
