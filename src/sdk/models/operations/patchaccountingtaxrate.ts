/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class PatchAccountingTaxrateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    accountingTaxrate?: shared.AccountingTaxrate;

    /**
     * ID of the connection
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connection_id" })
    connectionId: string;

    /**
     * ID of the Taxrate
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class PatchAccountingTaxrateResponse extends SpeakeasyBase {
    /**
     * Successful
     */
    @SpeakeasyMetadata()
    accountingTaxrate?: shared.AccountingTaxrate;

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
