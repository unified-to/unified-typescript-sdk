/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdateMartechListRequest = {
  /**
   * Mailing List
   */
  marketingList?: shared.MarketingList | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the List
   */
  id: string;
};

/** @internal */
export const UpdateMartechListRequest$inboundSchema: z.ZodType<
  UpdateMartechListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  MarketingList: shared.MarketingList$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "MarketingList": "marketingList",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateMartechListRequest$Outbound = {
  MarketingList?: shared.MarketingList$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateMartechListRequest$outboundSchema: z.ZodType<
  UpdateMartechListRequest$Outbound,
  z.ZodTypeDef,
  UpdateMartechListRequest
> = z.object({
  marketingList: shared.MarketingList$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    marketingList: "MarketingList",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMartechListRequest$ {
  /** @deprecated use `UpdateMartechListRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateMartechListRequest$inboundSchema;
  /** @deprecated use `UpdateMartechListRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateMartechListRequest$outboundSchema;
  /** @deprecated use `UpdateMartechListRequest$Outbound` instead. */
  export type Outbound = UpdateMartechListRequest$Outbound;
}
