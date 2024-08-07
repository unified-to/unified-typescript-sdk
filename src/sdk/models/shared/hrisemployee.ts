/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
    HrisCompensation,
    HrisCompensation$inboundSchema,
    HrisCompensation$Outbound,
    HrisCompensation$outboundSchema,
} from "./hriscompensation.js";
import {
    HrisEmail,
    HrisEmail$inboundSchema,
    HrisEmail$Outbound,
    HrisEmail$outboundSchema,
} from "./hrisemail.js";
import {
    HrisGroup,
    HrisGroup$inboundSchema,
    HrisGroup$Outbound,
    HrisGroup$outboundSchema,
} from "./hrisgroup.js";
import {
    HrisLocation,
    HrisLocation$inboundSchema,
    HrisLocation$Outbound,
    HrisLocation$outboundSchema,
} from "./hrislocation.js";
import {
    HrisTelephone,
    HrisTelephone$inboundSchema,
    HrisTelephone$Outbound,
    HrisTelephone$outboundSchema,
} from "./hristelephone.js";
import {
    PropertyHrisEmployeeAddress,
    PropertyHrisEmployeeAddress$inboundSchema,
    PropertyHrisEmployeeAddress$Outbound,
    PropertyHrisEmployeeAddress$outboundSchema,
} from "./propertyhrisemployeeaddress.js";
import {
    PropertyHrisEmployeeEmployeeRoles,
    PropertyHrisEmployeeEmployeeRoles$inboundSchema,
    PropertyHrisEmployeeEmployeeRoles$outboundSchema,
} from "./propertyhrisemployeeemployeeroles.js";
import * as z from "zod";

export const EmploymentStatus = {
    Active: "ACTIVE",
    Inactive: "INACTIVE",
} as const;
export type EmploymentStatus = ClosedEnum<typeof EmploymentStatus>;

export const HrisEmployeeEmploymentType = {
    FullTime: "FULL_TIME",
    PartTime: "PART_TIME",
    Contractor: "CONTRACTOR",
    Intern: "INTERN",
    Consultant: "CONSULTANT",
    Volunteer: "VOLUNTEER",
    Casual: "CASUAL",
    Seasonal: "SEASONAL",
    Freelance: "FREELANCE",
    Other: "OTHER",
} as const;
export type HrisEmployeeEmploymentType = ClosedEnum<typeof HrisEmployeeEmploymentType>;

export const HrisEmployeeGender = {
    Male: "MALE",
    Female: "FEMALE",
    Intersex: "INTERSEX",
    Trans: "TRANS",
    NonBinary: "NON_BINARY",
} as const;
export type HrisEmployeeGender = ClosedEnum<typeof HrisEmployeeGender>;

export const MaritalStatus = {
    Married: "MARRIED",
    Single: "SINGLE",
} as const;
export type MaritalStatus = ClosedEnum<typeof MaritalStatus>;

export type HrisEmployee = {
    address?: PropertyHrisEmployeeAddress | undefined;
    bio?: string | undefined;
    companyId?: string | undefined;
    compensation?: Array<HrisCompensation> | undefined;
    createdAt?: Date | undefined;
    currency?: string | undefined;
    dateOfBirth?: Date | undefined;
    department?: string | undefined;
    division?: string | undefined;
    emails?: Array<HrisEmail> | undefined;
    employeeNumber?: string | undefined;
    employeeRoles?: Array<PropertyHrisEmployeeEmployeeRoles> | undefined;
    employmentStatus?: EmploymentStatus | undefined;
    employmentType?: HrisEmployeeEmploymentType | undefined;
    gender?: HrisEmployeeGender | undefined;
    /**
     * Which groups/teams/units that this employee/user belongs to.  May not have all of the Group fields present, but should have id, name, or email.
     */
    groups?: Array<HrisGroup> | undefined;
    hiredAt?: Date | undefined;
    id?: string | undefined;
    imageUrl?: string | undefined;
    languageLocale?: string | undefined;
    location?: string | undefined;
    locations?: Array<HrisLocation> | undefined;
    managerId?: string | undefined;
    maritalStatus?: MaritalStatus | undefined;
    name?: string | undefined;
    pronouns?: string | undefined;
    raw?: { [k: string]: any } | undefined;
    salutation?: string | undefined;
    ssnSin?: string | undefined;
    telephones?: Array<HrisTelephone> | undefined;
    terminatedAt?: Date | undefined;
    timezone?: string | undefined;
    title?: string | undefined;
    updatedAt?: Date | undefined;
};

