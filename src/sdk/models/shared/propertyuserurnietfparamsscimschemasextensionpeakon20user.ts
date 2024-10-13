/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender = {
  Female: "Female",
  Male: "Male",
} as const;
export type PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender =
  ClosedEnum<
    typeof PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender
  >;

export type PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20User = {
  dateOfBirth?: Date | undefined;
  gender?:
    | PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender
    | undefined;
  manager?: string | undefined;
  team?: string | undefined;
};

/** @internal */
export const PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$inboundSchema:
  z.ZodNativeEnum<
    typeof PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender
  > = z.nativeEnum(
    PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender,
  );

/** @internal */
export const PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$outboundSchema:
  z.ZodNativeEnum<
    typeof PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender
  > =
    PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$ {
  /** @deprecated use `PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$inboundSchema` instead. */
  export const inboundSchema =
    PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$inboundSchema;
  /** @deprecated use `PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$outboundSchema` instead. */
  export const outboundSchema =
    PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$outboundSchema;
}

/** @internal */
export const PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20User$inboundSchema:
  z.ZodType<
    PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20User,
    z.ZodTypeDef,
    unknown
  > = z.object({
    "Date of Birth": z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    Gender:
      PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$inboundSchema
        .optional(),
    Manager: z.string().optional(),
    Team: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "Date of Birth": "dateOfBirth",
      "Gender": "gender",
      "Manager": "manager",
      "Team": "team",
    });
  });

/** @internal */
export type PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20User$Outbound =
  {
    "Date of Birth"?: string | undefined;
    Gender?: string | undefined;
    Manager?: string | undefined;
    Team?: string | undefined;
  };

/** @internal */
export const PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20User$outboundSchema:
  z.ZodType<
    PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20User$Outbound,
    z.ZodTypeDef,
    PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20User
  > = z.object({
    dateOfBirth: z.date().transform(v => v.toISOString()).optional(),
    gender:
      PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$outboundSchema
        .optional(),
    manager: z.string().optional(),
    team: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      dateOfBirth: "Date of Birth",
      gender: "Gender",
      manager: "Manager",
      team: "Team",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20User$ {
  /** @deprecated use `PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20User$inboundSchema` instead. */
  export const inboundSchema =
    PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20User$inboundSchema;
  /** @deprecated use `PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20User$outboundSchema` instead. */
  export const outboundSchema =
    PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20User$outboundSchema;
  /** @deprecated use `PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20User$Outbound` instead. */
  export type Outbound =
    PropertyUserUrnIetfParamsScimSchemasExtensionPeakon20User$Outbound;
}
