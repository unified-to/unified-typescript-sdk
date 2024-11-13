/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeeCreateHrisEmployee } from "../funcs/employeeCreateHrisEmployee.js";
import { employeeGetHrisEmployee } from "../funcs/employeeGetHrisEmployee.js";
import { employeeListHrisEmployees } from "../funcs/employeeListHrisEmployees.js";
import { employeePatchHrisEmployee } from "../funcs/employeePatchHrisEmployee.js";
import { employeeRemoveHrisEmployee } from "../funcs/employeeRemoveHrisEmployee.js";
import { employeeUpdateHrisEmployee } from "../funcs/employeeUpdateHrisEmployee.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Employee extends ClientSDK {
  /**
   * Create an employee
   */
  async createHrisEmployee(
    request: operations.CreateHrisEmployeeRequest,
    options?: RequestOptions,
  ): Promise<shared.HrisEmployee> {
    return unwrapAsync(employeeCreateHrisEmployee(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve an employee
   */
  async getHrisEmployee(
    request: operations.GetHrisEmployeeRequest,
    options?: RequestOptions,
  ): Promise<shared.HrisEmployee> {
    return unwrapAsync(employeeGetHrisEmployee(
      this,
      request,
      options,
    ));
  }

  /**
   * List all employees
   */
  async listHrisEmployees(
    request: operations.ListHrisEmployeesRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.HrisEmployee>> {
    return unwrapAsync(employeeListHrisEmployees(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an employee
   */
  async patchHrisEmployee(
    request: operations.PatchHrisEmployeeRequest,
    options?: RequestOptions,
  ): Promise<shared.HrisEmployee> {
    return unwrapAsync(employeePatchHrisEmployee(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove an employee
   */
  async removeHrisEmployee(
    request: operations.RemoveHrisEmployeeRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveHrisEmployeeResponse | undefined> {
    return unwrapAsync(employeeRemoveHrisEmployee(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an employee
   */
  async updateHrisEmployee(
    request: operations.UpdateHrisEmployeeRequest,
    options?: RequestOptions,
  ): Promise<shared.HrisEmployee> {
    return unwrapAsync(employeeUpdateHrisEmployee(
      this,
      request,
      options,
    ));
  }
}
