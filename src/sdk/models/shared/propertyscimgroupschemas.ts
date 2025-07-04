/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const PropertyScimGroupSchemas = {
  UrnIetfParamsScimSchemasCore20Group:
    "urn:ietf:params:scim:schemas:core:2.0:Group",
} as const;
export type PropertyScimGroupSchemas = OpenEnum<
  typeof PropertyScimGroupSchemas
>;

/** @internal */
export const PropertyScimGroupSchemas$inboundSchema: z.ZodType<
  PropertyScimGroupSchemas,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(PropertyScimGroupSchemas),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const PropertyScimGroupSchemas$outboundSchema: z.ZodType<
  PropertyScimGroupSchemas,
  z.ZodTypeDef,
  PropertyScimGroupSchemas
> = z.union([
  z.nativeEnum(PropertyScimGroupSchemas),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyScimGroupSchemas$ {
  /** @deprecated use `PropertyScimGroupSchemas$inboundSchema` instead. */
  export const inboundSchema = PropertyScimGroupSchemas$inboundSchema;
  /** @deprecated use `PropertyScimGroupSchemas$outboundSchema` instead. */
  export const outboundSchema = PropertyScimGroupSchemas$outboundSchema;
}
