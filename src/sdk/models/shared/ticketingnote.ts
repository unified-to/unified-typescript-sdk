/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyTicketingNoteRaw } from "./propertyticketingnoteraw";
import { Expose, Transform, Type } from "class-transformer";

export class TicketingNote extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "agent_id" })
    agentId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "customer_id" })
    customerId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    @Type(() => PropertyTicketingNoteRaw)
    raw: PropertyTicketingNoteRaw;

    @SpeakeasyMetadata()
    @Expose({ name: "ticket_id" })
    ticketId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt?: string;
}
