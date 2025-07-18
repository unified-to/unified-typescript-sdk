/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const PropertyStoragePermissionRoles = {
  Owner: "OWNER",
  Read: "READ",
  Write: "WRITE",
} as const;
export type PropertyStoragePermissionRoles = OpenEnum<
  typeof PropertyStoragePermissionRoles
>;

/** @internal */
export const PropertyStoragePermissionRoles$inboundSchema: z.ZodType<
  PropertyStoragePermissionRoles,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(PropertyStoragePermissionRoles),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const PropertyStoragePermissionRoles$outboundSchema: z.ZodType<
  PropertyStoragePermissionRoles,
  z.ZodTypeDef,
  PropertyStoragePermissionRoles
> = z.union([
  z.nativeEnum(PropertyStoragePermissionRoles),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyStoragePermissionRoles$ {
  /** @deprecated use `PropertyStoragePermissionRoles$inboundSchema` instead. */
  export const inboundSchema = PropertyStoragePermissionRoles$inboundSchema;
  /** @deprecated use `PropertyStoragePermissionRoles$outboundSchema` instead. */
  export const outboundSchema = PropertyStoragePermissionRoles$outboundSchema;
}
