/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { passthroughCreatePassthrough } from "../funcs/passthroughCreatePassthrough.js";
import { passthroughListPassthroughs } from "../funcs/passthroughListPassthroughs.js";
import { passthroughPatchPassthrough } from "../funcs/passthroughPatchPassthrough.js";
import { passthroughRemovePassthrough } from "../funcs/passthroughRemovePassthrough.js";
import { passthroughUpdatePassthrough } from "../funcs/passthroughUpdatePassthrough.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Passthrough extends ClientSDK {
    /**
     * Passthrough POST
     */
    async createPassthrough(
        request: operations.CreatePassthroughRequest,
        options?: RequestOptions
    ): Promise<{ [k: string]: any }> {
        return unwrapAsync(passthroughCreatePassthrough(this, request, options));
    }

    /**
     * Passthrough GET
     */
    async listPassthroughs(
        request: operations.ListPassthroughsRequest,
        options?: RequestOptions
    ): Promise<{ [k: string]: any }> {
        return unwrapAsync(passthroughListPassthroughs(this, request, options));
    }

    /**
     * Passthrough PUT
     */
    async patchPassthrough(
        request: operations.PatchPassthroughRequest,
        options?: RequestOptions
    ): Promise<{ [k: string]: any }> {
        return unwrapAsync(passthroughPatchPassthrough(this, request, options));
    }

    /**
     * Passthrough DELETE
     */
    async removePassthrough(
        request: operations.RemovePassthroughRequest,
        options?: RequestOptions
    ): Promise<{ [k: string]: any }> {
        return unwrapAsync(passthroughRemovePassthrough(this, request, options));
    }

    /**
     * Passthrough PUT
     */
    async updatePassthrough(
        request: operations.UpdatePassthroughRequest,
        options?: RequestOptions
    ): Promise<{ [k: string]: any }> {
        return unwrapAsync(passthroughUpdatePassthrough(this, request, options));
    }
}