/** @internal */
export const EmploymentStatus$inboundSchema: z.ZodNativeEnum<typeof EmploymentStatus> =
    z.nativeEnum(EmploymentStatus);

/** @internal */
export const EmploymentStatus$outboundSchema: z.ZodNativeEnum<typeof EmploymentStatus> =
    EmploymentStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentStatus$ {
    /** @deprecated use `EmploymentStatus$inboundSchema` instead. */
    export const inboundSchema = EmploymentStatus$inboundSchema;
    /** @deprecated use `EmploymentStatus$outboundSchema` instead. */
    export const outboundSchema = EmploymentStatus$outboundSchema;
}

/** @internal */
export const HrisEmployeeEmploymentType$inboundSchema: z.ZodNativeEnum<
    typeof HrisEmployeeEmploymentType
> = z.nativeEnum(HrisEmployeeEmploymentType);

/** @internal */
export const HrisEmployeeEmploymentType$outboundSchema: z.ZodNativeEnum<
    typeof HrisEmployeeEmploymentType
> = HrisEmployeeEmploymentType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeeEmploymentType$ {
    /** @deprecated use `HrisEmployeeEmploymentType$inboundSchema` instead. */
    export const inboundSchema = HrisEmployeeEmploymentType$inboundSchema;
    /** @deprecated use `HrisEmployeeEmploymentType$outboundSchema` instead. */
    export const outboundSchema = HrisEmployeeEmploymentType$outboundSchema;
}

/** @internal */
export const HrisEmployeeGender$inboundSchema: z.ZodNativeEnum<typeof HrisEmployeeGender> =
    z.nativeEnum(HrisEmployeeGender);

/** @internal */
export const HrisEmployeeGender$outboundSchema: z.ZodNativeEnum<typeof HrisEmployeeGender> =
    HrisEmployeeGender$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeeGender$ {
    /** @deprecated use `HrisEmployeeGender$inboundSchema` instead. */
    export const inboundSchema = HrisEmployeeGender$inboundSchema;
    /** @deprecated use `HrisEmployeeGender$outboundSchema` instead. */
    export const outboundSchema = HrisEmployeeGender$outboundSchema;
}

/** @internal */
export const MaritalStatus$inboundSchema: z.ZodNativeEnum<typeof MaritalStatus> =
    z.nativeEnum(MaritalStatus);

/** @internal */
export const MaritalStatus$outboundSchema: z.ZodNativeEnum<typeof MaritalStatus> =
    MaritalStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MaritalStatus$ {
    /** @deprecated use `MaritalStatus$inboundSchema` instead. */
    export const inboundSchema = MaritalStatus$inboundSchema;
    /** @deprecated use `MaritalStatus$outboundSchema` instead. */
    export const outboundSchema = MaritalStatus$outboundSchema;
}

/** @internal */
export const HrisEmployee$inboundSchema: z.ZodType<HrisEmployee, z.ZodTypeDef, unknown> = z
    .object({
        address: PropertyHrisEmployeeAddress$inboundSchema.optional(),
        bio: z.string().optional(),
        company_id: z.string().optional(),
        compensation: z.array(HrisCompensation$inboundSchema).optional(),
        created_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        currency: z.string().optional(),
        date_of_birth: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        department: z.string().optional(),
        division: z.string().optional(),
        emails: z.array(HrisEmail$inboundSchema).optional(),
        employee_number: z.string().optional(),
        employee_roles: z.array(PropertyHrisEmployeeEmployeeRoles$inboundSchema).optional(),
        employment_status: EmploymentStatus$inboundSchema.optional(),
        employment_type: HrisEmployeeEmploymentType$inboundSchema.optional(),
        gender: HrisEmployeeGender$inboundSchema.optional(),
        groups: z.array(HrisGroup$inboundSchema).optional(),
        hired_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        id: z.string().optional(),
        image_url: z.string().optional(),
        language_locale: z.string().optional(),
        location: z.string().optional(),
        locations: z.array(HrisLocation$inboundSchema).optional(),
        manager_id: z.string().optional(),
        marital_status: MaritalStatus$inboundSchema.optional(),
        name: z.string().optional(),
        pronouns: z.string().optional(),
        raw: z.record(z.any()).optional(),
        salutation: z.string().optional(),
        ssn_sin: z.string().optional(),
        telephones: z.array(HrisTelephone$inboundSchema).optional(),
        terminated_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        timezone: z.string().optional(),
        title: z.string().optional(),
        updated_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            company_id: "companyId",
            created_at: "createdAt",
            date_of_birth: "dateOfBirth",
            employee_number: "employeeNumber",
            employee_roles: "employeeRoles",
            employment_status: "employmentStatus",
            employment_type: "employmentType",
            hired_at: "hiredAt",
            image_url: "imageUrl",
            language_locale: "languageLocale",
            manager_id: "managerId",
            marital_status: "maritalStatus",
            ssn_sin: "ssnSin",
            terminated_at: "terminatedAt",
            updated_at: "updatedAt",
        });
    });

