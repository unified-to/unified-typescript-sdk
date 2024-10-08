/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { timeoffGetHrisTimeoff } from "../funcs/timeoffGetHrisTimeoff.js";
import { timeoffListHrisTimeoffs } from "../funcs/timeoffListHrisTimeoffs.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Timeoff extends ClientSDK {
  /**
   * Retrieve a timeoff
   */
  async getHrisTimeoff(
    request: operations.GetHrisTimeoffRequest,
    options?: RequestOptions,
  ): Promise<shared.HrisTimeoff> {
    return unwrapAsync(timeoffGetHrisTimeoff(
      this,
      request,
      options,
    ));
  }

  /**
   * List all timeoffs
   */
  async listHrisTimeoffs(
    request: operations.ListHrisTimeoffsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.HrisTimeoff>> {
    return unwrapAsync(timeoffListHrisTimeoffs(
      this,
      request,
      options,
    ));
  }
}
