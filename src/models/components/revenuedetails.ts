/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type RevenueDetails = {
    salesRevenue?: number | undefined;
    serviceRevenue?: number | undefined;
    otherRevenue?: number | undefined;
};

/** @internal */
export namespace RevenueDetails$ {
    export type Inbound = {
        salesRevenue?: number | undefined;
        serviceRevenue?: number | undefined;
        otherRevenue?: number | undefined;
    };

    export const inboundSchema: z.ZodType<RevenueDetails, z.ZodTypeDef, Inbound> = z
        .object({
            salesRevenue: z.number().optional(),
            serviceRevenue: z.number().optional(),
            otherRevenue: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.salesRevenue === undefined ? null : { salesRevenue: v.salesRevenue }),
                ...(v.serviceRevenue === undefined ? null : { serviceRevenue: v.serviceRevenue }),
                ...(v.otherRevenue === undefined ? null : { otherRevenue: v.otherRevenue }),
            };
        });

    export type Outbound = {
        salesRevenue?: number | undefined;
        serviceRevenue?: number | undefined;
        otherRevenue?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RevenueDetails> = z
        .object({
            salesRevenue: z.number().optional(),
            serviceRevenue: z.number().optional(),
            otherRevenue: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.salesRevenue === undefined ? null : { salesRevenue: v.salesRevenue }),
                ...(v.serviceRevenue === undefined ? null : { serviceRevenue: v.serviceRevenue }),
                ...(v.otherRevenue === undefined ? null : { otherRevenue: v.otherRevenue }),
            };
        });
}
