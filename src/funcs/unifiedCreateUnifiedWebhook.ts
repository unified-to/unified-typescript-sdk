/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { UnifiedToCore } from "../core.js";
import { encodeFormQuery, encodeJSON } from "../lib/encodings.js";
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
import * as shared from "../sdk/models/shared/index.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Create webhook subscription
 *
 * @remarks
 * The data payload received by your server is described at https://docs.unified.to/unified/overview. The `interval` field can be set as low as 1 minute for paid accounts, and 60 minutes for free accounts.
 */
export async function unifiedCreateUnifiedWebhook(
  client: UnifiedToCore,
  request: operations.CreateUnifiedWebhookRequest,
  options?: RequestOptions,
): Promise<
  Result<
    shared.Webhook,
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
      operations.CreateUnifiedWebhookRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.Webhook, { explode: true });

  const path = pathToFunc("/unified/webhook")();

  const query = encodeFormQuery({
    "include_all": payload.include_all,
  });

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const securityInput = await extractSecurity(client._options.security);
  const context = {
    operationID: "createUnifiedWebhook",
    oAuth2Scopes: [],
    securitySource: client._options.security,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
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
    shared.Webhook,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, shared.Webhook$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
