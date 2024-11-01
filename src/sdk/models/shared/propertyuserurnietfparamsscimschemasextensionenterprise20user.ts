/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  PropertyPropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserManager,
  PropertyPropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserManager$inboundSchema,
  PropertyPropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserManager$Outbound,
  PropertyPropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserManager$outboundSchema,
} from "./propertypropertyuserurnietfparamsscimschemasextensionenterprise20usermanager.js";
import {
  Undefined,
  Undefined$inboundSchema,
  Undefined$Outbound,
  Undefined$outboundSchema,
} from "./undefined.js";

export const PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender =
  {
    Female: "female",
    Male: "male",
  } as const;
export type PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender =
  ClosedEnum<
    typeof PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender
  >;

export const Level = {
  JuniorEngineer: "Junior Engineer",
} as const;
export type Level = ClosedEnum<typeof Level>;

export type PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20User = {
  additionalManagers?: Array<Undefined> | undefined;
  birthday?: Date | undefined;
  costCenter?: string | undefined;
  department?: string | undefined;
  division?: string | undefined;
  employeeNumber?: string | undefined;
  endDate?: Date | undefined;
  gender?:
    | PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender
    | undefined;
  level?: Level | undefined;
  location?: string | undefined;
  manager?:
    | PropertyPropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserManager
    | undefined;
  organization?: string | undefined;
  startDate?: Date | undefined;
};

/** @internal */
export const PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender$inboundSchema:
  z.ZodNativeEnum<
    typeof PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender
  > = z.nativeEnum(
    PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender,
  );

/** @internal */
export const PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender$outboundSchema:
  z.ZodNativeEnum<
    typeof PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender
  > =
    PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender$ {
  /** @deprecated use `PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender$inboundSchema` instead. */
  export const inboundSchema =
    PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender$inboundSchema;
  /** @deprecated use `PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender$outboundSchema` instead. */
  export const outboundSchema =
    PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender$outboundSchema;
}

/** @internal */
export const Level$inboundSchema: z.ZodNativeEnum<typeof Level> = z.nativeEnum(
  Level,
);

/** @internal */
export const Level$outboundSchema: z.ZodNativeEnum<typeof Level> =
  Level$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Level$ {
  /** @deprecated use `Level$inboundSchema` instead. */
  export const inboundSchema = Level$inboundSchema;
  /** @deprecated use `Level$outboundSchema` instead. */
  export const outboundSchema = Level$outboundSchema;
}

/** @internal */
export const PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20User$inboundSchema:
  z.ZodType<
    PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20User,
    z.ZodTypeDef,
    unknown
  > = z.object({
    additionalManagers: z.array(Undefined$inboundSchema).optional(),
    birthday: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    costCenter: z.string().optional(),
    department: z.string().optional(),
    division: z.string().optional(),
    employeeNumber: z.string().optional(),
    endDate: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    gender:
      PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender$inboundSchema
        .optional(),
    level: Level$inboundSchema.optional(),
    location: z.string().optional(),
    manager:
      PropertyPropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserManager$inboundSchema
        .optional(),
    organization: z.string().optional(),
    startDate: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
  });

/** @internal */
export type PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20User$Outbound =
  {
    additionalManagers?: Array<Undefined$Outbound> | undefined;
    birthday?: string | undefined;
    costCenter?: string | undefined;
    department?: string | undefined;
    division?: string | undefined;
    employeeNumber?: string | undefined;
    endDate?: string | undefined;
    gender?: string | undefined;
    level?: string | undefined;
    location?: string | undefined;
    manager?:
      | PropertyPropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserManager$Outbound
      | undefined;
    organization?: string | undefined;
    startDate?: string | undefined;
  };

/** @internal */
export const PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20User$outboundSchema:
  z.ZodType<
    PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20User$Outbound,
    z.ZodTypeDef,
    PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20User
  > = z.object({
    additionalManagers: z.array(Undefined$outboundSchema).optional(),
    birthday: z.date().transform(v => v.toISOString()).optional(),
    costCenter: z.string().optional(),
    department: z.string().optional(),
    division: z.string().optional(),
    employeeNumber: z.string().optional(),
    endDate: z.date().transform(v => v.toISOString()).optional(),
    gender:
      PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserGender$outboundSchema
        .optional(),
    level: Level$outboundSchema.optional(),
    location: z.string().optional(),
    manager:
      PropertyPropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20UserManager$outboundSchema
        .optional(),
    organization: z.string().optional(),
    startDate: z.date().transform(v => v.toISOString()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20User$ {
  /** @deprecated use `PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20User$inboundSchema` instead. */
  export const inboundSchema =
    PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20User$inboundSchema;
  /** @deprecated use `PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20User$outboundSchema` instead. */
  export const outboundSchema =
    PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20User$outboundSchema;
  /** @deprecated use `PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20User$Outbound` instead. */
  export type Outbound =
    PropertyUserUrnIetfParamsScimSchemasExtensionEnterprise20User$Outbound;
}
