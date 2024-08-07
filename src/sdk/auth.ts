/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { authGetUnifiedIntegrationAuth } from "../funcs/authGetUnifiedIntegrationAuth.js";
import { authGetUnifiedIntegrationLogin } from "../funcs/authGetUnifiedIntegrationLogin.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Auth extends ClientSDK {
    /**
     * Create connection indirectly
     *
     * @remarks
     * Returns an authorization URL for the specified integration.  Once a successful authorization occurs, a new connection is created.
     */
    async getUnifiedIntegrationAuth(
        request: operations.GetUnifiedIntegrationAuthRequest,
        options?: RequestOptions
    ): Promise<string> {
        return unwrapAsync(authGetUnifiedIntegrationAuth(this, request, options));
    }

    /**
     * Sign in a user
     *
     * @remarks
     * Returns an authentication URL for the specified integration.  Once a successful authentication occurs, the name and email are returned inside a jwt parameter, which is a JSON web token that is base-64 encoded.
     */
    async getUnifiedIntegrationLogin(
        request: operations.GetUnifiedIntegrationLoginRequest,
        options?: RequestOptions
    ): Promise<string> {
        return unwrapAsync(authGetUnifiedIntegrationLogin(this, request, options));
    }
}
