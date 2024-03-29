/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Currency, Currency$ } from "./currency";
import { z } from "zod";

export type TaxDetails = {
    id?: string | undefined;
    name?: string | undefined;
    rate?: number | undefined;
    amount?: number | undefined;
    currency?: Currency | undefined;
    isTaxIncludedInPrice?: boolean | undefined;
    taxCode?: string | undefined;
    category?: string | undefined;
    jurisdiction?: string | undefined;
    region?: string | undefined;
    country?: string | undefined;
    effectiveDate?: Date | undefined;
    expirationDate?: Date | undefined;
    taxRegistrationNumber?: string | undefined;
    details?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    active?: boolean | undefined;
    deleted?: boolean | undefined;
};

/** @internal */
export namespace TaxDetails$ {
    export type Inbound = {
        id?: string | undefined;
        name?: string | undefined;
        rate?: number | undefined;
        amount?: number | undefined;
        currency?: Currency | undefined;
        isTaxIncludedInPrice?: boolean | undefined;
        taxCode?: string | undefined;
        category?: string | undefined;
        jurisdiction?: string | undefined;
        region?: string | undefined;
        country?: string | undefined;
        effectiveDate?: string | undefined;
        expirationDate?: string | undefined;
        taxRegistrationNumber?: string | undefined;
        details?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<TaxDetails, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            name: z.string().optional(),
            rate: z.number().optional(),
            amount: z.number().optional(),
            currency: Currency$.optional(),
            isTaxIncludedInPrice: z.boolean().optional(),
            taxCode: z.string().optional(),
            category: z.string().optional(),
            jurisdiction: z.string().optional(),
            region: z.string().optional(),
            country: z.string().optional(),
            effectiveDate: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            expirationDate: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            taxRegistrationNumber: z.string().optional(),
            details: z.string().optional(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            active: z.boolean().optional(),
            deleted: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.rate === undefined ? null : { rate: v.rate }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.isTaxIncludedInPrice === undefined
                    ? null
                    : { isTaxIncludedInPrice: v.isTaxIncludedInPrice }),
                ...(v.taxCode === undefined ? null : { taxCode: v.taxCode }),
                ...(v.category === undefined ? null : { category: v.category }),
                ...(v.jurisdiction === undefined ? null : { jurisdiction: v.jurisdiction }),
                ...(v.region === undefined ? null : { region: v.region }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.effectiveDate === undefined ? null : { effectiveDate: v.effectiveDate }),
                ...(v.expirationDate === undefined ? null : { expirationDate: v.expirationDate }),
                ...(v.taxRegistrationNumber === undefined
                    ? null
                    : { taxRegistrationNumber: v.taxRegistrationNumber }),
                ...(v.details === undefined ? null : { details: v.details }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        name?: string | undefined;
        rate?: number | undefined;
        amount?: number | undefined;
        currency?: Currency | undefined;
        isTaxIncludedInPrice?: boolean | undefined;
        taxCode?: string | undefined;
        category?: string | undefined;
        jurisdiction?: string | undefined;
        region?: string | undefined;
        country?: string | undefined;
        effectiveDate?: string | undefined;
        expirationDate?: string | undefined;
        taxRegistrationNumber?: string | undefined;
        details?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaxDetails> = z
        .object({
            id: z.string().optional(),
            name: z.string().optional(),
            rate: z.number().optional(),
            amount: z.number().optional(),
            currency: Currency$.optional(),
            isTaxIncludedInPrice: z.boolean().optional(),
            taxCode: z.string().optional(),
            category: z.string().optional(),
            jurisdiction: z.string().optional(),
            region: z.string().optional(),
            country: z.string().optional(),
            effectiveDate: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            expirationDate: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            taxRegistrationNumber: z.string().optional(),
            details: z.string().optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            active: z.boolean().optional(),
            deleted: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.rate === undefined ? null : { rate: v.rate }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.isTaxIncludedInPrice === undefined
                    ? null
                    : { isTaxIncludedInPrice: v.isTaxIncludedInPrice }),
                ...(v.taxCode === undefined ? null : { taxCode: v.taxCode }),
                ...(v.category === undefined ? null : { category: v.category }),
                ...(v.jurisdiction === undefined ? null : { jurisdiction: v.jurisdiction }),
                ...(v.region === undefined ? null : { region: v.region }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.effectiveDate === undefined ? null : { effectiveDate: v.effectiveDate }),
                ...(v.expirationDate === undefined ? null : { expirationDate: v.expirationDate }),
                ...(v.taxRegistrationNumber === undefined
                    ? null
                    : { taxRegistrationNumber: v.taxRegistrationNumber }),
                ...(v.details === undefined ? null : { details: v.details }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
            };
        });
}
