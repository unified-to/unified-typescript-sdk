/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum IssueStatus {
    Completed = "COMPLETED",
    New = "NEW",
    Roadmap = "ROADMAP",
    InProgress = "IN_PROGRESS",
    OnHold = "ON_HOLD",
    Validating = "VALIDATING",
    Rejected = "REJECTED",
}

export enum IssueType {
    Bug = "BUG",
    FeatureRequest = "FEATURE_REQUEST",
    Inquiry = "INQUIRY",
}

export class Issue extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "resolution_time" })
    resolutionTime?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: IssueStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: IssueType;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "workspace_id" })
    workspaceId: string;
}
