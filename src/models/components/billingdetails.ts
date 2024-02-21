/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Addresses, Addresses$ } from "./addresses";
import { Currency, Currency$ } from "./currency";
import { CustomAttributes, CustomAttributes$ } from "./customattributes";
import { PaymentMethods, PaymentMethods$ } from "./paymentmethods";
import { PaymentTerms, PaymentTerms$ } from "./paymentterms";
import { z } from "zod";

export type BillingDetails = {
    id?: string | undefined;
    customerId?: string | undefined;
    fullName?: string | undefined;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    address?: Addresses | undefined;
    companyName?: string | undefined;
    vatId?: string | undefined;
    paymentTerms?: PaymentTerms | undefined;
    note?: string | undefined;
    defaultPaymentMethod?: PaymentMethods | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    active?: boolean | undefined;
    isDeleted?: boolean | undefined;
    currency?: Currency | undefined;
    language?: string | undefined;
    additionalAttributes?: Array<CustomAttributes> | undefined;
};

/** @internal */
export namespace BillingDetails$ {
    export type Inbound = {
        id?: string | undefined;
        customerId?: string | undefined;
        fullName?: string | undefined;
        email?: string | undefined;
        phoneNumber?: string | undefined;
        address?: Addresses$.Inbound | undefined;
        companyName?: string | undefined;
        vatId?: string | undefined;
        paymentTerms?: PaymentTerms$.Inbound | undefined;
        note?: string | undefined;
        defaultPaymentMethod?: PaymentMethods$.Inbound | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        isDeleted?: boolean | undefined;
        currency?: Currency | undefined;
        language?: string | undefined;
        additionalAttributes?: Array<CustomAttributes$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<BillingDetails, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            customerId: z.string().optional(),
            fullName: z.string().optional(),
            email: z.string().optional(),
            phoneNumber: z.string().optional(),
            address: Addresses$?.inboundSchema.optional(),
            companyName: z.string().optional(),
            vatId: z.string().optional(),
            paymentTerms: PaymentTerms$?.inboundSchema.optional(),
            note: z.string().optional(),
            defaultPaymentMethod: PaymentMethods$?.inboundSchema.optional(),
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
            isDeleted: z.boolean().optional(),
            currency: Currency$.optional(),
            language: z.string().optional(),
            additionalAttributes: z.array(CustomAttributes$?.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.customerId === undefined ? null : { customerId: v.customerId }),
                ...(v.fullName === undefined ? null : { fullName: v.fullName }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.phoneNumber === undefined ? null : { phoneNumber: v.phoneNumber }),
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.vatId === undefined ? null : { vatId: v.vatId }),
                ...(v.paymentTerms === undefined ? null : { paymentTerms: v.paymentTerms }),
                ...(v.note === undefined ? null : { note: v.note }),
                ...(v.defaultPaymentMethod === undefined
                    ? null
                    : { defaultPaymentMethod: v.defaultPaymentMethod }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.isDeleted === undefined ? null : { isDeleted: v.isDeleted }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.language === undefined ? null : { language: v.language }),
                ...(v.additionalAttributes === undefined
                    ? null
                    : { additionalAttributes: v.additionalAttributes }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        customerId?: string | undefined;
        fullName?: string | undefined;
        email?: string | undefined;
        phoneNumber?: string | undefined;
        address?: Addresses$.Outbound | undefined;
        companyName?: string | undefined;
        vatId?: string | undefined;
        paymentTerms?: PaymentTerms$.Outbound | undefined;
        note?: string | undefined;
        defaultPaymentMethod?: PaymentMethods$.Outbound | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        isDeleted?: boolean | undefined;
        currency?: Currency | undefined;
        language?: string | undefined;
        additionalAttributes?: Array<CustomAttributes$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BillingDetails> = z
        .object({
            id: z.string().optional(),
            customerId: z.string().optional(),
            fullName: z.string().optional(),
            email: z.string().optional(),
            phoneNumber: z.string().optional(),
            address: Addresses$?.outboundSchema.optional(),
            companyName: z.string().optional(),
            vatId: z.string().optional(),
            paymentTerms: PaymentTerms$?.outboundSchema.optional(),
            note: z.string().optional(),
            defaultPaymentMethod: PaymentMethods$?.outboundSchema.optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            active: z.boolean().optional(),
            isDeleted: z.boolean().optional(),
            currency: Currency$.optional(),
            language: z.string().optional(),
            additionalAttributes: z.array(CustomAttributes$?.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.customerId === undefined ? null : { customerId: v.customerId }),
                ...(v.fullName === undefined ? null : { fullName: v.fullName }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.phoneNumber === undefined ? null : { phoneNumber: v.phoneNumber }),
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.vatId === undefined ? null : { vatId: v.vatId }),
                ...(v.paymentTerms === undefined ? null : { paymentTerms: v.paymentTerms }),
                ...(v.note === undefined ? null : { note: v.note }),
                ...(v.defaultPaymentMethod === undefined
                    ? null
                    : { defaultPaymentMethod: v.defaultPaymentMethod }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.isDeleted === undefined ? null : { isDeleted: v.isDeleted }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.language === undefined ? null : { language: v.language }),
                ...(v.additionalAttributes === undefined
                    ? null
                    : { additionalAttributes: v.additionalAttributes }),
            };
        });
}
