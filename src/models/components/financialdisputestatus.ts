/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum FinancialDisputeStatus {
    NeedsResponse = "needs-response",
    UnderReview = "under-review",
    ChargeRefunded = "charge-refunded",
    Won = "won",
    Lost = "lost",
    Closed = "closed",
    Escalated = "escalated",
    AwaitingEvidence = "awaiting-evidence",
}

/** @internal */
export const FinancialDisputeStatus$ = z.nativeEnum(FinancialDisputeStatus);
