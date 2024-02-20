/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum ExpenseApprovalStatus {
    New = "new",
    Pending = "pending",
    Approved = "approved",
    Denied = "denied",
    Reimbursed = "reimbursed",
    Reviewing = "reviewing",
    Cancelled = "cancelled",
    Processed = "processed",
}

/** @internal */
export const ExpenseApprovalStatus$ = z.nativeEnum(ExpenseApprovalStatus);
