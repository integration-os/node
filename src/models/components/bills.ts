/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Attachments, Attachments$ } from "./attachments";
import { BillingStatus, BillingStatus$ } from "./billingstatus";
import { CustomAttributes, CustomAttributes$ } from "./customattributes";
import { Customers, Customers$ } from "./customers";
import { Items, Items$ } from "./items";
import { Vendors, Vendors$ } from "./vendors";
import { z } from "zod";

export type Bills = {
    id?: string | undefined;
    status?: BillingStatus | undefined;
    issueDate?: Date | undefined;
    dueDate?: Date | undefined;
    currencyCode?: string | undefined;
    amountDue?: number | undefined;
    amountPaid?: number | undefined;
    amountRemaining?: number | undefined;
    vendor?: Vendors | undefined;
    customer?: Customers | undefined;
    lineItems?: Array<Items> | undefined;
    notes?: string | undefined;
    terms?: string | undefined;
    attachments?: Array<Attachments> | undefined;
    customFields?: Array<CustomAttributes> | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    active?: boolean | undefined;
    deleted?: boolean | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace Bills$ {
    export type Inbound = {
        id?: string | undefined;
        status?: BillingStatus | undefined;
        issueDate?: string | undefined;
        dueDate?: string | undefined;
        currencyCode?: string | undefined;
        amountDue?: number | undefined;
        amountPaid?: number | undefined;
        amountRemaining?: number | undefined;
        vendor?: Vendors$.Inbound | undefined;
        customer?: Customers$.Inbound | undefined;
        lineItems?: Array<Items$.Inbound> | undefined;
        notes?: string | undefined;
        terms?: string | undefined;
        attachments?: Array<Attachments$.Inbound> | undefined;
        customFields?: Array<CustomAttributes$.Inbound> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Bills, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            status: BillingStatus$.optional(),
            issueDate: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            dueDate: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            currencyCode: z.string().optional(),
            amountDue: z.number().optional(),
            amountPaid: z.number().optional(),
            amountRemaining: z.number().optional(),
            vendor: Vendors$?.inboundSchema.optional(),
            customer: Customers$?.inboundSchema.optional(),
            lineItems: z.array(Items$?.inboundSchema).optional(),
            notes: z.string().optional(),
            terms: z.string().optional(),
            attachments: z.array(Attachments$?.inboundSchema).optional(),
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
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.issueDate === undefined ? null : { issueDate: v.issueDate }),
                ...(v.dueDate === undefined ? null : { dueDate: v.dueDate }),
                ...(v.currencyCode === undefined ? null : { currencyCode: v.currencyCode }),
                ...(v.amountDue === undefined ? null : { amountDue: v.amountDue }),
                ...(v.amountPaid === undefined ? null : { amountPaid: v.amountPaid }),
                ...(v.amountRemaining === undefined
                    ? null
                    : { amountRemaining: v.amountRemaining }),
                ...(v.vendor === undefined ? null : { vendor: v.vendor }),
                ...(v.customer === undefined ? null : { customer: v.customer }),
                ...(v.lineItems === undefined ? null : { lineItems: v.lineItems }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.terms === undefined ? null : { terms: v.terms }),
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        status?: BillingStatus | undefined;
        issueDate?: string | undefined;
        dueDate?: string | undefined;
        currencyCode?: string | undefined;
        amountDue?: number | undefined;
        amountPaid?: number | undefined;
        amountRemaining?: number | undefined;
        vendor?: Vendors$.Outbound | undefined;
        customer?: Customers$.Outbound | undefined;
        lineItems?: Array<Items$.Outbound> | undefined;
        notes?: string | undefined;
        terms?: string | undefined;
        attachments?: Array<Attachments$.Outbound> | undefined;
        customFields?: Array<CustomAttributes$.Outbound> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Bills> = z
        .object({
            id: z.string().optional(),
            status: BillingStatus$.optional(),
            issueDate: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            dueDate: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            currencyCode: z.string().optional(),
            amountDue: z.number().optional(),
            amountPaid: z.number().optional(),
            amountRemaining: z.number().optional(),
            vendor: Vendors$?.outboundSchema.optional(),
            customer: Customers$?.outboundSchema.optional(),
            lineItems: z.array(Items$?.outboundSchema).optional(),
            notes: z.string().optional(),
            terms: z.string().optional(),
            attachments: z.array(Attachments$?.outboundSchema).optional(),
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
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.issueDate === undefined ? null : { issueDate: v.issueDate }),
                ...(v.dueDate === undefined ? null : { dueDate: v.dueDate }),
                ...(v.currencyCode === undefined ? null : { currencyCode: v.currencyCode }),
                ...(v.amountDue === undefined ? null : { amountDue: v.amountDue }),
                ...(v.amountPaid === undefined ? null : { amountPaid: v.amountPaid }),
                ...(v.amountRemaining === undefined
                    ? null
                    : { amountRemaining: v.amountRemaining }),
                ...(v.vendor === undefined ? null : { vendor: v.vendor }),
                ...(v.customer === undefined ? null : { customer: v.customer }),
                ...(v.lineItems === undefined ? null : { lineItems: v.lineItems }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.terms === undefined ? null : { terms: v.terms }),
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}
