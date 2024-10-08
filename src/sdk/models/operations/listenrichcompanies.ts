/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type ListEnrichCompaniesRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * The domain of the company to search
   */
  domain?: string | undefined;
  /**
   * The name of the company to search
   */
  name?: string | undefined;
};

/** @internal */
export const ListEnrichCompaniesRequest$inboundSchema: z.ZodType<
  ListEnrichCompaniesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  domain: z.string().optional(),
  name: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type ListEnrichCompaniesRequest$Outbound = {
  connection_id: string;
  domain?: string | undefined;
  name?: string | undefined;
};

/** @internal */
export const ListEnrichCompaniesRequest$outboundSchema: z.ZodType<
  ListEnrichCompaniesRequest$Outbound,
  z.ZodTypeDef,
  ListEnrichCompaniesRequest
> = z.object({
  connectionId: z.string(),
  domain: z.string().optional(),
  name: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListEnrichCompaniesRequest$ {
  /** @deprecated use `ListEnrichCompaniesRequest$inboundSchema` instead. */
  export const inboundSchema = ListEnrichCompaniesRequest$inboundSchema;
  /** @deprecated use `ListEnrichCompaniesRequest$outboundSchema` instead. */
  export const outboundSchema = ListEnrichCompaniesRequest$outboundSchema;
  /** @deprecated use `ListEnrichCompaniesRequest$Outbound` instead. */
  export type Outbound = ListEnrichCompaniesRequest$Outbound;
}
