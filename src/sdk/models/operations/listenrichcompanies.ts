/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ListEnrichCompaniesRequest extends SpeakeasyBase {
    /**
     * ID of the connection
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connection_id" })
    connectionId: string;

    /**
     * The domain of the company to search
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" })
    domain?: string;

    /**
     * The name of the company to search
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
    name?: string;
}

export class ListEnrichCompaniesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successful
     */
    @SpeakeasyMetadata()
    enrichCompany?: shared.EnrichCompany;

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
