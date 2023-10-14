/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PatchMartechMemberRequest extends SpeakeasyBase {
    /**
     * A member represents a person
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    marketingMember?: shared.MarketingMember;

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
     * ID of the Member
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * ID of the list
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=list_id" })
    listId: string;
}

export class PatchMartechMemberResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successful
     */
    @SpeakeasyMetadata()
    marketingMember?: shared.MarketingMember;

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
