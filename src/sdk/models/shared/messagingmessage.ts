/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MessagingAttachment } from "./messagingattachment";
import { MessagingMember } from "./messagingmember";
import { PropertyMessagingMessageAuthorMember } from "./propertymessagingmessageauthormember";
import { Expose, Type } from "class-transformer";

export class MessagingMessage extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: MessagingAttachment })
    @Expose({ name: "attachments" })
    @Type(() => MessagingAttachment)
    attachments?: MessagingAttachment[];

    @SpeakeasyMetadata()
    @Expose({ name: "author_member" })
    @Type(() => PropertyMessagingMessageAuthorMember)
    authorMember?: PropertyMessagingMessageAuthorMember;

    @SpeakeasyMetadata()
    @Expose({ name: "channel_id" })
    channelId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: string;

    @SpeakeasyMetadata({ elemType: MessagingMember })
    @Expose({ name: "destination_members" })
    @Type(() => MessagingMember)
    destinationMembers?: MessagingMember[];

    @SpeakeasyMetadata({ elemType: MessagingMember })
    @Expose({ name: "hidden_members" })
    @Type(() => MessagingMember)
    hiddenMembers?: MessagingMember[];

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata({ elemType: MessagingMember })
    @Expose({ name: "mentioned_members" })
    @Type(() => MessagingMember)
    mentionedMembers?: MessagingMember[];

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "message_html" })
    messageHtml?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "parent_message_id" })
    parentMessageId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "subject" })
    subject?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "web_url" })
    webUrl?: string;
}
