/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BillingDetails, BillingDetails$ } from "./billingdetails";
import { Contacts, Contacts$ } from "./contacts";
import { Currency, Currency$ } from "./currency";
import { Customers, Customers$ } from "./customers";
import { Disputes, Disputes$ } from "./disputes";
import {
    FinancialTransactionStatus,
    FinancialTransactionStatus$,
} from "./financialtransactionstatus";
import { FinancialTransactionType, FinancialTransactionType$ } from "./financialtransactiontype";
import { Items, Items$ } from "./items";
import { Metadata, Metadata$ } from "./metadata";
import { PaymentMethods, PaymentMethods$ } from "./paymentmethods";
import { Refunds, Refunds$ } from "./refunds";
import { ShippingDetails, ShippingDetails$ } from "./shippingdetails";
import { TransactionType, TransactionType$ } from "./transactiontype";
import { z } from "zod";

export enum TransactionMethod {
    Online = "online",
    Atm = "atm",
    BankBranch = "bank-branch",
    Mail = "mail",
    Mobile = "mobile",
    Telephone = "telephone",
}

export type Transactions = {
    id?: string | undefined;
    accountId?: string | undefined;
    accountName?: string | undefined;
    invoiceId?: string | undefined;
    orderId?: string | undefined;
    contact?: Contacts | undefined;
    paymentMethod?: PaymentMethods | undefined;
    amount?: number | undefined;
    taxAmount?: number | undefined;
    type?: FinancialTransactionType | undefined;
    date?: Date | undefined;
    currency?: Currency | undefined;
    recipient?: Customers | undefined;
    sender?: Customers | undefined;
    description?: string | undefined;
    checkNumber?: string | undefined;
    transactionCategory?: TransactionType | undefined;
    items?: Array<Items> | undefined;
    tags?: Array<string> | undefined;
    status?: FinancialTransactionStatus | undefined;
    transactionMethod?: TransactionMethod | undefined;
    refund?: Refunds | undefined;
    dispute?: Disputes | undefined;
    metadata?: Metadata | undefined;
    exchangeRate?: number | undefined;
    shipping?: ShippingDetails | undefined;
    billingDetails?: BillingDetails | undefined;
    applicationFee?: number | undefined;
    paymentIntent?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    deleted?: boolean | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export const TransactionMethod$ = z.nativeEnum(TransactionMethod);

/** @internal */
export namespace Transactions$ {
    export type Inbound = {
        id?: string | undefined;
        accountId?: string | undefined;
        accountName?: string | undefined;
        invoiceId?: string | undefined;
        orderId?: string | undefined;
        contact?: Contacts$.Inbound | undefined;
        paymentMethod?: PaymentMethods$.Inbound | undefined;
        amount?: number | undefined;
        taxAmount?: number | undefined;
        type?: FinancialTransactionType | undefined;
        date?: string | undefined;
        currency?: Currency | undefined;
        recipient?: Customers$.Inbound | undefined;
        sender?: Customers$.Inbound | undefined;
        description?: string | undefined;
        checkNumber?: string | undefined;
        transactionCategory?: TransactionType | undefined;
        items?: Array<Items$.Inbound> | undefined;
        tags?: Array<string> | undefined;
        status?: FinancialTransactionStatus | undefined;
        transactionMethod?: TransactionMethod | undefined;
        refund?: Refunds$.Inbound | undefined;
        dispute?: Disputes$.Inbound | undefined;
        metadata?: Metadata$.Inbound | undefined;
        exchangeRate?: number | undefined;
        shipping?: ShippingDetails$.Inbound | undefined;
        billingDetails?: BillingDetails$.Inbound | undefined;
        applicationFee?: number | undefined;
        paymentIntent?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        deleted?: boolean | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Transactions, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            accountId: z.string().optional(),
            accountName: z.string().optional(),
            invoiceId: z.string().optional(),
            orderId: z.string().optional(),
            contact: Contacts$?.inboundSchema.optional(),
            paymentMethod: PaymentMethods$?.inboundSchema.optional(),
            amount: z.number().optional(),
            taxAmount: z.number().optional(),
            type: FinancialTransactionType$.optional(),
            date: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            currency: Currency$.optional(),
            recipient: Customers$?.inboundSchema.optional(),
            sender: Customers$?.inboundSchema.optional(),
            description: z.string().optional(),
            checkNumber: z.string().optional(),
            transactionCategory: TransactionType$.optional(),
            items: z.array(Items$?.inboundSchema).optional(),
            tags: z.array(z.string()).optional(),
            status: FinancialTransactionStatus$.optional(),
            transactionMethod: TransactionMethod$.optional(),
            refund: Refunds$?.inboundSchema.optional(),
            dispute: Disputes$?.inboundSchema.optional(),
            metadata: Metadata$?.inboundSchema.optional(),
            exchangeRate: z.number().optional(),
            shipping: ShippingDetails$?.inboundSchema.optional(),
            billingDetails: BillingDetails$?.inboundSchema.optional(),
            applicationFee: z.number().optional(),
            paymentIntent: z.string().optional(),
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
            deleted: z.boolean().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                ...(v.accountName === undefined ? null : { accountName: v.accountName }),
                ...(v.invoiceId === undefined ? null : { invoiceId: v.invoiceId }),
                ...(v.orderId === undefined ? null : { orderId: v.orderId }),
                ...(v.contact === undefined ? null : { contact: v.contact }),
                ...(v.paymentMethod === undefined ? null : { paymentMethod: v.paymentMethod }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.taxAmount === undefined ? null : { taxAmount: v.taxAmount }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.date === undefined ? null : { date: v.date }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.recipient === undefined ? null : { recipient: v.recipient }),
                ...(v.sender === undefined ? null : { sender: v.sender }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.checkNumber === undefined ? null : { checkNumber: v.checkNumber }),
                ...(v.transactionCategory === undefined
                    ? null
                    : { transactionCategory: v.transactionCategory }),
                ...(v.items === undefined ? null : { items: v.items }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.transactionMethod === undefined
                    ? null
                    : { transactionMethod: v.transactionMethod }),
                ...(v.refund === undefined ? null : { refund: v.refund }),
                ...(v.dispute === undefined ? null : { dispute: v.dispute }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.exchangeRate === undefined ? null : { exchangeRate: v.exchangeRate }),
                ...(v.shipping === undefined ? null : { shipping: v.shipping }),
                ...(v.billingDetails === undefined ? null : { billingDetails: v.billingDetails }),
                ...(v.applicationFee === undefined ? null : { applicationFee: v.applicationFee }),
                ...(v.paymentIntent === undefined ? null : { paymentIntent: v.paymentIntent }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        accountId?: string | undefined;
        accountName?: string | undefined;
        invoiceId?: string | undefined;
        orderId?: string | undefined;
        contact?: Contacts$.Outbound | undefined;
        paymentMethod?: PaymentMethods$.Outbound | undefined;
        amount?: number | undefined;
        taxAmount?: number | undefined;
        type?: FinancialTransactionType | undefined;
        date?: string | undefined;
        currency?: Currency | undefined;
        recipient?: Customers$.Outbound | undefined;
        sender?: Customers$.Outbound | undefined;
        description?: string | undefined;
        checkNumber?: string | undefined;
        transactionCategory?: TransactionType | undefined;
        items?: Array<Items$.Outbound> | undefined;
        tags?: Array<string> | undefined;
        status?: FinancialTransactionStatus | undefined;
        transactionMethod?: TransactionMethod | undefined;
        refund?: Refunds$.Outbound | undefined;
        dispute?: Disputes$.Outbound | undefined;
        metadata?: Metadata$.Outbound | undefined;
        exchangeRate?: number | undefined;
        shipping?: ShippingDetails$.Outbound | undefined;
        billingDetails?: BillingDetails$.Outbound | undefined;
        applicationFee?: number | undefined;
        paymentIntent?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        deleted?: boolean | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Transactions> = z
        .object({
            id: z.string().optional(),
            accountId: z.string().optional(),
            accountName: z.string().optional(),
            invoiceId: z.string().optional(),
            orderId: z.string().optional(),
            contact: Contacts$?.outboundSchema.optional(),
            paymentMethod: PaymentMethods$?.outboundSchema.optional(),
            amount: z.number().optional(),
            taxAmount: z.number().optional(),
            type: FinancialTransactionType$.optional(),
            date: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            currency: Currency$.optional(),
            recipient: Customers$?.outboundSchema.optional(),
            sender: Customers$?.outboundSchema.optional(),
            description: z.string().optional(),
            checkNumber: z.string().optional(),
            transactionCategory: TransactionType$.optional(),
            items: z.array(Items$?.outboundSchema).optional(),
            tags: z.array(z.string()).optional(),
            status: FinancialTransactionStatus$.optional(),
            transactionMethod: TransactionMethod$.optional(),
            refund: Refunds$?.outboundSchema.optional(),
            dispute: Disputes$?.outboundSchema.optional(),
            metadata: Metadata$?.outboundSchema.optional(),
            exchangeRate: z.number().optional(),
            shipping: ShippingDetails$?.outboundSchema.optional(),
            billingDetails: BillingDetails$?.outboundSchema.optional(),
            applicationFee: z.number().optional(),
            paymentIntent: z.string().optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            deleted: z.boolean().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                ...(v.accountName === undefined ? null : { accountName: v.accountName }),
                ...(v.invoiceId === undefined ? null : { invoiceId: v.invoiceId }),
                ...(v.orderId === undefined ? null : { orderId: v.orderId }),
                ...(v.contact === undefined ? null : { contact: v.contact }),
                ...(v.paymentMethod === undefined ? null : { paymentMethod: v.paymentMethod }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.taxAmount === undefined ? null : { taxAmount: v.taxAmount }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.date === undefined ? null : { date: v.date }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.recipient === undefined ? null : { recipient: v.recipient }),
                ...(v.sender === undefined ? null : { sender: v.sender }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.checkNumber === undefined ? null : { checkNumber: v.checkNumber }),
                ...(v.transactionCategory === undefined
                    ? null
                    : { transactionCategory: v.transactionCategory }),
                ...(v.items === undefined ? null : { items: v.items }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.transactionMethod === undefined
                    ? null
                    : { transactionMethod: v.transactionMethod }),
                ...(v.refund === undefined ? null : { refund: v.refund }),
                ...(v.dispute === undefined ? null : { dispute: v.dispute }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.exchangeRate === undefined ? null : { exchangeRate: v.exchangeRate }),
                ...(v.shipping === undefined ? null : { shipping: v.shipping }),
                ...(v.billingDetails === undefined ? null : { billingDetails: v.billingDetails }),
                ...(v.applicationFee === undefined ? null : { applicationFee: v.applicationFee }),
                ...(v.paymentIntent === undefined ? null : { paymentIntent: v.paymentIntent }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}
