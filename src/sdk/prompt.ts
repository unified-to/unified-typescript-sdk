/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { genaiCreateGenaiPrompt } from "../funcs/genaiCreateGenaiPrompt.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Prompt extends ClientSDK {
  /**
   * Create a prompt
   */
  async createGenaiPrompt(
    request: operations.CreateGenaiPromptRequest,
    options?: RequestOptions,
  ): Promise<shared.GenaiPrompt> {
    return unwrapAsync(genaiCreateGenaiPrompt(
      this,
      request,
      options,
    ));
  }
}
