/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateTicketingNoteRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    ticketingNote?: shared.TicketingNote;

    /**
     * ID of the connection
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connection_id" })
    connectionId: string;

    /**
     * Comma-delimited fields to return
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
    fields?: string[];

    /**
     * ID of the Note
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * ID of the ticket
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ticket_id" })
    ticketId: string;
}

export class UpdateTicketingNoteResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Successful
     */
    @SpeakeasyMetadata()
    ticketingNote?: shared.TicketingNote;
}
