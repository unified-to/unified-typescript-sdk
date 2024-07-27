/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ListUnifiedApicallsRequest extends SpeakeasyBase {
    /**
     * Filter the results to just this integration's API calls
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connection_id" })
    connectionId?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=env" })
    env?: string;

    /**
     * Filter the results for API Calls with errors
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=error" })
    error?: boolean;

    /**
     * Filter the results to only those integrations for your user referenced by this value
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=external_xref" })
    externalXref?: string;

    /**
     * Filter the results for connections with this integration
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=integration_type" })
    integrationType?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: number;

    /**
     * Return only results whose updated date is equal or greater to this value
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_gte" })
    updatedGte?: Date;
}

export class ListUnifiedApicallsResponse extends SpeakeasyBase {
    /**
     * Successful
     */
    @SpeakeasyMetadata({ elemType: shared.ApiCall })
    apiCalls?: shared.ApiCall[];

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
