/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetLmsStudentRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Student
   */
  id: string;
};

/** @internal */
export const GetLmsStudentRequest$inboundSchema: z.ZodType<
  GetLmsStudentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type GetLmsStudentRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetLmsStudentRequest$outboundSchema: z.ZodType<
  GetLmsStudentRequest$Outbound,
  z.ZodTypeDef,
  GetLmsStudentRequest
> = z.object({
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
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
export namespace GetLmsStudentRequest$ {
  /** @deprecated use `GetLmsStudentRequest$inboundSchema` instead. */
  export const inboundSchema = GetLmsStudentRequest$inboundSchema;
  /** @deprecated use `GetLmsStudentRequest$outboundSchema` instead. */
  export const outboundSchema = GetLmsStudentRequest$outboundSchema;
  /** @deprecated use `GetLmsStudentRequest$Outbound` instead. */
  export type Outbound = GetLmsStudentRequest$Outbound;
}