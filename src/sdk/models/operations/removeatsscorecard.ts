/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class RemoveAtsScorecardSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=authorization",
    })
    jwt: string;
}

export class RemoveAtsScorecardRequest extends SpeakeasyBase {
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

export class RemoveAtsScorecardResponse extends SpeakeasyBase {
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
    @SpeakeasyMetadata()
    res?: string;
}
