/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateScimUsersRequest = {
  user?: shared.User | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  count?: number | undefined;
  filter?: string | undefined;
  sortBy?: string | undefined;
  sortOrder?: string | undefined;
  startIndex?: number | undefined;
};

/** @internal */
export const CreateScimUsersRequest$inboundSchema: z.ZodType<
  CreateScimUsersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  User: shared.User$inboundSchema.optional(),
  connection_id: z.string(),
  count: z.number().optional(),
  filter: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.string().optional(),
  startIndex: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    "User": "user",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateScimUsersRequest$Outbound = {
  User?: shared.User$Outbound | undefined;
  connection_id: string;
  count?: number | undefined;
  filter?: string | undefined;
  sortBy?: string | undefined;
  sortOrder?: string | undefined;
  startIndex?: number | undefined;
};

/** @internal */
export const CreateScimUsersRequest$outboundSchema: z.ZodType<
  CreateScimUsersRequest$Outbound,
  z.ZodTypeDef,
  CreateScimUsersRequest
> = z.object({
  user: shared.User$outboundSchema.optional(),
  connectionId: z.string(),
  count: z.number().optional(),
  filter: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.string().optional(),
  startIndex: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    user: "User",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateScimUsersRequest$ {
  /** @deprecated use `CreateScimUsersRequest$inboundSchema` instead. */
  export const inboundSchema = CreateScimUsersRequest$inboundSchema;
  /** @deprecated use `CreateScimUsersRequest$outboundSchema` instead. */
  export const outboundSchema = CreateScimUsersRequest$outboundSchema;
  /** @deprecated use `CreateScimUsersRequest$Outbound` instead. */
  export type Outbound = CreateScimUsersRequest$Outbound;
}
