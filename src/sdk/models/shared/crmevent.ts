/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyCrmEventCall } from "./propertycrmeventcall";
import { PropertyCrmEventEmail } from "./propertycrmeventemail";
import { PropertyCrmEventMeeting } from "./propertycrmeventmeeting";
import { PropertyCrmEventNote } from "./propertycrmeventnote";
import { PropertyCrmEventTask } from "./propertycrmeventtask";
import { Expose, Transform, Type } from "class-transformer";

export enum CrmEventType {
    Note = "NOTE",
    Email = "EMAIL",
    Task = "TASK",
    Meeting = "MEETING",
    Call = "CALL",
}

/**
 * An event represents an event, activity, or engagement and is always associated with a deal, contact, or company
 */
export class CrmEvent extends SpeakeasyBase {
    /**
     * The call object, when type = call
     */
    @SpeakeasyMetadata()
    @Expose({ name: "call" })
    @Type(() => PropertyCrmEventCall)
    call?: PropertyCrmEventCall;

    /**
     * An array of company IDs associated with this event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "company_ids" })
    companyIds?: string[];

    /**
     * An array of contact IDs associated with this event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contact_ids" })
    contactIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * An array of deal IDs associated with this event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deal_ids" })
    dealIds?: string[];

    /**
     * The email object, when type = email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    @Type(() => PropertyCrmEventEmail)
    email?: PropertyCrmEventEmail;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lead_ids" })
    leadIds?: string[];

    /**
     * The meeting object, when type = meeting
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meeting" })
    @Type(() => PropertyCrmEventMeeting)
    meeting?: PropertyCrmEventMeeting;

    /**
     * The note object, when type = note
     */
    @SpeakeasyMetadata()
    @Expose({ name: "note" })
    @Type(() => PropertyCrmEventNote)
    note?: PropertyCrmEventNote;

    /**
     * The raw data returned by the integration for this event.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: Record<string, any>;

    /**
     * The task object, when type = task
     */
    @SpeakeasyMetadata()
    @Expose({ name: "task" })
    @Type(() => PropertyCrmEventTask)
    task?: PropertyCrmEventTask;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: CrmEventType;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId?: string;
}
