/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum AuditOpinionType {
    Unqualified = "unqualified",
    Qualified = "qualified",
    Disclaimer = "disclaimer",
    Adverse = "adverse",
}

/** @internal */
export const AuditOpinionType$ = z.nativeEnum(AuditOpinionType);
