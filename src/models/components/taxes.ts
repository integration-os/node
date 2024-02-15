/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CustomAttributes, CustomAttributes$ } from "./customattributes";
import { TaxDetails, TaxDetails$ } from "./taxdetails";
import { z } from "zod";

export type Taxes = {
    taxCode?: string | undefined;
    taxable?: boolean | undefined;
    taxRate?: number | undefined;
    currency?: string | undefined;
    country?: string | undefined;
    region?: string | undefined;
    description?: string | undefined;
    taxAmount?: number | undefined;
    taxDetails?: TaxDetails | undefined;
    customFields?: Array<CustomAttributes> | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    active?: boolean | undefined;
    deleted?: boolean | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace Taxes$ {
    export type Inbound = {
        taxCode?: string | undefined;
        taxable?: boolean | undefined;
        taxRate?: number | undefined;
        currency?: string | undefined;
        country?: string | undefined;
        region?: string | undefined;
        description?: string | undefined;
        taxAmount?: number | undefined;
        taxDetails?: TaxDetails$.Inbound | undefined;
        customFields?: Array<CustomAttributes$.Inbound> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Taxes, z.ZodTypeDef, Inbound> = z
        .object({
            taxCode: z.string().optional(),
            taxable: z.boolean().optional(),
            taxRate: z.number().optional(),
            currency: z.string().optional(),
            country: z.string().optional(),
            region: z.string().optional(),
            description: z.string().optional(),
            taxAmount: z.number().optional(),
            taxDetails: TaxDetails$?.inboundSchema.optional(),
            customFields: z.array(CustomAttributes$?.inboundSchema).optional(),
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
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.taxCode === undefined ? null : { taxCode: v.taxCode }),
                ...(v.taxable === undefined ? null : { taxable: v.taxable }),
                ...(v.taxRate === undefined ? null : { taxRate: v.taxRate }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.region === undefined ? null : { region: v.region }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.taxAmount === undefined ? null : { taxAmount: v.taxAmount }),
                ...(v.taxDetails === undefined ? null : { taxDetails: v.taxDetails }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        taxCode?: string | undefined;
        taxable?: boolean | undefined;
        taxRate?: number | undefined;
        currency?: string | undefined;
        country?: string | undefined;
        region?: string | undefined;
        description?: string | undefined;
        taxAmount?: number | undefined;
        taxDetails?: TaxDetails$.Outbound | undefined;
        customFields?: Array<CustomAttributes$.Outbound> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Taxes> = z
        .object({
            taxCode: z.string().optional(),
            taxable: z.boolean().optional(),
            taxRate: z.number().optional(),
            currency: z.string().optional(),
            country: z.string().optional(),
            region: z.string().optional(),
            description: z.string().optional(),
            taxAmount: z.number().optional(),
            taxDetails: TaxDetails$?.outboundSchema.optional(),
            customFields: z.array(CustomAttributes$?.outboundSchema).optional(),
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
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.taxCode === undefined ? null : { taxCode: v.taxCode }),
                ...(v.taxable === undefined ? null : { taxable: v.taxable }),
                ...(v.taxRate === undefined ? null : { taxRate: v.taxRate }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.region === undefined ? null : { region: v.region }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.taxAmount === undefined ? null : { taxAmount: v.taxAmount }),
                ...(v.taxDetails === undefined ? null : { taxDetails: v.taxDetails }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}
