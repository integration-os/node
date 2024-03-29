/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BillingDetails, BillingDetails$ } from "./billingdetails";
import { Currency, Currency$ } from "./currency";
import { Customers, Customers$ } from "./customers";
import { Invoices, Invoices$ } from "./invoices";
import { Metadata, Metadata$ } from "./metadata";
import { PaymentMethods, PaymentMethods$ } from "./paymentmethods";
import { PaymentStatus, PaymentStatus$ } from "./paymentstatus";
import { Refunds, Refunds$ } from "./refunds";
import { ShippingDetails, ShippingDetails$ } from "./shippingdetails";
import { z } from "zod";

export type Payments = {
    id?: string | undefined;
    amount?: number | undefined;
    date?: Date | undefined;
    currency?: Currency | undefined;
    status?: PaymentStatus | undefined;
    description?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    active?: boolean | undefined;
    deleted?: boolean | undefined;
    paymentMethod?: PaymentMethods | undefined;
    customer?: Customers | undefined;
    receiptEmail?: string | undefined;
    invoice?: Invoices | undefined;
    metadata?: Metadata | undefined;
    shippingDetails?: ShippingDetails | undefined;
    billingDetails?: BillingDetails | undefined;
    paymentIntent?: string | undefined;
    paymentCaptureMethod?: string | undefined;
    refund?: Refunds | undefined;
    paymentProcessor?: string | undefined;
    webhookUrl?: string | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace Payments$ {
    export type Inbound = {
        id?: string | undefined;
        amount?: number | undefined;
        date?: string | undefined;
        currency?: Currency | undefined;
        status?: PaymentStatus | undefined;
        description?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        paymentMethod?: PaymentMethods$.Inbound | undefined;
        customer?: Customers$.Inbound | undefined;
        receiptEmail?: string | undefined;
        invoice?: Invoices$.Inbound | undefined;
        metadata?: Metadata$.Inbound | undefined;
        shippingDetails?: ShippingDetails$.Inbound | undefined;
        billingDetails?: BillingDetails$.Inbound | undefined;
        paymentIntent?: string | undefined;
        paymentCaptureMethod?: string | undefined;
        refund?: Refunds$.Inbound | undefined;
        paymentProcessor?: string | undefined;
        webhookUrl?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Payments, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            amount: z.number().optional(),
            date: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            currency: Currency$.optional(),
            status: PaymentStatus$.optional(),
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
            active: z.boolean().optional(),
            deleted: z.boolean().optional(),
            paymentMethod: PaymentMethods$?.inboundSchema.optional(),
            customer: Customers$?.inboundSchema.optional(),
            receiptEmail: z.string().optional(),
            invoice: Invoices$?.inboundSchema.optional(),
            metadata: Metadata$?.inboundSchema.optional(),
            shippingDetails: ShippingDetails$?.inboundSchema.optional(),
            billingDetails: BillingDetails$?.inboundSchema.optional(),
            paymentIntent: z.string().optional(),
            paymentCaptureMethod: z.string().optional(),
            refund: Refunds$?.inboundSchema.optional(),
            paymentProcessor: z.string().optional(),
            webhookUrl: z.string().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.date === undefined ? null : { date: v.date }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.paymentMethod === undefined ? null : { paymentMethod: v.paymentMethod }),
                ...(v.customer === undefined ? null : { customer: v.customer }),
                ...(v.receiptEmail === undefined ? null : { receiptEmail: v.receiptEmail }),
                ...(v.invoice === undefined ? null : { invoice: v.invoice }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.shippingDetails === undefined
                    ? null
                    : { shippingDetails: v.shippingDetails }),
                ...(v.billingDetails === undefined ? null : { billingDetails: v.billingDetails }),
                ...(v.paymentIntent === undefined ? null : { paymentIntent: v.paymentIntent }),
                ...(v.paymentCaptureMethod === undefined
                    ? null
                    : { paymentCaptureMethod: v.paymentCaptureMethod }),
                ...(v.refund === undefined ? null : { refund: v.refund }),
                ...(v.paymentProcessor === undefined
                    ? null
                    : { paymentProcessor: v.paymentProcessor }),
                ...(v.webhookUrl === undefined ? null : { webhookUrl: v.webhookUrl }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        amount?: number | undefined;
        date?: string | undefined;
        currency?: Currency | undefined;
        status?: PaymentStatus | undefined;
        description?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        paymentMethod?: PaymentMethods$.Outbound | undefined;
        customer?: Customers$.Outbound | undefined;
        receiptEmail?: string | undefined;
        invoice?: Invoices$.Outbound | undefined;
        metadata?: Metadata$.Outbound | undefined;
        shippingDetails?: ShippingDetails$.Outbound | undefined;
        billingDetails?: BillingDetails$.Outbound | undefined;
        paymentIntent?: string | undefined;
        paymentCaptureMethod?: string | undefined;
        refund?: Refunds$.Outbound | undefined;
        paymentProcessor?: string | undefined;
        webhookUrl?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Payments> = z
        .object({
            id: z.string().optional(),
            amount: z.number().optional(),
            date: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            currency: Currency$.optional(),
            status: PaymentStatus$.optional(),
            description: z.string().optional(),
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
            paymentMethod: PaymentMethods$?.outboundSchema.optional(),
            customer: Customers$?.outboundSchema.optional(),
            receiptEmail: z.string().optional(),
            invoice: Invoices$?.outboundSchema.optional(),
            metadata: Metadata$?.outboundSchema.optional(),
            shippingDetails: ShippingDetails$?.outboundSchema.optional(),
            billingDetails: BillingDetails$?.outboundSchema.optional(),
            paymentIntent: z.string().optional(),
            paymentCaptureMethod: z.string().optional(),
            refund: Refunds$?.outboundSchema.optional(),
            paymentProcessor: z.string().optional(),
            webhookUrl: z.string().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.date === undefined ? null : { date: v.date }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.paymentMethod === undefined ? null : { paymentMethod: v.paymentMethod }),
                ...(v.customer === undefined ? null : { customer: v.customer }),
                ...(v.receiptEmail === undefined ? null : { receiptEmail: v.receiptEmail }),
                ...(v.invoice === undefined ? null : { invoice: v.invoice }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.shippingDetails === undefined
                    ? null
                    : { shippingDetails: v.shippingDetails }),
                ...(v.billingDetails === undefined ? null : { billingDetails: v.billingDetails }),
                ...(v.paymentIntent === undefined ? null : { paymentIntent: v.paymentIntent }),
                ...(v.paymentCaptureMethod === undefined
                    ? null
                    : { paymentCaptureMethod: v.paymentCaptureMethod }),
                ...(v.refund === undefined ? null : { refund: v.refund }),
                ...(v.paymentProcessor === undefined
                    ? null
                    : { paymentProcessor: v.paymentProcessor }),
                ...(v.webhookUrl === undefined ? null : { webhookUrl: v.webhookUrl }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}
