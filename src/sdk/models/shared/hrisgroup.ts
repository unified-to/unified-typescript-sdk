/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyHrisGroupRaw } from "./propertyhrisgroupraw";
import { Expose, Transform, Type } from "class-transformer";

export enum HrisGroupType {
    Team = "TEAM",
    Group = "GROUP",
    Department = "DEPARTMENT",
    Division = "DIVISION",
    BusinessUnit = "BUSINESS_UNIT",
    Branch = "BRANCH",
    SubDepartment = "SUB_DEPARTMENT",
}

export class HrisGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "employee_ids" })
    employeeIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "is_active" })
    isActive?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "manager_ids" })
    managerIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "parent_id" })
    parentId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    @Type(() => PropertyHrisGroupRaw)
    raw?: PropertyHrisGroupRaw;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: HrisGroupType;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