/** @internal */
export type HrisEmployee$Outbound = {
    address?: PropertyHrisEmployeeAddress$Outbound | undefined;
    bio?: string | undefined;
    company_id?: string | undefined;
    compensation?: Array<HrisCompensation$Outbound> | undefined;
    created_at?: string | undefined;
    currency?: string | undefined;
    date_of_birth?: string | undefined;
    department?: string | undefined;
    division?: string | undefined;
    emails?: Array<HrisEmail$Outbound> | undefined;
    employee_number?: string | undefined;
    employee_roles?: Array<string> | undefined;
    employment_status?: string | undefined;
    employment_type?: string | undefined;
    gender?: string | undefined;
    groups?: Array<HrisGroup$Outbound> | undefined;
    hired_at?: string | undefined;
    id?: string | undefined;
    image_url?: string | undefined;
    language_locale?: string | undefined;
    location?: string | undefined;
    locations?: Array<HrisLocation$Outbound> | undefined;
    manager_id?: string | undefined;
    marital_status?: string | undefined;
    name?: string | undefined;
    pronouns?: string | undefined;
    raw?: { [k: string]: any } | undefined;
    salutation?: string | undefined;
    ssn_sin?: string | undefined;
    telephones?: Array<HrisTelephone$Outbound> | undefined;
    terminated_at?: string | undefined;
    timezone?: string | undefined;
    title?: string | undefined;
    updated_at?: string | undefined;
};

/** @internal */
export const HrisEmployee$outboundSchema: z.ZodType<
    HrisEmployee$Outbound,
    z.ZodTypeDef,
    HrisEmployee
> = z
    .object({
        address: PropertyHrisEmployeeAddress$outboundSchema.optional(),
        bio: z.string().optional(),
        companyId: z.string().optional(),
        compensation: z.array(HrisCompensation$outboundSchema).optional(),
        createdAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        currency: z.string().optional(),
        dateOfBirth: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        department: z.string().optional(),
        division: z.string().optional(),
        emails: z.array(HrisEmail$outboundSchema).optional(),
        employeeNumber: z.string().optional(),
        employeeRoles: z.array(PropertyHrisEmployeeEmployeeRoles$outboundSchema).optional(),
        employmentStatus: EmploymentStatus$outboundSchema.optional(),
        employmentType: HrisEmployeeEmploymentType$outboundSchema.optional(),
        gender: HrisEmployeeGender$outboundSchema.optional(),
        groups: z.array(HrisGroup$outboundSchema).optional(),
        hiredAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        id: z.string().optional(),
        imageUrl: z.string().optional(),
        languageLocale: z.string().optional(),
        location: z.string().optional(),
        locations: z.array(HrisLocation$outboundSchema).optional(),
        managerId: z.string().optional(),
        maritalStatus: MaritalStatus$outboundSchema.optional(),
        name: z.string().optional(),
        pronouns: z.string().optional(),
        raw: z.record(z.any()).optional(),
        salutation: z.string().optional(),
        ssnSin: z.string().optional(),
        telephones: z.array(HrisTelephone$outboundSchema).optional(),
        terminatedAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        timezone: z.string().optional(),
        title: z.string().optional(),
        updatedAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            companyId: "company_id",
            createdAt: "created_at",
            dateOfBirth: "date_of_birth",
            employeeNumber: "employee_number",
            employeeRoles: "employee_roles",
            employmentStatus: "employment_status",
            employmentType: "employment_type",
            hiredAt: "hired_at",
            imageUrl: "image_url",
            languageLocale: "language_locale",
            managerId: "manager_id",
            maritalStatus: "marital_status",
            ssnSin: "ssn_sin",
            terminatedAt: "terminated_at",
            updatedAt: "updated_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployee$ {
    /** @deprecated use `HrisEmployee$inboundSchema` instead. */
    export const inboundSchema = HrisEmployee$inboundSchema;
    /** @deprecated use `HrisEmployee$outboundSchema` instead. */
    export const outboundSchema = HrisEmployee$outboundSchema;
    /** @deprecated use `HrisEmployee$Outbound` instead. */
    export type Outbound = HrisEmployee$Outbound;
}
