/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum PaymentMethodsType {
    CreditCard = "CreditCard",
    PayPal = "PayPal",
    BankTransfer = "BankTransfer",
    CryptoCurrency = "CryptoCurrency",
    Cash = "Cash",
}

export type PaymentMethods = {
    id?: string | undefined;
    type?: PaymentMethodsType | undefined;
    details?: string | undefined;
    isDefault?: boolean | undefined;
};

/** @internal */
export const PaymentMethodsType$ = z.nativeEnum(PaymentMethodsType);

/** @internal */
export namespace PaymentMethods$ {
    export type Inbound = {
        id?: string | undefined;
        type?: PaymentMethodsType | undefined;
        details?: string | undefined;
        isDefault?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<PaymentMethods, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            type: PaymentMethodsType$.optional(),
            details: z.string().optional(),
            isDefault: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.details === undefined ? null : { details: v.details }),
                ...(v.isDefault === undefined ? null : { isDefault: v.isDefault }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        type?: PaymentMethodsType | undefined;
        details?: string | undefined;
        isDefault?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethods> = z
        .object({
            id: z.string().optional(),
            type: PaymentMethodsType$.optional(),
            details: z.string().optional(),
            isDefault: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.details === undefined ? null : { details: v.details }),
                ...(v.isDefault === undefined ? null : { isDefault: v.isDefault }),
            };
        });
}
