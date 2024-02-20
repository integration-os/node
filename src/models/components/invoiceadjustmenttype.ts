/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum InvoiceAdjustmentType {
    Discount = "discount",
    Tax = "tax",
    Shipping = "shipping",
    Tip = "tip",
    Other = "other",
}

/** @internal */
export const InvoiceAdjustmentType$ = z.nativeEnum(InvoiceAdjustmentType);
