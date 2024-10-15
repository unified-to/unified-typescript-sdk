/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const Operation = {
  Add: "add",
  Delete: "delete",
} as const;
export type Operation = ClosedEnum<typeof Operation>;

export const UndefinedType = {
  User: "User",
  Group: "Group",
} as const;
export type UndefinedType = ClosedEnum<typeof UndefinedType>;

export type Undefined = {
  dollarRef?: string | undefined;
  display?: string | undefined;
  operation?: Operation | undefined;
  type?: UndefinedType | undefined;
  value?: string | undefined;
};

/** @internal */
export const Operation$inboundSchema: z.ZodNativeEnum<typeof Operation> = z
  .nativeEnum(Operation);

/** @internal */
export const Operation$outboundSchema: z.ZodNativeEnum<typeof Operation> =
  Operation$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Operation$ {
  /** @deprecated use `Operation$inboundSchema` instead. */
  export const inboundSchema = Operation$inboundSchema;
  /** @deprecated use `Operation$outboundSchema` instead. */
  export const outboundSchema = Operation$outboundSchema;
}

/** @internal */
export const UndefinedType$inboundSchema: z.ZodNativeEnum<
  typeof UndefinedType
> = z.nativeEnum(UndefinedType);

/** @internal */
export const UndefinedType$outboundSchema: z.ZodNativeEnum<
  typeof UndefinedType
> = UndefinedType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UndefinedType$ {
  /** @deprecated use `UndefinedType$inboundSchema` instead. */
  export const inboundSchema = UndefinedType$inboundSchema;
  /** @deprecated use `UndefinedType$outboundSchema` instead. */
  export const outboundSchema = UndefinedType$outboundSchema;
}

/** @internal */
export const Undefined$inboundSchema: z.ZodType<
  Undefined,
  z.ZodTypeDef,
  unknown
> = z.object({
  $ref: z.string().optional(),
  display: z.string().optional(),
  operation: Operation$inboundSchema.optional(),
  type: UndefinedType$inboundSchema.optional(),
  value: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "$ref": "dollarRef",
  });
});

/** @internal */
export type Undefined$Outbound = {
  $ref?: string | undefined;
  display?: string | undefined;
  operation?: string | undefined;
  type?: string | undefined;
  value?: string | undefined;
};

/** @internal */
export const Undefined$outboundSchema: z.ZodType<
  Undefined$Outbound,
  z.ZodTypeDef,
  Undefined
> = z.object({
  dollarRef: z.string().optional(),
  display: z.string().optional(),
  operation: Operation$outboundSchema.optional(),
  type: UndefinedType$outboundSchema.optional(),
  value: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    dollarRef: "$ref",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Undefined$ {
  /** @deprecated use `Undefined$inboundSchema` instead. */
  export const inboundSchema = Undefined$inboundSchema;
  /** @deprecated use `Undefined$outboundSchema` instead. */
  export const outboundSchema = Undefined$outboundSchema;
  /** @deprecated use `Undefined$Outbound` instead. */
  export type Outbound = Undefined$Outbound;
}