/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Operation = {
  Add: "add",
  Delete: "delete",
} as const;
export type Operation = OpenEnum<typeof Operation>;

export const ScimGroupMemberType = {
  User: "User",
  Group: "Group",
} as const;
export type ScimGroupMemberType = OpenEnum<typeof ScimGroupMemberType>;

export type ScimGroupMember = {
  dollarRef?: string | undefined;
  display?: string | undefined;
  operation?: Operation | undefined;
  type?: ScimGroupMemberType | undefined;
  value: string;
};

/** @internal */
export const Operation$inboundSchema: z.ZodType<
  Operation,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(Operation),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const Operation$outboundSchema: z.ZodType<
  Operation,
  z.ZodTypeDef,
  Operation
> = z.union([
  z.nativeEnum(Operation),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

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
export const ScimGroupMemberType$inboundSchema: z.ZodType<
  ScimGroupMemberType,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(ScimGroupMemberType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const ScimGroupMemberType$outboundSchema: z.ZodType<
  ScimGroupMemberType,
  z.ZodTypeDef,
  ScimGroupMemberType
> = z.union([
  z.nativeEnum(ScimGroupMemberType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScimGroupMemberType$ {
  /** @deprecated use `ScimGroupMemberType$inboundSchema` instead. */
  export const inboundSchema = ScimGroupMemberType$inboundSchema;
  /** @deprecated use `ScimGroupMemberType$outboundSchema` instead. */
  export const outboundSchema = ScimGroupMemberType$outboundSchema;
}

/** @internal */
export const ScimGroupMember$inboundSchema: z.ZodType<
  ScimGroupMember,
  z.ZodTypeDef,
  unknown
> = z.object({
  $ref: z.string().optional(),
  display: z.string().optional(),
  operation: Operation$inboundSchema.optional(),
  type: ScimGroupMemberType$inboundSchema.optional(),
  value: z.string(),
}).transform((v) => {
  return remap$(v, {
    "$ref": "dollarRef",
  });
});

/** @internal */
export type ScimGroupMember$Outbound = {
  $ref?: string | undefined;
  display?: string | undefined;
  operation?: string | undefined;
  type?: string | undefined;
  value: string;
};

/** @internal */
export const ScimGroupMember$outboundSchema: z.ZodType<
  ScimGroupMember$Outbound,
  z.ZodTypeDef,
  ScimGroupMember
> = z.object({
  dollarRef: z.string().optional(),
  display: z.string().optional(),
  operation: Operation$outboundSchema.optional(),
  type: ScimGroupMemberType$outboundSchema.optional(),
  value: z.string(),
}).transform((v) => {
  return remap$(v, {
    dollarRef: "$ref",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScimGroupMember$ {
  /** @deprecated use `ScimGroupMember$inboundSchema` instead. */
  export const inboundSchema = ScimGroupMember$inboundSchema;
  /** @deprecated use `ScimGroupMember$outboundSchema` instead. */
  export const outboundSchema = ScimGroupMember$outboundSchema;
  /** @deprecated use `ScimGroupMember$Outbound` instead. */
  export type Outbound = ScimGroupMember$Outbound;
}

export function scimGroupMemberToJSON(
  scimGroupMember: ScimGroupMember,
): string {
  return JSON.stringify(ScimGroupMember$outboundSchema.parse(scimGroupMember));
}

export function scimGroupMemberFromJSON(
  jsonString: string,
): SafeParseResult<ScimGroupMember, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ScimGroupMember$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ScimGroupMember' from JSON`,
  );
}
