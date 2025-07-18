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

export const Ethnicity = {
  Caucasian: "Caucasian",
  EastAsian: "East Asian",
  MiddleEastern: "Middle Eastern",
  Black: "Black",
  BiracialSouthAsianAndCaucasian: "Biracial (South Asian & Caucasian)",
  Filipino: "Filipino",
  SouthAsian: "South Asian",
  Indian: "Indian",
  White: "White",
  Asian: "Asian",
} as const;
export type Ethnicity = OpenEnum<typeof Ethnicity>;

export const PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender =
  {
    Male: "male",
    Female: "female",
  } as const;
export type PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender =
  OpenEnum<
    typeof PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender
  >;

export const SexualOrientation = {
  Queer: "Queer",
  Heterosexual: "Heterosexual",
  Straight: "Straight",
} as const;
export type SexualOrientation = OpenEnum<typeof SexualOrientation>;

export type PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User =
  {
    jobLevel?: string | undefined;
    peopleManagerReviews?: string | undefined;
    remoteWorkLocation?: string | undefined;
    salaryInformation?: string | undefined;
    subDepartments?: string | undefined;
    birthDate?: Date | undefined;
    ethnicity?: Ethnicity | undefined;
    gender?:
      | PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender
      | undefined;
    sexualOrientation?: SexualOrientation | undefined;
    startDate?: Date | undefined;
  };

/** @internal */
export const Ethnicity$inboundSchema: z.ZodType<
  Ethnicity,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(Ethnicity),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const Ethnicity$outboundSchema: z.ZodType<
  Ethnicity,
  z.ZodTypeDef,
  Ethnicity
> = z.union([
  z.nativeEnum(Ethnicity),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Ethnicity$ {
  /** @deprecated use `Ethnicity$inboundSchema` instead. */
  export const inboundSchema = Ethnicity$inboundSchema;
  /** @deprecated use `Ethnicity$outboundSchema` instead. */
  export const outboundSchema = Ethnicity$outboundSchema;
}

/** @internal */
export const PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender$inboundSchema:
  z.ZodType<
    PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender,
    z.ZodTypeDef,
    unknown
  > = z
    .union([
      z.nativeEnum(
        PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender,
      ),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender$outboundSchema:
  z.ZodType<
    PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender,
    z.ZodTypeDef,
    PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender
  > = z.union([
    z.nativeEnum(
      PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender,
    ),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender$ {
  /** @deprecated use `PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender$inboundSchema` instead. */
  export const inboundSchema =
    PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender$inboundSchema;
  /** @deprecated use `PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender$outboundSchema` instead. */
  export const outboundSchema =
    PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender$outboundSchema;
}

/** @internal */
export const SexualOrientation$inboundSchema: z.ZodType<
  SexualOrientation,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(SexualOrientation),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const SexualOrientation$outboundSchema: z.ZodType<
  SexualOrientation,
  z.ZodTypeDef,
  SexualOrientation
> = z.union([
  z.nativeEnum(SexualOrientation),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SexualOrientation$ {
  /** @deprecated use `SexualOrientation$inboundSchema` instead. */
  export const inboundSchema = SexualOrientation$inboundSchema;
  /** @deprecated use `SexualOrientation$outboundSchema` instead. */
  export const outboundSchema = SexualOrientation$outboundSchema;
}

/** @internal */
export const PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$inboundSchema:
  z.ZodType<
    PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User,
    z.ZodTypeDef,
    unknown
  > = z.object({
    "Job Level": z.string().optional(),
    "People Manager (Reviews)": z.string().optional(),
    "Remote Work - Location": z.string().optional(),
    "Salary Information": z.string().optional(),
    "Sub Departments": z.string().optional(),
    birthDate: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    ethnicity: Ethnicity$inboundSchema.optional(),
    gender:
      PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender$inboundSchema
        .optional(),
    sexualOrientation: SexualOrientation$inboundSchema.optional(),
    startDate: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      "Job Level": "jobLevel",
      "People Manager (Reviews)": "peopleManagerReviews",
      "Remote Work - Location": "remoteWorkLocation",
      "Salary Information": "salaryInformation",
      "Sub Departments": "subDepartments",
    });
  });

/** @internal */
export type PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$Outbound =
  {
    "Job Level"?: string | undefined;
    "People Manager (Reviews)"?: string | undefined;
    "Remote Work - Location"?: string | undefined;
    "Salary Information"?: string | undefined;
    "Sub Departments"?: string | undefined;
    birthDate?: string | undefined;
    ethnicity?: string | undefined;
    gender?: string | undefined;
    sexualOrientation?: string | undefined;
    startDate?: string | undefined;
  };

/** @internal */
export const PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$outboundSchema:
  z.ZodType<
    PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$Outbound,
    z.ZodTypeDef,
    PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User
  > = z.object({
    jobLevel: z.string().optional(),
    peopleManagerReviews: z.string().optional(),
    remoteWorkLocation: z.string().optional(),
    salaryInformation: z.string().optional(),
    subDepartments: z.string().optional(),
    birthDate: z.date().transform(v => v.toISOString()).optional(),
    ethnicity: Ethnicity$outboundSchema.optional(),
    gender:
      PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserGender$outboundSchema
        .optional(),
    sexualOrientation: SexualOrientation$outboundSchema.optional(),
    startDate: z.date().transform(v => v.toISOString()).optional(),
  }).transform((v) => {
    return remap$(v, {
      jobLevel: "Job Level",
      peopleManagerReviews: "People Manager (Reviews)",
      remoteWorkLocation: "Remote Work - Location",
      salaryInformation: "Salary Information",
      subDepartments: "Sub Departments",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$ {
  /** @deprecated use `PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$inboundSchema` instead. */
  export const inboundSchema =
    PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$inboundSchema;
  /** @deprecated use `PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$outboundSchema` instead. */
  export const outboundSchema =
    PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$outboundSchema;
  /** @deprecated use `PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$Outbound` instead. */
  export type Outbound =
    PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$Outbound;
}

export function propertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserToJSON(
  propertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User:
    PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User,
): string {
  return JSON.stringify(
    PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$outboundSchema
      .parse(
        propertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User,
      ),
  );
}

export function propertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10UserFromJSON(
  jsonString: string,
): SafeParseResult<
  PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User' from JSON`,
  );
}
