/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class UpdateAtsScorecardRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    atsScorecard?: shared.AtsScorecard;

    /**
     * ID of the connection
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connection_id" })
    connectionId: string;

    /**
     * ID of the Scorecard
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class UpdateAtsScorecardResponse extends SpeakeasyBase {
    /**
     * Successful
     */
    @SpeakeasyMetadata()
    atsScorecard?: shared.AtsScorecard;

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
