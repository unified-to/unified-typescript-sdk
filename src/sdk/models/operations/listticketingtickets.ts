/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ListTicketingTicketsRequest extends SpeakeasyBase {
    /**
     * The agent ID to filter results
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=agent_id" })
    agentId?: string;

    /**
     * ID of the connection
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connection_id" })
    connectionId: string;

    /**
     * The customer ID to filter results
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customer_id" })
    customerId?: string;

    /**
     * Comma-delimited fields to return
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
    fields?: string[];

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
    order?: string;

    /**
     * Query string to search. eg. email address or name
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
    query?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
    sort?: string;

    /**
     * Return only results whose updated date is equal or greater to this value
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_gte" })
    updatedGte?: Date;
}

export class ListTicketingTicketsResponse extends SpeakeasyBase {
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
    rawResponse: AxiosResponse;

    /**
     * Successful
     */
    @SpeakeasyMetadata({ elemType: shared.TicketingTicket })
    ticketingTickets?: shared.TicketingTicket[];
}
