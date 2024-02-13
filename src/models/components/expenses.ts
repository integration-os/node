/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Addresses, Addresses$ } from "./addresses";
import { Attachments, Attachments$ } from "./attachments";
import { CustomAttributes, CustomAttributes$ } from "./customattributes";
import { ExpenseCategories, ExpenseCategories$ } from "./expensecategories";
import { Items, Items$ } from "./items";
import { PaymentMethods, PaymentMethods$ } from "./paymentmethods";
import { Taxes, Taxes$ } from "./taxes";
import { z } from "zod";

export enum ExpensesStatus {
    New = "new",
    Pending = "pending",
    Approved = "approved",
    Denied = "denied",
    Reimbursed = "reimbursed",
}

export type Expenses = {
    id?: string | undefined;
    amount?: number | undefined;
    currencyCode?: string | undefined;
    dateIncurred?: Date | undefined;
    description?: string | undefined;
    category?: ExpenseCategories | undefined;
    merchant?: string | undefined;
    receiptUrls?: Array<string> | undefined;
    paymentMethod?: PaymentMethods | undefined;
    status?: ExpensesStatus | undefined;
    tax?: Array<Taxes> | undefined;
    note?: string | undefined;
    lineItems?: Array<Items> | undefined;
    attachments?: Array<Attachments> | undefined;
    reportId?: string | undefined;
    createdByUserId?: string | undefined;
    approvedByUserId?: string | undefined;
    customFields?: Array<CustomAttributes> | undefined;
    tags?: Array<string> | undefined;
    location?: Addresses | undefined;
    active?: boolean | undefined;
    deleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
};

/** @internal */
export const ExpensesStatus$ = z.nativeEnum(ExpensesStatus);

