/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type IncomeTaxExpenseDetails = {
    currentIncomeTax?: number | undefined;
    deferredIncomeTax?: number | undefined;
    taxAllowanceCredit?: number | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace IncomeTaxExpenseDetails$ {
    export type Inbound = {
        currentIncomeTax?: number | undefined;
        deferredIncomeTax?: number | undefined;
        taxAllowanceCredit?: number | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<IncomeTaxExpenseDetails, z.ZodTypeDef, Inbound> = z
        .object({
            currentIncomeTax: z.number().optional(),
            deferredIncomeTax: z.number().optional(),
            taxAllowanceCredit: z.number().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.currentIncomeTax === undefined
                    ? null
                    : { currentIncomeTax: v.currentIncomeTax }),
                ...(v.deferredIncomeTax === undefined
                    ? null
                    : { deferredIncomeTax: v.deferredIncomeTax }),
                ...(v.taxAllowanceCredit === undefined
                    ? null
                    : { taxAllowanceCredit: v.taxAllowanceCredit }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        currentIncomeTax?: number | undefined;
        deferredIncomeTax?: number | undefined;
        taxAllowanceCredit?: number | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IncomeTaxExpenseDetails> = z
        .object({
            currentIncomeTax: z.number().optional(),
            deferredIncomeTax: z.number().optional(),
            taxAllowanceCredit: z.number().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.currentIncomeTax === undefined
                    ? null
                    : { currentIncomeTax: v.currentIncomeTax }),
                ...(v.deferredIncomeTax === undefined
                    ? null
                    : { deferredIncomeTax: v.deferredIncomeTax }),
                ...(v.taxAllowanceCredit === undefined
                    ? null
                    : { taxAllowanceCredit: v.taxAllowanceCredit }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}
