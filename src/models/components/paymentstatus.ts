/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum PaymentStatus {
    Draft = "draft",
    Partial = "partial",
    Error = "error",
    Adjusted = "adjusted",
    Pending = "pending",
    Processing = "processing",
    Succeeded = "succeeded",
    Failed = "failed",
    Cancelled = "cancelled",
    Refunded = "refunded",
    PartiallyRefunded = "partially-refunded",
    Disputed = "disputed",
    Overdue = "overdue",
}

/** @internal */
export const PaymentStatus$ = z.nativeEnum(PaymentStatus);