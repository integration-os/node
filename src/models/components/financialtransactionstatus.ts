/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum FinancialTransactionStatus {
    Pending = "pending",
    Cleared = "cleared",
    Cancelled = "cancelled",
    Failed = "failed",
    Refunded = "refunded",
    Disputed = "disputed",
    Authorized = "authorized",
    SettlementInProgress = "settlement-in-progress",
}

/** @internal */
export const FinancialTransactionStatus$ = z.nativeEnum(FinancialTransactionStatus);
