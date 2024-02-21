/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Addresses, Addresses$ } from "./addresses";
import { Attachments, Attachments$ } from "./attachments";
import { Currency, Currency$ } from "./currency";
import { OrderStatus, OrderStatus$ } from "./orderstatus";
import { PurchaseOrderLineItems, PurchaseOrderLineItems$ } from "./purchaseorderlineitems";
import { Vendors, Vendors$ } from "./vendors";
import { z } from "zod";

export type PurchaseOrders = {
    id?: string | undefined;
    orderNumber?: string | undefined;
    status?: OrderStatus | undefined;
    orderDate?: Date | undefined;
    accountId?: string | undefined;
    expectedDeliveryDate?: Date | undefined;
    vendor?: Vendors | undefined;
    shipTo?: Addresses | undefined;
    billTo?: Addresses | undefined;
    lineItems?: Array<PurchaseOrderLineItems> | undefined;
    notes?: string | undefined;
    subtotal?: number | undefined;
    taxes?: number | undefined;
    shippingCosts?: number | undefined;
    total?: number | undefined;
    currency?: Currency | undefined;
    paymentTerms?: string | undefined;
    attachments?: Array<Attachments> | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    active?: boolean | undefined;
    deleted?: boolean | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace PurchaseOrders$ {
    export type Inbound = {
        id?: string | undefined;
        orderNumber?: string | undefined;
        status?: OrderStatus | undefined;
        orderDate?: string | undefined;
        accountId?: string | undefined;
        expectedDeliveryDate?: string | undefined;
        vendor?: Vendors$.Inbound | undefined;
        shipTo?: Addresses$.Inbound | undefined;
        billTo?: Addresses$.Inbound | undefined;
        lineItems?: Array<PurchaseOrderLineItems$.Inbound> | undefined;
        notes?: string | undefined;
        subtotal?: number | undefined;
        taxes?: number | undefined;
        shippingCosts?: number | undefined;
        total?: number | undefined;
        currency?: Currency | undefined;
        paymentTerms?: string | undefined;
        attachments?: Array<Attachments$.Inbound> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<PurchaseOrders, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            orderNumber: z.string().optional(),
            status: OrderStatus$.optional(),
            orderDate: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            accountId: z.string().optional(),
            expectedDeliveryDate: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            vendor: Vendors$?.inboundSchema.optional(),
            shipTo: Addresses$?.inboundSchema.optional(),
            billTo: Addresses$?.inboundSchema.optional(),
            lineItems: z.array(PurchaseOrderLineItems$?.inboundSchema).optional(),
            notes: z.string().optional(),
            subtotal: z.number().optional(),
            taxes: z.number().optional(),
            shippingCosts: z.number().optional(),
            total: z.number().optional(),
            currency: Currency$.optional(),
            paymentTerms: z.string().optional(),
            attachments: z.array(Attachments$?.inboundSchema).optional(),
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
                ...(v.orderNumber === undefined ? null : { orderNumber: v.orderNumber }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.orderDate === undefined ? null : { orderDate: v.orderDate }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                ...(v.expectedDeliveryDate === undefined
                    ? null
                    : { expectedDeliveryDate: v.expectedDeliveryDate }),
                ...(v.vendor === undefined ? null : { vendor: v.vendor }),
                ...(v.shipTo === undefined ? null : { shipTo: v.shipTo }),
                ...(v.billTo === undefined ? null : { billTo: v.billTo }),
                ...(v.lineItems === undefined ? null : { lineItems: v.lineItems }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.subtotal === undefined ? null : { subtotal: v.subtotal }),
                ...(v.taxes === undefined ? null : { taxes: v.taxes }),
                ...(v.shippingCosts === undefined ? null : { shippingCosts: v.shippingCosts }),
                ...(v.total === undefined ? null : { total: v.total }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.paymentTerms === undefined ? null : { paymentTerms: v.paymentTerms }),
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        orderNumber?: string | undefined;
        status?: OrderStatus | undefined;
        orderDate?: string | undefined;
        accountId?: string | undefined;
        expectedDeliveryDate?: string | undefined;
        vendor?: Vendors$.Outbound | undefined;
        shipTo?: Addresses$.Outbound | undefined;
        billTo?: Addresses$.Outbound | undefined;
        lineItems?: Array<PurchaseOrderLineItems$.Outbound> | undefined;
        notes?: string | undefined;
        subtotal?: number | undefined;
        taxes?: number | undefined;
        shippingCosts?: number | undefined;
        total?: number | undefined;
        currency?: Currency | undefined;
        paymentTerms?: string | undefined;
        attachments?: Array<Attachments$.Outbound> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PurchaseOrders> = z
        .object({
            id: z.string().optional(),
            orderNumber: z.string().optional(),
            status: OrderStatus$.optional(),
            orderDate: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            accountId: z.string().optional(),
            expectedDeliveryDate: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            vendor: Vendors$?.outboundSchema.optional(),
            shipTo: Addresses$?.outboundSchema.optional(),
            billTo: Addresses$?.outboundSchema.optional(),
            lineItems: z.array(PurchaseOrderLineItems$?.outboundSchema).optional(),
            notes: z.string().optional(),
            subtotal: z.number().optional(),
            taxes: z.number().optional(),
            shippingCosts: z.number().optional(),
            total: z.number().optional(),
            currency: Currency$.optional(),
            paymentTerms: z.string().optional(),
            attachments: z.array(Attachments$?.outboundSchema).optional(),
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
                ...(v.orderNumber === undefined ? null : { orderNumber: v.orderNumber }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.orderDate === undefined ? null : { orderDate: v.orderDate }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                ...(v.expectedDeliveryDate === undefined
                    ? null
                    : { expectedDeliveryDate: v.expectedDeliveryDate }),
                ...(v.vendor === undefined ? null : { vendor: v.vendor }),
                ...(v.shipTo === undefined ? null : { shipTo: v.shipTo }),
                ...(v.billTo === undefined ? null : { billTo: v.billTo }),
                ...(v.lineItems === undefined ? null : { lineItems: v.lineItems }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.subtotal === undefined ? null : { subtotal: v.subtotal }),
                ...(v.taxes === undefined ? null : { taxes: v.taxes }),
                ...(v.shippingCosts === undefined ? null : { shippingCosts: v.shippingCosts }),
                ...(v.total === undefined ? null : { total: v.total }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.paymentTerms === undefined ? null : { paymentTerms: v.paymentTerms }),
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}
