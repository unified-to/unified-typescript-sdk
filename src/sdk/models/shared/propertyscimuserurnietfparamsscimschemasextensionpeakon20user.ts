/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender =
  {
    Female: "Female",
    Male: "Male",
  } as const;
export type PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender =
  ClosedEnum<
    typeof PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender
  >;

export type PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User = {
  dateOfBirth?: Date | undefined;
  gender?:
    | PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender
    | undefined;
  manager?: string | undefined;
  team?: string | undefined;
};

/** @internal */
export const PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$inboundSchema:
  z.ZodNativeEnum<
    typeof PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender
  > = z.nativeEnum(
    PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender,
  );

/** @internal */
export const PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$outboundSchema:
  z.ZodNativeEnum<
    typeof PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender
  > =
    PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$ {
  /** @deprecated use `PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$inboundSchema` instead. */
  export const inboundSchema =
    PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$inboundSchema;
  /** @deprecated use `PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$outboundSchema` instead. */
  export const outboundSchema =
    PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$outboundSchema;
}

/** @internal */
export const PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$inboundSchema:
  z.ZodType<
    PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User,
    z.ZodTypeDef,
    unknown
  > = z.object({
    "Date of Birth": z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    Gender:
      PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$inboundSchema
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
export type PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$Outbound =
  {
    "Date of Birth"?: string | undefined;
    Gender?: string | undefined;
    Manager?: string | undefined;
    Team?: string | undefined;
  };

/** @internal */
export const PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$outboundSchema:
  z.ZodType<
    PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$Outbound,
    z.ZodTypeDef,
    PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User
  > = z.object({
    dateOfBirth: z.date().transform(v => v.toISOString()).optional(),
    gender:
      PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20UserGender$outboundSchema
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
export namespace PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$ {
  /** @deprecated use `PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$inboundSchema` instead. */
  export const inboundSchema =
    PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$inboundSchema;
  /** @deprecated use `PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$outboundSchema` instead. */
  export const outboundSchema =
    PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$outboundSchema;
  /** @deprecated use `PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$Outbound` instead. */
  export type Outbound =
    PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$Outbound;
}
