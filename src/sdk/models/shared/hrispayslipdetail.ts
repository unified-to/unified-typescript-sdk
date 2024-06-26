/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum HrisPayslipDetailType {
    EarningSalary = "EARNING_SALARY",
    EarningOvertime = "EARNING_OVERTIME",
    EarningTip = "EARNING_TIP",
    EarningBonus = "EARNING_BONUS",
    EarningCommission = "EARNING_COMMISSION",
    EarningAdjustment = "EARNING_ADJUSTMENT",
    Earning = "EARNING",
    PretaxDeduction = "PRETAX_DEDUCTION",
    PretaxDeductionHealthInsurance = "PRETAX_DEDUCTION_HEALTH_INSURANCE",
    PretaxDeductionRetirement = "PRETAX_DEDUCTION_RETIREMENT",
    PretaxDeductionHra = "PRETAX_DEDUCTION_HRA",
    TaxFederal = "TAX_FEDERAL",
    TaxRegion = "TAX_REGION",
    TaxLocal = "TAX_LOCAL",
    PosttaxBenefit = "POSTTAX_BENEFIT",
    PosttaxGarnishment = "POSTTAX_GARNISHMENT",
    Reimbursement = "REIMBURSEMENT",
}

export class HrisPayslipDetail extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "company_amount" })
    companyAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "employee_amount" })
    employeeAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: HrisPayslipDetailType;
}
