/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type CommerceItemOption = {
  id?: string | undefined;
  name: string;
  position?: number | undefined;
  values: Array<string>;
};

/** @internal */
export const CommerceItemOption$inboundSchema: z.ZodType<
  CommerceItemOption,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string(),
  position: z.number().optional(),
  values: z.array(z.string()),
});

/** @internal */
export type CommerceItemOption$Outbound = {
  id?: string | undefined;
  name: string;
  position?: number | undefined;
  values: Array<string>;
};

/** @internal */
export const CommerceItemOption$outboundSchema: z.ZodType<
  CommerceItemOption$Outbound,
  z.ZodTypeDef,
  CommerceItemOption
> = z.object({
  id: z.string().optional(),
  name: z.string(),
  position: z.number().optional(),
  values: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceItemOption$ {
  /** @deprecated use `CommerceItemOption$inboundSchema` instead. */
  export const inboundSchema = CommerceItemOption$inboundSchema;
  /** @deprecated use `CommerceItemOption$outboundSchema` instead. */
  export const outboundSchema = CommerceItemOption$outboundSchema;
  /** @deprecated use `CommerceItemOption$Outbound` instead. */
  export type Outbound = CommerceItemOption$Outbound;
}
