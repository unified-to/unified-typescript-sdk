/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { locationCreateCommerceLocation } from "../funcs/locationCreateCommerceLocation.js";
import { locationCreateHrisLocation } from "../funcs/locationCreateHrisLocation.js";
import { locationGetCommerceLocation } from "../funcs/locationGetCommerceLocation.js";
import { locationGetHrisLocation } from "../funcs/locationGetHrisLocation.js";
import { locationListCommerceLocations } from "../funcs/locationListCommerceLocations.js";
import { locationListHrisLocations } from "../funcs/locationListHrisLocations.js";
import { locationPatchCommerceLocation } from "../funcs/locationPatchCommerceLocation.js";
import { locationPatchHrisLocation } from "../funcs/locationPatchHrisLocation.js";
import { locationRemoveCommerceLocation } from "../funcs/locationRemoveCommerceLocation.js";
import { locationRemoveHrisLocation } from "../funcs/locationRemoveHrisLocation.js";
import { locationUpdateCommerceLocation } from "../funcs/locationUpdateCommerceLocation.js";
import { locationUpdateHrisLocation } from "../funcs/locationUpdateHrisLocation.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Location extends ClientSDK {
  /**
   * Create a location
   */
  async createCommerceLocation(
    request: operations.CreateCommerceLocationRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceLocation> {
    return unwrapAsync(locationCreateCommerceLocation(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a location
   */
  async createHrisLocation(
    request: operations.CreateHrisLocationRequest,
    options?: RequestOptions,
  ): Promise<shared.HrisLocation> {
    return unwrapAsync(locationCreateHrisLocation(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a location
   */
  async getCommerceLocation(
    request: operations.GetCommerceLocationRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceLocation> {
    return unwrapAsync(locationGetCommerceLocation(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a location
   */
  async getHrisLocation(
    request: operations.GetHrisLocationRequest,
    options?: RequestOptions,
  ): Promise<shared.HrisLocation> {
    return unwrapAsync(locationGetHrisLocation(
      this,
      request,
      options,
    ));
  }

  /**
   * List all locations
   */
  async listCommerceLocations(
    request: operations.ListCommerceLocationsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.CommerceLocation>> {
    return unwrapAsync(locationListCommerceLocations(
      this,
      request,
      options,
    ));
  }

  /**
   * List all locations
   */
  async listHrisLocations(
    request: operations.ListHrisLocationsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.HrisLocation>> {
    return unwrapAsync(locationListHrisLocations(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a location
   */
  async patchCommerceLocation(
    request: operations.PatchCommerceLocationRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceLocation> {
    return unwrapAsync(locationPatchCommerceLocation(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a location
   */
  async patchHrisLocation(
    request: operations.PatchHrisLocationRequest,
    options?: RequestOptions,
  ): Promise<shared.HrisLocation> {
    return unwrapAsync(locationPatchHrisLocation(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a location
   */
  async removeCommerceLocation(
    request: operations.RemoveCommerceLocationRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(locationRemoveCommerceLocation(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a location
   */
  async removeHrisLocation(
    request: operations.RemoveHrisLocationRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(locationRemoveHrisLocation(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a location
   */
  async updateCommerceLocation(
    request: operations.UpdateCommerceLocationRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceLocation> {
    return unwrapAsync(locationUpdateCommerceLocation(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a location
   */
  async updateHrisLocation(
    request: operations.UpdateHrisLocationRequest,
    options?: RequestOptions,
  ): Promise<shared.HrisLocation> {
    return unwrapAsync(locationUpdateHrisLocation(
      this,
      request,
      options,
    ));
  }
}
