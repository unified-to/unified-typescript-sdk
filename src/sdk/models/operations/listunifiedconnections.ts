/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export enum Categories {
    Passthrough = "passthrough",
    Hris = "hris",
    Ats = "ats",
    Auth = "auth",
    Crm = "crm",
    Enrich = "enrich",
    Martech = "martech",
    Ticketing = "ticketing",
    Uc = "uc",
    Accounting = "accounting",
    Storage = "storage",
    Commerce = "commerce",
    Payment = "payment",
    Genai = "genai",
    Messaging = "messaging",
    Kms = "kms",
    Task = "task",
}

export class ListUnifiedConnectionsRequest extends SpeakeasyBase {
    /**
     * Filter the results on these categories
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categories" })
    categories?: Categories[];

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=env" })
    env?: string;

    /**
     * Filter the results to only those integrations for your user referenced by this value
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=external_xref" })
    externalXref?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
    order?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
    sort?: string;

    /**
     * Return only results whose updated date is equal or greater to this value
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_gte" })
    updatedGte?: Date;
}

export class ListUnifiedConnectionsResponse extends SpeakeasyBase {
    /**
     * Successful
     */
    @SpeakeasyMetadata({ elemType: shared.Connection })
    connections?: shared.Connection[];

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
}
