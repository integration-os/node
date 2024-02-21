/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Currency, Currency$ } from "./currency";
import { CustomAttributes, CustomAttributes$ } from "./customattributes";
import { GlobalTaxType, GlobalTaxType$ } from "./globaltaxtype";
import { z } from "zod";

export type TaxRates = {
    id?: string | undefined;
    country?: string | undefined;
    region?: string | undefined;
    percentage?: number | undefined;
    name?: string | undefined;
    shippingIncluded?: boolean | undefined;
    compound?: boolean | undefined;
    taxProvider?: string | undefined;
    taxType?: GlobalTaxType | undefined;
    applicableItems?: Array<string> | undefined;
    currency?: Currency | undefined;
    customFields?: Array<CustomAttributes> | undefined;
    active?: boolean | undefined;
    deleted?: boolean | undefined;
    description?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace TaxRates$ {
    export type Inbound = {
        id?: string | undefined;
        country?: string | undefined;
        region?: string | undefined;
        percentage?: number | undefined;
        name?: string | undefined;
        shippingIncluded?: boolean | undefined;
        compound?: boolean | undefined;
        taxProvider?: string | undefined;
        taxType?: GlobalTaxType | undefined;
        applicableItems?: Array<string> | undefined;
        currency?: Currency | undefined;
        customFields?: Array<CustomAttributes$.Inbound> | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        description?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<TaxRates, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            country: z.string().optional(),
            region: z.string().optional(),
            percentage: z.number().optional(),
            name: z.string().optional(),
            shippingIncluded: z.boolean().optional(),
            compound: z.boolean().optional(),
            taxProvider: z.string().optional(),
            taxType: GlobalTaxType$.optional(),
            applicableItems: z.array(z.string()).optional(),
            currency: Currency$.optional(),
            customFields: z.array(CustomAttributes$?.inboundSchema).optional(),
            active: z.boolean().optional(),
            deleted: z.boolean().optional(),
            description: z.string().optional(),
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
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.region === undefined ? null : { region: v.region }),
                ...(v.percentage === undefined ? null : { percentage: v.percentage }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.shippingIncluded === undefined
                    ? null
                    : { shippingIncluded: v.shippingIncluded }),
                ...(v.compound === undefined ? null : { compound: v.compound }),
                ...(v.taxProvider === undefined ? null : { taxProvider: v.taxProvider }),
                ...(v.taxType === undefined ? null : { taxType: v.taxType }),
                ...(v.applicableItems === undefined
                    ? null
                    : { applicableItems: v.applicableItems }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        country?: string | undefined;
        region?: string | undefined;
        percentage?: number | undefined;
        name?: string | undefined;
        shippingIncluded?: boolean | undefined;
        compound?: boolean | undefined;
        taxProvider?: string | undefined;
        taxType?: GlobalTaxType | undefined;
        applicableItems?: Array<string> | undefined;
        currency?: Currency | undefined;
        customFields?: Array<CustomAttributes$.Outbound> | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        description?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaxRates> = z
        .object({
            id: z.string().optional(),
            country: z.string().optional(),
            region: z.string().optional(),
            percentage: z.number().optional(),
            name: z.string().optional(),
            shippingIncluded: z.boolean().optional(),
            compound: z.boolean().optional(),
            taxProvider: z.string().optional(),
            taxType: GlobalTaxType$.optional(),
            applicableItems: z.array(z.string()).optional(),
            currency: Currency$.optional(),
            customFields: z.array(CustomAttributes$?.outboundSchema).optional(),
            active: z.boolean().optional(),
            deleted: z.boolean().optional(),
            description: z.string().optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.region === undefined ? null : { region: v.region }),
                ...(v.percentage === undefined ? null : { percentage: v.percentage }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.shippingIncluded === undefined
                    ? null
                    : { shippingIncluded: v.shippingIncluded }),
                ...(v.compound === undefined ? null : { compound: v.compound }),
                ...(v.taxProvider === undefined ? null : { taxProvider: v.taxProvider }),
                ...(v.taxType === undefined ? null : { taxType: v.taxType }),
                ...(v.applicableItems === undefined
                    ? null
                    : { applicableItems: v.applicableItems }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}