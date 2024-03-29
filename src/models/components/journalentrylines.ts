/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    FinancialTrackingCategories,
    FinancialTrackingCategories$,
} from "./financialtrackingcategories";
import { z } from "zod";

export type JournalEntryLines = {
    id?: number | undefined;
    accountId?: string | undefined;
    description?: string | undefined;
    debit?: number | undefined;
    credit?: number | undefined;
    quantity?: number | undefined;
    tracking?: FinancialTrackingCategories | undefined;
    taxCode?: string | undefined;
};

/** @internal */
export namespace JournalEntryLines$ {
    export type Inbound = {
        id?: number | undefined;
        accountId?: string | undefined;
        description?: string | undefined;
        debit?: number | undefined;
        credit?: number | undefined;
        quantity?: number | undefined;
        tracking?: FinancialTrackingCategories | undefined;
        taxCode?: string | undefined;
    };

    export const inboundSchema: z.ZodType<JournalEntryLines, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.number().optional(),
            accountId: z.string().optional(),
            description: z.string().optional(),
            debit: z.number().optional(),
            credit: z.number().optional(),
            quantity: z.number().optional(),
            tracking: FinancialTrackingCategories$.optional(),
            taxCode: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.debit === undefined ? null : { debit: v.debit }),
                ...(v.credit === undefined ? null : { credit: v.credit }),
                ...(v.quantity === undefined ? null : { quantity: v.quantity }),
                ...(v.tracking === undefined ? null : { tracking: v.tracking }),
                ...(v.taxCode === undefined ? null : { taxCode: v.taxCode }),
            };
        });

    export type Outbound = {
        id?: number | undefined;
        accountId?: string | undefined;
        description?: string | undefined;
        debit?: number | undefined;
        credit?: number | undefined;
        quantity?: number | undefined;
        tracking?: FinancialTrackingCategories | undefined;
        taxCode?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JournalEntryLines> = z
        .object({
            id: z.number().optional(),
            accountId: z.string().optional(),
            description: z.string().optional(),
            debit: z.number().optional(),
            credit: z.number().optional(),
            quantity: z.number().optional(),
            tracking: FinancialTrackingCategories$.optional(),
            taxCode: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.debit === undefined ? null : { debit: v.debit }),
                ...(v.credit === undefined ? null : { credit: v.credit }),
                ...(v.quantity === undefined ? null : { quantity: v.quantity }),
                ...(v.tracking === undefined ? null : { tracking: v.tracking }),
                ...(v.taxCode === undefined ? null : { taxCode: v.taxCode }),
            };
        });
}
