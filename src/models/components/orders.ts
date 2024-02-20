/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Addresses, Addresses$ } from "./addresses";
import { Currency, Currency$ } from "./currency";
import { Items, Items$ } from "./items";
import { OrderStatus, OrderStatus$ } from "./orderstatus";
import { PaymentStatus, PaymentStatus$ } from "./paymentstatus";
import { z } from "zod";

export type Orders = {
    id?: string | undefined;
    customerID?: string | undefined;
    orderNumber?: string | undefined;
    status?: OrderStatus | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    total?: number | undefined;
    subTotal?: number | undefined;
    tax?: number | undefined;
    shippingCost?: number | undefined;
    currency?: Currency | undefined;
    paymentStatus?: PaymentStatus | undefined;
    paymentMethods?: Array<string> | undefined;
    shippingMethod?: string | undefined;
    shippingAddress?: Addresses | undefined;
    billingAddress?: Addresses | undefined;
    note?: string | undefined;
    discounts?: Array<number> | undefined;
    trackingInfo?: string | undefined;
    items?: Array<Items> | undefined;
    tags?: Array<string> | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace Orders$ {
    export type Inbound = {
        id?: string | undefined;
        customerID?: string | undefined;
        orderNumber?: string | undefined;
        status?: OrderStatus | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        total?: number | undefined;
        subTotal?: number | undefined;
        tax?: number | undefined;
        shippingCost?: number | undefined;
        currency?: Currency | undefined;
        paymentStatus?: PaymentStatus | undefined;
        paymentMethods?: Array<string> | undefined;
        shippingMethod?: string | undefined;
        shippingAddress?: Addresses$.Inbound | undefined;
        billingAddress?: Addresses$.Inbound | undefined;
        note?: string | undefined;
        discounts?: Array<number> | undefined;
        trackingInfo?: string | undefined;
        items?: Array<Items$.Inbound> | undefined;
        tags?: Array<string> | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Orders, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            customerID: z.string().optional(),
            orderNumber: z.string().optional(),
            status: OrderStatus$.optional(),
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
            total: z.number().optional(),
            subTotal: z.number().optional(),
            tax: z.number().optional(),
            shippingCost: z.number().optional(),
            currency: Currency$.optional(),
            paymentStatus: PaymentStatus$.optional(),
            paymentMethods: z.array(z.string()).optional(),
            shippingMethod: z.string().optional(),
            shippingAddress: Addresses$?.inboundSchema.optional(),
            billingAddress: Addresses$?.inboundSchema.optional(),
            note: z.string().optional(),
            discounts: z.array(z.number()).optional(),
            trackingInfo: z.string().optional(),
            items: z.array(Items$?.inboundSchema).optional(),
            tags: z.array(z.string()).optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.customerID === undefined ? null : { customerID: v.customerID }),
                ...(v.orderNumber === undefined ? null : { orderNumber: v.orderNumber }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.total === undefined ? null : { total: v.total }),
                ...(v.subTotal === undefined ? null : { subTotal: v.subTotal }),
                ...(v.tax === undefined ? null : { tax: v.tax }),
                ...(v.shippingCost === undefined ? null : { shippingCost: v.shippingCost }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.paymentStatus === undefined ? null : { paymentStatus: v.paymentStatus }),
                ...(v.paymentMethods === undefined ? null : { paymentMethods: v.paymentMethods }),
                ...(v.shippingMethod === undefined ? null : { shippingMethod: v.shippingMethod }),
                ...(v.shippingAddress === undefined
                    ? null
                    : { shippingAddress: v.shippingAddress }),
                ...(v.billingAddress === undefined ? null : { billingAddress: v.billingAddress }),
                ...(v.note === undefined ? null : { note: v.note }),
                ...(v.discounts === undefined ? null : { discounts: v.discounts }),
                ...(v.trackingInfo === undefined ? null : { trackingInfo: v.trackingInfo }),
                ...(v.items === undefined ? null : { items: v.items }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        customerID?: string | undefined;
        orderNumber?: string | undefined;
        status?: OrderStatus | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        total?: number | undefined;
        subTotal?: number | undefined;
        tax?: number | undefined;
        shippingCost?: number | undefined;
        currency?: Currency | undefined;
        paymentStatus?: PaymentStatus | undefined;
        paymentMethods?: Array<string> | undefined;
        shippingMethod?: string | undefined;
        shippingAddress?: Addresses$.Outbound | undefined;
        billingAddress?: Addresses$.Outbound | undefined;
        note?: string | undefined;
        discounts?: Array<number> | undefined;
        trackingInfo?: string | undefined;
        items?: Array<Items$.Outbound> | undefined;
        tags?: Array<string> | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Orders> = z
        .object({
            id: z.string().optional(),
            customerID: z.string().optional(),
            orderNumber: z.string().optional(),
            status: OrderStatus$.optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            total: z.number().optional(),
            subTotal: z.number().optional(),
            tax: z.number().optional(),
            shippingCost: z.number().optional(),
            currency: Currency$.optional(),
            paymentStatus: PaymentStatus$.optional(),
            paymentMethods: z.array(z.string()).optional(),
            shippingMethod: z.string().optional(),
            shippingAddress: Addresses$?.outboundSchema.optional(),
            billingAddress: Addresses$?.outboundSchema.optional(),
            note: z.string().optional(),
            discounts: z.array(z.number()).optional(),
            trackingInfo: z.string().optional(),
            items: z.array(Items$?.outboundSchema).optional(),
            tags: z.array(z.string()).optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.customerID === undefined ? null : { customerID: v.customerID }),
                ...(v.orderNumber === undefined ? null : { orderNumber: v.orderNumber }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.total === undefined ? null : { total: v.total }),
                ...(v.subTotal === undefined ? null : { subTotal: v.subTotal }),
                ...(v.tax === undefined ? null : { tax: v.tax }),
                ...(v.shippingCost === undefined ? null : { shippingCost: v.shippingCost }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.paymentStatus === undefined ? null : { paymentStatus: v.paymentStatus }),
                ...(v.paymentMethods === undefined ? null : { paymentMethods: v.paymentMethods }),
                ...(v.shippingMethod === undefined ? null : { shippingMethod: v.shippingMethod }),
                ...(v.shippingAddress === undefined
                    ? null
                    : { shippingAddress: v.shippingAddress }),
                ...(v.billingAddress === undefined ? null : { billingAddress: v.billingAddress }),
                ...(v.note === undefined ? null : { note: v.note }),
                ...(v.discounts === undefined ? null : { discounts: v.discounts }),
                ...(v.trackingInfo === undefined ? null : { trackingInfo: v.trackingInfo }),
                ...(v.items === undefined ? null : { items: v.items }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}
