/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListAccountingPaymentsRequest extends SpeakeasyBase {
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

    /**
     * The invoice ID to filter results
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=invoice_id" })
    invoiceId?: string;

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

export class ListAccountingPaymentsResponse extends SpeakeasyBase {
    /**
     * Successful
     */
    @SpeakeasyMetadata({ elemType: shared.AccountingPayment })
    accountingPayments?: shared.AccountingPayment[];

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
}