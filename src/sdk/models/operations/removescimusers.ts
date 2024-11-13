/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveScimUsersRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the User
   */
  id: string;
};

export type RemoveScimUsersResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveScimUsersRequest$inboundSchema: z.ZodType<
  RemoveScimUsersRequest,
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
export type RemoveScimUsersRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveScimUsersRequest$outboundSchema: z.ZodType<
  RemoveScimUsersRequest$Outbound,
  z.ZodTypeDef,
  RemoveScimUsersRequest
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
export namespace RemoveScimUsersRequest$ {
  /** @deprecated use `RemoveScimUsersRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveScimUsersRequest$inboundSchema;
  /** @deprecated use `RemoveScimUsersRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveScimUsersRequest$outboundSchema;
  /** @deprecated use `RemoveScimUsersRequest$Outbound` instead. */
  export type Outbound = RemoveScimUsersRequest$Outbound;
}

/** @internal */
export const RemoveScimUsersResponse$inboundSchema: z.ZodType<
  RemoveScimUsersResponse,
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
export type RemoveScimUsersResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveScimUsersResponse$outboundSchema: z.ZodType<
  RemoveScimUsersResponse$Outbound,
  z.ZodTypeDef,
  RemoveScimUsersResponse
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
export namespace RemoveScimUsersResponse$ {
  /** @deprecated use `RemoveScimUsersResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveScimUsersResponse$inboundSchema;
  /** @deprecated use `RemoveScimUsersResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveScimUsersResponse$outboundSchema;
  /** @deprecated use `RemoveScimUsersResponse$Outbound` instead. */
  export type Outbound = RemoveScimUsersResponse$Outbound;
}
