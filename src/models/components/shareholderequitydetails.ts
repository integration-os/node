/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type ShareholderEquityDetails = {
    commonStock?: number | undefined;
    preferredStock?: number | undefined;
    retainedEarnings?: number | undefined;
    accumulatedOtherComprehensiveIncome?: number | undefined;
    treasuryStock?: number | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace ShareholderEquityDetails$ {
    export type Inbound = {
        commonStock?: number | undefined;
        preferredStock?: number | undefined;
        retainedEarnings?: number | undefined;
        accumulatedOtherComprehensiveIncome?: number | undefined;
        treasuryStock?: number | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ShareholderEquityDetails, z.ZodTypeDef, Inbound> = z
        .object({
            commonStock: z.number().optional(),
            preferredStock: z.number().optional(),
            retainedEarnings: z.number().optional(),
            accumulatedOtherComprehensiveIncome: z.number().optional(),
            treasuryStock: z.number().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.commonStock === undefined ? null : { commonStock: v.commonStock }),
                ...(v.preferredStock === undefined ? null : { preferredStock: v.preferredStock }),
                ...(v.retainedEarnings === undefined
                    ? null
                    : { retainedEarnings: v.retainedEarnings }),
                ...(v.accumulatedOtherComprehensiveIncome === undefined
                    ? null
                    : {
                          accumulatedOtherComprehensiveIncome:
                              v.accumulatedOtherComprehensiveIncome,
                      }),
                ...(v.treasuryStock === undefined ? null : { treasuryStock: v.treasuryStock }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        commonStock?: number | undefined;
        preferredStock?: number | undefined;
        retainedEarnings?: number | undefined;
        accumulatedOtherComprehensiveIncome?: number | undefined;
        treasuryStock?: number | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ShareholderEquityDetails> = z
        .object({
            commonStock: z.number().optional(),
            preferredStock: z.number().optional(),
            retainedEarnings: z.number().optional(),
            accumulatedOtherComprehensiveIncome: z.number().optional(),
            treasuryStock: z.number().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.commonStock === undefined ? null : { commonStock: v.commonStock }),
                ...(v.preferredStock === undefined ? null : { preferredStock: v.preferredStock }),
                ...(v.retainedEarnings === undefined
                    ? null
                    : { retainedEarnings: v.retainedEarnings }),
                ...(v.accumulatedOtherComprehensiveIncome === undefined
                    ? null
                    : {
                          accumulatedOtherComprehensiveIncome:
                              v.accumulatedOtherComprehensiveIncome,
                      }),
                ...(v.treasuryStock === undefined ? null : { treasuryStock: v.treasuryStock }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}