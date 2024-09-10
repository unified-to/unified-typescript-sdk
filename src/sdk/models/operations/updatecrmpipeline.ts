/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdateCrmPipelineRequest = {
  crmPipeline?: shared.CrmPipeline | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Pipeline
   */
  id: string;
};

/** @internal */
export const UpdateCrmPipelineRequest$inboundSchema: z.ZodType<
  UpdateCrmPipelineRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CrmPipeline: shared.CrmPipeline$inboundSchema.optional(),
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "CrmPipeline": "crmPipeline",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateCrmPipelineRequest$Outbound = {
  CrmPipeline?: shared.CrmPipeline$Outbound | undefined;
  connection_id: string;
  id: string;
};

/** @internal */
export const UpdateCrmPipelineRequest$outboundSchema: z.ZodType<
  UpdateCrmPipelineRequest$Outbound,
  z.ZodTypeDef,
  UpdateCrmPipelineRequest
> = z.object({
  crmPipeline: shared.CrmPipeline$outboundSchema.optional(),
  connectionId: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    crmPipeline: "CrmPipeline",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateCrmPipelineRequest$ {
  /** @deprecated use `UpdateCrmPipelineRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateCrmPipelineRequest$inboundSchema;
  /** @deprecated use `UpdateCrmPipelineRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateCrmPipelineRequest$outboundSchema;
  /** @deprecated use `UpdateCrmPipelineRequest$Outbound` instead. */
  export type Outbound = UpdateCrmPipelineRequest$Outbound;
}