/** @internal */
export namespace Expenses$ {
    export type Inbound = {
        id?: string | undefined;
        amount?: number | undefined;
        currencyCode?: string | undefined;
        dateIncurred?: string | undefined;
        description?: string | undefined;
        category?: ExpenseCategories$.Inbound | undefined;
        merchant?: string | undefined;
        receiptUrls?: Array<string> | undefined;
        paymentMethod?: PaymentMethods$.Inbound | undefined;
        status?: ExpensesStatus | undefined;
        tax?: Array<Taxes$.Inbound> | undefined;
        note?: string | undefined;
        lineItems?: Array<Items$.Inbound> | undefined;
        attachments?: Array<Attachments$.Inbound> | undefined;
        reportId?: string | undefined;
        createdByUserId?: string | undefined;
        approvedByUserId?: string | undefined;
        customFields?: Array<CustomAttributes$.Inbound> | undefined;
        tags?: Array<string> | undefined;
        location?: Addresses$.Inbound | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Expenses, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            amount: z.number().optional(),
            currencyCode: z.string().optional(),
            dateIncurred: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            description: z.string().optional(),
            category: ExpenseCategories$?.inboundSchema.optional(),
            merchant: z.string().optional(),
            receiptUrls: z.array(z.string()).optional(),
            paymentMethod: PaymentMethods$?.inboundSchema.optional(),
            status: ExpensesStatus$.optional(),
            tax: z.array(Taxes$?.inboundSchema).optional(),
            note: z.string().optional(),
            lineItems: z.array(Items$?.inboundSchema).optional(),
            attachments: z.array(Attachments$?.inboundSchema).optional(),
            reportId: z.string().optional(),
            createdByUserId: z.string().optional(),
            approvedByUserId: z.string().optional(),
            customFields: z.array(CustomAttributes$?.inboundSchema).optional(),
            tags: z.array(z.string()).optional(),
            location: Addresses$?.inboundSchema.optional(),
            active: z.boolean().optional(),
            deleted: z.boolean().optional(),
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
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.currencyCode === undefined ? null : { currencyCode: v.currencyCode }),
                ...(v.dateIncurred === undefined ? null : { dateIncurred: v.dateIncurred }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.category === undefined ? null : { category: v.category }),
                ...(v.merchant === undefined ? null : { merchant: v.merchant }),
                ...(v.receiptUrls === undefined ? null : { receiptUrls: v.receiptUrls }),
                ...(v.paymentMethod === undefined ? null : { paymentMethod: v.paymentMethod }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.tax === undefined ? null : { tax: v.tax }),
                ...(v.note === undefined ? null : { note: v.note }),
                ...(v.lineItems === undefined ? null : { lineItems: v.lineItems }),
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                ...(v.reportId === undefined ? null : { reportId: v.reportId }),
                ...(v.createdByUserId === undefined
                    ? null
                    : { createdByUserId: v.createdByUserId }),
                ...(v.approvedByUserId === undefined
                    ? null
                    : { approvedByUserId: v.approvedByUserId }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                ...(v.location === undefined ? null : { location: v.location }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        amount?: number | undefined;
        currencyCode?: string | undefined;
        dateIncurred?: string | undefined;
        description?: string | undefined;
        category?: ExpenseCategories$.Outbound | undefined;
        merchant?: string | undefined;
        receiptUrls?: Array<string> | undefined;
        paymentMethod?: PaymentMethods$.Outbound | undefined;
        status?: ExpensesStatus | undefined;
        tax?: Array<Taxes$.Outbound> | undefined;
        note?: string | undefined;
        lineItems?: Array<Items$.Outbound> | undefined;
        attachments?: Array<Attachments$.Outbound> | undefined;
        reportId?: string | undefined;
        createdByUserId?: string | undefined;
        approvedByUserId?: string | undefined;
        customFields?: Array<CustomAttributes$.Outbound> | undefined;
        tags?: Array<string> | undefined;
        location?: Addresses$.Outbound | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Expenses> = z
        .object({
            id: z.string().optional(),
            amount: z.number().optional(),
            currencyCode: z.string().optional(),
            dateIncurred: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            description: z.string().optional(),
            category: ExpenseCategories$?.outboundSchema.optional(),
            merchant: z.string().optional(),
            receiptUrls: z.array(z.string()).optional(),
            paymentMethod: PaymentMethods$?.outboundSchema.optional(),
            status: ExpensesStatus$.optional(),
            tax: z.array(Taxes$?.outboundSchema).optional(),
            note: z.string().optional(),
            lineItems: z.array(Items$?.outboundSchema).optional(),
            attachments: z.array(Attachments$?.outboundSchema).optional(),
            reportId: z.string().optional(),
            createdByUserId: z.string().optional(),
            approvedByUserId: z.string().optional(),
            customFields: z.array(CustomAttributes$?.outboundSchema).optional(),
            tags: z.array(z.string()).optional(),
            location: Addresses$?.outboundSchema.optional(),
            active: z.boolean().optional(),
            deleted: z.boolean().optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.currencyCode === undefined ? null : { currencyCode: v.currencyCode }),
                ...(v.dateIncurred === undefined ? null : { dateIncurred: v.dateIncurred }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.category === undefined ? null : { category: v.category }),
                ...(v.merchant === undefined ? null : { merchant: v.merchant }),
                ...(v.receiptUrls === undefined ? null : { receiptUrls: v.receiptUrls }),
                ...(v.paymentMethod === undefined ? null : { paymentMethod: v.paymentMethod }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.tax === undefined ? null : { tax: v.tax }),
                ...(v.note === undefined ? null : { note: v.note }),
                ...(v.lineItems === undefined ? null : { lineItems: v.lineItems }),
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                ...(v.reportId === undefined ? null : { reportId: v.reportId }),
                ...(v.createdByUserId === undefined
                    ? null
                    : { createdByUserId: v.createdByUserId }),
                ...(v.approvedByUserId === undefined
                    ? null
                    : { approvedByUserId: v.approvedByUserId }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                ...(v.location === undefined ? null : { location: v.location }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });
}
