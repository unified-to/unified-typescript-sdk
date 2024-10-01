/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { UnifiedToCore } from "../core.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Create connection indirectly
 *
 * @remarks
 * Returns an authorization URL for the specified integration.  Once a successful authorization occurs, a new connection is created.
 */
export async function unifiedGetUnifiedIntegrationAuth(
  client: UnifiedToCore,
  request: operations.GetUnifiedIntegrationAuthRequest,
  options?: RequestOptions,
): Promise<
  Result<
    string,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input = request;

  const parsed = safeParse(
    input,
    (value) =>
      operations.GetUnifiedIntegrationAuthRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    integration_type: encodeSimple(
      "integration_type",
      payload.integration_type,
      { explode: false, charEncoding: "percent" },
    ),
    workspace_id: encodeSimple("workspace_id", payload.workspace_id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/unified/integration/auth/{workspace_id}/{integration_type}",
  )(pathParams);

  const query = encodeFormQuery({
    "env": payload.env,
    "external_xref": payload.external_xref,
    "failure_redirect": payload.failure_redirect,
    "lang": payload.lang,
    "redirect": payload.redirect,
    "scopes": payload.scopes,
    "state": payload.state,
    "subdomain": payload.subdomain,
    "success_redirect": payload.success_redirect,
  });

  const headers = new Headers({
    Accept: "text/plain",
  });

  const securityInput = await extractSecurity(client._options.security);
  const context = {
    operationID: "getUnifiedIntegrationAuth",
    oAuth2Scopes: [],
    securitySource: client._options.security,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    string,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.text(200, z.string()),
    M.fail(["4XX", "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
