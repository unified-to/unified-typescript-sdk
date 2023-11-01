/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { HrisEmail } from "./hrisemail";
import { HrisTelephone } from "./hristelephone";
import { PropertyHrisEmployeeAddress } from "./propertyhrisemployeeaddress";
import { PropertyHrisEmployeeRaw } from "./propertyhrisemployeeraw";
import { Expose, Transform, Type } from "class-transformer";

export enum EmploymentStatus {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
}

export enum HrisEmployeeEmploymentType {
    FullTime = "FULL_TIME",
    PartTime = "PART_TIME",
    Contractor = "CONTRACTOR",
    Intern = "INTERN",
    Consultant = "CONSULTANT",
    Volunteer = "VOLUNTEER",
    Casual = "CASUAL",
    Seasonal = "SEASONAL",
    Freelance = "FREELANCE",
    Other = "OTHER",
}

export enum HrisEmployeeGender {
    Male = "MALE",
    Female = "FEMALE",
    Intersex = "INTERSEX",
    Trans = "TRANS",
    NonBinary = "NON_BINARY",
}

export enum MaritalStatus {
    Married = "MARRIED",
    Single = "SINGLE",
}

export class HrisEmployee extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => PropertyHrisEmployeeAddress)
    address?: PropertyHrisEmployeeAddress;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date_of_birth" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    dateOfBirth?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    department?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "division" })
    division?: string;

    @SpeakeasyMetadata({ elemType: HrisEmail })
    @Expose({ name: "emails" })
    @Type(() => HrisEmail)
    emails?: HrisEmail[];

    @SpeakeasyMetadata()
    @Expose({ name: "employee_number" })
    employeeNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "employment_status" })
    employmentStatus?: EmploymentStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "employment_type" })
    employmentType?: HrisEmployeeEmploymentType;

    @SpeakeasyMetadata()
    @Expose({ name: "gender" })
    gender?: HrisEmployeeGender;

    @SpeakeasyMetadata()
    @Expose({ name: "hired_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    hiredAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "image_url" })
    imageUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "language_locale" })
    languageLocale?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "location" })
    location?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "manager_id" })
    managerId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "marital_status" })
    maritalStatus?: MaritalStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    @Type(() => PropertyHrisEmployeeRaw)
    raw?: PropertyHrisEmployeeRaw;

    @SpeakeasyMetadata({ elemType: HrisTelephone })
    @Expose({ name: "telephones" })
    @Type(() => HrisTelephone)
    telephones?: HrisTelephone[];

    @SpeakeasyMetadata()
    @Expose({ name: "terminated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    terminatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "timezone" })
    timezone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
